import React, {Component} from 'react'
import SurveyAddForm from './SurveyAddForm/SurveyAddForm'
import connect from 'react-redux/src/connect/connect'
import {bindActionCreators} from 'redux'
import {
    addSurveyForm,
    GetWinners,
    onAnswerChange,
    onUrlChange
} from '../../../store/reducers/reducer.survey'

console.log('OPPOSITE')

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
        const {
            surveys,
            winners,
            loadingWinners,
            onAnswerChange,
            onUrlChange,
            addSurveyForm,
            GetWinners
        } = this.props
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
                <div className="surveys-form-wrapper">
                    {showAddForm &&
                        Object.keys(surveys).map((s_key, i) => {
                            const s_url = surveys[s_key].s_url
                            const s_right_answer = surveys[s_key].s_right_answer

                            return (
                                <SurveyAddForm
                                    key={i}
                                    i={i}
                                    s_url={s_url}
                                    s_right_answer={s_right_answer}
                                    s_key={s_key}
                                    onAnswerChange={onAnswerChange}
                                    onUrlChange={onUrlChange}
                                />
                            )
                        })}
                </div>

                <div className="winners-list">
                    {!loadingWinners &&
                        winners.map((winner) => {
                            const {screen_name, first_name, last_name} = winner
                            return (
                                <div className="winners-list__item">
                                    {`@${screen_name}: ${first_name} ${last_name}`}
                                </div>
                            )
                        })}
                </div>

                {showAddForm && (
                    <div className="btns-holder">
                        <div className="btn-ff" onClick={addSurveyForm}>
                            Добавить опрос
                        </div>
                        <div
                            className="btn-ff"
                            onClick={() => {
                                GetWinners(surveys)
                            }}
                        >
                            Узнать победителей
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = ({surveys}) => {
    console.log('MSP:', surveys)
    return {
        surveys: surveys.surveys,
        winners: surveys.winners,
        loadingWinners: surveys.loadingWinners
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {onAnswerChange, onUrlChange, addSurveyForm, GetWinners},
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyPage)
