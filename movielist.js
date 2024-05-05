import footerEle from './Component/footer.js';


const searchBtn=document.querySelector('.searchBtn');
const menuBtn=document.querySelector('.menuBtn');

searchBtn.addEventListener('click',searchModel);
menuBtn.addEventListener('click',sidebarfun);

var searchInput= document.querySelector('[placeholder="Search movie here"]');

searchInput.addEventListener('keydown',(e)=>{
    if (e.key=='Enter') {
        // console.log(searchInput.value);
        window.localStorage.setItem("searchitem",String(searchInput.value));
        window.location="./search.html";
    }
})


function searchModel() {
    const header=document.querySelector('header');

    header.classList.toggle('active');

}

function sidebarfun() {
    const sidebar=document.querySelector('.sidebar');

    sidebar.classList.toggle('active');

}

// to get popularMovie name
const apiKey = '6dc4617f';
const apiUrl = 'https://www.omdbapi.com/';

const movieDetails=document.querySelector('.movie-details');
const backdropImage=document.querySelector('.backdrop-image');


var movieTitle = window.localStorage.getItem('movieName');

movieDetails.innerHTML=`<div class="loader"></div>`;

 fetch(`${apiUrl}?apikey=${apiKey}&t=${movieTitle}`)
   .then(response => response.json())
   .then(data => {
    const {Poster,Title, imdbRating, imdbVotes,Rated,Runtime,Genre,Plot,Actors,Director,Language}=data;

    backdropImage.style.background=`url(${Poster})`
    backdropImage.style.backgroundRepeat=`no-repea`
    backdropImage.style.backgroundSize=`cover`
    backdropImage.style.backgroundPosition=`center`
    
    
    movieDetails.innerHTML=
    `

    <figure class="movie-poster">
        <img src="${Poster}" width="100%" alt="${Title}" class="img-cover">
    </figure>
    <div class="detail-box">
        <div class="detail-content">
            <h1 class="heading">${Title}</h1>
            <div class="meta-list">
                <div class="meta-item">
                    <b>Rating</b>
                    <span>${imdbRating} out of ${imdbVotes}</span>
                </div>
                <div class="mete-item"><b>Language -</b> ${Language}</div>
                <div class="mete-item"><b>Duration -</b> ${Runtime}</div>
                <div class="meta-item badge"><b>Rated -</b> ${Rated}</div>
            </div>
            <p class="genre"><b>Genre -</b> ${Genre}</p>
            <p>
                <b>Plot -</b> ${Plot}
            </p>
            <p>
                <h6>Staring</h6>
                ${Actors}
            </p>
            <p>
                <h6>Directed by</h6>
                ${Director}
            </p>
        </div>
    </div>

    `

     // Handle the movie data here
   })
   .catch(error => console.error('Error:', error));


// Footer
footerEle();