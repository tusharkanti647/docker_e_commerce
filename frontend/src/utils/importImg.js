import Pasteimage from '../asset/signIn/Pasteimage.png'
import rightArrowHeader from '../asset/home/right-arrow.png'
import ticketPercent from '../asset/home/ticketPercent.png'
import CartButton from '../asset/home/CartButton.png'
import Logo from '../asset/home/Logo.png'
import search02 from '../asset/home/search02.png'
import userCircle from '../asset/home/userCircle.png'
import youtube from '../asset/home/youtube.png'
import facbook from '../asset/home/facbook.png'
import instagram from '../asset/home/instagram.png'
import LogoWhite from '../asset/home/LogoWhite.png'
import hart from '../asset/productCard/hart.png'
import PasteImage2 from '../asset/productCard/PasteImage2.png'
import StarFill from '../asset/productCard/star.png'

export const importImg = (imgName) => {
    switch (imgName) {
        case "Pasteimage":
            return Pasteimage
        case "rightArrowHeader":
            return rightArrowHeader
        case "ticketPercent":
            return ticketPercent
        case "CartButton":
            return CartButton
        case "Logo":
            return Logo
        case "LogoWhite":
            return LogoWhite
        case "search02":
            return search02
        case "userCircle":
            return userCircle
        case "facbook":
            return facbook
        case "instagram":
            return instagram
        case "youtube":
            return youtube
        case "hart":
            return hart
        case "PasteImage2":
            return PasteImage2
        case "StarFill":
            return StarFill
    }
}