import { useState } from "react";
import { Container, Form } from "./styles";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import {Header} from "../../components/Header"
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Sections";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import {ButtonText } from "../../components/ButtonText"

export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const[newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  
  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("");
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted)) 
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }


  async function handleNewNote() {
    if(!title){
      return alert('Digite o título da nota')
    }
    if(newLink) {
      return alert('Você deixou uma link no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio')
    }
    if(newTag) {
      return alert('Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio')
    }

    if(links.length === 0){
      return alert('Adicione pelo menos um link.')
    }

    if(tags.length === 0){
      return alert('Adicione pelo menos uma tag.')
    }


    await api.post('/notes', {
      title,
      description,
      tags,
      links
    });

    alert('Nota cadastrada com sucesso!')
    navigate(-1)
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar notas</h1>
            <ButtonText 
              title="voltar"
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Titulo"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links Uteis" >
            {
              links.map((link, index) => {
                return(
                  <NoteItem 
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                    key={String(index)}
                  />
                )
              })
            }
            <NoteItem  
              isNew 
              placeholder='Novo Link'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />

          </Section>
          <Section title='Marcadores'>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    value={tag}
                    key={String(index)}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder='Novo marcador'
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar" 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}