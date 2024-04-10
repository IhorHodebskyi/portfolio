import { Container } from "@mui/material";
import Projects from "../components/Projects";
import TechSkills from "../components/TechSkills";

export default function Home() {
  return (
    <Container>
      <TechSkills /> <Projects />
    </Container>
  );
}
