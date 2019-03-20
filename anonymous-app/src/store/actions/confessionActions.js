export const createConfession = (confession) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        console.log('ipeksi' + confession);
        const firestore = getFirestore();
        firestore.collection('confessions').add({
            ...confession,
            authorFirstName: 'ipek',
            authorLastName: 'civicakan',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CONFESSION', payload: confession });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CONFESSION_ERROR', err });
        })

    }
};