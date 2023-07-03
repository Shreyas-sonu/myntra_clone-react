

export const DEALSOFTHEDAY = "DEALSOFTHEDAY";
export const BESTOFMYNTRA = "BESTOFMYNTRA";
export const TOPPICKS = "TOPPICKS"
export const CATEGORIESTOBAG = "CATEGORIESTOBAG"
export const GIFTINGCARDS = "GIFTINGCARDS"
export const DEALSOFLATESTARIVAL = "DEALSOFLATESTARIVAL"
export const NEWINTOPBRANDS = "NEWINTOPBRANDS"
export const TOPNININFLUNCEREXCLUSIVESTYLES = "TOPNININFLUNCEREXCLUSIVESTYLES"
export const getdealsOflaatestArival = (payload) => ({
    type: DEALSOFLATESTARIVAL,
    payload
})
export const getNewTopBrands = (payload) => ({
    type: NEWINTOPBRANDS,
    payload
})
export const getTopInInfluncerExclusive = (payload) => ({
    type: TOPNININFLUNCEREXCLUSIVESTYLES,
    payload
})
export const getDealsOftheData = (payload) => ({
    type: DEALSOFTHEDAY,
    payload
})

export const getBestOfMyntra = (payload) => ({
    type: BESTOFMYNTRA,
    payload
})

export const getTopPicksData = (payload) => ({
    type: TOPPICKS,
    payload
})

export const getCategoriesData = (payload) => ({
    type: CATEGORIESTOBAG,
    payload
})
export const getGiftingCards = (payload) => ({
    type: GIFTINGCARDS,
    payload
})