import { Button, Text, createStyles, rem } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";
import React from "react";

const useStyles = createStyles((theme) => ({
	inner: {
		fontSize: rem(15),
		color: theme.colors.dark[9],

		"&:hover": {
			fontWeight: "bold",
			color: theme.colors.gray[0],
			transition: `0.3s`,
		},
	},
}));

const PlayTrailerButton = () => {
	const { classes } = useStyles();
	return (
		<Button
			color="yellow"
			uppercase
			rightIcon={<IconPlayerPlay size={rem(25)} />}
			classNames={{
				inner: classes.inner,
			}}
		>
			Play Trailer
		</Button>
	);
};

export default PlayTrailerButton;
