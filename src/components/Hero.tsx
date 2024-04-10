import { Box, Container, Link, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Article, GitHub, Telegram } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Hero() {
  return (
    <Container>
      <Box
        sx={{
          mt: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" color="#1e88e5">
          HI, I'M HODEBSKIY IGOR <br />
          FULL STACK DEVELOPER
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Link href="https://www.linkedin.com/in/hodebskyi/" underline="none">
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link href="https://github.com/IhorHodebskyi" underline="none">
          <GitHub fontSize="large" />
        </Link>
        <Link href="https://t.me/IhorHodebskyi" underline="none">
          <Telegram fontSize="large" />
        </Link>
        <Link href="" underline="none">
          <Article fontSize="large" />
        </Link>
        <Link href="">
          <AlternateEmailIcon fontSize="large" />
        </Link>
        <Link href="">
          <PhoneAndroidIcon fontSize="large" />
        </Link>
      </Box>
    </Container>
  );
}
