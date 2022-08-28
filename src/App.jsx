import React from "react";
import styled from "styled-components";
import "./App.scss";
import back from "./back.png";

const SApp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1360px;
  height: 768px;

  background-color: black;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 1360px;
    height: 768px;
  }
  .wraper {
    display: flex;
    gap: 100px;
    .mast__text {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 50px;
      line-height: 59px;
      /* identical to box height */

      text-align: center;

      color: #1c2630;

      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    .first {
      position: absolute;
      width: 192px;
      height: 59px;
      left: 425px;
      top: 200px;
      transform: skew(-0.02turn, 0deg) scale(1.1);
    }
    .second {
      position: absolute;
      width: 156px;
      height: 59px;
      left: 757px;
      top: 200px;
      transform: skew(0.02turn, 0deg) scale(1.1);
    }
  }
`;

function App() {
  const text1 = `לא תרצח
לא תנאף
לא תגנוב
לא תענה
לא תחמד`;
  var arr1 = text1.split("");
  const text2 = `אנוכי ה'
לא יהיה
לא תשא
זכור את
כבד את`;
  var arr2 = text2.split("");

  return (
    <SApp className="App">
      <img src={back} alt="" />
      <div className="wraper">
        <p className="mast__text first">
          {arr1.map((e) => (
            <span>{e}</span>
          ))}
        </p>
        <p className="mast__text second">
          {arr2.map((e) => (
            <span>{e}</span>
          ))}
        </p>
      </div>
    </SApp>
  );
}

export default App;
