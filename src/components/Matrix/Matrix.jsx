import classNames from "classnames";
import styles from "./Matrix.module.scss";

export const Matrix = ({ matrix }) => {
	return (
		<div className={styles.wrapper}>
			{matrix.map((item, key) => (
				<div className={styles.block} key={key}>
					{item.map((item) => (
						<div
							className={classNames(
								styles.item,
								{
									[styles.weight]: item > 0,
								},
								{ [styles.negative]: item < 0 }
							)}
						>
							{item}
						</div>
					))}
				</div>
			))}
		</div>
	);
};
