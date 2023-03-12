// import React, { useEffect, useState } from "react";
import React from "react";
import Question from "./components/Question";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const QuestionContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

function App() {
  return (
    <QuestionContainer>
      <Question />
    </QuestionContainer>
  );
}

export default App;
