# How `Pick` and `Omit` Keep Code DRY in TypeScript

## Fahim Faysal Nirjhar

_Junior Developer — learning TypeScript one confusing thing at a time._

While learning TypeScript, I discovered that developers often create many similar interfaces in large projects. I used to write the same properties again and again, which made my code messy and difficult to maintain.

To solve this problem, I found TypeScript's utility types like Pick and Omit. These help me create smaller versions of large interfaces without rewriting everything manually.

This follows the DRY principle:

> **DRY = Don't Repeat Yourself**

---

# My Master Interface Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

This is my main User interface. But different parts of my application need different pieces of this data.

---

# How I Use `Pick`

`Pick` lets me select only specific properties from an interface.

## My Example

```ts
type UserProfile = Pick<User, "name" | "email">;
```

Now I have a new type that looks like this:

```ts
{
  name: string;
  email: string;
}
```

This is perfect when I only need a few properties—like showing a public profile or displaying user info in the UI. I don't need everything from the original interface.

---

# How I Use `Omit`

`Omit` does the opposite — it removes specific properties from an interface.

## My Example

```ts
type SafeUser = Omit<User, "password">;
```

Now the new type becomes:

```ts
{
  id: number;
  name: string;
  email: string;
  role: string;
}
```

This is incredibly useful because I never want to send passwords to the frontend.

---

# Why I Stopped Creating New Interfaces Manually

Before learning these utilities, I would write:

```ts
interface UserProfile {
  name: string;
  email: string;
}
```

and:

```ts
interface SafeUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
```

This created duplicate code. If my original `User` interface changed, I had to update every related interface manually. That wasted my time and increased the chance of bugs.

---

# How This Keeps My Code DRY

Using `Pick` and `Omit` means all my smaller types stay connected to the main interface. So if the original interface changes, my smaller types update automatically.

The benefits I noticed:

- Less duplicate code
- Easier maintenance
- Cleaner architecture
- Better scalability

---

# My Conclusion

`Pick` and `Omit` are now my go-to TypeScript utility types.

- `Pick` selects only the properties I need
- `Omit`removes the properties I don't want

Together, they help me write cleaner, reusable, and maintainable code while following the DRY principle.

# References

- TypeScript Handbook – Everyday Types  
  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

- TypeScript Handbook – Narrowing  
  https://www.typescriptlang.org/docs/handbook/2/narrowing.html

- TypeScript Handbook – Utility Types  
  https://www.typescriptlang.org/docs/handbook/utility-types.html

- TypeScript Handbook – Generics  
  https://www.typescriptlang.org/docs/handbook/2/generics.html

- TypeScript Official Documentation  
  https://www.typescriptlang.org/

- MDN JavaScript Documentation  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript

- freeCodeCamp TypeScript Guide  
  https://www.freecodecamp.org/news/learn-typescript-beginners-guide/

_— Fahim Faysal Nirjhar, junior developer_
