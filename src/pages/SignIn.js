import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import lock from "./lock.png";
import { Container } from "./Styles";
import { Wrapper } from "./Styles";
import { Lock } from "./Styles";
import { Heading } from "./Styles";
import { InputField } from "./Styles";
import { Button } from "./Styles";

function SignIn() {
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");
  // eslint-disable-next-line
  const [path, setPath] = useContext(UserContext);

  return (
    <Container>
      <Wrapper>
        <Lock src={lock} alt={lock} />
        <Heading>Sign in</Heading>
        <InputField
          type="text"
          onChange={(e) => {
            setUname(e.target.value);
          }}
          placeholder="Username "
          required
        />
        <InputField
          type="password"
          onChange={(e) => {
            setPword(e.target.value);
          }}
          placeholder="Password "
          required
        />
        <Button
          onClick={() => {
            console.log(uname, pword);
            setPath("auth-success");
          }}
        >
          Sign in
        </Button>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
