import { useState } from "react";
import Controller from "@components/Controller";
import GraphDraw from "@components/Graph/GraphDraw";
import axios from "axios";
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

let d = new FormData();
d.append("namegroup", "Алекс201-362");
d.append("size", "3");
d.append("limit", "10");
d.append("task_number", "1");
// eslint-disable-next-line no-console
console.log(d);
async function getData() {
	let res = await axios
		.post(
			`http://test.std-1875.ist.mospolytech.ru/generate_with_task_number`,
			d
		)
		.then((res) => res.data);
	// eslint-disable-next-line no-console
	console.log(res);
	// if (res) {
	// 	// eslint-disable-next-line no-console
	// 	return res.matrix;
	// }
	return res;
}

const parse = (matrix) => {};

const App = () => {
	let [matrixIsReady, ready] = useState(false);
	const [matrixSize, updateSize] = useState(5);
	const [matrix, updateMatrix] = useState();

	return (
		<Content>
			<GraphBlock>
				{matrixIsReady ? (
					<GraphDraw matrix={matrix} ins={ready} />
				) : (
					<></>
				)}
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
				<button
					onClick={async () => {
						let m = await getData();
						updateMatrix(m.matrix);
						ready(true);
						// eslint-disable-next-line no-console
						console.log(m.matrix, " +++ ", matrix);
					}}
				>
					GETDATA
				</button>

				{/* <Controller
					matrixSize={matrixSize}
					updateMatrix={updateMatrix}
					ins={ready}
				/> */}
			</div>
		</Content>
	);
};

export default App;
