import { FAILED_REQUEST, GET_IMAGE, REQUEST_IMAGE } from "../actions";

const initialState = {
    isFetching: false,
    imagePath: '',
    error: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case REQUEST_IMAGE:
        return { ...state, isFetching: true };
      case GET_IMAGE:
        return { ...state, imagePath: action.payload, isFetching: false };
      case FAILED_REQUEST:
        return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
    }
  }