import Title from "@/components/title";
import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Link,
} from "@mui/material/";
import { useRouter } from "next/router";
import { useRedirect } from "@/hooks/useRedirect";

export default function Project() {
  const session = useRedirect();
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
        alignItems="center"
        gap={12}
      >
        <Title />
        <Card sx={{ backgroundColor: "opacityLight.main" }} elevation={2}>
          <CardHeader
            title="Elljusspåret i Glava"
            titleTypographyProps={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: 20, md: 25 },
              marginBottom: 4,
              marginTop: 5,
            }}
            subheader="Glava elljusspår har något så speciellt som ett smart, behovsdrivet
              och modulärt energisystem baserat i solenergi. Kombinationen av
              solenergi, behovsstyrd energieffektiv belysning och lagring via
              nätet möjliggör en miljövänlig energiförsörjning. Samtidigt är
              utomhusmiljön både trygg och trivsam."
            subheaderTypographyProps={{
              color: "black",
              fontWeight: 700,
              fontSize: { xs: 16, md: 18 },
              paddingX: { xs: 0.5, md: 6 },
            }}
          />
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              gutterBottom
              lineHeight={2}
              sx={{
                paddingX: { xs: 0.55, md: 6 },
                fontSize: { xs: 14, md: 16 },
                color: "black",
                fontWeight: 500,
              }}
            >
              <b>Anläggningen med solpark, batteri och LED-belysning</b> finns
              installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
              togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
              mötesplatser ute i naturen, som finansierades av
              Energimyndigheten. Glava Energy Center koordinerade projektet i
              samarbete med bland andra flertalet lokala samarbetspartners som
              Hillringsbergs IF och Glava Gymnastikförening.
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 6,
            }}
          >
            <Link
              className="link-hover"
              underline="none"
              component="button"
              variant="body1"
              role="button"
              onClick={() => router.push("/cooperation")}
              type="button"
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
              [Läs mer om alla samarbetspartners]
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
