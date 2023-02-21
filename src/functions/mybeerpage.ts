export const convertIngridentToString = (data: any) => {
  let finalString = "Ingridents :";
  Object.keys(data).map((item) => {
    finalString += "  " + item + " ( ";
    if (Array.isArray(data[item])) {
      data[item].map((itemIn: any, index: number) => {
        finalString +=
          itemIn["name"] + (data[item].length - 1 === index ? " ) ," : ",");
      });
    } else {
      finalString += data[item] + " )";
    }
  });
  return finalString;
};
