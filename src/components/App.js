import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import { ModuleListProvider } from "../context/providers/moduleListProvider";
import moduleListReducer from "../context/reducers/moduleListReducer";
import initialModuleList from "../context/state/initialModuleList";
import Sidebar from "./sidebar/Sidebar";
import Canvas from "./canvas/Canvas";

const App = () => {
  return (
    <ModuleListProvider initialState={initialModuleList} reducer={moduleListReducer}>
      <div className="mat">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={3} lg={2}>
              <Sidebar />
            </Col>
            <Col xs={12} sm={12} md={9} lg={10}>
              <Canvas />
            </Col>
          </Row>
        </Container>
      </div>
    </ModuleListProvider>
  );
};

export default App;
