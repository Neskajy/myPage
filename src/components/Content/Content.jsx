import s from "./Content.module.scss";
import { idActiveCategoryContext } from "../../contexts/context";
import { useContext } from "react";
import {Props} from "../../Props.jsx";

export default function Content() {
    const {idActiveCategory, setIdActiveCategory} = useContext(idActiveCategoryContext);
    return (
        <>
            {
                Props.map((elem, index) => {
                    if (idActiveCategory === elem.id) {
                        return  <div key={elem.id} className={`${s.Content} ${elem.isAnimatable ? s.animate : ""}`}>{elem.content}</div>
                    }
                })
            }
        </>
    )
}