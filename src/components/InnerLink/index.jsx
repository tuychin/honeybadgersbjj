import React from 'react';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/system';
import { Link } from 'gatsby';

const InnerLink = styled(
  (props) => <Link {...props} />,
)(({
  theme,
  color,
  underline,
}) => ({
  color: color || theme.palette.primary.main,
  textDecoration: underline === 'hover' || underline === 'none' ? 'none' : 'underline',
  textDecorationColor: alpha(theme.palette.primary.main, 0.4),
  '&:hover': {
    textDecoration: underline === 'none' ? 'none' : 'underline',
    textDecorationColor: 'inherit',
  },
}));

export default InnerLink;
