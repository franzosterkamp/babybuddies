import React from 'react';
import styled from '@emotion/styled';
import { ListButton, MapButton } from './HeaderButtons';
import MapIcon from '../../icons/Map';
import ListIcon from '../../icons/List';
import { useLocation } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  height: 50px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export default function HeaderNav() {
  const location = useLocation();
  return (
    <Header>
      <MapButton to="/" active={location.pathname === '/'}>
        <Wrapper>
          <MapIcon />
          <p>Map</p>
        </Wrapper>
      </MapButton>
      <ListButton to="/list" active={location.pathname === '/list'}>
        <Wrapper>
          <ListIcon />
          <p>Places</p>
        </Wrapper>
      </ListButton>
    </Header>
  );
}
