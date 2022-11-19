import { v4 as uuidv4 } from "uuid";
import Graph from "vis-react";

const GraphDraw = ({ matrix }) => {
	// eslint-disable-next-line no-console
	console.log(matrix);
	let nodes = [];
	let edges = [];
	for (let i = 1; i < matrix.length + 1; i++) {
		nodes.push({ id: i, label: i });
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] !== 0) {
				if (matrix[i][j] === -1) {
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

	let graph = {
		nodes: nodes,
		edges: edges,
	};
	var options = {
		nodes: {
			borderWidth: 1,
			size: 45,
			color: {
				border: "#222222",
				background: "grey",
			},
			font: { color: "black", size: 11, face: "arial" },
		},

		edges: {
			color: {},
			font: {
				color: "#ffffff",
				size: 14, // px
				face: "arial",
				background: "none",
				strokeWidth: 5, // px
				strokeColor: "#002b0b",
				align: "vertical",
			},
			smooth: {
				enabled: false,
			},
			physics: { enabled: true },
		},
	};

	return <Graph key={uuidv4} graph={graph} options={options} />;
};
export default GraphDraw;
