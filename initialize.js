// Initialize Cloud firestore through firebase

var db = firebase.firestore();

//This will creadte the employees collection
var employeesRef = db.collection('employees');

// Adding data to the collection

// R.Dikles is the key
// employeesRef.doc('R.Dikles').set({
//     fName: 'Ranice',
//     lName: 'Dikles',
//     email: 'rdiklesO@hatena.ne.js',
//     age: 39,
//     gender: 'Female',
//     yearsOfExperience: 9,
//     isFullTime: true
// });

// employeesRef.doc('A.Jain').set({
//     fName: 'Ankit',
//     lName: 'Jain',
//     email: 'ajain@jain.com',
//     age: 29,
//     gender: 'Male',
//     yearsOfExperience: 5,
//     isFullTime: true
// });

// Retreiving data from the collection
employeesRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
    });
});
