import React from "react";

import Panel from "../../Panel";

import { Container, HashtagIcon } from "./styles";

const tags = ["mobile", "frontend", "programação", "desenvolvedorweb", "analistadesistemas"];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Fala Sobre:</span>

        {tags.map((item) => (
          <span className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
