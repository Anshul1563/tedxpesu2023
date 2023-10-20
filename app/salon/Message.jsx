import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";
import salongif from "../../assets/images/salon.gif";

const Message = ({ color }) => {
	return (
		<div
			style={{
				backgroundColor: "black",
				paddingTop: 140,
				paddingBottom: 100,
				width: "100%",
			}}
			className="about"
			id="about"
		>
			<Grid container className="justify-center" justify="center">
				<Typography
					component="span"
					variant="h2"
					style={{
						mixBlendMode: "difference",
						color: "red",
						fontWeight: 600,
						fontSize: "70px",
						fontFamily: "Poppins",
						textAlign: "center",
						paddingBottom: "-40px",
					}}
					align="center"
				>
					{" "}
					TEDxPESU Salon
				</Typography>

				<Grid
					container
					justify="center"
					style={{
						width: "100%",
						marginTop: "50px",
						display: "flex",
						flexWrap: "wrap",
						padding: "20px",
					}}
				>
					<Grid item xs={12} md={6} sm={12}>
						<Typography
							variant="h4"
							style={{
								mixBlendMode: "difference",
								color: "rgba(256,256,256,0.96)",
								fontFamily: "Poppins",
								padding: "20px",
								fontSize: "2.2rem",
								fontWeight: 200,
							}}
						>
							TEDxPESUSalon is a unique event where participants watch
							exhilarating talks by profound speakers, and later engage in
							intellectual conversations with the speakers and their peers.
						</Typography>

						<Typography
							variant="h6"
							style={{
								mixBlendMode: "difference",
								color: "rgba(256,256,256,0.96)",
								fontFamily: "Poppins",
								fontSize: "24px",
								fontWeight: 500,
								marginTop: 48,
								padding: "20px",
							}}
						>
							<p style={{ fontWeight: 400, display: "inline" }}>The goal : </p>
							To engage our student community in deep and thought-provoking
							conversations, that spark ideas worth spreading! Theme:
							Creativity.
						</Typography>
					</Grid>
					<Grid
						container
						xs={12}
						item
						md={6}
						sm={12}
						spacing={0}
						alignItems="center"
						justifyContent="center"
						direction="column"
					>
						{/* <Images image='aboutImage1' /> */}
						<Image src={salongif} style={{ width: "70%" }} alt="TEDxPESUSalon" />
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Message;
