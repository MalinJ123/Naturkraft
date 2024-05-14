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
  Popover,
} from "@mui/material/";
import { Check } from "@mui/icons-material";

export default function LoggedInStart() {
  const [systemStatus, setSystemStatus] = useState(true);
  const [currentMode, setCurrentMode] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); 

  const handleModeChange = (mode) => {
	setCurrentMode(mode)
	setAnchorEl(null)
  }

  const handleClick = (event) => {
	setAnchorEl(event.currentTarget); 
}

  const handleClose = () => {
	setAnchorEl(null); 
  }

  const open = Boolean(anchorEl)
  const id = open ? 'change-mode-popover' : undefined

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
					<div>
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
                        onClick={handleClick}
                      >
                        Välj läge
                      </Button>
						<Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							sx={{
								'&MuiPaper-root': {
									backgroundColor: 'lightgrey',
      								borderRadius: '20px',
      								boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
								}
							}}	
						>
							<Typography sx={{ padding: 3, marginTop: 2, fontWeight: "bold"}}> Vill du byta till detta styrningsläge?
							<Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "center", gap: '8px', margin: 4}}>
								<Button     
								sx={{
                          			backgroundColor: "#33b249",
                          			border: "1px solid grey",
                          			borderRadius: "10px",
                          			marginBottom: { xs: 2, md: 3 },
                          			fontSize: { xs: 16, md: 16 },
                          			color: "black",
                          			fontWeight: "bold",
                          			padding: 2,
									margin: 2, 
						  			'&:hover': {
										backgroundColor: "darkgreen",
										color: "white", 
						 			 }
                        			}} 
									onClick={() => handleModeChange("economy")}>Ja</Button>
								<Button 
									sx={{
										backgroundColor: "#33b249",
										border: "1px solid grey",
										borderRadius: "10px", 
										marginBottom: { xs: 2, md: 3 },
										fontSize: { xs: 16, md: 16 },
										color: "black",
										fontWeight: "bold",
										padding: 1.5,
										margin: 2, 
										'&:hover': {
											backgroundColor: "darkgreen",
											color: "white", 
										}
										}} 
								onClick={handleClose}>Nej</Button>								
							</Box>
							</Typography>
						</Popover>
					</div>
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
              backgroundColor: currentMode === "environment " ? "rgba(162, 214, 163, 0.9)" : undefined,
            }}
            elevation={2}
          >
            <CardHeader
			title={
				<Box sx={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center" }}>
					<Typography
					variant="h5"
					sx={{fontWeight: "bold", marginTop: currentMode === "environment " ? 1 : 0, textAlign: "center", flex: 1}}>
					Miljöläge
					</Typography>
					{currentMode === "environment " && (	
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
					{currentMode !== "environment " && (
					<div>
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
                        onClick={handleClick}
                      >
                        Välj läge
                      </Button>
					  <Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							sx={{
								'&MuiPaper-root': {
									backgroundColor: 'lightgrey',
      								borderRadius: '20px',
      								boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
								}
							}}	
						>
							<Typography sx={{ padding: 3, marginTop: 2, fontWeight: "bold"}}> Vill du byta till detta styrningsläge?
							<Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "center", gap: '8px', margin: 4}}>
								<Button     
								sx={{
                          			backgroundColor: "#33b249",
                          			border: "1px solid grey",
                          			borderRadius: "10px",
                          			marginBottom: { xs: 2, md: 3 },
                          			fontSize: { xs: 16, md: 16 },
                          			color: "black",
                          			fontWeight: "bold",
                          			padding: 2,
									margin: 2, 
						  			'&:hover': {
										backgroundColor: "darkgreen",
										color: "white", 
						 			 }
                        			}} 
									onClick={() => handleModeChange("environment")}>Ja</Button>
								<Button 
									sx={{
										backgroundColor: "#33b249",
										border: "1px solid grey",
										borderRadius: "10px", 
										marginBottom: { xs: 2, md: 3 },
										fontSize: { xs: 16, md: 16 },
										color: "black",
										fontWeight: "bold",
										padding: 1.5,
										margin: 2, 
										'&:hover': {
											backgroundColor: "darkgreen",
											color: "white", 
										}
										}} 
								onClick={handleClose}>Nej</Button>								
							</Box>
							</Typography>
					  </Popover>
					  </div>

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
					<div>
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
                        onClick={handleClick}
                      >
                        Välj läge
                      </Button>
					  <Popover
							id={id}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							// anchorReference="anchorPosition"
							// anchorPosition={{top: 450, left: 500}}
							sx={{
								'&MuiPaper-root': {
									backgroundColor: 'lightgrey',
      								borderRadius: '20px',
      								boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
								}
							}}	
						>
							<Typography sx={{ padding: 3, marginTop: 2, fontWeight: "bold"}}> Vill du byta till detta styrningsläge?
							<Box sx={{ display: "flex", flexDirection: 'row', justifyContent: "center", gap: '8px', margin: 4}}>
								<Button     
								sx={{
                          			backgroundColor: "#33b249",
                          			border: "1px solid grey",
                          			borderRadius: "10px",
                          			marginBottom: { xs: 2, md: 3 },
                          			fontSize: { xs: 16, md: 16 },
                          			color: "black",
                          			fontWeight: "bold",
                          			padding: 2,
									margin: 2, 
						  			'&:hover': {
										backgroundColor: "darkgreen",
										color: "white", 
						 			 }
                        			}} 
									onClick={() => handleModeChange("snow")}>Ja</Button>
								<Button 
									sx={{
										backgroundColor: "#33b249",
										border: "1px solid grey",
										borderRadius: "10px", 
										marginBottom: { xs: 2, md: 3 },
										fontSize: { xs: 16, md: 16 },
										color: "black",
										fontWeight: "bold",
										padding: 1.5,
										margin: 2, 
										'&:hover': {
											backgroundColor: "darkgreen",
											color: "white", 
										}
										}} 
								onClick={handleClose}>Nej</Button>								
							</Box>
							</Typography>
						</Popover>

					</div>
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
    </Box>
  );
}
