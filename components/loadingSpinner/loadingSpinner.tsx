import React from 'react'

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
const LoadingSpinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress sx={{ color: '#ec1d24' }} />
    </Box>
  )
}

export default LoadingSpinner