const products = [
  { name: "Mars rug", price: 100, quantity: 24, image: "image 10.png" },
  { name: "Keyboard sticker", price: 49, quantity: 11, image: "image 22.png" },
  { name: "Smart watch", price: 899, quantity: 4, image: "image 23 (1).png" },
  { name: "Wireless keyboard", price: 350, quantity: 0, image: "image 24.png" },
  { name: "Mouse", price: 359, quantity: 9, image: "image 25.png" },
  { name: "AirPods", price: 499, quantity: 2, image: "image 26.png" },
  { name: "Powerbank", price: 300, quantity: 7, image: "image 27.png" },
  { name: "USB flash drive", price: 250, quantity: 5, image: "image 28.png" },
  { name: "Smartphone", price: 999, quantity: 3, image: "image 29.png" },
  { name: "PlayStation 5", price: 1200, quantity: 1, image: "image 30.png" },
  { name: "Yandex Station", price: 800, quantity: 6, image: "image 31.png" },
  { name: "Planchet Samsung", price: 650, quantity: 4, image: "image 32.png" },
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>🪙 ${product.price} Coins</p>
        <p>${product.quantity} dona mavjud</p>
      </div>
    `;
  });
}

function searchItems() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
}

// Реакция на каждый ввод символа
document.getElementById("searchInput").addEventListener("input", searchItems);

// Загрузка всех продуктов при старте
displayProducts(products);
