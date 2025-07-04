import s from "./NavLeft.module.scss";
import { Props } from "../../Props.jsx";
import { idActiveCategoryContext } from "../../contexts/context";
import { useContext } from "react";
import user_IMG from "../../assets/raster/image.png";

export default function NavLeft() {
    const {idActiveCategory, setIdActiveCategory} = useContext(idActiveCategoryContext);
    function clickOnCategory(integer) {
        setIdActiveCategory(integer);
    }
    return (
        <>
            <div className={s.NavLeft}>
                <div className={s.userInfo}>
                    <div className={s.info}>
                        <div className={s.avatar}><img src={user_IMG} alt="" /></div>
                        <div className={s.text}>
                            <h2>Nikolay</h2>
                            <h4>Front-end developer</h4>
                        </div>
                    </div>
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            {
                                Props.map(iteraton => {
                                    return (
                                        <li key={iteraton.id} className={`${s.li} ${idActiveCategory === iteraton.id ? s.active : ""}`} onClick={() => clickOnCategory(iteraton.id)}>
                                            <div className={s.line}></div>
                                            <p>{iteraton.text}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}