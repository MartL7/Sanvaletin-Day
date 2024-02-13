export const changeImageSpecial = (index, setImageSpecial, routesImages) => {

    if (index !== 3 && index !== 4) setImageSpecial(routesImages.Home2)

    if (index === 3) {
        setImageSpecial(routesImages.Cr7)

    } else if (index === 4) {
        setImageSpecial(routesImages.Messi)

    } else if (index === 9) {
        setImageSpecial(routesImages.Goku)
    }
}