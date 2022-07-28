import axios from "axios";
export const dashBoard_Action = {
  REQUEST: "REQUEST",
  SUCCESS1: "SUCCESS",
  FAILURE: "FAILURE",
};

export const dashboard_request = () => ({
  type: dashBoard_Action.REQUEST,
});

export const dashboard_success1 = (payload) => ({
  type: dashBoard_Action.SUCCESS1,
  payload,
});

export const dashboard_failure = () => ({
  type: dashBoard_Action.FAILURE,
});

export const userData = (userId) => (dispatch) => {
  // console.log("userIdssssssssss:", userId);
  // dispatch(dashboard_request());
  axios
    .get(`http://localhost:8080/user/${userId}`)
    .then((res) => {
      dispatch(dashboard_success1(res.data));

      //      type: dashBoard_Action.SUCCESS1,
      // payload,
    })
    .catch(() => {
      dispatch(dashboard_failure());
    });
};
