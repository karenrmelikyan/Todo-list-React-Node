// Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="add" title="Add">
                <Add />
              </Tab>
              <Tab eventKey="todos" title="Todos">
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
