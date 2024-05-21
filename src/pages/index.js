import Title from "@/components/title";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  createCustomTheme,
  poppinsFont,
  robotoFont,
} from "@/styles/fontsPalette";
import { Explore } from "@mui/icons-material";

function Start() {
  const themePoppins = createCustomTheme(poppinsFont);
  const themeRoboto = createCustomTheme(robotoFont);

  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Title />
      <Card
        sx={{
          background: "rgba( 255, 255, 255, 0.25 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          color: "#fff",
        }}
        elevation={6}
      >
        <CardContent>
          <Box
            sx={{ p: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 } }}
            component="div"
          >
            <Stack spacing={2} direction="column">
              <Stack spacing={-1} direction="column">
                <ThemeProvider theme={themePoppins}>
                  <Typography variant="h5">Projektet</Typography>
                  <Typography variant="h3">Naturkraft</Typography>
                </ThemeProvider>
              </Stack>
              <ThemeProvider theme={themeRoboto}>
                <Typography variant="h4">
                  Framtidens smarta elljusspår
                </Typography>
                <Stack direction="row" spacing={2} alignContent="center">
                  <Explore />
                  <Typography variant="h5">
                    59&lsquo;33&apos;30.9&ldquo;N 12&lsquo;33&apos;48.3&ldquo;E
                  </Typography>
                </Stack>
              </ThemeProvider>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
export default Start;
