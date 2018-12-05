import React, {Component} from 'react'
import {API} from '../../../../services/services.api'

class SurveyAddForm extends Component {
    componentWillMount() {
        // API.getAccessToUserWall()
        const ownerID = 173986239
        const pollID = 313436729
        API.getPollById(ownerID, pollID)
            .then((pollData) => {
                console.log('POLL DATA:', pollData)
            })
            .catch((err) => {
                console.log("ERROR DATA", err);
                API.getPollById(ownerID, pollID).then((pollData) => {
                    console.log('POLL DATA AFTER ERROR:', pollData)
                })
            })
    }

    render() {
        return <div />
    }
}

export default SurveyAddForm
