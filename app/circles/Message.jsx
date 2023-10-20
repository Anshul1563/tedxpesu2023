import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from 'next/image'
import circlesgif from "../../assets/images/tedcircle.gif";

const Message = ({ color }) => {
	return (
		<div
			style={{
				backgroundColor: "black",
				paddingTop: 140,
				paddingBottom: 100,
			}}
			className="about"
			id="about"
		>
			<Grid container justify="center">
				<Typography
					component="span"
					variant="h2"
					style={{
						mixBlendMode: "difference",
						color: "red",
						width: "84%",
						fontWeight: 600,
						fontSize: "80px",
						fontFamily: "Poppins",
						textAlign: "center",
						paddingBottom: "-40px",
					}}
					align="center"
				>
					{" "}
					TED Circles
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
							TED Circles is a community of small groups that engage in fruitful
							conversations encircling big ideas. It takes place virtually and
							helps communities stay connected, which is of the essence during
							the pandemic.
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
							The members of our club will host the Circles, which will be
							joined by experts who are well versed with the topic! Theme of
							April month:Appreciating Earth.
						</Typography>
					</Grid>
					<Grid xs={12} item md={6} sm={12}>
						{/* <Images image='aboutImage1' /> */}
						<Image
							src={circlesgif}
							style={{ width: "100%" }}
							alt="there is no planet B"
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Message;
