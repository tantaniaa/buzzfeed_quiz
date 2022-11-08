import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Picture>
        <img
          src={"onepiece.png"}
          alt="One Piece"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Picture>
      <Question>What's the title of this anime?</Question>
      <ChoiceList>
        <ChoiceRow>
          <ChoiceContainer>
            <Choice>a. Naruto</Choice>
          </ChoiceContainer>
          <ChoiceContainer>
            <Choice>c. One Piece</Choice>
          </ChoiceContainer>
        </ChoiceRow>
        <ChoiceRow>
          <ChoiceContainer>
            <Choice>b. One Shield</Choice>
          </ChoiceContainer>
          <ChoiceContainer>
            <Choice>d. Pirates King</Choice>
          </ChoiceContainer>
        </ChoiceRow>
      </ChoiceList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  font-family: "Courier New", Courier, monospace;
  background-color: cream;
  margin: 100px;
  height: 500px;
`;

const Picture = styled.div`
  width: 500px;
  margin: 10px auto;
  height: 300px;
`;

const Question = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  color: white;
`;

const Choice = styled.div`
  border: 2px solid white;
  width: 150px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ChoiceContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  text-align: center;
  justify-content: center;
  display: flex;
`;

const ChoiceRow = styled.div`
  display: flex;
`

const ChoiceList = styled.div``