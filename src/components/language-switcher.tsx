import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { useLanguage } from './providers/language-provider';

const flagStyle = {
  width: '28px',
  height: '21px',
  borderRadius: '4px',
  objectFit: 'cover',
  border: '1px solid rgba(128, 128, 128, 0.2)',
} as const;

const menuFlagStyle = {
  ...flagStyle,
  width: '24px',
  height: '18px',
};

export function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { language, setLanguage } = useLanguage();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLang: 'th' | 'en') => {
    console.log('Changing language to:', newLang);
    setLanguage(newLang);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <ReactCountryFlag
          countryCode={language === 'th' ? 'TH' : 'GB'}
          svg
          style={flagStyle}
        />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        <MenuItem onClick={() => handleLanguageChange('th')} sx={{ gap: 1 }}>
          <ReactCountryFlag countryCode="TH" svg style={menuFlagStyle} />
          ไทย
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('en')} sx={{ gap: 1 }}>
          <ReactCountryFlag countryCode="GB" svg style={menuFlagStyle} />
          English
        </MenuItem>
      </Menu>
    </>
  );
}
