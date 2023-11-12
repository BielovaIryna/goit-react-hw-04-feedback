import css from "./Section.module.css"
import { FeedbackOptions } from "components/feedbackOptions/FeedbackOptions";
import { Notification } from "components/notification/Notification";
import { Statistics } from "components/statistics/Statistics";
export const Section = ({state, onLeaveFeedback,countTotalFeedback,countPositiveFeedbackPercentage})=>{
	return(
		<section className={css.main}>
			<h1 className={css.mainTitle}>Pleace leave feedback</h1>
			<div className={css.buttonsWrapper}>
				<FeedbackOptions
				onLeaveFeedback={onLeaveFeedback}
				options={Object.keys(state)}
				/>
			</div>
			{countTotalFeedback>0?
				<Statistics
				good={state.good}
				neutral={state.neutral}
				bad={state.bad}
				total={countTotalFeedback}
				positivePercentage={countPositiveFeedbackPercentage}/>:<Notification/>}
			
		</section>
	)
}