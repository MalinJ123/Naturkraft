import Image from "next/image";
import { useRouter } from "next/router";
import img from "../styles/image.module.css";

import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
  Link,
} from "@mui/material/";
import { useRedirect } from "@/hooks/useRedirect";

import glavaEnergyCenterLogo from "@/images/cooperation/Glava_Energy_Center.png";
import energimyndighetenLogo from "@/images/cooperation/Energimyndigheten.png";
import sun4EnergyLogo from "@/images/cooperation/Sun4Energy.png";
import sweModuleLogo from "@/images/cooperation/Swemodule.png";
import karlstadsUniversitetLogo from "@/images/cooperation/Karlstads_Universitet.png";
import lundsUniversitetLogo from "@/images/cooperation/Lunds_Universitet.png";
import teknikiVastLogo from "@/images/cooperation/TeknikiVast.png";
import glavaGymnastikföreningLogo from "@/images/cooperation/Glava_Gymnastikförening.png";
import sCBurmanAbLogo from "@/images/cooperation/SC_Burman_AB.png";
import Title from "@/components/title";

export default function Cooperation() {
  const session = useRedirect();
  const router = useRouter();
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginBottom={10}
    >
      <Title />
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
        <Card sx={{ backgroundColor: "opacityLight.main" }} elevation={2}>
          <CardHeader
            title="Samarbetspartners"
            titleTypographyProps={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: 20, md: 25 },
              marginTop: 4,
            }}
          />
          <CardContent>
            <Box
              component="div"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Stack spacing={4} direction="column">
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    paddingX: { xs: 0.55, md: 6 },
                    fontSize: { xs: 16, md: 18 },
                  }}
                >
                  <b>Syftet med projektet</b> var att utveckla och testa ett
                  modulärt, säkert, smart och lokalt energisystem som möjliggör
                  att idrottsföreningar och kommuner får bra belysning på sina
                  anläggningar, samtidigt som de kan spara energi och få
                  intäkter från överskottsenergi som produceras under den ljusa
                  delen av året.
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    paddingX: { xs: 0.55, md: 6 },
                    fontSize: { xs: 16, md: 18 },
                  }}
                >
                  <b>Målet var också</b> att öka medvetenhet hos
                  projektdeltagare och allmänhet om effektiv energianvändning
                  och skapa mervärden genom att sprida kunskap och ge förslag
                  till samhället för framtidens motionsanläggningar. Projektet
                  ska också resultera i en guide som kan användas av andra
                  kommuner och föreningar.
                </Typography>
              </Stack>
            </Box>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: { xs: 0, md: 8 },
            }}
          >
            <Link
              className="link-hover"
              underline="none"
              component="button"
              variant="body1"
              role="button"
              type="button"
              onClick={() => router.push("/information")}
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
              [Klicka här om du vill veta mer]
            </Link>
          </CardActions>
        </Card>
      </Container>

      <Box
        component="section"
        width="100%"
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.80)" }}
      >
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            width: "100%",
            justifyContent: "space-around",
            marginTop: "1em",
            marginBottom: "1em",
          }}
          alignItems="center"
          spacing={3}
        >
          <Image
            className={img.energimyndigheten}
            src={energimyndighetenLogo}
            alt="Energimyndigheten logotyp"
          />
          <Image
            className={img.image}
            src={lundsUniversitetLogo}
            alt="Lunds Universitet logotyp"
          />

          <Image
            className={img.image__text}
            src={sweModuleLogo}
            alt="SWEMODULE logotyp"
          />
          <Image
            className={img.image}
            src={karlstadsUniversitetLogo}
            alt="Karlstads Universitet logotyp"
          />
          <Image
            className={img.swemodule}
            src={sun4EnergyLogo}
            alt="Sun 4 Energy logotyp"
          />
        </Stack>

        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            width: "100%",
            justifyContent: "space-around",
            alignContent: "center",
          }}
          alignItems="center"
          spacing={4}
          gap={2}
        >
          <Image
            className={img.image}
            src={glavaGymnastikföreningLogo}
            alt="Glava Gymnastikförening"
          />
          <Box className={img.teknik__loggo}>
            <Typography variant="body1">
              <b>Teknik o Gårdstjänster</b>
            </Typography>
          </Box>

          <Image
            className={img.image__glavaenergy}
            src={glavaEnergyCenterLogo}
            alt="Glava Engergy Center logotyp"
          />

          <Image
            className={img.teknikvast}
            src={teknikiVastLogo}
            alt="Teknik i Väst logotyp"
          />
          <Image
            className={img.sCbruma}
            src={sCBurmanAbLogo}
            alt="SC Burman AB logotyp"
          />
        </Stack>
      </Box>
    </Box>
  );
}
