
import gallery_items from "./gallery_items.js"
let index = 0;


const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.lightbox')
const lightboxButton = document.querySelector('.lightbox__button');
const ligthboxImage = document.querySelector('.lightbox__image');


//////////////////////////////////////////////////////////////////////////////////////////////////
// Создание эелемнтов. Функции
//////////////////////////////////////////////////////////////////////////////////////////////////
const createImg = elem => {

    const imgRef = document.createElement('img');
    imgRef.classList.add('gallery__image');
    imgRef.src = elem.preview;
    imgRef.setAttribute('data-source', elem.original);
    imgRef.setAttribute('data-index', index)
    imgRef.alt = elem.description;
    index += 1;
    return imgRef;
}

const createLink = elem => {
    const linkRef = document.createElement('a');
    linkRef.classList.add('gallery__link');
    linkRef.href = elem.original;
    linkRef.append(createImg(elem));
    return linkRef;
}

const createList = elem => {
    const liRef = document.createElement('li');
    liRef.classList.add('gallery__item');
    liRef.append(createLink(elem));
    return liRef;
}
const listsEl = gallery_items.map(img => createList(img));
galleryRef.append(...listsEl)
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
galleryRef.addEventListener('click', onImgClick);
function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    const getLink = event.target.dataset.source;
    // const getIndex = event.target.dataset.index;
    ligthboxImage.src = getLink;
    lightboxRef.classList.add('is-open');
    document.addEventListener('keydown', closeImgRef)

};




lightboxButton.addEventListener('click', onButtonClick);
function onButtonClick(event) {
    if (!event.target.nodeName === 'BUTTON') return;
    ligthboxImage.src = '';
    lightboxRef.classList.remove('is-open')

};

const closeImgRef = event => {
    console.log(event);
    if (event.code === 'Escape') {
        lightboxRef.classList.remove('is-open');
        document.removeEventListener('keydown', closeImgRef);
        return;
    }

}
// const slideImgRef = event => {



//     if (event.code === 'ArrowRight') {
//         const podmena = event.target.href;
//         const f = event.target.firstChild
//         const ind = Number(f.dataset.index);

//         const indexT = document.querySelector(`[data-index="${ind + 1}"]`)
//         const nextPageRef = indexT.dataset.source;
//         ligthboxImage.src = nextPageRef;

//         return ligthboxImage.src;
//     }


// }





