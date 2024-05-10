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
	Button
  } from "@mui/material/";

  import { contentHeight } from "@/components/layout";

export default function LoggedInStart() {

	return (
		<Container
        sx={{
          marginTop: 8,
          marginBottom: 8,
          padding: { xs: 0 },
          height: { contentHeight },
        }}
      >
		<Box
          component="section"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={6}
        >
          <Container sx={{ padding: { xs: 0} }}>
            <Card sx={{ backgroundColor: "opacityLight.main", borderRadius: "30px" }} elevation={2}>
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
						I detta läge jobbar systemet för att minimera brukskostnaden. Systemet kommer att köpa från nätet när det är billigt och sälja från batteriet när det är dyrt.
                    </Typography>
					{/* <Typography
						variant="body1"
						component="ul"
						style={{fontWeight: "bolder" }}
						sx={{
							paddingX: {xs: 0.5, md: 6},
							fontSize: {xs: 18, md: 16},
							color: "black", 
						}}>
							<li>Ljus</li>
							<li>Belysning</li>

					</Typography> */}

				<Box
				sx={{
					display: "flex", 
					justifyContent: "flex-end"
				}}>
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
				}}>
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
					underline="link"
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
				}}>Mer info</Link>
					</CardActions>
				
				</Box>		
					</Stack>
				</Box>
				</CardContent>
			  </Card>
			</Container>
			<Container sx={{ padding: { xs: 0 } }}>
            	<Card sx={{ backgroundColor: "opacityLight.main",borderRadius: "30px" }} elevation={2}>
				<CardHeader
					title="Miljöläge"
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
						I detta läge kommer systemet att köpa så lite från nätet som möjligt för att säkerställa användandet av grön energi från panelerna och därmed ha så låg klimatpåverkan som möjligt. Detta läge är dyrare då mindre el kommer säljas från batteriet. Belysningen kommer att hållas på minimal nivå för att inte störa djur och insekter i skogen.
							{/* <ul>
								<li>Batterisystem</li>
								<li>Belysning</li>
							</ul> */}
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
					underline="link"
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
				}}>Mer info</Link>
				</CardActions>
				</Stack>
				</Box>
				</CardContent>
			  </Card>
			</Container>
			<Container sx={{ padding: { xs: 0 } }}>
            	<Card sx={{ backgroundColor: "opacityLight.main",borderRadius: "30px" }} elevation={2}>
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
						Detta läge är ekonomiläge anpassat för när det kommit snö. Belysningen kommer att dämpas så ljuset inte bländar pga snöns reflektion.
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
					underline="link"
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
				}}>Mer info</Link>
				</CardActions>
				</Stack>
				</Box>
				</CardContent>
			  </Card>
			</Container>
		</Box>
	</Container>
	)
}