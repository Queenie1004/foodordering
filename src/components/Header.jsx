import { useContext  } from 'react';
import logoImg from '../assets/logo2.jpg';

import Button from './UI/Button.jsx';
import CartContext from './store/CartContext.jsx';
import UserProgressContext from './store/UserProgressContext.jsx';


export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item)=>{
        return totalNumberOfItems + item.quantity;
    }, 0)
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='logoImg' />
                <h2> Queen Kitchen</h2>
            </div>
          <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
          </nav>
        </header>

    );
}