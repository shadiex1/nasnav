export const joinStyles = (name, styleObjsArray, classesArray = []) =>
  styleObjsArray
    .filter((styleObj) => styleObj && styleObj[name])
    .map((styleObj) => styleObj[name])
    .concat(classesArray)
    .join(" ");
