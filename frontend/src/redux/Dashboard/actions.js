import axios from 'axios'
export const dashBoard_Action = {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
}

export const dashboard_request = () => ({
    type: dashBoard_Action.REQUEST,
});


export const dashboard_success = (payload) => ({
    type: dashBoard_Action.SUCCESS,
    payload,
});

export const dashboard_failure = () => ({
    type: dashBoard_Action.FAILURE,
});

export const userData= (_id)=>(dispatch)=>{
    dispatch(dashboard_request())
    axios.get(`http://localhost:8080/user/${_id}`).then((res) => {
        console.log('res: for get', res)

        dispatch(dashboard_success(res.data))
    }).catch(() => {
        dispatch(dashboard_failure())
    })
}
