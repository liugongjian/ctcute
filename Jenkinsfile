@Library('cdn-devops') _

def RELEASE_BUILD
String BUILD_RESULT = ""

pipeline {
    agent {
        label 'jnlp-slave'
    }
	options {
		buildDiscarder(logRotator(numToKeepStr: '10'))
		disableConcurrentBuilds()
		skipDefaultCheckout()
		timeout(time: 30, unit: 'MINUTES')
		gitLabConnection('gitlab')
	}
    environment {
        IMAGE_CREDENTIALS = "credential-harbor"
        // 镜像仓库地址
        IMAGE_REPOSITORY = "harbor.ctyuncdn.cn/soc/ipa-web-backend"

        //  定义名字
        DEPLOYMENT_NAME = "ipa-web-backend"
        SERVICE_TARGET_PORT = 8080          // 程序启用的端口号

        // 执行条件（通用）
        DEV_BRANCH = "develop" // 对应你的需求，“开发环境基于develop分支构建”
        QA_TAG = "v.*"         // 对应你的需求，测试环境基于tag(v.*)标签构建
        //QA_TAG = "v\\d+\\.\\d+.\\d+(-\\d+)?" // v1.0.0-01

        // 配置文件的路径
        DEPLOY_BASE_DIR = "deploy"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    container('tools') {
                        // checkout code
                        retry(2) { scmVars = checkout scm }
                        RELEASE_BUILD = scmVars.GIT_COMMIT
                        BUILD_RESULT = devops.updateBuildTasks(BUILD_RESULT,"Checkout OK...  √")
                        echo 'begin checkout...'
                        echo sh(returnStdout: true, script: "env")
                    }
                }
            }
        }
        stage('node_mpdules') {
            when {
                expression { BRANCH_NAME ==~ env.DEV_BRANCH || BRANCH_NAME ==~ env.QA_TAG }
            }
            steps {
                script {
                    container('tools') {
                        sh """
                        if [ ! -d "node_modules" ];then npm install -verbose --unsafe-perm=true --allow-root;fi
                        """
                    }
                }
            }
        }
        stage('npm-build') {
            when {
                expression { BRANCH_NAME ==~ env.DEV_BRANCH || BRANCH_NAME ==~ env.QA_TAG }
            }
            steps {
                script {
                    container('tools') {
                        retry(2) {
                            sh """
                            npm run build"""
                        }
                        BUILD_RESULT = devops.updateBuildTasks(BUILD_RESULT,"npm-build OK...√")
                    }
                }
            }
        }
        stage('CI'){
            failFast true
            parallel {
                stage('Unit Test') {
                    when {
                        expression { BRANCH_NAME ==~ env.DEV_BRANCH || BRANCH_NAME ==~ env.QA_TAG}
                    }
                    steps {
                        script {
                            container('tools') {
                                echo 'skip unit test'
                            }
                        }
                    }
                }
                stage('Code Scan') {
                    when {
                        expression { BRANCH_NAME ==~ env.DEV_BRANCH || BRANCH_NAME ==~ env.QA_TAG }
                    }
                    steps {
                        script {
                            container('tools') {
                                sh """
                                    sed -i 's#{{SONAR_PROJECT_NAME}}#'$DEPLOYMENT_NAME'#g' sonar-project.properties
                                """
                                echo 'skip'
                            }
                        }
                    }
                }
            }
        }

        stage('Build-Image') {
            when {
                expression { BRANCH_NAME ==~ env.DEV_BRANCH || TAG_NAME ==~ env.QA_TAG }
            }
            steps {
                script {
                    container('tools') {
                        devops.dockerBuild(
                            "Dockerfile", //Dockerfile
                            ".", // build context
                            IMAGE_REPOSITORY, // repo address
                            RELEASE_BUILD, // tag
                            IMAGE_CREDENTIALS, // credentials for pushing
                        ).start().push()
                    }
                }
            }
        }

        stage('Deploy') {
            when {
                expression { BRANCH_NAME ==~ env.DEV_BRANCH || TAG_NAME ==~ env.QA_TAG }
            }

            steps {
                // 替换占位，不能直接用环境变量获取
                sh """
                    sed -i 's#{{DEPLOYMENT_NAME}}#'$DEPLOYMENT_NAME'#g' ${DEPLOY_BASE_DIR}/deployment.yaml ${DEPLOY_BASE_DIR}/service.yaml
                    sed -i 's#{{SERVICE_TARGET_PORT}}#'$SERVICE_TARGET_PORT'#g' ${DEPLOY_BASE_DIR}/service.yaml
                """
                script {
                    container('tools') {
                        // create configmap and ingress
                        // devops.deploy("", "${DEPLOY_VIP_DIR}/ingress.yaml","",false).start()
                        dep = devops.deploy(
                            "${DEPLOY_BASE_DIR}", //k8s files dir
                            "${DEPLOY_BASE_DIR}/deployment.yaml",
                            RELEASE_BUILD,
                            false
                        )
                        dep.start()
                    }
                }
            }
        }
    }

    post {
        success {
            script {
                container('tools') {
                    devops.notificationSuccess(DEPLOYMENT_NAME, "流水线完成了", RELEASE_BUILD, "dingTalk")
                }
            }
        }
        failure {
            script {
                container('tools') {
                    devops.notificationFailed(DEPLOYMENT_NAME, "流水线失败了", RELEASE_BUILD, "dingTalk")
                }
            }
        }
    }

}
