import axios from 'axios'

let VK = window.VK
if (VK === undefined) {
    VK = {
        init: () => {}
    }
}

const API_URL = 'https://hot-dog.site/api'
export const API = {
    getUserGroups: () => getGroupsPromise,
    getGroupsForClean: () =>
        axios.get(API_URL + '/getPublics', {
            params: {
                user_vk_id: window.user_id,
                auth_key: window.auth_key
            }
        }),
    getGroupDogsCount: (groupID) =>
        axios.get(API_URL + '/getDogsCount', {
            params: {
                id: groupID,
                user_vk_id: window.user_id,
                auth_key: window.auth_key
            }
        }),
    deleteGroupFromCleanQue: (backEndID) => {
        console.log('DELETE REQUEST, id is:', backEndID)
        return axios.delete(API_URL + '/deletePublic', {
            id: backEndID,
            user_vk_id: window.user_id,
            auth_key: window.auth_key
        })
    },
    addGroupToCleanAndGetItData: (publicID) =>
        axios.post(API_URL + '/addPublic', {
            user_vk_id: window.user_id,
            auth_key: window.auth_key,
            vk_id: publicID
        }),
    startCleanTask: (public_ids) =>
        axios.post('https://hot-dog.site/api/startCleanTasks', {
            user_vk_id: window.user_id,
            auth_key: window.auth_key,
            public_ids: public_ids
        }),
    getCleaningTasks: () =>
        axios.get('https://hot-dog.site/api/getCleanTasks', {
            params: {
                user_vk_id: window.user_id,
                auth_key: window.auth_key
            }
        }),
    getFreshPublic: (public_id) =>
        axios.get('https://hot-dog.site/api/refreshPublic', {
            params: {
                user_vk_id: window.user_id,
                auth_key: window.auth_key,
                id: public_id
            }
        }),
    setAccessToken: (token) =>
        axios.patch('https://hot-dog.site/api/setAccessToken', {
            access_token: token,
            user_vk_id: window.user_id,
            auth_key: window.auth_key
        }),
    getPollById: ({ownerID, pollID}) => getPollById({ownerID, pollID}),
    getAnswersByAnswerID: ({pollID, rightAnswerID}) =>
        getAnswersByAnswerIdPromise({pollID, rightAnswerID}),
    getAccessToUserWall: () => VK.callMethod('showSettingsBox', 8192),
    onSettingChange: () => onSettingChangePromise()
}

const getPollById = ({ownerID, pollID}) => {
    return new Promise((resolve, reject) => {
        VK.api('polls.getById', {v: '5.92', poll_id: pollID}, (data) => {
            if (data.error) {
                reject(data.error)
            } else {
                resolve(data)
            }
        })
    })
}

function getAnswersByAnswerIdPromise({pollID, rightAnswerID}) {
    return new Promise((resolve, reject) => {
        VK.api(
            'polls.getVoters',
            {
                v: '5.92',
                poll_id: pollID,
                answer_ids: rightAnswerID
            },
            (data) => {
                if (data.error) {
                    console.log('ERROR', data.error)
                    reject(data.error)
                } else {
                    resolve(data)
                }
            }
        )
    })
}

const onSettingChangePromise = () => {
    return new Promise((resolve, reject) => {
        VK.addCallback('onSettingsChanged', (settings) => {
            resolve(settings)
        })
    })
}
const getGroupsPromise = new Promise((resolve, reject) => {
    VK.init(
        () => {
            VK.api(
                'groups.get',
                {
                    filter: 'moder',
                    extended: '1',
                    fields: 'photo_100',
                    v: '5.85'
                },
                (data) => {
                    const groups = normalizeVKGroupsData(data.response.items)
                    // const groupsCount = data.response.count
                    // console.log(`Got ${groupsCount} publics from VK:`)
                    // console.log(groups)
                    resolve(groups)
                }
            )
        },
        () => {
            console.log('VK API initialization failed')
            reject('Groups fetch failed')
        },
        '5.85'
    )
})

const normalizeVKGroupsData = (array) => {
    return array.map(converter)
}

const converter = (item) => {
    // noinspection JSUnresolvedVariable
    return {
        avatar_url: item.photo_100,
        id: item.id,
        name: item.name
    }
}
