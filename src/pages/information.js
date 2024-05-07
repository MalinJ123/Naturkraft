import * as MUI from "@mui/material/";


export default function Information() {
  return (
    <>
    <MUI.Container 
  sx={{ marginTop: 8, marginBottom:8, padding: {xs: 0}}}>

      <MUI.Box    
        component="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={12}
      >
        <MUI.Container sx={{padding: {xs: 0}}}>
          <MUI.Card
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.90)" }}
            elevation={2}
          >
            <MUI.CardHeader
              title="Vill du veta mer"
              titleTypographyProps={{ textAlign: "center",fontSize: {xs: 30, md: 32}, marginTop: 5, fontWeight: "bold"}}    
            />
            <MUI.CardContent  sx={{ padding: 0 }}>
              <MUI.Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                margin={2}
               
              >
                <MUI.Stack spacing={4} direction="column">
                  <MUI.Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: {xs: 0.5, md: 6},
                      fontSize: {xs: 18, md: 20},
                      color: "black", 
                    }}>
                    Glava elljusspår visar att idrottsföreningar och kommuner
                    kan få bra belysning på sina anläggningar, samtidigt som de
                    kan spara energi och få intäkter från överskottsenergi som
                    produceras under den ljusa delen av året. Inspirerad och
                    intresserad av att veta mer? Ta del av projektets resultat
                    och guide!
                  </MUI.Typography>
                  <MUI.Typography variant="body1" component="p"
                  sx={{
                      paddingX: {xs: 0.5, md: 6},
                      fontSize: {xs: 16, md: 18},
                      color: "black",
                      fontWeight: 500, 
                  }}>
                    <b>Sverige har cirka 1 700 elljusspår</b> som är belysta. De flesta
                    är byggda på 1960–70-talen med energikrävande och
                    miljöfarliga kvicksilverlampor som ska avvecklas enligt
                    EU-direktiv. Många föreningar och kommuner står inför större
                    uppgraderingar med krav på miljö och elsäkerhet. Att åtgärda
                    detta fordrar stora investeringar.
                  </MUI.Typography>
                  <MUI.Typography variant="body1" component="p"
                      sx={{
                        paddingX: {xs: 0.5, md: 6},
                        fontSize: {xs: 18, md: 20}, 
                        color: "black",
                        fontWeight: 500, 
                    }}>
                    <b>Målet med projektet Naturkraft</b> var bland annat att sprida
                    kunskap och ge förslag till samhället för framtidens
                    motionsanläggningar. Projektet visar att kombinationen av
                    solenergi, behovsstyrd energieffektiv belysning och lagring
                    via nätet kan ge en miljövänlig energiförsörjning och trygg
                    och trivsam utomhusmiljö på ett kostnadseffektivt sätt.
                  </MUI.Typography>
                  <MUI.Typography variant="body1" component="p" style={{ fontWeight: "bold" }}
                  sx={{
                       paddingX: {xs: 0.5, md: 6},
                        fontSize: {xs: 18, md: 20},
                        color: "black"
                    }}>
                    Projektet ska också resultera i en guide som kan användas av
                    andra kommuner och föreningar.
                  </MUI.Typography>

                  <MUI.Typography
                    variant="body1"
                    component="p"
                    
                    sx={{
                      paddingX: {xs: 0.5, md: 6},
                      fontSize: {xs: 18,md: 21}
                  }}>
                    Vill du veta mer eller ta del av guiden? Mer information om
                    projektet och kontaktpersoner hittar du på Glava Energy
                    Centers webbplats:
                  </MUI.Typography>
                </MUI.Stack>
              </MUI.Box>
            <MUI.CardActions
              className="bold"
              sx={{ display: "flex", justifyContent: "flex-end", marginRight: 10}}
            >
              <MUI.Link
                className="link-hover"
                underline="none"
                component="button"
                variant="body1"
                role="button"
                type="button"
                sx={{
                  marginBottom: {xs: 2, md: 3}, 
                  fontSize: {xs: 16, md: 20},
                  color: "black",
                  fontWeight: "bold",
                  padding: 1
                }}
              >
                {" "}
                https://glavaenergycenter.se/sv/
              </MUI.Link>
            </MUI.CardActions>
            </MUI.CardContent>
          </MUI.Card>
        </MUI.Container>
      </MUI.Box>
      </MUI.Container>
    </>
  );
}
