import { useState } from "react";
import { Container, Form } from "./styles";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import {Header} from "../../components/Header"
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const[newTag, setNewTag] = useState("");

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

  const navigate = useNavigate();

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


    await api.post('/notes', {
      title,
      description,
      tags,
      links
    });

    alert('Nota cadastrada com sucesso!')
    navigate("/")
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar notas</h1>
            <Link to="/" href="/">
              Voltar
            </Link>
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