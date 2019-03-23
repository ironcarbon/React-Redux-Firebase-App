//Firestore security rules

// service cloud.firestore {
//     match / databases / { database } / documents {
//         match / confessions / { confession } {
//             allow read, write: if request.auth.uid != null
//       }
//         match / users / { userId }{
//             allow create
//             allow read: if request.auth.uid != null
//         allow write: if request.auth.uid == userId
//       }
//     }
// }

