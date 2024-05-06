import * as MUI from "@mui/material";
import CompanyLogo from "@/images/main/logotype.png";
import Image from "next/image";



function Footer() {
  return (
    <MUI.Container className="footer-container"
      sx={{
       marginTop: 4,
        backgroundColor: "black",
        color: "white",
        padding: 2,
        MaxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        '@media screen and (max-width: 700px)': { // Example media query for screens smaller than 600px
          flexDirection: "column", 
          backgroundColor: "blue" ,// Change layout to column for smaller screens
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "1em",  
          // border:"1px solid hotpink"
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1,
           padding: "8px",
           alignContent:"center"}}>
          <MUI.Typography 
          variant="body1" 
          fontSize="18px">
            Hillringsberg 671 97 Glava
          </MUI.Typography>

          <MUI.Typography
           variant="body2" 
           fontSize="16px">
            Bengt@delabglava.se
            </MUI.Typography>

          <MUI.Typography 
          variant="body3" 
          fontSize="18px"> 
          070 - 34 26 345
          </MUI.Typography>
        </div>

        <div
          style={{
            border: "1px solid green",
            padding: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1em",
          }}
        >
          <Image priority
            alt="Hillringsbergs logga"
            src={CompanyLogo}
            style={{ width: 100, height: 50,}}
          />
        </div>

        <div
          style={{
            //  border: "1px solid hotpink",
            flex: 1,
       
            alignContent:"center",
         
          }}
        >
          <div style={{ textAlign: "center" }}>
            <MUI.Typography
              variant="body2" 
              fontSize="18px"
              style={{ 
                textAlign: "right", 
                marginTop: "1em" , 
                flex: 1, }}
            >
              Isac.Myren.Andersson@GlavaEnergyCenter.se
            </MUI.Typography>
            <MUI.Typography variant="body2" fontSize="18px" style={{ textAlign: "right" }}>
              Scaaler IoT Labs, Strandvägen 2, 671 51 Arvika
            </MUI.Typography>
          </div>
        </div>
      </div>
    </MUI.Container>
  );
}

export default Footer;