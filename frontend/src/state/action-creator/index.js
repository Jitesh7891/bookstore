export const setUser = (username, email) => {
    return (dispatch)=>{
        dispatch({
            type: "login",
    payload:{
      username,
      email
    }})
  }};