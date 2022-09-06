import { Container, Form } from "./styles";

import {Header} from "../../components/Header"
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar notas</h1>
            <a href="/">
              Voltar
            </a>
          </header>

          <Input 
            placeholder="Titulo"
            type="text"
          />
          <TextArea placeholder="Observações"/>

          <Section
            title="Links Uteis"
          >
            <NoteItem 
              value="https://rocketseat.com"
            />
            <NoteItem 
            isNew
            placeholder='Novo Link'
            />
          </Section>
        </Form>
      </main>
    </Container>
  )
}