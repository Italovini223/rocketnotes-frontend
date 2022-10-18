import { useNavigate } from "react-router-dom";

import { RiShutDownLine } from "react-icons/ri";

import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout} from "./styles";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";

export function Header(){
  const {singOut, user} = useAuth();
  
  const navigate = useNavigate();

  function handleSingOut(){
    navigate("/")
    singOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  return(
    <Container>
      <Profile to="/profile">
        <img 
          src={avatarUrl}
          alt="Imagem do usuário" 
        />

        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSingOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}