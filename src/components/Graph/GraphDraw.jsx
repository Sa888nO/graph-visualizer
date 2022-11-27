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
