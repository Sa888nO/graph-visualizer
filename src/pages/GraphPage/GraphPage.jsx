import { useEffect, useState } from "react";

import GraphDraw from "@components/Graph/GraphDraw";

import { Matrix } from "@components/Matrix";
import { RefreshButton } from "@components/RefreshButton";
import QueryStore from "@store/QueryStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./GraphPage.module.scss";

const GraphPage = () => {
	let [matrixIsReady, ready] = useState(true);
	const [uiType, updateUiType] = useState(true);
	const [matrix, updateMatrix] = useState([]);

	const RefreshGraph = () => {
		ready(false);
		setTimeout(() => ready(true), 100);
	};

	const draw = async () => {
		let m = await QueryStore.getMatrix();
		updateMatrix(m.matrix);
	};
	useEffect(() => {
		setTimeout(draw, 10);
	}, []);

	return (
		<div className={styles.content}>
			<div className={styles.block}>
				<Link to="/">Назад</Link>
				<RefreshButton onClick={RefreshGraph} />
				<button
					className={styles.uiChange}
					onClick={() => {
						updateUiType(!uiType);
					}}
				>
					{uiType ? (
						<>Показать в виде матрицы</>
					) : (
						<>показать в виде графа</>
					)}
				</button>
			</div>
			{uiType ? (
				<div className={styles.graphBlock}>
					{matrix.length !== 0 && matrixIsReady ? (
						<GraphDraw matrix={matrix} />
					) : (
						<></>
					)}
				</div>
			) : (
				<Matrix matrix={matrix} />
			)}
		</div>
	);
};

export default observer(GraphPage);
