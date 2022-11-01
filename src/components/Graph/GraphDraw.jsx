import { v4 as uuidv4 } from "uuid";
import Graph from "vis-react";

const GraphDraw = ({ matrix, ins }) => {
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
	// eslint-disable-next-line no-console
	console.log(nodes, " --- ", edges);

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
		<>
			<Graph key={uuidv4} graph={graph} options={options} />
			<button
				onClick={() => {
					ins(false);
					setTimeout(() => ins(true), 100);
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
						<path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
					</g>
				</svg>
			</button>
		</>
	);
};
export default GraphDraw;
