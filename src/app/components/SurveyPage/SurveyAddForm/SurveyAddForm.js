import React, {Component} from 'react'
import './survey-form.scss'
class SurveyAddForm extends Component {
    render() {
        return (
            <div className="survey-form">
                <div className="survey__instance">
                    <div className="survey__num">Опрос №1</div>
                    <div className="survey-input">
                        <div className="input-place">
                            <label htmlFor="survey-link">Ссылка на опрос</label>
                            <input type="text" id="survey-link" />
                        </div>
                        <div className="input-place">
                            <label htmlFor="right-num">Ответ (№)</label>
                            <input type="number" id="right-num" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyAddForm
