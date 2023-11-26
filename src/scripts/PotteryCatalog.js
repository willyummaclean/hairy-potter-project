let forSale = []

export const toSellOrNotToSell = (piece) => {
    if (piece.cracked === false) {
        if (piece.weight >= 6) {
            piece.price = 40
        } else {
            piece.price = 20
        }
        forSale.push(piece)
    }
    return piece 
}

export const usePottery = () => {
    return forSale.map((piece) => piece)
}