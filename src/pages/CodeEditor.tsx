import { useState } from "react";
import "./../styles/code.css";
import { AiFillCode } from "react-icons/ai";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeEditor = () => {
  const [textValue, setTextValue] = useState("");

  return (
    <>
      <div className="code-div">
        <div className="code-header">
          <div className="button-div">
            <span className="red"></span>
            <span className="blue"></span>
            <span className="green"></span>
          </div>
          <AiFillCode />
        </div>
        <textarea
          value={textValue}
          style={{
            position: "absolute",
            top: "16%",
            background: "transparent",
            border: "none",
            fontWeight: "100",
            color: "transparent",
          }}
          onChange={(e: any) => setTextValue(e.target.value)}
          className="code-textarea"
          name=""
          id=""
        ></textarea>
        <SyntaxHighlighter className="code-textarea" language="javascript" style={darcula}>
          {textValue}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeEditor;
