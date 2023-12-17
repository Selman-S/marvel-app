import React from 'react'

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
const loadingSpinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="secondary" />
    </Box>
  )
}

export default loadingSpinner