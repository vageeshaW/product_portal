export interface ILoader {
  color?: string;
  size?: LoaderSize;
}

export enum LoaderSize {
  SMALL = 30,
  LARGE = 40,
}
