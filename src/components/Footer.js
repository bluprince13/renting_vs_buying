import styled from 'styled-components';
import { media } from '../style';

const Footer = styled.div`
    height: 15vh
    overflow-y: scroll

    ${media.tablet`
        height: 100%;
        overflow-y: auto
  `}
`;

export default Footer