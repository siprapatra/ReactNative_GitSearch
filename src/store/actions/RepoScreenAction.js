import { GET_REPOS, REPOS_SUCCESS, REPOS_FAIL } from "../../common/ActionTypes";

export const getRepos = (searchText, page = 1) => {
  return dispatch => {
    dispatch({
      type: GET_REPOS,
    });

    fetch(`https://api.github.com/search/repositories?q=${searchText}&sort=stars&order=desc&page=${page}`).then(res => res.json()).
      then((resData) => {
        console.log("data1", resData)
        dispatch({
          type: REPOS_SUCCESS,
          data: JSON.stringify(resData)
        });
      }).catch(err =>
        console.log("error", err));
    dispatch({
      type: REPOS_FAIL,
      data: "error"
    });
  }
};
