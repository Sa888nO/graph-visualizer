import styled from "styled-components";
import { RefreshIcon } from "./ButtonIcon";

const Button = styled.button`
	cursor: pointer;
	width: 35px;
	height: 35px;
	background-color: green;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RefreshButton = ({ ...props }) => {
	return (
		<Button {...props}>
			<RefreshIcon />
		</Button>
	);
};
