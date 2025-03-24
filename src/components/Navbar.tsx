import { Avatar, NavbarContainer, UserInfo, Logo, UserName } from '../styles/Navbar.styles'

interface NavbarProps {
  name?: string;
  picture?: string;
}

const Navbar = ({ name = 'Guest', picture }: NavbarProps) => {
  return (
    <NavbarContainer>
      <Logo>Planify</Logo>
      <UserInfo>
        <UserName>{name}</UserName>
        <Avatar style={{ backgroundImage: `url(${picture})` }} />
      </UserInfo>
    </NavbarContainer>
  );
};

export default Navbar;
