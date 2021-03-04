import FormBox from "../components/Additional/FormBox";
import SwapButton from "../components/Additional/SwapButton";
import Layout from "../components/Layout";

const CurrConv = () => {
	return (
		<Layout>
			<FormBox label="From" />
            <SwapButton />
            <FormBox label="To" disabled={true} />
		</Layout>
	);
};

export default CurrConv;
