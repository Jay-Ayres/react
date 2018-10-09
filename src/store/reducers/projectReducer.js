const initState = {
   projects: [
        {id: '1', tittle: 'help me find peach', content: 'mama miaaa'},
        {id: '2', tittle: 'collect all the stars', content: 'mama miaaa'},
        {id: '3', tittle: 'where is yoshi ??', content: 'mama miaaa'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project);
    }

    return state;
}

export default projectReducer