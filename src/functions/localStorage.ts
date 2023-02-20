import { MyBeerType } from "../types";

export const getStoredMyBeers = (): Array<MyBeerType> => {
  const saved: string | null = localStorage.getItem("mybeers");
  if (saved === null) {
    return [];
  }
  return JSON.parse(saved);
};

export const AddBeerToLocalStorage = (
  allData: Array<MyBeerType>,
  data: MyBeerType
) => {
  localStorage.setItem("mybeers", JSON.stringify([...allData, data]));
};
