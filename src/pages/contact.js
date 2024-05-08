import Title from "@/components/title";
import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  Paper,
} from "@mui/material/";

const googleMapsUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8093.380804462477!2d12.607034483359932!3d59.52734047717524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46436c4780203bcf%3A0x391fe2ed2c2d864e!2s671%2097%20Hillringsberg!5e0!3m2!1ssv!2sse!4v1714116722209!5m2!1ssv!2sse";

export default function Contact() {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="center"
      gap={12}
      marginTop={4}
    >
      <Title />
      <Container
        sx={{
          backgroundColor: "opacityLight.main",
          paddingTop: 0,
          py: 6,
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Hitta hit
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "10px",
          }}
          variant="body3"
          component="p"
        >
          Har ni några frågor eller funderingar angående Projektet Naturkraft?
        </Typography>
        <Typography
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
        </Typography>

        <Box
          display="flex"
          marginTop={4}
          alignItems={{ xs: "center", md: "flex-start" }}
          flexDirection={{ xs: "column", md: "row" }}
        >
          {/* Vänster sida med kort */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            flex="1"
            height="25em"
            width={{ xs: "120%", md: "100%" }}
            marginBottom={{ xs: 4, sm: 0, md: 4 }}
          >
            <Card
              elevation={6}
              borderRadius="10px"
              sx={{
                paddingLeft: "1em",
                paddingBottom: "2em",
                width: "90%",
              }}
            >
              <CardHeader
                title="Elljusspåret/ Hillringsbergs IF"
                titleTypographyProps={{
                  textAlign: "center",
                  padding: 0,
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              />
              <Typography variant="body1" component="p" fontWeight="bold">
                Bengt Danielsson
              </Typography>
              <Typography variant="body3" component="p" fontWeight="bold">
                Ordförande Hillringsbergs IF
              </Typography>
              <Typography variant="body1" component="p" fontWeight="bold">
                bengt@delabglava.se
              </Typography>
              <Typography variant="body1" component="p" fontWeight="bold">
                0703426345
              </Typography>
            </Card>
            <Card
              elevation={6}
              borderRadius="10px"
              sx={{
                paddingLeft: "1em",
                paddingBottom: "2em",
                width: "90%",
              }}
            >
              <CardHeader
                title="Projektet Naturkraft"
                titleTypographyProps={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              />
              <Typography variant="body1" component="p" fontWeight="bold">
                Isac Myrén Andersson
              </Typography>
              <Typography variant="body3" component="p" fontWeight="bold">
                Glava Energy Center
              </Typography>
              <Typography variant="body1" component="p" fontWeight="bold">
                Isac.Myren.Andersson@GlavaEnergyCenter.se
              </Typography>
            </Card>
          </Box>

          {/* Höger sida med Google Maps */}

          <Container fixed maxWidth="sm">
            <Paper elevation={6} /* sx={{ borderRadius: "10px" }} */>
              <Box
                component="iframe"
                src={googleMapsUrl}
                borderRadius="10px"
                border="none"
                width="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{ height: "365px" }}
              ></Box>
            </Paper>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
