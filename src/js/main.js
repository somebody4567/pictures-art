'use strict';

import modal from './modules/modals';
import slider from './modules/slider';
import accordion from './modules/accordion';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import loadContent from './modules/loadContent';
import getStyleBlocks from './modules/getStyleBlocks';
import calc from './modules/calc';
import portfolio from './modules/portfolio';
import showPicture from './modules/showPicture';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import dragAndDrop from './modules/dragAndDrop';

window.addEventListener('DOMContentLoaded', () => {
    let state = {};
    modal();
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    accordion('.accordion-heading');
    forms(state);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

    const inp = document.querySelector('.input-wrapper > [name="name"]');
    let pos = 0;
    inp.addEventListener('input', () => {
        pos++;
        inp.value = 'Макс';
        inp.setSelectionRange(pos, pos);
    });
    /* loadContent('.button-styles', '.styles-2'); */
    getStyleBlocks('.button-styles', '.styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    portfolio('.portfolio-menu li', '.portfolio-block');
    showPicture();
    burger('.burger', '.burger-menu');
    scrolling('.pageup');
    dragAndDrop();
});