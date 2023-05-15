import React from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';

function LaunchFilter({ filter, onChange }) {
  return (
    <FormControl>
      <InputLabel>Status</InputLabel>
      <Select name="status" value={filter.status} onChange={onChange}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="true">Success</MenuItem>
        <MenuItem value="false">Failure</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LaunchFilter;
