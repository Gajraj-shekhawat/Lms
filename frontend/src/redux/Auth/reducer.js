import { authAction } from "./actions";

const initialState = {
  status: JSON.parse(localStorage.getItem("user")) || false,
  isLoading: false,
  isError: false,
  y: JSON.parse(localStorage.getItem("userId")) || "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authAction.REQUEST: {
      return { ...state, isLoading: true };
    }
    case authAction.SUCCESS: {
      if (!localStorage.getItem("userId")) {
        localStorage.setItem("userId", JSON.stringify(payload));
        // localStorage.setItem("userId", JSON.stringify(payload));

        localStorage.setItem("status", JSON.stringify(true));
      }

      return { ...state, isLoading: false, status: true };
    }
    case authAction.FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
