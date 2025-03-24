// styles/Navbar.styles.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  z-index: 1000;
`;

export const Logo = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  margin: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const UserName = styled.span`
  margin-right: 1rem;
  font-size: 1rem;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;
