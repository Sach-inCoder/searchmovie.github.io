import footerEle from './Component/footer.js';


var searchData = window.localStorage.getItem('searchitem');

var searchdisplay =document.querySelector('.search-display')

var nextpage =document.querySelector('.nextpage');
var prvpage =document.querySelector('.prvpage');
var currentPage=1;

var searcheditem =document.querySelector('.searcheditem')
searcheditem.innerHTML=`<h1>Results for:- <i>${searchData}</i></h1>`

var searchInput= document.querySelector('[placeholder="Search movie here"]');

searchInput.addEventListener('keydown',(e)=>{
    if (e.key=='Enter') {
      searcheditem.innerHTML=`<h1>Results for:- <i>${searchInput.value}</i></h1>`
      searchfunction(searchInput.value,searchdisplay,currentPage);
    }
})



searchfunction(searchData,searchdisplay,currentPage);

nextpage.addEventListener('click',()=>{
   currentPage++;
   searchfunction(searchData,searchdisplay,currentPage);
})

prvpage.addEventListener('click',()=>{
   if (currentPage <=1) {
      
      return null
   }
   else{
      currentPage--;
      searchfunction(searchData,searchdisplay,currentPage);
   }
})

function searchfunction(a,b,c){
      if (!a=='') {
         b.innerHTML=`<div class="loader"></div>`;
         const searchdata= a;
         fetch(`http://www.omdbapi.com/?apikey=6dc4617f&s=${searchdata}&page=${c}`)
            .then((response) => response.json())
            .then((data) => {
               b.innerHTML=`<div class="loader" hidden></div>`;
               data.Search.forEach(item=>{
                  const {Poster,Title,Type,Year}=item;
                  const card=document.createElement('div');
                  card.innerHTML=`
                     <a  onclick="getMovieName('${Title}')" href="detail.html">
                     <img src="${Poster}" style="--d:0;">
                     <p>
                     <h6>${Title}</h6>
                     </p>
                     <p>
                        Type: ${Type}<br>
                        Year: ${Year}
                     </p>
                     </a>
                  `;
                  b.append(card);
               })
            })
            .catch(error=>b.innerHTML='Not found');
      }
      else
      {
         searchdisplay.innerHTML=`Nothing here`;  
      }
   }

const searchBtn=document.querySelector('.searchBtn');
const menuBtn=document.querySelector('.menuBtn');

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

footerEle();