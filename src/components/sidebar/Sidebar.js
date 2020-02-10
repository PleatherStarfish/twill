import React from "react";
import { Container, Row } from "react-bootstrap";
import MakeModButtons from './MakeMod'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Container>
        <Row className="justify-content-md-center">
          <MakeModButtons />
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
