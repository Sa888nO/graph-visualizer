export const options1 = {
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
		arrows: {
			to: { enabled: true, scaleFactor: 0, type: "arrow" },
			middle: { enabled: true, scaleFactor: 0, type: "arrow" },
			from: { enabled: true, scaleFactor: 0, type: "arrow" },
		},
		color: {},
		font: {
			color: "#343434",
			size: 16,
			face: "arial",
			background: "none",
			strokeWidth: 5,
			strokeColor: "#ffffff",
			align: "horizontal",
		},
		smooth: {
			enabled: false,
		},
		physics: false,
	},
};
export const options2 = {
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
