declare namespace SimpleTable {
  /**
   * 表格数据
   * 示例为服务器主机
   */
  type Host = {
    name: string;
    status: number;
    ip: string;
    cpu: string;
    memory: string;
    disk: string;
    health: string;
  }

  /* 过滤条件 */
  type Conditions = {
    host: string;
    name: string;
  }

  /* 获取表格请求类型 */
  type TableParams = RequestData.Pager & Conditions

  /* 返回列表 */
  type TableData = {
    list: Host[];
  } & ResponseData.Pager
}
