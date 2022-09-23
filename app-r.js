const counter = (() => {
  let count = 0;

  const $counter = document.querySelector('.counter');

  const render = () => {
    $counter.textContent = count;
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

// [변경사항]
// - 한 번만 사용되는 $plusBtn, $minusBtn 변수는 제거하였음.
// - $counter 변수는 한 번만 사용되지만, render 함수를 호출할 때마다 DOM 요소를 불러오지 않기 위해 $counter 변수에 DOM 요소를 저장함.
// - 화살표 함수를 사용하여 함수를 간결하게 표현하였음.
// - 포괄적인 의미를 가진 변수명 num을 counter로 변경하여 변수가 의미하는 바를 명확하게 표현하였음.
// - 각 버튼의 click 이벤트 발생 시 innerHTML을 갱신하는 부분이 공통되므로 render 함수로 분리함.
// - innerHTML 대신 textContent 프로퍼티를 사용하여 의미를 명확히 표현함.
// - decrease 함수 내에서 num이 0 이하일 때의 불필요한 연산을 삭제함.
// - 한 눈에 연산 및 값 할당의 흐름을 파악하기 어려운 증감 연산자(++, --) 대신 값 할당 연산자 사용. (https://ui.toast.com/fe-guide/ko_ANTI-PATTERN#%EB%8B%A8%ED%95%AD-%EC%A6%9D%EA%B0%90-%EC%97%B0%EC%82%B0%EC%9E%90%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94%EB%8B%A4)
