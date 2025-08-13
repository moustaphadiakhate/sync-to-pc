### 📝 Cheat Sheet TypeScript Niveau Expert

#### 🔍 **Types Avancés**
```typescript
// Mapped Types
type Readonly<T> = { readonly [P in keyof T]: T[P] };

// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;

// Template Literal Types
type EventName<T extends string> = `${T}Changed`;
type Concat<S1 extends string, S2 extends string> = `${S1}_${S2}`;

// Utility Types
type PartialDeep<T> = { [K in keyof T]?: PartialDeep<T[K]> };
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
```

#### 🔄 **Génériques Complexes**
```typescript
// Contraintes multiples
type Merge<T extends object, U extends object> = T & Omit<U, keyof T>;

// Inférence conditionnelle
type FirstParam<T> = T extends (arg: infer P, ...rest: any[]) => any ? P : never;

// Génériques récursifs
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
```

#### 🎭 **Manipulation de Types**
```typescript
// Filtrage de propriétés
type OnlyFunctions<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

// Type Branding (typage nominal)
type Brand<K, T> = K & { __brand: T };
type UserId = Brand<string, "UserId">;
```

#### ⚙️ **Fonctions Avancées**
```typescript
// Surcharge de fonctions
function parse(data: string): object;
function parse(data: Buffer): object;
function parse(data: string | Buffer): object { /*...*/ }

// Curryfication typée
const add = (a: number): ((b: number) => number) => (b) => a + b;
```

#### 🧪 **Conditions et Contraintes**
```typescript
// Vérification de type à la compilation
type IsString<T> = T extends string ? true : false;
type X = IsString<"hello">; // true

// Contraintes sur les tuples variadiques
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;
```

#### 🧩 **Patterns Avancés**
```typescript
// Singleton avec génériques
class Singleton<T> {
  private static instance: any;
  static getInstance<T>(): T {
    if (!this.instance) this.instance = new this();
    return this.instance;
  }
}

// Builder Pattern typé
class QueryBuilder<T> {
  where<K extends keyof T>(key: K, value: T[K]): this { /*...*/ return this; }
}
```

#### 🛡️ **Bonnes Pratiques Expertes**
1. **Éviter `any`** :
   ```typescript
   // Préférer unknown avec validation
   function safeParse(data: unknown): Data {
     if (isValid(data)) return data as Data;
     throw new Error("Invalid");
   }
   ```

2. **Type Guards complexes** :
   ```typescript
   function isHttpError(error: unknown): error is { status: number } {
     return typeof error === "object" && error !== null && "status" in error;
   }
   ```

3. **Décorateurs personnalisés** :
   ```typescript
   function Log(target: any, key: string, descriptor: PropertyDescriptor) {
     const original = descriptor.value;
     descriptor.value = function (...args: any[]) {
       console.log(`Calling ${key} with`, args);
       return original.apply(this, args);
     };
   }
   ```

#### ⚠️ **Piègles Courants**
```typescript
// Covariance/Contravariance
type Setter<T> = (value: T) => void;
let setString: Setter<string> = (s) => {};
let setAny: Setter<any> = setString; // ❌ Erreur de sécurité

// Types conditionnels distributifs
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArr = ToArray<string | number>; // string[] | number[]
```

#### 📦 **Config TSConfig Critique**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "target": "ESNext",
    "moduleResolution": "NodeNext",
    "module": "ESNext",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

#### 🚀 **Performances**
- Utilisez `interface` pour les types objets (meilleures performances)
- Évitez les types conditionnels profonds (> 3 niveaux)
- Préférez `type` pour les unions complexes

---

### 💡 **Tips Pro**
```typescript
// Infer les promesses imbriquées
type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

// Mapper les enums aux types
enum Status { Active, Inactive }
type StatusMap = { [K in keyof typeof Status]: string };

// Type-safe Object.keys
const objectKeys = <T extends object>(obj: T): (keyof T)[] => 
  Object.keys(obj) as (keyof T)[];
```
Ce mémo couvre les concepts cruciaux pour maîtriser TypeScript au niveau expert. Pratiquez régulièrement avec des cas réels pour consolider ces notions ! 🚀
