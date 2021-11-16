import React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

import useIcons from '../../hooks/useIcons';

const SocialIcon = ({ href, name }) => {
  const Icon = useIcons(name);

  return (
    <Link href={href} key={name} target="_blank" rel="noopener noreferrer nofollow">
      <IconButton color="primary">
        <Icon>{`${name.toLowerCase()}`}</Icon>
      </IconButton>
    </Link>
  );
};

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SocialIcon;
