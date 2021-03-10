import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const FormBox = ({
	id,
	label,
	nameAttr,
	optionData = null,
	disabled = false,
	typeInput,
	value,
	defaultValue,
	valueSelect,
	defaultValueSelect,
	onChangeInput,
	onChangeSelect,
	message,
	refInput,
	refOption,
}) => {
	let options = null;
	if (optionData) {
		options = Object.keys(optionData).map((op) => (
			<option key={op} value={op} name={optionData[op].currencyName}>
				{op}
			</option>
		));
	}
	return (
		<Form
			className="row mx-0"
			style={{ width: "100%", maxWidth: 500, minWidth: 300 }}
		>
			<FormGroup className="col-12 row align-items-center">
				<p className="text-center col-12 m-0 mb-1">{nameAttr}</p>
				<Label className="col-2 my-0" for={id}>
					{label}
				</Label>
				<Input
					className="col-3"
					type="select"
					onChange={onChangeSelect}
					value={valueSelect}
					defaultValue={defaultValueSelect}
					innerRef={refOption}
				>
					{options}
				</Input>
				<Input
					innerRef={refInput}
					disabled={disabled}
					value={value}
					defaultValue={defaultValue}
					className="col-7"
					type={typeInput}
					onChange={onChangeInput}
				/>
				<FormFeedback invalid={message}>{message}</FormFeedback>
			</FormGroup>
		</Form>
	);
};
export default FormBox;
