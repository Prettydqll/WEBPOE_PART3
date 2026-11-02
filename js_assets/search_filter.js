// Search Filter - Dynamic Content 2.2
function searchProducts() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.querySelectorAll('.product-card, .service-card');
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}
document.addEventListener('DOMContentLoaded', function(){
  const search = document.getElementById('searchInput');
  if(search) search.addEventListener('keyup', searchProducts);
});