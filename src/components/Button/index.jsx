import { Container } from "./styles";

export function Button({title, login=false}){
  return(
    <Container 
      typeof="button"
      disabled={login}
    >
      {login ? "Loading..." : title}
    </Container>
  )
}