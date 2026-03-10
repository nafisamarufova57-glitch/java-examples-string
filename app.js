// UYGA VAZIFA

// 1. Foydalanuvchi kiritgan matn ichidagi harflar sonini aniqlang. Misol: 'salom' → 5
// let matn = "dfngldfn";
// console.log(matn.length);
// =======================================

// 2. Matndagi oxirgi harfni chiqarib bering. Misol: 'hello' → o
// let matn = "hello world";
// console.log(matn.charAt(matn.length - 1));
// =========================================

// 3. Matndagi birinchi harfni katta harfga o‘tkazing. Misol: 'salom' → Salom
// let matn = "hello world";
// let natija = matn.charAt(0).toUpperCase() + matn.slice(1);

// console.log(natija);
// ======================================

// 4. Matn ichida nechta 'a' harfi borligini aniqlang. Misol: 'banana' → 3
// let matn = "banana";
// console.log(matn.includes("a"));
// ========================================

// 5. Matndagi barcha harflarni katta harfga o‘tkazing. Misol: 'salom' → SALOM
// let matn = "dflmnbdfl";
// console.log(matn.toUpperCase());
// ===========================================

// 6. Matndagi barcha harflarni kichik harfga o‘tkazing. Misol: 'HELLO' → hello
// let matn = "KDFJkjKN";
// console.log(matn.toLocaleLowerCase());
// ==============================================

// 7. Matnda 'js' so‘zi bor yoki yo‘qligini tekshiring. Misol: 'I love js' → true
// let matn = "someting important blala js blala";
// console.log(matn.includes("js"));
// =================================================

// 8. Matndan faqat birinchi 5 ta belgini chiqarib bering. Misol: 'javascript' → javas
// let matn = "javascript";
// console.log(matn.slice(0, 5));
// ==================================================

// 9. Matndan oxirgi 3 ta belgini chiqarib bering. Misol: 'javascript' → ipt
// let matn = "javascript";
// console.log(matn.slice(0, 3));
// ====================================================

// 10. Matndagi bo‘sh joylar sonini aniqlang. Misol: 'hello world js' → 2
// let matn = "hello javascript 2";
// let soni = 0;

// for (let i = 0; i < matn.length; i++) {
//   if (matn[i] === " ") {
//     soni++;
//   }
// }
// console.log(soni);
// ================================================

// 11. Matndagi unli harflar sonini aniqlang (a, e, i, o, u). Misol: 'hello' → 2
// let unlilar = "aioue";
// let matn = "hello javascript 2";
// let soni = 0;

// for (let i = 0; i < matn.length; i++) {
//   if (unlilar.includes(matn[i])) {
//     soni++;
//   }
// }
// console.log(soni);
// =================================================

// 12. Matndagi undosh harflar sonini aniqlang. Misol: 'hello' → 3
// let unlilar = "aioue";
// let matn = "javascript";
// let soni = 0;

// for (let i = 0; i < matn.length; i++) {
//   if (!unlilar.includes(matn[i])) {
//     soni++;
//   }
// }
// console.log(soni);
// ==================================================

// 13. Matnni teskarisiga o‘girib chiqaring. Misol: 'hello' → olleh
// let matn = "hello";
// let ism = "";
// for (let i = matn.length - 1; i >= 0; i--) {
//   ism += matn[i];
// }
// console.log(ism);
// ==================================================

// 14. Matn palindrom ekanligini tekshiring. Misol: 'level' → true
// let matn = "level";
// let ism = "";
// for (let i = matn.length - 1; i >= 0; i--) {
//   ism += matn[i];
// }
// if (matn === ism) {
//   console.log("Polindrom raqam");
// } else {
//   console.log("Oddiy raqam");
// }
// ==================================================

// 15. Matndagi barcha 'a' harflarini '@' ga almashtiring. Misol: 'banana' → b@n@n@
// let matn = "bonu.marufova js";
// console.log(matn.replace("a", "@"));
// ==================================================

// 16. Matnda 'javascript' so‘zi nechta ekanligini aniqlang. Misol: 'javascript is good javascript' → 2
// let matn = "javascript dfkjgndfkj javascript kjdgh";
// let soni = matn.split("javascript").length - 1;

// console.log(soni);
// ==================================================

// 17. Matndan faqat harflarni qoldirib, raqamlarni olib tashlang. Misol: 'js123code' → jscode
// let matn = "js123code";
// let raqamlar = "0123456789";
// let natija = "";

// for (let i = 0; i < matn.length; i++) {
//   if (!raqamlar.includes(matn[i])) {
//     natija += matn[i];
//   }
// }

// console.log(natija);
// ==================================================

// 18. Matndagi eng uzun so‘zni toping. Misol: 'I love javascript programming' → programming
// let matn = "I love javascript programming blala";
// let sozlar = matn.split(" ");
// let engUzun = "";

// for (let i = 0; i < sozlar.length; i++) {
//   if (sozlar[i].length > engUzun.length) {
//     engUzun = sozlar[i];
//   }
// }

// console.log(engUzun);
// ==================================================

// 19. Matndagi har bir harfni orasiga '-' qo‘shib chiqaring. Misol: 'hello' → h-e-l-l-o
// let matn = "java is important language";
// let natija = "";

// for (let i = 0; i < matn.length; i++) {
//   natija += matn[i];

//   if (i !== matn.length - 1) {
//     natija += "-";
//   }
// }

// console.log(natija);
// ==================================================

// 20. Matndagi har bir harfni tekshirib, agar unli bo‘lsa '*' bilan almashtiring. Misol: 'hello' → h*ll*
// let unlilar = "aioue";
// let matn = "Assalomu alaykum";
// let natija = "";

// for (let i = 0; i < matn.length; i++) {
//   if (unlilar.includes(matn[i].toLowerCase())) {
//     natija += "*";
//   } else {
//     natija += matn[i];
//   }
// }
// console.log(natija);
