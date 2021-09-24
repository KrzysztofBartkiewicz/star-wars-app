import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveColor } from '../../../redux/appReducer/selectors';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Link';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { StyledFooter, StyledLoveIcon } from './StyledFooter';

const Footer = () => {
  const activeColor = useSelector(getActiveColor);

  return (
    <StyledFooter>
      <Paragraph>
        Made with <StyledLoveIcon activeColor={activeColor} icon={faHeart} /> by
        Krzysztof Bartkiewicz
      </Paragraph>
      <Paragraph size="s">
        Design inspiration:{' '}
        <Link
          target="_blank"
          href="https://www.behance.net/gallery/89597721/Starwars-The-Rise-of-skywalkers"
        >
          jesus labarca
        </Link>
      </Paragraph>
    </StyledFooter>
  );
};

export default Footer;
