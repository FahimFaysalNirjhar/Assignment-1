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

okay so "type narrowing" is just checking what type something is before using it. thats literally it.

like this:

```typescript
let value: unknown = "hello from api";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // works!!
}
```

inside that if block typescript goes "okay okay you checked, I believe you now, its a string". so it lets you can call string methods. Outside the if block it still doesnt know.

i thought this was kind of magical when i first saw it. typescript is actually reading your if statements and figuring out what the type must be. thats called control flow analysis apparently. fancy name for something that makes a lot of sense when you think about it.

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
    console.log(err.message); // typescript knows its an Error now
  }
}
```

this one is useful because in try catch blocks the error is `unknown` by default in newer typescript versions. i kept getting errors on `err.message` and this is why.

---

## my actual takeaway

i think the simple version is:

- `any` = typescript stops caring. dangerous.
- `unknown` = typescript still cares, but waits for you to check first. safer.

both of them say "i dont know the type". but `any` says "and i dont care". `unknown` says "but i will figure it out before i use it".

now when i get data from an api or something i try to use `unknown` instead of `any`. it is more work but it makes me think about what the data actually looks like. which is probably a good habit.

im still learning so maybe i have some things wrong here. but this is how i understand it right now after playing around with it this week. if you are also a beginner i hope this helped a little bit!

---

_— Fahim Faysal Nirjhar, junior developer_
