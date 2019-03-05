var ins = document.getElementsByClassName('menu-item-instructions');
for( var i = 0; i< ins.length; i++)
{
    ins[i].addEventListener("mouseenter", showSub, false);
    ins[i].addEventListener("mouseleave", hideSub,false)
}
var rep = document.getElementsByClassName('menu-item-reportandgoals');
for( var i = 0; i< rep.length; i++)
{
    rep[i].addEventListener("mouseenter", showSub, false);
    rep[i].addEventListener("mouseleave", hideSub,false)
}
var contacts = document.getElementsByClassName('menu-item-contacts');
for( var i = 0; i< contacts.length; i++)
{
    contacts[i].addEventListener("mouseenter", showSub, false);
    contacts[i].addEventListener("mouseleave", hideSub,false)
}
var instruments = document.getElementsByClassName('menu-item-instruments');
for( var i = 0; i< instruments.length; i++)
{
    instruments[i].addEventListener("mouseenter", showSub, false);
    instruments[i].addEventListener("mouseleave", hideSub,false)
}
var useful = document.getElementsByClassName('menu-item-useful');
for( var i = 0; i< useful.length; i++)
{
    useful[i].addEventListener("mouseenter", showSub, false);
    useful[i].addEventListener("mouseleave", hideSub,false)
}
var mainNavigation = document.querySelector('.main-navigation')
/*элементы ul перечень*/
var instrusctSub = document.querySelector('.sub-menu-instructions')
var reportSub = document.querySelector('.sub-menu-reportandgoals')
var contactsSub = document.querySelector('.sub-menu-conctats')
var instrumentSub = document.querySelector('.sub-menu-instruments')
var usefulSub = document.querySelector('.sub-menu-useful')
function showSub(e) {
    if(this.children.length > 1) {
        this.children[1].style.height = "auto";
        this.children[1].style.overflow = "visible";
        this.children[1].style.opacity = "1";
        this.children[0].style.color = "rgba(30,144,255,0.8)";
        this.children[1].style.backgroundColor = "rgba(30,144,255,0.8)";
       /* if (usefulSub.style.height !== "0px"){
                mainNavigation.style.marginBottom = "68px";
        }
        if (contactsSub.style.height !== "0px"){
            mainNavigation.style.marginBottom = "92px";
        }
        if(instrumentSub.style.height !== "0px") {
            mainNavigation.style.marginBottom = "116px";
        }
        if(reportSub.style.height !== "0px"){
            mainNavigation.style.marginBottom = "164px";
        }
        if(instrusctSub.style.height !== "0px") {
            mainNavigation.style.marginBottom = "188px";
            }
        /*if (usefulSub.onmouseenter = true){
            mainNavigation.style.marginBottom = "52px";*/
    }else{
        return false;
    }
}
function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
       this.children[0].style.color = "rgba(255,255,255,0.9)"
       /*mainNavigation.style.marginBottom = "20px";*/
    } else {
       return false;
    }
}

/*меняем цвет ссылки при наведении на li*/


var install = document.getElementsByClassName('sub-menu-installation');

/* рабочая
for( var i = 0; i< install.length; i++)
{
    install[i].addEventListener("mouseenter", showColor, false);
    install[i].addEventListener("mouseleave", hideColor,false)
}
*/
var subelement = document.getElementsByClassName('sub-element');
for( var i = 0; i< subelement.length; i++)
{
    subelement[i].addEventListener("mouseenter", showColor, false);
    subelement[i].addEventListener("mouseleave", hideColor,false)
}
function showColor(e) {
    if(this.children.length > 0) {
        this.children[0].style.color = "rgba(30,144,255,0.8)";

    }else{
        return false;
    }
}
function hideColor(e) {
    if(this.children.length > 0) {
        this.children[0].style.color = "rgba(255,255,255,0.9)"
    }else{
        return false;
    }
}
/* кнопки для смены фона*/
var cb1 = document.querySelector('.changeBackground1')
    cb1.addEventListener("click", replaceBackground1);
function replaceBackground1(){
    document.body.style.backgroundImage = 'url(img/backblack.png)';
    cb1.style.backgroundColor = "rgba(30,144,255,0.4)"
    cb1.style.color = "rgba(255,255,255,0.4)"
    cb2.style.backgroundColor = "rgba(255,255,255,0.9)"
    cb2.style.color = "rgba(30,144,255,0.4)"
}
var cb2 = document.querySelector('.changeBackground2')
    cb2.addEventListener("click", replaceBackground2);
function replaceBackground2(){
    document.body.style.backgroundImage = 'url(img/backwhite.png)';
    cb2.style.backgroundColor = "rgba(30,144,255,0.4)"
    cb2.style.color = "rgba(255,255,255,0.9)"
    cb1.style.backgroundColor = "rgba(255,255,255,0.9)"
    cb1.style.color = "rgba(30,144,255,0.4)"
}



/*работа с popup*/
var buttonClose = document.querySelector('.popup-close');
var popupQuestion = document.querySelector('.popup-question');
var overlay = document.querySelector('.popup-overlay');
var reportCmik = document.querySelector('.sub-menu-reportcmik')
var buttonPopup = document.querySelector('.btn-popup-open')
var buttonDownload = document.querySelector('.btn-popup-download')
reportCmik.addEventListener("click", popupActivate);
buttonClose.addEventListener("click", popupDeactivate);
buttonPopup.addEventListener("click", popupDeactivate);
buttonDownload.addEventListener("click", popupDeactivate);
function popupActivate(){
    popupQuestion.classList.remove("visually-hidden");
    overlay.classList.remove("visually-hidden");
}
function popupDeactivate(){
    popupQuestion.classList.add("visually-hidden");
    overlay.classList.add("visually-hidden");
}

/*popup instruct id bank*/
var popupInstructionIdbank = document.querySelector('.popup-instructions-idbank')
var instructionIdbank = document.querySelector('.sub-menu-idbank');
var buttonOpenInstructIdbankFill = document.querySelector('.btn-popup-instructions-idbankfill');
var buttonOpenInstuctIdBankPars = document.querySelector('.btn-popup-instructions-idbankparsing');
var buttonOpenInstuctIdBankGuide = document.querySelector('.btn-popup-instructions-idbankguide');
instructionIdbank.addEventListener("click", popupInsturctionIdbankActivate);
buttonOpenInstructIdbankFill.addEventListener("click", popupInsturctionIdbankDeactivate);
buttonOpenInstuctIdBankPars.addEventListener("click", popupInsturctionIdbankDeactivate);
buttonOpenInstuctIdBankGuide.addEventListener("click", popupInsturctionIdbankDeactivate);
document.querySelector('.popup-instructions-idbank  > .popup-close').addEventListener("click", popupInsturctionIdbankDeactivate);
/*popupInstructionIdbank.content.querySelector('.popupClose').addEventListener("click", popupInsturctionIdbankDeactivate);*/
function popupInsturctionIdbankActivate(){
    popupInstructionIdbank.classList.remove("visually-hidden");
    overlay.classList.remove("visually-hidden");
}
function popupInsturctionIdbankDeactivate(){
    popupInstructionIdbank.classList.add("visually-hidden");
    overlay.classList.add("visually-hidden");
}
/*функция по смене шапки*/

var firstPicture = 1;
var lastPicture = 5;
var mainBanner = document.querySelector('.banner');
var buttonMain = document.querySelector('.menu-item-main');
/*function changeBanner(){
/*mainBanner.style.backgroundImage.url = "../calendar/"+randomInteger(firstPicture, lastPicture)+"red.jpg";*/
/*mainBanner.style.backgroundImage = 'url("C:/Users/saveusy2jeff/Desktop/site/calendar/2red.jpg")';*/
/*mainBanner.style.backgroundImage = "url(C:/Users/saveusy2jeff/Desktop/site/calendar/2red.jpg)";
}/*
/*buttonMain.addEventListener("click", changeBanner);*/
/*mainBanner.style.backgroundImage = "url(C:/Users/saveusy2jeff/Desktop/site/calendar/2red.jpg)";*/
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    mainBanner.style.backgroundImage = "url(C:/Users/saveusy2jeff/Desktop/site/calendar/"+rand+"red.jpg)";
  }
  randomInteger(firstPicture, lastPicture)