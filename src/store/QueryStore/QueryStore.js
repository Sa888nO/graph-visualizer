import axios from "axios";

import { makeAutoObservable } from "mobx";

class QueryStore {
	namegroup;
	size;
	minus;
	graphType;

	constructor() {
		makeAutoObservable(this);
	}

	async getMatrix() {
		let d = new FormData();
		if (this.minus) {
			d.append("negatives", 1);
		}
		d.append("namegroup", this.namegroup);
		d.append("size", this.size);
		d.append("graph_type", this.graphType);

		let res = await axios
			.post(`http://test.std-1875.ist.mospolytech.ru/generate`, d)
			.then((res) => res.data);
		return res;
	}
}

export default new QueryStore();
