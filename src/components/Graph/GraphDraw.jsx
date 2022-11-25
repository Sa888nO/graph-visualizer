import QueryStore from "@store/QueryStore";
import { ParseMatrixToNodesAndEdges } from "@utils/ParseMatrixToNodesAndEdges";
import { v4 as uuidv4 } from "uuid";
import Graph from "vis-react";
import { options1, options2 } from "./options";

const GraphDraw = ({ matrix }) => {
	const [nodes, edges] = ParseMatrixToNodesAndEdges(matrix);
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
