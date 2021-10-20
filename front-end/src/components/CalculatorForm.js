import React from 'react';

// Bootstrap
import { Form } from 'react-bootstrap';

import triangleUtils from '../utils/triangleUtils';
import calculateHypothenuse from '../services/hypothenuse';

const CalculatorForm = ({
  triangleSides,
  setTriangleSides,
}) => {
  const handleLengthChange = async ({ target }) => {
    // Incorporate New Side Length
    const { name, value } = target;

    const userUpdatedSides = {
      ...triangleSides,
      [name]: value,
    };

    const { base, height } = userUpdatedSides;

    // Parse and Validate Lengths
    const { areLengthsValid, parseTriangleSides } = triangleUtils;
    const [parsedBase, parsedHeight] = parseTriangleSides(base, height);

    try {
      const invalidInputPlaceholder = 'It\'s all Greek to me.';
      const newHypothenuse = areLengthsValid(parsedBase, parsedHeight)
        ? await calculateHypothenuse(parsedBase, parsedHeight)
        : invalidInputPlaceholder;

      const updatedSides = {
        ...userUpdatedSides,
        hypothenuse: newHypothenuse,
      };
      setTriangleSides(updatedSides);
    } catch (error) {
      const networkErrorMessage = 'Network error.';
      const updatedSides = {
        ...userUpdatedSides,
        hypothenuse: networkErrorMessage,
      };
      setTriangleSides(updatedSides);
    }
  };

  return (
    <Form id='calculatorForm'>
      <Form.Group className='mb-3' controlId='calculatorFormBase'>
        <Form.Label className='triangle-side-labels'>Base</Form.Label>
        <Form.Control
          name='base'
          type='number'
          min='0'
          placeholder='Base'
          onChange={handleLengthChange}
          className='triangle-side-textbox'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='calculatorFormSide'>
        <Form.Label className='triangle-side-labels'>Height</Form.Label>
        <Form.Control
          name='height'
          type='number'
          min='0'
          placeholder='Height'
          onChange={handleLengthChange}
          className='triangle-side-textbox'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='calculatorFormHypothenuse'>
        <Form.Label className='triangle-side-labels'>Hypothenuse</Form.Label>
        <Form.Control
          name='hypothenuse'
          placeholder={triangleSides.hypothenuse}
          readOnly
          className='hypothenuse-textbox'
        />
      </Form.Group>
    </Form>
  );
};

export default CalculatorForm;
