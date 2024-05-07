import * as MUI from "@mui/material/";

export default function Contact() {
  return (
    <MUI.Box
      component="section"
      display="flex"
      flexDirection={{xs: "column", md: "row"}}
      justifyContent="center"
      gap={12}
      marginTop={4}
      >
      <MUI.Container
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.90)",
          paddingTop: 0,
          py: 6,
          borderRadius: "10px", 
          overflow: "hidden",
        }}
      >
        <MUI.Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Hitta hit
        </MUI.Typography>
        <MUI.Typography
          sx={{
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "10px",
          }}
          variant="body3"
          component="p"
        >
          Har ni några frågor eller funderingar angående Projektet Naturkraft?
        </MUI.Typography>
        <MUI.Typography
          sx={{
      
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center", 
            padding: "10px",
          }}
          variant="body3"
          component="p"
        >
          Tveka inte att höra av er till oss.
        </MUI.Typography>

        <MUI.Box display="flex" marginTop={4} alignItems={{xs: "center", md: "flex-start"}} flexDirection={{xs: "column", md: "row"}}>
          {/* Vänster sida med kort */}
          <MUI.Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            flex="1"
            height="25em"
            width={{ xs: "120%", md: "100%" }}
            marginBottom={{ xs: 4, sm: 0, md: 4}}
          >
            <MUI.Card
              elevation={2}
              sx={{
                paddingLeft: "1em",
                paddingBottom: "2em",
                width: "90%",
                borderRadius: "10px",
                boxShadow: "0px 4px 3px rgba(128, 128, 128, 0.5)",
              }}
            >
              <MUI.CardHeader
                title="Elljusspåret/ Hillringsbergs IF"
                titleTypographyProps={{
                  textAlign: "center",
                  padding: 0,
                  fontSize: "25px",
                  fontWeight: "bold"
                }}
              />
              <MUI.Typography variant="body1" component="p" fontWeight="bold">
                Bengt Danielsson
              </MUI.Typography>
              <MUI.Typography variant="body3" component="p" fontWeight="bold">
                Ordförande Hillringsbergs IF
              </MUI.Typography>
              <MUI.Typography variant="body1" component="p" fontWeight="bold">
                bengt@delabglava.se
              </MUI.Typography>
              <MUI.Typography variant="body1" component="p"fontWeight="bold">
                0703426345
              </MUI.Typography>
            </MUI.Card>
            <MUI.Card
              elevation={2}
              sx={{
                paddingLeft: "1em",
                paddingBottom: "2em",
                width: "90%",
                borderRadius: "10px",
                boxShadow: "0px 4px 3px rgba(128, 128, 128, 0.5)",
              }}
            >
              <MUI.CardHeader
                title="Projektet Naturkraft"
                titleTypographyProps={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}
              />
              <MUI.Typography variant="body1" component="p" fontWeight="bold">
                Isac Myrén Andersson
              </MUI.Typography>
              <MUI.Typography variant="body3" component="p" fontWeight="bold">
                Glava Energy Center
              </MUI.Typography>
              <MUI.Typography variant="body1" component="p" fontWeight="bold">
                Isac.Myren.Andersson@GlavaEnergyCenter.se
              </MUI.Typography>
            </MUI.Card>
          </MUI.Box>

          {/* Höger sida med Google Maps */}
          <MUI.Box
            flex="1"
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 4px 3px rgba(128, 128, 128, 0.5)",
              width: "110%", 
              // maxWidth: "100%",
              marginY: "10px",
              marginRight: {xs: 0, md: "20px"},
            }}
          >
            <MUI.Container fixed maxWidth="sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8093.380804462477!2d12.607034483359932!3d59.52734047717524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46436c4780203bcf%3A0x391fe2ed2c2d864e!2s671%2097%20Hillringsberg!5e0!3m2!1ssv!2sse!4v1714116722209!5m2!1ssv!2sse"
                width="100%"
                height="365"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MUI.Container>
          </MUI.Box>
        </MUI.Box>
      </MUI.Container>
    </MUI.Box>
  );
}