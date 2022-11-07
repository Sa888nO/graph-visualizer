import { useState } from "react";
import Controller from "@components/Controller";
import GraphDraw from "@components/Graph/GraphDraw";
import axios from "axios";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import QueryStore from "./../../store/QueryStore";
import styles from "./AuthPage.module.scss";

const GraphBlock = styled.div`
	height: 90vh;
	width: 60vw;
	border: 3px solid black;
	border-radius: 20px;
`;
const Content = styled.div`
	gap: 20px;
	padding: 20px;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	form {
		text-align: center;
		display: flex;
		flex-direction: column;
		width: 70%;
		gap: 10px;
		input {
			width: 50%;
			margin: 0 auto;
			max-width: 375px;
			border: 1px solid black;
			font-size: 16px;
			border-radius: 10px;
			padding: 3px 0 3px 10px;
			&:focus {
				outline: none;
			}
		}
	}
	p {
		color: red;
		font-size: 20px;
		font-weight: bold;
	}
`;

const Size = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 30px;
	margin: 0 auto;
	p {
		text-align: center;
	}
`;

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
			setUpd(true);
		} else setSend(true);
	};

	return (
		<Content>
			<form onSubmit={handleSubmit}>
				Имя
				<input
					className={classNames({
						[styles.warning]: send,
					})}
				></input>{" "}
				Фамилия
				<input
					className={classNames({
						[styles.warning]: send,
					})}
				></input>{" "}
				Номер группы
				<input
					className={classNames({
						[styles.warning]: send,
					})}
				></input>
				Размер матрицы
				<input
					className={classNames({
						[styles.warning]: send,
					})}
				></input>
				{send ? <p>ЗАПОЛНИТЕ ВСЕ ПОЛЯ!!!</p> : <></>}
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
		</Content>
	);
};

export default observer(AuthPage);
