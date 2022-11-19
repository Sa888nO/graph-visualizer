import { useEffect, useState } from "react";

import GraphDraw from "@components/Graph/GraphDraw";

import { RefreshButton } from "@components/RefreshButton";
import QueryStore from "@store/QueryStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./GraphPage.module.scss";

const GraphPage = () => {
	let [matrixIsReady, ready] = useState(true);

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
			<div>
				<Link to="/">Назад</Link>
				<RefreshButton onClick={RefreshGraph} />
			</div>
			<div className={styles.graphBlock}>
				{matrix.length !== 0 && matrixIsReady ? (
					<GraphDraw matrix={matrix} />
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default observer(GraphPage);
