import { UPDATE_SERVICE_WORKER } from '../actions/types'

const INITIAL_STATE = {
  isUpdate: false
};

export default function serviceWorker(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SERVICE_WORKER:
      return { ...state, isUpdate: action.isUpdate };
    default:
      return state;
  }
}
