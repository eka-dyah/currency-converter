import Header from "./Header";

const Layout = ({ children }) => (
	<>
        <Header title="Currency Converter" />
		<div className="container-sm">{children}</div>
	</>
);

export default Layout;
