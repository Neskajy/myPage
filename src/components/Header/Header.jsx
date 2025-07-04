import s from "./Header.module.scss";
import BurgerButton from "../BurgerButton/BurgerButton";
import { useContext } from "react";
import { BurgerContext } from "../../contexts/context";
import tg from "../../assets/vector/socials/tg.svg";
import github from "../../assets/vector/socials/github.svg";
import mail from "../../assets/vector/socials/mail.svg";



export default function Header() {
    const {isActiveBurger, setIsActiveBurger} = useContext(BurgerContext);
    function clickOnBurgerButton() {
        setIsActiveBurger(!isActiveBurger);
    }
    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.burgerBlock} onClick={clickOnBurgerButton}>
                        <BurgerButton />
                        <h3>Portfolio</h3>
                    </div>
                    <ul className={s.social}>
                        <li className={s.socialElement}><a href="https://t.me/N3side" target="_blank"><img src={tg} alt="" /></a></li>
                        <li className={s.socialElement}><a href="https://github.com/Neskajy" target="_blank"><img src={github} alt="" /></a></li>
                        <li className={s.socialElement}><a href="mailto:besonovskiyyy@gmail.com" target="_blank"><img src={mail} alt="" /></a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}