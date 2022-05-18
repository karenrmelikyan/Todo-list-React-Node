// Bootstrap components
import { Container, Tabs, Tab, Col, Row } from "react-bootstrap";

// App components
import Todos from './components/todos/Todos.mjs';
import Add from './components/add/Add.mjs';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <div align="center">
              <br></br>
                <h6>To Do List</h6>
              <br></br>
            </div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="add" title="Add">
                <Add />
              </Tab>
              <Tab eventKey="list" title="List">
                <Todos />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
