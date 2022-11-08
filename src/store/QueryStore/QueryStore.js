import axios from "axios";

import { makeAutoObservable, runInAction } from "mobx";

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
		// eslint-disable-next-line no-console
		console.log(this.minus);
		if (this.minus) {
			d.append("negatives", 1);
		}
		d.append("namegroup", this.namegroup);
		d.append("size", this.size);
		let res = await axios
			.post(`http://test.std-1875.ist.mospolytech.ru/generate`, d)
			.then((res) => res.data);
		// eslint-disable-next-line no-console
		console.log("store", res);
		return res;
	}
}

export default new QueryStore();
