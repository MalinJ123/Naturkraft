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
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "1em",
          border: "1px solid blue",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            border: "1px solid hotpink",
            flex: 1,
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "8px",
              alignContent: "center",
            }}
          >
            <MUI.Typography
              style={{
                // fontFamily: "jura",
              }}
              variant="body1"
              fontSize="18px"
            >
              Hillringsberg 671 97 Glava
            </MUI.Typography>

            <MUI.Typography
              style={{
                // fontFamily: "jura",
              }}
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
          </div>
        </div>
        <div
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
        </div>

        <div
          style={{
            border: "1px solid hotpink",
            flex: 1,
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
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
          </div>
        </div>
      </div>
    </MUI.Container>
  );
}

export default Footer;
