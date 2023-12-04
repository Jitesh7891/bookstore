
const initialUser={
    username:'',
    email:'',
}

const reducer=(user=initialUser,action)=>{
    switch(action.type){
        case 'login':
            return{
                ...user,
                username:action.payload.username,
                email:action.payload.email,
            }
        default:
            return user;
    }
};

export default reducer;