const API_URL = 'https://api.coincap.io/v2/assets';

const append = (data) => {
  const list = document.getElementById('listCrypto');
  const item =  document.createElement('li');
  const price = parseFloat(data.priceUsd);
  item.innerText = `${data.name} (${data.symbol}): ${price.toFixed(2)}`;
  list.appendChild(item);
}


const fetchCrypto = () => {  
  fetch(API_URL)
    .then((response) => response.json())
    .then(data => {
      const dates = data.data;
      const firsts = dates.filter((element) => element.rank < 11);
      firsts.forEach((element) => append(element));
    }) 
    .catch((error) => console.log(error));
};

window.onload = () => fetchCrypto();