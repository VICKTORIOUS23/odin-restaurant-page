export const greeting = "Hello, World";
const body = document.getElementById('body');
const container = document.getElementById('container');

import oceanBgOne from "./images/ocean-one.jpg";
import woodyLogo from "./images/woodylogo.svg";

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
        topBarNavThree.textContent = "About Us";
            topBarLogoCon.appendChild(topBarLogo);
            topBarCon.appendChild(topBarLogoCon);
            container.appendChild(topBarCon);
            topBarCon.appendChild(topBarListCon);
            topBarListCon.appendChild(topBarNavOne);
            topBarListCon.appendChild(topBarNavTwo);
            topBarListCon.appendChild(topBarNavThree);
}


export function buildMainBody() {
const mainContentCon = document.createElement('div');
    mainContentCon.classList.add('main-container');
    mainContentCon.style.zIndex = "990";
        container.appendChild(mainContentCon);











}