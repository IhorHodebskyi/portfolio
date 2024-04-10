import { Box, Container, Typography } from "@mui/material";
import { IconContext } from "react-icons";

import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
  SiFigma,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function TechSkills() {
  return (
    <IconContext.Provider
      value={{
        color: "#1e88e5",
        size: "4em",
        className: "global-class-name",
      }}
    >
      <Container
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="#1e88e5">
          TECH SKILLS
        </Typography>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 10,
            maxWidth: "75%",
          }}
        >
          <SiHtml5 title="HTML 5" />
          <SiCss3 title="CSS 3" />
          <SiSass title="SASS" />
          <SiJavascript title="Javascript" />
          <SiTypescript title="TypeScript" />
          <SiReact title="ReactJS" />
          <TbBrandNextjs title="Next.js" />
          <SiRedux title="Redux (Redux Toolkit)" />
          <SiReacthookform title="Formik" />
          <SiStyledcomponents title="Styled Components" />
          <SiNodedotjs title="Node.js" />
          <SiExpress title="Express" />
          <SiMongodb title="MongoDB" />
          <SiMysql title="MySQL" />

          <SiPostman title="API Testing with Postman" />
          <SiGit title="Git" />
          <SiFigma title="Figma" />
        </Box>{" "}
      </Container>
    </IconContext.Provider>
  );
}
