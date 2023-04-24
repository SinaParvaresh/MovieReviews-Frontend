import {
	createStyles,
	Text,
	Container,
	ActionIcon,
	Group,
	Anchor,
	rem,
} from "@mantine/core";
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconVideo,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	footer: {
		paddingTop: "10%",
		backgroundColor: "black",
		borderTop: `${rem(1)} solid ${theme.colors.dark[5]}`,
	},

	logo: {
		maxWidth: rem(200),
		[theme.fn.smallerThan("sm")]: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
	},

	description: {
		marginTop: rem(5),
		[theme.fn.smallerThan("sm")]: {
			marginTop: theme.spacing.xs,
			textAlign: "center",
		},
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},

	groups: {
		display: "flex",
		flexWrap: "wrap",

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	wrapper: {
		width: rem(160),
	},

	link: {
		display: "block",
		color: theme.colors.dark[1],
		fontSize: theme.fontSizes.sm,
		paddingTop: rem(3),
		paddingBottom: rem(3),

		"&:hover": {
			textDecoration: "underline",
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
		color: theme.colors.dark[1],
	},

	afterFooter: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${theme.colors.dark[4]}`,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
		},
	},

	social: {
		[theme.fn.smallerThan("sm")]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

const FooterLayout = () => {
	const { classes } = useStyles();

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<IconVideo size={30} />
					<Text size="xs" color="dimmed" className={classes.description}>
						Random TExt
					</Text>
				</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Group spacing={0} className={classes.social} position="right" noWrap>
					<Anchor href="https://github.com/SinaParvaresh" target="_blank">
						<ActionIcon size="lg">
							<IconBrandGithub size="1.05rem" stroke={1.5} />
						</ActionIcon>
					</Anchor>
					<Anchor
						href="https://www.linkedin.com/in/sina-parvaresh/"
						target="_blank"
					>
						<ActionIcon size="lg">
							<IconBrandLinkedin size="1.05rem" stroke={1.5} />
						</ActionIcon>
					</Anchor>
				</Group>
			</Container>
		</footer>
	);
};

export default FooterLayout;
