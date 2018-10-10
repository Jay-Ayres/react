const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    console.log('verificando o state no reducer 1');
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Verificando Error...')
            return{
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout ocorreu com sucesso')
            return state 
        default:
            return state    
    }
    console.log('verificando o state no reducer');
    console.log(state);
}

export default authReducer