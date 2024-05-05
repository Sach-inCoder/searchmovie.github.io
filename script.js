import {Anime,movies,Popularlist} from './context.js';
import footerEle from './Component/footer.js';

var animeList=document.querySelector('.animeList');
var swiperWrapper=document.querySelector('.swiper-wrapper');

var searchInput= document.querySelector('[placeholder="Search movie here"]');
var MovienameToSend='';
var gridList=document.querySelector('.grid-list');

const searchBtn=document.querySelector('.searchBtn');
const menuBtn=document.querySelector('.menuBtn');

// Rendering AnimeList
Anime.forEach(element => {
    let card = document.createElement('li');
    const {Poster,title}=element;
    card.innerHTML=`
        <a onclick="getMovieName('${title}')" href="detail.html">
        <img src="${Poster}" class="li-poster" alt="list" loading="lazy">
        <div>
            <div class="movie-title">
                ${title}
            </div>
        </div>
        </a>
    `;
    animeList.append(card);
});


// Rendering PopularList
Popularlist.forEach(element => {
    let slide = document.createElement('div');
    slide.classList.add('swiper-slide')
    const {Poster,title} = element;
    slide.innerHTML=`
    <img src="${Poster}" alt="" loading="lazy">
    <div class="sliderDetails">
        <div class="title" data-swiper-parallax="-200">
            <h1 class="slider-Title">${title}</h1>
        </div>
        <a onclick="getMovieName('${title}')" href="detail.html" class="sliderbtn" data-swiper-parallax="-200" >Watch Now</a>
    </div>
    `;
    swiperWrapper.append(slide);
});


// Rendring All Movies from Movie Array
movies.forEach(element => {
    let card = document.createElement('li');
    const {Poster,title}=element;
    card.innerHTML=`
    <a onclick="getMovieName('${title}')" href="detail.html">
    <img src="${Poster}" class="li-poster" alt="list" loading="lazy">
    <div>
    <div class="movie-title">
    ${title}
    </div>
    </div>
    </a>
    `;
    gridList.append(card);
});

// Serch Model
searchInput.addEventListener('keydown',(e)=>{
    if (e.key=='Enter') {
        window.localStorage.setItem("searchitem",String(searchInput.value));
        window.location="./search.html";
    }
})



searchBtn.addEventListener('click',searchModel);
menuBtn.addEventListener('click',sidebarfun);

function searchModel() {
    const header=document.querySelector('header');

    header.classList.toggle('active');

}

function sidebarfun() {
    const sidebar=document.querySelector('.sidebar');

    sidebar.classList.toggle('active');

}



// SwiperJs
const swiper = new Swiper('.swiper', {
    loop: true,
    speed:1000,
    // effect:'flip',
    pagination: {
        el: '.swiper-pagination',
    },
    parallax: true,
    autoplay: {
        delay: 3000,
    },
    });

// Footer
footerEle();