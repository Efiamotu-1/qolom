const initialState = {
    name : '',
    address : '',
    email : '',
    password : '',

}

const BusinessReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'signIn':
        return {
            name : action.payload.name,
            address : action.payload.address,
            email : action.payload.email,
            password : action.payload.password
        }
    }
    return state
}


export default BusinessReducer;