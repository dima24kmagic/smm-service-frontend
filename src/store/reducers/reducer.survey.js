import {API} from '../../services/services.api'

const initialState = {}

const GET_POLL_BY_ID = 'GET_POLL_BY_ID'

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        default:
            return state
    }
}

export const GetPollById = (ownerID, pollID) => {
    return (dispatch) => {
        API.getPollById(ownerID, pollID)
            .then((pollData) => {
                dispatch({
                    type: GET_POLL_BY_ID,
                    payload: pollData
                })
            })
            .catch((err) => {
                API.onSettingChange().then((r) => {
                    API.getPollById(ownerID, pollID).then((pollData) => {
                        dispatch({
                            type: GET_POLL_BY_ID,
                            payload: pollData
                        })
                    })
                })
                API.getAccessToUserWall()
            })
    }
}
