import { Container } from "./styles";

export function Button({title, login=false, ...rest}){
  return(
    <Container 
      type="button" 
      disabled={login}
      {...rest}
    >
      {login ? "Loading..." : title}
    </Container>
  )
}