import styles from "./Controller.module.scss";

const Controller = ({ matrixSize, updateMatrix, ins }) => {
	let indexes = [];
	for (let i = 0; i < matrixSize; i++) {
		let row = [];
		for (let j = 0; j < matrixSize; j++) {
			row.push([(i + 1) * 10 + (j + 1)]);
		}
		indexes.push([...row]);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		let answer = [];
		for (let i = 0; i < matrixSize; i++) {
			let row = [];
			for (let j = 0; j < matrixSize; j++) {
				row.push([+event.target[j + matrixSize * i].value]);
			}
			answer.push(row);
		}

		updateMatrix(answer);
		ins(true);
	};

	return (
		<div className={styles.div}>
			<form onSubmit={handleSubmit}>
				{indexes.map((row) => (
					<div className={styles.row}>
						{row.map((item, key) => (
							<>
								{item}:<input type={"text"} name={item}></input>
							</>
						))}
					</div>
				))}

				<button
					type="submit"
					onClick={() => {
						ins(false);
					}}
				>
					Отобразить граф
				</button>
			</form>
		</div>
	);
};

export default Controller;
