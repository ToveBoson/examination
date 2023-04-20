export interface ITelevision {
  name: string;
  description: string;
  manufacturer: string;
  price: number;
  screen_size: number;
}

export interface ICreateTelevision {
  data: ITelevision;
}

export interface IUpdateTelevision {
  data: ITelevision;
}
