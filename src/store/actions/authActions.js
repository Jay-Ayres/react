export const signIn = (credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        console.log('verificando se a acoa de login esta recebendo as credenciais');
        console.log(credentials);
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            console.log('error');
            dispatch({ type: 'LOGIN_ERROR' }, err);
        });
    }
}
export const signOut = () => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        })

    }
}