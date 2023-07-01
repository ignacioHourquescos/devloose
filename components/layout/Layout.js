import Navbar from "./nav-bar/NavBar";
import Footer from "./footer/Footer";
import Content from "./content/Content";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<Content>{children}</Content>
			<Footer />
		</>
	);
}
