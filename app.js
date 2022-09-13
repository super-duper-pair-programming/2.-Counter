const $plusBtn = document.querySelector('.increase');
const $minusBtn = document.querySelector('.decrease');
const $count = document.querySelector('.counter');

const counter = (function () {
  let num = 0;

  return {
    increase() {
      return ++num;
    },
    decrease() {
      num = --num > 0 ? num : 0;
      return num;
    },
  };
})();

$plusBtn.addEventListener('click', () => {
  $count.innerHTML = counter.increase();
});

$minusBtn.addEventListener('click', () => {
  $count.innerHTML = counter.decrease();
});
