import * as MUI from "@mui/material";
import CompanyLogo from "@/images/main/logotype.png";
import Image from "next/image";

function Footer() {
  return (
    <MUI.Container
      id="footer"
      sx={{
        marginTop: 4,
        backgroundColor: "black",
        color: "white",
        padding: 2,
        position: "absolute",
        bottom: "0",
        width: "100%",
        // fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
      }}
    >
      <MUI.Box
        component="div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "1em",
          border: "1px solid blue",
          flexWrap: "wrap",
        }}
      >
        <MUI.Box
          style={{
            border: "1px solid hotpink",
            flex: 1,
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <MUI.Box
            style={{
              flex: 1,
              padding: "8px",
              alignContent: "center",
            }}
          >
            <MUI.Typography variant="body1" fontSize="18px">
              Hillringsberg 671 97 Glava
            </MUI.Typography>

            <MUI.Typography
              style={
                {
                  // fontFamily: "jura",
                }
              }
              variant="body2"
              fontSize="16px"
            >
              Bengt@delabglava.se
            </MUI.Typography>

            <MUI.Typography
              style={{
                fontFamily: "jura",
              }}
              variant="body2"
              fontSize="18px"
            >
              070 - 34 26 345
            </MUI.Typography>
          </MUI.Box>
        </MUI.Box>
        <MUI.Box
          style={{
            border: "1px solid green",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            priority
            alt="Hillringsbergs logga"
            src={CompanyLogo}
            style={{ width: 100, height: 55 }}
          />
        </MUI.Box>

        <MUI.Box
          style={{
            border: "1px solid hotpink",
            flex: 1,
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <MUI.Box style={{ textAlign: "center" }}>
            <MUI.Typography
              style={{
                textAlign: "right",
                marginTop: "1em",
                flex: 1,
                // fontFamily: "jura",
              }}
              variant="body1"
              fontSize="18px"
            >
              Isac.Myren.Andersson@GlavaEnergyCenter.se
            </MUI.Typography>

            <MUI.Typography
              variant="body2"
              fontSize="18px"
              style={{ textAlign: "right", fontFamily: "jura" }}
            >
              Scaaler IoT Labs, Strandvägen 2, 671 51 Arvika
            </MUI.Typography>
          </MUI.Box>
        </MUI.Box>
      </MUI.Box>
    </MUI.Container>
  );
}

export default Footer;
