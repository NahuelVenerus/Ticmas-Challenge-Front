import { useRef, useEffect } from "react";
import { ButtonContainer } from "../styles/Button.styles";
import { 
  CancelButton, 
  LogoutButton, 
  ModalContainer, 
  Overlay, 
  ModalTitle, 
  ModalText 
} from "../styles/LogoutModal.styles";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer ref={modalRef}>
        <ModalTitle>¿Cerrar sesión?</ModalTitle>
        <ModalText>¿Seguro que querés cerrar sesión?</ModalText>
        <ButtonContainer>
          <LogoutButton onClick={onConfirm}>Cerrar sesión</LogoutButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
}
