import React from "react";
import "./Gallery.css";

const Gallery = () => {
	return (
		<div
			style={{
				padding: "2rem",
				backgroundColor: "black",
			}}
		>
			<h2 className='salon-heading'>Gallery</h2>
			<div className='gallery'>
					<iframe
						title="Music: The Scintillating Illustration of Creativity | Nakul Abhyankar | TEDxPESUSalon"
						style={{ width: "100%", height: "100%", borderRadius:"5px",border:"0.3px solid white" }}
						src="https://www.youtube.com/embed/_vrFACcAfOY"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
						<iframe
					src="https://www.youtube.com/embed/daMrJ2hVHrE" title="Finding Your Expression | Rahul Kolle | TEDxPESUSalon"
						style={{ width: "100%", height: "100%", borderRadius:"5px",border:"0.3px solid white" }}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>


				</div>
			</div>
	);
};

export default Gallery;
