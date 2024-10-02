const navLinkEls = document.querySelectorAll('.highlight');
navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});


// let section = document.querySelectorAll(section);
// let section = document.querySelectorAll(Header nav_link a);
// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height =sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             nav_link.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector ('header nav_link a
//                     [href*= + id + '|]' )
//             });
//         };
//     });
        
// };
