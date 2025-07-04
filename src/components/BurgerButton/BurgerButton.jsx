import { useContext } from "react";
import s from "./BurgerButton.module.scss";
import { BurgerContext } from "../../contexts/context";

export default function BurgerButton() {
    const {isActiveBurger, setIsActiveBurger} = useContext(BurgerContext);
    return (
        <>
            <div className={`${s.BurgerButton} ${isActiveBurger ? s.active : ""}`}>
                <div className={s.inner}>
                    <div className={    s.top}></div>
                    <div className={s.center}></div>
                    <div className={s.bottom}></div>
                </div>
            </div>
        </>
    )
}