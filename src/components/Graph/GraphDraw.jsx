import QueryStore from "@store/QueryStore";
import { v4 as uuidv4 } from "uuid";
import Graph from "vis-react";

const GraphDraw = ({ matrix }) => {
	let nodes = [];
	let edges = [];
	for (let i = 1; i < matrix.length + 1; i++) {
		nodes.push({ id: i, label: i });
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
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

	let graph = {
		nodes: nodes,
		edges: edges,
	};
	var options1 = {
		nodes: {
			borderWidth: 1,
			size: 45,
			color: {
				border: "#222222",
				background: "grey",
			},
			font: { color: "black", size: 14, face: "arial" },
		},
		edges: {
			arrows: {
				to: { enabled: true, scaleFactor: 0, type: "arrow" },
				middle: { enabled: true, scaleFactor: 0, type: "arrow" },
				from: { enabled: true, scaleFactor: 0, type: "arrow" },
			},
			smooth: { size: 100, type: "vertical", roundness: 0 },
			color: {},
			font: {
				color: "#ffffff",
				size: 14,
				face: "arial",
				strokeWidth: 5,
				strokeColor: "#002b0b",
				align: "top",
			},
			physics: false,
		},
	};
	var options2 = {
		nodes: {
			borderWidth: 1,
			size: 45,
			color: {
				border: "#222222",
				background: "grey",
			},
			font: { color: "black", size: 14, face: "arial" },
		},
		edges: {
			arrows: {
				to: { enabled: false, scaleFactor: 1, type: "arrow" },
				middle: { enabled: false, scaleFactor: 1, type: "arrow" },
				from: { enabled: false, scaleFactor: 1, type: "arrow" },
			},
			smooth: {
				size: 100,
				type: "diagonalCross",
				roundness: 0.09,
			},
			color: {},
			font: {
				color: "#ffffff",
				size: 14,
				face: "arial",
				strokeWidth: 5,
				strokeColor: "#002b0b",
				align: "top",
			},
			physics: false,
		},
	};
	let options;
	QueryStore.graphType == "uw" ||
	QueryStore.graphType == "pu" ||
	QueryStore.graphType == "uu" ||
	QueryStore.graphType == "pw"
		? (options = options1)
		: (options = options2);

	return <Graph key={uuidv4} graph={graph} options={options} />;
};
export default GraphDraw;
