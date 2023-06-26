import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./AboutStyle";
import face from "../../assets/face-head.png";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={face} alt="adem" />
      <InfoContainer>
        <h2>Jessica Guiles</h2>
        <h3>
          Jessica, one of the most famous chefs in England and the world, has
          become a well-known figure thanks to his restaurants and cookbooks.
          Adding sympathy, bright intelligence and sensitivity to the list of
          what it takes to be a cook, the famous chef also made a lot of noise
          with the campaigns he launched against unhealthy eating habits
          prevailing in schools in England and America. Known for his practical
          recipes, Jessica's book, "The Jessica's Kitchen", published in 2010,
          sold over one million copies in the UK alone.
        </h3>

        <h4>💬 You can ask me anything you want to know</h4>
      </InfoContainer>
      <IconContainer></IconContainer>
    </AboutContainer>
  );
};

export default About;
