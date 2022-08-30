import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/Italovini223.png" 
          alt="Imagem do usuário" 
        />

        <div>
          <span>Bem vindo,</span>
          <strong>Ítalo Vinícius</strong>
        </div>
      </Profile>
    </Container>
  );
}