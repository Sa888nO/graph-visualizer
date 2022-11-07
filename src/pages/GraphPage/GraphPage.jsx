import { useEffect, useState } from "react";
import Controller from "@components/Controller";
import GraphDraw from "@components/Graph/GraphDraw";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styled from "styled-components";
import QueryStore from "./../../store/QueryStore";

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

const Size = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 30px;
	margin: 0 auto;
	p {
		text-align: center;
	}
`;

const GraphPage = () => {
	// eslint-disable-next-line no-console
	console.log(QueryStore.namegroup, QueryStore.size, QueryStore.limit);
	let [matrixIsReady, ready] = useState(false);
	const [graphDraw, updateGraphDraw] = useState(false);
	const [matrix, updateMatrix] = useState();

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
						<button
							onClick={() => {
								ready(false);
								setTimeout(() => ready(true), 100);
							}}
						>
							<svg
								width="21px"
								height="21px"
								viewBox="0 0 21 21"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g
									fill="none"
									fill-rule="evenodd"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									transform="matrix(0 1 1 0 2.5 2.5)"
								>
									<path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />
									<path
										d="m4 1v4h-4"
										transform="matrix(1 0 0 -1 0 6)"
									/>
								</g>
							</svg>
						</button>
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
