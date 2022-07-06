
const initialState =  {
    isAuthenticated : false,
    token : '',
    email : ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN' :
        return {
           isAuthenticated : true,
           token : action.payload.token
        }
        
        case 'LOGOUT' :
        return {
            isAuthenticated : false,
            token : ''
        }

        case 'RESET' :
        return {
            email : action.payload.email
        }

        default :

    }
    return state;
}

export default authReducer;