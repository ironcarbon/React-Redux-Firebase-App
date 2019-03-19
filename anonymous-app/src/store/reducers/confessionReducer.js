const initState = {
    confessions: [
        { id: '1', title: 'Best book', content: 'sfdfhdsjkfhdksfghs' },
        { id: '2', title: 'Best movie', content: 'sfdfhdsjkfhdksfghs' },
        { id: '3', title: 'Best friend', content: 'sfdfhdsjkfhdksfghs' },

    ]
};

const confessionReducer = (state = initState, action) => {
    return state;
}

export default confessionReducer;