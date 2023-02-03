import { Axios, AxiosRequestConfig } from 'axios'

declare module 'axios' {
  interface AxiosInstance extends Axios {
    (config: AxiosRequestConfig): Promise
    (url: string, config?: AxiosRequestConfig): Promise
  }
}
