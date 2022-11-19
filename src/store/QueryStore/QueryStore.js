import axios from "axios";

import { makeAutoObservable } from "mobx";

class QueryStore {
	namegroup;
	size;
	limit;
	task_number;
	minus;

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
		let res = await axios
			.post(`http://test.std-1875.ist.mospolytech.ru/generate`, d)
			.then((res) => res.data);
		return res;
	}
}

export default new QueryStore();
