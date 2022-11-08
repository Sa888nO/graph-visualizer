import { useState } from "react";

import { InputWithTitle } from "@components/InputWithTitle";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import QueryStore from "./../../store/QueryStore";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
	const [StoreisUpdated, setUpd] = useState(false);
	const [send, setSend] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			event.target[0].value &&
			event.target[1].value &&
			event.target[2].value &&
			event.target[3].value
		) {
			QueryStore.namegroup =
				event.target[0].value +
				event.target[1].value +
				event.target[2].value;
			QueryStore.size = event.target[3].value;
			// eslint-disable-next-line no-console
			console.log(event.target[4]);
			QueryStore.minus = event.target[4].checked ? true : false;
			setUpd(true);
		} else setSend(true);
	};

	return (
		<div className={styles.content}>
			<form onSubmit={handleSubmit} className={styles.formBlock}>
				<InputWithTitle title="Имя" isWarning={send} />
				<InputWithTitle title="Фамилия" isWarning={send} />
				<InputWithTitle title="Номер группы" isWarning={send} />
				<InputWithTitle title="Размер матрицы" isWarning={send} />
				<div className={styles.checkboxBlock}>
					Отрицательные значения будут?
					<input type="checkbox"></input>
				</div>

				<button
					type="submit"
					onClick={() => {}}
					to={"/your-task-graph"}
				>
					Получить задание
				</button>
			</form>
			{StoreisUpdated ? (
				<Navigate to="/your-task-graph" replace={true} />
			) : (
				<></>
			)}
		</div>
	);
};

export default observer(AuthPage);
