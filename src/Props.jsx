import s from "./components/Content/Content.module.scss";
import VRNAS_IMG from "./assets/raster/projectsPreview/VRNAS.webp";
import kremlevskiy_IMG from "./assets/raster/projectsPreview/kremlevskiy.webp";
import game_IMG from "./assets/raster/projectsPreview/game.webp";
import stack_IMG from "./assets/raster/stack.png";
import first from "./assets/raster/achievements/1.webp";


export const Props = [
    {
        id: 0,
        text: "about",
        content: (
            <p>
                Разработчик интерфейса и дизайнер UI/UX 
                <br/><br/> 
                <span>Цель: </span>Стать профессиональным UI/UX-дизайнером и фронтенд-разработчиком
                <br/><br/> 
                В настоящее время учусь в <span>МЦК-КТИТС</span>, где специализируюсь на современных <span>веб-технологиях</span> и дизайне интерфейсов. Специализируюсь на создании адаптивных, удобных для пользователя веб-приложений с использованием React, JavaScript, HTML и SCSS. 
                <br/><br/> 
                В свободное время люблю <span>создавать</span> чистые, интуитивно понятные дизайны и превращать их в функциональные, высококачественные интерфейсы. Также имею опыт работы с такими инструментами, как Figma, Photoshop и Git для совместной разработки и контроля версий.
            </p>
        ),
        isAnimatable: true
    },
    {
        id: 1,
        text: "experience",
        content: "",
        isAnimatable: true
    },
    {
        id: 2,
        text: "projects",
        content: (
            <ul>
                <li>
                    <a href="https://neskajy.github.io/VRNAS/" target="_blank">
                        <img src={VRNAS_IMG} alt="" target="_blank"/>
                        <div className={s.text}>
                            <h4>VRNAS</h4>
                            <p>Сайт посвящен виртуальной реальности. Учебный проект, дизайн взят с сайта верстаем онлайн. Использованы: HTML, SCSS JS</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://kremlevskiy.netlify.app/" target="_blank">
                        <img src={kremlevskiy_IMG} alt="" />
                        <div className={s.text}>
                            <h4>Ресторан кремлевский</h4>
                            <p>Сайт посвящен ресторану в Москве (его не существует :)). Это учебный проект. Использовано: React</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.figma.com/design/vcu0nMSnnZnYfqa3tLez7r/Untitled?node-id=0-1&p=f&t=TTqYRc7VEQ596jA8-0" target="_blank">
                        <img src={game_IMG} alt=""/>
                        <div className={s.text}>
                            <h4>Миллионер</h4>
                            <p>Дизайн игры кто хочет стать миллионером для mini-apps в телеграмме. Использовано: Figma</p>
                        </div>
                    </a>
                </li>
            </ul>
        ),
        isAnimatable: true
    },
    {
        id: 3,
        text: "stack",
        content: (<img src={stack_IMG} />),
        isAnimatable: true
    },
    {
        id: 4,
        text: "education",
        content: (<p>Пока что только основное общее, учусь в МЦК-КТИТС</p>),
        isAnimatable: false
    },
    {
        id: 5,
        text: "additionaly",
        content: (
            <ul className={s.achievements}>
                <li>
                    <img src={first} alt="" />
                </li>
            </ul>
        ),
        isAnimatable: true
    },
];