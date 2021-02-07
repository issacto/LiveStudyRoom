import firebase from "../Firebase/firebase"

const db = firebase.firestore();
export function writeData (roomNumber){
    const docRef = db.collection('meetingrooms').doc('Current');
     docRef.update({
        currentList: firebase.firestore.FieldValue.arrayUnion(roomNumber)

     })
      
}

export function deleteData(roomNumber){
  const docRef = db.collection('meetingrooms').doc('Current');
  docRef.update({
     currentList: firebase.firestore.FieldValue.arrayRemove(roomNumber)

  })
}
  
export async function getUserData () {
  const docRef = db.collection('meetingrooms').doc('Current');
  await db.collection('meetingrooms').doc('Current').get()
        .then(snapshot => {console.log(snapshot.data().currentList);return snapshot.data().currentList})
  console.log('DATA RETRIEVED');
}