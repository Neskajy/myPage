import BurgerWindow from "../../components/BurgerWindow/BurgerWindow.jsx";
import Header from "../../components/Header/Header";
import PortfolioBlock from "../../components/PortfolioBlock/PortfolioBlock.jsx";
import s from "./PortfolioPage.module.scss";
import background from "../../assets/raster/background.png";

export default function PortfolioPage() {
    return (
        <>
            <div className={s.background}>
                <img src={background} alt="" />
            </div>
            <Header />
            <BurgerWindow />
            <PortfolioBlock />
        </>
    )
}