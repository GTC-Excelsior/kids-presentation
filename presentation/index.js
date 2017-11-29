// Import React
import React from "react";
import Typist from "react-typist";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#0F83BC",
  secondary: "black",
  tertiary: "white"
}, {
  primary: "Varela Round",
  secondary: "Varela Round",
  tertiary: "Varela Round"
});

const cursor = { show: false, blink: true, element: "|", hideWhenDone: false, hideWhenDoneDelay: 1000 };

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade", "slide"]} transitionDuration={750} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            > gift-the-code-2017
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            team excelsior
          </Text>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="tertiary" progressColor="primary">
          <Heading size={ 4 } textColor="primary">Our Team</Heading>
          <Terminal title="gtc-excelsior: ~" output={[
            <Typist cursor={cursor}>
              <div>Meagan Blais</div>
              <div>Ian Duke</div>
              <div>Val Heimpel</div>
              <div>Chris Heimpel</div>
              <div>Saj Bandaranayake</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary" progressColor="primary">
          <Heading size={3} textColor="primary">Lessons Learned</Heading>
          <List>
            <ListItem>List Item 1</ListItem>
            <ListItem>List Item 2</ListItem>
            <ListItem>List Item 3</ListItem>
            <ListItem>List Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Don't bet the farm</Quote>
            <Cite>Someone wiser than me</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">Thanks!</Heading>
          <Cite>Meagan & Ian</Cite>
        </Slide>

      </Deck>
    );
  }
}
