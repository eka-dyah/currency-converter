import { Button } from "reactstrap";

const SwapButton = ({ onClick }) => (
	<div className="text-center">
		<Button className="mt-2 mb-4" onClick={onClick}>
			Swap
		</Button>
	</div>
);

export default SwapButton;
