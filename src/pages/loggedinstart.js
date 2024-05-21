import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
  Link,
  Button,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material/";
import { FiberManualRecord, Check } from "@mui/icons-material";
import { useStore } from "@/stores/store";
import dotenv from "dotenv";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoggedInStart() {
  const { authedState, setAuthedState } = useStore();
  const [systemStatus, setSystemStatus] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [serverMode, setServerMode] = useState("");
  const [changeMode, setChangeMode] = useState("");

  const router = useRouter();

  dotenv.config();

  const handleModeChange = async (mode) => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_LOCATION}postMode`,
        { mode: "KO" }
      );
      if (response.status === 200) {
        console.log(response.data);
        setServerMode(response.data);
      } else {
        console.error("Något gick snett!", response.data.message);
      }
    } catch (error) {
      console.error("Ett fel uppstod:", error.message);
    }
    setDialogOpen(false);
  };

  const handleClickOpen = (mode) => {
    setChangeMode(mode);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    setAuthedState(true);

    return () => {
      setAuthedState(false);
    };
  }, [authedState, setAuthedState]);

  const renderDialogModeContent = () => {
    switch (serverMode) {
      case "EKO":
        return "Ekonomiläge";
      case "ENV":
        return "Miljöläge";
      case "SNO":
        return "Snöläge";
      default:
        return "";
    }
  };

  const getMode = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_LOCATION}getMode`
      );
      if (response.status === 200) {
        return setServerMode(response.data);
      } else {
        console.error("Något gick snett!", response.data.message);
      }
    } catch (error) {
      console.error("Ett fel uppstod:", error.message);
    }
    return null;
  }, []);

  useEffect(() => {
    getMode();
  }, [getMode]);

  return (
    <Box component="section">
      <Alert variant="filled" severity={systemStatus ? "success" : "error"}>
        <AlertTitle>{systemStatus ? "Inget fel!" : "Kritiskt fel!"}</AlertTitle>
        {systemStatus
          ? "Allt fungerar som det ska"
          : "Systemet är urfunktion eller avstängt"}
      </Alert>
      {/* Knapp för att utlösa ändring av systemstatus */}
      <Button
        onClick={() => setSystemStatus(!systemStatus)}
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Simulera systemfel
      </Button>
      <Typography>{serverMode}</Typography>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={6}
      >
        <Container sx={{ padding: { xs: 0 } }}>
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: { sm: 0, md: "56px" },
              backgroundColor:
                serverMode === "EKO" ? "rgba(162, 214, 163, 0.9)" : undefined,
              border: serverMode === "EKO" ? "3px solid green" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
              title={
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      color: "black",
                      marginTop: serverMode === "EKO" ? 1 : 0,
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    Ekonomiläge
                  </Typography>
                  {serverMode === "EKO" && (
                    <Check
                      sx={{
                        color: "#ff",
                        fontSize: "25px",
                        marginRight: 1,
                      }}
                    />
                  )}
                </Box>
              }
              sx={{ marginTop: 4 }}
            />
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                paddingX={{ xs: "10px", md: "30px" }}
                paddingBottom="30px"
              >
                <Stack spacing={4} direction="column">
                  <Box>
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ fontWeight: "bolder" }}
                      sx={{
                        paddingX: { xs: 0.5, md: 8 },
                        fontSize: { xs: 16, md: 18 },
                        color: "black",
                      }}
                    >
                      I detta läge jobbar systemet för att minimera
                      brukskostnaden. Systemet kommer att köpa från nätet när
                      det är billigt och sälja från batteriet när det är dyrt.
                    </Typography>
                    <List>
                      <ListItem
                        sx={{ padding: 0, marginLeft: { sm: 0, md: 8 } }}
                      >
                        <ListItemIcon
                          sx={{ minWidth: "unset", paddingRight: 1 }}
                        >
                          <FiberManualRecord
                            style={{ fontSize: 10, color: "black" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Ljus"
                          primaryTypographyProps={{
                            style: {
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ padding: 0, marginLeft: { sm: 0, md: 8 } }}
                      >
                        <ListItemIcon
                          sx={{ minWidth: "unset", paddingRight: 1 }}
                        >
                          <FiberManualRecord
                            style={{ fontSize: 10, color: "black" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Belysning"
                          primaryTypographyProps={{
                            style: {
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: { xs: 0, md: 8 },
                      }}
                    >
                      {serverMode !== "EKO" && (
                        <Button
                          component="button"
                          variant="contained"
                          color="primary"
                          role="button"
                          type="button"
                          sx={{
                            border: "1px solid grey",
                            borderRadius: "10px",
                            marginBottom: { xs: 2, md: 3 },
                            fontSize: { xs: 16, md: 16 },
                            color: "black",
                            fontWeight: "bold",
                            padding: 1.5,
                            "&:hover": {
                              backgroundColor: "#33b249",
                              color: "white",
                            },
                          }}
                          onClick={() => handleClickOpen("EKO")}
                        >
                          Välj läge
                        </Button>
                      )}
                    </CardActions>
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: { xs: 0, md: 10 },
                      }}
                    >
                      <Link
                        underline="hover"
                        component="button"
                        variant="body1"
                        role="button"
                        type="button"
                        sx={{
                          marginBottom: { xs: 2, md: 3 },
                          fontSize: { xs: 16, md: 20 },
                          color: "black",
                          fontWeight: "bold",
                          padding: 1,
                        }}
                        onClick={() => router.push("/economyInfo")}
                      >
                        Mer info
                      </Link>
                    </CardActions>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
        <Container sx={{ padding: { xs: 0 } }}>
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: { sm: 0, md: "56px" },
              backgroundColor:
                serverMode === "ENV" ? "rgba(162, 214, 163, 0.9)" : undefined,
              border: serverMode === "ENV" ? "3px solid green" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
              title={
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      color: "black",
                      marginTop: serverMode === "ENV" ? 1 : 0,
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    Miljöläge
                  </Typography>
                  {serverMode === "ENV" && (
                    <Check
                      sx={{
                        color: "#ff",
                        fontSize: "25px",
                        marginRight: 1,
                      }}
                    />
                  )}
                </Box>
              }
              sx={{ marginTop: 4 }}
            />
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                paddingX={{ xs: "10px", md: "30px" }}
                paddingBottom="30px"
              >
                <Stack spacing={4} direction="column">
                  <Box>
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ fontWeight: "bolder" }}
                      sx={{
                        paddingX: { xs: 0.5, md: 8 },
                        fontSize: { xs: 16, md: 18 },
                        color: "black",
                      }}
                    >
                      I detta läge kommer systemet att köpa så lite från nätet
                      som möjligt för att säkerställa användandet av grön energi
                      från panelerna och därmed ha så låg klimatpåverkan som
                      möjligt. Detta läge är dyrare då mindre el kommer säljas
                      från batteriet. Belysningen kommer att hållas på minimal
                      nivå för att inte störa djur och insekter i skogen.
                    </Typography>
                    <List>
                      <ListItem
                        sx={{ padding: 0, marginLeft: { sm: 0, md: 8 } }}
                      >
                        <ListItemIcon
                          sx={{ minWidth: "unset", paddingRight: 1 }}
                        >
                          <FiberManualRecord
                            style={{ fontSize: 10, color: "black" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Batterisystem"
                          primaryTypographyProps={{
                            style: {
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{ padding: 0, marginLeft: { sm: 0, md: 8 } }}
                      >
                        <ListItemIcon
                          sx={{ minWidth: "unset", paddingRight: 1 }}
                        >
                          <FiberManualRecord
                            style={{ fontSize: 10, color: "black" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Belysning"
                          primaryTypographyProps={{
                            style: {
                              fontWeight: "bold",
                              color: "black",
                              fontSize: "16px",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: { xs: 0, md: 8 },
                      }}
                    >
                      {serverMode !== "ENV" && (
                        <Button
                          component="button"
                          variant="contained"
                          color="primary"
                          role="button"
                          type="button"
                          sx={{
                            border: "1px solid grey",
                            borderRadius: "10px",
                            marginBottom: { xs: 2, md: 3 },
                            fontSize: { xs: 16, md: 16 },
                            color: "black",
                            fontWeight: "bold",
                            padding: 1.5,
                            "&:hover": {
                              backgroundColor: "#33b249",
                              color: "white",
                            },
                          }}
                          onClick={() => handleClickOpen("ENV")}
                        >
                          Välj läge
                        </Button>
                      )}
                    </CardActions>
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: { xs: 0, md: 10 },
                      }}
                    >
                      <Link
                        underline="hover"
                        component="button"
                        variant="body1"
                        role="button"
                        type="button"
                        sx={{
                          marginBottom: { xs: 2, md: 3 },
                          fontSize: { xs: 16, md: 20 },
                          color: "black",
                          fontWeight: "bold",
                          padding: 1,
                        }}
                      >
                        Mer info
                      </Link>
                    </CardActions>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
        <Container sx={{ padding: { xs: 0 } }}>
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: { sm: 0, md: "56px" },
              backgroundColor:
                serverMode === "SNO" ? "rgba(162, 214, 163, 0.9)" : undefined,
              border: serverMode === "SNO" ? "3px solid green" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
              title={
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      color: "black",
                      marginTop: serverMode === "SNO" ? 1 : 0,
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    Snöläge
                  </Typography>
                  {serverMode === "SNO" && (
                    <Check
                      sx={{
                        color: "#ff",
                        fontSize: "25px",
                        marginRight: 1,
                      }}
                    />
                  )}
                </Box>
              }
              sx={{ marginTop: 4 }}
            />
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                paddingX={{ xs: "10px", md: "30px" }}
                paddingBottom="30px"
              >
                <Stack spacing={4} direction="column">
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 8 },
                      fontSize: { xs: 16, md: 18 },
                      color: "black",
                    }}
                  >
                    Detta läge är ekonomiläge anpassat för när det kommit snö.
                    Belysningen kommer att dämpas så ljuset inte bländar pga
                    snöns reflektion.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: { xs: 0, md: 8 },
                      }}
                    >
                      {serverMode !== "SNO" && (
                        <Button
                          component="button"
                          variant="contained"
                          color="primary"
                          role="button"
                          type="button"
                          sx={{
                            border: "1px solid grey",
                            borderRadius: "10px",
                            marginBottom: { xs: 2, md: 3 },
                            fontSize: { xs: 16, md: 16 },
                            color: "black",
                            fontWeight: "bold",
                            padding: 1.5,
                            "&:hover": {
                              backgroundColor: "#33b249",
                              color: "white",
                            },
                          }}
                          onClick={() => handleClickOpen("SNO")}
                        >
                          Välj läge
                        </Button>
                      )}
                    </CardActions>
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: { xs: 0, md: 10 },
                      }}
                    >
                      <Link
                        underline="hover"
                        component="button"
                        variant="body1"
                        role="button"
                        type="button"
                        sx={{
                          marginBottom: { xs: 2, md: 3 },
                          fontSize: { xs: 16, md: 20 },
                          color: "black",
                          fontWeight: "bold",
                          padding: 1,
                        }}
                      >
                        Mer info
                      </Link>
                    </CardActions>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="mode-dialog-title"
      >
        <DialogTitle id="mode-dialog-title">Byta styrläge?</DialogTitle>
        <DialogContent>
          <Typography variant="body1" fontWeight="bold" marginTop="5px">
            Vill du byta styrningen till {renderDialogModeContent()}?
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
              onClick={() => handleModeChange(changeMode)}
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
              onClick={handleClose}
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
              Nej
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
