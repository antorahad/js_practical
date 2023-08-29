document.getElementById('fetch-user').addEventListener('click', function(){
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)

    .then(res => res.json())

    .then(user => getUserData(user))

    function getUserData(userData){

        const userTable = document.getElementById('user-table');

        for(user of userData){

            const userData = document.createElement('tr');

            userData.innerHTML =  `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            `;

            userTable.appendChild(userData);

        }
    }
});


