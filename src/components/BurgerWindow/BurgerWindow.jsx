import { useContext } from "react";
import s from "./BurgerWindow.module.scss";
import { BurgerContext } from "../../contexts/context";

export default function BurgerWindow() {
    const {isActiveBurger, setIsActiveBurger} = useContext(BurgerContext);

    return (
        <>
            <div className={`${s.BurgerWindow} ${isActiveBurger ? s.active : ""}`}>
                <div className={s.container}>
                    <ul>
                        <li>
                            Пока что пусто
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}