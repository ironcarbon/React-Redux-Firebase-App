export const createConfession = (confession) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'CREATE_CONFESSION', payload: confession });
    }
};