import { Button } from "../../components/Button";
import { Container } from "./styles";

export function Details(){
  return(
    <Container>
      <h1>Hello word!</h1>
      <Button title="login" login/>
      <Button title="cadastre-se" />
    </Container>
  )
}