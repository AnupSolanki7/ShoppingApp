import { useState } from "react";
import "./../styles/code.css";
import Highlighter from "react-highlight-words";
import { AiFillCode } from "react-icons/ai";

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
        {/* <Highlighter
       
          highlightClassName="YourHighlightClass"
          highlightStyle={{backgroundColor:"transparent", color:"#00a1ff", zIndex:"5", position:"relative", fontWeight:"600",fontFamily:"monospace"}}
          searchWords={["const", "()", "=>"]}
          autoEscape={true}
          textToHighlight={textValue}
        /> */}
        <span className="code-textarea">
          {textValue.split("").map((e: any) => {
            if (e === "c") {
              return <span style={{ color: "red" }}>{e}</span>;
            } else {
              return (<span>{e}</span>)
            }
          })}
        </span>
      </div>
    </>
  );
};

export default CodeEditor;
