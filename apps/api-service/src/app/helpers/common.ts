export const isParamInteger = (param: string | number): boolean => {
  if (Number.isInteger(param)) {
    return true;
  }
  return false;
};
