import React, {Component} from 'react'
import SurveyAddForm from './SurveyAddForm/SurveyAddForm'
import connect from 'react-redux/src/connect/connect'
import {bindActionCreators} from 'redux'
import {addSurveyForm, GetWinners, onAnswerChange, onUrlChange} from '../../../store/reducers/reducer.survey'

console.log("Spread");

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
            onAnswerChange,
            onUrlChange,
            addSurveyForm,
            GetWinners
        } = this.props
        const {showAddForm} = this.state
        return <div className="survey-wrapper">
                <div className="survey-intro">Создать Викторину!</div>
                <span className={`plus-sign ${showAddForm ? 'plus-sign--cris' : ''}`} onClick={this.toggleAddForm} />
                {showAddForm && Object.keys(surveys).map((s_key, i) => {
                        const s_url = surveys[s_key].s_url
                        const s_right_answer = surveys[s_key].s_right_answer

                        return <SurveyAddForm key={i} i={i} s_url={s_url} s_right_answer={s_right_answer} s_key={s_key} onAnswerChange={onAnswerChange} onUrlChange={onUrlChange} />
                    })}
                {showAddForm && <div className="btns-holder">
                        <div className="btn-ff" onClick={addSurveyForm}>
                            Добавить опрос
                        </div>
                        <div className="btn-ff" onClick={() => {
                                GetWinners(surveys)
                            }}>
                            Узнать победителей
                        </div>
                    </div>}
                {winners && winners.map((winner) => (
                        <div>{winner}</div>
                    ))}
            </div>
    }
}

const mapStateToProps = ({surveys}) => ({
    surveys: surveys.surveys,
    winners: surveys.winners
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {onAnswerChange, onUrlChange, addSurveyForm, GetWinners},
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyPage)
