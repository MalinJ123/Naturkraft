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

import { footerHeight } from "./layout";
import CompanyLogo from "@/images/main/logotype.png";

function Footer() {
  const router = useRouter();
  return (
    <Box
      component="footer"
      position="relative"
      bottom={0}
      height={footerHeight}
      width="100%"
      display="flex"
      alignContent="center"
      justifyContent="center"
      flexDirection="row"
      color="wrapper.contrastText"
      bgcolor="wrapper.main"
      sx={{
        "& .MuiTypography-body1": {
          fontSize: {
            xs: 12,
            sm: 12,
            md: 14,
            lg: 18,
          },
        },
      }}
    >
      <Grid
        container
        columns={{ xs: 2, sm: 1 }}
        justifyContent="space-between"
        alignItems="center"
        maxWidth="xl"
        sx={{
          height: "100%",
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
        <List
          sx={{
            width: { xs: "auto", sm: "auto", md: "28vw", lg: "30w" },
            justifyContent: "flex-start",
            display: "inline-grid",
            "& .MuiListItem-root": {
              display: "inline-flex",
            },
          }}
        >
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
              width: "75px",
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

        <List
          sx={{
            width: { xs: "auto", sm: "auto", md: "28vw", lg: "30w" },
            justifyContent: "flex-end",
            display: "inline-grid",
            "& .MuiListItem-root": {
              display: "inline-flex",
            },
          }}
        >
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
