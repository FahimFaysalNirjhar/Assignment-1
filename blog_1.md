# any vs unknown in TypeScript — what i learned this week

**by Fahim Faysal Nirjhar**
_junior developer — still figuring things out, one error at a time_

---

I have been learning Typescript for a few weeks now. Directly coming from Javascript it is honestly a bit overwhelming sometimes. Like why does everything need a type?? I was doing fine without it lol.

But this week I learned something that actually made me go "ohh okay that makes sense". It was about `any` and `unknown`. I want to write it down before i forget.

---

## Why is any called a “type safety hole” and why is unknown safer?

When learning TypeScript, many beginners use the any type because it feels easy and flexible. But using any too much can create dangerous problems in your application.

TypeScript was created to help developers catch mistakes before running the code. But when we use any, TypeScript stops checking the variable completely. That means the variable can become anything at any time, and TypeScript will not warn us even if we make mistakes.

That is why any is called a type safety hole. It creates a hole in TypeScript’s safety system.

---

## what is unknown then

`unknown` also means "I dont know the type". but the difference is Typescript will NOT let you just use it freely.

```typescript
let something: unknown = "hello";

something.toUpperCase(); // ERROR
something * 2; // ERROR
```

At first I thought this was annoying. Like I know its a string just let me use it.

But thats the point. Typescript is saying "you think you know but prove it first" and the way you prove it is by checking the type before you use it.

---

## type narrowing — the part that actually clicked for me

Okay so "type narrowing" is just checking what type something is before using it. Thats literally it.

Like this:

```typescript
let value: unknown = "hello from api";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // works!!
}
```

Inside that if block Typescript goes "okay okay you checked, I believe you now, its a string". So lets you can call string methods. Outside the if block it still doesnt know.

I thought this was kind of magical when I first saw it. typescript is actually reading your if statements and figuring out what the type must be. Thats called control flow analysis apparently. Fancy name for something that makes a lot of sense when you think about it.

you can do it with numbers too:

```typescript
if (typeof value === "number") {
  console.log(value * 2); // works
}
```

and for objects you can check with instanceof:

```typescript
function handleError(err: unknown) {
  if (err instanceof Error) {
    console.log(err.message); // Typescript knows its an Error now
  }
}
```

This one is useful because in try catch blocks the error is `unknown` by default in newer Typescript versions. I kept getting errors on `err.message` and this is why.

---

## my actual takeaway

I think the simple version is:

- `any` = Typescript stops caring. dangerous.
- `unknown` = Typescript still cares, but waits for you to check first. safer.

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
