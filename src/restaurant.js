export const greeting = "Hello, World";


import oceanBgOne from "./images/ocean-one.jpg";
import woodyLogo from "./images/woodylogo.svg";
import quesadillaImg from "./images/quesadilla.jpg";
export let transitionCount = 0;
import homeOneImg from "./images/post-storm.jpg";

export let activePage = "default";
const body = document.getElementById('body');
const container = document.getElementById('container');
const mainContentCon = document.createElement('div');
    mainContentCon.classList.add('main-container');
    mainContentCon.style.zIndex = "990";
    

let appetizers = [];

function app(name, price, description, image, index, transitionCount) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.index = index;
    this.transitionCount = transitionCount;
}


const quesa = new app("Quesadillas", "$4.89", "flour tortilla, four cheese blend and chicken", quesadillaImg);
const burger = new app('Burger', '$5.99', "It's a damned burger", quesadillaImg);
const taco = new app('Tacos', '$4.99', "Delicious Tacos", quesadillaImg);
appetizers.push(quesa);
appetizers.push(burger);
appetizers.push(taco);

    // Build Background Layout
export function buildBackground() {
    const mainBgOne = document.createElement('div');
    const mainBgTwo = document.createElement('div');
    mainBgOne.classList.add('bg-one');
    mainBgOne.style.zIndex="-999";
    mainBgTwo.classList.add('bg-two');
    mainBgTwo.style.zIndex="-998";
    body.appendChild(mainBgOne);
    body.appendChild(mainBgTwo);
}

    // Build Top Nav Bar
export function buildTopBar() {
    const topBarCon = document.createElement('div');
    const topBarLogoCon = document.createElement('div');
    const topBarLogo = document.createElement('img');
    const topBarLogoText = document.createElement('div');
    const topBarListCon = document.createElement('ul');
    const topBarNavOne = document.createElement('li');
    const topBarNavTwo = document.createElement('li');
    const topBarNavThree = document.createElement('li');
        topBarCon.classList.add('top-bar-con');
        topBarCon.style.zIndex = "999";
        topBarLogoCon.classList.add('top-bar-logo-con');
        topBarLogo.classList.add('top-bar-logo');
        topBarLogo.src = woodyLogo;
        topBarLogoText.classList.add('top-bar-logo-text');
        topBarLogoText.textContent = "Woodys Bar and Grill";
        topBarListCon.classList.add('top-bar-list-con');
        topBarNavOne.textContent = "Home";
        topBarNavTwo.textContent = "Menu";
        topBarNavTwo.setAttribute('id', 'menuBtn');
        topBarNavThree.textContent = "About Us";
        topBarNavThree.addEventListener('click', () => {activePage = "about"; buildMainBody();});
        topBarNavTwo.addEventListener('click', () => {activePage = "menu"; buildMainBody();});
        topBarNavOne.addEventListener('click', () => {activePage = "home"; buildMainBody();});
            topBarLogoCon.appendChild(topBarLogo);
            topBarCon.appendChild(topBarLogoCon);
            container.appendChild(topBarCon);
            topBarCon.appendChild(topBarListCon);
            topBarListCon.appendChild(topBarNavOne);
            topBarListCon.appendChild(topBarNavTwo);
            topBarListCon.appendChild(topBarNavThree);
            
}






export function buildMainBody() {
    
    if (activePage == "default") {
        homePage();
    } else if (activePage == "menu") {
        menuPage();
    } else if (activePage == "home") {
        homePage();
    } else if (activePage == "about") {
        aboutPage();
    }
     else { 
        container.innerHTML = '';
        buildTopBar();
     };
    
    
    

}


function aboutPage() {
    const mainContentCon = document.createElement('div');
    container.innerHTML = '';
    buildTopBar();
    mainContentCon.classList.add('main-container');
    mainContentCon.style.zIndex = "990";
    container.appendChild(mainContentCon); 
}



function homePage() {
//    const mainContentCon = document.createElement('div');
//    mainContentCon.classList.add('main-container');
//    mainContentCon.style.zIndex = "990";
    container.innerHTML = '';
    mainContentCon.innerHTML = '';
    buildTopBar();
    
    container.appendChild(mainContentCon); 

    const homeOne = document.createElement('div');
        homeOne.classList.add('home-one-img');
    const homeTwoCon = document.createElement('div');
        homeTwoCon.classList.add('home-two-con');
    const homeTwoLeft = document.createElement('div');
        homeTwoLeft.classList.add('home-two-left');
        homeTwoLeft.style.zIndex = "10";
    const homeTwoRight = document.createElement('div');
        homeTwoRight.classList.add('home-two-right');
        homeTwoRight.style.zIndex = "0";
    const homeTwoLeftTitle = document.createElement('div');
        homeTwoLeftTitle.classList.add('home-two-left-title');
        
    const homeTwoLeftDesc = document.createElement('div');
        homeTwoLeftDesc.classList.add('home-two-left-desc');
        homeTwoLeftDesc.textContent = "Right up the street from the ferry. Great food, Great Service, Great Times and live music starts at noon every day";
    const homeTwoLeftButton = document.createElement('div');
        homeTwoLeftButton.classList.add('home-two-left-button');
        homeTwoLeftButton.textContent = "Visit (NYI)";
    const homeFollow = document.createElement('div');
        homeFollow.classList.add('home-follow');
        homeFollow.textContent = "Follow Us!";

    const homeSocialCon = document.createElement('div');
        homeSocialCon.classList.add('home-social-con');
        homeSocialCon.style.zIndex = "100";
    const homeSocialConShadow = document.createElement('div');
        homeSocialConShadow.classList.add('home-social-con-shadow');
    const homeSocialOne = document.createElement('div');
    const homeSocialTwo = document.createElement('div');
    const homeSocialThree = document.createElement('div');
    const homeSocialFour = document.createElement('div');
    const homeSocialFive = document.createElement('div');
    const homeSocialSix = document.createElement('div');
    const homeSocialSeven = document.createElement('div');
    const homeSocialEight = document.createElement('div');
        homeSocialOne.classList.add('home-social-one');
        homeSocialTwo.classList.add('home-social-two');
        homeSocialThree.classList.add('home-social-three');
        homeSocialFour.classList.add('home-social-four');
        homeSocialFive.classList.add('home-social-five');
        homeSocialSix.classList.add('home-social-six');
        homeSocialSeven.classList.add('home-social-seven');
        homeSocialEight.classList.add('home-social-eight');

    homeSocialCon.appendChild(homeSocialOne);
    homeSocialCon.appendChild(homeSocialTwo);
    homeSocialCon.appendChild(homeSocialThree);
    homeSocialCon.appendChild(homeSocialFour);
    homeSocialCon.appendChild(homeSocialFive);
    homeSocialCon.appendChild(homeSocialSix);
    homeSocialCon.appendChild(homeSocialSeven);
    homeSocialCon.appendChild(homeSocialEight);
//    homeSocialCon.appendChild(homeSocialConShadow);


        
        homeTwoLeft.appendChild(homeTwoLeftTitle);
        homeTwoLeft.appendChild(homeTwoLeftDesc);
        homeTwoLeft.appendChild(homeTwoLeftButton);
        homeTwoCon.appendChild(homeTwoLeft);
        homeTwoCon.appendChild(homeTwoRight);






        
        mainContentCon.appendChild(homeOne);
        mainContentCon.appendChild(homeTwoCon);
        mainContentCon.appendChild(homeFollow);
        mainContentCon.appendChild(homeSocialCon);





} 

function menuPage() {
//    const mainContentCon = document.createElement('div');
    container.innerHTML = '';
    mainContentCon.innerHTML = '';
    buildTopBar();
//    mainContentCon.classList.add('main-container');
//    mainContentCon.style.zIndex = "990";
//    container.appendChild(mainContentCon); 
    container.appendChild(mainContentCon);

    
    appetizers.forEach((app) => {
 
        const menuCard = document.createElement('div');
        const menuName = document.createElement('div');
        const menuDescription = document.createElement('div');
        const menuImg = document.createElement('img');
        const menuText = document.createElement('div');
            menuCard.setAttribute('id', app.name);       
            menuCard.classList.add('menu-card');        
            menuName.classList.add('menu-name');
            menuName.textContent = app.name + ' - ' + app.price;        
            menuDescription.classList.add('menu-desc');
            menuDescription.textContent = app.description;        
            menuImg.classList.add('menu-img');
            menuImg.setAttribute('src', app.image);        
            menuText.classList.add('menu-text-con');                        
            menuCard.appendChild(menuImg);
            menuText.appendChild(menuName);
            menuText.appendChild(menuDescription);
            menuCard.appendChild(menuText);
            mainContentCon.appendChild(menuCard);   
        
            
            


            menuCard.addEventListener('click', () => {                

                if (menuCard.classList.contains('card-hover')) {
                    menuCard.classList.remove('card-hover')
                } else {menuCard.classList.add('card-hover')}
                

            });  
            

            
            
    
            
            
            
        
            
    });

    
}
    

