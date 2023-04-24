import React from "react";
import {
	Box,
	Button,
	Image,
	Paper,
	Title,
	createStyles,
	em,
	rem,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import PlayTrailerButton from "../ui/PlayTrailerButton";

const useStyles = createStyles((theme) => ({
	movieCardContainer: {
		maxHeight: "100%",
		height: rem(1000),
		backgroundColor: theme.colors.dark[9],
	},

	movieCard: {
		backgroundRepeat: "no-repeat",
		width: "100%",
		height: "100%",
		backgroundSize: "cover",
		backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), var(--img)`,
	},

	movieDetail: {
		position: "absolute",
		top: rem(200),
		display: "flex",
		justifyContent: "space-evenly",
		width: "100%",

		[`@media (max-width: ${em(800)})`]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},

	moviePoster: {
		maxWidth: rem(240),
		maxHeight: "100%",
		marginTop: "10%",
		padding: "auto",
		border: `${rem(1)} solid gold`,
		borderRadius: rem(10),
		overflow: "hidden",
	},

	moviePosterImg: {
		height: "100%",
		width: "100%",
	},

	movieTitle: {
		color: theme.colors.gray[0],
		display: "flex",
		alignItems: "center",
		fontFamily: "sans-serif",
	},

	movieButtonContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: rem(300),
	},

	playButtonIconContainer: {
		padding: 0,
		margin: "auto",
		width: rem(150),
	},
}));

function HeroSlides({ title, poster, backdrops, trailerLink, imdbId }) {
	const { classes } = useStyles();
	const navigate = useNavigate();

	const reviews = () => {
		navigate(`Reviews/${imdbId}`);
	};

	return (
		<Paper>
			<div className={classes.movieCardContainer}>
				<div
					className={classes.movieCard}
					style={{ "--img": `url(${backdrops[1]})` }}
				>
					<div className={classes.movieDetail}>
						<Box className={classes.moviePoster}>
							<Image className={classes.moviePosterImg} src={poster} />
						</Box>
						<Title className={classes.movieTitle} order={4}>
							{title}
						</Title>
						<div className={classes.movieButtonContainer}>
							<Link
								to={`/Trailer/${trailerLink.substring(
									trailerLink.length - 11
								)}`}
							>
								<div className={classes.playButtonIconContainer}>
									<PlayTrailerButton />
								</div>
							</Link>
							<div>
								<Button onClick={reviews}>Review</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Paper>
	);
}

export default HeroSlides;
