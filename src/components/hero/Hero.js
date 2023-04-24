import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import HeroSlides from "./HeroSlides";

const useStyles = createStyles((theme) => ({
	movieCarousel: {
		maxHeight: "100%",
		maxWidth: "100%",
		width: "100vw",
		backgroundColor: theme.colors.dark[9],
	},
}));

function Hero({ movies }) {
	const autoplay = useRef(Autoplay({ delay: 3000 }));
	const { classes } = useStyles();
	const slides = movies.map((movie) => (
		<Carousel.Slide key={movie.title}>
			<HeroSlides {...movie} />
		</Carousel.Slide>
	));

	return (
		<div className={classes.movieCarousel}>
			<Carousel
				height="100%"
				slideSize="100%"
				withIndicators
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
				loop
			>
				{slides}
			</Carousel>
		</div>
	);
}

export default Hero;
