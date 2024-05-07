import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

import CompanyLogo from "@/images/main/logotype.png";

function Footer() {
  return (
    <Container
      position="relative"
      bottom={0}
      height="auto"
      margin={0}
      padding={2}
      maxWidth="100%"
      width="100%"
      id="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Box
        component="div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          style={{
            flex: 1,
            alignContent: "center",
            "@media (max-width:570px)": {
              alignContent: "center",
              justifyContent: "space-between",
            },
          }}
          sx={{
            "@media (max-width:750px)": {
              maxWidth: "auto",
            },
          }}
        >
          <Box
            style={{
              flex: 1,
              padding: "8px",
              alignContent: "center",
            }}
            sx={{
              "@media (max-width:1040px)": {
                alignContent: "center",
                justifyContent: "space-between",
              },
            }}
          >
            <Typography
              variant="body1"
              fontSize="18px"
              sx={{
                "@media (max-width:1040px)": {
                  fontSize: "12px",
                },
                "@media (max-width:570px)": {
                  width: "150px",
                },
              }}
            >
              Hillringsberg 671 97 Glava
            </Typography>

            <Typography
              variant="body2"
              fontSize="16px"
              sx={{
                "@media (max-width:1040px)": {
                  fontSize: "12px",
                },
                "@media (max-width:570px)": {
                  width: "150px",
                  width: "150px",
                },
              }}
            >
              Bengt@delabglava.se
            </Typography>

            <Typography
              variant="body2"
              fontSize="18px"
              sx={{
                "@media (max-width:1040px)": {
                  fontSize: "12px",
                },
                "@media (max-width:570px)": {
                  width: "150px",
                  width: "150px",
                },
              }}
            >
              070 - 34 26 345
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
          }}
          sx={{
            "@media (max-width:750px)": {
              maxWidth: "100px",
            },
          }}
        >
          <Image
            priority
            alt="Hillringsbergs logga"
            src={CompanyLogo}
            style={{ width: 100, height: 55 }}
            sx={{
              "@media (max-width:700px)": {
                width: "150px",
              },
            }}
          />
        </Box>

        <Box
          style={{
            flex: 1,
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <Box style={{ textAlign: "center" }}>
            <Typography
              style={{
                marginTop: "1em",
                flex: 1,
              }}
              sx={{
                "@media (max-width:1040px)": {
                  fontSize: "12px",
                },
              }}
              variant="body1"
              fontSize="18px"
            >
              Isac.Myren.Andersson@GlavaEnergyCenter.se
            </Typography>

            <Typography
              variant="body2"
              fontSize="18px"
              sx={{
                "@media (max-width:1040px)": {
                  fontSize: "12px",
                },
              }}
            >
              Scaaler IoT Labs, Strandvägen 2, 671 51 Arvika
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
