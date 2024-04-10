import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function Heder() {
  return (
    <Container>
      <AppBar position="fixed">
        <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1, m: 2 }}>
          PORTFOLIO
        </Typography>
      </AppBar>
    </Container>
  );
}
