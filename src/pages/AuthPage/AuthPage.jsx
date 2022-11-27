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
	const [notValid, setNotValid] = useState(false);
	const [renderCheckbox, updateRenderCheckbox] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			event.target.name.value &&
			event.target.surname.value &&
			event.target.groupNumberPath1.value &&
			event.target.groupNumberPath2.value &&
			event.target.size.value
		) {
			QueryStore.namegroup =
				event.target.name.value +
				event.target.surname.value +
				event.target.groupNumberPath1.value +
				"-" +
				event.target.groupNumberPath2.value;
			QueryStore.size = event.target.size.value;
			QueryStore.minus = event.target.negatives.checked ? true : false;
			QueryStore.graphType =
				event.target.GraphType.value + event.target.WeightType.value;
			setUpd(true);
		} else setNotValid(true);
	};

	return (
		<div className={styles.content}>
			<form onSubmit={handleSubmit} className={styles.formBlock}>
				<InputWithTitle title="Имя" isWarning={notValid} name="name" />
				<InputWithTitle
					title="Фамилия"
					isWarning={notValid}
					name="surname"
				/>
				<div className={styles.groupNumberBlock}>
					Номер группы
					<div>
						<input
							name="groupNumberPath1"
							maxLength="3"
							className={classNames({
								[styles.isWarning]: notValid,
							})}
						></input>
						-
						<input
							name="groupNumberPath2"
							maxLength="3"
							className={classNames({
								[styles.isWarning]: notValid,
							})}
						></input>
					</div>
				</div>
				<InputWithTitle
					title="Размер матрицы"
					isWarning={notValid}
					name="size"
					maxLength="2"
					className={styles.InputMatrixSize}
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
				{notValid ? (
					<div className={styles.warningMassage}>
						Заполните все необходимые поля
					</div>
				) : (
					<></>
				)}
				<button type="submit" className={styles.submitButton}>
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
