const counter = (() => {
  let count = 0;

  const render = () => {
    document.querySelector('.counter').textContent = count;
  };

  return {
    increase() {
      count += 1;
      render();
    },
    decrease() {
      if (count > 0) count -= 1;
      render();
    },
  };
})();

document.querySelector('.increase').addEventListener('click', counter.increase);
document.querySelector('.decrease').addEventListener('click', counter.decrease);
