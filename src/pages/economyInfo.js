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
import { contentHeight } from "@/components/layout";
import Title from "@/components/title";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

export default function EconomyInfo() {

const router = useRouter(); 

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={12}
      marginTop={10}
      marginBottom={10}
      height={contentHeight}
    >
      <Title />
      <Container sx={{ padding: { xs: 0 }}}>
        <Card sx={{ backgroundColor: "white", borderRadius: { sm: 0, md: "25px"},}} elevation={2}>
		<Box sx={{ display: "flex", justifyContent: "flex-start", padding: 2 }}>
			<Button
				variant="outlined"
				startIcon={<ArrowBackIcon />}
				sx={{color: "black", borderColor: "black", fontWeight: "bold", fontSize: "16px" }}
				onClick={() => router.push("/loggedinstart")}
				> 
				Tillbaka</Button>
			</Box>
          <CardHeader
            title="Ekonomiläge"
            titleTypographyProps={{
				textAlign: "center",
				fontWeight: "bold",
				fontSize: { xs: 28, md: 32 },
				marginBottom: 2,
            }}
          />
          <CardContent sx={{ padding: 0 }}>
            <Box
              component="div"
			  display="flex"
			  flexDirection="column"
			  alignItems="center"
			  gap={2}
			  paddingX={{ xs: "10px", md: "30px" }}
			  paddingBottom="30px"
            >
            <Stack spacing={4} direction="column">
			<Box>
				<Box
					component="div"
					sx={{
						paddingX: {xs: 0.5, md: 8},
						color: "black", 
					}}
				>
				<Typography
					variant="body1"
					component="p"
					sx={{ fontWeight: "bolder", marginBottom: 0.5, fontSize: { xs: 18, md: 20 }, }}
				>
					Beskrivning:
				</Typography>
					<Typography
					variant="body1"
					component="p"
					// style={{ fontWeight: "bolder" }}
					sx={{
					fontSize: { xs: 16, md: 18 },
					color: "black",
					}}
					>
					I detta läge jobbar systemet för att minimera brukskostnaden. Systemet kommer att köpa från nätet när det är billigt och sälja från batteriet när det är dyrt.
					</Typography>
				</Box>
				<Box
					component="div"
					sx={{
						paddingX: {xs: 0.5, md: 8},
						color: "black", 
						marginTop: 2
					}}
				>
					<Typography
						variant="body1"
						component="p"
						sx={{ fontWeight: "bolder", marginBottom: 0.5, fontSize: { xs: 18, md: 20 } }}
					>
						Belysning:
					</Typography>
					<Typography
						variant="body1"
						component="p"
						sx={{marginleft: 2 }}
					>
						<b>Start:</b> 15% passivt, 70% aktivt
					</Typography>
					<Typography
						variant="body1"
						component="p"
						sx={{marginleft: 2 }}
					>
						<b>Resten:</b> 5% passivt, 70% aktivt
					</Typography>
				</Box>
			</Box>
				<Box
					component="div"
					sx={{
						paddingX: {xs: 0.5, md: 8},
						color: "black", 
					}}
				>
                <Typography
                     variant="h6"
					 color="black"
					 gutterBottom
					 sx={{
					   fontSize: { xs: 18, md: 20 },
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
					   fontSize: { xs: 16, md: 18 },
					   color: "black",
					   marginBottom: 2
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

