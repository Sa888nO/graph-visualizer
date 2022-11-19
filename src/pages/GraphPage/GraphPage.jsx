import { useEffect, useState } from "react";

import GraphDraw from "@components/Graph/GraphDraw";

import { RefreshButton } from "@components/RefreshButton";
import QueryStore from "@store/QueryStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GraphBlock = styled.div`
	height: 90vh;
	width: 90vw;
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
	flex-direction: column;
	a {
		color: red;
		text-decoration: none;
		cursor: pointer;
	}
	div {
		display: flex;
		flex-direction: center;
		align-items: center;
		gap: 30px;
	}
`;

const GraphPage = () => {
	// eslint-disable-next-line no-console
	console.log(QueryStore.namegroup, QueryStore.size, QueryStore.limit);
	let [matrixIsReady, ready] = useState(false);
	const [graphDraw, updateGraphDraw] = useState(false);
	const [matrix, updateMatrix] = useState();

	const draw = async () => {
		let m = await QueryStore.getMatrix();
		updateMatrix(m.matrix);
		ready(false);
		setTimeout(() => ready(true), 100);
		updateGraphDraw(true);
	};
	useEffect(() => {
		setTimeout(draw, 10);
	}, []);
	return (
		<Content>
			<div>
				<Link to="/">Назад</Link>
				{!graphDraw ? (
					<button
						onClick={async () => {
							let m = await QueryStore.getMatrix();
							updateMatrix(m.matrix);
							ready(true);
							updateGraphDraw(true);
						}}
					>
						Отобразить граф
					</button>
				) : (
					<>
						<RefreshButton />
						{/* <button
							onClick={() => {
								ready(false);
								setTimeout(() => ready(true), 100);
							}}
						></button> */}
					</>
				)}
			</div>
			<GraphBlock>
				{matrixIsReady ? (
					<GraphDraw matrix={matrix} ins={ready} />
				) : (
					<></>
				)}
			</GraphBlock>
		</Content>
	);
};

export default observer(GraphPage);
