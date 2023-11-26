let primaryKey = 0

export const makePottery = (shape, weight, height) => {
    primaryKey ++
    return {
        shape: shape,
        weight: weight ,
        height: height,
        id: primaryKey  
    }
    
}
