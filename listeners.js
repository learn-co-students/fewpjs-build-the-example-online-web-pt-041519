const handleLike = async (e) => {
    if(e.target.classList.contains('like-glyph')){
        const glyph = e.target
        const id = getParentOfType(glyph, 'article').id
        if( glyph.innerText === EMPTY_HEART){
            domAddLike(glyph)
            addLike(id)
        }else{
            domRemoveLike(glyph)
            removeLike(id)
        }   
    }
}