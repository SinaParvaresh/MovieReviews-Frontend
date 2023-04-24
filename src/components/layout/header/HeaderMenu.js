import {
	createStyles,
	Header,
	Group,
	Button,
	Divider,
	Box,
	Title,
	Burger,
	Drawer,
	Collapse,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { IconVideo } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	header: {
		position: "fixed",
		height: rem(60),
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		border: 0,
		zIndex: 6,
		backgroundColor: theme.colors.gray[9],
		borderBottom: `${rem(1)} solid ${theme.colors.gray[7]}`,
	},

	link: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: "none",
		color: theme.colors.gray[0],
		fontWeight: 500,
		fontSize: theme.fontSizes.lg,
		transition: "all 0.25s ease-out",

		[theme.fn.smallerThan("sm")]: {
			height: rem(42),
			display: "flex",
			alignItems: "center",
		},

		...theme.fn.hover({
			backgroundColor: theme.colors.dark[6],
		}),
	},

	subLink: {
		width: "100%",
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,
		...theme.fn.hover({
			backgroundColor: theme.colors.dark[7],
		}),

		"&:active": theme.activeStyles,
	},

	dropdownFooter: {
		backgroundColor: theme.colors.dark[7],
		margin: `calc(${theme.spacing.md} * -1)`,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${theme.colors.dark[5]}`,
	},

	hiddenMobile: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	hiddenDesktop: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},
}));

export function HeaderMenu() {
	const { classes, theme } = useStyles();
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

	return (
		<Box>
			<Header className={classes.header}>
				<Group
					position="apart"
					sx={{ height: "100%" }}
					className={classes.hiddenMobile}
				>
					<Link to="/" className={classes.link}>
						<IconVideo />
						<Title order={3} p="1rem">
							Movies
						</Title>
					</Link>
					<Group sx={{ height: "100%" }}>
						<Link to="/" className={classes.link}>
							Home
						</Link>
						<Divider my="sm" mx="-md" color={"dark.5"} />
					</Group>

					<Group>
						<Button>Login</Button>
						<Button>Register</Button>
					</Group>
				</Group>

				<Group
					position="apart"
					sx={{ height: "100%" }}
					className={classes.hiddenDesktop}
				>
					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						className={classes.hiddenDesktop}
					/>
					<Link to="/get-started" className={classes.link}>
						<Title order={3} p={8}>
							Movies
						</Title>
					</Link>
				</Group>
			</Header>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				className={classes.hiddenDesktop}
				zIndex={4}
				padding="10%"
				size="100%"
				withCloseButton={false}
			>
				<Drawer.Content mt="5rem">
					<Link to="/home-page" className={classes.link} onClick={closeDrawer}>
						Home
					</Link>

					<Collapse in={linksOpened} onClick={closeDrawer}>
						{/* {links} */}
					</Collapse>
					<Divider my="sm" color={"dark.5"} />

					<Group grow pb="xl" px="md" onClick={closeDrawer}>
						{/* <HeaderLoginButton />
						<HeaderSignUpButton /> */}
					</Group>
				</Drawer.Content>
			</Drawer>
		</Box>
	);
}
