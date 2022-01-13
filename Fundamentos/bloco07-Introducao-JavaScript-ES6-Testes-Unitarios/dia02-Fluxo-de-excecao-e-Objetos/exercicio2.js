const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const entradas = Object.entries(order);
    const address = entradas[2];
    const endereco = Object.entries(address[1]);
    const rua = endereco[0];
    const number = endereco[1];
    const ap = endereco[2];
    const entradasDasEntradas = Object.entries(entradas[3]);
    const coisas = entradasDasEntradas[1];
    const coisasDasCoisas = Object.entries(coisas[1]);
    const dadosDelivery = coisasDasCoisas[2];
    const acesso = dadosDelivery[1];
    const delivery = Object.entries(acesso);
    const deliveryPerson = delivery[0];
    
     console.log(`Olá ${deliveryPerson[1]}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${rua[1]}, Nº ${number[1]}, AP: ${ap[1]}`);

    //Jeito mais prático de fazer
    //  const customerInfo = (order) => {
    //     const address = 'address';
    //     const deliveryPerson = order.order.delivery.deliveryPerson;
    //     const customerName = order['name'];
    //     const customerPhone = order['phoneNumber'];
    //     const street = order[address].street;
    //     const number = order[address].number;
    //     const apartment = order[address].apartment;
      
    //     console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
    //   }
      
    //   customerInfo(order);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const order2 = {};
    Object.assign(order2, order);
    order2.name = 'Luiz Silva'
    order2.payment.total = 50;
    const pizzas = Object.keys(order2.order.pizza);
    console.log(`Olá ${order2.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order2.order.drinks.coke.type} é R$ ${order2.payment.total},00`);
  }
  
  orderModifier(order);