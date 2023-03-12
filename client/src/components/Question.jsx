import React, { useState } from "react";
import { Button, Input, Typography, Box } from "@mui/material";
import { styled as MuiStyled } from "@mui/material/styles";
import styled from "styled-components";
import axios from "axios";

const QuestionBox = MuiStyled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const LargeInput = MuiStyled(Input)({
  fontSize: "3em",
  "&.MuiInput-underline:after": {
    borderColor: "rgba(0, 0, 0, 0.87)",
  },
});

const LargeButton = MuiStyled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.87)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.77)",
  },
});

const ButtonBox = MuiStyled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: 10,
});

const ResponseText = styled.span`
  padding: 8px 16px;
`;

function Question() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({ status: "" });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setData({ status: "" });
    axios
      .post("http://localhost:5000/api/calculate", { toSumUp: value })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
    setValue("");
  };

  return (
    <QuestionBox>
      <Typography variant="h2">Add any two integers together</Typography>
      <LargeInput
        value={value}
        placeholder="Ex: 4 + 16"
        onChange={handleChange}
      />
      <ButtonBox>
        <LargeButton variant="contained" onClick={handleClick}>
          OK
        </LargeButton>
        {data.status === "Good" && (
          <ResponseText>
            The answer to {data.question} is {data.answer}
          </ResponseText>
        )}
        {data.status === "Error" && (
          <ResponseText>
            Unfortunately, the equation {data.question} is in an incorrect
            format
          </ResponseText>
        )}
      </ButtonBox>
    </QuestionBox>
  );
}

export default Question;
