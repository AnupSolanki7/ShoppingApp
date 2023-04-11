import { useState } from "react";
import "./../styles/code.css";
import Highlighter from "react-highlight-words";

const CodeEditor = () => {
  const [textValue, setTextValue] = useState("");

  console.log(textValue);

  return (
    <>
      <div className="code-div">
        <div className="code-header">
          <div className="button-div">
            <span className="red"></span>
            <span className="blue"></span>
            <span className="green"></span>
          </div>
          Type your code here
        </div>
        <textarea
          value={textValue}
          style={{position:"absolute", top:"16%", background:"transparent", border:"none", fontWeight:"100"}}
          onChange={(e: any) => setTextValue(e.target.value)}
          className="code-textarea"
          name=""
          id=""
        ></textarea>
        <Highlighter
        className="code-textarea"
          highlightClassName="YourHighlightClass"
          highlightStyle={{backgroundColor:"transparent", color:"green", zIndex:"5", position:"relative", fontWeight:"600",fontFamily:"monospace"}}
          searchWords={["const", "()", "=>"]}
          autoEscape={true}
          textToHighlight={textValue}
        />
      </div>
    </>
  );
};

export default CodeEditor;
