export type SubmitParams = {
  first: Form
  second: Form
}

export type Form = {
  name: string
  remark: string
  disabledInput: string
  disabledSelect: string
  longTitle: string
  radio: string
  checkbox: string[]
  shortNumber: number
  price: number
  tag: string[]
}

export type Response = {
  id: number
}
