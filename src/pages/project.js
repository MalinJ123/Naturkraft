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

export default function Project() {
  return (
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
            fontSize: { xs: 28, md: 32 },
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
            fontWeight: 900,
            fontSize: { xs: 18, md: 20 },
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
              fontSize: { xs: 16, md: 18 },
              color: "black",
              fontWeight: 500,
            }}
          >
            <b>Anläggningen med solpark, batteri och LED-belysning</b> finns
            installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
            togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
            mötesplatser ute i naturen, som finansierades av Energimyndigheten.
            Glava Energy Center koordinerade projektet i samarbete med bland
            andra flertalet lokala samarbetspartners som Hillringsbergs IF och
            Glava Gymnastikförening.
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
            type="button"
            sx={{
              marginBottom: { xs: 2, md: 4 },
              fontSize: { xs: 16, md: 20 },
              color: "black",
              fontWeight: "bold",
              padding: 1,
            }}
          >
            Läs mer om alla samarbetspartners
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
