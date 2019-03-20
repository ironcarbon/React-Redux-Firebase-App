export const createConfession = (confession) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        dispatch({ type: 'CREATE_CONFESSION', payload: confession });
    }
};