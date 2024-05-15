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
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
} from "@mui/material/";
import { Check } from "@mui/icons-material";

export default function LoggedInStart() {
  const [systemStatus, setSystemStatus] = useState(true);
  const [currentMode, setCurrentMode] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false); 
  const [selectedMode, setSelectedMode] = useState(null); 

  const handleModeChange = (mode) => {
	setCurrentMode(mode)
	setDialogOpen(false)
  }

  const handleClickOpen = (mode) => {
    setSelectedMode(mode); 
    setDialogOpen(true)
}

  const handleClose = () => {
	setDialogOpen(false); 
  }

const renderDialogContent = () => {
  switch (selectedMode) {
    case "economy": 
      return "Vill du byta styrningen till Ekonomiläge?"
    case "environment": 
      return "Vill du byta styrningen till Miljöläge?"
    case "snow": 
      return "Vill du byta styrningen till Snöläge?"
    default: 
      return ""; 
  }
}

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
        <Container sx={{ padding: { xs: 0} }}>
          <Card
            sx={{
              backgroundColor: "opacityLight.main",
              borderRadius: "56px",
              backgroundColor: currentMode === "economy" ? "rgba(162, 214, 163, 0.9)" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
            title={
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
              <Typography
                variant="h5"
                sx={{fontWeight: "bold", marginTop: currentMode === "economy" ? 1 : 0, textAlign: "center", flex: 1}}>
                Ekonomiläge
              </Typography>
              {currentMode === "economy" && (	
                <Typography
                  variant="body1"
                  component="span"
                  sx={{fontWeight: "bold", color: "black", fontSize: "25px", marginRight: 1 
                  }}
					    >
					      AKTIV	
				      </Typography>
					  )}
			      </Box>
			      }
			      sx={{marginTop:4}}
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
                padding="30px"
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
					          {currentMode !== "economy" && (
                      <Button
                        component="button"
                        variant="contained"
						            color="success"
                        role="button"
                        type="button"
                        sx={{
                          backgroundColor: "#33b249",
                          border: "1px solid grey",
                          borderRadius: "10px",
                          marginBottom: { xs: 2, md: 3 },
                          fontSize: { xs: 16, md: 16 },
                          color: "black",
                          fontWeight: "bold",
                          padding: 1.5,
						              '&:hover': {
							            backgroundColor: "darkgreen",
							            color: "white", 
						              }
                        }}
                        onClick={() => handleClickOpen('economy')}
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
              borderRadius: "30px",
              backgroundColor: currentMode === "environment" ? "rgba(162, 214, 163, 0.9)" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
			      title={
				    <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
					  <Typography
					    variant="h5"
					    sx={{fontWeight: "bold", marginTop: currentMode === "environment" ? 1 : 0, textAlign: "center", flex: 1}}>
					    Miljöläge
					  </Typography>
					{currentMode === "environment" && (	
						<Typography
						variant="body1"
						component="span"
						sx={{fontWeight: "bold", color: "black", fontSize: "25px", marginRight: 1 
							}}
						>
						AKTIV	
					</Typography>
						)}
				</Box>
				}
				sx={{marginTop:4}}
				/>
            <CardContent sx={{ padding: 0 }}>
              <Box
                component="div"
                display="flex"
                style={{ fontWeight: "bold" }}
                flexDirection="column"
                alignItems="center"
                gap={2}
                // margin={2}
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
					      {currentMode !== "environment" && (
                      <Button
                        component="button"
                        variant="contained"
						            color="success"
                        role="button"
                        type="button"
                        sx={{
                          backgroundColor: "#33b249",
                          border: "1px solid grey",
                          borderRadius: "10px",
                          marginBottom: { xs: 2, md: 3 },
                          fontSize: { xs: 16, md: 16 },
                          color: "black",
                          fontWeight: "bold",
                          padding: 1.5,
						              '&:hover': {
							            backgroundColor: "darkgreen",
							            color: "white", 
						              }
                        }}
                        onClick={() => handleClickOpen('environment')}
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
              borderRadius: "30px",
              backgroundColor: currentMode === "snow" ? "rgba(162, 214, 163, 0.9)" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
             title={
				    <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
					  <Typography
					    variant="h5"
					    sx={{fontWeight: "bold", marginTop: currentMode === "snow" ? 1 : 0, textAlign: "center", flex: 1}}>
					    Snöläge
					  </Typography>
					{currentMode === "snow" && (	
						<Typography
						variant="body1"
						component="span"
						sx={{fontWeight: "bold", color: "black", fontSize: "25px", marginRight: 1 
							}}
						>
						AKTIV	
					</Typography>
						)}
				</Box>
				}
				sx={{marginTop:4}}
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
					      {currentMode !== "snow" && (
                      <Button
                        component="button"
                        variant="contained"
						            color="success"
                        role="button"
                        type="button"
                        sx={{
                          backgroundColor: "#33b249",
                          border: "1px solid grey",
                          borderRadius: "10px",
                          marginBottom: { xs: 2, md: 3 },
                          fontSize: { xs: 16, md: 16 },
                          color: "black",
                          fontWeight: "bold",
                          padding: 1.5,
						              '&:hover': {
							            backgroundColor: "darkgreen",
							            color: "white", 
						              }
                        }}
                        onClick={() => handleClickOpen('snow')}
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
      <Dialog open={dialogOpen} onClose={handleClose} aria-labelledby="mode-dialog-title">
        <DialogTitle id="mode-dialog-title">Valt läge</DialogTitle>
        <DialogContent>
          <Typography variant="body1" fontWeight="bold" marginTop="5px">{renderDialogContent()}</Typography>
        </DialogContent>
          <DialogActions>
            <Box
              sx={{
                display: "flex", 
                justifyContent: "center", 
                width: "100%", 
                marginBottom: '15px'
            }}>
              <Button 
                onClick={() => handleModeChange(selectedMode)}
                color="primary"
                variant="contained"
                sx={{
                  margin: "15px"
                }}
                > 
                Ja
              </Button>
              <Button 
                onClick={handleClose} 
                color="primary"
                variant="contained"
                sx={{
                  margin: "15px"
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
