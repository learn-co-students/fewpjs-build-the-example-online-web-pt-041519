const isLiked = glyph => {
    return glyph.innerText === FULL_HEART
}

const domToggleLike = (glyph) => {
    if(isLiked(glyph)){
        domRemoveLike(glyph)
    }else{
        domAddLike(glyph)
    }
}

const domRemoveLike = (glyph) => {
    glyph.innerText = EMPTY_HEART
    glyph.classList.remove('activated-heart')
}

const domAddLike = (glyph) => {
    glyph.innerText = FULL_HEART
    glyph.classList.add('activated-heart')
}

const displayError = () => {
    const errModal = document.querySelector('#modal')
    errModal.classList.remove('hidden')
    setTimeout(() => errModal.classList.add('hidden'), 5000)
}