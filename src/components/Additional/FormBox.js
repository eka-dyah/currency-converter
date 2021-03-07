import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const FormBox = ({
	id,
	label,
	optionData = [],
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
	const options = optionData.map((op) => (
		<option key={op} value={op}>
			{op}
		</option>
	));
	return (
		<Form
			className="row mx-0"
			style={{ width: "100%", maxWidth: 500, minWidth: 300 }}
		>
			<FormGroup className="col-12 row align-items-center">
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
