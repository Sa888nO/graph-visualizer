import axios from "axios";

import { makeAutoObservable, runInAction } from "mobx";

class QueryStore {
	namegroup;
	size;
	limit;
	task_number;

	constructor() {
		makeAutoObservable(this);
	}

	async getMatrix() {
		let d = new FormData();
		d.append("namegroup", this.namegroup);
		d.append("size", this.size);
		d.append("limit", this.limit);
		d.append("task_number", "1");
		let res = await axios
			.post(
				`http://test.std-1875.ist.mospolytech.ru/generate_with_task_number`,
				d
			)
			.then((res) => res.data);
		// eslint-disable-next-line no-console
		console.log("store", res);
		return res;
	}
}

export default new QueryStore();
