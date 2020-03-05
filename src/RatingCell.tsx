import React from 'react';
import { CellProps, WithClassname } from '@jsonforms/core';
import { withJsonFormsCellProps } from '@jsonforms/react';
import { Rating } from './Rating';

export const RatingCell = (props: CellProps & WithClassname) => {
  const { data, path, handleChange } = props;
  return (
    <Rating
      value={data}
      onClick={(ev: any) => handleChange(path, Number(ev.value))}
    />
  );
};

export default withJsonFormsCellProps(RatingCell);
