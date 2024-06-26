import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
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
  CircularProgress,
} from "@mui/material/";
import { FiberManualRecord, Check } from "@mui/icons-material";
import dotenv from "dotenv";
import axios from "axios";
import { useRouter } from "next/router";
import Title from "@/components/title";

import { useStore } from "@/stores/store";

export default function LoggedInStart() {
  const { data: status } = useSession();
  const [systemStatus, setSystemStatus] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [serverMode, setServerMode] = useState("");
  const [changeMode, setChangeMode] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { authorizedState, setAuthorizedState } = useStore();

  dotenv.config();

  const renderDialogModeContent = () => {
    switch (changeMode) {
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
        `${process.env.BACKEND_LOCATION}/pie/getMode`
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

  const handleModeChange = async (mode) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.BACKEND_LOCATION}/pie/postMode`,
        { mode: mode }
      );
      if (response.status === 200) {
        console.log(response.data);
        setServerMode(response.data);
        setLoading(false);
        setDialogOpen(false);
      } else {
        setLoading(false);
        setDialogOpen(false);
        console.error("Något gick snett!", response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setDialogOpen(false);
      console.error("Ett fel uppstod:", error.message);
    }
  };

  const handleClickOpen = (mode) => {
    setChangeMode(mode);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    getMode();
  }, [getMode]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      setAuthorizedState(true);
    }
  }, [status, router, setAuthorizedState]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Box component="section">
      <Title />
      <Alert variant="filled" severity={systemStatus ? "success" : "error"}>
        <AlertTitle>{systemStatus ? "Inget fel!" : "Kritiskt fel!"}</AlertTitle>
        {systemStatus
          ? "Allt fungerar som det ska"
          : "Systemet är urfunktion eller avstängt"}
      </Alert>
      {/* Knapp för att utlösa ändring av systemstatus */}
      {/* <Button
        onClick={() => setSystemStatus(!systemStatus)}
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Simulera systemfel
      </Button>
      <Typography>{serverMode}</Typography> */}
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={6}
        marginTop={8}
        marginBottom={6}
      >
        <Container
          sx={{
            padding: { xs: 0 },
            width: { xs: "100%", md: "80%", lg: "55%" },
          }}
        >
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: { sm: 0, md: "5px" },
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
                    gridTemplateColumns: "75px 1fr 75px",
                  }}
                >
                  <Box width="30px"></Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: { xs: 18, md: 20 },
                      marginTop: serverMode === "EKO" ? 1 : 0,
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    Ekonomiläge
                  </Typography>
                  {serverMode === "EKO" && (
                    <Check
                      sx={{
                        color: "#ff",
                        fontSize: "30px",
                        marginTop: 0.7,
                      }}
                    />
                  )}
                </Box>
              }
              sx={{
                marginTop: 4,
                padding: 0,
              }}
            />
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                paddingBottom={0}
              >
                <Stack direction="column">
                  <Box
                    sx={{
                      paddingX: { xs: 2, sm: 3 },
                      paddingTop: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ fontWeight: "bolder" }}
                      sx={{
                        fontSize: { xs: 14, md: 16 },
                        color: "black",
                      }}
                    >
                      I detta läge jobbar systemet för att minimera
                      brukskostnaden. Systemet kommer att köpa från nätet när
                      det är billigt och sälja från batteriet när det är dyrt.
                    </Typography>
                    <List>
                      <ListItem
                        sx={{
                          marginRight: 1,
                          padding: 0,
                          marginLeft: {
                            sm: 0,
                            md: 2,
                          },
                        }}
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
                              fontSize: "15px",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          padding: 0,
                          marginLeft: { sm: 0, md: 2 },
                        }}
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
                              fontSize: "15px",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        serverMode === "EKO"
                          ? { xs: "flex-end", sm: "flex-end" }
                          : { xs: "center", sm: "flex-end", md: "flex-end" },
                    }}
                  >
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginX: { xs: 2, sm: 2, md: 6 },
                        padding: 0,
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
                            marginTop: { xs: 1 },
                            marginRight: { xs: 2, md: 2 },
                            fontSize: { xs: 12, md: 14 },
                            color: "white",
                            fontWeight: "bold",
                            boxShadow: "none",
                            "&:hover": {
                              backgroundColor: "#33b249",
                              color: "white",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => handleClickOpen("EKO")}
                        >
                          Välj läge
                        </Button>
                      )}
                      <Button
                        component="button"
                        variant="outlined"
                        color="primary"
                        role="button"
                        type="button"
                        sx={{
                          marginTop: { xs: 1 },
                          fontSize: { xs: 12, md: 14 },
                          fontWeight: "bold",
                          borderColor:
                            serverMode === "EKO" ? "black" : undefined,
                          color: serverMode === "EKO" ? "black" : undefined,
                          "&:hover": {
                            color: "black",
                          },
                        }}
                        onClick={() => router.push("/admin/info/economyInfo")}
                      >
                        Mer info
                      </Button>
                    </CardActions>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
        <Container
          sx={{
            padding: { xs: 0 },
            width: { xs: "100%", md: "80%", lg: "55%" },
          }}
        >
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: { sm: 0, md: "5px" },
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
                    gridTemplateColumns: "75px 1fr 75px",
                  }}
                >
                  <Box width="30px"></Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: { xs: 18, md: 20 },
                      marginTop: serverMode === "ENV" ? 1 : 0,
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    Miljöläge
                  </Typography>
                  {serverMode === "ENV" && (
                    <Check
                      sx={{
                        color: "#ff",
                        fontSize: "30px",
                        marginTop: 0.7,
                      }}
                    />
                  )}
                </Box>
              }
              sx={{
                marginTop: 4,
                padding: 0,
              }}
            />
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                paddingBottom={0}
              >
                <Stack direction="column">
                  <Box
                    sx={{
                      paddingX: { xs: 2, sm: 3 },
                      paddingTop: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ fontWeight: "bolder" }}
                      sx={{
                        fontSize: { xs: 14, md: 16 },
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
                        sx={{
                          marginRight: 1,
                          padding: 0,
                          marginLeft: { sm: 0, md: 2 },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "unset",
                            paddingRight: 1,
                          }}
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
                              fontSize: "15px",
                            },
                          }}
                        />
                      </ListItem>
                      <ListItem
                        sx={{
                          padding: 0,
                          marginLeft: { sm: 0, md: 2 },
                        }}
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
                              fontSize: "15px",
                            },
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        serverMode === "ENV"
                          ? { xs: "flex-end", sm: "flex-end" }
                          : { xs: "center", sm: "flex-end", md: "flex-end" },
                    }}
                  >
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginX: { xs: 2, sm: 2, md: 6 },
                        padding: 0,
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
                            marginTop: { xs: 1 },
                            marginRight: { xs: 2, md: 2 },
                            fontSize: { xs: 12, md: 14 },
                            color: "white",
                            fontWeight: "bold",
                            boxShadow: "none",
                            "&:hover": {
                              backgroundColor: "#33b249",
                              color: "white",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => handleClickOpen("ENV")}
                        >
                          Välj läge
                        </Button>
                      )}
                      <Button
                        component="button"
                        variant="outlined"
                        color="primary"
                        role="button"
                        type="button"
                        sx={{
                          marginTop: { xs: 1 },
                          fontSize: { xs: 12, md: 14 },
                          fontWeight: "bold",
                          borderColor:
                            serverMode === "ENV" ? "black" : undefined,
                          color: serverMode === "ENV" ? "black" : undefined,
                          "&:hover": {
                            color: "black",
                          },
                        }}
                        onClick={() =>
                          router.push("/admin/info/environmentInfo")
                        }
                      >
                        Mer info
                      </Button>
                    </CardActions>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
        <Container
          sx={{
            padding: { xs: 0 },
            width: { xs: "100%", md: "80%", lg: "55%" },
          }}
        >
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: { sm: 0, md: "5px" },
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
                    gridTemplateColumns: "75px 1fr 75px",
                  }}
                >
                  <Box width="30px"></Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: { xs: 18, md: 20 },
                      marginTop: serverMode === "SNO" ? 1 : 0,
                      textAlign: "center",
                      display: "inline-block",
                    }}
                  >
                    Snöläge
                  </Typography>
                  {serverMode === "SNO" && (
                    <Check
                      sx={{
                        color: "#ff",
                        fontSize: "30px",
                        marginTop: 0.7,
                      }}
                    />
                  )}
                </Box>
              }
              sx={{
                marginTop: 4,
                padding: 0,
              }}
            />
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                paddingBottom={0}
              >
                <Stack direction="column">
                  <Box
                    sx={{
                      padding: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ fontWeight: "bolder" }}
                      sx={{
                        fontSize: { xs: 14, md: 16 },
                        color: "black",
                      }}
                    >
                      Detta läge är ekonomiläge anpassat för när det kommit snö.
                      Belysningen kommer att dämpas så ljuset inte bländar pga
                      snöns reflektion.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent:
                        serverMode === "SNO"
                          ? { xs: "flex-end", sm: "flex-end", md: "flex-end" }
                          : { xs: "center", sm: "flex-end", md: "flex-end" },
                    }}
                  >
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginX: { xs: 2, sm: 2, md: 6 },
                        padding: 0,
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
                            marginTop: { xs: 1 },
                            marginRight: { xs: 2, md: 2 },
                            fontSize: { xs: 12, md: 14 },
                            color: "white",
                            fontWeight: "bold",
                            boxShadow: "none",
                            "&:hover": {
                              backgroundColor: "#33b249",
                              color: "white",
                              boxShadow: "none",
                            },
                          }}
                          onClick={() => handleClickOpen("SNO")}
                        >
                          Välj läge
                        </Button>
                      )}
                      <Button
                        component="button"
                        variant="outlined"
                        color="primary"
                        role="button"
                        type="button"
                        sx={{
                          marginTop: { xs: 1 },
                          fontSize: { xs: 12, md: 14 },
                          fontWeight: "bold",
                          borderColor:
                            serverMode === "SNO" ? "black" : undefined,
                          color: serverMode === "SNO" ? "black" : undefined,
                          "&:hover": {
                            color: "black",
                          },
                        }}
                        onClick={() => router.push("/admin/info/snowInfo")}
                      >
                        Mer info
                      </Button>
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
        <DialogTitle id="mode-dialog-title">Byta styrläge</DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            fontWeight="bold"
            marginTop="5px"
            fontSize={{ xs: 14, sm: 16 }}
          >
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
      <Dialog open={loading} aria-labelledby="loading-dialog-title">
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <CircularProgress />
          <Typography
            variant="body1"
            fontWeight="bold"
            marginTop="20px"
            fontSize={{ xs: 14, sm: 16 }}
            textAlign="center"
          >
            Laddar...
          </Typography>
          <Typography
            variant="body1"
            fontWeight="bold"
            marginTop="20px"
            fontSize={{ xs: 14, sm: 16 }}
            textAlign="center"
          >
            Kan ta upp till 40s - 4min
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
