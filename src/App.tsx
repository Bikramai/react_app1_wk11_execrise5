import { useState } from "react";

// exercise1
// function App() {
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "Bikram",
  //   },
// });

// const handleClick = () => {
  //   setGame({...game, player: {...game.player, name: 'Amit'}})
  // }



// exerxise2
// function App() {
//   const [pizza, setPizza] = useState({
//     name: 'Apicy Pepperoni',
//     toppings:['Mushroom']
//   });

//   const handleClick = () => {
//     setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
//   };




  // exercise3
function App() {

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product', quantity: 1}
    ]
  });

  const handleClick = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1}: item)})
  };

  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
  };


export default App;