const burger = document?. querySelector('.burger');
const nav = document?. querySelector('.nav');

burger?.addEventListener('click', () => {
   burger?.classList.toggle('burger--active'),
   nav?.classList.toggle('nav--visible')
});


const productBox = document.querySelector('.catalog-product');
console.log(productBox);

const products = JSON.parse(dataProducts);
console.log(products);



const containerProduct = document.createElement('div');
containerProduct.classList.add('container');
console.log(containerProduct);

const productTitle = document.createElement('h3');
productTitle.classList.add('catalog__title');
productTitle.textContent = 'Fetured Items';

const productDescription = document.createElement('p');
productDescription.classList.add('catalog__title');
productDescription.textContent = 'Shop for items based on what we featured in this week';



const productCard = document.createElement('div');
productCard.classList.add('product-card');



const productList = document.createElement('ul');
productList.classList.add('card__list');

products.forEach((element) => {

const productItem = document.createElement('li');
productItem.classList.add('card__item');

const productLink = document.createElement('a');
productList.classList.add('card__link');
productLink.href = '#';

const productPicture = document.createElement('picture');

const productImg = document.createElement('img');
productImg.classList.add('card__img', 'img');
productImg.setAttribute('alt', 'Изображение товара');
productImg.src = element.image;

const cardBlock = document.createElement('div');
cardBlock.classList.add('card-block', 'card');

const cardTitle = document.createElement('h3');
cardTitle.classList.add('card__title');
cardTitle.textContent = element.head;

const cardDescription = document.createElement('p');
cardDescription.classList.add('card__descr');
cardDescription.textContent = element.description;

const cardPrise = document.createElement('span');
cardPrise.textContent = element.price;

const catalogProductBtn = document.createElement('button');
catalogProductBtn.classList.add('catalog-product__btn', 'btn', 'btn-reset');
catalogProductBtn.textContent = 'Browse All Product';




productBox.appendChild(containerProduct);
containerProduct.appendChild(productTitle);
containerProduct.appendChild(productDescription);
containerProduct.appendChild(productCard);
productCard.appendChild(productList);
productList.appendChild(productItem);
productItem.appendChild(productLink);
productLink.appendChild(productPicture);
productPicture.appendChild(productImg);
productItem.appendChild(cardBlock);
cardBlock.appendChild(cardTitle);
cardBlock.appendChild(cardDescription);
cardBlock.appendChild(cardPrise);

productCard.appendChild(catalogProductBtn);
});