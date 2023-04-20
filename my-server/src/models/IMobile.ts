export interface IMobile {
  name: string;
  description: string;
  manufacturer: string;
  price: number;
  screen_type: string;
}

export interface ICreateMobile {
  data: IMobile;
}

export interface IUpdateMobile {
  data: IMobile;
}
