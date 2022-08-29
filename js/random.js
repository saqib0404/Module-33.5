const loadRandom = () => {
    fetch('https://randomuser.me/api/?gender=male')
        .then(res => res.json())
        .then(data => displayRandom(data.results[0]))
}
const displayRandom = (user) => {
    const userContainer =document.getElementById('user-container');
    console.log(user)
    const userDiv = document.createElement('div');
    userDiv.classList.add('card')
    userDiv.innerHTML=`
    <img src="${user.picture.large}" class="card-img-top" alt="...">
    <div class="card-body">
        <h3>${user.name.first}</h3>
        <p class="card-text">
            <strong>City: </strong>${user.location.city}<br>
            <strong>Country: </strong>${user.location.country}<br>
            <strong>State: </strong>${user.location.state}<br>
        </p>
    </div>
    `
    userContainer.appendChild(userDiv)
}
loadRandom();