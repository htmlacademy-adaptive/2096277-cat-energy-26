let sliderThing = document.querySelector('.image-slider');
let thumb = slider.querySelector('.image-slider__button');
let beforeImg = slider.querySelector('.image-slider__image--before');
let afterImg = slider.querySelector('.image-slider__image--after');

    thumb.onmousedown = function(event) {
      event.preventDefault();

      let shiftX = event.clientX - thumb.getBoundingClientRect().left;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      let sliderWidth = sliderThing.getBoundingClientRect().width;


      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        let newPercent = newLeft / sliderWidth * 100;

        thumb.style.left = newLeft + 'px';

        beforeImg.style.clipPath = 'polygon(0 0,' + newPercent + '% 0,' + newPercent + '% 100%, 0 100%)';
        afterImg.style.clipPath = 'polygon(' + newPercent + '% 0, 100% 0, 100% 100%,' + newPercent + '% 100%)';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };
