import NavLeft from "../NavLeft/NavLeft"
import Content from "../Content/Content"
import s from "./PortfolioBlock.module.scss";

export default function PortfolioBlock() {
    return (
        <>
            <div className={s.PortfolioBlock}>
                <div className={s.container}>
                    <NavLeft />
                    <Content />
                </div>
            </div>
        </>
    )
}