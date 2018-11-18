import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    console.log('clique para deslogar');
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    )
}

const mapDipatchToProps = (dispatch) => {
    return{
        signOut: () => {
            console.log("chamando logggg");
            dispatch(signOut())
        }
    }
}

export default connect(null,mapDipatchToProps)(SignedInLinks)