const apiKey = LEADERBOARD_LVL_API_KEY;


fetch( url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));