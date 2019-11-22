const getParentOfType = (node, type) => {
    const t = type.toUpperCase()
    let currNode = node
    while(currNode.tagName !== t){
        currNode = currNode.parentElement
        if( currNode.tagName === 'BODY'){ return null }
    }
    return currNode

}

const getChildOfType = (node, type) => {
    const t = type.toUpperCase()
    let queue = [node]
    while(currNode.tagName !== t){
        currNode = queue.shift()
        queue = queue.concat(Array.from(currNode.children))
        if( queue.length === 0 ){ return null }
    }
    return currNode
}

const getChildOfClass = (node, type) => {
    let queue = []
    let currNode = node
    while(!currNode.classList.contains(type)){
        queue = queue.concat(Array.from(currNode.children))
        if( queue.length === 0 ){ return null }
        currNode = queue.shift()
    }
    return currNode
}

const getGlyph = id => {
    const article = document.getElementById(id)
    return getChildOfClass(article, 'like-glyph')
}