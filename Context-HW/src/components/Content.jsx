import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";

const Content = ({ part, setPart }) => {
  return (
    <Wrapper>
      <div className="content">
        <Left setPart={setPart} />
        <Right part={part} />
      </div>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 130px);
  .content {
    display: flex;
    height: 100%;
  }
`;
