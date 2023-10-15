import {
  Html,
  Head,
  Body,
  Preview,
  Section,
  Heading,
  Text,
  Hr,
  Button,
  Link,
  Container,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

import React from "react";
type props = {
  name: string;
  email: string;
  message: string;
};
export function EmailTemplate(props: props) {
  return (
    <Html>
      <Head />
      <Preview>
        You have a new Message from {props.name} - {props.email}
      </Preview>
      {/* <Tailwind> */}
      <Container>
        <Body>
          <Section>
            <Heading>You have recieved a new message from {props.name}</Heading>
            <Text>Message : {props.message}</Text>
            <Hr />
            <Text>Senders Email : {props.email}</Text>
          </Section>
        </Body>
      </Container>
      {/* </Tailwind> */}
    </Html>
  );
}
