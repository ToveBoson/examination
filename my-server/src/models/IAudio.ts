export interface IAudio {
  name: string;
  description: string;
  manufacturer: string;
  price: number;
  effect: number;
}

export interface ICreateAudio {
  data: IAudio;
}

export interface IUpdateAudio {
  data: IAudio;
}
