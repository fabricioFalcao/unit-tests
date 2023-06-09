/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
  const consumption = [];
  const placeOrder = (item) => {
    if (object.food[item] || object.drinks[item]) {
      consumption.push(item);
    }
    return 'Item indisponível';
  };
  return {
    fetchMenu: () => (object),
    consumption,
    order: placeOrder,
    pay: () => {
      let total = 0;
      for (let i = 0; i < consumption.length; i += 1) {
        if (object.food[consumption[i]]) {
          total += object.food[consumption[i]];
        }
        if (object.drinks[consumption[i]]) {
          total += object.drinks[consumption[i]];
        }
      }
      return total * 1.1;
    },
  };
};

const objetoRetornadoCreateMenu = createMenu(
  {
    food: { coxinha: 3.90, sanduiche: 9.90 },
    drinks: { agua: 3.90, cerveja: 6.90 },
  });
objetoRetornadoCreateMenu.order('coxinha')
objetoRetornadoCreateMenu.order('sanduiche')
objetoRetornadoCreateMenu.order('agua')

console.log(objetoRetornadoCreateMenu.fetchMenu());
console.log(objetoRetornadoCreateMenu.consumption);
console.log(objetoRetornadoCreateMenu.pay());

module.exports = createMenu;
