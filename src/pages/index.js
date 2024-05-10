import { contentHeight } from "@/components/layout";
import Title from "@/components/title";
import { Container, Typography } from "@mui/material";

function Start() {
  return (
    <Container sx={{ height: contentHeight }}>
      <Title />
      <Typography variant="h1">Start</Typography>
    </Container>
  );
}
export default Start;
