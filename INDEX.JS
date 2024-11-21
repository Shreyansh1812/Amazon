let wishlistCount = 0;
let cartCount = 0;

const wishlistCountElement = document.getElementById('wishlist-count');
const cartCountElement = document.getElementById('cart-count');

document.querySelectorAll('.wishlist-btn').forEach(button => {
  button.addEventListener('click', () => {
    wishlistCount++;
    wishlistCountElement.textContent = wishlistCount;
  });
});

document.querySelectorAll('.cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
  });
});