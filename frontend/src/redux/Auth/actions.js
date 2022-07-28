import axios from 'axios'
export const authAction = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
}

export const signup_request = () => ({
    type: authAction.REQUEST,
});

export const signup_success = (payload) => ({
    type: authAction.SUCCESS,
    payload,
});

export const signup_failure = () => ({
    type: authAction.FAILURE,
});

export const signup_post = (payload) => (dispatch) => {
    dispatch(signup_request())
    axios.post('http://localhost:8080/user/signup', payload).then(({ data }) => {
        dispatch(signup_success(data.success._id))
    }).catch(() => {
        dispatch(signup_failure())
    })
}


export const signin_post = (payload) => (dispatch) => {
    console.log('payload:', payload)

    // dispatch(signup_request())
    axios.post('http://localhost:8080/user/signin', payload).then((res) => {
        console.log('res: check id or arr afasfg', res.data)
        dispatch(signup_success(res.data))
    }).catch(() => {
        dispatch(signup_failure())
    })
}


