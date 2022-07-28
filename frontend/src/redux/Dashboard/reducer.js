import { dashBoard_Action } from "./actions";


const initialState = {
  isLoading: false,
  isError: false,
  // userId: JSON.parse(localStorage.getItem("userID")) || null,
  data:null
};

export const dashboard_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dashBoard_Action.REQUEST: {
      return { ...state, isLoading: true };
    }
    case dashBoard_Action.SUCCESS: {
      
      console.log('payload:', payload)
      return { ...state, isLoading: false,  data: payload[0] };
    }
    case dashBoard_Action.FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
  
};
