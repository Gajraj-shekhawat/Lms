import { authAction } from "./actions";

const initialState = {
  status: JSON.parse(localStorage.getItem("user")) || false,
  isLoading: false,
  isError: false,
  userId: JSON.parse(localStorage.getItem("userID")) || null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authAction.REQUEST: {
      return { ...state, isLoading: true };
    }
    case authAction.SUCCESS: {
      localStorage.setItem("userId", JSON.stringify(payload))
      console.log('payload in auth:', payload)
      localStorage.setItem("auth", true)
      return { ...state, isLoading: false, status: true, };
    }
    case authAction.FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};


