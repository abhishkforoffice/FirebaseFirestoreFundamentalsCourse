$(document).ready(function () {
    $('#onlyMalesFilter').click(function () {
        // console.log('onlyMalesFilter Filter executed');
        employeesRef.where('gender', '==', 'Male')
            .onSnapshot((querySnapshot) => {
                LoadTableData(querySnapshot);
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().fName);
                })
            })
    });

    $('#fullTimeFilter').click(function () {
        console.log('fullTimeFilter Filter executed');
        employeesRef.where('isFullTime', '==', true)
            .onSnapshot((querySnapshot) => {
                LoadTableData(querySnapshot);
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().fName);
                })
            })
    });

    $('#olderThenFilter').click(function () {
        console.log('olderThenFilter Filter executed');
        employeesRef.where('age', '>=', 30)
            .onSnapshot((querySnapshot) => {
                LoadTableData(querySnapshot);
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().fName);
                })
            })
    });

    $('#ageBetweenFilter').click(function () {
        console.log('ageBetweenFilter Filter executed');
        employeesRef.where('age', '>=', 25).where('age', '<=', 40)
            .onSnapshot((querySnapshot) => {
                LoadTableData(querySnapshot);
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().fName);
                })
            })
    });

    $('#yearsOfExperienceFilter').click(function () {
        console.log('yearsOfExperienceFilter Filter executed');
        // employeesRef.where('gender', '==', 'Female').
        // employeesRef.where('yearsOfExperience', '>=', 5).where('yearsOfExperience', '<=', 10)
        employeesRef.where("gender", "==", "Female")
            .where("yearsOfExperience", ">=", 5).where("yearsOfExperience", "<=", 10)
            .onSnapshot((querySnapshot) => {
                LoadTableData(querySnapshot);
            })
    });

    $('#clearFilter').click(function () {
        // Ordering of tha data & limit its count
        employeesRef.orderBy('lName', 'asc').limit(1).get().then(function (querySnapshot) {
            LoadTableData(querySnapshot);
        });
    });

    $("#searchEmployee").change(function () {
        console.log('You entered: ', $(this).val());
        var searchValue = $(this).val();
        employeesRef.where('fName', '==', searchValue)
        .onSnapshot( (querySnapshot) => LoadTableData(querySnapshot));
    });
});

// Event listener to execute on any change in the db
db.collection('employees').onSnapshot((snapshot) =>
    LoadTableData(snapshot)
);

// Event listener with teh type of change
db.collection('employees').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
            console.log('added');
        }
        if (change.type === 'modified') {
            console.log('modified');
        }
        if (change.type === 'removed') {
            console.log('removed');
        }
    })
});


function LoadTableData(querySnapshot) {
    var tableRow = '';
    querySnapshot.forEach(function (doc) {
        var document = doc.data();
        tableRow += '<tr>';
        tableRow += '<td class="fname">' + document.fName + '</td>';
        tableRow += '<td class="lname">' + document.lName + '</td>';
        tableRow += '<td class="email">' + document.email + '</td>';
        tableRow += '<td class="age">' + document.age + '</td>';
        tableRow += '<td class="gender">' + document.gender + '</td>';
        tableRow += '<td class="yearsofexperience">' + document.yearsOfExperience + '</td>';
        tableRow += '<td class="isfulltime">' + document.isFullTime + '</td>';
        tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>'
        tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'
        tableRow += '</tr>';
    });
    $('tbody.tbodyData').html(tableRow);
}