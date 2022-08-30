export type RequestOptions = {
  url?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  withCredentials?: boolean
}

export interface RequestParams {
  user?: object
  requestOptions?: RequestOptions
  successCb?: (response: any) => void
  errorCb?: (response: any) => void
  finallyCb?: (response: any) => void
  dataHandler?: (response: any) => any
  instance?: any
}
