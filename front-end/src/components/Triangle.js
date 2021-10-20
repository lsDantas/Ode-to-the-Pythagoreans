import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import triangleUtils from '../utils/triangleUtils';
import triangleAnimation from '../utils/triangleAnimation';

const NewTriangle = ({ triangleSides }) => {
  const { areLengthsValid, parseTriangleSides } = triangleUtils;
  const { calculateDisplaySize, calculateCoordinates } = triangleAnimation;

  // Max Size for Triangle in Both Directions
  const referenceLength = 100;

  // Previous Triangle for Animation Purposes
  const initialTriangle = { base: referenceLength, height: referenceLength };
  const [oldTriangle, setOldTriangle] = useState(initialTriangle);

  const [oldBaseDisplaySize, oldHeightDisplaySize] = calculateDisplaySize(
    oldTriangle.base,
    oldTriangle.height,
    referenceLength,
  );

  // Determine Display Size of New Triangle
  const { base, height } = triangleSides;
  const [parsedBase, parsedHeight] = parseTriangleSides(base, height);

  const [baseDisplaySize, heightDisplaySize] = areLengthsValid(parsedBase, parsedHeight)
    ? calculateDisplaySize(parsedBase, parsedHeight, referenceLength)
    : [referenceLength, referenceLength];

  // Triangle Point-Coordinate Transition
  const points = useSpring({
    from: {
      points: calculateCoordinates(oldBaseDisplaySize, oldHeightDisplaySize, referenceLength),
    },
    to: {
      points: calculateCoordinates(baseDisplaySize, heightDisplaySize, referenceLength),
    },
  });

  // Store Old Triangle if New is Valid
  const isBaseDifferent = (parsedBase !== oldTriangle.base);
  const isHeightDifferent = (parsedHeight !== oldTriangle.height);
  if (areLengthsValid(parsedBase, parsedHeight) && isBaseDifferent && isHeightDifferent) {
    setOldTriangle({ base: parsedBase, height: parsedHeight });
  }

  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMax">
      <defs>
        <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#9198E5"></stop>
          <stop offset="100%" stopColor="#E66465"></stop>
        </linearGradient>
      </defs>
      <animated.polygon
        fill="url(#Gradient1)"
        {...points}
      >
      </animated.polygon>
    </svg>
  );
};

export default NewTriangle;
