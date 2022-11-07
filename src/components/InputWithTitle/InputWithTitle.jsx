import classNames from "classnames";
import styles from "./InputWithTitle.module.scss";

export const InputWithTitle = ({ title, isWarning }) => {
	return (
		<div className={styles.wrapper}>
			<p>{title}</p>
			<input
				className={classNames(styles.input, {
					[styles.warning]: isWarning,
				})}
			></input>
		</div>
	);
};
