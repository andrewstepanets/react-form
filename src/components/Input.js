import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';

/* eslint-disable react/jsx-props-no-spreading */

export const Input = forwardRef((props, ref) => (
  <TextField
    variant="outlined"
    margin="normal"
    inputRef={ref}
    fullWidth
    {...props}
  />
));

export default Input;
