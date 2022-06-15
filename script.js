const container = document.querySelector('#container');
const popup = document.querySelector('#popup');
const popupHeader = document.querySelector('#popup-header');

moveElement(container, popup, popupHeader);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    function createTouchScript() {
        let touchScript = document.createElement('script');
        touchScript.setAttribute('id', 'touch-script');
        touchScript.setAttribute('type', 'text/javascript');
        touchScript.setAttribute('src', './move-element-touch.js');
        return touchScript;
    }

    let touchScript = createTouchScript();

    let body = document.querySelector('body');
    let allScripts = document.querySelectorAll('script');
    let mainScript = allScripts[allScripts.length - 1];
    body.insertBefore(touchScript, mainScript);

    touchScript.addEventListener('load', function () {
        moveElementTouch(container, popup, popupHeader);
    })
}