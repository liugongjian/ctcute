declare namespace SimpleForm {
  type Form = {
    name: string;
    remark: string;
    alertTarget: number;
    duration: number;
    notifyTarget: number;
    longTitle: string;
  }

  type Response = {
    id: number;
  }
}
