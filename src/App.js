import { useState } from "react";
import Controller from "@components/Controller";
import GraphDraw from "@components/Graph/GraphDraw";
import styled from "styled-components";

const GraphBlock = styled.div`
	height: 90vh;
	width: 60vw;
	border: 3px solid black;
	border-radius: 20px;
`;
const Content = styled.div`
	gap: 20px;
	padding: 20px;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
`;

const Size = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 30px;
	margin: 0 auto;
	p {
		text-align: center;
	}
`;

const App = () => {
	let [matrixIsReady, ready] = useState(false);
	const [matrixSize, updateSize] = useState(5);
	const [matrix, updateMatrix] = useState();
	return (
		<Content>
			<GraphBlock>
				{matrixIsReady ? <GraphDraw matrix={matrix} /> : <></>}
			</GraphBlock>
			<div>
				<Size>
					<button
						onClick={() => {
							ready(false);
							updateSize(matrixSize + 1);
						}}
					>
						+
					</button>
					<p>{matrixSize}</p>
					<button
						onClick={() => {
							ready(false);
							updateSize(matrixSize - 1);
						}}
					>
						-
					</button>
				</Size>

				<Controller
					matrixSize={matrixSize}
					updateMatrix={updateMatrix}
					ins={ready}
				/>
			</div>
		</Content>
	);
};

export default App;
