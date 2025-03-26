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
  overflox: hidden;
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
  border-radius: 0 0 0 35px;
  width: 11vw;
  height: 9vh;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const UserName = styled.span`
  margin-right: 25px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background: #3498db;
  border-radius: 0 0 0 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 9vw;
  display: flex;
  flex-direction: column;
  overflow: show;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    border-radius: 0 0 0 30px;
    transform: scale(1.1);
  }
`;
