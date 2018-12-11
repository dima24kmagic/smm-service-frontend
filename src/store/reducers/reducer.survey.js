import {API} from '../../services/services.api'
const delay = require('delay')

const ON_URL_CHANGE = 'ON_URL_CHANGE'
const ON_ANSWER_CHANGE = 'ON_ANSWER_CHANGE'
const ADD_SURVEY_FORM = 'ADD_SURVEY_FORM'
const GET_WINNERS = 'GET_WINNERS'
const END_LOADING_WINNERS = 'END_LOADING_WINNERS'
const GET_POLL_BY_ID = 'GET_POLL_BY_ID'

const initialState = {
    surveys: {
        s1: {
            s_url: '',
            s_right_answer: ''
        }
    },
    winners: [],
    loadingWinners: true
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case ON_ANSWER_CHANGE: {
            const {s_key, value} = payload
            return {
                ...state,
                surveys: {
                    ...state.surveys,
                    [s_key]: {
                        ...state.surveys[s_key],
                        s_right_answer: value
                    }
                }
            }
        }
        case ON_URL_CHANGE: {
            const {s_key, value} = payload
            return {
                ...state,
                surveys: {
                    ...state.surveys,
                    [s_key]: {
                        ...state.surveys[s_key],
                        s_url: value
                    }
                }
            }
        }
        case ADD_SURVEY_FORM: {
            let surveysLength = Object.keys(state.surveys).length
            const surveyID = 's' + surveysLength + 1
            console.log('SURVEY_ID:', surveyID, surveysLength, state.surveys)
            return {
                ...state,
                surveys: {
                    ...state.surveys,
                    [surveyID]: {s_url: '', s_right_answer: ''}
                }
            }
        }
        case GET_WINNERS: {
            const winners = payload
            const newArr = [...state.winners, ...winners]
            const uniqueUsers = newArr.filter(function(item, pos) {
                return newArr.indexOf(item) === pos
            })
            console.log('UNIQUE USERS:', uniqueUsers)
            return {
                ...state,
                winners: uniqueUsers,
                loadingWinners: true
            }
        }
        case END_LOADING_WINNERS: {
            return {
                ...state,
                loadingWinners: false
            }
        }
        default:
            return state
    }
}

function getRightAnswerID({poll, s_right_answer}) {
    const rightAnswer = poll.answers[s_right_answer - 1]
    return rightAnswer.id
}

function getUsersThatResponseRight({pollID, rightAnswerID}) {
    return API.getAnswersByAnswerID({pollID, rightAnswerID}).then(
        ({response}) => {
            const rightUsers = response[0].users.items
            return rightUsers
        }
    )
}

export const GetPollById = ({ownerID, pollID, s_key, s_right_answer}) => {
    ownerID = parseInt(ownerID)
    pollID = parseInt(pollID)
    return API.getPollById({ownerID, pollID})
        .then(({response}) => {
            return response
        })
        .catch((err) => {
            API.getAccessToUserWall()
            return API.onSettingChange().then((r) => {
                return API.getPollById({ownerID, pollID}).then(({response}) => {
                    return response
                })
            })
        })
}

export const onUrlChange = (e, s_key) => {
    return (dispatch) => {
        const value = e.target.value
        dispatch({
            type: ON_URL_CHANGE,
            payload: {value, s_key}
        })
    }
}

export const onAnswerChange = (e, s_key) => {
    return (dispatch) => {
        const value = e.target.value
        dispatch({
            type: ON_ANSWER_CHANGE,
            payload: {value, s_key}
        })
    }
}

export const addSurveyForm = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_SURVEY_FORM
        })
    }
}

function getPollID(s_url) {
    const ownerAndPollID = s_url.split('poll-')[1]
    return ownerAndPollID.split('_')[1]
}

function getPollOwnerID(s_url) {
    const ownerAndPollID = s_url.split('poll-')[1]
    return ownerAndPollID.split('_')[0]
}

export const GetWinners = (surveys) => {
    return async (dispatch) => {
        const s_keys = Object.keys(surveys).map((s_key) => s_key)
        for (let i = 0; i < s_keys.length; i++) {
            const s_key = s_keys[i]
            const surveyData = surveys[s_key]
            const pollID = getPollID(surveyData.s_url)
            const ownerID = getPollOwnerID(surveyData.s_url)
            const s_right_answer = surveys[s_key].s_right_answer
            GetPollById({ownerID, pollID, s_key, s_right_answer}).then(
                (poll) => {
                    const rightAnswerID = getRightAnswerID({
                        poll,
                        s_right_answer
                    })
                    getUsersThatResponseRight({pollID, rightAnswerID}).then(
                        (rightUsers) => {
                            console.log('RIGHT USERS:', rightUsers)
                            let userIDs = rightUsers.join()
                            console.log('USER IDS:', userIDs)
                            API.getUserByIDs({userIDs}).then((usersInfo) => {
                                console.log('USERS INFO:', usersInfo)
                                dispatch({
                                    type: GET_WINNERS,
                                    payload: usersInfo
                                })
                                if (i === s_keys.length - 1) {
                                    dispatch({
                                        type: END_LOADING_WINNERS
                                    })
                                }
                            })
                        }
                    )
                }
            )
            await delay(400)
        }
    }
}
