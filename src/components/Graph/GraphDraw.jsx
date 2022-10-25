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
			if (matrix[i][j][0] !== 0) {
				if (matrix[i][j][0] === -1) {
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
						label: matrix[i][j][0],
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
			arrows: {},
			color: {},
			font: {
				color: "#343434",
				size: 11, // px
				face: "arial",
				background: "none",
				strokeWidth: 5, // px
				strokeColor: "#ffffff",
				align: "vertical",
			},
			smooth: {
				enabled: false,
			},
			physics: { enabled: false },
		},
	};

	return (
		<Graph
			key={uuidv4}
			graph={graph}
			options={options}
			// events={events}
			// style={style}
			// getNetwork={this.getNetwork}
			// getEdges={this.getEdges}
			// getNodes={this.getNodes}
			// vis={(vis) => (this.vis = vis)}
		/>
	);
};
export default GraphDraw;
