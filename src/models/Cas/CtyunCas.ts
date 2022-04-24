import { BaseCas } from './BaseCas'

export class CtyunCas extends BaseCas {
  public containerId = 'ctcloud-console'
  public casLayout = CtcloudLayout

  constructor(container) {
    super(container)
    this.setContainerId()
  }
}
