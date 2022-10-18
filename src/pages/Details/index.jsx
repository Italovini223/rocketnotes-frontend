import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/section";
import { Tags } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";



export function Details(){
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  function handleBack(){
    navigate("/");
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  },[]);

  return(
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            { data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links && data.links.map(link => (

                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }   
                </Links>
             </Section>
            }

            { data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tags 
                      title={tag.name}
                      key={tag.id}
                    />
                  ))
                }
              </Section>
            }
            <Button title="Voltar" onClick={handleBack}/>
          </Content>
        </main>
      }
    </Container>
  )
}