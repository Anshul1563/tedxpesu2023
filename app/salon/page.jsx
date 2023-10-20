'use client'
import React from "react";
import Gallery from "./Gallery";
import Message from "./Message";
import Speakers from "./Speakers";

const HomeSalon = () => {
	return (
		<div style={{background:"black"}}>
			<Message />
			<Speakers />
			<Gallery />
		</div>
	);
};

export default HomeSalon;
