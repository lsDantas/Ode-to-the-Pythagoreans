const calculateDisplaySize = (base, height, referenceLength) => {
  // Given Larger Base
  if (base >= height) {
    const heightBaseRatio = height / base;
    const complementLength = Math.floor(heightBaseRatio * referenceLength);

    return [referenceLength, complementLength];
  }

  // Given Larger Height
  const baseHeightRatio = base / height;
  const complementLength = Math.floor(baseHeightRatio * referenceLength);

  return [complementLength, referenceLength];
};

const calculateCorners = (base, height, referenceLength) => {
  const basePadding = Math.round((referenceLength - base) / 2);
  const heightPadding = Math.round((referenceLength - height) / 2);

  const topRight = {
    x: referenceLength - basePadding,
    y: heightPadding,
  };
  const bottomLeft = {
    x: basePadding,
    y: referenceLength - heightPadding,
  };
  const bottomRight = {
    x: referenceLength - basePadding,
    y: referenceLength - heightPadding,
  };

  const corners = {
    topRight,
    bottomLeft,
    bottomRight,
  };

  return corners;
};

const calculateCoordinates = (base, height, referenceLength) => {
  const { topRight, bottomLeft, bottomRight } = calculateCorners(base, height, referenceLength);

  const topRightCoordinate = `${topRight.x},${topRight.y}`;
  const bottomLeftCoordinate = `${bottomLeft.x},${bottomLeft.y}`;
  const bottomRightCoordinate = `${bottomRight.x},${bottomRight.y}`;

  const coordinates = `${topRightCoordinate} ${bottomLeftCoordinate} ${bottomRightCoordinate}`;

  return coordinates;
};

const triangleAnimation = { calculateDisplaySize, calculateCorners, calculateCoordinates };
export default triangleAnimation;
