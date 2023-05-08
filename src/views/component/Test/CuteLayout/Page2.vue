<template>
  <el-card>
    <h1>测试页面2</h1>
    <router-link :to="{ path: '/cluster/sub-1', query: { clusterId: '123', clusterName: 'test' } }">
      集群子页面
    </router-link>
  </el-card>
</template>
