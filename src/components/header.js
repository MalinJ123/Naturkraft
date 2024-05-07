import { useRouter } from "next/router";
import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  Close,
  ExpandMore,
  Person,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import hillringsbergIFLogo from "@/images/main/logotype.png";

export default function Header() {
  const router = useRouter();

  // Dropdown
  const [headerDropdown, setHeaderDropdown] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);

  // Drawer
  const [headerDrawer, setHeaderDrawer] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#111",
        height: "80px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Container
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
        <Toolbar
          disableGutters
          sx={{ flexDirection: "row", justifyItems: "center" }}
        >
          <IconButton
            size="small"
            title="Navigera till startsidan"
            onClick={() => {
              router.push("/");
              setHeaderDrawer(false);
            }}
          >
            <Image
              priority
              src={hillringsbergIFLogo}
              alt="Hillringsbergslogga"
              style={{ height: "55px", width: "100px", aspectRatio: "1 / 1" }}
            />
          </IconButton>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              id="header__dropdown-button"
              aria-controls={
                headerDropdown ? "header__dropdown-menu" : undefined
              }
              aria-expanded={headerDropdown ? "true" : undefined}
              variant="outlined"
              type="button"
              aria-haspopup="true"
              onClick={(event) => {
                setHeaderDropdown(!headerDropdown);
                setDropdownAnchorEl(event.currentTarget);
              }}
              disableElevation
              endIcon={
                headerDropdown ? <KeyboardArrowUp /> : <KeyboardArrowDown />
              }
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              Om Eljusspåret
            </Button>
            <Menu
              id="header__dropdown-menu"
              MenuListProps={{ "aria-labelledby": "header__dropdown-button" }}
              open={headerDropdown}
              onClose={() => setHeaderDropdown(false)}
              anchorEl={dropdownAnchorEl}
              sx={{
                "& .MuiMenu-paper": { backgroundColor: "#111", color: "#fff" },
              }}
            >
              <MenuItem
                disableRipple
                onClick={() => {
                  router.push("/project");
                  setHeaderDropdown(false);
                }}
              >
                Projektet Naturkraft
              </MenuItem>
              <MenuItem
                disableRipple
                onClick={() => {
                  router.push("/cooperation");
                  setHeaderDropdown(false);
                }}
              >
                Samarbetspartners
              </MenuItem>
              <MenuItem
                disableRipple
                onClick={() => {
                  router.push("/information");
                  setHeaderDropdown(false);
                }}
              >
                Vill du veta mer?
              </MenuItem>
            </Menu>
            <Button
              disableElevation
              variant="outlined"
              type="button"
              onClick={() => router.push("/contact")}
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              Hitta hit
            </Button>
            <Button
              variant="outlined"
              type="button"
              onClick={() => router.push("/login")}
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              <Person />
            </Button>
          </Box>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              id="header__drawer-button"
              aria-controls={headerDrawer ? "header__drawer" : undefined}
              aria-expanded={headerDrawer ? "true" : undefined}
              variant="outlined"
              type="button"
              role="button"
              aria-haspopup="true"
              onClick={() => setHeaderDrawer(!headerDrawer)}
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid transparent",
              }}
            >
              {headerDrawer ? <Close /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="right"
              id="header__menu"
              open={headerDrawer}
              onClose={() => setHeaderDrawer(false)}
              hideBackdrop
              variant="temporary"
              sx={{
                top: "80px",
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  top: "80px",
                  width: "100%",
                  backgroundColor: "#111",
                  color: "#fff",
                },
              }}
            >
              <Box component="section" role="presentation">
                <List>
                  <Accordion
                    defaultExpanded
                    sx={{ backgroundColor: "#111", color: "#fff" }}
                  >
                    <AccordionSummary
                      sx={{
                        "& .MuiAccordionSummary-content": {
                          display: "grid",
                          placeItems: "center",
                          textAlign: "center",
                        },
                      }}
                      expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
                    >
                      <Typography>Om Eljusspåret</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              "& .MuiListItemText-root": {
                                display: "grid",
                                placeItems: "center",
                                textAlign: "center",
                              },
                            }}
                            onClick={() => {
                              router.push("/project");
                              setHeaderDrawer(!headerDrawer);
                            }}
                          >
                            <ListItemText primary="Projektet Naturkraft" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              "& .MuiListItemText-root": {
                                display: "grid",
                                placeItems: "center",
                                textAlign: "center",
                              },
                            }}
                            onClick={() => {
                              router.push("/cooperation");
                              setHeaderDrawer(!headerDrawer);
                            }}
                          >
                            <ListItemText primary="Samarbetspartners" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              "& .MuiListItemText-root": {
                                display: "grid",
                                placeItems: "center",
                                textAlign: "center",
                              },
                            }}
                            onClick={() => {
                              router.push("/information");
                              setHeaderDrawer(!headerDrawer);
                            }}
                          >
                            <ListItemText primary="Vill du veta mer?" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        "& .MuiListItemText-root": {
                          display: "grid",
                          placeItems: "center",
                          textAlign: "center",
                        },
                      }}
                      onClick={() => {
                        router.push("/contact");
                        setHeaderDrawer(!headerDrawer);
                      }}
                    >
                      <ListItemText primary="Hitta hit" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
