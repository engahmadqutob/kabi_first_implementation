//aside  list items -> when clickk change li background , svg stroke color
const asideListItems = document.querySelectorAll('.aside .unorder-List ul li');

asideListItems.forEach((li) => {
    li.addEventListener('click', function (e) {
        e.preventDefault();

        asideListItems.forEach((item) => {
            item.classList.remove('active'); //remove active class from all listitems
            const svg = item.querySelector('svg'); //reset stroke color 
            if (svg) {
                svg.setAttribute('stroke', '#847E7E');
            }
        });
        this.classList.add('active');
        const clickedSVG = this.querySelector('svg');
        if (clickedSVG) {
            clickedSVG.setAttribute('stroke', '#063799'); // active stroke color
        }
    });
});

// supside 
const supasideListItems = document.querySelectorAll('.sup-aside ul li');
supasideListItems.forEach((li) => {
    li.addEventListener('click', function (e) {
        e.preventDefault();

        supasideListItems.forEach((item) => {
            item.classList.remove('active'); //remove active class from all li
        });
        this.classList.add('active');
    });
});



// aside and supside toogle and button 

 const menuLogo = document.querySelector('.menu-logo');
const aside = document.querySelector('.aside');
const supaside = document.querySelector('.sup-aside');

function toggleMobileMenu() {
    if (aside) aside.classList.toggle('show');
    if (supaside) supaside.classList.toggle('show');
}

                                 
if (menuLogo) {
    menuLogo.addEventListener('click', toggleMobileMenu);
}



 