import React from "react";
import lock from "./lock.png";
import { Container } from "./Styles";
import { Wrapper } from "./Styles";
import { Lock } from "./Styles";
import { Heading } from "./Styles";
import { InputField } from "./Styles";
import { Button } from "./Styles";


function SignIn() {
  return (
    <Container>
      <Wrapper>
        <Lock src={lock} alt={lock} />
        <Heading>Sign in</Heading>
        <InputField type="text" placeholder="Email Address " required />
        <InputField type="password" placeholder="Password " required />
        <Button
          onClick={() => {
            alert("clicked");
          }}
        >
          Sign in
        </Button>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
