function goTo(page){
    let scrollTo = document.getElementById(page);
    scrollTo.scrollIntoView();
}

// Animated pages when in view
let welcomePage = document.getElementById('welcomePage');
let aboutMePage = document.getElementById('aboutMePage');
let experiencePage = document.getElementById('experiencePage');
let projectPage = document.getElementById('projectPage');


let welcomePageHeight = welcomePage.clientHeight;
let aboutMePageHeight = aboutMePage.clientHeight;
let experiencePageHeight = experiencePage.clientHeight;
let projectPageHeight = projectPage.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', () =>{
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY || window.pageYOffset;

    let scrollPosition = scrollY + windowHeight;

    // for dots
    let welcomePosition1 = welcomePage.getBoundingClientRect().top + scrollY +welcomePageHeight/3;
    let aboutMePosition1 = aboutMePage.getBoundingClientRect().top + scrollY +aboutMePageHeight/3;
    let experiencePosition1 = experiencePage.getBoundingClientRect().top + scrollY +experiencePageHeight/3;
    let projectPosition1 = projectPage.getBoundingClientRect().top + scrollY +experiencePageHeight/3;

    // for animation of page
    let aboutMePosition2 = aboutMePage.getBoundingClientRect().top + scrollY ;
    let experiencePosition2 = experiencePage.getBoundingClientRect().top + scrollY ;
    let projectPosition2 = projectPage.getBoundingClientRect().top + scrollY ;


    //Dot
    let aboutDot = document.getElementById('aboutMeDot');
    let experienceDot = document.getElementById('experienceDot');
    let projectDot = document.getElementById('projectDot');

    // Dot Animation
    if(welcomePosition1 < scrollPosition && scrollPosition < aboutMePosition1){
       aboutDot.style.opacity = 0;
        experienceDot.style.opacity = 0;
        projectDot.style.opacity = 0;

    }
    else if( aboutMePosition1 < scrollPosition && scrollPosition< experiencePosition1 ){
        aboutDot.style.opacity = 1;
        experienceDot.style.opacity = 0;
        projectDot.style.opacity = 0;

    }   
    else if(experiencePosition1 < scrollPosition && scrollPosition < projectPosition1 ){
        aboutDot.style.opacity = 0;
        experienceDot.style.opacity = 1;
        projectDot.style.opacity = 0;

    } else if( projectPosition1 < scrollPosition){
        aboutDot.style.opacity = 0;

        experienceDot.style.opacity = 0;
        projectDot.style.opacity = 1;
    }

    // Page animation
    if( aboutMePosition2< scrollPosition && scrollPosition< experiencePosition2){
        animateAboutMe();
        // experiencePage.classList.remove('fadeIn');

     }   
     else if(experiencePosition2 < scrollPosition){
        // removeAnimateAboutMe();
        // experiencePage.classList.add('fadeIn');

     }
  
});

function animateAboutMe(){
   document.getElementById('aboutMeTitle').classList.add('aboutMeFadeInLeft');
   let aboutMeParagraph = document.getElementById('aboutMeParagraph').children;

   for(let i=0; i<aboutMeParagraph.length; i++){
       console.log(aboutMeParagraph[i]);
       aboutMeParagraph[i].classList.add('aboutMeParagraphAnimation');
   }

   document.getElementById('college').classList.add('educationAnimation');
   document.getElementById('collegeYear').classList.add('educationAnimation');
   document.getElementById('degree').classList.add('educationAnimation');
   document.getElementById('uvaImg').classList.add('aboutMeFadeInLeft');

}


