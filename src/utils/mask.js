import IMask from "imask";
export const Mask = (mask, value) => {
  const createMask = IMask.createMask({ mask });
  return createMask.resolve(value);
};
