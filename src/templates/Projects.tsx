import React from "react";
import Image from "next/image";
import monotonia from "../../public/assets/images/monotonia.jpg";
import dellBlackout from "../../public/assets/images/dellblackout-capa.webp";
import enigma from "../../public/assets/images/Enigma da essência capa.png";
import segredoCoop from "../../public/assets/images/Amstad2.png";
import solarium from "../../public/assets/images/solarium-capa.webp";
import falciforme from "../../public/assets/images/monotonia.jpg";

import * as Styles from "./Styles";

const Projects = () => (
  <>
    <Styles.ProjectsSection>
      <h1>PROJECTS</h1>
      <div>
        <Image src={monotonia} alt="monotonia" width={550} height={320} />
        <Image src={dellBlackout} alt="Better Stack" width={550} height={320} />
        <Image
          src={enigma}
          alt="React SaaS Boilerplate Next.js"
          width={550}
          height={320}
        />
        <Image
          src={segredoCoop}
          alt="Clerk – Authentication & User Management for Next.js"
          width={550}
          height={320}
        />

        <Image
          src={solarium}
          alt="SQLite Developer Experience"
          width={550}
          height={320}
        />
        <Image src={falciforme} alt="Crowdin" width={550} height={320} />
      </div>
    </Styles.ProjectsSection>
  </>
);

export { Projects };
