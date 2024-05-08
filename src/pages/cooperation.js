import Image from "next/image";
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

import glavaEnergyCenterLogo from "@/images/cooperation/Glava_Energy_Center.png";
import energimyndighetenLogo from "@/images/cooperation/Energimyndigheten.png";
import sun4EnergyLogo from "@/images/cooperation/Sun4Energy.png";
import sweModuleLogo from "@/images/cooperation/Swemodule.png";
import karlstadsUniversitetLogo from "@/images/cooperation/Karlstads_Universitet.png";
import lundsUniversitetLogo from "@/images/cooperation/Lunds_Universitet.png";
import teknikiVastLogo from "@/images/cooperation/TeknikiVast.png";
import hillringsbergsIFLogo from "@/images/cooperation/Hillringsberg_IF.png";
import glavaGymnastikföreningLogo from "@/images/cooperation/Glava_Gymnastikförening.png";
import sCBurmanAbLogo from "@/images/cooperation/SC_Burman_AB.png";
import Title from "@/components/title";

export default function Cooperation() {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={12}
      marginTop={10}
    >
      <Title />
      <Container sx={{ padding: { xs: 0 } }}>
        <Card sx={{ backgroundColor: "opacityWhite.main" }} elevation={2}>
          <CardHeader
            title="Samarbetspartners"
            titleTypographyProps={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { xs: 28, md: 32 },
              marginBottom: 2,
              marginTop: 4,
            }}
          />
          <CardContent>
            <Box
              component="div"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Stack spacing={4} direction="column">
                <Typography
                  variant="body1"
                  component="p"
                  lineHeight={1.8}
                  sx={{
                    paddingX: { xs: 0.55, md: 6 },
                    fontSize: { xs: 18, md: 20 },
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
                  lineHeight={1.8}
                  sx={{
                    paddingX: { xs: 0.55, md: 6 },
                    fontSize: { xs: 18, md: 20 },
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
              sx={{
                padding: { xs: 2, md: 3 },
                fontSize: { xs: 15, md: 20 },
                color: "black",
                fontWeight: "bold",
              }}
            >
              Klicka här om du vill veta mer eller ta del av guiden
            </Link>
          </CardActions>
        </Card>
      </Container>
      <Box
        component="section"
        width="100%"
        sx={{ backgroundColor: "opacityLight.main" }}
      >
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
          alignItems="center"
          justifyContent="center"
          flexWrap={"wrap"}
          spacing={4}
          gap={2}
          p={4}
        >
          <Image
            className="cooperation__image"
            src={glavaEnergyCenterLogo}
            alt="Glava Energy Center logotyp"
          />
          <Image
            className="cooperation__image"
            src={energimyndighetenLogo}
            alt="Energimyndigheten logotyp"
          />
          <Image
            className="cooperation__image"
            src={sun4EnergyLogo}
            alt="Sun 4 Energy logotyp"
          />
          <Image
            className="cooperation__image"
            src={sweModuleLogo}
            alt="SWEMODULE logotyp"
          />
          <Image
            className="cooperation__image"
            src={karlstadsUniversitetLogo}
            alt="Karlstads Universitet logotyp"
          />
          <Image
            className="cooperation__image"
            src={lundsUniversitetLogo}
            alt="Lunds Universitet logotyp"
            sx={{
              "@media (max-width:1290px)": {
                width: "50px",
                height: "50px",
              },
            }}
          />
        </Stack>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          spacing={4}
          gap={2}
          p={4}
        >
          <Image
            className="cooperation__image"
            src={teknikiVastLogo}
            alt="Teknik i Väst logotyp"
          />
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignContent="center"
            justifyContent="center"
            width="200px"
          >
            <Typography variant="body1" textAlign="center" component="p">
              Teknik o Gårdstjänster
            </Typography>
          </Box>
          <Image
            className="cooperation__image"
            src={hillringsbergsIFLogo}
            alt="Hillringsbergs IF logotyp"
          />
          <Image
            className="cooperation__image"
            src={glavaGymnastikföreningLogo}
            alt="Glava Gymnastikförening"
          />
          <Image
            className="cooperation__image"
            src={sCBurmanAbLogo}
            alt="SC Burman AB logotyp"
          />
        </Stack>
      </Box>
    </Box>
  );
}
