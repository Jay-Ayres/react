import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

//Esse componente não vai manipular o state, por isso não herdamos de component
const Navbar = (props) => {
    const {auth} = props;
    console.log('clogando auth');
    console.log(auth);
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/' className="brand-logo">MarioPlan</Link>   
            { links }

            </div>
        </nav>
              
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    //verificar porque foi possível acessar essa propriedade daqui.
    return{
        auth:state.firebase.auth

    }
} 

export default connect(mapStateToProps)(Navbar)