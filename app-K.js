const 증감연산기 = (() => {
  let 현재값 = 0;

  const 화면에_그려 = () => {
    document.querySelector('.counter').textContent = 현재값;
  };

  return {
    증가시켜() {
      현재값 += 1;
      화면에_그려();
    },
    감소시켜() {
      if (현재값 > 0) 현재값 -= 1;
      화면에_그려();
    },
  };
})();

document.querySelector('.increase').addEventListener('click', 증감연산기.증가시켜);
document.querySelector('.decrease').addEventListener('click', 증감연산기.감소시켜);
