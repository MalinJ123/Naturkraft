import Title from "@/components/title";
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Typography,
  CardActions,
  Link,
} from "@mui/material";
import { useRouter } from "next/router";

export default function Information() {
  const router = useRouter();
  return (
    <Container
      sx={{
        marginTop: 8,
        marginBottom: 6,
        width: "70%",
        padding: { xs: 0 },
        "@media (max-width: 800px)": {
          width: "100%",
        },
      }}
    >
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={12}
      >
        <Title />
        <Container sx={{ padding: { xs: 0 } }}>
          <Card sx={{ backgroundColor: "opacityLight.main" }} elevation={2}>
            <CardHeader
              title="Vill du veta mer"
              titleTypographyProps={{
                textAlign: "center",
                fontSize: { xs: 20, md: 25 },
                marginTop: 4,
                marginBottom: 2,
                fontWeight: "bold",
              }}
            />
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                margin={2}
              >
                <Stack spacing={4} direction="column">
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 16, md: 18 },
                      color: "black",
                    }}
                  >
                    Glava elljusspår visar att idrottsföreningar och kommuner
                    kan få bra belysning på sina anläggningar, samtidigt som de
                    kan spara energi och få intäkter från överskottsenergi som
                    produceras under den ljusa delen av året. Inspirerad och
                    intresserad av att veta mer? Ta del av projektets resultat
                    och guide!
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 14, md: 18 },
                      color: "black",
                      fontWeight: 500,
                    }}
                  >
                    <b>Sverige har cirka 1 700 elljusspår</b> som är belysta. De
                    flesta är byggda på 1960–70-talen med energikrävande och
                    miljöfarliga kvicksilverlampor som ska avvecklas enligt
                    EU-direktiv. Många föreningar och kommuner står inför större
                    uppgraderingar med krav på miljö och elsäkerhet. Att åtgärda
                    detta fordrar stora investeringar.
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 16, md: 18 },
                      color: "black",
                      fontWeight: 500,
                    }}
                  >
                    <b>Målet med projektet Naturkraft</b> var bland annat att
                    sprida kunskap och ge förslag till samhället för framtidens
                    motionsanläggningar. Projektet visar att kombinationen av
                    solenergi, behovsstyrd energieffektiv belysning och lagring
                    via nätet kan ge en miljövänlig energiförsörjning och trygg
                    och trivsam utomhusmiljö på ett kostnadseffektivt sätt.
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bold" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 16, md: 18 },
                      color: "black",
                    }}
                  >
                    Projektet ska också resultera i en guide som kan användas av
                    andra kommuner och föreningar.
                  </Typography>

                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 16, md: 18 },
                    }}
                  >
                    Vill du veta mer eller ta del av guiden? Mer information om
                    projektet och kontaktpersoner hittar du på Glava Energy
                    Centers webbplats:
                  </Typography>
                </Stack>
              </Box>

              <CardActions
                className="bold"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: { xs: 0, md: 10 },
                }}
              >
                <Link
                  className="link-hover"
                  underline="none"
                  component="button"
                  variant="body1"
                  role="button"
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://glavaenergycenter.se/sv/projekt/avslutade-projekt/naturkraft.html",
                      "_blank"
                    )
                  }
                  sx={{
                    marginBottom: { xs: 2, md: 4 },
                    fontSize: { xs: 14, md: 16 },
                    fontWeight: "bold",
                    padding: 1,
                    transition: "transform 0.3s ease-in-out",
                    "@media (min-width: 900px)": {
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  [Läs mer om projektet Naturkraft]
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Container>
  );
}
