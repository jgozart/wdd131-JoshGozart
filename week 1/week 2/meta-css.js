let selectElem = document.getElementById('webdevlist');

const htmlHeading = document.querySelector('#topics h2:nth-of-type(1)');
const cssHeading = document.querySelector('#topics h2:nth-of-type(2)');
const jsHeading = document.querySelector('#topics h2:nth-of-type(3)');

selectElem.addEventListener('change', function () {
    let codeValue = selectElem.value;

    htmlHeading.style.color = 'black';
    cssHeading.style.color = 'black';
    jsHeading.style.color = 'black';

    if (codeValue === 'html') {
        htmlHeading.style.color = 'red';
    } 
    else if (codeValue === 'css') {
        cssHeading.style.color = 'blue';
    } 
    else if (codeValue === 'js') {
        jsHeading.style.color = 'green';
    }
});
