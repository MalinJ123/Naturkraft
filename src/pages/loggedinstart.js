import { contentHeight } from "@/components/layout";
import { useState } from "react";
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
} from "@mui/material/";
import { Check } from "@mui/icons-material";

export default function LoggedInStart() {
  const [systemStatus, setSystemStatus] = useState(true);
  const [currentMode, setCurrentMode] = useState("eco");

  return (
    <Box component="section" marginY={8} height={contentHeight}>
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
              borderRadius: "30px",
              backgroundColor: currentMode === "economy" ? "green" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
              title="Ekonomiläge"
              titleTypographyProps={{
                textAlign: "center",
                fontSize: { xs: 20, md: 25 },
                marginTop: 4,
                fontWeight: "bold",
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
                margin={0.5}
              >
                <Stack spacing={4} direction="column">
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 10 },
                      fontSize: { xs: 18, md: 16 },
                      color: "black",
                    }}
                  >
                    I detta läge jobbar systemet för att minimera
                    brukskostnaden. Systemet kommer att köpa från nätet när det
                    är billigt och sälja från batteriet när det är dyrt.
                  </Typography>
                  <Typography
                    variant="body1"
                    component="ul"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 18, md: 16 },
                      color: "black",
                    }}
                  >
                    <List>
                      <ListItem>Ljus</ListItem>
                      <ListItem>Belysning</ListItem>
                    </List>
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <CardActions
                      className="bold"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginRight: { xs: 0, md: 10 },
                      }}
                    >
                      <Button
                        underline="link"
                        component="button"
                        variant="body1"
                        role="button"
                        type="button"
                        sx={{
                          backgroundColor: "lightgrey",
                          border: "1px solid grey",
                          borderRadius: "10px",
                          marginBottom: { xs: 2, md: 3 },
                          fontSize: { xs: 16, md: 16 },
                          color: "black",
                          fontWeight: "bold",
                          padding: 1.5,
                        }}
                        onClick={() => setCurrentMode("economy")}
                      >
                        Välj detta läge
                      </Button>
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
              borderRadius: "30px",
              backgroundColor: currentMode === "eco" ? "green" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
              title="Ekoläge"
              titleTypographyProps={{
                textAlign: "center",
                fontSize: { xs: 30, md: 25 },
                marginTop: 4,
                fontWeight: "bold",
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
                margin={2}
              >
                <Stack spacing={4} direction="column">
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 18, md: 16 },
                      color: "black",
                    }}
                  >
                    I detta läge kommer systemet att köpa så lite från nätet som
                    möjligt för att säkerställa användandet av grön energi från
                    panelerna och därmed ha så låg klimatpåverkan som möjligt.
                    Detta läge är dyrare då mindre el kommer säljas från
                    batteriet. Belysningen kommer att hållas på minimal nivå för
                    att inte störa djur och insekter i skogen.
                  </Typography>
                  <Typography
                    variant="body1"
                    component="ul"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 18, md: 16 },
                      color: "black",
                    }}
                  >
                    <List>
                      <ListItem>Batterisystem</ListItem>
                      <ListItem>Belysning</ListItem>
                    </List>
                  </Typography>
                  <CardActions
                    className="bold"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: { xs: 0, md: 10 },
                    }}
                  >
                    <Link
                      className="link-hover"
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
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
        <Container sx={{ padding: { xs: 0 } }}>
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: "30px",
              backgroundColor: currentMode === "snow" ? "green" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
              title="Snöläge"
              titleTypographyProps={{
                textAlign: "center",
                fontSize: { xs: 30, md: 25 },
                marginTop: 4,
                fontWeight: "bold",
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
                margin={2}
              >
                <Stack spacing={4} direction="column">
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontWeight: "bolder" }}
                    sx={{
                      paddingX: { xs: 0.5, md: 6 },
                      fontSize: { xs: 18, md: 16 },
                      color: "black",
                    }}
                  >
                    Detta läge är ekonomiläge anpassat för när det kommit snö.
                    Belysningen kommer att dämpas så ljuset inte bländar pga
                    snöns reflektion.
                  </Typography>
                  <CardActions
                    className="bold"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: { xs: 0, md: 10 },
                    }}
                  >
                    <Link
                      className="link-hover"
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
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
