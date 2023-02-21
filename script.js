let html = document.querySelector('html')
html.setAttribute('lang', 'en')

let title  = document.createElement('title');
title.innerHTML = 'HW 8';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8')
document.head.appendChild(metaUtf8);

let metaEquiv = document.createElement('meta');
metaEquiv.setAttribute('http-equiv', 'X-UA-Compatible')
metaEquiv.setAttribute('content', 'IE=edge')
document.head.appendChild(metaEquiv);

let metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(metaViewport);

let style = document.createElement('style');
document.head.appendChild(style);

let script = document.querySelector('script')
style.after(script);

let divSite = document.createElement('div');
divSite.setAttribute('class', 'site');
document.body.appendChild(divSite)


let divContainer = document.createElement('div');
divContainer.classList.add('container');



// header block

let header = document.createElement('header')
header.classList.add('header');
divSite.appendChild(header);
header.appendChild(divContainer);

let headerWraper = document.createElement('div');
headerWraper.classList.add('header__container-wraper')
divContainer.appendChild(headerWraper);

let h1 = document.createElement('h1')
h1.innerHTML = 'Choose Your Option'
headerWraper.appendChild(h1);

let headerText = document.createElement('span');
headerText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
headerWraper.appendChild(headerText)

// main block

let main = document.createElement('main');
divSite.appendChild(main);

let section = document.createElement('section');
section.classList.add('content');
main.appendChild(section);

let divContainerSection = document.createElement('div');
divContainerSection.classList.add('container');
section.appendChild(divContainerSection)

let contentWraper = document.createElement('div');
contentWraper.classList.add('content__container-wraper');

divContainerSection.appendChild(contentWraper);


let block1 = document.createElement('div')
block1.classList.add('block1');
contentWraper.appendChild(block1);

let block1Span = document.createElement('span');
block1Span.innerHTML = 'FREELANCER';
block1.appendChild(block1Span);

let block1Title = document.createElement('h2');
block1Title.innerHTML = 'Initially designed to ';
block1.appendChild(block1Title);

let block1P = document.createElement('p')
block1P.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
block1.appendChild(block1P);

let block1Button = document.createElement('button')
block1Button.innerHTML = "START HERE"
block1.appendChild(block1Button);

let block2 = document.createElement('div')
block2 = block1.cloneNode(true)
contentWraper.appendChild(block2);



style.innerHTML = `
    *{
        padding: 0;
        margin: 0;
    }
    .site{
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
    }
    .container{
        width: 800px;
        margin: 0 auto;
    }
    .header{
        padding-top: 122px;
        margin-bottom: 55px
    }
    .header__container-wraper{
        display: flex;
        flex-direction: column;
    }
    .header__container-wraper h1{
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        display: flex;
        align-items: center;
        color: #212121;
        margin: 0 auto;
    }
    .header__container-wraper span{
        padding-top: 10px;
        font-family: 'OpenSans';
        font-size: 14px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #9FA3A7;
        margin: 0 auto;
    }
    .content__container-wraper{
        display: flex;
        aligin-items: center;
    }
    .block1{
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .block1 span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #9FA3A7;
        padding-top: 81px;
        margin-bottom: 19px;
    }
    .block1 h2{
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
        width: 210px;
        text-align: center;
        margin-bottom: 25px;
    }
    .block1 p{
        display: block;
        width: 210px;
        font-family: 'OpenSans';
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
        text-align: center;
        margin-bottom: 52px;
    }
    .block1 button{
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 15px;
        margin-bottom: 82px;
    }
    .block1:hover{
        background: #8F75BE;
    }
    .block1:hover span{
        color: #FFC80A;
    }
    .block1:hover h2{
        color: #FFFFFF;
    }
    .block1:hover p{
        color: #FFFFFF;
    }
    .block1:hover button{
        background: #8F75BE;
        color: #FFFFFF;
    }
`