import { Outlet } from "react-router-dom";
import { HeaderMenu } from "./header/HeaderMenu";
import FooterLayout from "./footer/FooterLayout";

export const Layout = () => {
	return (
		<>
			<HeaderMenu />
			<Outlet />
			<FooterLayout />
		</>
	);
};
