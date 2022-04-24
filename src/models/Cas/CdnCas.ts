import { BaseCas } from './BaseCas'

export class CdnCas extends BaseCas {
  public containerId = 'iam-console-container'
  public casLayout = AlogicLayout

  constructor(container) {
    super(container)
    this.setContainerId()
  }

  public updateMenu() {
    console.log(this.getRoutes())
    const p = new Promise(resolve => {
      resolve({
        title: 'Test',
        list: [
          {
            name: '活动 A 产品控制台',
            href: ' /iam/ctyun/console',
            ucode: 'iam.portal',
            menuId: '0',
            items: [{
              name: '活动 A 产品控制台 1',
              href: ' /iam/ctyun/console',
              ucode: 'iam.portal-1'
            }]
          }
        ]
      })
    })
    this.casLayout.consoleContainer.updateMenu({
      mainMenuPromise: p
    })
  }
}
