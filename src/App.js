import GraphDraw from "@components/Graph/GraphDraw";
import styled from "styled-components";
import Graph from "vis-react";

const GraphBlock = styled.div`
	height: 90vh;
	width: 60vw;
	border: 3px solid black;
	border-radius: 20px;
`;
const Content = styled.div`
	padding: 20px;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
`;

const App = () => {
	return (
		<Content>
			<GraphBlock>
				<GraphDraw
					matrix={[
						[null, 4, 3],
						[null, 100, 5],
						[null, null, null],
					]}
				/>
			</GraphBlock>
		</Content>
	);
};

export default App;
