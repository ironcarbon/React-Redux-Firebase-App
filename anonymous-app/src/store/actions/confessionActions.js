export const createConfession = (confession) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        //console.log('ipeksi' + confession);
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('confessions').add({
            ...confession,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CONFESSION', payload: confession });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CONFESSION_ERROR', err });
        })

    }
};