import axios from "axios";
export const dashBoard_Action = {
  REQUEST: "REQUEST",
  SUCCESS1: "SUCCESS",
  FAILURE: "FAILURE",
  parcentage: "parcentage",
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

export const parcentage = (payload) => ({
  type: dashBoard_Action.parcentage,
  payload,
});

export const userData = (userId) => (dispatch) => {
  axios
    .get(`http://localhost:8080/user/${userId}`)
    .then((res) => {
      dispatch(dashboard_success1(res.data));
    })
    .catch(() => {
      dispatch(dashboard_failure());
    });
};

export const toggleStatus = (key, value, i) => (dispatch) => {
  const x = JSON.parse(localStorage.getItem("userId"));

  var a = key + (i + 1);

  const payload = {
    [a]: !value,
  };

  axios
    .patch(`http://localhost:8080/user/${x}`, payload)
    .then((res) => {
      dispatch(userData(x));
      dispatch(getPersentange(x));
    })
    .catch((err) => console.error(err));
};

export const getPersentange = (id) => (dispatch) => {
  axios.get(`http://localhost:8080/user/${id}/progress`).then((res) => {
    dispatch(parcentage(res.data));
  });
};
