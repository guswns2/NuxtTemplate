# TypeScript

## 기본 타입

### tuple

배열과 비슷하지만 길이와 각 위치의 타입 고정

```typescript
let response: [number, string] = [200, '성공'];
```

### unknown

any보다 안전한 버전 - 사용 전에 타입 체크 필요

```typescript
let value: unknown = 'hello';

// value.toUpperCase(); // 오류! 타입 체크 필요
if (typeof value === 'string') {
  value.toUpperCase(); // OK
}
```

### void

변환값 없는 함수에 사용

### never

절대 발생하지 않는 값의 타입. 함수가 정상적으로 끝나지 않거나, 절대 도달할 수 없는 코드 표현 시 사용

```typescript
// 1. 항상 에러를 던지는 함수
function throwError(message: string): never {
  throw new Error(message);
}

// void와의 차이
function logError(message: string): void {
  console.log(message);
  // 반환값이 없지만 함수는 정상 종료됨
}

// 2. 무한 루프
function infiniteLoop(): never {
  while (true) {}
}

// 3. 타입 가드에서 모든 경우를 처리했음을 보장
// 나중에 Shape에 새로운 타입을 추가했을 때 컴파일 에러가 발생해서 빠뜨린 케이스 찾을 수 있음
type Shape = 'circle' | 'square' | 'triangle';

function getArea(shape: Shape) {
  switch (shape) {
    case 'circle':
      return Math.PI * 10 * 10;
    case 'square':
      return 10 * 10;
    case 'triangle':
      return (10 * 10) / 2;
    default:
      // 여기 도달하면 안 되는 코드
      const exhaustiveCheck: never = shape;
      throw new Error(`처리되지 않은 shape: ${shape}`);
  }
}

// 4. 유니온 타입에서 불가능한 경우 제거
type A = string | number;
type B = string | boolean;

// A와 B 둘 다 만족하면서 string이 아닌 타입은?
type OnlyInBoth = A & B; // string

// string과 number를 제외하면?
type Excluded = Exclude<A, string>; // number
type NeverType = Exclude<string, string>; // never (아무것도 남지 않음)

// 5. 도달할 수 없는 코드
function processValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toFixed(2);
  }

  // 여기는 절대 도달할 수 없음
  // value의 타입은 여기서 never
  value; // type: never
}
```

### 리터럴 타입

특정 값만 허용

```typescript
let direction: 'left' | 'right' | 'up' | 'down';
direction = 'left'; // OK
// direction = "center"; // 오류!

let status: 200 | 404 | 500 = 200;
```

## 타입 선언, 추론, 단언

타입 선언: 개발자가 명시적으로 타입 지정. 안정성 높음

타입 추론: 타입스크립트가 자동으로 타입 파악. 코드 간결성 높음

```typescript
// as 키워드 사용
let value: any = 'hello';
let length = (value as string).length;

// DOM 요소
const input = document.getElementById('myInput') as HTMLInputElement;
input.value = '새 값';

// Non-null assertion (!)
let userName: string | null = getUserName();
console.log(userName!.toUpperCase()); // null이 아님을 단언
```

### 타입 추론에 맡겨도 되는 경우

- 초기값이 명확한 변수
- 간단한 함수의 반환값
- 명백한 문맥이 있는 경우

타입 단언: 개발자가 타입스크립트보다 더 정확히 알고 있을 때 사용

## 인터페이스, 타입

### 인터페이스

객체 구조 정의

- 선택적 속성
- 읽기 전용 속성
- 함수 타입 정의

```typescript
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
```

- 인터페이스 확장

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

const employee: Employee = {
  name: '홍길동',
  age: 25,
  employeeId: 'E001',
  department: '개발팀'
};

// 여러 인터페이스 확장
interface Manager extends Person, Employee {
  team: string[];
}
```

### 타입 별칭

- 기본, 객체 타입
- 유니온 타입(|)
- 인터섹션 타입(&)
- 함수 타입

### 인터페이스 VS 타입 차이점

확장 - 인터페이스는 extends, 타입은 & 사용

병합 - 인터페이스는 선언으로 병합 가능, 타입은 선언으로 병합 불가

유니온 - 인터페이스는 직접 사용 불가, 타입은 사용 가능

```typescript
// Type - 유니온 사용 가능 ✅
type Status = 'loading' | 'success' | 'error';
type ID = string | number;

// Interface - 유니온 직접 사용 불가 ❌
// interface Status = "loading" | "success" | "error";  // 오류!
```

Computed Properties - 인터페이스는 제한적, 타입은 사용 가능

```typescript
// Type - 계산된 속성 사용 가능 ✅
type Keys = 'name' | 'age';
type User = {
  [key in Keys]: string;
};

// Interface - 계산된 속성 제한적
interface User2 {
  [key: string]: string; // 인덱스 시그니처만 가능
}
```

## 유틸리티 타입

### Partial<Type>

모든 속성을 선택 사항으로 설정한 형식을 생성

이 유틸리티는 주어진 형식의 모든 하위 집합을 나타내는 형식을 반환

### Required<Type>

모든 속성을 필수 사항으로 설정한 형식을 생성

Partial Type의 반대

### Record<Keys, Type>

속성 키가 Keys 이고 속성 값이 Type 인 객체 유형을 생성

이 유틸리티는 유형의 속성을 다른 유형에 매핑하는 데 사용

```typescript
type CatName = 'miffy' | 'boris' | 'mordred';

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' }
};

cats.boris;
```

### Pick<Type, Keys>

Keys 문자열 리터럴이나 문자열 리터럴의 합집합과 같은 속성 집합을 선택하여 유형을 구성

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
};

todo;
```

### Omit<Type, Keys>

Type 에서 모든 속성을 선택한 다음 Keys 를 제거하여 형식을 생성

Pick 의 반대
