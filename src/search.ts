import { ISearchFormData, Place } from './Interfaces.js';


type errorOrPlaces = Error | Place[]


export function search(searchFormData: ISearchFormData, callback: (arg: errorOrPlaces) => errorOrPlaces): void {
  //Some search logic with ivent listeners or framework

  const check: number = Math.floor(Math.random() * 100);
  if (check <= 50) setTimeout(() => callback(new Error), 5000)
  if (check > 50) setTimeout(() => callback([]), 5000)


  console.log(searchFormData)
}