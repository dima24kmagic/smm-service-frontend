import React, {Component} from 'react'
import './survey-form.scss'

class SurveyAddForm extends Component {
    render() {
        const {
            i,
            s_url,
            s_right_answer,
            onUrlChange,
            onAnswerChange,
            s_key
        } = this.props
        return (
            <div className="survey-form">
                <div className="survey__instance">
                    <div className="survey__num">Опрос №{i + 1}</div>
                    <div className="survey-input">
                        <div className="input-place">
                            <label htmlFor="survey-link">Ссылка на опрос</label>
                            <input
                                type="text"
                                id="survey-link"
                                value={s_url}
                                onChange={(e) => onUrlChange(e, s_key)}
                            />
                        </div>
                        <div className="input-place">
                            <label htmlFor="right-num">Ответ (№)</label>
                            <input
                                type="number"
                                id="right-num"
                                value={s_right_answer}
                                onChange={(e) => onAnswerChange(e, s_key)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyAddForm
