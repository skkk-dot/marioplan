export const createProject = (project) => {
  return (dispatch, getState) => {
    // make async call to an api
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
