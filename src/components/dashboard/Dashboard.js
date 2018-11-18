import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        console.log("log do componente");
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        console.log(projects);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications />
                </div>
            </div>

        )
    }
}   

// função utilizada para mapear a propriedade deseja da store para dentro
//do props do componente
const mapStateToProps = (state) => {
    console.log(state);
    console.log("la vem o data");
    console.log(state.firestore.ordered.projects);
    return {
      projects: state.firestore.ordered.projects,
      auth: state.firebase.auth
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)