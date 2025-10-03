# TypeScript

## Utility Types

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
