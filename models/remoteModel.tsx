export enum RemoteProgrammingMethod {
  diretto = 'diretto',
  autoapprendimento = 'autoapprendimento',
  agire_in_ricevente = 'agire in ricevente'
}

export class Remote {
  brand: string
  model: string
  programming_method: RemoteProgrammingMethod

  constructor(brand: string, model: string, programming_method: RemoteProgrammingMethod) {
    this.brand = brand
    this.model = model
    this.programming_method = programming_method
  }
}

export class RemotesPerBrand {
  brand: string
  remotes: Remote[]

  constructor(brand: string, remotes: Remote[]) {
    this.brand = brand
    this.remotes = remotes
  }
}