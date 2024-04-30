$.ajax({
    url: 'https://dragonball-api.com/api/characters/',
    type: 'GET',
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log('Error: ', error);
    }
});

$.ajax({
    type: "method",
    url: "url",    
    success: function (response) {
        
    }
});

// fetch('https://pokeapi.co/api/v2/', {
//     method: 'GET',
// })
// .then(response => {
//     if (response.ok) {
//         return response.json();
//     } else {
//         throw new Error('Network response was not ok.');
//     }
// })
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));
