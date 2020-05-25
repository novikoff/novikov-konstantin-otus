export interface ISettings {
  language: string;
  countWords: number;
  timerTime: number;
}
export interface IStorageWord {
  en: string;
  ru: string;
}
export interface IStorageArr extends Array<IStorageWord>{}

