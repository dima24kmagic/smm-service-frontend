import React, {Component} from 'react'
import SurveyAddForm from './SurveyAddForm/SurveyAddForm'

class SurveyPage extends Component {
    state = {
        showAddForm: false
    }
    toggleAddForm = () => {
        this.setState({
            showAddForm: !this.state.showAddForm
        })
    }
    render() {
        const {showAddForm} = this.state
        return (
            <div className="survey-wrapper">
                <div className="survey-intro">Создать Викторину!</div>
                <span
                    className={`plus-sign ${
                        showAddForm ? 'plus-sign--cris' : ''
                    }`}
                    onClick={this.toggleAddForm}
                />
                {showAddForm && <SurveyAddForm />}
                {showAddForm && (
                    <div className="btns-holder">
                        <div className="btn-ff">Добавить опрос</div>
                        <div className="btn-ff">Узнать победителей</div>
                    </div>
                )}
            </div>
        )
    }
}

export default SurveyPage
