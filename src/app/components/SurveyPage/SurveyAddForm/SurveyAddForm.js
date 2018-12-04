import React, {Component} from 'react'
import {API} from '../../../../services/services.api'

class SurveyAddForm extends Component {
    componentWillMount() {
        API.getPollById(173986239, 313436729).then((r) => {
            console.log('DATA POLL', r.data)
        })
    }

    render() {
        return <div />
    }
}

export default SurveyAddForm
