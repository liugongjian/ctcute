import { NavigationGuard } from 'vue-router'
import { AxiosRequestConfig } from 'axios'

interface Workspace {
  setWorkspaceId: (workspaceId: string) => void
  routerBeforeEach: NavigationGuard
  requestInterceptor: (userId: string | number) => (config: AxiosRequestConfig) => AxiosRequestConfig
}

export declare const IamWorkspace: Workspace
export declare const CtyunWorkspace: Workspace
