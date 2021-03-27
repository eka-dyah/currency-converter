import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
	<>
		<Header title="Currency Converter" />
		<div className="container-sm" style={{ maxWidth: 500 }}>
			{children}
		</div>
		<Footer />
	</>
);

export default Layout;
