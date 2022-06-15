function moveElementTouch(container, popup, popupHeader) {

    let touched = false;
    let touchShiftX, touchShiftY;

    container.style.touchAction = 'none';

    popupHeader.style.cursor = 'move';

    popupHeader.addEventListener('touchstart', function (event) {
        touched = true;
        touchShiftX = event.touches[0].clientX - popup.getBoundingClientRect().left;
        touchShiftY = event.touches[0].clientY - popup.getBoundingClientRect().top;
    }, { passive: true })

    document.addEventListener('touchend', function () {
        touched = false;
    }, { passive: true })

    document.addEventListener('touchmove', function (event) {

        const boundingClientRect = container.getBoundingClientRect();

        if (touched) {

            let newX = event.touches[0].clientX - touchShiftX;
            let newY = event.touches[0].clientY - touchShiftY;

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
    }, { passive: true })
}
