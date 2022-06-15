function moveElement(container, popup, popupHeader) {

    let isDown = false;
    let shiftX, shiftY;

    popupHeader.style.cursor = 'move';

    popupHeader.addEventListener('mousedown', function (event) {
        isDown = true;
        shiftX = event.clientX - popup.getBoundingClientRect().left;
        shiftY = event.clientY - popup.getBoundingClientRect().top;
    }, true);

    document.addEventListener('mouseup', function () {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function (event) {
        event.preventDefault();

        const boundingClientRect = container.getBoundingClientRect();

        if (isDown) {
            let newX = event.clientX - shiftX;
            let newY = event.clientY - shiftY;

            let newBottom = newY + popup.offsetHeight;

            if (newX < boundingClientRect.left) {
                newX = boundingClientRect.left;
            }

            if (newX > boundingClientRect.right - popup.clientWidth) {
                newX = boundingClientRect.right - popup.clientWidth;
            }

            if (newY < boundingClientRect.top) {
                newY = Math.max(newY, boundingClientRect.top);
            }

            if (newBottom > boundingClientRect.bottom) {
                newY = Math.min(newY, boundingClientRect.bottom - popup.offsetHeight);
            }

            popup.style.left = newX + 'px';
            popup.style.top = newY + 'px';
        }
    }, true);
}
