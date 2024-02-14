import { useState } from "react"
import confetti from 'canvas-confetti'
import { routesImages } from "../utils/images"
import { options } from "../utils/images"
import { changeImageSpecial } from "../logic/changeImageSpecial"

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    const [image, setImage] = useState(routesImages.Home)
    const [imageSpecial, setImageSpecial] = useState(routesImages.Home2)

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage(routesImages.isNot)
        setTextP(options.at(index))
        console.log({index})

        changeImageSpecial(index, setImageSpecial, routesImages)

        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage(routesImages.isYes)
        setTextP('Gracias por aceptar!<3')
        confetti()
    }

    return { handleButtonNo, handleButtonYes, textP, image, imageSpecial }
}
