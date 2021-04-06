import React, { useRef, useState } from "react";
import { DiffEditor } from "@monaco-editor/react";
import arr from "./array.js";
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'
console.log(arr);
function App() {
  const diffEditorRef = useRef(null);
  var [name, setName] = useState("Choose a file");
  // var fileArr = ["Choose a file",arr[0],"Test3","Test4"];
  function handleEditorMount(editor) {
    diffEditorRef.current = editor;
  }

  let selectFiles = (e) => {
    setName(arr[e.target.value])
  }
  return (
    <>
      {/* <button onClick={showOriginalValue}>show original value</button>
      <button onClick={showModifiedValue}>show modified value</button> */}
      <Container fluid>
        <Row>
          <Col sm={2} className="pt-5">
            <label for="files" style={{fontSize: "20px", textAlign: "center", marginBottom: "12px"}}>File Explorer</label>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body><Button style={{border: "none", outline: "none", backgroundColor: "transparent", color: "black", padding: "0", margin: "0"}} onClick={selectFiles} value="1">Hello</Button></Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            {/* <select name="files" id="files" onChange={selectFiles}>
              <option value="0" selected disabled hidden>Choose a file</option>
              <option value="1">
                <select>
                  <option value="0">Test</option>
                  <option value="1">Test1</option>
                  <option value="2">Test2</option>
                </select>
              </option>
              <option value="2">Card Component</option>
              <option value="3">bla bla</option>
            </select> */}
          </Col>
          <Col>
            <DiffEditor
              height="90vh"
              defaultLanguage="javascript"
              original={name}
              modified="// the modified code"
              onMount={handleEditorMount}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
