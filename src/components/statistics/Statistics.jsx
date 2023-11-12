import css from "./Statistics.module.css"
export const Statistics = ({good, neutral, bad, total, positivePercentage})=>{
	return (
		<div className={css.statisticsWrapper}>
		<h2 className={css.secondaryTitle}>Statistics</h2>
			<ul className={css.statisticsList}>
				<li className={css.statisticsItem}>Good: <span>{good}</span></li>
				<li className={css.statisticsItem}>Neuteral: <span>{neutral}</span></li>
				<li className={css.statisticsItem}>Bad: <span>{bad}</span></li>
				<li className={css.statisticsItem}>Total: <span>{total}</span></li>
				<li className={css.statisticsItem}>Positive percentage: <span>{positivePercentage} %</span></li>
			</ul>
		</div>
	)
}