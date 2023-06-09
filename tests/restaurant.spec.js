const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {

  it('1.1 - Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu.', () => {
    expect((createMenu())).toHaveProperty('fetchMenu');
  });

  test('1.2 - Verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.', () => {
    expect(typeof createMenu().fetchMenu).toBe('function');
  });

  test('2 - Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.', () => {
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toStrictEqual(expect.objectContaining({
      food: expect.anything(),
      drinks: expect.anything(),
    }),)
  });

  test('3 - Verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().', () => {
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toStrictEqual({ food: {}, drinks: {} });
  });

  test('5 - Verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio', () => {
    expect(createMenu({ food: {}, drinks: {} }).consumption).toStrictEqual([]);
  })

  test('7.1 - Verifica se o retorno da funcao da chave "Order" para um intem inexistente e a mensagem de erro', () => {
    const objetoRetornadoCreateMenu = createMenu(
      {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 }
      });
    expect(objetoRetornadoCreateMenu.order('picanha')).toBe('Item indisponível');
  })

  test('7.2 - Verifica se o retorno da funcao da chave "Order" para um intem inexistente nao altera a chave "Consumption"', () => {
    const objetoRetornadoCreateMenu = createMenu(
      {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 }
      });
    objetoRetornadoCreateMenu.order('picanha')

    expect(objetoRetornadoCreateMenu.consumption).not.toContain('picanha');
  })

  test('7.3 - Verifica se o retorno da funcao da chave "Order" para um intem existente acrescenta o item na chave "Consumption"', () => {
    const objetoRetornadoCreateMenu = createMenu(
      {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 }
      });
    objetoRetornadoCreateMenu.order('coxinha')

    expect(objetoRetornadoCreateMenu.consumption).toContain('coxinha');
  })

  test('9 - Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.', () => {
    const objetoRetornadoCreateMenu = createMenu(
      {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 }
      });
    objetoRetornadoCreateMenu.order('coxinha')
    objetoRetornadoCreateMenu.order('sanduiche')
    objetoRetornadoCreateMenu.order('agua')
    const test = ['coxinha', 'sanduiche', 'agua']
    expect(objetoRetornadoCreateMenu.consumption).toEqual(test);
  })

  test('10 - Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    const objetoRetornadoCreateMenu = createMenu(
      {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 }
      });
    objetoRetornadoCreateMenu.order('coxinha')
    objetoRetornadoCreateMenu.order('coxinha')
    objetoRetornadoCreateMenu.order('coxinha')
    const test = ['coxinha', 'coxinha', 'coxinha']
    expect(objetoRetornadoCreateMenu.consumption).toEqual(test);
  })

  test('11 - Escreva um teste que verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. A propriedade pay tem como valor uma função.', () => {
    const objetoRetornadoCreateMenu = createMenu(
      {
        food: { coxinha: 3.90, sanduiche: 9.90 },
        drinks: { agua: 3.90, cerveja: 6.90 }
      });
    objetoRetornadoCreateMenu.order('coxinha')
    objetoRetornadoCreateMenu.order('sanduiche')
    objetoRetornadoCreateMenu.order('agua')
    expect(objetoRetornadoCreateMenu.pay()).toBeCloseTo(19.47);
  })
});
