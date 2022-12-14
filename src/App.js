import AuthPage from "@pages/AuthPage";
import GraphPage from "@pages/GraphPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="your-task-graph" element={<GraphPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
