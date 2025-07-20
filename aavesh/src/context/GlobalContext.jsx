import { useState, useEffect, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const [headerStyle, setHeaderStyle] = useState({ color: "var(--white)" });
	const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 672px)").matches);
	const [isTablet, setIsTablet] = useState(window.matchMedia("(max-width: 880px)").matches);
	const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 880px)").matches);

	useEffect(() => {
		const mediaQuerySm = window.matchMedia("(max-width: 672px)");
		const mediaQueryMd = window.matchMedia("(max-width: 880px)");
		const mediaQueryLg = window.matchMedia("(min-width: 880px)");

		const handleResize = () => {
			setIsMobile(mediaQuerySm.matches);
			setIsTablet(mediaQueryMd.matches);
			setIsDesktop(mediaQueryLg.matches);
		};

		mediaQuerySm.addEventListener("change", handleResize);
		mediaQueryMd.addEventListener("change", handleResize);
		mediaQueryLg.addEventListener("change", handleResize);
		handleResize();

		return () => {
			mediaQuerySm.removeEventListener("change", handleResize);
			mediaQueryMd.removeEventListener("change", handleResize);
			mediaQueryLg.removeEventListener("change", handleResize);
		};
	}, []);

	const breakpoint = (device) => {
		if (device === "mobile") return isMobile;
		if (device === "tab") return isTablet;
		return isDesktop;
	};

	return (
		<GlobalContext.Provider
			value={{
				isLoading,
				setIsLoading,
				breakpoint,
				headerStyle,
				setHeaderStyle,
				openNav,
				setOpenNav,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
