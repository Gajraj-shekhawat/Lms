import axios from "axios";
export const authAction = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  STOP_LOADER: "STOP_LOADER",
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
export const stopLoader = () => ({
  type: authAction.STOP_LOADER,
});

export const signup_post = (payload, navigate, setShowError) => (dispatch) => {
  dispatch(signup_request());
  axios
    .post("https://lms-backend-masai.herokuapp.com/user/signup", payload)
    .then(({ data }) => {
      if (data.message === "User already exist") {
        setShowError(true);
        dispatch(stopLoader())
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
    .post("https://lms-backend-masai.herokuapp.com/user/signin", payload)
    .then((res) => {
      if (res.data.message === "Wrong credentials") {
        setShowError(true);
        dispatch(stopLoader())
      } else {
        dispatch(signup_success(res.data));
        navigate("/dashboard");
      }
    })
    .catch(() => {
      dispatch(signup_failure());
    });
};
