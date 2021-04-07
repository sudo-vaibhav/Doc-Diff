import React, { useRef, useState } from "react";
// import 'carbon-components/css/carbon-components.min.css';
// import { Accordion, AccordionItem } from 'carbon-components-react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { DiffEditor } from "@monaco-editor/react";
import arr from "./array.js";
import { Container, Row, Col} from 'react-bootstrap'
console.log(arr);
const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function App() {
  const classes = useStyles();
  const diffEditorRef = useRef(null);
  const [expanded, setExpanded] = React.useState([]);
  var [name, setName] = useState("Choose a file");

  function handleEditorMount(editor) {
    diffEditorRef.current = editor;
  }

  function isNumber(str) {
    return str.length === 1 && str.match(/[0-9]/i);
  }

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    if(isNumber(nodeIds)){
    setName(arr[nodeIds]);
    }
  };
  return (
    <>
      <Container fluid style={{backgroundColor: "rgb(22,22,22)", color: "white", paddingBottom: "30px"}}>
        <Row style={{paddingBottom: "20px", paddingTop: "15px"}}>
          <Col sm={4} style={{display: "flex", alignItems: "center"}}>
            <img src="iste-icon.png" style={{width: "69px"}}></img>
          </Col>
          <Col sm={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h1 style={{display: "inline"}}>Doc Diff</h1>
          </Col>
          <Col sm={4} style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
            <img src="horizon-logo.png" style={{width: "65px"}}></img>
          </Col>
        </Row>
        <Row>
          <Col sm={2} className="pt-3">
            <h5 style={{fontFamily: "Source Sans Pro"}}>File Explorer</h5>
              <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
        >
          <TreeItem nodeId="a" label="Frontend">
            <TreeItem nodeId="b" label="Components">
                <TreeItem nodeId="1" label="HOC.jsx" />
                <TreeItem nodeId="2" label="Home.jsx" />
                <TreeItem nodeId="c" label="MusicPlayer">
                  <TreeItem nodeId="3" label="MusicPlayer.jsx"/>
                  <TreeItem nodeId="4" label="MusicPlayer.scss"/>
                </TreeItem>
                <TreeItem nodeId="5" label="Search.jsx"/>  
            </TreeItem>
            <TreeItem nodeId="6" label="App.jsx"/>  
          </TreeItem>
          <TreeItem nodeId="d" label="Backend">
            <TreeItem nodeId="e" label="Material-UI">
              <TreeItem nodeId="f" label="src">
                <TreeItem nodeId="3" label="index.js" />
                <TreeItem nodeId="4" label="tree-view.js" />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeView>
          
          </Col>
          <Col>
            <DiffEditor            
              height="90vh"
              defaultLanguage="javascript"
              original={name}
              modified="Paste code here"
              onMount={handleEditorMount}
              theme="vs-dark"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
