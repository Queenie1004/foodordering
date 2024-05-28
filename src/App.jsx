import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './components/store/CartContext.jsx';

function App() {
  return (
    <CartContextProvider>
    <div>
      <Header />
    </div>
      <Meals />
    </CartContextProvider>
  
)};

export default App;
