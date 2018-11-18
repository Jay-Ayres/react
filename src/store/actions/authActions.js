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

        console.log("chamando o logout");
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        }).catch((err) => {
            //dispatch({type:'CREATE_PROJECT_ERROR', err });
            console.log("um erro ocorreu");
        })

    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        console.log("logando new user");
        console.log(newUser);

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            
            return firestore.collection('users').doc(resp.user.id).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type:'SIGNUP_ERROR', err})
        })
    }
}