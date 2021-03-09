import { useEffect, useState } from "react";
import Error from "../components/Additional/Error";
import LoadingSpinner from "../components/Additional/LoadingSpinner";
import Layout from "../components/Layout";
import FormCurr from "./FormCurr";

const CurrConv = () => {
	const [currData, setCurrData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchCurrencies = () => {
		setLoading(true);
		fetch(
			`${process.env.REACT_APP_URL}/currencies?${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setCurrData(data.results);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				setError("An error has occured. Try refresh the page or try again later.");
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchCurrencies();
	}, []);

	let content;
	if (isLoading) {
		content = <LoadingSpinner />;
	} else if (error) {
		content = <Error message={error} />;
	} else {
		content = <FormCurr currData={currData} />;
	}
	return <Layout>{content}</Layout>;
};

export default CurrConv;
