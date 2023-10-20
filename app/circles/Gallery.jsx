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
			<h2 className='circles-heading'>Gallery</h2>
			<div className='gallery'>
				<div
					className='card'
					style={{
						height: "100%",
						marginBottom: "2rem",
					}}
				>
					<iframe
						title='i'
						style={{ width: "100%", height: "100%" }}
						src='https://drive.google.com/file/d/1DjExGAqaFXtS3zRYQgNO2w1P6GMLB4ga/preview'
						allow='autoplay'
					></iframe>
				</div>
				<div
					className='card'
					style={{
						height: "100%",
						marginBottom: "2rem",
					}}
				>
					<iframe
						title='i'
						style={{ width: "100%", height: "100%" }}
						src='https://drive.google.com/file/d/1VPBXV7QykS5mD4AtnfE9pBAjuc21eyHx/preview'
						allow='autoplay'
					></iframe>
				</div>
				<div
					className='card'
					style={{
						height: "100%",
						marginBottom: "2rem",
					}}
				>
					<iframe
						title='i'
						style={{ width: "100%", height: "100%" }}
						src='https://drive.google.com/file/d/11V1ivQYzhJHJjn9mMYamDEXkKFPm1Djj/preview'
						allow='autoplay'
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
