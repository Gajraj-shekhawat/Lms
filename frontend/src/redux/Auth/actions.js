import axios from "axios";
export const authAction = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

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

export const signup_post = (payload, navigate, setShowError) => (dispatch) => {
  dispatch(signup_request());
  axios
    .post("http://localhost:8080/user/signup", payload)
    .then(({ data }) => {
      if (data.message === "User already exist") {
        setShowError(true);
      } else {
        dispatch(signup_success(data.success._id));
        navigate("/payment");
      }
    })
    .catch(() => {
      dispatch(signup_failure());
    });
};

export const signin_post = (payload, navigate, setShowError) => (dispatch) => {
  dispatch(signup_request());
  axios
    .post("http://localhost:8080/user/signin", payload)
    .then((res) => {
      // console.log("res:", res.data);
      if (res.data.message === "Wrong credentials") {
        setShowError(true);
      } else {
        dispatch(signup_success(res.data));
        navigate("/dashboard");
      }
    })
    .catch(() => {
      dispatch(signup_failure());
    });
};
