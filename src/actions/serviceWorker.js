import { UPDATE_SERVICE_WORKER } from './types'

export const updateRefresh = isUpdate => {
  return {
    type: UPDATE_SERVICE_WORKER,
    isUpdate
  }
}
