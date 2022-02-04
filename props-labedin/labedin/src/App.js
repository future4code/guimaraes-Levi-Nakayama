import React from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardEnd from './components/CardEnd/CardEnd';
import Profile from './components/img/levi-foto.jpg';
import Marmotex from './components/img/marmotex.jpg';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= { Profile} 
          nome="Levi Shiniti Nakayama" 
          descricao="Bem vindo ao meu site pessoal, aqui tem a brincadeira de 5 curiosidades sobre mim, que tal descobrir essa nova trend???."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno email={"email@email.com"} />               
      </div>

      <div className="page-section-container">
        <CardEnd end={"Rua Faria Limers 7"} />               
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= { Marmotex}
          nome="Mamortex" 
          descricao="Foi a minha primeira experiência com startups e tudo que engloba. Conheci o universo de investidores, ventures e etc, participei de rodadas de negócios e até tivemos que criar contratos específicos para isso. Foi mto legal ser um co-founder e junto ver o quanto que cresceu. Vi como se usa um hack na vida real kkkk utilzei também todas as ferramentas mais legais como trello, klipfolio entre outras que esqueci. Fomos case de estudo em universidades e foi uma pena não termos concluído uma fusão com outra empresa mas não me arrependo de nada. Se ficou curioso podemos conversar e eu te conto melhor." 
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
