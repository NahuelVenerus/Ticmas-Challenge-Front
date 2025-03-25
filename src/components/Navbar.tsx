import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/slices/userSlice";
import LogoutModal from "./LogoutModal";
import { 
  Avatar, 
  NavbarContainer, 
  UserInfo, 
  Logo, 
  UserName, 
  DropdownMenu, 
  DropdownItem 
} from "../styles/Navbar.styles";
import { useRouter } from "next/navigation";

interface NavbarProps {
  name?: string;
  picture?: string;
}

const Navbar = ({ name = "Guest", picture }: NavbarProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    dispatch(logoutUser());
    setModalOpen(false);
    router.push('/login')
  };

  return (
    <>
      <NavbarContainer>
        <Logo>Planify</Logo>
        <UserInfo 
          ref={dropdownRef}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <UserName>{name}</UserName>
          <Avatar style={{ backgroundImage: `url(${picture})` }} />
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem>Perfil</DropdownItem>
              <DropdownItem onClick={() => setModalOpen(true)}>Cerrar sesión</DropdownItem>
            </DropdownMenu>
          )}
        </UserInfo>
      </NavbarContainer>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;
