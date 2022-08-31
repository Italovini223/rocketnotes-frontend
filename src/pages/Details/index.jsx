import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/section";
import { Tags } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";



export function Details(){
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, 
            sit asperiores? Possimus quod perferendis hic sequi voluptates aspernatur 
            iste eum eius ratione minus unde, at beatae facilis, explicabo ab 
            deserunt.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ipsa est 
            illo, sint aut mollitia alias omnis perspiciatis nihil architecto quas id 
            odit aliquam excepturi quos nulla. Excepturi, voluptas fugit?
          </p>
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
        </Content>
      </main>
    </Container>
  )
}