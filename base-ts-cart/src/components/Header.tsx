import React from 'react'
import Nav from './Nav'

type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1 className="header__title">Shopping Cart</h1>
        <div className="header__price-box">
          <p className="header__price">Total Items: </p>
          <p className="header__price">Total Price: </p>
        </div>
      </div>
        
        
    </header>
  )
  return (
    <div>Header</div>
  )
}

export default Header