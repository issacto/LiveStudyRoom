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
  const snapshot  = await db.collection('meetingrooms').doc('Current').get();
  return snapshot.data().currentList;
}