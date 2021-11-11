import React, { useState } from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function ProductRating(props) {
	const { disabled = false, defaultValue } = props;
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
		<Rate disabled={disabled} defaultValue={defaultValue} tooltips={desc} onChange={handleChange} value={value} />
  );
}
