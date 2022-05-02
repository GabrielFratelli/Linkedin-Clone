import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/GabrielFratelli.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Gabriel Fratelli Cassiano</h1>
        <h2>Assistente de Sistemas Front-End Web na LionX | Estudante de Análise e Desenvolvimento de Sistemas na UNICID.</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">223</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">389</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
