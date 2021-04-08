import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { DiffEditor,useMonaco } from "@monaco-editor/react";
import {monaco} from "monaco-editor"
import arr from "./array.js";
import { Container, Row, Col} from 'react-bootstrap';
const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function App() {
  const monaco = useMonaco();
  const classes = useStyles();
  const diffEditorRef = useRef(null);
  const [expanded, setExpanded] = React.useState([]);
  var [name, setName] = useState("Choose a file");
  var [code,setCode] = useState("Paste Code Here");

  useEffect(() => {
    setCode("Paste Code here");
  }, [code]);

  function handleEditorMount(monaco) {
    diffEditorRef.current = monaco;
  }
  function handleEditorWillMount(monaco) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    if(nodeIds==="0"){
      setCode("Resetter");
    }
    if(!isLetter(nodeIds)){
      setName(arr[nodeIds]);
    }
  };

  return (
    <>
      <Container fluid style={{backgroundColor: "rgb(22,22,22)", color: "white", paddingBottom: "30px"}}>
        <Row style={{paddingBottom: "20px", paddingTop: "15px"}}>
          <Col sm={4} style={{display: "flex", alignItems: "center"}}>
            <img src="iste-icon.png" alt="" style={{width: "69px"}}></img>
          </Col>
          <Col sm={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h1 style={{display: "inline"}}>Doc Diff</h1>
          </Col>
          <Col sm={4} style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
            <img src="horizon-logo.png" alt="" style={{width: "65px"}}></img>
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
          <TreeItem nodeId="0" label="Reset"/>
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
            <TreeItem nodeId="7" label="App.scss"/>
            <TreeItem nodeId="8" label="colors.scss"/>
          </TreeItem>
          <TreeItem nodeId="d" label="Backend">
            <TreeItem nodeId="e" label="models">
              <TreeItem nodeId="9" label="song.js"/>
            </TreeItem>
            <TreeItem nodeId="f" label="routes">
              <TreeItem nodeId="10" label="api.js"/>
            </TreeItem>
            <TreeItem nodeId="11" label="index.js"/>
          </TreeItem>
        </TreeView>
          
          </Col>
          <Col>
            <DiffEditor            
              height="80vh"
              defaultLanguage="javascript"
              original={name}
              modified={code}
              onMount={handleEditorMount}
              theme='vs-dark'
              // theme='vs-dark'{{ 
              //   base: 'vs-dark', // can also be vs-dark or hc-black
              //   inherit: true, // can also be false to completely replace the builtin rules
              //   rules: [
              //     { token: 'comment', foreground: 'ffa500', fontStyle: 'italic underline' },
              //     { token: 'comment.js', foreground: '008800', fontStyle: 'bold' },
              //     { token: 'comment.css', foreground: '0000ff' } // will inherit fontStyle from `comment` above
              //   ]
              // }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
