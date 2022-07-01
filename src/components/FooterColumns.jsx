import React from 'react'
import PropTypes  from 'prop-types'
import { Box } from '@mui/material';

const CustomFooterTotalComponents =  (props) => {
    return (
        <Box sx={{ padding:"10 pxs", display:"flex" }}> TOTAL: {props.total}
        </Box>
    )
}
CustomFooterTotalComponents.propTypes = {
    total: PropTypes.number
  };
  
export default CustomFooterTotalComponents;