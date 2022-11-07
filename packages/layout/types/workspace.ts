import { Route } from 'vue-router'
import { AxiosRequestConfig } from 'axios'

interface Workspace {
  setWorkspaceId: (workspaceId: string) => void
  routerBeforeEach: (to: Route) => Route | undefined
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
}

export declare const IamWorkspace: Workspace
export declare const CtyunWorkspace: Workspace
