import css from "./FeedbackOptions.module.css"
export const FeedbackOptions = ({onLeaveFeedback, options}) =>{
	return(
		<ul className={css.buttonList}>
		{options.map(option => {
			return(

                <li className={css.feedbackItem} key={option}>
                    <button type="button" className={css.feedbackButton} onClick={()=>onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            )
		})}
		</ul>
	)
}