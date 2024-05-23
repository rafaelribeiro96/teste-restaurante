const products = [
  // Comida
  { id: 1, name: 'Comida 1', price: 12.50, image: '/images/comida1.jpg', category: 'Comida', stock: '10' },
  { id: 2, name: 'Comida 2', price: 13.00, image: '/images/comida2.jpg', category: 'Comida', stock: '10' },
  { id: 3, name: 'Comida 3', price: 14.00, image: '/images/comida3.jpg', category: 'Comida', stock: '10' },
  { id: 4, name: 'Comida 4', price: 15.00, image: '/images/comida4.jpg', category: 'Comida', stock: '0' },
  { id: 5, name: 'Comida 5', price: 16.00, image: '/images/comida5.jpg', category: 'Comida', stock: '10' },
  { id: 6, name: 'Comida 6', price: 17.00, image: '/images/comida6.jpg', category: 'Comida', stock: '10' },
  { id: 7, name: 'Comida 7', price: 18.00, image: '/images/comida7.webp', category: 'Comida', stock: '10' },
  { id: 8, name: 'Comida 8', price: 19.00, image: '/images/comida8.webp', category: 'Comida', stock: '10' },
  { id: 9, name: 'Comida 9', price: 20.00, image: '/images/comida9.webp', category: 'Comida', stock: '10' },
  { id: 10, name: 'Comida 10', price: 21.00, image: '/images/comida10.jpg', category: 'Comida', stock: '10' },
  { id: 11, name: 'Comida 11', price: 22.00, image: '/images/comida11.jpg', category: 'Comida', stock: '10' },
  { id: 12, name: 'Comida 12', price: 23.00, image: '/images/comida12.jpg', category: 'Comida', stock: '10' },
  { id: 13, name: 'Comida 13', price: 24.00, image: '/images/comida13.jpg', category: 'Comida', stock: '10' },
  { id: 14, name: 'Comida 14', price: 25.00, image: '/images/comida14.jpg', category: 'Comida', stock: '10' },
  { id: 15, name: 'Comida 15', price: 26.00, image: '/images/comida15.jpg', category: 'Comida', stock: '10' },
  { id: 16, name: 'Comida 16', price: 27.00, image: '/images/comida16.jpg', category: 'Comida', stock: '0' },
  { id: 17, name: 'Comida 17', price: 28.00, image: '/images/comida17.jpg', category: 'Comida', stock: '10' },
  { id: 18, name: 'Comida 18', price: 29.00, image: '/images/comida18.webp', category: 'Comida', stock: '10' },
  { id: 19, name: 'Comida 19', price: 30.00, image: '/images/comida19.jpg', category: 'Comida', stock: '10' },
  { id: 20, name: 'Comida 20', price: 31.00, image: '/images/comida20.webp', category: 'Comida', stock: '10' },
  { id: 21, name: 'Comida 21', price: 32.00, image: '/images/comida21.jpg', category: 'Comida', stock: '10' },
  { id: 22, name: 'Comida 22', price: 33.00, image: '/images/comida22.jpg', category: 'Comida', stock: '10' },
  { id: 23, name: 'Comida 23', price: 34.00, image: '/images/comida23.webp', category: 'Comida', stock: '0' },
  { id: 24, name: 'Comida 24', price: 35.00, image: '/images/comida24.jpg', category: 'Comida', stock: '10' },
  { id: 25, name: 'Comida 25', price: 36.00, image: '/images/comida25.webp', category: 'Comida', stock: '10' },
  { id: 26, name: 'Comida 26', price: 37.00, image: '/images/comida26.jpg', category: 'Comida', stock: '10' },

  // Doce
  { id: 27, name: 'Doce 1', price: 5.00, image: '/images/doce1.jpg', category: 'Doce', stock: '10' },
  { id: 28, name: 'Doce 2', price: 5.50, image: '/images/doce2.jpg', category: 'Doce', stock: '10' },
  { id: 29, name: 'Doce 3', price: 6.00, image: '/images/doce3.jpg', category: 'Doce', stock: '0' },
  { id: 30, name: 'Doce 4', price: 6.50, image: '/images/doce4.jpg', category: 'Doce', stock: '10' },
  { id: 31, name: 'Doce 5', price: 7.00, image: '/images/doce5.jpg', category: 'Doce', stock: '10' },
  { id: 32, name: 'Doce 6', price: 7.50, image: '/images/doce6.jpg', category: 'Doce', stock: '10' },

  // Alcoólico
  { id: 33, name: 'Alcoólico 1', price: 10.00, image: '/images/bebida1.webp', category: 'Alcoólico', stock: '10' },
  { id: 34, name: 'Alcoólico 2', price: 12.00, image: '/images/bebida2.jpg', category: 'Alcoólico', stock: '10' },
  { id: 35, name: 'Alcoólico 3', price: 14.00, image: '/images/bebida3.jpg', category: 'Alcoólico', stock: '0' },
  { id: 36, name: 'Alcoólico 4', price: 16.00, image: '/images/bebida4.webp', category: 'Alcoólico', stock: '10' },
  { id: 37, name: 'Alcoólico 5', price: 18.00, image: '/images/bebida5.webp', category: 'Alcoólico', stock: '10' },
  { id: 38, name: 'Alcoólico 6', price: 20.00, image: '/images/bebida6.webp', category: 'Alcoólico', stock: '0' },
  { id: 39, name: 'Alcoólico 7', price: 22.00, image: '/images/bebida7.webp', category: 'Alcoólico', stock: '10' },
  { id: 40, name: 'Alcoólico 8', price: 24.00, image: '/images/bebida8.jpeg', category: 'Alcoólico', stock: '10' },
  { id: 41, name: 'Alcoólico 9', price: 26.00, image: '/images/bebida9.jpg', category: 'Alcoólico', stock: '10' },
  { id: 42, name: 'Alcoólico 10', price: 28.00, image: '/images/bebida10.png', category: 'Alcoólico', stock: '10' },
  { id: 43, name: 'Alcoólico 11', price: 30.00, image: '/images/bebida11.jpg', category: 'Alcoólico', stock: '10' },
  { id: 44, name: 'Alcoólico 12', price: 32.00, image: '/images/bebida12.jpg', category: 'Alcoólico', stock: '10' },
  { id: 45, name: 'Alcoólico 13', price: 34.00, image: '/images/bebida13.webp', category: 'Alcoólico', stock: '10' },
  { id: 46, name: 'Alcoólico 14', price: 36.00, image: '/images/bebida14.jpg', category: 'Alcoólico', stock: '10' },

  // Não Alcoólico
  { id: 47, name: 'Não Alcoólico 1', price: 2.50, image: '/images/refri1.jpg', category: 'Não Alcoólico', stock: '10' },
  { id: 48, name: 'Não Alcoólico 2', price: 3.00, image: '/images/refri2.jpg', category: 'Não Alcoólico', stock: '10' },
  { id: 49, name: 'Não Alcoólico 3', price: 3.50, image: '/images/refri3.webp', category: 'Não Alcoólico', stock: '0' },
  { id: 50, name: 'Não Alcoólico 4', price: 4.00, image: '/images/refri4.webp', category: 'Não Alcoólico', stock: '10' },
  { id: 51, name: 'Não Alcoólico 5', price: 4.50, image: '/images/refri5.png', category: 'Não Alcoólico', stock: '10' },
  { id: 52, name: 'Não Alcoólico 6', price: 5.00, image: '/images/refri6.png', category: 'Não Alcoólico', stock: '0' },
  { id: 53, name: 'Não Alcoólico 7', price: 5.50, image: '/images/refri7.webp', category: 'Não Alcoólico', stock: '10' },
  { id: 54, name: 'Não Alcoólico 8', price: 6.00, image: '/images/refri8.jpg', category: 'Não Alcoólico', stock: '10' },
  { id: 55, name: 'Não Alcoólico 9', price: 6.50, image: '/images/refri9.jpg', category: 'Não Alcoólico', stock: '10' },
];

export default products;
