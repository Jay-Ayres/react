const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    
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
        case 'SIGNUP_SUCCESS':
            console.log('Signout ocorreu com sucesso')
            return {
                ...state,
                authError:null 
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error'+action.err.message)
            return {
                ...state,
                authError:action.err.message 
            }
        default:{
            console.log("testeeeeeeee")
            return state    
        }
    }
    console.log('verificando o state no reducer');
    console.log(state);
}

export default authReducer