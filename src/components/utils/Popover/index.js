import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '../../atoms/Button';
import UserMenu from '../../organisms/UserMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button variant="round" onClick={handleClick}>
        <FontAwesomeIcon icon={faUser} size="2x" color="white" />
      </Button>
      <Popover
        sx={{
          '.MuiPopover-paper': {
            backgroundColor: 'transparent',
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <UserMenu />
      </Popover>
    </div>
  );
};

export default BasicPopover;
