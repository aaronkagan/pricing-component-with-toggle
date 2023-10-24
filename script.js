const toggleSwitch = document.querySelector('.toggle-switch');
const toggleSwitchInner = document.querySelector('.toggle-switch-inner');
const planPricesMonthly = document.querySelectorAll('.price-monthly');
const planPricesAnnually = document.querySelectorAll('.price-annually');
toggleSwitch.addEventListener('click', () => {
  toggleSwitchInner.classList.toggle('left');
  planPricesMonthly.forEach((price) => price.classList.toggle('hidden'));
  planPricesAnnually.forEach((price) => price.classList.toggle('hidden'));
});
