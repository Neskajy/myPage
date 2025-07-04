import './App.scss';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import { BurgerContext } from './contexts/context'; 
import { idActiveCategoryContext } from './contexts/context';
import { useContext, useState } from 'react';

export default function App() {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const [idActiveCategory, setIdActiveCategory] = useState(0);
  return (
    <>
      <idActiveCategoryContext.Provider value={{idActiveCategory, setIdActiveCategory}}>
        <BurgerContext.Provider value={{isActiveBurger, setIsActiveBurger}}>
          <PortfolioPage />
        </BurgerContext.Provider>
      </idActiveCategoryContext.Provider>
    </>
  )
}