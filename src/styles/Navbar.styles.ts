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
  font-size: 2em;
  color: #3498db;
  margin: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background-color: #3498db;
  padding: 0.5rem 2rem;
  border-radius: 0 0 0 40px;
  width: 9vw;
  height: 7vh;
  position: absolute;
  top: 0;
  right: 0;
`;

export const UserName = styled.span`
  margin-right: 25px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;
