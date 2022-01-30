import React from "react";
import { Carousel } from "react-carousel-minimal";
import data from "./data";

export default function index() {
	const captionStyle = {
		fontSize: "1.2em",
		fontWeight: "bold",
	};
	const slideNumberStyle = {
		fontSize: "20px",
		fontWeight: "bold",
	};

	return (
		<>
			<Carousel
				data={data}
				time={5000}
				width="100%"
				height="500px"
				captionStyle={captionStyle}
				radius="0px"
				// slideNumber={true}
				slideNumberStyle={slideNumberStyle}
				captionPosition="center"
				automatic={true}
				// dots={true}
				pauseIconColor="white"
				pauseIconSize="40px"
				slideBackgroundColor="darkgrey"
				slideImageFit="cover"
				// thumbnails={true}
				// thumbnailWidth="100px"
				style={{
					textAlign: "center",
					maxWidth: "100%",
					maxHeight: "500px",
					margin: "0px auto",
				}}
			/>
		</>
	);
}
