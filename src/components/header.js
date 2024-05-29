import { useRouter } from "next/router";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Container,
  Box,
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
  Divider,
  Stack,
} from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  Close,
  Person,
  AdminPanelSettingsOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

import { headerHeight } from "./layout";
import hillringsbergIFLogo from "@/images/main/logotype.png";
import { darkTheme } from "@/styles/darkTheme";
import { mainTheme } from "@/styles/mainTheme";
import { useStore } from "@/stores/store";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { authorizedState, setAuthorizedState } = useStore();

  // Dropdown
  const [headerDropdown, setHeaderDropdown] = useState(false);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);

  // Drawer
  const [headerDrawer, setHeaderDrawer] = useState(false);

  // Logout overlay
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogoutOpen = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutClose = () => {
    setLogoutDialogOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });

      setAuthorizedState(false);

      router.push("/");
      setLogoutDialogOpen(false);
    } catch (error) {
      return null;
    }
  };

  return (
    <ThemeProvider theme={{ darkTheme, mainTheme }}>
      <AppBar
        position="static"
        sx={{
          height: headerHeight,
          backgroundColor: "wrapper.main",
          color: "wrapper.contrastText",
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
            {status === "authenticated" ? (
              <IconButton
                size="small"
                type="button"
                title="Navigera till kontrollpanelen"
                onClick={() => router.push("/admin/dashboard")}
                sx={{
                  "*": {
                    width: "55px",
                    height: "auto",
                  },
                }}
              >
                <Image
                  priority
                  src={hillringsbergIFLogo}
                  alt="Hillringsbergslogga"
                  width="auto"
                  quality={85}
                  style={{
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                size="small"
                type="button"
                title="Navigera till startsidan"
                onClick={() => {
                  router.push("/");
                  setHeaderDrawer(false);
                }}
                sx={{
                  "*": {
                    width: "55px",
                    height: "auto",
                  },
                }}
              >
                <Image
                  priority
                  src={hillringsbergIFLogo}
                  alt="Hillringsbergslogga"
                  width="auto"
                  quality={85}
                  style={{
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                  }}
                />
              </IconButton>
            )}

            {status === "authenticated" ? (
              <Box
                justifyContent="flex-end"
                sx={{ flexGrow: 1, display: { xs: "flex" } }}
              >
                <Stack
                  display="inline-flex"
                  direction="row"
                  alignContent="center"
                  alignItems="center"
                  spacing={1}
                  marginRight="7.5px"
                >
                  <Stack direction="row" spacing={1}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#fff",
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      Välkommen
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {session.user.username}
                    </Typography>
                  </Stack>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ backgroundColor: "#fff" }}
                  />
                </Stack>
                <Button
                  disableElevation
                  variant="outlined"
                  type="button"
                  role="button"
                  onClick={() => router.push("/admin/dashboard")}
                  sx={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid transparent",
                  }}
                >
                  <AdminPanelSettingsOutlined
                    sx={{ display: { xs: "block", md: "none" } }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    Kontrollpanel
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  type="button"
                  role="button"
                  onClick={handleLogoutOpen}
                  sx={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid transparent",
                  }}
                >
                  <LogoutIcon />
                </Button>
              </Box>
            ) : (
              <>
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
                    role="button"
                    title="Länkar till sidor om Eljusspåret"
                    aria-haspopup="true"
                    onClick={(event) => {
                      setHeaderDropdown(!headerDropdown);
                      setDropdownAnchorEl(event.currentTarget);
                    }}
                    disableElevation
                    endIcon={
                      headerDropdown ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )
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
                    MenuListProps={{
                      "aria-labelledby": "header__dropdown-button",
                    }}
                    open={headerDropdown}
                    onClose={() => setHeaderDropdown(false)}
                    anchorEl={dropdownAnchorEl}
                    sx={{
                      "& .MuiMenu-paper": {
                        backgroundColor: "#111",
                        color: "#fff",
                      },
                    }}
                  >
                    <MenuItem
                      disableRipple
                      onClick={() => {
                        router.push("/project");
                        setHeaderDropdown(false);
                      }}
                    >
                      Elljusspåret i Glava
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
                    role="button"
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
                    role="button"
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
                    variant="outlined"
                    type="button"
                    role="button"
                    onClick={() => router.push("/login")}
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      border: "1px solid transparent",
                    }}
                  >
                    <Person />
                  </IconButton>
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
                        backgroundColor: "#060606",
                        color: "#fff",
                      },
                    }}
                  >
                    <Box component="section" role="presentation">
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
                            <ListItemText primary="Elljusspåret i Glava" />
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
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        open={logoutDialogOpen}
        onClose={handleLogoutClose}
        aria-labelledby="logout-dialog-title"
      >
        <DialogTitle id="logout-dialog-title">Logga ut</DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            fontWeight="bold"
            marginTop="5px"
            fontSize={{ xs: 14, sm: 16 }}
          >
            Är du säker på att du vill logga ut?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginBottom: "15px",
            }}
          >
            <Button
              onClick={handleLogout}
              color="primary"
              variant="contained"
              sx={{
                margin: "15px",
                "&:hover": {
                  backgroundColor: "#33b249",
                  color: "white",
                },
              }}
            >
              Ja
            </Button>
            <Button
              onClick={handleLogoutClose}
              color="primary"
              variant="contained"
              sx={{
                margin: "15px",
                "&:hover": {
                  backgroundColor: "#BB6246",
                  color: "white",
                },
              }}
            >
              Nej
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
