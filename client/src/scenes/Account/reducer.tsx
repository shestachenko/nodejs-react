import { AccountActionTypes } from "./actions";

export interface State {
  data: AccountInterface;
}

export const initialState: State = {
  data: null,
};

export default (
  state = initialState,
  action: any,
): State => {
  switch (action.type) {
    case AccountActionTypes.FetchedUserAccount:
      return {
        ...state,
        data: action.payload,
      };

    case AccountActionTypes.UpdatedUserAccount:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
