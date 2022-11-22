/* eslint-disable no-console */
import QueryStore from "@store/QueryStore";
export const ParseMatrixToNodesAndEdges = (matrix) => {
	let nodes = [];
	let edges = [];
	for (let i = 1; i < matrix.length + 1; i++) {
		nodes.push({ id: i, label: i });
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			console.log(matrix[j][i] + "+" + matrix[i][j]);
			if (matrix[i][j] !== 0) {
				if (
					QueryStore.graphType == "uu" ||
					QueryStore.graphType == "ou" ||
					QueryStore.graphType == "pu"
				) {
					edges.push({
						from: i + 1,
						to: j + 1,
						arrows: "to",
					});
				} else {
					edges.push({
						from: i + 1,
						to: j + 1,
						arrows: "to",
						label: matrix[i][j],
					});
				}
			}
		}
	}
	return [nodes, edges];
};
