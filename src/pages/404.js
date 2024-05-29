import Title from "@/components/title";
import { Box, Card, CardContent, Link, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  createCustomTheme,
  poppinsFont,
  robotoFont,
} from "@/styles/fontsPalette";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

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
              <Stack spacing={0.015} direction="column">
                <ThemeProvider theme={themePoppins}>
                  <Typography
                    variant="h4"
                    sx={{
                      "@media (max-width: 700px)": {
                        fontSize: "20px",
                        lineHeight: "2",
                      },
                    }}
                  >
                    Felmeddelande 404
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      "@media (max-width: 700px)": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    Sidan kunde inte hittas!
                  </Typography>
                </ThemeProvider>
              </Stack>
              <ThemeProvider theme={themeRoboto}>
                <Typography
                  variant="body1"
                  fontSize="18px"
                  sx={{
                    "@media (max-width: 700px)": {
                      fontSize: "16px",
                    },
                  }}
                >
                  Sidan du söker efter finns inte. Kanske har du skrivit in en
                  felaktig adress eller så har sidan tagits bort.
                </Typography>
                <Link
                  underline="hover"
                  onClick={() => router.push("/")}
                  sx={{
                    color: "white",
                    "@media (max-width: 700px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  Tillbaka till startsidan
                </Link>
              </ThemeProvider>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
