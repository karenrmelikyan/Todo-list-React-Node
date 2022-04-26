// Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
              <Tab eventKey="todo" title="Todo">
                <Todos url=''/>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
