

## 1) What is the difference between `null` and `undefined`?
ans:
JavaScript এ `undefined` মানে হলো কোনো ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু তাকে এখনো কোনো মান দেওয়া হয়নি।  
অন্যদিকে `null` হলো ইচ্ছাকৃতভাবে দেওয়া একটি খালি মান।  

## 2)What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
ans:
`map()` ফাংশন একটি নতুন array তৈরি করে যেখানে প্রতিটি উপাদানের উপর নির্দিষ্ট কাজ করা হয়।  

অন্যদিকে `forEach()` শুধু প্রতিটি উপাদানের উপর কাজ করে কিন্তু কোনো নতুন array রিটার্ন করে না।  

পার্থক্য:
- map() → নতুন array রিটার্ন করে  
- forEach() → কিছু রিটার্ন করে না  

## 3)  What is the difference between `==` and `===`?
ans:
`==` শুধু মান (value) তুলনা করে এবং প্রয়োজন হলে type conversion করে।  
`===` মান এবং type দুইটিই তুলনা করে।  

উদাহরণ:
5 == "5" → true ;কারণ === type conversion করে না।  
5 === "5" → false  

## 4)  What is the significance of `async`/`await` in fetching API data?
ans:
`async/await` ব্যবহার করলে API থেকে ডেটা আনা সহজ ও readable হয়।  

এটি asynchronous কাজকে synchronous এর মতো দেখায়।  
ফলে কোড বুঝতে সহজ হয় এবং promise chaining কমে যায়।  

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
ans:
Scope হলো কোনো ভেরিয়েবল কোথায় ব্যবহার করা যাবে তার সীমা।  

Global Scope → পুরো প্রোগ্রাম জুড়ে ব্যবহার করা যায়।  
Function Scope → শুধু ফাংশনের ভিতরে ব্যবহার করা যায়।  
Block Scope → { } এর ভিতরে সীমাবদ্ধ থাকে (let, const)।  

