# How `Pick` and `Omit` Keep Code DRY in TypeScript

## Fahim Faysal Nirjhar

_Junior Developer — learning TypeScript one confusing thing at a time._

While learning TypeScript, I discovered that developers often create many similar interfaces in large projects. Writing the same properties again and again makes the code messy and difficult to maintain.

To solve this problem, TypeScript provides utility types like `Pick` and `Omit`.

These utility types help us create smaller versions of a large interface without rewriting everything manually.

This follows the DRY principle:

> **DRY = Don't Repeat Yourself**

---

# Example Master Interface

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

This is our main interface.

But different parts of the application may need different pieces of this data.

---

# Using `Pick`

`Pick` allows us to select only specific properties from an interface.

## Example

```ts
type UserProfile = Pick<User, "name" | "email">;
```

Now the new type becomes:

```ts
{
  name: string;
  email: string;
}
```

This is useful when we only need a few properties.

For example:

- Showing a public profile
- Displaying user info in the UI

We do not need everything from the original interface.

---

# Using `Omit`

`Omit` does the opposite.

It removes specific properties from an interface.

## Example

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

This is very useful because passwords should never be sent to the frontend.

---

# Why Not Create New Interfaces Manually?

Without `Pick` and `Omit`, we might write:

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

This creates duplicate code.

Later, if the original `User` interface changes, we must update every related interface manually.

That wastes time and increases the chance of bugs.

---

# How This Keeps Code DRY

Using `Pick` and `Omit` means all smaller types stay connected to the main interface.

So if the original interface changes, the smaller types update automatically.

Benefits:

- Less duplicate code
- Easier maintenance
- Cleaner architecture
- Better scalability

---

# Conclusion

`Pick` and `Omit` are very powerful TypeScript utility types.

- `Pick` selects only needed properties
- `Omit` removes unwanted properties

Together, they help developers write cleaner, reusable, and maintainable code while following the DRY principle.

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
