import React, { useRef,useState } from "react";
import { DiffEditor } from "@monaco-editor/react";
import arr from "./array.js";
console.log(arr);
function App() {
  const diffEditorRef = useRef(null);
  var [name,setName] = useState("Choose a file");
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
      <label for="files">Choose a file: </label>
      <select name="files" id="files" onChange={selectFiles}>
        <option value="0" selected disabled hidden>Choose a file</option>
        <option value="1">App.js</option>
        <option value="2">Card Component</option>
        <option value="3">bla bla</option>
      </select>
      <DiffEditor
        height="90vh"
        defaultLanguage="javascript"
        original= {name}
        modified="// the modified code"
        onMount={handleEditorMount}
      />
    </>
  );
}

export default App;
