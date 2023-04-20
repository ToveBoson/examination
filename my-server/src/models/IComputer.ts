export interface IComputer {
  id: number;
  name: string;
  description: string;
  manufacturer: string;
  price: number;
  processor: string;
}

export interface ICreateComputer {
  data: IComputer;
}

export interface IUpdateComputer {
  data: IComputer;
}
