$(document).ready(function() {
            $('#onlyMalesFilter').click(function(){
                console.log('onlyMalesFilter Filter executed');
            });

            $('#fullTimeFilter').click(function(){
                console.log('fullTimeFilter Filter executed');
            });

            $('#olderThenFilter').click(function(){
                console.log('olderThenFilter Filter executed');
            });

            $('#ageBetweenFilter').click(function(){
                console.log('ageBetweenFilter Filter executed');
            });

            $('#yearsOfExperienceFilter').click(function(){
                console.log('yearsOfExperienceFilter Filter executed');
            });

            $('#clearFilter').click(function(){
                console.log('clearFilter Filter executed');
            });
});

// Event listener to execute on any change in the db
db.collection('employees').onSnapshot( (snapshot) => console.log('Something changed'));

// Event listener with teh type of change
db.collection('employees').onSnapshot( (snapshot) => {
    snapshot.docChanges.forEach( (change) => {
        if(change.type === 'added') {
            console.log('added');
        }
        if(change.type === 'modified') {
            console.log('modified');
        }
        if(change.type === 'removed') {
            console.log('removed');
        }
    })
});