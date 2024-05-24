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
    <Container
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: 8,
        marginBottom: 6,
        borderRadius: "10px",
        overflow: "hidden",

        width: "90%",
        "@media (max-width: 700px)": {
          width: "100%",
          paddingLeft: "0",
          paddingRight: "0",
          borderRadius: "0",
          paddingBottom: 5,
        },
      }}
    >
      <Title />
      <Typography
        align="center"
        marginBottom="1em"
        fontWeight="bold"
        sx={{
          fontSize: "22px",
        }}
      >
        Hitta hit
      </Typography>

      <Typography
        sx={{
          fontSize: "18px",
          textAlign: "left",
          padding: "10px",
          marginLeft: "1.5em",
          fontWeight: "bold",
          "@media (max-width: 700px)": {
            marginLeft: "0",
            fontSize: "16px",
          },
        }}
        variant="body3"
        component="p"
      >
        Har ni några frågor eller funderingar angående Projektet Naturkraft?
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          marginLeft: "1.5em",

          fontWeight: "bold",
          textAlign: "left",
          padding: "10px",
          "@media (max-width: 700px)": {
            marginLeft: "0",
            fontSize: "16px",
          },
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
          height="20em"
          width="70%"
          marginBottom={{ xs: 4, sm: 0, md: 4 }}
          sx={{
            "@media (max-width: 900px)": {
              width: "100%",
            },
          }}
        >
          <Card
            borderRadius="10px"
            sx={{
              paddingLeft: "1em",
              width: "100%",
            }}
          >
            <CardHeader
              title="Elljusspåret/ Hillringsbergs IF"
              titleTypographyProps={{
                sx: {
                  textAlign: "center",
                  padding: 0,
                  fontSize: "20px",
                  fontWeight: "bold",
                  "@media (max-width: 700px)": {
                    fontSize: "18px",
                  },
                },
              }}
            />

            <Typography
              variant="body1"
              component="p"
              fontWeight="bold"
              sx={{
                "@media (max-width: 700px)": {
                  fontSize: "14px",
                },
              }}
            >
              Bengt Danielsson
            </Typography>
            <Typography variant="body3" component="p" fontSize="14px">
              Ordförande Hillringsbergs IF
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontWeight="bold"
              sx={{
                "@media (max-width: 700px)": {
                  fontSize: "14px",
                },
              }}
            >
              Bengt@delabglava.se
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontWeight="bold"
              sx={{
                paddingBottom: "2em",

                "@media (max-width: 700px)": {
                  fontSize: "14px",
                },
              }}
            >
              070 342 63 45
            </Typography>
          </Card>
          <Card
            borderRadius="10px"
            sx={{
              paddingLeft: "1em",
              paddingBottom: "2em",
              width: "100%",
              "@media (max-width: 900px)": {
                marginBottom: "1em",
                paddingBottom: "2em",
              },
            }}
          >
            <CardHeader
              title="Projektet Naturkraft"
              titleTypographyProps={{
                sx: {
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  "@media (max-width: 700px)": {
                    fontSize: "18px",
                  },
                },
              }}
            />
            <Typography
              variant="body1"
              component="p"
              fontWeight="bold"
              sx={{
                "@media (max-width: 700px)": {
                  fontSize: "14px",
                },
              }}
            >
              Isac Myrén Andersson
            </Typography>
            <Typography variant="body3" component="p" fontSize="14px">
              Glava Energy Center
            </Typography>
            <Typography
              variant="body1"
              component="p"
              fontWeight="bold"
              sx={{
                "@media (max-width: 700px)": {
                  fontSize: "14px",
                  height: "auto",
                  wordBreak: "break-word",
                },
              }}
            >
              Isac.Myren.Andersson@GlavaEnergyCenter.se
            </Typography>
          </Card>
        </Box>

        {/* Höger sida med Google Maps */}

        <Container
          fixed
          maxWidth="sm"
          sx={{
            "@media (max-width: 700px)": {
              padding: "0",
              margin: "0",
            },
          }}
        >
          <Paper elevation={6}>
            <Box
              component="iframe"
              src={googleMapsUrl}
              borderRadius="5px"
              border="none"
              width="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                height: "320px",
                "@media (max-width: 700px)": {
                  // fontSize: "14px",
                  width: "100%",
                  padding: "0",
                  margin: "0",
                },
              }}
            />
          </Paper>
        </Container>
      </Box>
    </Container>
  );
}
