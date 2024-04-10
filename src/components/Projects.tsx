import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ImgMobileStepper from "./ImgMobileStepper";
import { Container, Link, Typography } from "@mui/material";
import { PROJECTS_TAB } from "../utils";

const number = PROJECTS_TAB[0].title;
export default function Projects() {
  const [value, setValue] = React.useState(number);
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mb: 20,
        mt: 15,
      }}
    >
      {" "}
      <Typography variant="h3" color="#1e88e5">
        PROJECT
      </Typography>
      <Box
        sx={{
          mt: 3,
          maxWidth: 800,
        }}
      >
        <TabContext value={value}>
          <TabList centered={true} onChange={handleChange}>
            {PROJECTS_TAB.map((el) => (
              <Tab label={el.title} value={el.title} />
            ))}
          </TabList>
          {PROJECTS_TAB.map(({ title, images, description, link, role, project, techStack }) => (
            <TabPanel value={title}>
              <ImgMobileStepper images={images} />
              <Typography variant="h5" color="#1e88e5">
                Description:
              </Typography>
              <Typography color="#1e88e5">{description}</Typography>
              <Typography variant="h5" color="#1e88e5">
                Link:
              </Typography>
              <Typography color="#1e88e5">
                You may see the project on the
                <Link href={link} color="#7030A0">
                  Link
                </Link>
              </Typography>
              <Typography variant="h5" color="#1e88e5">
                Role:
              </Typography>
              <Typography color="#1e88e5">{role}</Typography>
              <Typography variant="h5" color="#1e88e5">
                Project:
              </Typography>
              <Typography color="#1e88e5">{project}</Typography>
              <Typography variant="h5" color="#1e88e5">
                Tech Stack:
              </Typography>
              <Typography color="#1e88e5">{techStack}</Typography>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </Container>
  );
}
