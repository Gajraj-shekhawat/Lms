import { dashBoard_Action } from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  userId: JSON.parse(localStorage.getItem("userId")) || null,
  data: null,
  totalClass: 0,
  totalassignments: 0,
};

export const dashboard_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dashBoard_Action.REQUEST: {
      return { ...state, isLoading: true };
    }
    case dashBoard_Action.SUCCESS1: {
      localStorage.setItem("userName", JSON.stringify(payload[0].name));
      return { ...state, isLoading: false, data: payload[0] };
    }

    case dashBoard_Action.FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case dashBoard_Action.parcentage: {
      return {
        ...state,
        totalClass: payload.lec,
        totalassignments: payload.ass,
      };
    }
    default: {
      return state;
    }
  }
};
