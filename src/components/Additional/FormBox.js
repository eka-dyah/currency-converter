import { Form, FormGroup, Input, Label } from "reactstrap";

const FormBox = ({ id, label, optionData = [], disabled = false, value }) => {
	const options = optionData.map((op) => <option>{op}</option>);
	return (
		<Form className="row mx-0" style={{ width: '100%', maxWidth: 500, minWidth: 300 }}>
			<FormGroup className="col-12 row align-items-center">
				<Label className="col-2 my-0" for={id}>{label}</Label>
				<Input className="col-3" type="select">
					{options}
				</Input>
				<Input
					disabled={disabled}
					value={value}
					className="col-7"
					type="number"
				/>
			</FormGroup>
		</Form>
	);
};

export default FormBox;
