import React from "react";
import Link from "next/link";
import Image from "next/image";

import MonotoniaImg from "../../public/assets/images/monotonia.jpg";
import ChaveMestra from "../../public/assets/images/Amstad1.png";

import documentation from "../../public/assets/images/document.png";
import prototype from "../../public/assets/images/noun-prototype-6442833_edited.png";
import leadership from "../../public/assets/images/noun-leadership-6806468_edited.png";
import ideation from "../../public/assets/images/noun-ideation-6418887_edited.png";

import * as Styles from "./Styles";

const Hero = () => (
  <>
    <Styles.Header>
      <div>
        <h2>Gabriel Lima</h2>
        <div>
          <li>
            <Link href="/">Resume</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">About me</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </div>
      </div>
    </Styles.Header>
    <Styles.MainSection>
      <h1>Hi there! I'm Gabriel Lima de Jesus</h1>
      <h2>Game designer and Unreal Engine programmer at GDH Studio.</h2>

      <span>
        <Styles.MonotoniaSection>
          <div>
            <Image src={MonotoniaImg} alt="monotonia" width={800}></Image>
            <h1>Game designer and Unreal Engine programmer </h1>
            <br />
            <h2>
              Monotonia: First Contact is a Fordist work simulator where the
              player needs to find a way to break the repetitive cycle. In this
              project, I worked as both game designer and programmer with Unreal
              Engine 4.
            </h2>
          </div>
        </Styles.MonotoniaSection>

        <Styles.ChaveMestraSection>
          <div>
            <Image src={ChaveMestra} alt="chaveMestra" width={800}></Image>
            <h1>Game designer </h1>
            <h2>
              Monotonia: First Contact is a Fordist work simulator where the
              player needs to find a way to break the repetitive cycle. In this
              project, I worked as both game designer and programmer with Unreal
              Engine 4.
            </h2>
          </div>
        </Styles.ChaveMestraSection>
      </span>
    </Styles.MainSection>
    <Styles.SkillsSection>
      <h1>My skills</h1>
      <div>
        <span>
          <Image src={documentation} alt="documentation" width={160} />
          <h2>Documentation</h2>
        </span>
        <span>
          <Image src={prototype} alt="prototype" width={240} />
          <h2>Prototype</h2>
        </span>
        <span>
          <Image src={leadership} alt="leadership" width={240} />
          <h2>Leadership</h2>
        </span>
        <span>
          <Image src={ideation} alt="ideation" width={240} />
          <h2>Ideation</h2>
        </span>
      </div>
    </Styles.SkillsSection>
  </>
);

export default Hero;
