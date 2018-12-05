import React, {Component} from 'react'
import SurveyAddForm from './SurveyAddForm/SurveyAddForm'

console.log("VK API");

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
            </div>
        )
    }
}

export default SurveyPage
