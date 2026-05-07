# any vs unknown in TypeScript — what i learned this week

**by Fahim Faysal Nirjhar**
_junior developer — still figuring things out, one error at a time_

---

I've been learning TypeScript for a few weeks now. Coming straight from JavaScript, it's honestly a bit overwhelming sometimes. Like why does everything need a type?? I was doing fine without them lol.

But this week I learned something that actually made me go "ohh okay that makes sense." It was `any` and `unknown`. I want to write it down before I forget.

---

## Why is `any` called a “type safety hole” and why is `unknown` safer?

When I first started with TypeScript, I used the `any` type because it felt easy and flexible. But using `any` too much can create dangerous problems in my application.

TypeScript was created to help me catch mistakes before running the code. But when I use `any` TypeScript stops checking the variable completely. That means the variable can become anything at any time, and TypeScript won't warn me even if I make mistakes.

That's why `any` is called a type safety hole. It creates a hole in TypeScript's safety system.

---

## What `unknown` actually is

`unknown` also means "I don't know the type," but the difference is TypeScript won't let me just use it freely.

```typescript
let something: unknown = "hello";

something.toUpperCase(); // ERROR
something * 2; // ERROR
```

At first I thought this was annoying. Like I know it's a string, just let me use it.

But that's the point. TypeScript is saying "you think you know but prove it first," and the way I prove it is by checking the type before I use it.

---

## Type narrowing — the part that actually clicked for me

Okay, so "type narrowing" is just checking what type something is before using it. That's literally it.

Like this:

```typescript
let value: unknown = "hello from api";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // works!!
}
```

Inside that if block, TypeScript goes "okay okay you checked, I believe you now, it's a string." So it lets me call string methods. Outside the if block, it still doesn't know.

I thought this was kind of magical when I first saw it. TypeScript is actually reading my if statements and figuring out what the type must be. That's called control flow analysis apparently. Fancy name for something that makes a lot of sense when you think about it.

I can do it with numbers too:

```typescript
if (typeof value === "number") {
  console.log(value * 2); // works
}
```

And for objects, I can check with `instanceof`:

```typescript
function handleError(err: unknown) {
  if (err instanceof Error) {
    console.log(err.message); // Typescript knows its an Error now
  }
}
```

This one is super useful because in try-catch blocks, the error is `unknown` by default in newer TypeScript versions. I kept getting errors on `err.message` and this is why.

---

## My actual takeaway

I think the simple version is:

- `any` = TypeScript stops caring. Dangerous.
- `unknown` = TypeScript still cares, but waits for me to check first. Safer then `any`.

Both of them say "I dont know the type". but `any` says "and I dont care". `unknown` says "but I will figure it out before I use it".

Now when I get data from an api or something I try to use `unknown` instead of `any`. It is more work but It makes me think about what the data actually looks like which is probably a good habit.

I am still learning so maybe I have some things wrong here. but this is how I understand it right now after playing around with it this week. If you are also a beginner I hope this helped a little bit!

---

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
