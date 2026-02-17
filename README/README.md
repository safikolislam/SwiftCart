1) What is the difference between null and undefined?
Ans:null হলো কোনো ইউজার যখন ভেরিয়েবল সেট করে যার মান শূন্য আর undefined নিজে থেকে অ্যাসাইন করে নেয় যখন কোনো ভেরিয়েবল ডিক্লেয়ার করা হয়।

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
Ans: forEach এবং map লুপের পরিবর্তে অ্যারের (array) ওপর কাজ করতে ব্যবহৃত হয়। এদের মধ্যে প্রধান পার্থক্য হলো—map একটি নতুন অ্যারে (new array) রিটার্ন করে, কিন্তু forEach কোনো কিছু রিটার্ন করে না।


3) What is the difference between == and ===?
Ans: == (Double Equals) মূলত ডাটা টাইপ কনভার্ট করে শুধু ভ্যালু বা মান চেক করে। আর === (Triple Equals) ভ্যালু এবং ডাটা টাইপ—উভয়ই একদম হুবহু চেক করে।

4) What is the significance of async/await in fetching API data?
Ans: async/await ব্যবহৃত হয় অ্যাসিনক্রোনাস (Asynchronous) অপারেশন যেমন—API থেকে ডাটা ফেচ (fetch) করার কাজে। এটি অ্যাসিনক্রোনাস কোডকে দেখতে অনেকটা সিনক্রোনাস (Synchronous) কোডের মতো সহজ করে তোলে এবং প্রমিস (Promise) ও এরর হ্যান্ডেলিং (Error Handling) করা অনেক সহজ করে দেয়।

5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Ans: Global Scope: গ্লোবাল স্কোপে ডিক্লেয়ার করা ভেরিয়েবল ডকুমেন্টের যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়।

Function Scope: একটি ফাংশনের ভেতরে ডিক্লেয়ার করা ভেরিয়েবল শুধুমাত্র সেই ফাংশনের ভেতর থেকেই অ্যাক্সেস করা যায়।

Block Scope: কার্লি ব্র্যাকেট { } (যেমন: if বা for লুপ) এর ভেতরে ডিক্লেয়ার করা ভেরিয়েবলগুলো শুধুমাত্র ওই ব্লকের ভেতর থেকেই অ্যাক্সেস করা যায়।