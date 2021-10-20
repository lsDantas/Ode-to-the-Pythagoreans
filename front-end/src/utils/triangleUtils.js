const parseTriangleSides = (base, height) => {
  const parsedBase = Number(base);
  const parsedHeight = Number(height);

  return [parsedBase, parsedHeight];
};

const areLengthsValid = (base, height) => {
  const isLengthValid = (length) => !Number.isNaN(length) && length > 0;

  return isLengthValid(base) && isLengthValid(height);
};

const triangleUtils = { areLengthsValid, parseTriangleSides };
export default triangleUtils;
