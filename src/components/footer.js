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
      <MUI.Box
        component="div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          
        }}

      >
        <MUI.Box
          style={{
            flex: 1,
            alignContent: "center",
            minWidth: "300px", 
          }}
        >
          <MUI.Box
            style={{
              flex: 1,
              padding: "8px",
              alignContent: "center", 
            }}  sx={{
              "@media (max-width:600px)": {
                alignContent: "center",
                justifyContent: "space-between",
              },
            }}
          >
            <MUI.Typography
              
              variant="body1"
              fontSize="18px"  sx={{
                "@media (max-width:600px)": {
                  fontSize: "12px", textAlign: "center", 
                },
              }}
            >
              Hillringsberg 671 97 Glava
            </MUI.Typography>

            <MUI.Typography
             
              variant="body2"
              fontSize="16px"  sx={{
                "@media (max-width:600px)": {
                  fontSize: "12px",  textAlign: "center", 
                },
              }}
            >
              Bengt@delabglava.se
            </MUI.Typography>

            <MUI.Typography
             
              variant="body2"
              fontSize="18px"  sx={{
                "@media (max-width:600px)": {
                  fontSize: "12px", textAlign: "center", 
                },
              }}
            > 
              070 - 34 26 345
            </MUI.Typography>
          </MUI.Box>
        </MUI.Box>
        <MUI.Box
          style={{
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "300px", 
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
              }}   sx={{
                "@media (max-width:600px)": {
                  fontSize: "12px", 
                },
              }}
              variant="body1"
              fontSize="18px"
            >
              Isac.Myren.Andersson@GlavaEnergyCenter.se
            </MUI.Typography>

            <MUI.Typography
              variant="body2"
              fontSize="18px"
              style={{
                textAlign: "right",
              }}
              sx={{
                "@media (max-width:600px)": {
                  fontSize: "12px",
                },
              }}
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
