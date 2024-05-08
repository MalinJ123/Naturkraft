import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

import CompanyLogo from "@/images/main/logotype.png";

function Footer() {
  const router = useRouter();
  return (
    <Box
      component="footer"
      position="relative"
      bottom={0}
      height="110px"
      width="100%"
      display="flex"
      alignContent="center"
      justifyContent="center"
      flexDirection="row"
      sx={{
        "& .MuiTypography-body1": {
          fontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px",
           
          },
        },
        backgroundColor: "#000",
        color: "#fff",  
      }} 
    >
      <Grid 
        container 
        columns={{ xs: 2, sm: 1 }}
        justifyItems="center"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="xl"
      
        sx={{
          paddingLeft: {
            xs: "1.15em",
            md: "1.45em",
            lg: "1.55em",
            xl: "1.55em",
          },
          paddingRight: {
            xs: "1.15em",
            md: "1.45em",
            lg: "1.55em",
            xl: "1.55em",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <Typography variant="body1">Hillringsberg 671 97 Glava</Typography>
          </ListItem>

          <ListItem disablePadding>
            <Typography variant="body1">Bengt@delabglava.se</Typography>
          </ListItem>

          <ListItem disablePadding>
            <Typography variant="body1">070 - 34 26 345</Typography>
          </ListItem>
        </List>
        <IconButton
          size="small"
          type="button"
          sx={{
            "*": {
              width: { xs: "60px" },
              height: "auto",
            },
          }}
          title="Navigera till startsidan"
          onClick={() => router.push("/")}
        >
          <Image
            priority
            alt="Hillringsbergs logga"
            width="auto"
            src={CompanyLogo}
            quality={85}
            style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
          />
        </IconButton>

        <List>
          <ListItem disablePadding>
            <Typography variant="body1">
              Isac.Myren.Andersson@GlavaEnergyCenter.se
            </Typography>
          </ListItem>

          <ListItem disablePadding>
            <Typography variant="body1">
              Scaaler IoT Labs, Strandvägen 2, 671 51 Arvika
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}

export default Footer;
