import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about() {
  return (
    <ContainerBlock
      title="About - Emmanuel Nnajiofor - Developer, Blogger, Tutor and Gamer"
      description="I'm a software developer that loves building products and web applications that impact millions of lives."
    >
      <AboutMe />
    </ContainerBlock>
  );
}
