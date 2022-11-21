import { useState } from "react";

import { InputWithTitle } from "@components/InputWithTitle";
import QueryStore from "@store/QueryStore";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
	const [StoreisUpdated, setUpd] = useState(false);
	const [fullGraph, updateFullGraph] = useState(false);
	const [send, setSend] = useState(false);
	const [renderCheckbox, updateRenderCheckbox] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			event.target[0].value &&
			event.target[1].value &&
			event.target[2].value &&
			event.target[3].value
		) {
			QueryStore.namegroup =
				event.target.name.value +
				event.target.surname.value +
				event.target.groupNumberPath1.value +
				"-" +
				event.target.groupNumberPath2.value;
			QueryStore.size = event.target.size.value;
			// eslint-disable-next-line no-console
			console.log(event.target.negatives.checked);
			QueryStore.minus = event.target.negatives.checked ? true : false;
			QueryStore.graphType =
				event.target.GraphType.value + event.target.WeightType.value;
			setUpd(true);
		} else setSend(true);
	};

	return (
		<div className={styles.content}>
			<form onSubmit={handleSubmit} className={styles.formBlock}>
				<InputWithTitle title="Имя" isWarning={send} name="name" />
				<InputWithTitle
					title="Фамилия"
					isWarning={send}
					name="surname"
				/>
				<div className={styles.groupNumberBlock}>
					<div>
						<input name="groupNumberPath1"></input>-
						<input name="groupNumberPath2"></input>
					</div>
				</div>
				<InputWithTitle
					title="Размер матрицы"
					isWarning={send}
					name="size"
				/>
				<select
					name="GraphType"
					onChange={(e) => {
						e.target.value === "p"
							? updateFullGraph(true)
							: updateFullGraph(false);
					}}
				>
					<option value="o">Ориентированный</option>
					<option value="u">Неориентированный</option>
					<option value="p">Полновесный</option>
				</select>
				<select
					name="WeightType"
					onChange={(e) => {
						e.target.value === "w"
							? updateRenderCheckbox(true)
							: updateRenderCheckbox(false);
					}}
				>
					<option value="u">Невзвешенный</option>
					<option value="w">Взвешенный</option>
				</select>

				<div
					className={classNames(styles.checkboxBlock, {
						[styles.s]: !renderCheckbox || fullGraph,
					})}
				>
					Отрицательные значения будут?
					<input type="checkbox" name="negatives"></input>
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
