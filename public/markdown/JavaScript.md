# JavaScript

## Single Thread, 병렬 처리

### async-await

JavaScript는 Single Thread로 동기식으로 처리되지만, setTImeout이나 async 함수 같이 비동기 함수가 실행될 때는 비동기식으로 처리되도록 구성되어있음(Call Stack, Web API, Task Que, Event Loop)

따라서 함수 내에 axios 호출(async-await)이 포함되어있으면 async-await를 걸어두지 않으면 비동기로 처리되기 때문에 응답을 제대로 활용할 수 없음

<br>

https://velog.io/@jaehyeon23/Javascript-%EC%99%80-%EC%8A%A4%EB%A0%88%EB%93%9CThread

### Promise

어떤 작업의 중간상태를 나타내는 오브젝트

미래에 어떤 종류의 결과가 반환됨을 promise (약속) 해주는 오브젝트

작업이 완료되어 결과를 반환해주는 정확한 시간을 보장해주지는 않지만, 사용할 수 있는 결과를 반환했을 때 프로그래머의 의도대로 다음 코드를 진행 시키거나, 에러가 발생했을 때 그 에러를 처리

## 반복문

### for ... in 문

객체의 속성을 반복

<br>

```javascript
let car = {
  make: 'Ford',
  model: 'Mustang'
};

function dump_props(obj, obj_name) {
  var result = '';
  for (var i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
  }
  result += '<hr>';
  return result;
}

dump_props(car, 'car');
// car.make = Ford;
// car.model = Mustang;
```

### for ... of 문

배열의 요소를 반복

```javascript
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}
```

### 배열의 반복 함수 foreach()

```javascript
const sparseArray = ['first', 'second', , 'fourth'];

sparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log('sparseArray[2] is undefined'); // true
}

const nonsparseArray = ['first', 'second', undefined, 'fourth'];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// undefined
// fourth
```

## 함수

### 함수 정의

<strong>함수 선언</strong>

```javascript
function square(number) {
  return number * number;
}
```

<br>

<strong>함수 표현식</strong>
함수 표현식은 함수를 다른 함수의 매개변수로 전달할 때 편리

```javascript
// 익명 함수
const square = function (number) {
  return number * number;
};

// 이름이 있는 함수
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
```

### 인수(arguments) 객체

```javascript
function myConcat(separator) {
  // 리스트를 초기화한다
  let result = '';
  // arguments를 이용하여 반복한다
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

// "red, orange, blue, "를 반환합니다.
myConcat(', ', 'red', 'orange', 'blue');
```

## 나머지 매개변수

```javascript
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

### 화살표 함수

화살표 함수 표현은 함수 표현식에 비해 짧은 문법

```javascript
var a = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

var a2 = a.map(function (s) {
  return s.length;
});
console.log(a2); // logs [8, 6, 7, 9]

// 화살표 함수 사용
var a3 = a.map((s) => s.length);
console.log(a3); // logs [8, 6, 7, 9]
```

<br>

화살표 함수는 언제나 익명

화살표 함수에는 this가 존재하지 않음. this 키워드로 접근하면, 자신이 아닌 외부에서 값을 가져옴

화살표 함수엔 arguments 가 없음. 대신에 나머지 매개변수(...args) 사용

화살표 함수는 객체를 생성하는 용도로 사용할 수 없다.

화살표 함수를 addEventListener 함수의 콜백 함수로 사용할 때도 주의 필요

addEventListener 함수는 이벤트가 발생할 때마다 콜백 함수를 호출하는데, 이때 콜백 함수의 this는 이벤트가 발생한 요소를 가리킴

하지만 화살표 함수를 콜백 함수로 사용하면, this는 외부 렉시컬 환경의 this를 가리키므로, 원하는 결과가 나오지 않을 수 있음

```javascript
<button>Click me!</button>

<script>
let button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this); // <button> 요소
});

button.addEventListener('click', () => {
  console.log(this); // window 객체
});
</script>
```

<br>

출처: https://inpa.tistory.com/entry/JS-📚-자바스크립트-화살표-함수-정리 [Inpa Dev 👨‍💻:티스토리]

## 객체 대입, 복사

변수를 ref, reactive로 초기화 했어도, a1에 a2를 대입하면 참조가 끊어져 a2의 값이 변해도 a1의 값은 화면에서 바로 변하지 않음
