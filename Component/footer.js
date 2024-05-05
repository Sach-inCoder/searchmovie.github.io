function footerEle() {
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.className += 'd-flex flex-wrap justify-content-between align-items-center py-3 my-8 border-top container';

    footer.innerHTML=`
    <div class="col-md-4 d-flex align-items-center">
        <a href="/index.html" class="mb-3 me-2 text-decoration-none lh-1">
            play<sapn style="color: #f00;">This</sapn>
        </a>
        <span class="mb-3 mb-md-0">© 2024 Sach-IN, OMDB Api</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
            <a href="https://www.instagram.com/sach_0741/" target="_social"><i class="fa-brands fa-instagram"></i></a>
        </li>
        <li class="ms-3">
            <a href="https://www.linkedin.com/in/sachin-thakur-828a94256/" target="_social"><i class="fa-brands fa-linkedin"></i></a>
        </li>
        
        <li class="ms-3">
            <a href="//api.whatsapp.com/send?phone=918368754429&text=Hii." target="_social"><i class="fa-brands fa-whatsapp"></i></a>
        </li>
        <li class="ms-3">
            <a href="https://www.youtube.com/@codeBySach-IN/videos" target="_social"><i class="fa-brands fa-youtube"></i></a>
        </li>
    </ul>
    `;
    body.append(footer)
}

export default footerEle;