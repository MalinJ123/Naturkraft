import {
	Box,
	Container,
	Typography,
	Card,
	CardHeader,
	CardContent,
	Stack,
	Button
  } from "@mui/material/";
  import Title from "@/components/title";
  import ArrowBackIcon from "@mui/icons-material/ArrowBack";
  import { useRouter } from "next/router";
  
  export default function EnvironmentInfo() {
  
  const router = useRouter(); 
  
	return (
	  <Box
		component="section"
		display="flex"
		flexDirection="column"
		justifyContent="center"
		gap={12}
		marginTop={6}
        marginBottom={10}
	  >
		<Title />
		<Container 
			sx={{ 
				padding: {xs: 0, sm: 0}, 
				width: { xs: "100%", md: "80%", lg: "55%" }
				}}
			>
		  <Card 
		  	sx={{
				padding: { xs: 2, sm: 2, md: 4, lg: 4 }, backgroundColor: "white", 
				borderRadius: { sm: 0, sm:"25px"}
				}} 
				elevation={2} 
			>
			  <Box 
			  	sx={{ 
					display: "flex", 
					justifyContent: "space-between", 
					alignItems: "center", 
					}}
				>
				  <Button
					  variant="outlined"
					  startIcon={<ArrowBackIcon />}
					  sx={{
						color: "black", 
						borderColor: "black", 
						fontWeight: "bold", 
						fontSize: "14px"
					}}
					  onClick={() => router.push("/loggedinstart")}
					  > 
						<Box sx={{display: {xs: "none", sm: "none", md: "block"}}}>
							Tillbaka
						</Box>
					  </Button>
			  	<Box sx={{ 
					flexGrow: 1, 
					textAlign: {xs: "flex-start", sm: "center", md: "left", }}}>
			  <CardHeader
				  title="Miljöläge"
				  titleTypographyProps={{
					  textAlign: {xs: "flex-start", sm: "center", md: "center" },
					  fontWeight: "bold",
					  fontSize: { xs: 20, md: 24 },
					  marginRight: {xs: 0, sm: 15},
					  padding: {xs: 0, sm: 0,}
				  }}
				  />
			  </Box>
			  </Box>
			<CardContent sx={{ padding: 0 }}>
			  <Box
				component="div"
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap={2}
				marginTop={1}
			  >
			  <Stack spacing={4} direction="column">
			  <Box>
				  <Box
					  component="div"
					  sx={{
						  color: "black", 
					  }}
				  >
				  <Typography
					  variant="body1"
					  component="p"
					  sx={{ 
						fontWeight: "bolder", 
						marginBottom: 0.5, 
						fontSize: { xs: 16, md: 18 }, }}
				  >
					  Beskrivning:
				  </Typography>
					  <Typography
					  variant="body1"
					  component="p"
					  sx={{
					  fontSize: { xs: 14, md: 16 },
					  color: "black",
					  }}
					  >
					  	I detta läge kommer systemet att köpa så lite från nätet som möjligt 
						för att säkerställa användandet av grön energi från panelerna och därmed 
						ha så låg klimatpåverkan som möjligt. Detta läge är dyrare då mindre el kommer säljas från batteriet. 
						Belysningen kommer att hållas på minimal nivå för att inte störa djur och insekter i skogen.
					  </Typography>
				  </Box>
				  <Box
					  component="div"
					  sx={{
						  color: "black", 
						  marginTop: 2
					  }}
				  >
					  <Typography
						  variant="body1"
						  component="p"
						  sx={{ 
							fontWeight: "bolder", 
							marginBottom: 0.5, 
							fontSize: { xs: 16, md: 18 } }}
					  >
						  Belysning:
					  </Typography>
					  <Typography
						  variant="body1"
						  component="p"
						  sx={{
							marginLeft: {sm: 0, md: 2 }, 
							fontSize: {xs: 15, md: 15}}}
					  >
						  <b>Start:</b> 10% passivt, 70% aktivt
					  </Typography>
					  <Typography
						  variant="body1"
						  component="p"
						  sx={{
							marginLeft: {sm: 0, md: 2 },
							fontSize: {xs: 15, md: 15}}}
					  >
						  <b>Resten:</b> 0% passivt, 70% aktivt
					  </Typography>
					  <Typography
						  variant="body1"
						  component="p"
						  sx={{
							marginLeft: {sm: 0, md: 2 },
							fontSize: {xs: 15, md: 15}
						}}
					  >
						Eventuellt avslagen start efter visst klockslag
					  </Typography>
				  </Box>
			  </Box>
				  <Box
					  component="div"
					  sx={{
						  color: "black", 
					  }}
				  >
				  <Typography
					   variant="h6"
					   color="black"
					   gutterBottom
					   sx={{
						 fontSize: { xs: 16, md: 18 },
						 marginBottom: 0,
						 color: "black",
						 fontWeight: "bolder"
					   }}
				  >
					  Förklaring av start och resten:
				  </Typography>
				  <Typography
					   variant="body1"
					   component="p"
					   color="black"
					   sx={{
						 fontSize: { xs: 14, md: 16 },
						 color: "black",
					   }}
				  >
					  Start är gruppen med lampor som inkluderar den första lampan vid starten av spåret och de första 5 lamporna i varje riktning.
				  </Typography>
				  </Box>
				</Stack>
			  </Box>
			</CardContent>
		  </Card>
		</Container>
	  </Box>
	);
  }