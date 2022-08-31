import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/section";
import { Tags } from "../../components/Tags";



export function Details(){
  return(
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tags title="express" />
        <Tags title="Node" />
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}