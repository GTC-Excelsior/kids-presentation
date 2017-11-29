// Import React
import React from "react";
import Typist from "react-typist";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  team: require('../assets/team.jpg'),
};

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

        <Slide transition={[ "fade" ]} bgColor="tertiary" progressColor="rgb(38, 55, 114)">
          <Heading size={ 4 } textColor="primary">Our Team</Heading>
          <Image src={images.team}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" progressColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            > challenge
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} fill bold>
          Create a data-driven solution that will engage staff in performance-enhancing metrics.
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary" fill bold>
          an interactive chatbot to grade & benchmark counsellor performance.
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary" progressColor="primary">
          <Heading size={3} textColor="primary">Highlights</Heading>
          <List>
            <ListItem>Interactive!</ListItem>
            <ListItem>Easy to add more scripts</ListItem>
            <ListItem>Can be tailored based on KPI needs</ListItem>
            <ListItem>Compatibility with existing tools</ListItem>
          </List>
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>strengths-based approach</li>
              <li>elicits the client’s preferred future</li>
              <li>encourages the client to reflect on what they will take away from this session.</li>
            </ol>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary" bold>
            demo time
          </Heading>
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="tertiary" progressColor="primary">
          <Heading size={ 4 } textColor="primary">Technology Stack</Heading>
          <Terminal title="gtc-excelsior: ~" output={[
            <Typist cursor={cursor}>
              <div>Microsoft Botbuilder</div>
              <div>Express.js</div>
              <div>Chart.js</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={[ "fade" ]} bgColor="tertiary" progressColor="primary">
          <Heading size={ 4 } textColor="primary">Next Steps</Heading>
          <Terminal title="gtc-excelsior: ~" output={[
            <Typist cursor={cursor}>
              <div>Refine script(s)</div>
              <div>Allow free-form responses instead of multiple choice</div>
              <div>** Natural Language Processor</div>
              <div>Analyze existing chatlogs for ideal answers?</div>
            </Typist>]}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary" bold>
          Q & A
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">Thank you!</Heading>
          <Cite>Meagan, Ian & Chris</Cite>
        </Slide>

      </Deck>
    );
  }
}
