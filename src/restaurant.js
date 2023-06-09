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

module.exports = createMenu;
