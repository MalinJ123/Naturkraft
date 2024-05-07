import * as MUI from "@mui/material/";

export default function Project(){
    return(
        <>
      return (
    <MUI.Container sx={{ marginTop: 8, padding: {xs: 0}}}>
      <MUI.Box 
        display="flex" 
        flexDirection="column" alignItems="center" gap={12}>
        <MUI.Card elevation={2} 
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)"
          }}
        >
          <MUI.CardHeader title="Elljusspåret i Glava"
          titleTypographyProps={{ fontWeight: 'bold', textAlign: 'center', fontSize: {xs: 32, md: 36}, marginBottom: 4, marginTop: 6, padding: 1}} subheader="Glava elljusspår har något så speciellt som ett smart, behovsdrivet
              och modulärt energisystem baserat i solenergi. Kombinationen av
              solenergi, behovsstyrd energieffektiv belysning och lagring via
              nätet möjliggör en miljövänlig energiförsörjning. Samtidigt är
              utomhusmiljön både trygg och trivsam." subheaderTypographyProps={{ color:"black", fontWeight: 900, fontSize: {xs: 18, md: 24}, paddingX: {xs: 0.5, md: 6}}} />
          <MUI.CardContent>
            <MUI.Typography
            variant="body2" component="p" gutterBottom lineHeight={2}
            sx={{
              paddingX: {xs: 0.5, md: 6},
              fontSize: {xs: 18, md: 20},
              color: "black",
              fontWeight: 500, 
            }}>
              <b>Anläggningen med solpark, batteri och LED-belysning</b> finns
              installerad vid motionsspåret i Glava, nära Glava kyrka. Systemet
              togs fram åren 2018–2024 i projektet Naturkraft – Må gott på
              mötesplatser ute i naturen, som finansierades av Energimyndigheten.
              Glava Energy Center koordinerade projektet i samarbete med bland
              andra flertalet lokala samarbetspartners som Hillringsbergs IF och
              Glava Gymnastikförening.
            </MUI.Typography>
          </MUI.CardContent>
          <MUI.CardActions sx={{display: "flex", justifyContent: "flex-end", marginRight: 6}}>
            <MUI.Link
              className="link-hover"
              underline="none"
              component="button"
              variant="body1"
              role="button"
              type="button"
              sx={{
                marginBottom: {xs: 2, md: 4},
                fontSize: {xs: 16, md: 20},
                color: "black",
                fontWeight: "bold",
                padding: 1, 
              }}>
              Läs mer om alla samarbetspartners
            </MUI.Link>
          </MUI.CardActions>
        </MUI.Card>

      </MUI.Box>
    </MUI.Container>
  );

        </>
    )
} 