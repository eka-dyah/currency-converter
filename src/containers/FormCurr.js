import { useCallback, useEffect, useRef, useState } from "react";
import FormBox from "../components/Additional/FormBox";
import SwapButton from "../components/Additional/SwapButton";

const FormCurr = ({ currData,  }) => {
	const [dataMultiplier, setDataMultiplier] = useState({"_": 1});
	const [inputNum, setInputNum] = useState(0);
	const [valueGoal, setValueGoal] = useState(0);
	const [origin, setOrigin] = useState("");
	const [goal, setGoal] = useState("");
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	const refOptionOrigin = useRef(0);
	const refOptionGoal = useRef(0);

	const fetchMultp = useCallback(() => {
		if (goal === "" || origin === "") return;
		if (origin === goal) {
			setDataMultiplier({ [`${origin}_${goal}`]: 1 });
			return;
		}
		setLoading(true);
		fetch(
			`${process.env.REACT_APP_URL}/convert?q=${origin}_${goal},${goal}_${origin}&compact=ultra&${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDataMultiplier(data);
				setLoading(false);
				setError(null);
			})
			.catch((error) => {
				setDataMultiplier(null);
				setLoading(false);
				setError("There's an error occured.");
			});
	}, [goal, origin]);

	useEffect(() => {
		setGoal(refOptionGoal.current.value);
		setOrigin(refOptionOrigin.current.value);
	}, []);

	useEffect(() => {
		if(isLoading) {
			setValueGoal("Loading...");
		} else if(error) {
			setValueGoal(error);
		} else {
			if (dataMultiplier[`${origin}_${goal}`] === undefined) {
				setValueGoal(inputNum * 1);
			} else {
				setValueGoal(inputNum * dataMultiplier[`${origin}_${goal}`]);
			}
		}
	}, [origin, goal, inputNum, dataMultiplier, error, isLoading]);

	useEffect(() => {
		if (dataMultiplier != null) {
			if (dataMultiplier.hasOwnProperty(`${origin}_${goal}`)) {
				return;
			}
		}
		fetchMultp();
	}, [origin, goal, dataMultiplier, fetchMultp]);

	const onChangeInput = (e) => {
		const value = e.target.value;
		setInputNum(value);
	};

	const changeSelectOrigin = (e) => {
		setOrigin(e.target.value);
	};

	const changeSelectGoal = (e) => {
		setGoal(e.target.value);
	};

	const onSwap = () => {
		const goalCopy = goal;
		setGoal(origin);
		setOrigin(goalCopy);
	};

	if (currData !== null) {
		return (
			<>
				<FormBox
					optionData={Object.keys(currData)}
					label="From"
					refOption={refOptionOrigin}
					onChangeSelect={changeSelectOrigin}
					valueSelect={origin}
					value={inputNum}
					typeInput="number"
					onChangeInput={onChangeInput}
				/>
				<SwapButton onClick={onSwap} />
				<FormBox
					optionData={Object.keys(currData)}
					label="To"
					onChangeSelect={changeSelectGoal}
					refOption={refOptionGoal}
					valueSelect={goal}
					type="text"
					disabled={true}
					value={valueGoal}
				/>
			</>
		);
	}
	return <></>;
};

export default FormCurr;
