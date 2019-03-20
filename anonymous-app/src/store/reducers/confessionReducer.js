const initState = {
    confessions: [
        { id: '1', title: 'Best book', content: 'sfdfhdsjkfhdksfghs' },
        { id: '2', title: 'Best movie', content: 'sfdfhdsjkfhdksfghs' },
        { id: '3', title: 'Best friend', content: 'sfdfhdsjkfhdksfghs' },

    ]
};

const confessionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CONFESSION':
            console.log('created confession', action.payload)
    }
    return state;
}

export default confessionReducer;