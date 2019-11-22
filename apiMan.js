

const addLike = async (id) => {
    updateLike({id, like: true})
}

const removeLike = async (id) => {
    updateLike({id, like: false})
}

const updateLike = async (data) => {
    try{
        const res = await mimicServerCall(data, {
            method: 'PATCH',
            headers: {
                'Accept': 'applicaiton/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(res)
    }catch(err){
        const glyph = getGlyph(data.id)
        domToggleLike(glyph)
        displayError()
    }
}