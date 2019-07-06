import { GET_REPOS, REPOS_SUCCESS, REPOS_FAIL } from "../../common/ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  repoData: null,
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, isLoading: true, error: null };
    case REPOS_SUCCESS:
      return { ...state, isLoading: false, repoData: JSON.parse(action.data).items, error: null };
    case REPOS_FAIL:
      return { ...state, isLoading: false, error: "There are some issues occured while fetching repositories." };
    default:
      return state;
  }
}
