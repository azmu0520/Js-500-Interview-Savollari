// 500-Js-Questions

// 1.  JavaScript-da ob'ektlarni yaratishning qanday usullari mavjud?
// Quyidagi kabi javascriptda ob'ektlar yaratishning ko'plab usullari mavjud
// Ob'ekt konstruktori:
// Bo'sh ob'ektni yaratishning eng oddiy usuli Ob'ekt konstruktoridan foydalanishdir. Hozirgi vaqtda bunday yondashuv tavsiya etilmaydi.
// var obyekt = new Object ();
// Ob'ektni yaratish usuli:

// Object ning yaratish usuli prototip ob'ektini parametr sifatida o'tkazish orqali yangi ob'ektni yaratadi

// var obyekt = Object.create (null);
// Obyekt literal sintaksisi:

// Ob'ektning so'zma-so'z sintaksisi (yoki ob'ektni ishga tushiruvchisi) jingalak qavslarga o'ralgan nom-qiymat juftlarining vergul bilan ajratilgan to'plamidir.

// var obyekt = {
//      ism: "Sudheer"
//      yosh: 34
// };

// Ob'ektning so'zma-so'z xossasi qiymatlari har qanday ma'lumot turiga, jumladan massiv, funksiya va ichki o'rnatilgan ob'ekt bo'lishi mumkin.
// Eslatma: Bu ob'ektni yaratishning eng oson usuli

// Funktsiya konstruktori:

// Har qanday funktsiyani yarating va ob'ekt misollarini yaratish uchun yangi operatorni qo'llang,

// funktsiya Shaxs (ism) {
//    this.name = name;
//    bu.yosh = 21;
// }}
// var obyekt = yangi shaxs ("Sudheer");
// Prototipli funksiya konstruktori:

// Bu funktsiya konstruktoriga o'xshaydi, lekin u xususiyatlari va usullari uchun prototipdan foydalanadi,

// funktsiya Shaxs () {}
// Person.prototype.name = "Sudheer";
// var obyekt = yangi shaxs ();
// Bu funksiya prototipi bilan ob'ekt yaratish usuli bilan yaratilgan misolga teng va keyin ushbu funktsiyani misol va parametrlar bilan argument sifatida chaqirish.

// func {};

// yangi funk (x, y, z);
// (YOKI)

// // Funktsiya prototipidan foydalanib yangi misol yarating.
// var newInstance = Object.create (func.prototype)

// // Funktsiyani chaqirish
// var natija = func.call (newInstance, x, y, z),

// // Agar natija null bo'lmagan ob'ekt bo'lsa, uni ishlating, aks holda faqat yangi misoldan foydalaning.
// console.log (natija && typeof natija === 'ob'ekt'? natija: newInstance);
// ES6 sinfi sintaksisi:

// ES6 ob'ektlarni yaratish uchun sinf xususiyatini taqdim etadi

// sinf odami {
//    konstruktor (ism) {
//       this.name = name;
//    }}
// }}

// var obyekt = yangi shaxs ("Sudheer");
// Singleton naqsh:

// Singleton - bu faqat bir marta yaratilishi mumkin bo'lgan ob'ekt. Uning konstruktoriga takroriy qo'ng'iroqlar bir xil misolni qaytaradi va shu bilan ular tasodifan bir nechta misollarni yaratmasligiga ishonch hosil qilish mumkin.

// var obyekt = yangi funksiya () {
//    this.name = "Sudheer";
// }}

// 2.  Prototype chain nima ?
// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

// The prototype on object instance is available through Object.getPrototypeOf (object) or proto property whereas prototype on constructors function is available through Object.prototype.

// 3.  What is the difference between Call, Apply and Bind ?
// Qo'ng'iroq qilish, Qo'llash va Bog'lash o'rtasidagi farqni quyidagi misollar bilan tushuntirish mumkin:

// Qo'ng'iroq: Call () usuli berilgan qiymatga ega funktsiyani va birma-bir taqdim etilgan argumentlarni chaqiradi

// var employee1 = {FirstName: 'Jon', familiya: 'Rodson'};
// var xodim2 = {FirstName: 'Jimmy', familiya: 'Baily'};

// funktsiya taklifi (salomlash1, salomlashish2) {
//     console.log (salomlash1 + '' + this.firstName + '' + this.lastName + ',' + salomlashish2);
// }}

// taklif qilish.call (xodim1, 'Salom', 'Qandaysiz?'); // Salom Jon Rodson, yaxshimisiz?
// taklif qilish.call (xodim2, 'Salom', 'Qandaysiz?'); // Salom Jimmi Beyli, yaxshimisiz?
// Qo'llash: Berilgan qiymat bilan funktsiyani chaqiradi va argumentlarni massiv sifatida o'tkazishga imkon beradi.

// var employee1 = {FirstName: 'Jon', familiya: 'Rodson'};
// var xodim2 = {FirstName: 'Jimmy', familiya: 'Baily'};

// funktsiya taklifi (salomlash1, salomlashish2) {
//     console.log (salomlash1 + '' + this.firstName + '' + this.lastName + ',' + salomlashish2);
// }}

// taklif qilish.apply (xodim1, ['Salom', 'Qandaysiz?']); // Salom Jon Rodson, yaxshimisiz?
// taklif qilish.apply (xodim2, ['Salom', 'Qandaysiz?']); // Salom Jimmi Beyli, yaxshimisiz?
// bog'lash: har qanday miqdordagi argumentlarni o'tkazish imkonini beruvchi yangi funktsiyani qaytaradi

// var employee1 = {FirstName: 'Jon', familiya: 'Rodson'};
// var xodim2 = {FirstName: 'Jimmy', familiya: 'Baily'};

// funktsiya taklifi (salomlash1, salomlashish2) {
//     console.log (salomlash1 + '' + this.firstName + '' + this.lastName + ',' + salomlashish2);
// }}

// var davetlanganEmployee1 = taklif.bind (xodim1);
// var taklifEmployee2 = taklif.bind (xodim2);
// taklif xodimi1 ('Salom', 'Qandaysiz?'); // Salom Jon Rodson, yaxshimisiz?
// taklif xodimi2 ('Salom', 'Qandaysiz?'); // Salom Jimmi Beyli, yaxshimisiz?
// Qo'ng'iroq qilish va ariza berish bir-birini almashtirib turadi. Ikkalasi ham joriy funktsiyani darhol bajaradi. Argumentlarni massiv yoki vergul bilan ajratilgan roʻyxatida yuborish osonroqmi, qaror qabul qilishingiz kerak. Qo'ng'iroq vergul uchun (ajratilgan ro'yxat) va Massiv uchun Qo'llash ni davolash orqali eslab qolishingiz mumkin.

// Holbuki, Bind yangi funktsiyani yaratadi, unda bu birinchi parametr bog'lash () ga o'tkaziladi.

// 4.  JSON nima va uning umumiy operatsiyalari ?
// JSON bu Duglas Krokford tomonidan ommalashtirilgan JavaScript ob'yekt sintaksisiga asoslangan matnga asoslangan ma'lumotlar formatidir. Bu tarmoq boʻylab maʼlumotlarni uzatmoqchi boʻlganingizda foydali boʻladi va u asosan .json kengaytmali matn fayli va MIME turidagi ilova/json boʻlsa.

// Tahlil qilish: satrni mahalliy ob'ektga aylantirish

// JSON.parse(matn)
// Stringifikatsiya: mahalliy ob'ektni tarmoq bo'ylab uzatilishi uchun satrga aylantirish

// 5.  What is the purpose of the array slice method ?
// slice() usuli massivdagi tanlangan elementlarni yangi massiv obyekti sifatida qaytaradi. U berilgan boshlang'ich argumentdan boshlanadigan elementlarni tanlaydi va oxirgi elementni qo'shmasdan berilgan ixtiyoriy yakuniy argumentda tugaydi. Agar siz ikkinchi argumentni o'tkazib yuborsangiz, u oxirigacha tanlaydi.

// Ushbu usulning ba'zi misollari:

// let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0,2); // qaytaradi [1,2]
// let arrayIntegers2 = arrayIntegers.slice(2,3); // qaytaradi [3]
// let arrayIntegers3 = arrayIntegers.slice(4); //qaytadi [5]
// Eslatma: Slice usuli asl massivni o'zgartirmaydi, lekin u kichik to'plamni yangi massiv sifatida qaytaradi.

// 6.  What is the purpose of the array splice method ?
// Splice() usuli qatorga elementlarni qo'shish/o'chirish uchun ishlatiladi va keyin olib tashlangan elementni qaytaradi. Birinchi argument qo'shish yoki o'chirish uchun massiv o'rnini belgilaydi, ixtiyoriy ikkinchi argument esa o'chirilishi kerak bo'lgan elementlar sonini ko'rsatadi. Har bir qo'shimcha argument massivga qo'shiladi.

// Ushbu usulning ba'zi misollari:

// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // qaytaradi [1, 2]; Asl massiv: [3, 4, 5]
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // qaytaradi [4, 5]; original massiv: [1, 2, 3]
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //qaytadi [4]; original massiv: [1, 2, 3, "a", "b", "c", 5]
// Eslatma: Splice usuli asl massivni o'zgartiradi va o'chirilgan massivni qaytaradi.

// 7.  What is the difference between slice and splice ?
// Jadval shaklidagi asosiy farqlardan ba'zilari

// Bo'lakni kesish
// Asl massivni o'zgartirmaydi (o'zgarmas) Asl massivni o'zgartiradi (o'zgaruvchan)
// Asl massivning pastki to'plamini qaytaradi O'chirilgan elementlarni massiv sifatida qaytaradi
// Massivdan elementlarni tanlash uchun ishlatiladi. Massivga/massivdan elementlarni kiritish yoki oʻchirish uchun foydalaniladi

// 8.  How do you compare Object and Map ?
// Ob'ektlar Xaritalarga o'xshaydi, chunki ikkalasi ham kalitlarni qiymatlarga o'rnatish, ushbu qiymatlarni olish, kalitlarni o'chirish va kalitda biror narsa saqlanganligini aniqlash imkonini beradi. Shu sababli, ob'ektlar tarixan Xaritalar sifatida ishlatilgan. Lekin muhim farqlar borki, ular ma'lum holatlarda Xaritadan foydalanishni afzal ko'radi.

// Ob'ektning kalitlari qatorlar va belgilar bo'lib, ular Xarita uchun har qanday qiymat, jumladan funktsiyalar, ob'ektlar va har qanday ibtidoiy bo'lishi mumkin.
// Xaritadagi kalitlar tartiblangan, Ob'ektga qo'shilgan kalitlar esa yo'q. Shunday qilib, uni takrorlashda Map ob'ekti kalitlarni kiritish tartibida qaytaradi.
// Siz Xarita hajmini siz o'lcham xususiyati bilan osongina olishingiz mumkin, shu bilan birga Ob'ektdagi xususiyatlar soni qo'lda aniqlanishi kerak.
// Xaritani takrorlash mumkin va shuning uchun uni to'g'ridan-to'g'ri takrorlash mumkin, holbuki Ob'ektni takrorlash uchun uning kalitlarini qandaydir tarzda olish va ularni takrorlash kerak.
// Ob'ektning prototipi bor, shuning uchun xaritada ehtiyot bo'lmasangiz, kalitlaringiz bilan to'qnashishi mumkin bo'lgan standart kalitlar mavjud. ES5 dan boshlab map = Object.create(null) yordamida buni chetlab o'tish mumkin, lekin bu kamdan-kam hollarda amalga oshiriladi.
// Xarita kalit juftlarini tez-tez qo'shish va olib tashlashni o'z ichiga olgan stsenariylarda yaxshiroq ishlashi mumkin.

// 9.  == va === operatorlarining farqi nimada ?
// JavaScript qat'iy(===, !==) va turga aylantiruvchi (==, !=) tenglikni taqqoslashni ta'minlaydi. Qattiq operatorlar o'zgaruvchining turini hisobga oladi, qat'iy bo'lmagan operatorlar esa o'zgaruvchilar qiymatlari asosida turdagi tuzatish/konvertatsiya qiladi. Qattiq operatorlar har xil turlar uchun quyidagi shartlarga amal qiladilar,

// Ikki satr bir xil belgilar ketma-ketligi, bir xil uzunlik va tegishli pozitsiyalarda bir xil belgilarga ega bo'lsa, qat'iy tengdir.
// Ikki raqam son jihatdan teng bo'lsa, ular qat'iy tengdir. ya'ni, bir xil raqam qiymatiga ega. Bunda ikkita alohida holat mavjud,
// NaN hech narsaga teng emas, shu jumladan NaN.
// Ijobiy va manfiy nollar bir-biriga teng.
// Ikki mantiqiy operand, agar ikkalasi ham to'g'ri yoki ikkalasi ham yolg'on bo'lsa, qat'iy teng bo'ladi.
// Ikki ob'ekt bir xil ob'ektga tegishli bo'lsa, ular mutlaqo tengdir.
// Null va Undefined turlari === ga teng emas, lekin == ga teng. ya'ni, null===aniqlanmagan --> noto'g'ri, lekin null==aniqlanmagan --> rost
// Yuqoridagi holatlarni qamrab oluvchi ba'zi misollar,

// 0 == noto'g'ri // rost
// 0 === noto'g'ri // noto'g'ri
// 1 == "1" // rost
// 1 === "1" // noto'g'ri
// null == aniqlanmagan // rost
// null === aniqlanmagan // noto'g'ri

// 10.  What are lambda or arrow functions ?
// Ok funksiyasi funksiya ifodasi uchun qisqaroq sintaksis bo‘lib, o‘ziga xos this, arguments, super yoki new.target funksiyalariga ega emas. Bu funksiyalar usul bo'lmagan funksiyalar uchun eng mos keladi va ularni konstruktor sifatida ishlatib bo'lmaydi.
// 11.  What is a first class function ?
// Javascriptda funksiyalar birinchi darajali ob'ektlardir. Birinchi darajali funktsiyalar bu tildagi funktsiyalar boshqa har qanday o'zgaruvchilar kabi ko'rib chiqilishini anglatadi.

// Masalan, bunday tilda funksiya boshqa funksiyalarga argument sifatida uzatilishi, boshqa funksiya tomonidan qaytarilishi va o‘zgaruvchiga qiymat sifatida berilishi mumkin. Misol uchun, quyidagi misolda tinglovchiga tayinlangan ishlov beruvchi funktsiyalari

// const handler = () => console.log ('Bu chertish funksiyasi');
// document.addEventListener ("klik", ishlov beruvchi);

// 12.  What is a first order function ?
// Birinchi darajali funktsiya boshqa funktsiyani argument sifatida qabul qilmaydigan va funktsiyani qaytarish qiymati sifatida qaytarmaydigan funktsiyadir.

// const firstOrder = () => console.log ('Men birinchi darajali funksiyaman!');

// 13.  What is a higher order function ?
// Birinchi darajali funktsiya boshqa funktsiyani argument sifatida qabul qilmaydigan va funktsiyani qaytarish qiymati sifatida qaytarmaydigan funktsiyadir.

// const  firstOrder = () => console.log ('I am a first order function!');

// 14.  What is a unary function ?
// Unar funktsiya (ya'ni, monad) - aynan bitta argumentni qabul qiladigan funksiya. Bu funktsiya tomonidan qabul qilingan bitta argumentni anglatadi.

// Unar funktsiyaga misol keltiramiz,

// const unaryFunction = a => console.log (a + 10); // Berilgan argumentga 10 qo'shing va qiymatni ko'rsating

// 15.  What is the currying function ?
// Currying - bu bir nechta argumentli funktsiyani olish va uni har birida faqat bitta argumentga ega bo'lgan funktsiyalar ketma-ketligiga aylantirish jarayoni. Currying matematik Xaskell Karri sharafiga nomlangan. Korriingni qo'llash orqali n-ary funksiya uni birlik funktsiyaga aylantiradi.

// Keling, n-ar funksiyasiga misol keltiraylik va u qanday qilib karriy funksiyaga aylanadi,

// const multiArgFunction = (a, b, c) => a + b + c;
// console.log(multiArgFunction(1,2,3));// 6

// const curryUnaryFunction = a => b => c => a + b + c;
// curryUnaryFunction (1); // funktsiyani qaytaradi: b => c => 1 + b + c
// curryUnaryFunction (1) (2); // funktsiyani qaytaradi: c => 3 + c
// curryUnaryFunction (1) (2) (3); // 6 raqamini qaytaradi
// Curried funktsiyalari kodning qayta ishlatilishi va funktsional tarkibini yaxshilash uchun juda yaxshi.

// 16.  What is a pure function ?
// Pure funktsiya - bu qaytariladigan qiymat faqat uning argumentlari bilan hech qanday nojo'ya ta'sirlarsiz aniqlanadigan funktsiyadir. ya'ni, agar siz bir xil argumentlarga ega bo'lgan funktsiyani "n" soni va ilovadagi joylar soni "n" bilan chaqirsangiz, u har doim bir xil qiymatni qaytaradi.

// Keling, sof va nopok funktsiyalar o'rtasidagi farqni ko'rish uchun misol keltiraylik,

// // Nopok
// let numberArray = [];
// const impureAddNumber = raqam => numberArray.push(raqam);
// //Sof
// const pureAddNumber = raqam => argNumberArray =>
//   argNumberArray.concat([raqam]);

// //Natijalarni ko'rsatish
// console.log (impureAddNumber(6)); // 1 ni qaytaradi
// console.log (numberArray); // qaytaradi [6]
// console.log (pureAddNumber(7) (numberArray)); // qaytaradi [6, 7]
// console.log (numberArray); // qaytaradi [6]
// Yuqoridagi kod parchalariga ko'ra, Push funksiyasi massivni o'zgartirish va parametr qiymatidan mustaqil bo'lgan surish raqami indeksini qaytarish orqali o'zini nopok qiladi. Boshqa tomondan, Concat massivni oladi va uni boshqa massiv bilan birlashtiradi va nojo'ya ta'sirlarsiz butunlay yangi massiv hosil qiladi. Bundan tashqari, qaytarish qiymati oldingi massivning birlashmasi hisoblanadi.

// Esda tutingki, Pure funktsiyalari muhim ahamiyatga ega, chunki ular birlik sinovini hech qanday nojo'ya ta'sirlarsiz va qaramlik in'ektsiyasiga ehtiyoj sezmasdan soddalashtiradi. Ular, shuningdek, qattiq bog'lanishdan qochishadi va hech qanday nojo'ya ta'sirlarga ega bo'lmasdan, ilovangizni buzishni qiyinlashtiradi. Ushbu tamoyillar ES6 ning o'zgarmaslik kontseptsiyasi bilan birlashtirilib, ruxsat berishdan ko'ra const ga ustunlik beradi.

// 17.  Let kalit so'zining maqsadi nima?
// Let bayonoti blok doirasi mahalliy o'zgaruvchisini e'lon qiladi. Shunday qilib, let kalit so'zi bilan aniqlangan o'zgaruvchilar u ishlatiladigan blok, bayonot yoki ifoda bilan cheklangan. Holbuki, var kalit so'zi bilan e'lon qilingan o'zgaruvchilar o'zgaruvchini global miqyosda yoki blok doirasidan qat'i nazar, butun funktsiyaga lokal ravishda aniqlash uchun ishlatiladi.

// Foydalanishni ko'rsatish uchun misol keltiraylik,

// hisoblagich = 30 bo'lsin;
// agar (hisoblagich === 30) {
//   hisoblagich = 31;
//   console.log(hisoblagich); // 31
// }
// console.log(hisoblagich); // 30 (chunki if dagi oʻzgaruvchi bu yerda mavjud boʻlmaydi)

// 18.  Let va var o'rtasidagi farq nima ?
// var let
// U ES6 ning bir qismi sifatida kiritilgan JavaScript-ning boshidan mavjud
// Funktsiya doirasi bor. Blok doirasi mavjud
// O'zgaruvchilar ko'tariladi, lekin ishga tushirilmaydi
// Farqni ko'rish uchun misol keltiramiz,

// funktsiya userDetails(foydalanuvchi nomi) {
//    agar (foydalanuvchi nomi) {
//      console.log(ish haqi); // ko'tarish tufayli aniqlanmagan
//      console.log(yosh); // ReferenceError: ishga tushirishdan oldin "yosh" ga kirish imkoni yo'q
//      yosh = 30;
//      var ish haqi = 10000;
//    }
//    console.log(ish haqi); //10000 (tegishli funktsiya doirasiga kirish mumkin)
//    console.log(yosh); //xato: yosh aniqlanmagan (bloklanganligi sababli)
// }
// userDetails('Jon');

// 19.  What is the reason to choose the name let as a keyword ?

// Let - Scheme va Basic kabi dastlabki dasturlash tillari tomonidan qabul qilingan matematik bayonot. U imkon qadar var ga yaqin anʼanaviy kalit soʻz sifatida let soʻzini ishlatadigan oʻnlab boshqa tillardan olingan.

// 20.  Qanday qilib o'zgaruvchilarni almashtirish blokida xatosiz qayta e'lon qilasiz
// Agar siz a dagi o'zgaruvchilarni qayta e'lon qilishga harakat qilsangiz, switch blocku xatolarga olib keladi, chunki faqat bitta blok mavjud. Misol uchun, quyidagi kod bloki quyidagi kabi sintaksis xatosini keltirib chiqaradi,

//  hisoblagich  =  1 bo'lsin ;
// switch ( x )  {
//   holat  0 :
//      nom bersin  ; sindirish ; 1- holat :
//      nom bering ; // Qayta deklaratsiya uchun sintaksis xatosi. sindirish ; }

// Ushbu xatolikka yo'l qo'ymaslik uchun siz case bandi ichida ichki blok yaratishingiz va yangi blokli leksik muhitni yaratishingiz mumkin.

// let counter = 1;
//     switch(x) {
//       case 0: {
//         let name;
//         break;
//       }
//       case 1: {
//         let name; // No SyntaxError for redeclaration.
//         break;
//       }
//     }

// 21.  Vaqtinchalik o'lik zona nima ? (Temporal Dead Zone)
// Vaqtinchalik o'lik zona - bu JavaScript-da o'zgaruvchini let va const kalit so'zlari bilan e'lon qilishda yuzaga keladigan xatti-harakatlar, lekin var bilan emas. ECMAScript 6 da, a letyokiconst variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

// Keling, bu xatti-harakatni misol bilan ko'rib chiqaylik,

// funktsiya  somemethod ( )  {
//   konsol . log ( taymer1 ) ;  // aniqlanmagan
//   konsol.log(counter2); // ReferenceError
//   var counter1 = 1;
//   let counter2 = 2;
// }
// 22.  IIFE (darhol chaqiriladigan funksiya ifodasi) nima?
// IIFE (Immediately Invoked Function Expression) bu JavaScript funksiyasi boʻlib, u aniqlangan zahoti ishga tushadi. Uning sintaksi quyidagicha bo'ladi,

// ( funktsiya  ( )
//     {
//       // bu erda amal
//     }
//  )
// ( ) ;
// IIFE-dan foydalanishning asosiy sababi ma'lumotlar maxfiyligini olishdir, chunki IIFE ichida e'lon qilingan har qanday o'zgaruvchilarga block dan  tashqari kirishi mumkin emas. ya'ni, agar siz IIFE bilan o'zgaruvchilarga kirishga harakat qilsangiz, u quyidagi kabi xatoga yo'l qo'yadi,

// ( funktsiya  ( )
//         {
//           var  xabar  =  "IIFE" ;
//           konsol . jurnal ( xabar ) ;
//         }
//  )
// ( ) ;
// console.log( message) ;  //Error: message is not defined

// 23.  JavaScript-da URL-manzilni qanday dekodlash yoki enkodlash mumkin?

// encodeURI()funksiyasi URL manzilini kodlash uchun ishlatiladi. Bu funksiya parametr sifatida URL satrini talab qiladi va kodlangan qatorni qaytaradi. decodeURI()funksiya URL manzilini ochish uchun ishlatiladi. Bu funksiya parametr sifatida kodlangan URL satrini talab qiladi va bu dekodlangan qatorni qaytaradi.

// Eslatma: Agar siz belgilarni kodlashni istasangiz, / ? : @ & = + $ #dan foydalanishingiz kerak encodeURIComponent().

//  uri  = bo'lsin "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);

// 24.  What is memoization ?
// Memoizatsiya - bu avvaldan hisoblangan natijalarni keshlash orqali funktsiyaning ishlashini oshirishga harakat qiladigan dasturlash usuli. Har safar xotirada saqlangan funksiya chaqirilganda, uning parametrlari keshni indekslash uchun ishlatiladi. Agar ma'lumotlar mavjud bo'lsa, uni butun funktsiyani bajarmasdan qaytarish mumkin. Aks holda funktsiya bajariladi va natija keshga qo'shiladi. Keling, xotira bilan funksiya qo'shishga misol keltiraylik,

// const  memoizAddition  =  ( )  =>  {
// const memoizAddition = () => {
//   let cache = {};
//  return (value) => {
//   if (value in cache) {
//    console.log('Fetching from cache');
//    return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//   }
//   else {
//    console.log('Calculating result');
//    let result = value + 20;
//    cache[value] = result;
//    return result;
//   }
//  }
// }
// // returned function from memoizAddition
// const addition = memoizAddition();
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached

// 25.  What is Hoisting ?
// Hoisting JavaScript mexanizmi bo'lib, unda kod bajarilishidan oldin o'zgaruvchilar va funksiya deklaratsiyasi o'z doirasining yuqori qismiga ko'chiriladi. Esda tutingki, JavaScript faqat deklaratsiyalarni ko'taradi, ishga tushirishni emas. Keling, o'zgaruvchan yuk ko'tarishning oddiy misolini olaylik,
// console.log(message); //output : undefined
// var message = 'The variable Has been hoisted';

// var message;
// console.log(message);
// message = 'The variable Has been hoisted';

// 26.  ES6 da qanday sinflar(class) mavjud ?
// ES6 da Javascript sinflari JavaScript-ning mavjud prototipiga asoslangan merosiga nisbatan asosan sintaktik shakar hisoblanadi. Masalan, prototipga asoslangan meros quyidagi funksiya ifodasida yozilgan,
// function Bike(model,color) {
//     this.model = model;
//     this.color = color;
// }

// Bike.prototype.getDetails = function() {
//     return this.model + ' bike has' + this.color + ' color';
// };

// Whereas ES6 classes can be defined as alternative

// class Bike{
//   constructor(color, model) {
//     this.color= color;
//     this.model= model;
//   }

//   getDetails() {
//     return this.model + ' bike has' + this.color + ' color';
//   }
// }

// 27.  What are closures?
// Closures - bu funktsiya va ushbu funktsiya e'lon qilingan leksik muhitning kombinatsiyasi. ya'ni, bu tashqi yoki qo'shuvchi funksiya o'zgaruvchilariga kirish huquqiga ega bo'lgan ichki funktsiyadir. Yopish uchta ko'lamli zanjirga ega
// O'zgaruvchilar uning jingalak qavslar orasida aniqlangan o'z doirasi
// Tashqi funktsiya o'zgaruvchilari
// Global o'zgaruvchilar
// Keling, closures kontseptsiyasiga misol keltiraylik,
// function Welcome(name){
//   var greetingInfo = function(message){
//    console.log(message+' '+name);
//   }
// return greetingInfo;
// }
// var myFunction = Welcome('John');
// myFunction('Welcome '); //Output: Welcome John
// myFunction('Hello Mr.'); //output: Hello Mr.John

// 28.  Modullar nima ?
// Modullar mustaqil, qayta foydalanish mumkin bo'lgan kodning kichik birliklariga ishora qiladi va ko'plab JavaScript dizayn naqshlarining asosi bo'lib xizmat qiladi. Ko'pgina JavaScript modullari ob'ektni, funktsiyani yoki konstruktorni eksport qiladi

// 29.  Nima uchun sizga modullar kerak ?
// Quyida JavaScript ekotizimidagi modullardan foydalanishning afzalliklari ro'yxati keltirilgan
// Saqlash imkoniyati
// Qayta foydalanish imkoniyati
// Ismlar oralig'i

// 30.  What is scope in javascript ?
// Amal qilish doirasi - bu ish vaqtida kodingizning ma'lum bir qismidagi o'zgaruvchilar, funktsiyalar va ob'ektlarga kirish imkoniyati. Boshqacha qilib aytganda, qamrov sizning kodingiz sohalarida o'zgaruvchilar va boshqa resurslarning ko'rinishini aniqlaydi

// 31.  What is a service worker
// Xizmat xodimi asosan fonda ishlaydigan, veb-sahifadan ajratilgan va veb-sahifa yoki foydalanuvchi o'zaro ta'sirini talab qilmaydigan xususiyatlarni taqdim etadigan skript (JavaScript fayli). Xizmat xodimlarining asosiy xususiyatlaridan ba'zilari - bu boy oflayn tajribalar (oflayn birinchi veb-ilovalarni ishlab chiqish), davriy fon sinxronlash, push-bildirishnomalar, tarmoq so'rovlarini ushlab turish va boshqarish va javoblar keshini dasturiy ravishda boshqarish.

// 32.  How do you manipulate DOM using a service worker ?
// Xizmat xodimi DOMga to'g'ridan-to'g'ri kira olmaydi. Ammo u interfeys orqali yuborilgan xabarlarga javob berish orqali o'zi boshqaradigan sahifalar bilan postMessagebog'lanishi mumkin va bu sahifalar DOMni boshqarishi mumkin.

// 33. Xizmat ishchisini qayta ishga tushirishda ma'lumotlardan qanday foydalanasiz
// Onfetch Xizmat ishchisi bilan bog'liq muammo shundaki, u foydalanilmayotganda tugatiladi va keyingi kerak bo'lganda qayta ishga tushadi, shuning uchun siz xizmat ko'rsatuvchi ishchi va onmessage ishlovchilar ichidagi global holatga tayanolmaysiz . Bunday holda, xizmat ko'rsatuvchi ishchilar qayta ishga tushirishda davom etish va qayta foydalanish uchun IndexedDB API ga kirish huquqiga ega bo'ladi.

// 34.  IndexedDB nima ?
// IndexedDB - bu katta hajmdagi tuzilgan ma'lumotlarni, shu jumladan fayllar/bloblarni mijoz tomonidan saqlash uchun past darajadagi API. Ushbu API ushbu ma'lumotlarning yuqori samarali qidiruvlarini yoqish uchun indekslardan foydalanadi.

// 35.  Veb-xotira nima ?
// Veb-xotira - bu brauzerlar kalit/qiymat juftlarini foydalanuvchi brauzerida mahalliy sifatida cookie-fayllardan foydalanishdan ko'ra ancha intuitiv tarzda saqlashi mumkin bo'lgan mexanizmni ta'minlovchi API. Veb-xotira mijozga ma'lumotlarni saqlash uchun ikkita mexanizmni taqdim etadi.
// Mahalliy saqlash: U amaldagi ma'lumotlarni amal qilish muddatisiz saqlaydi.
// Seansni saqlash: U bir seans uchun ma'lumotlarni saqlaydi va brauzer yorlig'i yopilganda ma'lumotlar yo'qoladi.

// 36.  Post xabari nima?
// Xabarni yuborish - bu Oyna ob'ektlari (ya'ni, sahifa va u ochilgan qalqib chiquvchi oyna o'rtasida yoki sahifa va uning ichiga o'rnatilgan iframe o'rtasida) o'zaro bog'lanishni ta'minlaydigan usul. Odatda, turli sahifalardagi skriptlarga bir-biriga kirishga ruxsat beriladi, agar sahifalar bir xil manba siyosatiga (yaʼni, sahifalar bir xil protokol, port raqami va xostga ega boʻlsa) amal qilgan taqdirdagina.

// 37.  Cookie nima ?
// Cookie - bu brauzeringiz kirishi uchun kompyuteringizda saqlanadigan ma'lumotlarning bir qismi. Cookie-fayllar kalit/qiymat juftligi sifatida saqlanadi. Masalan, foydalanuvchi nomi bilan quyidagi cookie faylini yaratishingiz mumkin:
// Document.cookie = ‘username=John’

// 38.  Cookie nima uchun kerak ?
// Cookie-fayllar foydalanuvchi profili (masalan, foydalanuvchi nomi) haqidagi ma'lumotlarni eslab qolish uchun ishlatiladi. Bu asosan ikki bosqichni o'z ichiga oladi,
// Foydalanuvchi veb-sahifaga tashrif buyurganida, foydalanuvchi profili cookie faylida saqlanishi mumkin.
// Keyingi safar foydalanuvchi sahifaga tashrif buyurganida, cookie foydalanuvchi profilini eslab qoladi.

// 39.  Cookie-da qanday variantlar mavjud ?
// Cookie uchun quyida bir nechta variant mavjud,
// Sukut bo'yicha, brauzer yopilganda cookie o'chiriladi, ammo amal qilish muddatini belgilash orqali bu xatti-harakatni o'zgartirishingiz mumkin (UTC vaqti bilan).
// document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
// Odatiy bo'lib, cookie joriy sahifaga tegishli. Lekin siz brauzerga cookie fayli qaysi yoʻlga tegishli ekanligini yoʻl parametri yordamida ayta olasiz.
// document.cookie = "username=John; path=/services";

// 40.  Cookie faylini qanday o'chirish mumkin ?
// Yaroqlilik muddatini o‘tgan sana sifatida belgilash orqali cookie faylini o‘chirishingiz mumkin. Bu holda cookie qiymatini belgilashingiz shart emas. Masalan, joriy sahifadagi foydalanuvchi nomi cookie-faylini quyidagi tarzda o'chirishingiz mumkin.

// document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
// Eslatma: To'g'ri cookie-faylni o'chirib tashlashingizga ishonch hosil qilish uchun cookie-fayl yo'li opsiyasini belgilashingiz kerak. Ba'zi brauzerlar, agar siz yo'l parametrini ko'rsatmasangiz, cookie-fayllarni o'chirishga ruxsat bermaydi.
// 41.  Cookie, mahalliy saqlash va seans saqlash o'rtasidagi farqlar qanday ?
// Quyida cookie, mahalliy saqlash va seans xotirasi oʻrtasidagi farqlar keltirilgan.

// 42.  localStorage va sessionStorage o'rtasidagi asosiy farq nima ?
// LocalStorage SessionStorage bilan bir xil, lekin u brauzer yopilgan va qayta ochilganda ham maʼlumotlarni saqlab qoladi (yaʼni uning amal qilish muddati yoʻq), seansStorageʼda esa sahifa seansi tugashi bilan maʼlumotlar tozalanadi.

// 43.  How do you access web storage ?
// Window obyekti mos ravishda (window.localStorage) va (window.sessionStorage) xossalariga ega bo'lgan WindowLocalStorage va WindowSessionStorage ob'ektlarini amalga oshiradi. Ushbu xususiyatlar Saqlash ob'ektining namunasini yaratadi, bu orqali ma'lumotlar elementlarini ma'lum domen va saqlash turi (sessiya yoki mahalliy) uchun o'rnatish, olish va o'chirish mumkin. Masalan, siz mahalliy saqlash ob'ektlarida quyida ko'rsatilganidek o'qishingiz va yozishingiz mumkin localStoragesessionStorage
// localStorage.setItem('logo', document.getElementById('logo').value);
// localStorage.getItem('logo');

// 44.  Session storageda qanday  usullar mavjud ?
// Seans xotirasi sessiya ma'lumotlarini o'qish, yozish va tozalash usullarini taqdim etdi
// // Save data to sessionStorage
// sessionStorage.setItem('key', 'value');

// // Get saved data from sessionStorage
// let data = sessionStorage.getItem('key');

// // Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// // Remove all saved data from sessionStorage
// sessionStorage.clear();

// 45.  Saqlash hodisasi nima va uning voqea ishlovchisi (storage event and its event handler
// )
// StorageEvent - bu boshqa hujjat kontekstida saqlash joyi o'zgartirilganda paydo bo'ladigan hodisa. Holbuki, saqlash xususiyati saqlash hodisalarini qayta ishlash uchun EventHandler hisoblanadi. Sintaksis quyidagi kabi bo'ladi
//  window.onstorage = functionRef;
// Keling, saqlash kaliti va uning qiymatlarini qayd qiluvchi xotira hodisasi ishlovchisidan foydalanish misolini olaylik
// window.onstorage = function(e) {
//   console.log('The ' + e.key +
//     ' key has been changed from ' + e.oldValue +
//     ' to ' + e.newValue + '.');
// };

// 46.  Nima uchun sizga veb-xotira kerak ?
// Veb-saqlash yanada xavfsizroq va katta hajmdagi ma'lumotlar veb-sayt ishlashiga ta'sir qilmasdan mahalliy sifatida saqlanishi mumkin. Bundan tashqari, ma'lumotlar hech qachon serverga o'tkazilmaydi. Shuning uchun bu Cookie-fayllarga qaraganda ko'proq tavsiya etilgan yondashuv

// 47.  Veb-xotira brauzerining yordamini qanday tekshirish mumkin
// Veb-xotiradan foydalanishdan oldin localStorage va sessionStorage uchun brauzer yordamini tekshirishingiz kerak,
// if (typeof(Storage) !== "undefined") {
//   // Code for localStorage/sessionStorage.
// } else {
//   // Sorry! No Web Storage support..
// }

// 48.  Veb-workersning brauzer qo'llab-quvvatlashini qanday tekshirish mumkin
// Uni ishlatishdan oldin veb-xodimlar uchun brauzer yordamini tekshirishingiz kerak
// if (typeof(Worker) !== "undefined") {
//   // code for Web worker support.
// } else {
//   // Sorry! No Web Worker support..
// }

// 49.  Veb-workerga misol keltiring
// Hisoblash misolida veb ishchilaridan foydalanishni boshlash uchun quyidagi bosqichlarni bajarishingiz kerak
// Veb ishchi faylini yarating: Hisoblash qiymatini oshirish uchun skript yozishingiz kerak. Keling, uni counter.js deb nomlaymiz

// let i = 0;

// function timedCount() {
//   i = i + 1;
//   postMessage(i);
//   setTimeout("timedCount()",500);
// }

// timedCount();
// Bu yerda postMessage() usuli xabarni HTML sahifasiga qaytarish uchun ishlatiladi
// Veb ishchi ob'ektini yaratish: Brauzer qo'llab-quvvatlashini tekshirish orqali veb-ishchi ob'ektini yaratishingiz mumkin. Keling, bu faylni web_worker_example.js deb nomlaymiz
// if (typeof(w) == "undefined") {
//   w = new Worker("counter.js");
// }
// va biz veb-ishchidan xabarlar olishimiz mumkin
// w.onmessage = function(event){
//   document.getElementById("message").innerHTML = event.data;
// };
// Veb ishchini tugatish: Veb ishchilari xabarlarni tinglashda davom etadilar (hatto tashqi skript tugagandan keyin ham) u tugatilmaguncha. Siz xabarlarni tinglashni tugatish uchun terminate() usulidan foydalanishingiz mumkin.

// 50.  Web-ishchilarning DOM-da qanday cheklovlari bor ?
// WebWorkers quyida joylashgan JavaScript obyektlariga kirish huquqiga ega emas, chunki ular tashqi fayllarda aniqlangan
// Window obyekti
// Document obyekti
// Parent  ob'ekti

// 51.  Promise nima ?
// Va'da - bu hal qilingan qiymat yoki hal qilinmagan sabab (masalan, tarmoq xatosi) bilan kelajakda bir muncha vaqt bitta qiymat ishlab chiqarishi mumkin bo'lgan ob'ekt. U 3 ta mumkin bo'lgan holatdan birida bo'ladi: bajarilgan, rad etilgan yoki kutilayotgan.
// Promise yaratish sintaksisi quyidagi kabi ko'rinadi:
//     const promise = new Promise(function(resolve, reject) {
//       // promise description
//     })
// Promisedan foydalanish quyidagicha bo'ladi,
// const promise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve("I'm a Promise!");
//   }, 5000);
// }, reject => {

// });

// promise.then(value => console.log(value));

// 52.  Nega sizga promise kerak ?
// Va'dalar asinxron operatsiyalarni bajarish uchun ishlatiladi. Ular qayta qo'ng'iroqlar uchun muqobil yondashuvni taqdim etadilar, bu esa qayta qo'ng'iroqni kamaytirish va toza kodni yozish orqali amalga oshiriladi.

// 53.  Promisening uchta holati nima?
// Promiselarda uchta holatga ega:
// Pending: Bu operatsiya boshlanishidan oldingi va'daning dastlabki holati
// Fullfilled: Bu holat belgilangan operatsiya tugaganligini bildiradi.
// Rejected: Bu holat operatsiya tugallanmaganligini bildiradi. Bunday holda xato qiymati chiqariladi.

// 54.  Callback funktsiyasi nima ?
// Callback funktsiyasi boshqa funktsiyaga argument sifatida o'tkaziladigan funktsiyadir. Bu funksiya amalni bajarish uchun tashqi funksiya ichida chaqiriladi. Callback funksiyasidan qanday foydalanishni oddiy misol qilib olaylik

// function callbackFunction(name) {
//   console.log('Hello ' + name);
// }

// function outerFunction(callback) {
//   let name = prompt('Please enter your name.');
//   callback(name);
// }

// outerFunction(callbackFunction);

// 55.  Nega bizga Callbacklar kerak ?
// Callbacklar kerak, chunki JavaScript voqealarga asoslangan tildir. Bu degani, javobni kutish o'rniga JavaScript boshqa hodisalarni tinglashda ishlashda davom etadi. API chaqiruvini chaqiruvchi birinchi funksiya (setTimeout tomonidan taqlid qilingan) va xabarni qayd qiluvchi keyingi funksiyaga misol keltiraylik.
// function firstFunction(){
//   // Simulate a code delay
//   setTimeout( function(){
//     console.log('First function called');
//   }, 1000 );
// }
// function secondFunction(){
//   console.log('Second function called');
// }
// firstFunction();
// secondFunction();

// Output
// // Second function called
// // First function called
// Natijadan ko'rinib turibdiki, JavaScript birinchi funktsiyaning javobini kutmagan va qolgan kod bloki bajarilgan. Shunday qilib, qayta qo'ng'iroqlar ma'lum kod boshqa kod bajarilishini tugatmaguncha bajarilmasligiga ishonch hosil qilish uchun ishlatiladi.

// 56.  Callback hell nima ?
// Callback hell bir nechta ichki callbacklarga ega bo'lgan anti-naqsh bo'lib, asinxron mantiq bilan ishlashda kodni o'qish va disk raskadrovka qilishni qiyinlashtiradi.Callback helli quyida ko'rinadi,
// async1(function(){
//     async2(function(){
//         async3(function(){
//             async4(function(){
//                 ....
//             });
//         });
//     });
// });

// 57.  Server tomonidan yuborilgan voqealar(event) nima ?
// Server tomonidan yuborilgan voqealar (SSE) - bu serverni surish texnologiyasi(server push) bo'lib, brauzer so'rovga murojaat qilmasdan HTTP ulanishi orqali serverdan avtomatik yangilanishlarni olish imkonini beradi. Bular bir tomonlama aloqa kanali - hodisalar faqat serverdan mijozga o'tadi. Bu Facebook/Twitter yangilanishlarida, aksiyalar narxlari yangilanishlarida, yangiliklar tasmalarida va hokazolarda ishlatilgan.

// 58.  Server tomonidan yuborilgan voqea bildirishnomalarini qanday qabul qilasiz
// EventSource obyekti server tomonidan yuborilgan voqea bildirishnomalarini olish uchun ishlatiladi. Masalan, siz serverdan quyidagi tarzda xabarlar olishingiz mumkin:
// if(typeof(EventSource) !== "undefined") {
//   var source = new EventSource("sse_generator.js");
//   source.onmessage = function(event) {
//     document.getElementById("output").innerHTML += event.data + "<br>";
//   };
// }

// 59.  Server tomonidan yuborilgan voqealar uchun brauzer yordamini qanday tekshirish mumkin ?
// Server tomonidan yuborilgan voqealar uchun brauzerni qo'llab-quvvatlashni quyidagi tarzda ishlatishdan oldin amalga oshirishingiz mumkin,
// if(typeof(EventSource) !== "undefined") {
//   // Server-sent events supported. Let's have some code here!
// } else {
//   // No server-sent events supported}

// 60.  Server yuborilgan voqealar uchun qanday hodisalar mavjud ?
// Quyida server tomonidan yuborilgan voqealar uchun mavjud voqealar roʻyxati keltirilgan

// 61.  Promisening asosiy qoidalari qanday
// Promise muayyan qoidalar to'plamiga amal qilishi kerak,
// .then()Va'da - bu standartga mos keladigan usulni ta'minlovchi ob'ekt
// Kutilayotgan va'da bajarilgan yoki rad etilgan holatga o'tishi mumkin
// Bajarilgan yoki rad etilgan va'da hal qilinadi va u boshqa hech qanday holatga o'tmasligi     kerak.
// Va'da bajarilgandan so'ng, qiymat o'zgarmasligi kerak.

// 62.  Callback dagi callback nima ?
// You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks.

// loadScript('/script1.js', function(script) {
//    console.log('first script is loaded');

//   loadScript('/script2.js', function(script) {

//     console.log('second script is loaded');

//     loadScript('/script3.js', function(script) {

//         console.log('third script is loaded');
//       // after all scripts are loaded
//     });

//   })

// });

// 63.  promise chaining nima ?
// Va'dalar yordamida birin-ketin asinxron vazifalarni bajarish jarayoni va'da zanjiri deb nomlanadi. Yakuniy natijani hisoblash uchun va'da zanjiriga misol keltiraylik,
// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000);

// }).then(function(result) {

//   console.log(result); // 1
//   return result * 2;

// }).then(function(result) {

//   console.log(result); // 2
//   return result * 3;

// }).then(function(result) {

//   console.log(result); // 6
//   return result * 4;

// });
// Yuqoridagi ishlov beruvchilarda natija quyidagi ish oqimi bilan .then() ishlov beruvchilari zanjiriga uzatiladi,
// Dastlabki va'da 1 soniyada hal qilinadi,
// Shundan so'ng .thenishlov beruvchi natijani (1) jurnalga kiritish orqali chaqiriladi va natijada * 2 qiymati bilan va'da qaytariladi.
// Shundan so'ng, qiymat .thennatijani (2) qayd qilish orqali keyingi ishlov beruvchiga o'tdi va natija * 3 bilan va'dani qaytaring.
// Nihoyat, natijani (6) qayd qilish orqali qiymat oxirgi .thenishlov beruvchiga o'tdi va natija * 4 bilan va'dani qaytaring

// 64.  Promise.all nima ?
// Promise.all - bu bir qator va'dalarni kiritish (takrorlash) sifatida qabul qiladigan va'da va u barcha va'dalar hal qilinganda yoki ulardan biri rad etilganda hal qilinadi. Masalan, prod.all usulining sintaksisi quyida keltirilgan,

// Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))

// 65.  Promise race mathoding maqsadi nima ?
// Promise.race() usuli birinchi navbatda hal qilingan yoki rad etilgan va'da namunasini qaytaradi. Keling, race() usulini misol qilib olaylik, bunda birinchi navbatda vad2 hal qilinadi

// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'one');
// });
// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then(function(value) {
//   console.log(value); // "two" // Both promises will resolve, but promise2 is faster
// });

// 66.  Javascriptda qat'iy rejim nima?
// Qattiq rejim - bu ECMAScript 5-dagi yangi xususiyat bo'lib, u sizga dastur yoki funksiyani "qat'iy" operatsion kontekstda joylashtirish imkonini beradi. Shunday qilib, u muayyan harakatlarning bajarilishini oldini oladi va ko'proq istisnolarni keltirib chiqaradi. To'g'ridan-to'g'ri ifoda "use strict";brauzerga javascript kodini qattiq rejimda ishlatishni buyuradi.

// 67.  Nima uchun sizga qattiq rejim kerak?
// Qattiq rejim haqiqiy xatolarga "yomon sintaksis" haqida xabar berib, "xavfsiz" JavaScript kodini yozish uchun foydalidir. Masalan, xatolik yo'li bilan tasodifan global o'zgaruvchini yaratishni bartaraf qiladi va yozilmaydigan xususiyatga, faqat qabul qiluvchi xususiyatga, mavjud bo'lmagan xususiyatga, mavjud bo'lmagan o'zgaruvchiga yoki bo'lmagan xususiyatga tayinlash uchun xatolik chiqaradi. mavjud ob'ekt.

// 68.  Qattiq rejimni qanday e'lon qilasiz
// Qat'iy rejim "qat'iy foydalanish" qo'shilishi bilan e'lon qilinadi; skript yoki funksiya boshiga. Agar skript boshida e'lon qilingan bo'lsa, u global miqyosga ega.
// "use strict";
// x = 3.14; // This will cause an error because x is not declared

// va agar siz funktsiya ichida e'lon qilsangiz, u mahalliy(local) doiraga ega
// x = 3.14;       // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;   // This will cause an error
// }

// 69.  Ikkilamchi undovdan maqsad nima ? (! !)
// Qo'sh undov yoki inkor (!!) natijada turning mantiqiy ekanligini ta'minlaydi. Agar u noto'g'ri bo'lsa (masalan, 0, null, aniqlanmagan va hokazo), u noto'g'ri, aks holda rost bo'ladi. Misol uchun, siz quyidagi ibora yordamida IE versiyasini sinab ko'rishingiz mumkin,

// let isIE8 = false;
// isIE8 = !! navigator.userAgent.match(/MSIE 8.0/);
// console.log(isIE8); // returns true or false
// Agar siz ushbu ifodani ishlatmasangiz, u asl qiymatni qaytaradi.
// console.log(navigator.userAgent.match(/MSIE 8.0/));  // returns either an Array or null
// 70.  Delete operatorining maqsadi nima
// Delete kalit so'zi mulkni va uning qiymatini o'chirish uchun ishlatiladi.
// var user= {name: "John", age:20};
// delete user.age;

// console.log(user); // {name: "John"}

// 71.  Operator turi nima?
// JavaScript o'zgaruvchisining turini topish uchun JavaScript typeof operatoridan foydalanishingiz mumkin. U o'zgaruvchi yoki ifoda turini qaytaradi.
// typeof "John Abraham"     // Returns "string"
// typeof (1 + 2)        // Returns "number"

// 72.  Belgilanmagan xususiyati (undefined prop) nima ?
// Aniqlanmagan xususiyat o'zgaruvchiga qiymat berilmaganligini yoki umuman e'lon qilinmaganligini ko'rsatadi. Aniqlanmagan qiymat turi ham aniqlanmagan.
// var user;    // Value is undefined, type is undefined
// console.log(typeof(user)) //undefined

// Qiymatni noaniq qilib belgilash orqali har qanday o'zgaruvchini bo'shatish mumkin.
// user = undefined
// 73.  Null qiymat nima ?
// Null qiymati har qanday ob'ekt qiymatining ataylab yo'qligini ifodalaydi. Bu JavaScript-ning ibtidoiy qiymatlaridan biridir. Null qiymat turi ob'ekt hisoblanadi. Qiymatni null ga o'rnatish orqali o'zgaruvchini bo'shatish mumkin.
// var user = null;
// console.log(typeof(user)) //object

// 74.  Null va undefined ortasida farq nima ?

// 75.  Eval nima ?
// eval() funktsiyasi satr sifatida taqdim etilgan JavaScript kodini baholaydi. Satr JavaScript ifodasi, o'zgaruvchi, bayonot yoki bayonotlar ketma-ketligi bo'lishi mumkin.
// console.log(eval('1 + 2')); //  3

// 76.  Window va document o'rtasidagi farq nima
// Quyida oyna va hujjat o'rtasidagi asosiy farqlar keltirilgan,

// 77.  Javascriptda tarixga(Js history) qanday kirish mumkin ?
// window.history obyekti brauzer tarixini o'z ichiga oladi. Tarixdagi oldingi va keyingi URL-larni back() va next() usullaridan foydalanib yuklashingiz mumkin.

// function goBack() {
//   window.history.back()
// }
// function goForward() {
//   window.history.forward()
// }

// 78.  Caps lock tugmasi yoqilgan yoki yo'qligini qanday aniqlash mumkin ?
// Belgilangan mouseEvent getModifierState()modifikator kaliti faollashtirilgan yoki yoqilmaganligini ko'rsatadigan mantiqiy qiymatni qaytarish uchun ishlatiladi. CapsLock, ScrollLock va NumLock kabi modifikatorlar bosilganda faollashadi va yana bosilganda o'chiriladi.
// Misol bilan CapsLock-ni yoqish/o'chirish harakatini aniqlash uchun kirish elementini olaylik,

//     <input type="password" onmousedown="enterInput(event)">

//     <p id="feedback"></p>

//     <script>
//     function enterInput(e) {
//       var flag = e.getModifierState("CapsLock");
//       if(flag) {
//           document.getElementById("feedback").innerHTML = "CapsLock activated";

//       } else {
//           document.getElementById("feedback").innerHTML = "CapsLock not activated";
//       }
//     }
//     </script>

// 79.  NaN nima ?
// isNaN() funksiyasi qiymat noqonuniy son (Not-a-Number) yoki yoʻqligini aniqlash uchun ishlatiladi. ya'ni, agar qiymat NaN ga teng bo'lsa, bu funktsiya true ni qaytaradi. Aks holda u false qaytaradi.
// isNaN('Hello') //true
// isNaN('100') //false

// 80.  E'lon qilinmagan va aniqlanmagan o'zgaruvchilar o'rtasidagi farqlar qanday

// 81.  Global o'zgaruvchilar nima ?
// Global o'zgaruvchilar kodning butun uzunligi bo'ylab hech qanday qamrovsiz mavjud bo'lganlardir. var kalit so'zi mahalliy o'zgaruvchini e'lon qilish uchun ishlatiladi, lekin agar uni o'tkazib yuborsangiz, u global o'zgaruvchiga aylanadi.

// msg = "Hello" // var is missing, it becomes global variable

// 82.  Global o'zgaruvchilar bilan qanday muammolar mavjud ?
// Global o'zgaruvchilar bilan bog'liq muammo mahalliy va global miqyosdagi o'zgaruvchilar nomlarining ziddiyatidir. Global o'zgaruvchilarga tayanadigan kodni disk raskadrovka qilish va sinab ko'rish ham qiyin.

// 83.  NaN property nima ?
// NaN xususiyati global xususiyat bo'lib, "Raqam emas" qiymatini ifodalaydi. ya'ni, bu qiymat qonuniy raqam emasligini bildiradi. NaN ni dasturda ishlatish juda kam uchraydi, lekin uni bir necha hollarda qaytarish qiymati sifatida ishlatish mumkin
// Math.sqrt(-1)
// parseInt("Hello")

// 84.  isFinite funksiyasining maqsadi nima
// isFinite() funksiyasi sonning cheklangan, qonuniy son ekanligini aniqlash uchun ishlatiladi. Qiymat +infinity, -infinity yoki NaN (Not-a-Number) bo'lsa, u noto'g'ri, aks holda u haqiqatni qaytaradi.
// isFinite(Infinity);  // false
// isFinite(NaN);       // false
// isFinite(-Infinity); // false

// isFinite(100);         // true

// 85.  Hodisalar oqimi (event flow) nima  ?
// Voqealar oqimi - veb-sahifada voqea qabul qilish tartibi. Turli xil boshqa elementlarga joylashtirilgan elementni bosganingizda, bosishingiz oʻz manziliga yoki maqsad elementiga yetib borgunga qadar, u global oyna obyekti bilan yuqoridan boshlab, birinchi navbatda, har bir asosiy element uchun bosish hodisasini ishga tushirishi kerak. Voqealar oqimining ikki yo'li mavjud
// Yuqoridan pastga (hodisani suratga olish)
// Pastdan tepaga (voqea ko‘pirish)

// 86.  Event bubbling nima ?
// Voqealar ko'piklanishi - bu hodisa tarqalishining bir turi bo'lib, unda hodisa birinchi navbatda eng ichki maqsad elementida ishga tushadi, so'ngra eng tashqi DOM elementiga yetguncha bir xil joylashtirish ierarxiyasidagi maqsad elementning ajdodlarida (ota-onalarida) ketma-ket ishga tushadi.

// 87.  Event capturing nima ?
// Voqealarni suratga(event capturing) olish - hodisani tarqatishning bir turi bo'lib, unda hodisa birinchi navbatda eng tashqi element tomonidan ushlanib, so'ngra eng ichki DOM elementiga yetguncha bir xil joylashtirish ierarxiyasidagi maqsadli elementning avlodlarida (bolalarida) ketma-ket ishga tushadi.

// 88.  Form JavaScript yordamida qanday yuborasiz
// document.forms[0].submit() dan foydalanib ariza yuborishingiz mumkin. Shaklga kiritilgan barcha ma'lumotlar onsubmit voqea ishlov beruvchisi yordamida yuboriladi
// function submit() {
//     document.forms[0].submit();
// }

// 89.  Operatsion tizim tafsilotlari(operating system details
// ) ni  qanday topish mumkin
// window.navigator ob'ekti tashrif buyuruvchi brauzerining OS tafsilotlari haqidagi ma'lumotlarni o'z ichiga oladi. Ba'zi OS xususiyatlari platforma mulki ostida mavjud,
// console.log(navigator.platform);

// 90.  Document load va DOMContentLoaded hodisalari o'rtasidagi farq nima?
// Hodisa DOMContentLoaded boshlang'ich HTML hujjati to'liq yuklangan va tahlil qilinganda, aktivlar (uslublar jadvallari, tasvirlar va pastki ramkalar) yuklashni tugatilishini kutmasdan ishga tushiriladi. Holbuki, load hodisasi butun sahifa, shu jumladan barcha bog'liq manbalar (uslublar jadvallari, tasvirlar) yuklanganda ishga tushiriladi.

// 91.  Mahalliy(native
// ), host va foydalanuvchi ob'ektlari(user objects) o'rtasidagi farq nima ?
// Native objects ECMAScript spetsifikatsiyasi bilan belgilangan JavaScript tilining bir qismi bo'lgan ob'ektlardir. Masalan, ECMAScript spetsifikatsiyasida belgilangan String, Math, RegExp, Object, Function va hokazo asosiy ob'ektlar. Host objectsbrauzer yoki ish vaqti muhiti (tugun) tomonidan taqdim etilgan ob'ektlardir. Masalan, window, XmlHttpRequest, DOM tugunlari va boshqalar xost ob'ektlari sifatida qabul qilinadi. User objectsjavascript kodida belgilangan ob'ektlardir. Masalan, profil ma'lumotlari uchun yaratilgan Foydalanuvchi ob'ektlari.

// 92.  JavaScript kodini tuzatish(debugging) uchun qanday vositalar yoki usullar qo'llaniladi
// Javascriptni nosozliklarni tuzatish uchun quyidagi vositalar yoki usullardan foydalanishingiz mumkin
// Chrome Devtools
// debugger statement
// Good old console.log statement

// 93.  Promise da callback funksiya ishlatishni qanday ijobiy va salbiy tomonlari bor

// Ijobiy:
// Bu unreadable callback hell ni olidini oladi
// .then() bilan ketma-ket asinxron kodni yozish oson.
// Promise.all() bilan parallel asinxron kodni yozish oson.
// Bazi bir odatiy callback bilan boladigan muamolarni  yechadi (callbackni kech chaqirish , erta chaqirish , kop marotaba chaqirishlikni oldini oladi)
// Kamchiliklari:
// U ozgina murakkab kod yaratadi
// ES6 qo'llab-quvvatlanmasa, polyfillyuklashingiz kerak

// 94.  Atribut va xususiyat(property) o'rtasidagi farq nima ?
// Atributlar HTML belgilashda, xususiyatlar esa DOMda aniqlanadi. Masalan, quyidagi HTML elementi 2 ta atribut turi va qiymatiga ega,

// <input type="text" value="Name:">

// Quyidagi kabi atribut qiymatini olishingiz mumkin,

// const input = document.querySelector('input');
// console.log(input.getAttribute('value')); // Good morning
// console.log(input.value); // Good morning

// Va matn maydonining qiymatini "Good night" ga o'zgartirganingizdan so'ng, u shunday bo'ladi

// console.log(input.getAttribute('value')); // Good morning
// console.log(input.value); // Good evening

// 95.  Bir xil kelib chiqish siyosati (same-origin policy) nima ?
// Bir xil kelib chiqish siyosati JavaScript-ni domen chegaralari bo'ylab so'rovlar qilishiga to'sqinlik qiluvchi siyosatdir. Boshlanish URI sxemasi, xost nomi va port raqamining kombinatsiyasi sifatida aniqlanadi. Agar siz ushbu siyosatni yoqsangiz, u Document Object Model (DOM) yordamida bir sahifadagi zararli skriptning boshqa veb-sahifadagi maxfiy maʼlumotlarga kirishini oldini oladi.

// 96.  Void 0 ning maqsadi nima ?
// Void(0) sahifani yangilanishini oldini olish uchun ishlatiladi. Bu kiruvchi nojo'ya ta'sirni bartaraf etishda foydali bo'ladi, chunki u aniqlanmagan ibtidoiy qiymatni qaytaradi. U odatda href="JavaScript:Void(0);" ishlatadigan HTML hujjatlari uchun ishlatiladi. <a>element ichida . ya'ni havolani bosganingizda brauzer yangi sahifani yuklaydi yoki xuddi shu sahifani yangilaydi. Ammo bu ibora yordamida bu xatti-harakatning oldini oladi. Masalan, quyidagi havola sahifani qayta yuklamasdan xabarni bildiradi
// <a href="JavaScript:void(0);" onclick="alert('Well done!')">Click Me!</a>

// 97.  JavaScript kompilyatsiya qilingan yoki tarjima qilingan tilmi?
// JavaScript kompilyatsiya qilingan til emas, balki talqin qilinadigan tildir. Brauzerdagi tarjimon JavaScript kodini o'qiydi, har bir satrni sharhlaydi va uni ishga tushiradi. Hozirgi vaqtda zamonaviy brauzerlar JavaScript-ni ishga tushirish arafasida bajariladigan bayt-kodga kompilyatsiya qiladigan Just-In-Time (JIT) kompilyatsiyasi deb nomlanuvchi texnologiyadan foydalanadilar

// 98.  Js case-sensitive (katta va kichik hariflarni farqalydigan ) tilmi ?
// Ha, JavaScript katta-kichik harflarga sezgir tildir. Til kalit so'zlari, o'zgaruvchilar, funksiya va ob'ekt nomlari va boshqa identifikatorlar har doim harflarning izchil bosh harflari bilan kiritilishi kerak.

// 99.  Java va JavaScript o'rtasida bog'liqlik bormi?
// Yo'q, ular butunlay ikki xil dasturlash tillari va bir-biriga hech qanday aloqasi yo'q. Ammo ularning ikkalasi ham ob'ektga yo'naltirilgan dasturlash tillari va boshqa ko'plab tillar singari, ular asosiy funktsiyalar uchun o'xshash sintaksisga amal qiladilar (agar, boshqacha, uchun, o'tish, buzish, davom ettirish va hokazo).

// 100.  Events nima ?
// Hodisalar HTML elementlari bilan sodir bo'ladigan "narsalar"dir. HTML sahifalarida JavaScript ishlatilsa, JavaScript reactbu hodisalarda ham bo'lishi mumkin. HTML hodisalariga ba'zi misollar:
// Veb-sahifa yuklash tugallandi
// Kirish maydoni o'zgartirildi
// Tugma bosildi
// Keling, tugma elementi uchun bosish hodisasining harakatini tasvirlaylik,
// <!doctype html>
// <html>
//  <head>
//    <script>
//      function greeting() {
//        alert('Hello! Good morning');
//      }
//    </script>
//  </head>
//  <body>
//    <button type="button" onclick="greeting()">Click me</button>
//  </body>
// </html>

//  101.  Javascriptni kim yaratgan ?
// JavaScript Brendan Eich tomonidan 1995 yilda Netscape Communications kompaniyasida ishlagan vaqtida yaratilgan. Dastlab u nomi ostida ishlab chiqilgan , ammo keyinchalik Netscape-ning beta-versiyalarida birinchi marta yuborilganida, Mochatil rasmiy ravishda nomlangan .LiveScript

// 102.  preventDefault usuli qanday holatda ishlatiladi ?
// preventDefault() usuli, agar u bekor qilinadigan bo'lsa, hodisani bekor qiladi, ya'ni hodisaga tegishli bo'lgan standart harakat yoki xatti-harakatlar sodir bo'lmaydi. Masalan, “Yuborish” tugmasini bosganingizda shaklni yuborishni oldini olish va giperhavolani bosganda sahifaning URL manzilini ochishning oldini olish keng tarqalgan foydalanish holatlaridir.

// document.getElementById("link").addEventListener("click", function(event){
//  event.preventDefault();
// });

// 103.  StopPropagation usuli qanday holatda ishlatiladi ?
// StopPropagation usuli hodisaning hodisalar zanjirida ko'payishini to'xtatish uchun ishlatiladi. Misol uchun, stopPropagation usuli bilan quyida joylashgan ichki divlar ichki o'rnatilgan div(Div1) ni bosganda standart hodisa tarqalishini oldini oladi.
// <p>Click DIV1 Element</p>
// <div onclick="secondFunc()">DIV 2
//   <div onclick="firstFunc(event)">DIV 1</div>
// </div>

// <script>
// function firstFunc(event) {
//   alert("DIV 1");
//   event.stopPropagation();
// }

// function secondFunc() {
//   alert("DIV 2");
// }
// </script>

// 104.  Noto'g'ri foydalanishni qaytarish uchun qanday qadamlar mavjud ?
// Hodisa ishlov beruvchilarida noto'g'ri xabarni qaytarish quyidagi amallarni bajaradi:
// Avval u brauzerning standart harakatini yoki harakatini to'xtatadi.
// Bu hodisaning DOMni targ'ib qilishiga to'sqinlik qiladi
// Qayta callback bajarishni to'xtatadi va chaqirilganda darhol qaytadi.

// 105.  BOM nima ?
// Brauzer obyekti modeli (BOM) JavaScript-ga brauzer bilan “suhbatlashish” imkonini beradi. U navigator, tarix, ekran, joylashuv va oynaning bolalari bo'lgan hujjatdan iborat. Brauzer ob'ekt modeli standartlashtirilmagan va turli brauzerlar asosida o'zgarishi mumkin.

// 106.  setTimeout dan qanday foydalanish kerak
// setTimeout() usuli funktsiyani chaqirish yoki belgilangan millisekundlardan keyin ifodani baholash uchun ishlatiladi. Masalan, setTimeout usuli yordamida 2 soniyadan so'ng xabarni tizimga kiritamiz,
// setTimeout(function(){ console.log("Good morning"); }, 2000);

// 107.  setInterval nimadan foydalaniladi
// setInterval() usuli funksiyani chaqirish yoki ifodani belgilangan oraliqlarda (millisekundlarda) baholash uchun ishlatiladi. Masalan, setInterval usuli yordamida 2 soniyadan so'ng xabarni tizimga kiritamiz,
// setInterval(function(){ console.log("Good morning"); }, 2000);

// 108.  Nima uchun JavaScript yagona Ipli (Single threaded
// ) deb hisoblanadi
// JavaScript - bu bitta oqimli til. Chunki til spetsifikatsiyasi dasturchiga kod yozishga imkon bermaydi, shunda tarjimon uning qismlarini bir nechta ip yoki jarayonlarda parallel ravishda ishga tushirishi mumkin. Holbuki, java, go, C++ kabi tillar ko'p bosqichli va ko'p jarayonli dasturlarni yaratishi mumkin

// 109.  Tadbir delegatsiyasi(event delegation) nima ?
// Voqealar delegatsiyasi - bu voqealarni tinglash usuli bo'lib, unda siz asosiy elementni uning ichida sodir bo'ladigan barcha voqealar uchun tinglovchi sifatida topshirasiz.
// Misol uchun, agar siz ma'lum bir shakl ichidagi maydon o'zgarishlarini aniqlamoqchi bo'lsangiz, voqea delegatsiyasi texnikasidan foydalanishingiz mumkin,
// var form = document.querySelector('#registration-form');

// // Listen for changes to fields inside the form
// form.addEventListener('input', function (event) {

// // Log the field that was changed
// console.log(event.target);

// }, false);

// 110.  ECMAScript nima ?
// ECMAScript JavaScript asosini tashkil etuvchi skript tilidir. ECMAScript ECMA xalqaro standartlar tashkiloti tomonidan ECMA-262 va ECMA-402 spetsifikatsiyalarida standartlashtirilgan. ECMAScript ning birinchi nashri 1997 yilda chiqarilgan.

// 111.  JSON nima ?
// JSON (JavaScript Object Notation) - bu ma'lumotlarni almashish uchun ishlatiladigan engil format. U JavaScript-da ob'ektlarni qurish usulida JavaScript tilining kichik to'plamiga asoslangan.

// 112.  JSON sintaksisi qoidalari qanday?
// Quyida JSON sintaksisi qoidalari ro'yxati keltirilgan
// Ma'lumotlar nom/qiymat juftliklarida
// Ma'lumotlar vergul bilan ajratiladi
// Jingalak qavslar narsalarni ushlab turadi
// Kvadrat qavslar massivlarni ushlab turadi

// 113.  JSON stringify nima maqsadda foydalaniladi ?
// Veb-serverga ma'lumotlarni yuborishda ma'lumotlar string formatida bo'lishi kerak. Bunga JSON obyektini stringify() usuli yordamida satrga aylantirish orqali erishishingiz mumkin.

// var userJSON = {'name': 'John', age: 31}
// var userString = JSON.stringify(user);
// console.log(userString); //"{"name":"John","age":31}"

// 114.  JSON string ni qanday tahlil(parse) qilasiz
// Veb-serverdan ma'lumotlarni qabul qilishda ma'lumotlar har doim string formatida bo'ladi. Lekin bu satr qiymatini parse() usuli yordamida JavaScript obyektiga aylantirishingiz mumkin.
// var userString = '{"name":"John","age":31}';
// var userJSON = JSON.parse(userString);
// console.log(userJSON);// {name: "John", age: 31}

// 115.  Nima uchun sizga JSON kerak ?
// Brauzer va server o'rtasida ma'lumot almashishda ma'lumotlar faqat matn bo'lishi mumkin. JSON faqat matn bo'lgani uchun uni serverga va serverdan osongina yuborish va istalgan dasturlash tili tomonidan ma'lumotlar formati sifatida foydalanish mumkin.

// 116.  PWA nima ?
// Progressiv veb-ilovalar (PWA) HTML, CSS va JavaScript-ni o'z ichiga olgan umumiy veb-texnologiyalar yordamida yaratilgan, veb orqali yetkazib beriladigan mobil ilova turidir. Ushbu PWA'lar serverlarga joylashtiriladi, URL manzillari orqali kirish mumkin va qidiruv tizimlari tomonidan indekslanadi.

// 117.  clearTimeout usulining ishlatish maqsadi nima
// ClearTimeout() funksiyasi javascriptda setTimeout() funktsiyasi tomonidan o'rnatilgan vaqt tugashini o'chirish uchun ishlatiladi. ya'ni, setTimeout() funksiyasining qaytish qiymati o'zgaruvchida saqlanadi va taymerni tozalash uchun clearTimeout() funksiyasiga o'tkaziladi.
// Masalan, quyidagi setTimeout usuli xabarni 3 soniyadan keyin ko'rsatish uchun ishlatiladi. Bu vaqt tugashi clearTimeout() usuli bilan tozalanishi mumkin.
// <script>
// var msg;
// function greeting() {
//    alert('Good morning');
// }
// function start() {
//   msg =setTimeout(greeting, 3000);

// }

// function stop() {
//     clearTimeout(msg);
// }
// </script>

// 118.  ClearInterval usulidan maqsad nima ?
// ClearInterval() funksiyasi javascriptda setInterval() funktsiyasi tomonidan o'rnatilgan intervalni tozalash uchun ishlatiladi. ya'ni, setInterval() funktsiyasi tomonidan qaytarilgan qiymat o'zgaruvchida saqlanadi va intervalni tozalash uchun clearInterval() funksiyasiga o'tkaziladi.
// Masalan, har 3 soniyada xabarni ko'rsatish uchun quyidagi setInterval usuli qo'llaniladi. Ushbu intervalni clearInterval() usuli bilan tozalash mumkin.
// <script>
// var msg;
// function greeting() {
//    alert('Good morning');
// }
// function start() {
//   msg = setInterval(greeting, 3000);

// }

// function stop() {
//     clearInterval(msg);
// }
// </script>

// 119.  Javascriptda yangi sahifani qanday yo’naltirish mumkin ?
// Location Vanilla JavaScript-da siz oyna ob'ektining xususiyatidan foydalanib, yangi sahifaga yo'naltirishingiz mumkin . Sintaksis quyidagicha bo'ladi:

// function redirect() {
//    window.location.href = 'newPage.html';
// }

// 120.  Stringda substring mavjudligini qanday tekshirish mumkin
// Satrda pastki satr bor yoki yo'qligini tekshirishning 3 ta mumkin bo'lgan usuli mavjud,
// Foydalanish quyidagilarni o'z ichiga oladi: ES6 tomonidan taqdim etilgan String.prototype.includes qatorni sinash uchun pastki qator mavjud
// var mainString = "hello", subString = "hell";
// mainString.includes(subString)

// indexOf dan foydalanish: ES5 yoki undan kattaroq muhitda siz String.prototype.indexOfpastki qator indeksini qaytaradiganidan foydalanishingiz mumkin. Agar indeks qiymati -1 ga teng bo'lmasa, bu pastki satr asosiy satrda mavjudligini anglatadi.
// var mainString = "hello", subString = "hell";
// mainString.indexOf(subString) !== -1
// RegEx dan foydalanish: Kengaytirilgan yechim muntazam ifodalarni sinovdan o'tkazish usulidan ( RegExp.test) foydalanadi, bu oddiy iboralarga qarshi test qilish imkonini beradi.
// var mainString = "hello", regex = /hell/;
// regex.test(mainString)

// 121.  Javascriptda elektron pochtani qanday tekshirish mumkin
// Oddiy iboralar yordamida JavaScript-da elektron pochta xabarini tasdiqlashingiz mumkin. Tasdiqlashlarni mijoz tomoni o'rniga server tomonida qilish tavsiya etiladi. Chunki javascript mijoz tomonida o'chirib qo'yilishi mumkin.

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// 122.  Joriy urlni javascript bilan qanday olish mumkin?
// Window.location.href Joriy url yo'lini olish uchun ifodadan foydalanishingiz mumkin va URLni yangilash uchun ham xuddi shu ifodadan foydalanishingiz mumkin . Siz document.URL faqat o'qish uchun ham foydalanishingiz mumkin, ammo bu yechim FFda muammolarga ega.

// console.log('location.href', window.location.href); // Returns full URL

// 123.  Joylashuv obyektining turli url xususiyatlari qanday
// Quyidagi Location obyekt xususiyatlari sahifaning URL komponentlariga kirish uchun ishlatilishi mumkin,
// href - butun URL
// protokol - URL manzilining protokoli
// xost - URL manzilining xost nomi va porti
// hostname - URL manzilining xost nomi
// port - URL manzilidagi port raqami
// pathname - URL manzilining yo'l nomi
// qidiruv - URLning so'rov qismi
// xesh - URLning langar qismi

// 124.  Javascriptda so'rovlar qatori qiymatlarini qanday olish mumkin
// Javascriptda so'rovlar qatori qiymatlarini olish uchun URLSearchParams dan foydalanishingiz mumkin. URL so'rovlar qatoridan mijoz kodi qiymatini olish uchun misolni ko'rib chiqaylik,

// const urlParams = new URLSearchParams(window.location.search);
// const clientCode = urlParams.get('clientCode');

// 125.  Ob'ektda kalit(key) mavjudligini qanday tekshirish mumkin
// Ob'ektda kalit mavjudligi yoki yo'qligini uchta yondashuv yordamida tekshirishingiz mumkin,
// Operatordan foydalanish: ob'ektda kalit mavjudmi yoki yo'qmi, in operatoridan foydalanishingiz mumkin
// "key" in obj
// Agar kalit mavjud emasligini tekshirishni istasangiz, qavsdan foydalanishni unutmang,
//  !("key" in obj)
// hasOwnProperty usulidan foydalanish: Siz hasOwnPropertyob'ekt namunasining xususiyatlarini (va meros qilib olingan xususiyatlarni emas) ayniqsa sinab ko'rish uchun foydalanishingiz mumkin.
// obj.hasOwnProperty("key") // true
// Aniqlanmagan taqqoslashdan foydalanish: Agar ob'ektdan mavjud bo'lmagan xususiyatga kirsangiz, natija aniqlanmagan. Mulkning mavjudligini aniqlash uchun xususiyatlarni undefined bilan solishtiramiz.
// const user = {
//   name: 'John'
// };

// console.log(user.name !== undefined);     // true
// console.log(user.nickName !== undefined); // false

// 126.  Javascript ob'ektini qanday aylantirasiz(loop) yoki sanab o'tasiz
// For-in Javascript ob'ekti bo'ylab aylanish uchun tsikldan foydalanishingiz mumkin . Shuningdek, siz olgan kalit ob'ektning haqiqiy mulki ekanligiga va prototipdan foydalanish hasOwnProperty usulidan kelib chiqmasligiga ishonch hosil qilishingiz mumkin.
// var object = {
//     "k1": "value1",
//     "k2": "value2",
//     "k3": "value3"
// };

// for (var key in object) {
//     if (object.hasOwnProperty(key)) {
//         console.log(key + " -> " + object[key]); // k1 -> value1 ...
//     }
// }

// 127.  Bo'sh ob'ektni qanday sinab ko'rasiz ?
// ECMAScript versiyalariga asoslangan turli xil echimlar mavjud
// Ob'ekt yozuvlaridan foydalanish (ECMA 7+): Siz konstruktor turi bilan birga ob'ekt yozuvlari uzunligidan foydalanishingiz mumkin.
// Object.entries(obj).length === 0 && obj.constructor === Object // Since date object length is 0, you need to check constructor check as well

// Ob'ekt tugmalaridan foydalanish (ECMA 5+): Siz konstruktor turi bilan birga ob'ekt tugmachalari uzunligidan foydalanishingiz mumkin.

// Object.keys(obj).length === 0 && obj.constructor === Object // Since date object length is 0, you need to check constructor check as well

// hasOwnProperty (Pre-ECMA 5) bilan for-in dan foydalanish: hasOwnProperty bilan birga for-in tsiklidan foydalanishingiz mumkin.

// function isEmpty(obj) {
//   for(var prop in obj) {
//     if(obj.hasOwnProperty(prop)) {
//       return false;
//     }
//   }

//   return JSON.stringify(obj) === JSON.stringify({});
// }

// 128.  Argumentlar obyekti nima ?
// Argumentlar obyekti funksiyalar ichida foydalanish mumkin boʻlgan massivga oʻxshash obyekt boʻlib, u funksiyaga uzatilgan argumentlar qiymatlarini oʻz ichiga oladi. Masalan, sum funktsiyasi ichida argumentlar ob'ektidan qanday foydalanishni ko'rib chiqamiz,

// function sum() {
//     var total = 0;
//     for (var i = 0, len = arguments.length; i < len; ++i) {
//         total += arguments[i];
//     }
//     return total;
// }

// sum(1, 2, 3) // returns 6

// 129.  Qanday qilib satrning birinchi harfini katta harf bilan yozish mumkin ?
// Siz bosh harfdagi birinchi harf bilan satr yaratish uchun charAt, toUpperCase va slice usullari kabi qator usullardan foydalanadigan funksiya yaratishingiz mumkin.

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// 130.  For loopning qanday ijobiy va salbiy tomonlari bor
// For-loop javascriptda tez-tez ishlatiladigan iteratsiya sintaksisidir. Buning ham ijobiy, ham salbiy tomonlari bor
// Taroziga soling
// Har qanday muhitda ishlaydi
// Siz tanaffus(break) va davom(continue) etish oqimini boshqarish bayonotlaridan foydalanishingiz mumkin
// Kamchiliklari
// Juda batafsil
// Imperativ
// Siz bir martalik xatolarga duch kelishingiz mumkin

// 131.  Joriy sanani javascriptda qanday ko'rsatasiz
// new Date()Joriy sana va vaqtni o'z ichiga olgan yangi Sana ob'ektini yaratish uchun foydalanishingiz mumkin . Masalan, joriy sanani mm/dd/yyyy da ko'rsatamiz

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

// 132.  Ikki sana ob'ektini qanday solishtirasiz
// Taqqoslash operatorlari (==, !=, === va !== operatorlari) oʻrniga sana qiymatlarini solishtirish uchun date.getTime() usulidan foydalanishingiz kerak.

// var d1 = new Date();
// var d2 = new Date(d1);
// console.log(d1.getTime() === d2.getTime()); //True
// console.log(d1 === d2); // False

// 133.  Satrning boshqa satr bilan boshlanishini qanday tekshirish mumkin

// String.prototype.startsWith()Satrning boshqa satr bilan boshlanishi yoki boshlanmasligini tekshirish uchun ECMAScript 6 usulidan foydalanishingiz mumkin . Ammo u hali barcha brauzerlarda qo'llab-quvvatlanmaydi. Keling, ushbu foydalanishni ko'rish uchun misolni ko'rib chiqaylik,
// "Good morning".startsWith("Good"); // true
// "Good morning".startsWith("morning"); // false

// 134.  Javascriptda satrni(string) qanday kesish mumkin
// JavaScript satrning boshida yoki oxirida mavjud bo'lgan bo'shliqlarni kesish uchun satr turlari bo'yicha kesish usulini taqdim etdi.
// "  Hello World   ".trim(); //Hello World
// Agar brauzeringiz (<IE9) bu usulni qo'llab-quvvatlamasa, quyida polyfilldan foydalanishingiz mumkin.
// if (!String.prototype.trim) {
//     (function() {
//         // Make sure we trim BOM and NBSP
//         var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
//         String.prototype.trim = function() {
//             return this.replace(rtrim, '');
//         };
//     })();
// }

// 135.  Javascriptda kalit , qiymat juftligini qanday qo'shasiz
// Ob'ektga yangi xususiyatlar qo'shishning ikkita mumkin bo'lgan echimi mavjud. Ushbu yechimlarni tushuntirish uchun oddiy ob'ektni olaylik
// var object = {
//     key1: value1,
//     key2: value2
// };
// .Nuqta belgilaridan foydalanish: Bu yechim xususiyat nomini bilganingizda foydalidir
// object.key3 = "value3";

// Kvadrat qavs belgisidan foydalanish: Bu yechim xususiyat nomi dinamik ravishda aniqlanganda foydalidir.  obj["key3"] = "value3";

// 136.  !-- belgisi maxsus operatorni ifodalaydi
// Yo'q, bu maxsus operator emas. Ammo bu birin-ketin ikkita standart operatorning kombinatsiyasi,
// Mantiqiy emas (!)
// Prefiksning kamayishi (--)
// Avvaliga qiymat bittaga kamaydi, so'ngra haqiqat/noto'g'ri qiymatni aniqlash uchun nolga teng yoki yo'qligini tekshirish uchun sinovdan o'tkazildi.
// 137.  O'zgaruvchilarga standart qiymatlarni qanday belgilash mumkin
// ||Standart qiymatni berish uchun tayinlash ifodasida mantiqiy yoki operatordan foydalanishingiz mumkin . Sintaksis quyidagi kabi ko'rinadi,

// ||Standart qiymatni berish uchun tayinlash ifodasida mantiqiy yoki operatordan foydalanishingiz mumkin . Sintaksis quyidagi kabi ko'rinadi,

// Yuqoridagi ifodaga ko'ra, "a" o'zgaruvchisi "b" noto'g'ri bo'lsa (agar null, noto'g'ri, aniqlanmagan, 0, bo'sh satr yoki NaN bo'lsa), aks holda "a" o'zgaruvchisi "c" qiymatini oladi. "b" qiymati.

// 138.  Ko'p qatorli satrlarni qanday aniqlash mumkin
// Siz “\” belgisidan keyin qator terminatori yordamida koʻp qatorli satr harflarini belgilashingiz mumkin.
// var str = "This is a \
// very lengthy \
// sentence!";
// Ammo "\" belgisidan keyin bo'sh joy bo'lsa, kod aynan bir xil ko'rinadi, lekin u SyntaxErrorni keltirib chiqaradi.

// 139.  Ilova qobig'i(app shell) modeli nima
// Ilova qobig'i (yoki ilovalar qobig'i) arxitekturasi mahalliy ilovalarda ko'rganingiz kabi foydalanuvchilaringiz ekraniga ishonchli va bir zumda yuklanadigan Progressive Web ilovasini yaratish usullaridan biridir. Bu tarmoqsiz ekranga dastlabki HTML-ni tezda olish uchun foydalidir.

// 140.  Funktsiyalar uchun xususiyatlarni aniqlay olamizmi?
// Ha, biz funktsiyalar uchun xususiyatlarni belgilashimiz mumkin, chunki funktsiyalar ham ob'ektlardir.
// fn = function(x) {
//    //Function code goes here
// }

// fn.name = "John";

// fn.profile = function(y) {
//   //Profile code goes here
// }

// 141.  Funksiya kutayotgan parametrlar sonini qanday usul bilan topish mumkin ?
// Function.length Funksiya kutayotgan parametrlar sonini topish uchun sintaksisdan foydalanishingiz mumkin . sumKeling , raqamlar yig'indisini hisoblash uchun funktsiyaga misol keltiraylik

// function sum(num1, num2, num3, num4){
//     return num1 + num2 + num3 + num4;
// }
// sum.length // 4 is the number of parameters expected.

// 142.  Polifill nima ?
// Polyfill - bu uni qo'llab-quvvatlamaydigan eski brauzerlarda zamonaviy funksiyalarni ta'minlash uchun ishlatiladigan JS kodining bir qismi. Masalan, Silverlight plaginining polyfill dasturidan Microsoft Internet Explorer 7 da HTML Canvas elementining funksionalligini taqlid qilish uchun foydalanish mumkin.

// 143.  Tanaffus(break) va davom(continue) iboralari nima
// Break iborasi tsikldan “sakrab chiqish” uchun ishlatiladi. ya'ni, tsiklni buzadi va tsikldan keyin kodni bajarishda davom etadi.
// for (i = 0; i < 10; i++) {
//   if (i === 5) { break; }
//   text += "Number: " + i + "<br>";
// }

// Davom etish iborasi tsikldagi bir iteratsiyadan "sakrab o'tish" uchun ishlatiladi. ya'ni, agar belgilangan shart yuzaga kelsa, u bir iteratsiyani (siklda) buzadi va tsikldagi keyingi iteratsiya bilan davom etadi.
// for (i = 0; i < 10; i++) {
//     if (i === 5) { continue; }
//     text += "Number: " + i + "<br>";
// }

// 144.  Js yorliqlari(js label) nima ?
// Yorliq bayonoti bizga JavaScript-da tsikllar va bloklarni nomlash imkonini beradi. Keyin biz ushbu teglardan kodga keyinroq murojaat qilish uchun foydalanishimiz mumkin. Masalan, yorliqli quyidagi kod raqamlar bir xil bo'lganda chop etishdan saqlaydi,

// var i, j;
// loop1:
// for (i = 0; i < 3; i++) {
//    loop2:
//    for (j = 0; j < 3; j++) {
//       if (i === j) {
//          continue loop1;
//       }
//       console.log('i = ' + i + ', j = ' + j);
//    }
// }

// // Output is:
// //   "i = 1, j = 0"
// //   "i = 2, j = 0"
// //   "i = 2, j = 1"

// 145.  Deklaratsiyalarni yuqorida saqlashning qanday afzalliklari bor
// Barcha deklaratsiyalarni har bir skript yoki funksiyaning yuqori qismida saqlash tavsiya etiladi. Buni amalga oshirishning afzalliklari,

// Tozaroq kod beradi
// Bu mahalliy o'zgaruvchilarni qidirish uchun yagona joyni ta'minlaydi
// Keraksiz global o'zgaruvchilardan qochish oson
// Bu istalmagan qayta deklaratsiyalar ehtimolini kamaytiradi

// 146.  O'zgaruvchilarni ishga tushirishning(initialize) qanday afzalliklari bor
// Quyidagi imtiyozlar tufayli o'zgaruvchilarni ishga tushirish tavsiya etiladi,

//  iqlanmagan qiymatlardan saqlaning
// U o'zgaruvchilarni ishga tushirish uchun yagona joyni taqdim etadi
// Kodda aniqlanmagan qiymatlardan saqlaning

// 147.  Yangi ob'ekt yaratish uchun qanday tavsiyalar mavjud
// dan foydalangan holda yangi ob'ektlar yaratishdan qochish tavsiya etiladi new Object(). Buning o'rniga ob'ektlarni yaratish uchun uning turiga qarab qiymatlarni ishga tushirishingiz mumkin.

// new Object() oʻrniga {} ni belgilang
// new String() o'rniga "" belgilang
// Yangi raqam o'rniga 0 belgilang()
// new Boolean() oʻrniga yolgʻonni belgilang
// Yangi Array() oʻrniga [] ni belgilang
// Yangi RegExp() oʻrniga /()/ ni belgilang
// Yangi Function() oʻrniga (){} funksiyasini tayinlang

// Siz ularni misol sifatida belgilashingiz mumkin,
// var v1 = {};
// var v2 = "";
// var v3 = 0;
// var v4 = false;
// var v5 = [];
// var v6 = /()/;
// var v7 = function(){};

// 148.  JSON massivlarini qanday aniqlaysiz
// JSON massivlari kvadrat qavslar ichida yoziladi va massivlar javascript ob'ektlarini o'z ichiga oladi. Masalan, foydalanuvchilarning JSON massivi quyidagi kabi bo'ladi:
// "users":[
//   {"firstName":"John", "lastName":"Abrahm"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Shane", "lastName":"Warn"}
// ]

// 149.  Tasodifiy butun sonlarni qanday yaratasiz
// Tasodifiy butun sonlarni qaytarish uchun Math.random() funksiyasini Math.floor() bilan ishlatishingiz mumkin. Misol uchun, agar siz 1 dan 10 gacha bo'lgan tasodifiy butun sonlarni yaratmoqchi bo'lsangiz, ko'paytirish koeffitsienti 10 bo'lishi kerak,
// Math.floor(Math.random() * 10) + 1;     // returns a random integer from 1 to 10
// Math.floor(Math.random() * 100) + 1;     // returns a random integer from 1 to 100

// 150.  Butun sonlarni malum miqdor orasida chop etish uchun tasodifiy butun sonlar funksiyasini yoza olasizmi?
// Ha, siz min va maksimal o'rtasidagi tasodifiy sonni qaytarish uchun tegishli tasodifiy funktsiyani yaratishingiz mumkin (ikkalasi ham kiritilgan)

// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// randomInteger(1, 100); // returns a random integer from 1 to 100
// randomInteger(1, 1000); // returns a random integer from 1 to 1000

// 151.  Tree shaking nima
// Daraxtning silkinishi o'lik kodni yo'q qilish shaklidir. Bu shuni anglatadiki, foydalanilmagan modullar qurish jarayonida to'plamga kiritilmaydi va buning uchun u ES2015 modul sintaksisining statik tuzilishiga (ya'ni import va eksport) tayanadi. Dastlab bu ES2015 modul to'plami tomonidan ommalashgan rollup.

// 152.  Tree shaking nima keragi bor
// Tree Shaking har qanday dasturda kod hajmini sezilarli darajada kamaytirishi mumkin. Ya'ni, biz sim orqali qancha kamroq kod yuborsak, dastur shunchalik samarali bo'ladi. Misol uchun, agar biz shunchaki SPA ramkalaridan foydalangan holda "Salom dunyo" ilovasini yaratmoqchi bo'lsak, u bir necha MB vaqtni oladi, lekin daraxtni silkitib, uning hajmini atigi bir necha yuz KBgacha kamaytirishi mumkin. Daraxtlarni silkitish Rollup va Webpack bundlerlarida amalga oshiriladi.

// 153.  Eval dan foydalanish tavsiya etiladimi
// Yo'q, bu xavfsizlik muammosini keltirib chiqaradigan o'zboshimchalik kodini ishga tushirishga imkon beradi. Bizga ma'lumki, eval() funksiyasi matnni kod sifatida ishlatish uchun ishlatiladi. Ko'pgina hollarda, uni ishlatish shart emas.

// 154.  Muntazam ifoda(regEx) nima ?
// Muntazam ibora qidiruv sxemasini tashkil etuvchi belgilar ketma-ketligidir. Matndagi maʼlumotlarni qidirish uchun ushbu qidiruv namunasidan foydalanishingiz mumkin. Bulardan matn qidirish va matnni almashtirish operatsiyalarining barcha turlarini bajarish uchun foydalanish mumkin. Keling, sintaksis formatini ko'rib chiqaylik,

// /pattern/modifiers;

// Masalan, katta-kichik harfga sezgir bo'lmagan foydalanuvchi nomi bilan muntazam ifoda yoki qidiruv namunasi:

// /John/i

// 155.  Muntazam ifodada qanday string methods mavjud
// Muntazam ifodalarda ikkita string usuli mavjud: search() va replace(). Search() usuli moslikni izlash uchun ifodadan foydalanadi va mos keladigan joyni qaytaradi.

// var msg = "Hello John";
// var n = msg.search(/John/i); // 6

// Replace() usuli naqsh almashtirilgan o'zgartirilgan satrni qaytarish uchun ishlatiladi.
// var msg = "Hello John";
// var n = msg.replace(/John/i, "Buttler"); // Hello Buttler

// 156.  Muntazam ifodadagi modifikatorlar nima
// Modifikatorlar katta-kichik harflarni sezmaydigan va global qidiruvlarni amalga oshirish uchun ishlatilishi mumkin. Keling, ba'zi modifikatorlarni sanab o'tamiz,

// var text = "Learn JS one by one";
// var pattern = /one/g;
// var result = text.match(pattern); // one,one

// 157.  Muntazam ifoda naqshlari (patterns)nima
// Muntazam ifodalar belgilarni moslashtirish uchun naqshlar guruhini taqdim etadi. Asosan, ular 3 turga bo'linadi,
// Brackets: Bu belgilar qatorini topish uchun ishlatiladi. Masalan, quyida ba'zi foydalanish holatlari keltirilgan,
// [abc]: Qavslar (a,b,c) orasidagi har qanday belgilarni topish uchun ishlatiladi.
// [0-9]: Qavslar orasidagi istalgan raqamlarni topish uchun ishlatiladi
// (a|b): | bilan ajratilgan har qanday muqobillarni topish uchun ishlatiladi
// Metacharacters: Bular alohida ma'noga ega bo'lgan belgilar, Masalan, quyida ba'zi foydalanish holatlari,
// \d: raqamni topish uchun ishlatiladi
// \s: bo'shliq belgisini topish uchun ishlatiladi
// \b: so'z boshida yoki oxirida moslikni topish uchun ishlatiladi
// Miqdor ko'rsatkichlari: Bu miqdorlarni aniqlash uchun foydalidir Masalan, quyida ba'zi foydalanish holatlari keltirilgan,
// n+: kamida bitta n ni o'z ichiga olgan har qanday satr uchun mosliklarni topish uchun ishlatiladi
// n*: n ning nol yoki undan ortiq takrorlanishini o‘z ichiga olgan har qanday satr uchun mosliklarni topish uchun foydalaniladi.
// n?: n ning nol yoki bitta takrorlanishini o'z ichiga olgan har qanday satr uchun mosliklarni topish uchun ishlatiladi

// 158.  RegExp obyekti nima
// RegExp ob'ekti oldindan belgilangan xususiyatlar va usullarga ega muntazam ifoda ob'ektidir. Keling, RegExp ob'ektidan oddiy foydalanishni ko'rib chiqaylik,

// var regexp = new RegExp('\\w+');
// console.log(regexp);
// // expected output: /\w+/

// 159.  Patter(naqsh) uchun satrni qanday qidirasiz
// Siz naqsh uchun satrni izlash va natijaga qarab rost yoki yolgʻonni qaytarish uchun test() muntazam ifoda usulidan foydalanishingiz mumkin.

// var pattern = /you/;
// console.log(pattern.test("How are you?")); //true

// 160.  Exec usulining maqsadi nima
// Exec usulining maqsadi test usuliga o'xshaydi, lekin u ko'rsatilgan satrda moslikni qidirishni amalga oshiradi va rost/noto'g'ri qaytarish o'rniga natija massivini yoki nullni qaytaradi.

// var pattern = /you/;
// console.log(pattern.exec("How are you?")); //["you", index: 8, input: "How are you?", groups: undefined]

// 161.  HTML elementining stilini qanday o'zgartirish mumkin
// HTML elementining ichki uslubi yoki sinf nomini JavaScript yordamida o'zgartirishingiz mumkin

// Uslub xususiyatidan foydalanish: Inline uslubini uslub xususiyatidan foydalanib o'zgartirishingiz mumkin

// document.getElementById("title").style.fontSize = "30px";

// ClassName xususiyatidan foydalanish: className xususiyatidan foydalanib, element sinfini o'zgartirish oson

//  document.getElementById("title").className = "custom-title";

// 162.  1+2+'3' natijasi qanday bo'ladi
// Chiqish bo'ladi 33. Raqamli qiymatlar bo'lganligi sababli 1, 2birinchi ikki raqamning natijasi raqamli qiymat bo'ladi 3. Keyingi raqam qator tipidagi qiymatdir, chunki raqamli qiymat 3va satr turi qiymatining qo'shilishi 3faqat birlashtiruvchi qiymat bo'ladi 33.

// 163.  Debbuger statment nima ?
// Nosozliklarni tuzatuvchi bayonot to'xtash nuqtasini o'rnatish kabi har qanday mavjud disk raskadrovka funksiyasini chaqiradi. Agar nosozliklarni tuzatish funksiyasi mavjud bo'lmasa, bu bayonot hech qanday ta'sir qilmaydi. Masalan, quyidagi funksiyada tuzatuvchi bayonoti kiritilgan. Shunday qilib, skript manbasidagi to'xtash nuqtasi kabi tuzatuvchi bayonotida bajarish to'xtatiladi.

// function getProfile() {
// // code goes here
// debugger;
// // code goes here
// }
// 164.   Nima maqsadda Breakpoinlar debugginda qolaniladi ?
// Debugging bajarilgandan so'ng va disk raskadrovka oynasi ochilgandan so'ng JavaScript kodida to'xtash nuqtalarini o'rnatishingiz mumkin. Har bir to'xtash nuqtasida JavaScript ishlashni to'xtatadi va sizga JavaScript qiymatlarini tekshirish imkonini beradi. Qiymatlarni tekshirgandan so'ng, o'ynash tugmasi yordamida kodning bajarilishini davom ettirishingiz mumkin.

// 165.  Identifikator sifatida ajratilgan so'zlardan foydalansam bo'ladimi?
// Yo'q, siz ajratilgan so'zlarni o'zgaruvchilar, teglar, ob'ektlar yoki funktsiyalar nomi sifatida ishlata olmaysiz. Keling, bitta oddiy misolni ko'rib chiqaylik,
// var else = "hello"; // Uncaught SyntaxError: Unexpected token else

// 166.  Mobil brauzerni qanday aniqlash mumkin ?
// Siz  regex dan foydalani foydalanuvchi mobile browsing ishlatayotganini true yoki false qiymatlari orqali bilib olishingiz mumkin

// Window.mobilecheck = function() {
// var mobileCheck = false ;
// function(a){if(/ (android | bb …) ).}(navigator.userAgent || navigator.vendor || window.opera )
// return mobileCheck;
// }

// 167.  Regexpsiz mobil brauzerni qanday aniqlash mumkin ?

// Siz shunchaki qurilmalar ro'yxatini ko'rib chiqish va foydalanuvchi agenti biror narsaga mos kelishini tekshirish orqali mobil brauzerlarni aniqlashingiz mumkin. Bu RegExp-dan foydalanish uchun muqobil yechim,

// function detectmob() {
//  if( navigator.userAgent.match(/Android/i)
//  || navigator.userAgent.match(/webOS/i)
//  || navigator.userAgent.match(/iPhone/i)
//  || navigator.userAgent.match(/iPad/i)
//  || navigator.userAgent.match(/iPod/i)
//  || navigator.userAgent.match(/BlackBerry/i)
//  || navigator.userAgent.match(/Windows Phone/i)
//  ){ return true; }
//  else {
//     return false; } }

// 168.  JS yordamida tasvir(image) kengligi va balandligini qanday olish mumkin
// Javascript yordamida tasvirni dasturiy ravishda olishingiz va o'lchamlarni (kenglik va balandlik) tekshirishingiz mumkin.

// var img = new Image();
// img.onload = function() {
//   console.log(this.width + 'x' + this.height);
// }
// img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';

// 169.  Sinxron HTTP so'rovini qanday qilasiz
// Brauzerlar JavaScript-dan sinxron HTTP so'rovlarini amalga oshirish uchun ishlatilishi mumkin bo'lgan XMLHttpRequest obyektini taqdim etadi.
// function httpGet(theUrl)
// {
//     var xmlHttpReq = new XMLHttpRequest();
//     xmlHttpReq.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttpReq.send( null );
//     return xmlHttpReq.responseText;
// }

// 170.  Asinxron HTTP so'rovini qanday qilasiz
// Brauzerlar XMLHttpRequest ob'ektini taqdim etadi, undan JavaScript-dan 3-parametrni rost deb o'tkazish orqali asinxron HTTP so'rovlarini amalga oshirish uchun foydalanish mumkin.

// function httpGetAsync(theUrl, callback)
// {
//     var xmlHttpReq = new XMLHttpRequest();
//     xmlHttpReq.onreadystatechange = function() {
//         if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
//             callback(xmlHttpReq.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous
//     xmlHttp.send(null);
// }
// 171.  Javascriptda sanani boshqa vaqt mintaqasiga qanday o'zgartirasiz
// Bir vaqt mintaqasidagi sanalarni boshqasiga aylantirish uchun toLocaleString() usulidan foydalanishingiz mumkin. Misol uchun, hozirgi sanani quyida keltirilgan Britaniya ingliz vaqt mintaqasiga aylantiramiz,
// console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); //29/06/2019, 09:56:00

// 172.  Oyna(window) hajmini olish uchun qanday xususiyatlardan foydalaniladi
// Oyna hajmini topish uchun siz innerWidth, innerHeight, clientWidth, clientHeight xususiyatlaridan, hujjat elementidan va hujjat tanasi obyektlaridan foydalanishingiz mumkin. Keling, oyna yoki hujjat hajmini hisoblash uchun ushbu xususiyatlarning kombinatsiyasidan foydalanamiz,

// var width = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

// var height = window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight;

// 173.  Javascriptda shartli operator nima
// Shartli (uchlik) operator uchta operandni qabul qiladigan yagona JavaScript operatori bo'lib, if operatorlari uchun yorliq vazifasini bajaradi.

// var isAuthenticated = false;
// console.log(isAuthenticated ? 'Hello, welcome' : 'Sorry, you are not authenticated'); //Sorry, you are not authenticated

// 174.  Shartli operatorda nested ko’rinishni qo'llay olasizmi?
// Ha, zanjirni if ​​… else if … else if … else zanjiriga oʻxshash shartli operatorlarda qoʻllashingiz mumkin. Sintaksis quyidagi kabi bo'ladi,

// function traceValue(someParam) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

// // The above conditional operator is equivalent to:

// function traceValue(someParam) {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }

// 175.  Sahifani yuklagandan so'ng javascriptni yurgazish usullari qanday?
// Sahifani yuklagandan so'ng JavaScript-ni turli yo'llar bilan bajarishingiz mumkin,

// window.onload = function …
// document.onload = function ...
// <body onload="script();">

// 176.  Proto va prototip o'rtasidagi farq nima
// Ob'ekt - bu __proto__qidirish zanjirida usullarni va hokazolarni hal qilish uchun ishlatiladigan haqiqiy ob'ekt. Holbuki , yangi ob'ekt bilan ob'ekt yaratishda prototypequrish uchun foydalaniladigan ob'ekt.__proto__

// ( new Employee ).__proto__ === Employee.prototype;
// ( new Employee ).prototype === undefined;

// 177.  Sizga nuqtali vergul kerak bo'lgan misol keltiring
// JavaScript-dagi har bir bayonotdan keyin nuqta-vergul qo'yish tavsiya etiladi. Misol uchun, quyidagi holatda nuqtali vergul yo'qligi sababli ish vaqtida ".. bu funktsiya emas" xatosini chiqaradi.

// // define a function
// var fn = function () {
//     //...
// } // semicolon missing at this line

// // then execute some code inside a closure
// (function () {
//     //...
// })();

// solution

// var fn = function () {
//     //...
// }(function () {
//     //...
// })();

// Bunday holda, biz ikkinchi funktsiyani birinchi funktsiyaga argument sifatida o'tkazamiz va keyin birinchi funktsiya chaqiruvining natijasini funktsiya sifatida chaqirishga harakat qilamiz. Demak, ikkinchi funksiya ish vaqtida "... funksiya emas" xatosi bilan ishlamay qoladi.

// 178.  Freeze usuli nima

// Ob'ektni muzlatish uchun freeze() usuli qo'llaniladi. Ob'ektni muzlatish ob'ektga yangi xususiyatlar qo'shishga imkon bermaydi, mavjud xususiyatlarni sanab o'tish, sozlash yoki yozishni o'chirishni oldini oladi va o'zgartirishni oldini oladi. ya'ni, u o'tgan ob'ektni qaytaradi va muzlatilgan nusxani yaratmaydi.

// const obj = {
//   prop: 100
// };

// Object.freeze(obj);
// obj.prop = 200; // Throws an error in strict mode

// console.log(obj.prop); //100
// Eslatma: Agar o'tkazilgan argument ob'ekt bo'lmasa, u TypeErrorni keltirib chiqaradi.

// 179.  Muzlatish usulidan maqsad nima
// Quyida muzlatish usulidan foydalanishning asosiy afzalliklari keltirilgan,
// U ob'ektlar va massivlarni muzlatish uchun ishlatiladi.
// U ob'ektni o'zgarmas qilish uchun ishlatiladi.

// 180.  Nima uchun muzlatish usulidan foydalanishim kerak
// Ob'ektga yo'naltirilgan paradigmada mavjud API mavjud kontekstdan tashqarida kengaytirilishi, o'zgartirilishi yoki qayta ishlatilishi mo'ljallanmagan ayrim elementlarni o'z ichiga oladi. Shuning uchun u finalturli tillarda ishlatiladigan kalit so'z sifatida ishlaydi.

// 181.  Brauzer tilini afzal ko'rishni qanday aniqlash mumkin
// Quyidagi kabi brauzer tilini afzal ko'rish uchun navigator ob'ektidan foydalanishingiz mumkin,

// var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
//                navigator.language ||   // All browsers
//                navigator.userLanguage; // IE <= 10
// console.log(language);
// 182.  Qanday qilib javascript yordamida stringni sarlavha(title) kattaligiga aylantirish mumkin
// Sarlavha har bir so'zning birinchi harfi bosh harf bilan yozilishini anglatadi. Quyidagi funksiyadan foydalanib, satrni sarlavha holatiga aylantirishingiz mumkin,
//     function toTitleCase(str) {
//         return str.replace(
//             /\w\S*/g,
//             function(txt) {
//                 return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//             }
//         );
//     }
//     toTitleCase("good morning john"); // Good Morning John

// 183.  Sahifada o'chirilgan(disabled) javascript sahifani  qanday aniqlash mumkin
// <noscript> JavaScript o'chirilgan yoki o'chirilganligini aniqlash uchun tegdan foydalanishingiz mumkin . Ichki kod bloki <noscript> JavaScript o'chirilganida bajariladi va odatda sahifa JavaScript-da yaratilganda muqobil tarkibni ko'rsatish uchun ishlatiladi.

// <script type="javascript">
//     // JS related code goes here
// </script>
// <noscript>
//     <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
// </noscript>

// 184.  Javascript tomonidan qo'llab-quvvatlanadigan turli operatorlar nima
// Operator ma'lum bir qiymat yoki operandni (matematik va mantiqiy hisob-kitoblar) boshqarishga qodir. Quyidagi kabi JavaScript tomonidan qo'llab-quvvatlanadigan turli operatorlar mavjud,
// Arifmetik operatorlar: + (Qo‘shish),– (ayirish), * (ko‘paytirish), / (bo‘lish), % (modul), + + (ko‘paytirish) va – – (kamaytirish) ni o‘z ichiga oladi.
// Taqqoslash operatorlari: o'z ichiga oladi = =(Teng),!= (Teng emas), ===(Tur bo'yicha teng), > (katta),> = (katta yoki teng),< (Kichik),<= (Kamroq yoki teng)
// Mantiqiy operatorlar: &&(Mantiqiy VA),||(Mantiqiy OR),!(Mantiqiy EMAS) ni oʻz ichiga oladi.
// Belgilash operatorlari: o'z ichiga oladi: = (topshiriq operatori), += (qo'shish va tayinlash operatori), – = (ayirish va belgilash operatori), *= (ko'paytirish va belgilash), /= (bo'lish va belgilash), %= (modullar va tayinlash )
// Uchlik operatorlar: U shartli(: ?) operatorni o'z ichiga oladi
// typeof operatori: o'zgaruvchining turini topish uchun foydalaniladi. Sintaksis o'xshayditypeof variable

// 185.  Rest parametri nima
// Rest parametri funksiya parametrlarini boshqarishning takomillashtirilgan usuli bo‘lib, u bizga cheksiz miqdordagi argumentlarni massiv sifatida ko‘rsatishga imkon beradi. Sintaksis quyidagi kabi bo'ladi,
// function f(a, b, ...theArgs) {
//   // ...
// }
// Masalan, parametrlarning dinamik soni bo'yicha hisoblash uchun yig'indi misolini olaylik,

// function total(…args){
// let sum = 0;
// for(let i of args){
// sum+=i;
// }
// return sum;
// }
// console.log(fun(1,2)); //3
// console.log(fun(1,2,3)); //6
// console.log(fun(1,2,3,4)); //13
// console.log(fun(1,2,3,4,5)); //15

// 186.  Agar oxirgi argument sifatida Rest parametridan foydalanmasangiz nima bo'ladi
// Rest parametri oxirgi argument bo'lishi kerak, chunki uning vazifasi qolgan barcha argumentlarni massivga yig'ishdir. Misol uchun, agar siz quyidagi kabi funktsiyani aniqlasangiz, bu hech qanday ma'noga ega emas va xatoga yo'l qo'yadi.

// function someFunc(a,…b,c){
// //You code goes here
// return;
// }

// 187.  Javascriptda qanday bitli operatorlar mavjud
// Quyida JavaScript-da ishlatiladigan bitli mantiqiy operatorlar ro'yxati keltirilgan
// Bit boʻyicha VA ( & )
// Bit bo'yicha YOKI ( | )
// Bitwise XOR ( ^ )
// Bit yo'nalishi bo'yicha EMAS ( ~ )
// Chapga siljitish ( << )
// O'ngga siljish ( >> )
// Nol toʻldirish Oʻngga siljish ( >>> )

// 188.  Spread operatori nima
// Spread operatori takrorlanuvchilarni (massivlar / ob'ektlar / satrlar) bitta argumentlar / elementlarga kengaytirilishiga imkon beradi. Keling, bu xatti-harakatni ko'rish uchun misol keltiraylik,

// function calculateSum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(calculateSum(...numbers)); // 6

// 189.  Ob'ektning muzlatilgan yoki muzlatilmaganligini qanday aniqlash mumkin
// Object.isFrozen() usuli ob'ektning muzlatilgan yoki muzlatilmaganligini aniqlash uchun ishlatiladi. Agar quyidagi shartlarning barchasi to'g'ri bo'lsa, ob'ekt muzlatilgan hisoblanadi,
// Agar u kengaytirilmasa.
// Agar uning barcha xususiyatlari konfiguratsiya qilinmasa.
// Agar uning barcha ma'lumotlar xususiyatlari yozilmaydigan bo'lsa. Foydalanish quyidagicha bo'ladi,

// const object = {
//    property: 'Welcome JS world'
// };
// Object.freeze(object);
// console.log(Object.isFrozen(object));

// 190.  Bir xil yoki ob'ektdan foydalanmayotgan ikkita qiymatni qanday aniqlash mumkin
// Object.is() usuli ikkita qiymat bir xil qiymat ekanligini aniqlaydi. Misol uchun, har xil turdagi qiymatlar bilan foydalanish,
// Object.is('hello', 'hello');     // true
// Object.is(window, window);   // true
// Object.is([], []) // false

// Quyidagilardan biri bajarilsa, ikkita qiymat bir xil bo'ladi:
// ikkalasi ham aniqlanmagan
// ikkalasi ham null
// ikkalasi ham to'g'ri yoki ikkalasi ham noto'g'ri
// bir xil tartibda bir xil belgilar bilan bir xil uzunlikdagi ikkala satr
// ikkalasi ham bir xil ob'ekt (ikkala ob'ekt ham bir xil havolaga ega degan ma'noni anglatadi)
// ikkala raqam ham +0 ham -0 ikkala NaN ham nolga teng, ikkalasi ham NaN emas va ikkalasi ham bir xil qiymatga ega.

// 191.  Ob'ektni ishlatishdan maqsad - bu usul
// Ob'ekt is usulining ba'zi ilovalari quyidagilardir:
// Ikki qatorni solishtirish uchun ishlatiladi.
// Ikki raqamni solishtirish uchun ishlatiladi.
// U ikkita raqamning qutblarini solishtirish uchun ishlatiladi.
// U ikkita ob'ektni taqqoslash uchun ishlatiladi.

// 192.  Xususiyatlarni bir ob'ektdan ikkinchisiga qanday nusxalash mumkin
// Bir yoki bir nechta manba ob'ektlaridan maqsadli ob'ektga qiymatlar va xususiyatlarni nusxalash uchun ishlatiladigan Object.assign() usulidan foydalanishingiz mumkin. U maqsadli ob'ektdan ko'chirilgan xususiyatlar va qiymatlarga ega bo'lgan maqsadli ob'ektni qaytaradi. Sintaksis quyidagi kabi bo'ladi,

// Object.assign(target, ...sources)

// Keling, bitta manba va bitta maqsadli ob'ekt bilan misol qilaylik,

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const returnedTarget = Object.assign(target, source);

// console.log(target); // { a: 1, b: 3, c: 4 }

// console.log(returnedTarget); // { a: 1, b: 3, c: 4 }

// Yuqoridagi kodda kuzatilganidek, bmanbadan maqsadgacha umumiy xususiyat( ) mavjud, shuning uchun uning qiymati qayta yozildi.

// 193.  Tayinlash usuli qanday qo'llaniladi
// Quyida Object.assign() usulining asosiy ilovalari keltirilgan.
// U ob'ektni klonlash uchun ishlatiladi.
// U bir xil xususiyatlarga ega ob'ektlarni birlashtirish uchun ishlatiladi.

// 194.  Proksi-server nima ?
// Proksi-server ob'ekti mulkni qidirish, tayinlash, ro'yxatga olish, funktsiyani chaqirish va hokazo kabi asosiy operatsiyalar uchun maxsus xatti-harakatni aniqlash uchun ishlatiladi. Sintaksis quyidagicha bo'ladi:

// var p = new Proxy(target, handler);

// Keling, proksi obyektiga misol keltiraylik,

// var handler = {
//     get: function(obj, prop) {
//         return prop in obj ?
//             obj[prop] :
//             100;
//     }
// };

// var p = new Proxy({}, handler);
// p.a = 10;
// p.b = null;

// console.log(p.a, p.b); // 10, null
// console.log('c' in p, p.c); // false, 100

// Yuqoridagi kodda getproksi-serverda operatsiya bajarilganda uning xatti-harakatlarini belgilaydigan ishlov beruvchidan foydalanadi

// 195.  Seal usulining maqsadi nima
// Object.seal () usuli ob'ektga yangi xususiyatlar qo'shilishining oldini olish va barcha mavjud xususiyatlarni sozlanmaydigan qilib belgilash orqali uni muhrlash uchun ishlatiladi. Ammo mavjud xususiyatlarning qiymatlari yozilishi mumkin ekan, o'zgartirilishi mumkin. Seal() usuli haqida ko'proq tushunish uchun quyidagi misolni ko'rib chiqaylik

//  const object = {
//     property: 'Welcome JS world'
//  };
//  Object.seal(object);
//  object.property = 'Welcome to object world';
//  console.log(Object.isSealed(object)); // true
//  delete object.property; // You cannot delete when sealed
//  console.log(object.property); //Welcome to object world

// 196.  Seal usuli qanday qo'llaniladi
// Quyida Object.seal() usulining asosiy ilovalari keltirilgan,
// U ob'ektlar va massivlarni muhrlash uchun ishlatiladi.
// U ob'ektni o'zgarmas qilish uchun ishlatiladi.

// 197.  Freeze va Seal usullari o'rtasidagi farqlar qanday
// Agar ob'ekt Object.freeze() usuli yordamida muzlatilgan bo'lsa, uning xususiyatlari o'zgarmas bo'lib qoladi va ularda hech qanday o'zgartirishlar kiritilmaydi, ob'ekt Object.seal() usuli yordamida muhrlangan bo'lsa, o'zgarishlar mavjud xususiyatlarda amalga oshirilishi mumkin. ob'ektning.

// 198.  Ob'ektning muhrlangan yoki yo'qligini qanday aniqlash mumkin
// Ob'ekt muhrlangan yoki yopilmaganligini aniqlash uchun Object.isSealed() usuli qo'llaniladi. Agar quyidagi shartlarning barchasi bajarilsa, ob'ekt muhrlangan hisoblanadi

// Agar u kengaytirilmasa.
// Agar uning barcha xususiyatlari konfiguratsiya qilinmasa.
// Agar u olinadigan bo'lmasa (lekin yozilmasligi shart emas). Keling, buni amalda ko'rib chiqaylik
// const object = {
// property: 'Hello, Good morning'
// };

// Object.seal(object); // Using seal() method to seal the object

// console.log(Object.isSealed(object));      // checking whether the object is sealed or not

// 199.  Qanday qilib sanab boladigan (enumerable) kalit va qiymat juftlarini olasiz
// Object.entries() usuli ma'lum bir ob'ektning o'z sanab bo'ladigan qatorli kalitli [kalit, qiymat] juftliklari massivini for...in siklida taqdim etilgan tartibda qaytarish uchun ishlatiladi. Misolda object.entries() usulining funksionalligini ko'rib chiqamiz,

// const object = {
//   a: 'Good morning',
//   b: 100
// };

// for (let [key, value] of Object.entries(object)) {
//   console.log(`${key}: ${value}`); // a: 'Good morning'
//                                    // b: 100
// }

// 200.  Object.values ​​va Object.entries usuli o'rtasidagi asosiy farq nima
// Object.values() usulining xatti-harakati Object.entries() usuliga o'xshaydi, lekin u [kalit, qiymat] juftlari o'rniga qiymatlar qatorini qaytaradi.

//  const object = {
//    a: 'Good morning',
//    b: 100
//  };

//  for (let value of Object.values(object)) {
//    console.log(`${value}`); // 'Good morning'
//                                 100
//  }

// 201.  Har qanday ob'ektning kalitlari ro'yxatini qanday olishingiz mumkin

// Siz  Object.keys() ma'lum bir ob'ektning o'z mulk nomlari massivini qaytarish uchun ishlatiladigan usuldan, biz odatdagi tsikl bilan bir xil tartibda foydalanishingiz mumkin. Masalan, siz foydalanuvchi ob'ektining kalitlarini olishingiz mumkin,

// const user = {
//   name: 'John',
//   gender: 'male',
//   age: 40
// };

// console.log(Object.keys(user)); //['name', 'gender', 'age']

// 202.  Prototip bilan ob'ektni qanday yaratasiz
// Object.create() usuli ko'rsatilgan prototip ob'ekti va xususiyatlariga ega yangi ob'ektni yaratish uchun ishlatiladi. Ya'ni, yangi yaratilgan ob'ektning prototipi sifatida mavjud ob'ektdan foydalanadi. Belgilangan prototip ob'ekti va xususiyatlari bilan yangi ob'ektni qaytaradi.

//  const user = {
//    name: 'John',
//    printInfo: function () {
//      console.log(`My name is ${this.name}.`);
//    }
//  };

//  const admin = Object.create(user);

//  admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

//  admin.printInfo(); // My name is Nick

// 203.  Weakset nima
// WeakSet zaif (zaif havolalar) saqlanadigan ob'ektlar to'plamini saqlash uchun ishlatiladi. Sintaksis quyidagicha bo'ladi:
// new WeakSet([iterable]);
// Uning xatti-harakatini tushuntirish uchun quyidagi misolni ko'rib chiqaylik,
// var ws = new WeakSet();
// var user = {};
// ws.add(user);
// ws.has(user);    // true
// ws.delete(user); // removes user from the set
// ws.has(user);    // false, user has been removed

// 204.  WeakSet va Set o'rtasidagi farqlar qanday
// Asosiy farq shundaki, Set-dagi ob'ektlarga havolalar kuchli, WeakSet-dagi ob'ektlarga havolalar zaif. Ya'ni, WeakSet-dagi ob'ektga boshqa havola bo'lmasa, axlat yig'ilishi mumkin. Boshqa farqlar,
// To'plamlar har qanday qiymatni saqlashi mumkin, WeakSets esa faqat ob'ektlar to'plamini saqlashi mumkin
// WeakSet Setdan farqli o'laroq o'lcham xususiyatiga ega emas
// WeakSet-da aniq, kalitlar, qiymatlar, yozuvlar, forEach kabi usullar mavjud emas.
// WeakSet takrorlanmaydi.

// 205.  WeakSet-da mavjud usullar to'plamini sanab o'ting
// Quyida WeakSet-da mavjud usullar ro'yxati keltirilgan,
// add(value): Yangi ob'ekt berilgan qiymat bilan zaif to'plamga qo'shiladi
// Delete(value): Qiymatni WeakSet to'plamidan o'chiradi.
// has(value): Agar qiymat WeakSet to'plamida mavjud bo'lsa, u haqiqatni qaytaradi, aks holda u noto'g'ri qaytaradi.
// Keling, yuqoridagi barcha usullarning funksionalligini misolda ko'rib chiqaylik,
// var weakSetObject = new WeakSet();
// var firstObject = {};
// var secondObject = {};
// // add(value)
// weakSetObject.add(firstObject);
// weakSetObject.add(secondObject);
// console.log(weakSetObject.has(firstObject)); //true
// weakSetObject.delete(secondObject);

// 206.  WeakMap nima
// WeakMap ob'ekti - bu kalitlarga zaif havola qilingan kalit/qiymat juftliklari to'plami. Bunday holda, kalitlar ob'ektlar bo'lishi kerak va qiymatlar ixtiyoriy qiymatlar bo'lishi mumkin. Sintaksis quyidagi kabi ko'rinadi,

// new WeakMap([iterable])

// Uning xatti-harakatini tushuntirish uchun quyidagi misolni ko'rib chiqaylik,

//  var ws = new WeakMap();
//  var user = {};
//  ws.set(user);
//  ws.has(user);    // true
//  ws.delete(user); // removes user from the map
//  ws.has(user);    // false, user has been removed

// 207.  WeakMap va Map o'rtasidagi farqlar qanday
// Asosiy farq shundaki, Map-dagi asosiy ob'ektlarga havolalar kuchli, WeakMap-dagi asosiy ob'ektlarga havolalar zaif. Ya'ni, WeakMap'dagi asosiy ob'ekt, agar unga boshqa havola bo'lmasa, axlat yig'ilishi mumkin. Boshqa farqlar,
// Xaritalar har qanday kalit turini saqlashi mumkin, WeakMaps esa faqat asosiy ob'ektlar to'plamini saqlashi mumkin
// WeakMap xaritadan farqli o'laroq o'lcham xususiyatiga ega emas
// WeakMap-da aniq, kalitlar, qiymatlar, yozuvlar, forEach kabi usullar mavjud emas.
// WeakMap takrorlanmaydi.

// 208.  WeakMap-da mavjud usullar to'plamini sanab o'ting
// Quyida WeakMap-da mavjud usullar ro'yxati keltirilgan,
// set(kalit, qiymat): WeakMap obyektidagi kalit uchun qiymatni o'rnatadi. WeakMap obyektini qaytaradi.
// o'chirish (kalit): Kalit bilan bog'liq har qanday qiymatni o'chiradi.
// has(key): Qiymat WeakMap obyektidagi kalit bilan bog‘langan yoki bog‘lanmaganligini tasdiqlovchi mantiqiy qiymatni qaytaradi.
// get(key): Kalit bilan bog'langan qiymatni qaytaradi yoki agar mavjud bo'lmasa, aniqlanmagan. Keling, yuqoridagi barcha usullarning funksionalligini misolda ko'rib chiqaylik,

// var weakMapObject = new WeakMap();
// var firstObject = {};
// var secondObject = {};
// // set(key, value)
// weakMapObject.set(firstObject, 'John');
// weakMapObject.set(secondObject, 100);
// console.log(weakMapObject.has(firstObject)); //true
// console.log(weakMapObject.get(firstObject)); // John
// weakMapObject.delete(secondObject);

// 209.  Unevaldan maqsad nima
// uneval() o'rnatilgan funksiya bo'lib, u ob'ekt manba kodining satrli tasvirini yaratish uchun ishlatiladi. Bu yuqori darajadagi funksiya va hech qanday ob'ekt bilan bog'lanmagan. Uning funksionalligi haqida ko'proq bilish uchun quyidagi misolni ko'rib chiqaylik,

// var a = 1;
// uneval(a); // returns a String containing 1
// uneval(function user() {}); // returns "(function user(){})"

// 210.  URL manzilini qanday kodlash(encode) mumkin
// EncodeURI() funksiyasi (, / ? : @ & = + $ #) belgilardan tashqari maxsus belgilarga ega boʻlgan toʻliq URI kodini kodlash uchun ishlatiladi.
// var uri = 'https://mozilla.org/?x=шеллы';
// var encoded = encodeURI(uri);
// console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B

// 211.  URLni qanday dekodlash(decode) mumkin
// DecodeURI() funksiyasi avval encodeURI() tomonidan yaratilgan Yagona Resurs Identifikatorini (URI) dekodlash uchun ishlatiladi.

//  var uri = 'https://mozilla.org/?x=шеллы';
//  var encoded = encodeURI(uri);
//  console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
// try {
//   console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
// } catch(e) { // catches a malformed URI
//   console.error(e);
// }

// 212.  Veb-sahifa matini qanday chop qilasiz
// Oyna obyekti joriy oynaning mazmunini chop etish uchun ishlatiladigan print() usulini taqdim etdi. U turli xil chop etish opsiyalaridan birini tanlash imkonini beruvchi Chop etish dialog oynasini ochadi. Misolda chop etish usulidan foydalanishni ko'rib chiqaylik,

//    <input type="button" value="Print" onclick="window.print()" />

// 213.  Uneval va eval o'rtasidagi farq nima
// Funktsiya unevalberilgan ob'ektning manbasini qaytaradi; Holbuki, evalfunktsiya bu manba kodini boshqa xotira sohasida baholash orqali aksincha qiladi. Farqni aniqlashtirish uchun misolni ko'rib chiqaylik,

// var msg = uneval(function greeting() { return 'Hello, Good morning'; });
// var greeting = eval(msg);
// greeting(); // returns "Hello, Good morning"
// 214.  Anonim(anonymous) funksiya nima
// Anonim funksiya - bu nomsiz funksiya! Anonim funktsiyalar odatda o'zgaruvchi nomiga tayinlanadi yoki qayta qo'ng'iroq qilish funktsiyasi sifatida ishlatiladi. Sintaksis quyidagi kabi bo'ladi,
// function (optionalParameters) {
//   //do something
// }

// const myFunction = function(){ //Anonymous function assigned to a variable
//   //do something
// };

// [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
//   //do something
// });

// Keling, yuqoridagi anonim funktsiyani misolda ko'rib chiqaylik,

// var x = function (a, b) {return a * b};
// var z = x(5, 10);
// console.log(z); // 50

// 215.  Mahalliy va global o'zgaruvchilar o'rtasidagi ustuvorlik tartibi qanday
// Mahalliy o'zgaruvchi bir xil nomdagi global o'zgaruvchidan ustun turadi. Keling, bu xatti-harakatni misolda ko'rib chiqaylik.

// var msg = "Good morning";
// function greeting() {
//    msg = "Good Evening";
//    console.log(msg);
// }
// greeting();

// 216.  JavaScript kirish elementlari nima ?
// ECMAScript 5 javasciprt kirish elementlari(accessors) yoki kampyuter popertlarni getter yoki setterlar orqali tanishtirdi .

// var user = {
//   firstName: "John",
//   lastName : "Abraham",
//   language : "en",
//   get lang() {
//     return this.language;
//   }
//   set lang(lang) {
//   this.language = lang;
//   }
// };
// console.log(user.lang); // getter access lang as en
// user.lang = 'fr';
// console.log(user.lang); // setter used to set lang as fr

// 217.  Ob'ekt konstruktorida xususiyatni qanday aniqlash mumkin

// Object.defineProperty() statik usuli to'g'ridan-to'g'ri ob'ektda yangi xususiyatni aniqlash yoki ob'ektdagi mavjud xususiyatni o'zgartirish uchun ishlatiladi va ob'ektni qaytaradi. Mulkni qanday aniqlashni bilish uchun misolni ko'rib chiqaylik,
// const newObject = {};

// Object.defineProperty(newObject, 'newProperty', {
//   value: 100,
//   writable: false
// });

// console.log(newObject.newProperty); // 100

// newObject.newProperty = 200; // It throws an error in strict mode due to writable setting

// 218.  Get va defineProperty o'rtasidagi farq nima ?
// Sinflardan(class) foydalanmaguningizcha ikkalasi ham xuddi shunday natijalarga ega. Agar siz foydalansangiz get, xususiyat ob'ektning prototipida aniqlanadi, Object.defineProperty() xususiyatdan foydalanish esa u qo'llaniladigan misolda aniqlanadi.
// 219.  Getters va Settersning afzalliklari nimada
// Quyida Getters va Setters afzalliklari ro'yxati keltirilgan,
// Ular oddiyroq sintaksisni ta'minlaydi
// Ular JSda hisoblangan xususiyatlarni yoki yordamchilarni aniqlash uchun ishlatiladi.
// Xususiyatlar va usullar o'rtasidagi ekvivalentlik munosabatini ta'minlash uchun foydalidir
// Ular yaxshiroq ma'lumot sifatini ta'minlashi mumkin
// Kapsüllangan mantiq bilan sahna ortida ishlarni bajarish uchun foydalidir.

// 220. DefineProperty usuli yordamida qabul qiluvchilar(getter) va sozlagichlarni(setter) qo'shishim mumkinmi?
// Ha, siz Object.defineProperty()Getters va Setters qo'shish uchun usuldan foydalanishingiz mumkin. Masalan, quyidagi hisoblagich ob'ekti oshirish, kamaytirish, qo'shish va ayirish xususiyatlaridan foydalanadi,

// var obj = {counter : 0};

// // Define getters
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj, "decrement", {
//   get : function () {this.counter--;}
// });

// // Define setters
// Object.defineProperty(obj, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj, "subtract", {
//   set : function (value) {this.counter -= value;}
// });

// obj.add = 10;
// obj.subtract = 5;
// console.log(obj.increment); //6
// console.log(obj.decrement); //5

// 221. Switch-case ni ishlatishdan maqsad nima ?
// JavaScript-dagi switch case bayonoti qaror qabul qilish uchun ishlatiladi. Ba'zi hollarda switch case bayonotidan foydalanish if-else iboralariga qaraganda qulayroq bo'ladi. Sintaksis quyidagi kabi bo'ladi,

// switch (expression)
// {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     .
//     .
//     case valueN:
//         statementN;
//         break;
//     default:
//         statementDefault;
// }

// Yuqoridagi ko'p tomonlama filial bayonoti ifoda qiymatiga asoslangan kodning turli qismlariga bajarilishini yuborishning oson yo'lini taqdim etadi.

// 222.  Switch casedan  foydalanishda qanday qoidalarga rioya qilish kerak
// Quyida e'tiborga olinishi kerak bo'lgan konventsiyalar ro'yxati keltirilgan.
// Ifoda raqam yoki satr turi bo'lishi mumkin.
// Ifoda uchun takroriy qiymatlarga ruxsat berilmaydi.
// Standart bayonot ixtiyoriy. Agar kommutatorga uzatilgan ifoda hech qanday registr qiymatiga mos kelmasa, u holda birlamchi holat ichidagi bayonot bajariladi.
// Break iborasi kommutator ichida gaplar ketma-ketligini tugatish uchun ishlatiladi.
// Break bayonoti ixtiyoriy. Ammo agar u o'tkazib yuborilsa, ijro keyingi ishda davom etadi.

// 223.  Primitiv ma'lumotlar turlari nima ?
// Primitive malumot turlari - bu o’zgarmas qiymatga ega bo'lgan ma'lumotlar (uning xususiyatlari yoki usullari yo'q). 7 turdagi ibtidoiy ma'lumotlar turlari mavjud.
// string
// number
// boolean
// null
// undefined
// bigint
// symbol

// 224.  Ob'ekt xususiyatlariga kirishning turli usullari qanday
// Ob'ekt xususiyatiga kirishning 3 ta mumkin bo'lgan usuli mavjud.
// Nuqta belgisi: Xususiyatlarga kirish uchun nuqtadan foydalanadi
// objectName.property

// Kvadrat qavslar belgisi: mulkka kirish uchun kvadrat qavslardan foydalanadi
// objectName [ "mulk" ]
// Ifoda belgisi: U kvadrat qavs ichidagi ifodadan foydalanadi
// ob'ekt nomi [ ifoda ]

// 225.  Funksiya parametrlari qoidalari qanday

// JavaScript funksiyalari parametrlar uchun quyidagi qoidalarga amal qiladi,
// Funktsiya ta'riflari parametrlar uchun ma'lumotlar turlarini aniqlamaydi.
// O'tkazilgan argumentlar turini tekshirishni amalga oshirmang.
// Qabul qilingan argumentlar sonini tekshirmang. ya'ni, quyidagi funktsiya yuqoridagi qoidalarga amal qiladi,

// funktsiya functionName ( parametr1 , parametr2 , parametr3 ) {
//   konsol . log ( parametr1 ) ; // 1
// }
// funktsiya nomi ( 1 ) ;

// 226.  Xato obyekti(error object) nima
// Xato ob'ekti xatolik yuzaga kelganda xato haqida ma'lumot beruvchi o'rnatilgan xato ob'ektidir. U ikkita xususiyatga ega: ism va xabar. Masalan, quyidagi funksiya xato tafsilotlarini qayd qiladi,

// try {
//   greeting("Welcome");
// }
// catch(err) {
//   console.log(err.name + "<br>" + err.message);
// }

// 227.  Sintaksis xatosiga duch kelganingizda
// Sintaksis xatosi bilan kodni baholashga harakat qilsangiz, SyntaxError chiqariladi. Misol uchun, funktsiya parametri uchun quyida etishmayotgan tirnoq sintaksis xatosini keltirib chiqaradi

// urinib ko'ring {
//   baho ( "salom('xush kelibsiz)" ) ;   // etishmayotgan ' xatoga olib
// keladi }
// catch ( err ) {
//   konsol . jurnal ( xato . nomi ) ;
// }

// 228.  Xato obyektidan farqli xato nomlari qanday
// Xato obyektidan qaytarilgan 6 xil turdagi xato nomlari mavjud,

// 229.  Xatolarni hal qilishda qanday turli bayonotlar mavjud
// Quyida xatolarni qayta ishlashda ishlatiladigan bayonotlar ro'yxati keltirilgan,
// Try: Ushbu bayonot kod blokini xatolarni tekshirish uchun ishlatiladi
// catch: Ushbu bayonot xatoni boshqarish uchun ishlatiladi
// throw: Ushbu bayonot maxsus xatolar yaratish uchun ishlatiladi.
// Finally: Ushbu bayonot natijadan qat'iy nazar try and catchdan keyin kodni bajarish uchun ishlatiladi.

// 230.  Javascriptda ikki turdagi looplar qanday?
// Kirish nazorati ostidagi pastadirlar: Ushbu turdagi halqa turida sinov holati halqa tanasiga kirishdan oldin tekshiriladi. Masalan, For Loop va While Loop ushbu turkumga kiradi.
// Boshqariladigan pastadirlardan chiqish: bu turdagi halqa turida sinov holati halqa tanasining oxirida tekshiriladi yoki baholanadi. ya'ni, test sharti rost yoki noto'g'ri bo'lishidan qat'i nazar, pastadir tanasi kamida bir marta bajariladi. Masalan, do-while sikli ushbu turkumga kiradi.

// 231.  nodejs nima
// Node.js tezkor va kengaytiriladigan tarmoq ilovalarini osongina yaratish uchun Chrome JavaScript ish vaqti asosida yaratilgan server tomoni platformasidir. Bu Google'ning V8 JavaScript dvigateli va libuv kutubxonasidan foydalanadigan voqealarga asoslangan, bloklanmagan, asinxron kiritish-chiqarish ish vaqti.

// 232.  Intl ob'ekti nima
// Intl ob'ekti ECMAScript Internationalization API uchun nom maydoni bo'lib, u tilga sezgir qatorlarni taqqoslashni, raqamlarni formatlashni va sana va vaqtni formatlashni ta'minlaydi. U bir nechta konstruktorlar va tilga sezgir funktsiyalarga kirishni ta'minlaydi.

// 233.  Tilga xos sana va vaqtni formatlashni qanday amalga oshirasiz
// Intl.DateTimeFormat Tilga sezgir sana va vaqtni formatlashni ta'minlaydigan ob'ektlar uchun konstruktor bo'lgan ob'ektdan foydalanishingiz mumkin . Keling, bu xatti-harakatni misol bilan ko'rib chiqaylik,

// var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
// console.log(new Intl.DateTimeFormat('en-GB').format(date)); // 07/08/2019
// console.log(new Intl.DateTimeFormat('en-AU').format(date)); // 07/08/2019

// 234.  Iterator nima
// Iterator - bu ketma-ketlikni va uning tugashi bilan qaytariladigan qiymatni belgilaydigan ob'ekt. U Iterator protokolini next()ikkita xususiyatga ega ob'ektni qaytaradigan usul bilan amalga oshiradi: value(ketma-ketlikdagi keyingi qiymat) va done(agar ketma-ketlikdagi oxirgi qiymat iste'mol qilingan bo'lsa, bu to'g'ri bo'ladi).

// 235.  Sinxron iteratsiya qanday ishlaydi
// Sinxron iteratsiya ES6 da joriy qilingan va u quyidagi komponentlar to'plami bilan ishlaydi,
// Takrorlanadigan: Bu kaliti Symbol.iterator bo'lgan usul orqali takrorlanishi mumkin bo'lgan ob'ekt. Iterator: Bu takrorlanadigan chaqiruv orqali qaytariladigan ob'ekt [Symbol.iterator](). Ushbu iterator ob'ekti har bir takrorlangan elementni ob'ektga o'rab oladi va uni next()usul orqali birma-bir qaytaradi. IteratorResult: Bu usul bilan qaytarilgan ob'ekt next(). Ob'ekt ikkita xususiyatni o'z ichiga oladi; valuexususiyat takrorlangan elementni o'z ichiga oladi va xususiyat doneelement oxirgi element yoki yo'qligini aniqlaydi.
// Keling, quyidagi kabi massiv bilan sinxron iteratsiyani namoyish qilaylik,
// const iterable = [ 'bir' , 'ikki' , 'uch' ] ;
// const iterator = iterable [ Symbol . iterator ] ( ) ;
// konsol . log ( iterator . keyingi ( ) ) ;  // {qiymat: 'bir', bajarildi: false}
// konsol . log ( iterator . keyingi ( ) ) ;  // {qiymat: 'ikki', bajarildi: false}
// konsol .log ( iterator . keyingi ( ) ) ;  // {qiymat: 'uch', bajarildi: noto'g'ri}
// konsol . log ( iterator . keyingi ( ) ) ;  // {qiymat: 'aniqlanmagan, bajarilgan: rost}
// 236.  Hodisa sikli(event loop) nima
// Voqealar davri - bu qayta qo'ng'iroq qilish funktsiyalari navbati. Asinx funksiyasi bajarilganda, qayta qo'ng'iroq qilish funktsiyasi navbatga suriladi. JavaScript mexanizmi asinxronizatsiya funksiyasi kodni bajarishni tugatmaguncha voqea siklini qayta ishlashni boshlamaydi. Eslatma: Bu Node.js-ga JavaScript-ning bir torli bo'lishiga qaramay, bloklanmagan kiritish-chiqarish operatsiyalarini bajarishga imkon beradi.

// 237.  Call stack nima ?
// Call Stack bu dasturdagi funksiya chaqiruvlarini kuzatib borish uchun JavaScript tarjimonlari uchun maʼlumotlar tuzilmasi. Uning ikkita asosiy harakati bor,
// Har safar funktsiyani bajarish uchun chaqirsangiz, uni stekga surasiz.
// Bajarish tugagach, funktsiya stekdan chiqariladi.
// Keling, misol keltiraylik va bu holat diagramma formatida ko'rsatilishi
// och funktsiya ( ) {
//    eatFruits ( ) ;
// }
// funktsiya eatFruits ( ) {
//    "Men mevalar iste'mol qilaman" ni qaytarish ; } // `hungry` funksiyasini ishga tushiring hungry ( ) ;

// Yuqoridagi kod quyidagi kabi qo'ng'iroqlar to'plamida qayta ishlanadi,
// Funktsiyani qo'ng'iroqlar to'plami ro'yxatiga qo'shing hungry() va kodni bajaring.
// Funktsiyani qo'ng'iroqlar to'plami ro'yxatiga qo'shing eatFruits() va kodni bajaring.
// eatFruits() Funktsiyani qo'ng'iroqlar to'plami ro'yxatidan o'chirib tashlang .
// hungry()Qo'ng'iroqlar to'plami ro'yxatidan funktsiyani o'chirib tashlang , chunki endi hech qanday element yo'q.

// 238.  Hodisa navbati (event qoeue) nima
// Voqea navbati qayta ishlash uchun stekga yangi funksiyalarni yuborish uchun javobgardir. U barcha operatsiyalar bajarilishi uchun yuborilishi kerak bo'lgan to'g'ri ketma-ketlikni saqlash uchun navbat ma'lumotlar tuzilmasiga amal qiladi. Asinx funksiyasi chaqirilganda, u brauzer API ga yuboriladi. Bular brauzerga o'rnatilgan API.

// 239.  Dekorator nima
// Dekorator - bu funktsiyani baholovchi va maqsad, nom va dekorator deskriptorini argument sifatida qabul qiluvchi ifoda. Bundan tashqari, u ixtiyoriy ravishda maqsadli ob'ektga o'rnatish uchun dekorativ identifikatorni qaytaradi. Dizayn vaqtida foydalanuvchi sinfi uchun administrator dekoratorini aniqlaymiz,
// funksiya admin ( isAdmin ) {
//    qaytish funktsiyasi ( maqsad ) {
//        maqsad . isAdmin = isAdmin ;
//    }
// }

// @ admin ( haqiqiy )
// sinf Foydalanuvchi ( ) {
// }
// konsol . log ( Foydalanuvchi . isAdmin ) ; //true

//  @ admin ( false )
//  klassi Foydalanuvchi ( ) {
//  }
//  konsoli. log ( Foydalanuvchi . isAdmin ) ; // yolg'on

// 240.  Intl obyektining xossalari(Intl object prop) qanday
// Quyida Intl ob'ektida mavjud xususiyatlar ro'yxati keltirilgan,
// Collator: Bular tilga sezgir satrlarni taqqoslash imkonini beruvchi ob'ektlardir.
// DateTimeFormat: Bular tilga sezgir sana va vaqtni formatlashni ta'minlaydigan ob'ektlardir.
// ListFormat: Bular tilga sezgir roʻyxat formatlash imkonini beruvchi obʼyektlardir.
// NumberFormat: tilga sezgir raqamlarni formatlashni ta'minlaydigan ob'ektlar.
// PluralRules: ko‘plikka sezgir formatlash va ko‘plik uchun tilga xos qoidalarni faollashtiradigan ob’ektlar.
// RelativeTimeFormat: tilga sezgir nisbiy vaqtni formatlashni ta'minlaydigan ob'ektlar.

// 241.  Unary operator nima
// Birlik(+) operator oʻzgaruvchini raqamga aylantirish uchun ishlatiladi.Agar oʻzgaruvchini oʻzgartirib boʻlmasa, u baribir raqamga aylanadi, lekin qiymati NaN. Keling, bu xatti-harakatni harakatda ko'rib chiqaylik.
// var x = "100" ;
// var y = + x ;
// konsol . log ( x typeof , typeof y ) ; // satr, raqam var a = "Salom" ; var b = + a ; konsol . log ( typeof a , typeof b , b ) ; // satr, raqam, NaN

// 242.  Massivdagi elementlarni qanday saralaysiz
// Sort() usuli massiv elementlarini joyida tartiblash uchun ishlatiladi va tartiblangan massivni qaytaradi. Foydalanish misoli quyidagi kabi bo'ladi,

// var months = ["Aug", "Sep", "Jan", "June"];
// months.sort();
// console.log(months); //  ["Aug", "Jan", "June", "Sep"]

// 243.  Massivlarni saralashda compareFunction nimadan iborat
// Tartiblash tartibini aniqlash uchun compareFunction funksiyasidan foydalaniladi. Agar o'tkazib yuborilsa, massiv elementlari satrlarga aylantiriladi, so'ngra har bir belgining Unicode kod nuqtasi qiymatiga ko'ra tartiblanadi. Keling, compareFunction dan foydalanishni ko'rish uchun misol keltiramiz,

// let numbers = [1, 2, 5, 3, 4];
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [5, 4, 3, 2, 1]
// 244.  Massivni qanday teskari aylantirasiz
// Massivdagi elementlarni teskari aylantirish uchun reverse() usulidan foydalanishingiz mumkin. Bu usul massivni kamayish tartibida saralash uchun foydalidir. Keling, misolda reverse() usulidan foydalanishni ko'rib chiqaylik,

// let numbers = [1, 2, 5, 3, 4];
// numbers.sort((a, b) => b - a);
// numbers.reverse();
// console.log(numbers); // [1, 2, 3, 4 ,5]

// 245.  Massivda minimal va maksimal qiymatlarni qanday topasiz
// Massivdagi minimal va maksimal elementlarni topish uchun massiv oʻzgaruvchilari Math.minva usullaridan foydalanishingiz mumkin . Math.maxMassivda min va maksimal qiymatlarni topish uchun ikkita funksiya yarataylik,

// var marks = [50, 20, 70, 60, 45, 30];
// function findMin(arr) {
//   return Math.min.apply(null, arr);
// }
// function findMax(arr) {
//   return Math.max.apply(null, arr);
// }

// console.log(findMin(marks));
// console.log(findMax(marks));

// 246.  Matematik funktsiyalarsiz min va maksimal qiymatlarni qanday topish mumkin
// Minimal va maksimal qiymatlarni topish uchun har bir qiymatni eng past yoki eng yuqori qiymat bilan solishtirgan holda massivda aylanib yuradigan funksiyalarni yozishingiz mumkin. Keling, minimal va maksimal qiymatlarni topish uchun ushbu funktsiyalarni yarataylik,

//  var marks = [50, 20, 70, 60, 45, 30];
//  function findMin(arr) {
//    var length = arr.length
//    var min = Infinity;
//    while (length--) {
//      if (arr[length] < min) {
//        min = arr[len];
//      }
//    }
//    return min;
//  }

//  function findMax(arr) {
//    var length = arr.length
//    var max = -Infinity;
//    while (len--) {
//      if (arr[length] > max) {
//        max = arr[length];
//      }
//    }
//    return max;
//  }

//  console.log(findMin(marks));
//  console.log(findMax(marks));

// 247.  Bo'sh statment nima va uning maqsadi
// Bo'sh bayonot nuqta-vergul (;) bo'lib, JavaScript sintaksisi talab qilsa ham, hech qanday bayonot bajarilmasligini bildiradi. Bo'sh bayonot bilan hech qanday harakat yo'qligi sababli siz undan kamroq foydalanish deb o'ylashingiz mumkin, ammo bo'sh ibora vaqti-vaqti bilan bo'sh tanaga ega bo'lgan tsikl yaratmoqchi bo'lganingizda foydali bo'ladi. Masalan, siz nol qiymatga ega massivni quyidagi tarzda ishga tushirishingiz mumkin,

// // Initialize an array a
// for(int i=0; i < a.length; a[i++] = 0) ;

// 248.  Modulning metama'lumotlarini qanday olish mumkin
// Siz import.metaJavaScript moduliga kontekstga xos meta-ma'lumotlarni ochib beruvchi meta-xususiyat bo'lgan ob'ektdan foydalanishingiz mumkin. U modulning URL manzili kabi joriy modul haqidagi ma'lumotlarni o'z ichiga oladi. Brauzerlarda siz NodeJS-dan farqli meta-ma'lumotlarni olishingiz mumkin.

// <script type="module" src="welcome-module.js"></script>
// console.log(import.meta); // { url: "file:///home/user/welcome-module.js" }

// 249.  Vergul operatori nima
// Vergul operatori uning har bir operandini chapdan o'ngga baholash uchun ishlatiladi va oxirgi operandning qiymatini qaytaradi. Bu massivlar, ob'ektlar va funksiya argumentlari va parametrlarida verguldan foydalanishdan butunlay farq qiladi. Masalan, raqamli iboralar uchun foydalanish quyidagicha bo'ladi:

// var x = 1;
// x = (x++, x);

// console.log(x); // 2
// 250.  Vergul operatorining afzalligi nimada
// Odatda bitta ifodani talab qiladigan joyga bir nechta iboralarni kiritish uchun ishlatiladi. Ushbu vergul operatorining keng tarqalgan qo'llanilishidan biri tsiklda bir nechta parametrlarni taqdim foretishdir. Masalan, quyida keltirilgan for tsikli vergul operatori yordamida bitta joyda bir nechta ifodalardan foydalanadi,

// for (var a = 0, b =10; a <= 10; a++, b--)

// Vergul operatoridan qaytishdan oldin qayta ishlanadigan qaytarish bayonotida ham foydalanishingiz mumkin.

// function myFunction() {
//    var a = 1;
//    return (a += 10, a); // 11
// }

// 251.  Typesciprt nima ?
// TypeScript - bu Microsoft tomonidan yaratilgan JavaScript-ning terilgan to'plami bo'lib, u ixtiyoriy turlar, sinflar, asinxron/kutish va boshqa ko'plab xususiyatlarni qo'shadi va oddiy JavaScript-ga kompilyatsiya qiladi. Angular butunlay TypeScript-da qurilgan va asosiy til sifatida ishlatiladi. Siz uni global miqyosda o'rnatishingiz mumkin

// npm install -g typescript
// Keling, TypeScript-dan foydalanishning oddiy misolini ko'rib chiqaylik,
// function greeting(name: string): string {
//    return "Hello, " + name;
// }

// let user = "Sudheer";

// console.log(greeting(user));

// 252.  Javascript va typescript o'rtasidagi farqlar qanday
// Quyida javascript va typescript o'rtasidagi farqlar ro'yxati keltirilgan,

// 253.  Typescriptning javascriptdan qanday afzalliklari bor
// Quyida matn terishning javascriptdan ba'zi afzalliklari keltirilgan,
// TypeScript kompilyatsiya vaqtidagi xatolarni faqat ishlab chiqish vaqtida topishi mumkin va bu ish vaqtidagi xatolarni kamroq qiladi. Holbuki, javascript talqin qilinadigan tildir.
// TypeScript qattiq terilgan yoki statik yozishni qo'llab-quvvatlaydi, bu kompilyatsiya vaqtida turdagi to'g'riligini tekshirish imkonini beradi. Bu javascriptda mavjud emas.
// TypeScript kompilyatori .ts fayllarini ES3, ES4 va ES5 ga kompilyatsiya qilishi mumkin, ba'zi brauzerlarda qo'llab-quvvatlanmaydigan javascriptning ES6 xususiyatlaridan farqli o'laroq.

// 254.  Ob'ektni ishga tushirish (obj initialize)  nima
// Ob'ektni ishga tushirish - bu ob'ektni ishga tushirishni tavsiflovchi ifoda. Ushbu iboraning sintaksisi jingalak qavslar ({}) ichiga olingan nol yoki undan koʻp xususiyat nomlari va obʼyektning bogʻlangan qiymatlarining vergul bilan ajratilgan roʻyxati sifatida ifodalanadi. Bu literal notation sifatida ham tanilgan. Bu ob'ektni yaratish usullaridan biridir.

// var initObject = {a: 'John', b: 50, c: {}};

// console.log(initObject.a); // John

// 255.  Konstruktor usuli nima
// Konstruktor usuli - bu sinf ichida yaratilgan ob'ektni yaratish va ishga tushirish uchun maxsus usul. Agar siz konstruktor usulini ko'rsatmasangiz, standart konstruktor ishlatiladi. Konstruktordan foydalanish misoli quyidagicha bo'ladi,

// class Employee {
//   constructor() {
//     this.name = "John";
//   }
// }

// var employeeObject = new Employee();

// console.log(employeeObject.name); // John

// 256.  Agar classda bir necha marta konstruktor yozsangiz nima bo'ladi
// Sinfdagi "konstruktor" maxsus usul bo'lib, u sinfda faqat bir marta aniqlanishi kerak. ya'ni, agar siz konstruktor usulini sinfda bir necha marta yozsangiz, u SyntaxErrorxatoga yo'l qo'yadi.

//  class Employee {
//    constructor() {
//      this.name = "John";
//    }
//    constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
//      this.age = 30;
//    }
//  }

//  var employeeObject = new Employee();

//  console.log(employeeObject.name);
// 257.  Parent classning konstruktorini qanday chaqirish mumkin?
// Siz superkalit so'zni ota-klass konstruktoriga qo'ng'iroq qilish uchun ishlatishingiz mumkin. Esda tutingki, super()"bu" havolasidan foydalanishdan oldin uni chaqirish kerak. Aks holda, bu havola xatosiga olib keladi. Keling, undan foydalanish,

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//     this.name = 'Square';
//   }
//   get area() {
//     return this.width * this.height;
//   }

//   set area(value) {
//     this.area = value;
//   }
// }
// 258.  Ob'ektning prototipini qanday olish mumkin
// ES5 da, agar obj parametri ob'ekt bo'lmasa, u TypeError istisnosini chiqaradi. Holbuki ES2015 da parametr .ga majburlanadi Object.

// // ES5
// Object.getPrototypeOf('James'); // TypeError: "James" is not an object
// // ES2015
// Object.getPrototypeOf('James'); // String.prototype

// 259.  Agar getPrototype usuli uchun string turini o'tkazsam nima bo'ladi
// ES5 da, agar obj parametri ob'ekt bo'lmasa, u TypeError istisnosini chiqaradi. Holbuki ES2015 da parametr .ga majburlanadi Object.

// // ES5
// Object.getPrototypeOf('James'); // TypeError: "James" is not an object
// // ES2015
// Object.getPrototypeOf('James'); // String.prototype

// 260.  Bir ob'ektning prototipini boshqasiga qanday o'rnatish mumkin
// Object.setPrototypeOf()Belgilangan ob'ektning prototipini (ya'ni, ichki Prototypexususiyatni) boshqa ob'ektga yoki nullga o'rnatadigan usuldan foydalanishingiz mumkin . Misol uchun, agar siz kvadrat ob'ektning prototipini to'rtburchak ob'ektga o'rnatmoqchi bo'lsangiz, quyidagicha bo'ladi:

// Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
// Object.setPrototypeOf({}, null);

// 261.  Ob'ektni kengaytirish(extendable) mumkin yoki yo'qligini qanday tekshirish mumkin
// Usul Object.isExtensible()ob'ektning kengaytirilishi mumkin yoki yo'qligini aniqlash uchun ishlatiladi. ya'ni, unga yangi xususiyatlar qo'shilishi mumkinmi yoki yo'qmi.

// const newObject = {};
// console.log(Object.isExtensible(newObject)); //true

// 262.  Ob'ektni kengaytirishni qanday oldini olish mumkin
// Usul Object.preventExtensions()ob'ektga yangi xususiyatlar qo'shilishining oldini olish uchun ishlatiladi. Boshqacha qilib aytganda, u ob'ektga kelajakdagi kengaytmalarni oldini oladi. Keling, ushbu mulkdan foydalanishni ko'rib chiqaylik,

// const newObject = {};
// Object.preventExtensions(newObject); // NOT extendable

// try {
//   Object.defineProperty(newObject, 'newProperty', { // Adding new property
//     value: 100
//   });
// } catch (e) {
//   console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
// }

// 263.  Ob'ektni kengaytirilmaydigan qilishning turli usullari qanday
// Siz kengaytirilmaydigan ob'ektni 3 usulda belgilashingiz mumkin,
// Object.preventExtensions
// Ob'ekt.muhr
// Ob'ekt. muzlatish

// var newObject = { } ;

// Ob'ekt . preventExtensions ( newObject ) ; // Oldini olish ob'ektlari kengaytirilmaydigan
// Ob'ekt . isExtensible ( newObject ) ; // false

// var sealedObject = Ob'ekt . muhr ( { } ) ; // Muhrlangan ob'ektlar kengaytirilmaydigan
// ob'ektdir . isExtensible ( seledObject ) ; // false

// var frozenObject = Ob'ekt. muzlatish ( { } ) ; // Muzlatilgan ob'ektlar kengaytirilmaydigan
// ob'ektdir . isExtensible ( frozenObject ) ; // yolg'on

// 264.  Ob'ektda bir nechta xususiyatlarni qanday aniqlash mumkin
// Usul Object.defineProperties() to'g'ridan-to'g'ri ob'ektda yangi xususiyatlarni aniqlash yoki mavjud xususiyatlarni o'zgartirish va ob'ektni qaytarish uchun ishlatiladi. Bo'sh ob'ektda bir nechta xususiyatni aniqlaymiz,

// const newObject = {};

// Object.defineProperties(newObject, {
//   newProperty1: {
//     value: 'John',
//     writable: true
//   },
//   newProperty2: {}
// });

// 265.  Javascriptda MEAN nima
// MEAN (MongoDB, Express, AngularJS va Node.js) stek - bu dinamik veb-ilovalarni yaratish uchun mavjud bo'lgan eng mashhur ochiq manbali JavaScript dasturiy ta'minot stekidir, bunda siz veb-loyihaning server tomoni va mijoz tomonini yozishingiz mumkin. butunlay JavaScript-da.

// 266.  Javascriptda xiralashish(Obfuscation ) nima
// Obfuscation - bu odamlar tushunishi qiyin bo'lgan tushunarsiz JavaScript kodini (ya'ni, manba yoki mashina kodi) yaratishning ataylab harakati. Bu shifrlashga o'xshash narsa, lekin mashina kodni tushunishi va uni bajarishi mumkin. Obfuscationdan oldin quyidagi funktsiyani ko'rib chiqaylik,
// function greeting() {
//    console.log('Hello, welcome to JS world');
// }
// Va Obfuscation kodidan keyin u quyidagi ko'rinishda bo'ladi,

// eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2 1(){0.3(\'4, 7 6 5 8\')}',9,9,'console|greeting|function|log|Hello|JS|to|welcome|world'.split('|'),0,{}))

// 267.  Nima uchun sizga obfuscation kerak ?
// Quyida chalkashlikning bir necha sabablari keltirilgan,
// Kod hajmi kamayadi. Shunday qilib, server va mijoz o'rtasida ma'lumotlarni uzatish tez bo'ladi.
// U biznes mantiqini tashqi dunyodan yashiradi va kodni boshqalardan himoya qiladi
// Teskari muhandislik juda qiyin
// Yuklab olish vaqti qisqaradi

// 268.  Kichiklashtirish(minification) nima
// Kichkinalashtirish - bu barcha keraksiz belgilarni olib tashlash jarayoni (bo'sh joylar olib tashlanadi) va o'zgaruvchilar uning funksionalligini o'zgartirmasdan qayta nomlanadi. Bu, shuningdek, chalkashlikning bir turi.

// 269.  Kichiklashtirishning qanday afzalliklari bor
// Odatda og'ir trafik va resurslarning intensiv talablari uchun minimallashtirishdan foydalanish tavsiya etiladi. Bu quyidagi afzalliklarga ega bo'lgan fayl o'lchamlarini kamaytiradi,
// Veb-sahifani yuklash vaqtini qisqartiradi
// Tarmoqli kengligidan foydalanishni tejaydi

// 270.  Obfuscation va shifrlash o'rtasidagi farqlar qanday
// Quyida obfuscation va shifrlash o'rtasidagi asosiy farqlar keltirilgan,

// 271.  Kichiklashtirish uchun qanday umumiy vositalar qo'llaniladi
// Javascript fayllarini kichiklashtirish uchun ko'plab onlayn/oflayn vositalar mavjud,
// Google-ning yopish kompilyatori
// UglifyJS2
// jsmin
// javascript-minifier.com/
// prettydiff.com

// 272.  Javascript yordamida shaklni(form) tekshirishni qanday amalga oshirasiz
// JavaScript HTML formasini tekshirish uchun ishlatilishi mumkin. Misol uchun, agar forma maydoni bo'sh bo'lsa, shakl yuborilishiga yo'l qo'ymaslik uchun funktsiya xabar berishi va "false" ni qaytarishi kerak. Keling, html shaklida foydalanuvchi loginini amalga oshiramiz,

// <form name="myForm" onsubmit="return validateForm()" method="post">
// User name: <input type="text" name="uname">
// <input type="submit" value="Submit">
// </form>

// Va foydalanuvchi loginni tekshirish quyida keltirilgan

// function validateForm() {
//   var x = document.forms["myForm"]["uname"].value;
//   if (x == "") {
//     alert("The username shouldn't be empty");
//     return false;
//   }
// }

// 273.  Shaklni(form) tekshirishni javascriptsiz qanday amalga oshirasiz
// HTML formasini tekshirishni JavaScript-dan foydalanmasdan avtomatik ravishda amalga oshirishingiz mumkin. requiredKirish boʻsh boʻlganda shaklni yuborishni oldini olish uchun atributni qoʻllash orqali tekshirish yoqilgan .

// <form method="post">
//   <input type="text" name="uname" required>
//   <input type="submit" value="Submit">
// </form>

// 274.  Cheklovlarni tekshirish uchun qanday DOM usullari mavjud
// Quyidagi DOM usullari noto'g'ri kiritishda cheklovlarni tekshirish uchun mavjud,
// checkValidity(): Agar kirish elementida to'g'ri ma'lumotlar mavjud bo'lsa, u rostni qaytaradi.
// setCustomValidity(): U kiritish elementining validationMessage xususiyatini o'rnatish uchun ishlatiladi. Keling, DOM tekshiruvlari bilan foydalanuvchi login formasini olaylik

// funktsiya myFunction ( ) {
//   var userName = hujjat . getElementById ( "nomlanishi" ) ;
//   agar ( ! userName . checkValidity ( ) ) {
//     hujjat . getElementById ( "xabar" ) . innerHTML = foydalanuvchi nomi . validationMessage ;
//   } else {
//     hujjat . getElementById ( "xabar" ) . innerHTML = "To'g'ri foydalanuvchi nomi kiritildi" ;
//   }
// }

// 275.  Mavjud cheklovni tekshirish DOM xususiyatlari qanday
// Quyida mavjud bo'lgan cheklashlarni tekshirishning ba'zi DOM xususiyatlarining ro'yxati keltirilgan,
// haqiqiylik: U kirish elementining haqiqiyligi bilan bog'liq boolean xususiyatlar ro'yxatini taqdim etadi.
// validationMessage: Yaroqlilik noto'g'ri bo'lsa, u xabarni ko'rsatadi.
// willValidate: Bu kirish elementi tekshiriladimi yoki yo'qligini bildiradi.

// 276.  Yaroqlilik xususiyatlarining ro'yxati qanday
// Kirish elementining haqiqiylik xususiyati ma'lumotlarning haqiqiyligi bilan bog'liq xususiyatlar to'plamini ta'minlaydi.
// customError: Agar moslashtirilgan toʻgʻrilik xabari oʻrnatilgan boʻlsa, u haqiqatni qaytaradi.
// patternMismatch: Agar element qiymati uning naqsh atributiga mos kelmasa, u haqiqatni qaytaradi.
// rangeOverflow: Agar element qiymati uning maksimal atributidan katta bo'lsa, u haqiqatni qaytaradi.
// rangeUnderflow: Agar element qiymati uning min atributidan kichik bo'lsa, u haqiqatni qaytaradi.
// stepMismatch: Agar elementning qiymati step atributiga ko'ra noto'g'ri bo'lsa, u haqiqatni qaytaradi.
// tooLong: Agar element qiymati uning maxLength atributidan oshsa, u rostni qaytaradi.
// typeMismatch: Agar elementning qiymati type atributiga ko'ra noto'g'ri bo'lsa, u rostni qaytaradi.
// valueMissing: Agar talab qilinadigan atributga ega element hech qanday qiymatga ega bo'lmasa, u haqiqatni qaytaradi.
// valid: Agar elementning qiymati to'g'ri bo'lsa, u haqiqatni qaytaradi.

// 277.  rangeOverflow xususiyatidan foydalanishga misol keltiring
// Agar element qiymati uning maksimal atributidan katta bo'lsa, rangeOverflow xususiyati haqiqatni qaytaradi. Misol uchun, agar qiymat 100 dan ortiq bo'lsa, quyidagi shaklni yuborish xato qiladi,
// <input id="age" type="number" max="100">
// <button onclick="myOverflowFunction()">OK</button>

// function myOverflowFunction() {
//   if (document.getElementById("age").validity.rangeOverflow) {
//     alert("The mentioned age is not allowed");
//   }
// }

// 278.  Enums xususiyati javascriptda mavjudmi?
// Yo'q, JavaScript enumlarni qo'llab-quvvatlamaydi. Ammo ularni simulyatsiya qilish uchun turli xil echimlar mavjud, garchi ular aniq ekvivalentlarni taqdim etmasa ham. Masalan, siz ob'ektda muzlatish yoki muhrni ishlatishingiz mumkin,

// var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})

// 279.  Enum nima
// Enum - bu o'zgaruvchilarni oldindan belgilangan doimiylar to'plamidan bitta qiymat bilan cheklovchi tur. JavaScript-da raqamlar yo'q, lekin typescript o'rnatilgan enum yordamini ta'minlaydi.
// enum Color {
//  RED, GREEN, BLUE
// }

// 280.  Ob'ektning barcha xususiyatlarini qanday ro'yxatga olasiz
// Object.getOwnPropertyNames() To'g'ridan-to'g'ri berilgan ob'ektda topilgan barcha xususiyatlar qatorini qaytaradigan usuldan foydalanishingiz mumkin . Keling, uni misolda ishlatishni ko'rib chiqaylik,

// const newObject = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// console.log(Object.getOwnPropertyNames(newObject));  ["a", "b", "c"]

// 281.  Ob'ektning xossa tavsiflovchilarini (prop descriptors) qanday olish mumkin
// Siz Object.getOwnPropertyDescriptors()berilgan ob'ektning barcha o'ziga xos xususiyat identifikatorlarini qaytaradigan usuldan foydalanishingiz mumkin. Ushbu usuldan foydalanish misoli quyida keltirilgan,

//  const newObject = {
//    a: 1,
//    b: 2,
//    c: 3
//  };
// const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
// console.log(descriptorsObject.a.writable); //true
// console.log(descriptorsObject.a.configurable); //true
// console.log(descriptorsObject.a.enumerable); //true
// console.log(descriptorsObject.a.value); // 1

// 282.  Xususiyat deskriptori tomonidan taqdim etilgan atributlar qanday
// Xususiyat deskriptori - bu quyidagi atributlarga ega bo'lgan yozuv
// qiymat: mulk bilan bog'liq qiymat
// yozilishi mumkin: Mulk bilan bog'liq qiymatni o'zgartirish mumkinmi yoki yo'qligini aniqlaydi
// sozlanishi: Agar ushbu xususiyat identifikatorining turini o'zgartirish mumkin bo'lsa va xususiyat mos keladigan ob'ektdan o'chirilishi mumkin bo'lsa, true qiymatini qaytaradi.
// enumerable: Xususiyat tegishli ob'ektdagi xususiyatlarni sanab o'tishda paydo bo'ladimi yoki yo'qligini aniqlaydi.
// set: Xususiyat uchun o'rnatuvchi sifatida xizmat qiluvchi funktsiya
// get: Mulk uchun oluvchi sifatida xizmat qiluvchi funktsiya

// 283.  Classlarni qanday uzaytirasiz(extends)
// Extends Kalit so'z sinf deklaratsiyasida/iboralarida boshqa sinfning bolasi bo'lgan sinf yaratish uchun ishlatiladi . U o'rnatilgan ob'ektlar bilan bir qatorda maxsus sinflarni pastki sinflarga ajratish uchun ishlatilishi mumkin. Sintaksis quyidagi kabi bo'ladi,

// class ChildClass extends ParentClass { ... }

// Polygon ota-klassidan Square kichik sinfiga misol keltiraylik,

//  class Square extends Rectangle {
//    constructor(length) {
//      super(length, length);
//      this.name = 'Square';
//    }

//    get area() {
//      return this.width * this.height;
//    }

//    set area(value) {
//      this.area = value;
//    }
//  }

// 284.  Sahifani qayta yuklamasdan urlni qanday o'zgartirish mumkin
// Window.location.url property o'zgartirish uchun foydali bo'ladi, lekin u sahifani qayta yuklaydi. HTML5 tegishli ravishda tarix yozuvlarini qo'shish va o'zgartirish imkonini beruvchi history.pushState() va usullarini taqdim etdi. history.replaceState()Masalan, pushState-dan quyidagi kabi foydalanishingiz mumkin,

// window.history.pushState('page2', 'Title', '/page2.html');

// 285.  Massiv ma'lum bir qiymatni o'z ichiga oladi yoki yo'qligini qanday tekshirish mumkin
// Usul Array#includes()massiv o'z yozuvlari orasida ma'lum bir qiymatni o'z ichiga oladi yoki yo'qligini aniqlash uchun ishlatiladi yoki rost yoki yolg'on. Massiv ichidagi elementni (raqamli va satr) topish misolini ko'rib chiqaylik.

// var numericArray = [1, 2, 3, 4];
// console.log(numericArray.includes(3)); // true

// var stringArray = ['green', 'yellow', 'blue'];
// console.log(stringArray.includes('blue')); //true

// 286.  Skayar massivlarni qanday solishtirasiz
// Ikki skaler (to'g'ridan-to'g'ri ===) massivlarni solishtirish uchun massivlarning uzunligi va har bir usulidan foydalanishingiz mumkin. Ushbu iboralarning kombinatsiyasi kutilgan natijani berishi mumkin,
// const arrayFirst = [ 1 , 2 , 3 , 4 , 5 ] ;
// const arraySecond = [ 1 , 2 , 3 , 4 , 5 ] ;
// konsol . log ( arrayFirst . length === arraySecond . length && arrayFirst . har bir ( ( qiymat , indeks ) => qiymat === arraySecond [ indeks ] ) ; _ // rost
// Agar siz tartibdan qat'i nazar massivlarni solishtirmoqchi bo'lsangiz, ularni avval tartiblashingiz kerak,
// const arrayFirst = [ 2 , 3 , 1 , 4 , 5 ] ;
// const arraySecond = [ 1 , 2 , 3 , 4 , 5 ] ;
// konsol . log ( arrayFirst . length === arraySecond . length && arrayFirst . sort ( ) . every ( ( qiymat , indeks )) = > qiymat === arraySecond [ indeks ] ) ; // rost

// 287.  Get parametrlaridan qiymatni qanday olish mumkin
// new URL() Ob'ekt url satrini qabul qiladi va bu searchParams ob'ektning xususiyati get parametrlariga kirish uchun ishlatilishi mumkin. window.location Esda tutingki , eski brauzerlarda (jumladan, IE) URL-manzilga kirish uchun polyfill-dan foydalanish kerak bo'lishi mumkin .

// let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
// let url = new URL(urlString);
// let parameterZ = url.searchParams.get("z");
// console.log(parameterZ); // 3

// 288.  Qanday qilib raqamlarni vergul bilan ming ajratuvchi sifatida chop qilasiz
// Siz Number.prototype.toLocaleString() ushbu raqamning ming ajratuvchisi, valyutasi va boshqalar kabi tilga sezgir ko'rinishga ega satrni qaytaradigan usuldan foydalanishingiz mumkin.

// function convertToThousandFormat(x){
//   return x.toLocaleString(); // 12,345.679
// }

// console.log(convertToThousandFormat(12345.6789));

// 289.  Java va javascript o'rtasidagi farq nima
// Ikkalasi ham mutlaqo bog'liq bo'lmagan dasturlash tillari va ular o'rtasida aloqa yo'q. Java statik tarzda teriladi, kompilyatsiya qilinadi, o'z VM da ishlaydi. Holbuki, Javascript dinamik ravishda yoziladi, talqin qilinadi va brauzer va nodejs muhitida ishlaydi. Keling, jadval formatidagi asosiy farqlarni ko'rib chiqaylik,

// 290.  JavaScript namespace qo'llab-quvvatlaydimi?
// JavaScript sukut bo'yicha nom maydonini qo'llab-quvvatlamaydi. Shunday qilib, agar siz biron bir element (funktsiya, usul, ob'ekt, o'zgaruvchi) yaratsangiz, u global bo'lib, global nomlar maydonini ifloslantiradi. Hech qanday nom maydonisiz ikkita funktsiyani aniqlashga misol keltiraylik,

// function func1() {
//     console.log("This is a first definition");

// }
// function func1() {
//     console.log("This is a second definition");
// }
// func1(); // This is a second definition

// U har doim ikkinchi funktsiya ta'rifini chaqiradi. Bunday holda, nom maydoni nomlarning to'qnashuvi muammosini hal qiladi.

// 291.  Namescpace qanday e'lon qilasiz
// JavaScript-da nom bo'shliqlari bo'lmasa ham, nomlar bo'shliqlarini yaratish uchun Objects, IIFE dan foydalanishimiz mumkin.
// Ob'ektning harf belgisidan foydalanish: O'zgaruvchilar va funktsiyalarni nom maydoni vazifasini bajaradigan Ob'ekt literaliga o'tkazamiz. Shundan so'ng siz ularga ob'ekt belgilaridan foydalanib kirishingiz mumkin
// var namespaceOne = {
//    function func1() {
//        console.log("This is a first definition");
//    }
// }
// var namespaceTwo = {
//      function func1() {
//          console.log("This is a second definition");
//      }
//  }
// namespaceOne.func1(); // This is a first definition
// namespaceTwo.func1(); // This is a second definition

// IIFE (Immediately invoked function expression) dan foydalanish: IIFE ning tashqi qavslar juftligi uning ichidagi barcha kodlar uchun mahalliy qamrovni yaratadi va anonim funksiyani funksiya ifodasiga aylantiradi. Shu sababli, nom maydoni sifatida ishlash uchun ikkita turli funktsiya ifodalarida bir xil funktsiyani yaratishingiz mumkin.

// ( funksiya ( ) {
//  fun1 funktsiya ( ) { konsol . log ( "Bu birinchi ta'rif" ) ; } fun1 ( ) ; } ( ) ) ; ( funktsiya ( ) { fun1 funktsiya ( ) { konsol . log ( "Bu ikkinchi ta'rif" ) ; } fun1 ( ) ; } ( ) );

// Blok va let/const deklaratsiyasidan foydalanish: ECMAScript 6 da o'zgaruvchi doirasini blok bilan cheklash uchun siz shunchaki blok va let deklaratsiyasidan foydalanishingiz mumkin.
// {
//   myFunction = fun1 funksiyasi ( ) { konsolga ruxsat bering . log ( "Bu birinchi ta'rif" ) ; } myFunction ( ) ; } //myFunction(): ReferenceError: myFunction aniqlanmagan. { myFunction = fun1 funksiyasi ( ) { konsolga ruxsat bering . log ( "Bu ikkinchi ta'rif" ) ; } myFunction ( ) ; }

// //myFunction(): ReferenceError: myFunction aniqlanmagan.

// 292.  Bosh sahifadagi iframe-da javascript kodini qanday chaqirish mumkin
// document.getElementBy Dastlab iFrame-ga yoki yordamida kirish kerak window.frames. Shundan so'ng contentWindow iFrame xususiyati targetFunction uchun ruxsat beradi

// document.getElementById('targetFrame').contentWindow.targetFunction();
// window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox

// 293.  Vaqt mintaqasini sanadan qanday qilib siljitish mumkin
// getTimezoneOffset Sana obyektining usulidan foydalanishingiz mumkin . Bu usul vaqt mintaqasi farqini, daqiqalarda, joriy mahalliydan (xost tizimi sozlamalari) UTCgacha qaytaradi

// var offset = new Date().getTimezoneOffset();
// console.log(offset); // -480

// 294.  CSS va JS fayllarini dinamik ravishda qanday yuklaysiz
// Siz DOM da havola va skript elementlarini yaratishingiz va ularni bosh tegga bola sifatida qo'shishingiz mumkin. Quyidagi kabi skript va uslub resurslarini qo'shish funksiyasini yarataylik,

// function loadAssets(filename, filetype) {
//   if (filetype == "css") { // External CSS file
//        var fileReference = document.createElement("link")
//        fileReference.setAttribute("rel", "stylesheet");
//        fileReference.setAttribute("type", "text/css");
//        fileReference.setAttribute("href", filename);
//   } else if (filetype == "js") { // External JavaScript file
//        var fileReference = document.createElement('script');
//        fileReference.setAttribute("type", "text/javascript");
//        fileReference.setAttribute("src", filename);
//   }
//   if (typeof fileReference != "undefined")
//        document.getElementsByTagName("head")[0].appendChild(fileReference)
//  }

// 295.  DOM-da HTML elementlarini topishning turli usullari qanday?
// Agar siz HTML sahifasining istalgan elementiga kirishni istasangiz, hujjat ob'ektiga kirishdan boshlashingiz kerak. Keyinchalik HTML elementini topish uchun quyidagi usullardan birini qo'llashingiz mumkin,
// document.getElementById(id): Id boʻyicha elementni topadi
// document.getElementsByTagName(name): Teg nomi boʻyicha elementni topadi
// document.getElementsByClassName(name): U elementni sinf nomi bilan topadi

// 296.  jQuery nima
// jQuery mashhur JavaScript-brauzerlar kutubxonasi boʻlib, u Hujjat Obyekt Modeli (DOM) oʻtishini, hodisalarni boshqarishni, animatsiyalarni va brauzerlar orasidagi tafovutlarni minimallashtirish orqali AJAX oʻzaro taʼsirini taʼminlaydi. U "Kamroq yoz, ko'proq ish qil" falsafasi bilan mashhur. Masalan, jQuery-dan foydalanib sahifa yuklanishida salomlash xabarini quyidagi tarzda ko'rsatishingiz mumkin,

// $(document).ready(function(){ // It selects the document and apply the function on page load
//     alert('Welcome to jQuery world'); });

// 297.  V8 JavaScript dvigateli nima
// V8 - bu Google Chrome brauzeri tomonidan qo'llaniladigan, C++ tilida yozilgan ochiq manbali yuqori samarali JavaScript dvigatelidir. U node.js loyihasida ham foydalanilmoqda. U ECMAScript va WebAssembly’ni amalga oshiradi va Windows 7 yoki undan keyingi versiyalarida, macOS 10.12+ va x64, IA-32, ARM yoki MIPS protsessorlaridan foydalanadigan Linux tizimlarida ishlaydi. Eslatma: U mustaqil ishlashi mumkin yoki istalgan C++ dasturiga kiritilishi mumkin.

// 298.  Nima uchun biz javascriptni dinamik til deb ataymiz
// JavaScript erkin terilgan yoki dinamik tildir, chunki JavaScript-dagi o'zgaruvchilar biron bir qiymat turi bilan bevosita bog'lanmagan va har qanday o'zgaruvchi barcha turdagi qiymatlar bilan tayinlanishi/qayta tayinlanishi mumkin.

// let age = 50;    // age is a number now
// age  = 'old'; // age is a string now
// age  = true;  // age is a boolean
// 299.  Void operatori nima
// Operator void berilgan ifodani baholaydi va keyin aniqlanmagan (ya'ni, qiymatni qaytarmasdan) qaytaradi. Sintaksis quyidagi kabi bo'ladi,

// void (expression)
// void expression

// Xabarni hech qanday yo'naltirish yoki qayta yuklamasdan ko'rsataylik

// <a href="javascript:void(alert('Welcome to JS world'))">Click here to see a message</a>
// 300.  Kursorni kutish(wait) uchun qanday sozlash kerak
// Kursor "kursor" xususiyatidan foydalanib, JavaScript-da kutishga o'rnatilishi mumkin. Quyidagi funksiyadan foydalanib, sahifa yuklashda ushbu harakatni bajaramiz.

// function myFunction() {
// window.document.body.style.cursor = "wait";
// }
// va bu funksiya sahifa yuklanganda chaqiriladi

// <body onload="myFunction()">

// 301.  Qanday qilib cheksiz sikl (infinite loop)yaratasiz
// Hech qanday ifoda ishlatmasdan for va while sikllaridan foydalanib cheksiz tsikllar yaratishingiz mumkin. For loop tuzilishi yoki sintaksisi ESLint va kod optimallashtiruvchi vositalari nuqtai nazaridan yaxshiroq yondashuv,
// for (;;) {}
// while(true) {
// }

// 302.  Nima uchun bayonot bilan avoid kerak
// JavaScript-ning with bayonoti ob'ektlarga takroriy kirishlarni yozish uchun stenografiyani ta'minlash uchun mo'ljallangan. Shunday qilib, u uzoq ob'ekt havolasini ishlash jazosisiz takrorlash zaruratini kamaytirish orqali fayl hajmini kamaytirishga yordam beradi. Ob'ektga bir necha marta kirishda ortiqchalikni oldini olish uchun ishlatiladigan misolni olaylik.

// a.b.c.greeting   = 'welcome';
// a.b.c.age = 32;

// Undan foydalanish withbuni quyidagilarga aylantiradi:

// with(a.b.c) {
//         greeting   = "welcome";
//         age = 32;
// }

// Ammo bu withbayonot ishlash muammolarini keltirib chiqaradi, chunki argument haqiqiy o'zgaruvchiga yoki with argumenti ichidagi xususiyatga murojaat qilishini oldindan aytib bo'lmaydi.

// 303.  Quyidagi for looplarning natijalari qanday
// for (var i = 0; i < 4; i++) { // global scope
//   setTimeout(() => console.log(i));
// }

// for (let i = 0; i < 4; i++) { // block scope
//   setTimeout(() => console.log(i));
// }

// Yuqoridagi for looplarning chiqishi 4 4 4 4 va 0 1 2 3 ga teng
// Tushuntirish: Javascriptning voqea navbati/siklasi tufayli setTimeoutqayta qo‘ng‘iroq qilish funksiyasi sikl bajarilgandan so‘ng chaqiriladi. i o'zgaruvchisi kalit so'z bilan e'lon qilinganligi varsababli u global o'zgaruvchiga aylandi va vaqt setTimeoutfunksiyasi chaqirilganda iteratsiya yordamida qiymat 4 ga teng bo'ldi. Demak, birinchi tsiklning chiqishi 4 4 4 4.
// Ikkinchi siklda esa i oʻzgaruvchisi letkalit soʻz sifatida eʼlon qilingan boʻlsa, u bloklangan oʻzgaruvchiga aylanadi va u har bir iteratsiya uchun yangi qiymatga ega boʻladi (0, 1, 2 3). Demak, birinchi tsiklning chiqishi 0 1 2 3.

// 304.  ES6 ning ba'zi xususiyatlarini sanab o'ting

// Quyida ES6 ning ba'zi yangi xususiyatlari ro'yxati keltirilgan.
// Konstantalar yoki o'zgarmas o'zgaruvchilarni qo'llab-quvvatlash
// O'zgaruvchilar, konstantalar va funktsiyalar uchun blok-ko'lamli yordam
// Arrow function
// Default parameters
// Rest va spread parametrlari
// Shablon harflari
// Ko'p qatorli satrlar
// Topshiriqni buzish
// Kengaytirilgan ob'ekt harflari
// Promises
// Classes
// Modullar

// 305.  ES6 nima
// ES6 javascript tilining oltinchi nashri boʻlib, 2015-yil iyun oyida chiqarilgan. U dastlab ECMAScript 6 (ES6) nomi bilan tanilgan va keyinchalik ECMAScript 2015 deb oʻzgartirilgan. Deyarli barcha zamonaviy brauzerlar ES6ʼni qoʻllab-quvvatlaydi, lekin eski brauzerlar uchun koʻplab transpilerlar mavjud. , Babel.js va boshqalar kabi.

// 306.  Let va const o'zgaruvchilarni qayta e'lon qila olamanmi?
// Yo'q, siz let va const o'zgaruvchilarini qayta e'lon qila olmaysiz. Agar shunday qilsangiz, u quyidagi xatoni keltirib chiqaradi

// Uncaught SyntaxError: Identifier 'someVariable' has already been declared

// Izoh: Kalit so'z bilan o'zgaruvchini e'lon qilish varfunksiya doirasiga ishora qiladi va o'zgaruvchiga ko'tarish xususiyati tufayli u qo'shimcha doiraning yuqori qismida e'lon qilingandek ishlanadi. Shunday qilib, bir xil ko'tarilgan o'zgaruvchiga hech qanday xatosiz hissa qo'shadigan barcha bir nechta deklaratsiyalar. Keling, var va let/const o'zgaruvchilari uchun bir xil doiradagi o'zgaruvchilarni qayta e'lon qilish misolini olaylik.

// var name = 'John';
// function myFunc() {
//     var name = 'Nick';
//     var name = 'Abraham'; // Re-assigned in the same function block
//     alert(name); // Abraham}
// myFunc();
// alert(name); // John

// Blok ko'lamli ko'p deklaratsiya sintaksis xatosini keltirib chiqaradi,
// let name = 'John';
// function myFunc() {
//     let name = 'Nick';
//     let name = 'Abraham'; // Uncaught SyntaxError: Identifier 'name' has already been declared
//     alert(name);}

// myFunc();
// alert(name);

// 307.  Const o'zgaruvchisi qiymatni o'zgarmas qiladimi

// Yo'q, const o'zgaruvchisi qiymatni o'zgarmas qilib qo'ymaydi. Ammo u keyingi topshiriqlarga ruxsat bermaydi (ya'ni, siz topshiriq bilan e'lon qilishingiz mumkin, lekin keyinroq boshqa qiymat tayinlay olmaysiz)

// const userList = [];
// userList.push('John'); // Can mutate even though it can't re-assign
// console.log(userList); // ['John']

// 308.  Standart parametrlar nima
// E5 da biz funktsiya parametrlarining standart qiymatlarini boshqarish uchun mantiqiy OR operatorlariga bog'lanishimiz kerak. ES6 da standart funksiya parametrlari xususiyati hech qanday qiymat yoki aniqlanmagan holda parametrlarni standart qiymatlar bilan ishga tushirishga imkon beradi. Keling, xatti-harakatlarni misollar bilan taqqoslaylik,

// //ES5
// var calculateArea = function(height, width) {
//    height =  height || 50;
//    width = width || 60;

//    return width * height;
// }
// console.log(calculateArea()); //300

// Standart parametrlar ishga tushirishni soddalashtiradi,

// //ES6
// var calculateArea = function(height = 50, width = 60) {
//    return width * height;
// }

// console.log(calculateArea()); //300

// 309.  Shablon literallari nima
// Shablon literallari yoki shablon satrlari o'rnatilgan ifodalarga ruxsat beruvchi satr harflaridir. Ular ikkita yoki bitta tirnoq o'rniga orqaga belgi (`) bilan o'ralgan. E6 da bu xususiyat quyidagi kabi dinamik ifodalardan foydalanish imkonini beradi,

// var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`

// ES5 da sizga quyidagi kabi uzilish qatori kerak bo'ladi,

// var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
// Eslatma: Shablon harflari bilan ko'p qatorli satrlar va satr interpolyatsiyasi xususiyatlaridan foydalanishingiz mumkin.
// 310.  Shablon literallarida ko'p qatorli satrlarni qanday yozish mumkin
// ES5 da ko'p qatorli satrlarni olish uchun yangi satrdan qochish belgilaridan ('\n') va birlashtiruvchi belgilardan (+) foydalanish kerak bo'ladi.
// konsol . log ( 'Bu 1 qatorli jumla\n' +
// 'Bu 2 qatorli jumla' ) ;
// Halbuki ES6 da yangi qator belgilarini eslatib o'tish shart emas,
// konsol . log ( `Bu
// 'Bu 2 qatorli jumla' ) ;

// 311.  Murakkab(nested)  shablonlari nima
// Joylashtiruvchi shablon shablondagi ${ } toʻldiruvchisi ichida ichki orqa belgilarga ruxsat berish uchun shablon harflari sintaksisida qoʻllab-quvvatlanadigan xususiyatdir. Misol uchun, quyida joylashgan shablon foydalanuvchi ruxsatiga asoslangan piktogrammalarni ko'rsatish uchun ishlatiladi, tashqi shablon esa platforma turini tekshiradi,

// const iconStyles = `icon ${ isMobilePlatform() ? '' :
//  `icon-${user.isAuthorized ? 'submit' : 'disabled'}` }`;

// Yuqoridagi foydalanish holatini shablon xususiyatlarini joylashtirmasdan ham yozishingiz mumkin. Biroq, joylashtirish shablonlari xususiyati yanada ixcham va o'qilishi mumkin.

// //Without nesting templates
//  const iconStyles = `icon ${ isMobilePlatform() ? '' :
//   (user.isAuthorized ? 'icon-submit' : 'icon-disabled'}`;

// 312.  Belgilangan(tagged) shablonlar nima
// Teglangan andozalar shablonlarning ilg'or shakli bo'lib, unda teglar funksiya yordamida shablon harflarini tahlil qilish imkonini beradi. Teg funksiyasi birinchi parametrni satrlar massivi, qolgan parametrlarni esa ifoda sifatida qabul qiladi. Ushbu funktsiya parametrlar asosida manipulyatsiya qilingan satrlarni ham qaytarishi mumkin. Keling, tashkilotda IT-professional mahorat to'plamining ushbu tegli shablon xatti-harakatlaridan foydalanishni ko'rib chiqaylik,

// var user1 = 'John';
// var skill1 = 'JavaScript';
// var experience1 = 15;

// var user2 = 'Kane';
// var skill2 = 'JavaScript';
// var experience2 = 5;

// function myInfoTag(strings, userExp, experienceExp, skillExp) {
//   var str0 = strings[0]; // "Mr/Ms. "
//   var str1 = strings[1]; // " is a/an "
//   var str2 = strings[2]; // "in"

//   var expertiseStr;
//   if (experienceExp > 10){
//     expertiseStr = 'expert developer';
//   } else if(skillExp > 5 && skillExp <= 10) {
//     expertiseStr = 'senior developer';
//   } else {
//     expertiseStr = 'junior developer';
//   }

//   return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;
// }

// var output1 = myInfoTag`Mr/Ms. ${ user1 } is a/an ${ experience1 } in ${skill1}`;
// var output2 = myInfoTag`Mr/Ms. ${ user2 } is a/an ${ experience2 } in ${skill2}`;

// console.log(output1);// Mr/Ms. John is a/an expert developer in JavaScript
// console.log(output2);// Mr/Ms. Kane is a/an junior developer in JavaScript

// 313.  Raw stringlar nima
// String.raw() ES6 shablon satrlarining xom string shaklini olish uchun ishlatiladigan usuldan foydalangan holda xom satrlar xususiyatini taqdim etadi . Bu xususiyat sizga kirish ketma-ketliklarini qayta ishlamasdan, xom satrlarga kirish imkonini beradi. Masalan, foydalanish quyidagicha bo'ladi,

// var calculationString = String.raw `The sum of numbers is \n${1+2+3+4}!`;
// console.log(calculationString); // The sum of numbers is 10

// Agar siz xom satrlardan foydalanmasangiz, yangi qator belgilar ketma-ketligi chiqishni bir nechta satrlarda ko'rsatish orqali qayta ishlanadi.

// var calculationString = `The sum of numbers is \n${1+2+3+4}!`;
// console.log(calculationString);
// // The sum of numbers is
// // 10

// Shuningdek, raw xususiyati teg funksiyasining birinchi argumentida mavjud
// function tag(strings) {
//    console.log(strings.raw[0]);
// }

// 314.  Destructuring assignment (strukturani buzish) nima ?

// Strukturani buzish topshirig'i - bu massivlardagi qiymatlarni yoki ob'ektlardan xususiyatlarni alohida o'zgaruvchilarga ochish imkonini beruvchi JavaScript ifodasi. Keling, massivdan oy qiymatlarini tuzilmani buzish topshirig'idan foydalanib olamiz

// var [one, two, three] = ['JAN', 'FEB', 'MARCH'];

// console.log(one); // "JAN"
// console.log(two); // "FEB"
// console.log(three); // "MARCH"

// va siz tuzilmani buzish topshirig'i yordamida ob'ektning foydalanuvchi xususiyatlarini olishingiz mumkin,

// var {name, age} = {name: 'John', age: 32};

// console.log(name); // John
// console.log(age); // 32

// 315.  Topshiriqni buzishda standart qiymatlar qanday
// O'zgaruvchiga massiv yoki ob'ektdan ajratilgan qiymat tuzilmani buzish paytida aniqlanmagan bo'lsa, standart qiymat tayinlanishi mumkin. Bu har bir topshiriq uchun standart qiymatlarni alohida o'rnatishdan qochishga yordam beradi. Keling, massivlar va ob'ektlardan foydalanish holatlariga misol keltiraylik,

// Massivlarning tuzilishi:

// var x, y, z;

// [x=2, y=4, z=6] = [10];
// console.log(x); // 10
// console.log(y); // 4
// console.log(z); // 6

// Ob'ektlarni buzish:

// var {x=2, y=4, z=6} = {x: 10};

// console.log(x); // 10
// console.log(y); // 4
// console.log(z); // 6

// 316.  Topshiriqni buzishda o'zgaruvchilarni qanday almashtirasiz
// Agar siz tuzilmani buzish topshirig'idan foydalanmasangiz, ikkita qiymatni almashtirish uchun vaqtinchalik o'zgaruvchi kerak bo'ladi. Vayron qiluvchi xususiyatdan foydalangan holda, ikkita o'zgaruvchan qiymatni bitta destruktiv ifodada almashtirish mumkin. Keling, massiv tuzilmasini buzishda ikkita raqamli o'zgaruvchini almashtiramiz,
// var x = 10, y = 20;

// [x, y] = [y, x];
// console.log(x); // 20
// console.log(y); // 10

// 317.  Kengaytirilgan ob'ekt harflari nima
// Ob'ekt harflari jingalak qavslar ichida xossalarga ega ob'ektlarni tezda yaratishni osonlashtiradi. Misol uchun, u quyidagi kabi umumiy ob'ekt xususiyatini aniqlash uchun qisqaroq sintaksisni taqdim etadi.

// //ES6
// var x = 10, y = 20
// obj = { x, y }
// console.log(obj); // {x: 10, y:20}
// //ES5
// var x = 10, y = 20
// obj = { x : x, y : y}
// console.log(obj); // {x: 10, y:20}

// 318.  Dinamik import nima
// Funktsiya sintaksisidan foydalangan holda dinamik import qilish import()bizga va'dalar yoki asinxron/kutish sintaksisi yordamida talab bo'yicha modullarni yuklash imkonini beradi. Hozirda bu xususiyat 4- bosqich taklifida . Dinamik importning asosiy afzalligi - bu to'plam o'lchamlarini qisqartirish, so'rovlarimizning hajmi/yuk ko'tarish qobiliyati va foydalanuvchi tajribasining umumiy yaxshilanishi. Dinamik importning sintaksisi quyidagi kabi bo'ladi:

// import('./Module').then(Module => Module.method());

// 319.  Dinamik import uchun qanday holatlar mavjud
// Quyida statik importga nisbatan dinamik importdan foydalanishning ayrim holatlari keltirilgan.
// Modulni talab bo'yicha yoki shartli ravishda import qiling. Misol uchun, agar siz eski brauzerga polifillni yuklamoqchi bo'lsangiz

// if (isLegacyBrowser()) {
//     import(···)
//     .then(···);
// }

// Ish vaqtida modul spetsifikatsiyasini hisoblang. Masalan, siz uni xalqarolashtirish uchun ishlatishingiz mumkin.

// import(`messages_${getLocale()}.js`).then(···);

// 320.  Tiplangan massivlar(typed arrays) nima
// Yozilgan massivlar ikkilik ma'lumotlarni qayta ishlash uchun ECMAScript 6 API'dan massivga o'xshash ob'ektlardir. JavaScript 8 ta terilgan massiv turlarini taqdim etadi,
// Int8Array: 8 bitli imzolangan butun sonlar massivi
// Int16Array: 16 bitli imzolangan butun sonlar massivi
// Int32Array: 32 bitli imzolangan butun sonlar massivi
// Uint8Array: 8-bitli belgisiz butun sonlar massivi
// Uint16Array: 16-bitli belgisiz butun sonlar massivi
// Uint32Array: 32-bitli belgisiz butun sonlar massivi
// Float32Array: 32-bitli suzuvchi nuqta raqamlari massivi
// Float64Array: 64-bitli suzuvchi nuqtali raqamlar qatori
// Misol uchun, siz quyida ko'rsatilgandek 8 bitli imzolangan butun sonlar qatorini yaratishingiz mumkin
// const a = new Int8Array();
// // You can pre-allocate n bytes
// const bytes = 1024
// const a = new Int8Array(bytes)
// 321.  Modul yuklagichlarining(modal loader) afzalliklari nimada
// Modul yuklagichlari quyidagi xususiyatlarni taqdim etadi:
// Dinamik yuklash
// Davlat izolyatsiyasi
// Global nom maydoni izolyatsiyasi
// Kompilyatsiya kancalari
// Ichki virtualizatsiya
// 322.  Collation (harakatlash) nima ?
// Harmanlama satrlar to'plamini saralash va qatorlar to'plami ichida qidirish uchun ishlatiladi. U mahalliy parametr bo'yicha parametrlangan va Unicode-dan xabardor. Keling, taqqoslash va saralash xususiyatlarini olaylik,

// Taqqoslash:
// var list = [ "ä", "a", "z" ]; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
// var l10nDE = new Intl.Collator("de");
// var l10nSV = new Intl.Collator("sv");
// console.log(l10nDE.compare("ä", "z") === -1); // true
// console.log(l10nSV.compare("ä", "z") === +1); // true

// Tartiblash:
// var list = [ "ä", "a", "z" ]; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
// var l10nDE = new Intl.Collator("de");
// var l10nSV = new Intl.Collator("sv");
// console.log(list.sort(l10nDE.compare)) // [ "a", "ä", "z" ]
// console.log(list.sort(l10nSV.compare)) // [ "a", "z", "ä" ]

// 323.  For .. of statmentni nima uchun ishlatiladi ?
// For...of iborasi takrorlanadigan ob'ektlar yoki o'rnatilgan String, Array, Massivga o'xshash ob'ektlar (masalan, argumentlar yoki NodeList), TypedArray, Map, Set va foydalanuvchi tomonidan aniqlangan takrorlanuvchilar kabi elementlar ustidan takrorlanuvchi tsikl yaratadi. Massivlarda for...of iborasining asosiy qo'llanilishi quyida keltirilgan bo'ladi:

// let arrayIterable = [10, 20, 30, 40, 50];

// for (let value of arrayIterable) {
//   value ++;
//   console.log(value); // 11 21 31 41 51
// }

// 324.  Quyidagi yoyilgan operator massivining natijasi nimaga teng
// [...'John Resig']
// Massivning chiqishi ['J', 'o', 'h', 'n', '', 'R', 'e', ​​'s', 'i', 'g'] Izoh: Satr. bu takrorlanadigan tur va massiv ichidagi tarqalish operatori iteratsiya qilinadigan har bir belgini bitta element bilan taqqoslaydi. Demak, satrning har bir belgisi Massiv ichidagi elementga aylanadi.

// 325.  PostMessage xavfsizmi?
// Ha, agar dasturchi/ishlab chiquvchi kelgan xabarning kelib chiqishi va manbasini tekshirishda ehtiyot bo'lsa, postMessages juda xavfsiz deb hisoblanishi mumkin. Ammo agar siz xabarni manbasini tasdiqlamasdan yuborishga/qabul qilishga harakat qilsangiz, saytlararo skript hujumlarini keltirib chiqaradi.

// 326.  Joyker belgisi sifatida postxabar maqsadli kelib chiqishi bilan bog'liq qanday muammolar mavjud
// PostMessage usulining ikkinchi argumenti xabarni qaysi manbadan qabul qilishiga ruxsat berilganligini belgilaydi. Agar argument sifatida “*” joker belgisidan foydalansangiz, xabarni har qanday manbaga qabul qilishga ruxsat beriladi. Bunday holda, jo'natuvchi oynasi xabarni jo'natishda maqsadli oyna maqsadli manbada ekanligini bilishning hech qanday usuli yo'q. Agar maqsadli oyna boshqa manbaga yo'naltirilgan bo'lsa, boshqa manba ma'lumotlarni oladi. Shunday qilib, bu XSS zaifliklariga olib kelishi mumkin.

// targetWindow.postMessage(message, '*');

// 327.  Qanday qilib tajovuzkorlardan postMessages olishdan qochasiz
// Tinglovchi har qanday xabarni tinglaganligi sababli, tajovuzkor tajovuzkorning kelib chiqishidan xabar yuborish orqali dasturni aldashi mumkin, bu esa qabul qiluvchiga xabarni haqiqiy jo'natuvchining oynasidan olgandek taassurot qoldiradi. “message.origin” atributidan foydalanib, qabul qiluvchining oxiridagi xabarning kelib chiqishini tekshirish orqali bu muammodan qochishingiz mumkin. Misol uchun, jo'natuvchining kelib chiqishini tekshirib ko'raylik http://www.some-sender.com qabul qiluvchi tomonida www.some-receiver.com ,

// //Listener on http://www.some-receiver.com/
// window.addEventListener("message", function(message){
//     if(/^http://www\.some-sender\.com$/.test(message.origin)){
//          console.log('You received the data from valid sender', message.data);
//    }
// });

// 328.  PostMessages-dan butunlay qochishim mumkinmi?
// Siz postMessages-dan butunlay (yoki 100%) foydalana olmaysiz. Ilovangiz xavflarni hisobga olgan holda postMessage-dan foydalanmasa ham, ko'plab uchinchi tomon skriptlari uchinchi tomon xizmati bilan bog'lanish uchun postMessage-dan foydalanadi. Demak, ilovangiz sizning xabaringizsiz postMessage dan foydalanayotgan bo‘lishi mumkin.

// 329.  PostMessages sinxronlashganmi ?
// PostMessages IE8 brauzerida sinxrondir, lekin ular IE9 va boshqa barcha zamonaviy brauzerlarda (masalan, IE9+, Firefox, Chrome, Safari) asinxrondir. Ushbu asinxron xatti-harakat tufayli biz postMessage qaytarilganda qayta qo'ng'iroq qilish mexanizmidan foydalanamiz.

// 330.  Javascript qanday paradigma
// JavaScript ko'p paradigmali til bo'lib, imperativ/protsessual dasturlashni, ob'ektga yo'naltirilgan dasturlashni va funktsional dasturlashni qo'llab-quvvatlaydi. JavaScript prototip merosga ega ob'ektga yo'naltirilgan dasturlashni qo'llab-quvvatlaydi.

// 331.  Ichki(Internal) va tashqi(external) javascript o'rtasidagi farq nima
// Ichki JavaScript: Bu skript tegidagi manba kodi. Tashqi JavaScript: Manba kodi tashqi faylda saqlanadi (.js kengaytmasi bilan saqlanadi) va tegda havola qilinadi.

// 332.  JavaScript server tomonidagi skriptga qaraganda tezroqmi
// Ha, JavaScript server tomonidagi skriptga qaraganda tezroq. JavaScript mijoz tomoni skripti bo'lgani uchun uni hisoblash yoki hisoblash uchun hech qanday veb-server yordamini talab qilmaydi. Shunday qilib, JavaScript har doim ASP, PHP va boshqalar kabi server tomonidagi skriptlardan tezroq.

// 333.  Belgilash qutisi(checkbox) holatini(status) qanday olish mumkin
// Siz checkedxususiyatni DOM-dagi tanlangan katakchaga qo'llashingiz mumkin. Agar qiymat bo'lsa True, belgilash katakchasi belgilanganligini bildiradi, aks holda belgilanmaydi. Misol uchun, quyidagi HTML belgilash katakchasi elementiga quyidagi kabi javascript yordamida kirish mumkin,
//   <input type="checkbox" name="checkboxname" value="Agree"> Agree the conditions<br>
// console.log(document.getElementById(‘checkboxname’).checked); // true or false
// 334.  Double tilde operatorining maqsadi nima
// Ikki tomonlama tilda operatori (~~) ikki tomonlama EMAS bitli operator sifatida tanilgan. Bu operator Math.floor() ni tezroq almashtiradi.

// 335.  Belgilarni ASCII kodiga qanday o'zgartirasiz
// Siz String.prototype.charCodeAt() satr belgilarini ASCII raqamlariga aylantirish uchun usuldan foydalanishingiz mumkin. Masalan, "ABC" qatorining birinchi harfi uchun ASCII kodini topamiz,

// "ABC".charCodeAt(0) // returns 65

// Usul String.fromCharCode() raqamlarni teng ASCII belgilariga aylantiradi.

// 336.  ArrayBuffer nima
// ArrayBuffer ob'ekti umumiy, qattiq uzunlikdagi  ikkilik ma'lumotlar qator buferini ko'rsatish uchun ishlatiladi. Siz uni quyidagi tarzda yaratishingiz mumkin,

// let buffer = new ArrayBuffer(16); // create a buffer of length 16
// alert(buffer.byteLength); // 16

// ArrayBuffer-ni boshqarish uchun biz "view" ob'ektidan foydalanishimiz kerak.
// //Create a DataView referring to the buffer
//  let view = new DataView(buffer);

// 337.  Quyidagi satr ifodasining natijasi nima
// console.log("Welcome to JS world"[0])
// Yuqoridagi ifodaning  natijasi "W" dir. Izoh: Satrdagi maxsus indeksli qavs belgisi ma'lum bir joyda belgini qaytaradi. Demak, u satrning "W" belgisini qaytaradi. Bu IE7 va undan past versiyalarda qo'llab-quvvatlanmaganligi sababli, kerakli natijaga erishish uchun .charAt() usulidan foydalanishingiz kerak bo'lishi mumkin.

// 338.  Xato obyektining(error object) maqsadi nima
// Xato konstruktori xato ob'ektini yaratadi va xatolik ob'ektlarining misollari ish vaqti xatolari yuzaga kelganda tashlanadi. Xato obyekti foydalanuvchi tomonidan belgilangan istisnolar uchun asosiy obyekt sifatida ham foydalanish mumkin. Xato ob'ektining sintaksisi quyidagicha bo'ladi,

// new Error([message[, fileName[, lineNumber]]])

// Quyidagi kabi try...catch blokidagi Error obyekti yordamida foydalanuvchi tomonidan belgilangan istisnolar yoki xatolarni tashlashingiz mumkin,

// 339.  EvalError obyektining maqsadi nima
// EvalError obyekti global eval()funksiya bilan bog'liq xatoni bildiradi. Garchi bu istisno JavaScript tomonidan endi tashlanmasa ham, EvalError obyekti moslik uchun qoladi. Ushbu iboraning sintaksisi quyidagi kabi bo'ladi:
// new EvalError([message[, fileName[, lineNumber]]])

// Quyidagi kabi try...catch blokida EvalError-ni tashlashingiz mumkin,
// try {
//   throw new EvalError('Eval function error', 'someFile.js', 100);
// } catch (e) {
//   console.log(e.message, e.name, e.fileName);              // "Eval function error", "EvalError", "someFile.js"

// 340.  Qattiy bo'lmagan rejimdan qat'iy rejimga o'tkazilgan xatolar ro'yxati qanday

// Qachon 'use strict'; Sintaksis bo'lsa, quyidagi holatlarning ba'zilari skriptni bajarishdan oldin SyntaxError beradi
// Oktal sintaksisidan foydalanganda
// var n = 022 ;
// withBayonotdan foydalanish
// O'zgaruvchi nomida o'chirish operatoridan foydalanganda
// O'zgaruvchi yoki funktsiya argument nomi sifatida baholash yoki argumentlardan foydalanish
// Yangi zahiralangan kalit so'zlardan foydalanganda
// Blokdagi funktsiyani e'lon qilganingizda
// if ( someCondition ) { funktsiya f ( ) { } }
// Shunday qilib, yuqoridagi holatlardagi xatolar ishlab chiqish/ishlab chiqarish muhitidagi xatolardan qochishga yordam beradi.

// 341.  Barcha ob'ektlarning prototiplari bormi?
// Yo'q. Foydalanuvchi tomonidan yaratilgan asosiy ob'ekt yoki new kalit so'zi yordamida yaratilgan ob'ektdan tashqari barcha ob'ektlar prototiplariga ega.

// 342.  Parametr va argument o'rtasidagi farq nima
// Parametr funksiya taʼrifining oʻzgaruvchan nomi, argument esa funksiya chaqirilganda unga berilgan qiymatni ifodalaydi. Keling, buni oddiy funksiya bilan tushuntiramiz
// funktsiya myFunction ( parametr1 , parametr2 , parametr3 ) {
//   konsol . log ( argumentlar [ 0 ] ) // "argument1"
//   konsoli . log ( argumentlar [ 1 ] ) // "argument2"
//   konsoli . log ( argumentlar [ 2 ] ) // "argument3"
// }
// myFunction ( "argument1" , "argument2" , "argument3" )

// 343.  Massivlardagi some usulining maqsadi nima
// Some() usuli massivdagi kamida bitta element taqdim etilgan funksiya tomonidan amalga oshirilgan testdan o'tishini tekshirish uchun ishlatiladi. Usul mantiqiy qiymatni qaytaradi. Keling, har qanday g'alati elementlarni sinab ko'rish uchun misol keltiraylik,

// var array = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

// var odd = element => element % 2 !== 0;

// console.log(array.some(odd)); // true (the odd element exists)

// 344.  Ikki yoki undan ortiq massivni qanday birlashtirasiz
// Concat() usuli barcha elementlarni o'z ichiga olgan yangi massivni qaytarish orqali ikki yoki undan ortiq massivlarni birlashtirish uchun ishlatiladi. Sintaksis quyidagi kabi bo'ladi,
// massiv1 . concat ( massiv2 , massiv 3 , ... , arrayX )
// Keling, massivning sabzavot va mevalar massivlari bilan bog'lanishiga misol keltiraylik,
//  var veggies = [ "Pomidor" , "Sabzi" , "Karam" ] ;
//   var fruits = [ "Olma" , "Apelsin" , "Armut" ] ;
//   var veggiesAndFruits = sabzavotlar . konkat ( mevalar ) ;
//   konsol . log ( veggiesAndFruits ) ; // Pomidor, sabzi, karam, olma, apelsin, nok
//  345.  Sayoz(shallow) va chuqur(deep) nusxa o'rtasidagi farq nima
// Ob'ektni nusxalashning ikki yo'li mavjud:
// Sayoz nusxa: Sayoz nusxa - ob'ektning bitli nusxasi. Asl ob'ektdagi qiymatlarning aniq nusxasiga ega bo'lgan yangi ob'ekt yaratiladi. Agar ob'ektning biron bir maydoni boshqa ob'ektlarga havolalar bo'lsa, faqat mos yozuvlar manzillari ko'chiriladi, ya'ni faqat xotira manzili ko'chiriladi.
// Misol
// var empDetails = {
//   ism : "Jon" , yosh : 25 , tajriba : "Dasturiy ta'minot ishlab chiqaruvchisi"
// }
// dublikat yaratish uchun
// var empDetailsShallowCopy = empDetails    // Sayoz nusxalash!
// agar biz dublikatdagi ba'zi mulk qiymatini shunday o'zgartirsak:
// empDetailsShallowCopy . ismi = "Jonson"
// Yuqoridagi bayonot ning nomini ham o'zgartiradi empDetails, chunki bizda sayoz nusxa mavjud. Bu shuni anglatadiki, biz asl ma'lumotlarni ham yo'qotamiz.
// Chuqur nusxa: Chuqur nusxa barcha maydonlardan nusxa ko'chiradi va maydonlar tomonidan ko'rsatilgan dinamik ravishda ajratilgan xotira nusxalarini yaratadi. Chuqur nusxa ob'ekt tegishli ob'ektlar bilan birga ko'chirilganda sodir bo'ladi.
// Misol
// var empDetails = {
//   ism : "Jon" , yosh : 25 , tajriba : "Dasturiy ta'minot ishlab chiqaruvchisi"
// }
// Asl ob'ektdan yangi o'zgaruvchiga xususiyatlardan foydalanib, chuqur nusxasini yarating
// var empDetailsDeepCopy = {
//   ism : empDetails . ism ,
//   yosh : empDetails . yoshi ,
//   tajriba : empDetails . mutaxassislik
// }
// Endi agar siz o'zgartirsangiz empDetailsDeepCopy.name, u faqat ta'sir qiladi empDetailsDeepCopyva ta'sir qilmaydiempDetails

// 346.  Satrning ma'lum nusxalarini qanday yaratish mumkin

// Usul repeat()yangi satrni yaratish va qaytarish uchun ishlatiladi, unda u chaqirilgan qatorning birlashtirilgan nusxalarining belgilangan sonini o'z ichiga oladi. Ushbu usul ECMAScript 2015 spetsifikatsiyasiga qo'shilganligini unutmang. Keling, uni 4 marta takrorlash uchun Hello stringiga misol keltiraylik,

// 'Hello'.repeat(4);  // 'HelloHelloHelloHello'
// 347.  Qanday qilib barcha mos keladigan satrlarni muntazam ifodaga qaytarasiz
// Usul matchAll()muntazam ifodaga qarshi satrga mos keladigan barcha natijalarning iteratorini qaytarish uchun ishlatilishi mumkin. Misol uchun, quyidagi misol muntazam ifodaga nisbatan mos keladigan qator natijalarini qaytaradi,
// let regexp = / Salom ( \d ? ) ) / g ;
// let greeting = 'Hello1Hello2Hello3' ;

// let greetingList = [ ... salomlashish . matchAll ( regexp ) ] ;

// konsol . log ( greetingList [ 0 ] ) ; //Salom 1
// konsoli . log ( greetingList [ 1 ] ) ; //Salom2
// konsoli . log ( greetingList [ 2 ] ) ; //Salom3
// 348.  Stringni boshida yoki oxirida qanday qilib kesish mumkin
// String prototipi trimusuli satrning ikkala tomonini kesish uchun ishlatiladi. Ammo, ayniqsa, satrning boshida yoki oxirida kesishni istasangiz, unda siz trimStart/trimLeftva trimEnd/trimRightusullardan foydalanishingiz mumkin. Keling, salomlashishda ushbu usullarning namunasini ko'rib chiqaylik,
// var greeting = ' Salom, xayrli tong! ' ;

// konsol . log ( salomlashish ) ; // "Salom, xayrli tong!"
// konsoli . log ( salomlashish . trimStart ( ) ) ; // "Salom, xayrli tong!"
// konsoli . log ( salomlashish . trimLeft ( ) ) ; // "Salom, xayrli tong!"

// konsoli . log ( salomlashish . trimEnd ( ) ); // "Salom, xayrli tong!"
// konsol . log ( salomlashish . trimRight ( ) ) ; // "Salom, xayrli tong!"

// 349.  Unar operator bilan quyidagi konsol bayonotining chiqishi nima
// Quyida keltirilgan unary operator bilan konsol bayonotini olaylik,
// console.log(+ 'Hello');

// Yuqoridagi konsol jurnali bayonotining chiqishi NaNni qaytaradi. Chunki element unar operator tomonidan prefiksga ega va JavaScript tarjimoni ushbu elementni raqam turiga aylantirishga harakat qiladi. Konvertatsiya bajarilmagani uchun bayonotning qiymati NaN qiymatiga olib keladi.
// 350.  Javascript mixins foydalanadimi?
// Mixin umumiy ob'ektga yo'naltirilgan dasturlash atamasi bo'lib, u boshqa sinflar tomonidan meros qilib olinishi kerak bo'lmagan holda ishlatilishi mumkin bo'lgan usullarni o'z ichiga olgan sinfdir. JavaScript-da biz faqat bitta ob'ektdan meros olishimiz mumkin. ya'ni. [[prototype]]Ob'ekt uchun faqat bitta bo'lishi mumkin .
// Ammo ba'zida biz bir nechtasini kengaytirishni talab qilamiz, buni bartaraf etish uchun biz Mixin-dan foydalanishimiz mumkin, bu usullarni boshqa sinf prototipiga nusxalashga yordam beradi.
// Masalan, bizda ikkita sinf bor Userva CleanRoom. Aytaylik , foydalanuvchi xonani xohlagancha tozalashi uchun CleanRoomfunksiyani ga qo'shishimiz kerak. UserBu erda miksinlar deb ataladigan tushuncha paydo bo'ladi.
// // mixin
// let cleanRoomMixin = {
//      cleanRoom() {
//      alert(`Hello ${this.name}, your room is clean now`);
// },
// sayBye() {
//      alert(`Bye ${this.name}`);
// }
// };

// // usage:
// class User {
//      constructor(name) {
//           this.name = name;
//      }
// }

// // copy the methods
// Object.assign(User.prototype, cleanRoomMixin);

// // now User can clean the room
// new User("Dude").cleanRoom(); // Hello Dude, your room is clean now!

// 351.  Thunk funktsiyasi nima
// Thunk - bu qiymatni baholashni kechiktiradigan funksiya. Bu hech qanday argumentlarni talab qilmaydi, lekin har safar thunkni chaqirganingizda qiymat beradi. ya'ni, u hozir bajarilmaydi, lekin kelajakda bo'ladi. Keling, sinxron misolni olaylik,

// const add = (x,y) => x + y;

// const thunk = () => add(2,3);

// thunk() // 5

// 352.  Asinxron thunks nima
// Asinxron thunklar tarmoq so'rovlarini amalga oshirish uchun foydalidir. Keling, tarmoq so'rovlarining misolini ko'rib chiqaylik,

// function fetchData(fn){
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => fn(json))
// }

// const asyncThunk = function (){
//    return fetchData(function getData(data){
//       console.log(data)
//   })
// }

// asyncThunk()

// Funktsiya getDatadarhol chaqirilmaydi, lekin u faqat API so'nggi nuqtasidan ma'lumotlar mavjud bo'lganda chaqiriladi. setTimeout funksiyasi bizning kodimizni asinxron qilish uchun ham ishlatiladi. Haqiqiy vaqtda eng yaxshi misol - jo'natish uchun harakatlarni kechiktirish uchun asinxron thunklardan foydalanadigan redux davlat boshqaruvi kutubxonasi.

// 353.  Quyidagi funksiya chaqiruvlarining natijasi nima
// const circle = {
//   radius: 20,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// };
// console.log(circle.diameter()); console.log(circle.perimeter());
// Chiqish:
// Chiqish 40 va NaN ni tashkil qiladi. Esda tutingki, diametr oddiy funktsiyadir, perimetr qiymati esa o'q funktsiyasidir. Muntazam thisfunktsiyaning kalit so'zi (ya'ni, diametr) sinf (ya'ni, Shakl ob'ekti) bo'lgan atrofdagi doiraga ishora qiladi. Perimetr funktsiyasining ushbu kalit so'zi oyna ob'ekti bo'lgan atrofdagi doiraga ishora qiladi. Oyna ob'ektlarida radius xususiyati yo'qligi sababli u aniqlanmagan qiymatni qaytaradi va son qiymatining ko'pligi NaN qiymatini qaytaradi.

// 354.  Satrdagi barcha qator uzilishlarini qanday olib tashlash mumkin
// Eng oson yondashuv - bu satrdagi yangi qatorlarni aniqlash va almashtirish uchun muntazam iboralardan foydalanish. Bunday holda biz almashtirish funktsiyasidan satr bilan birga foydalanamiz, bu bizning holatlarimizda bo'sh qatordir.

// function remove_linebreaks( var message ) {
//     return message.replace( /[\r\n]+/gm, "" );
// }
// Yuqoridagi ifodada g va m global va ko'p qatorli bayroqlar uchundir

// 355.  Qayta ishlash(reflow) va qayta bo'yash(repaint) o'rtasidagi farq nima
// Qayta bo'yash elementning ko'rinishiga ta'sir qiladigan o'zgarishlar kiritilganda sodir bo'ladi, lekin uning tartibiga emas. Bunga misollar kontur, ko'rinish yoki fon rangini o'z ichiga oladi. Qayta ishlash sahifaning bir qismining (yoki butun sahifaning) tartibiga ta'sir qiluvchi o'zgarishlarni o'z ichiga oladi. Brauzer oynasining o'lchamini o'zgartirish, shriftni o'zgartirish, tarkibni o'zgartirish (foydalanuvchi matni kabi), hisoblangan uslublarni o'z ichiga olgan JavaScript usullarini qo'llash, DOMga elementlarni qo'shish yoki o'chirish va element sinflarini o'zgartirish - bu qayta ishlashni boshlashi mumkin bo'lgan bir nechta narsalar. Elementni qayta o'tkazish DOMdagi barcha asosiy va ajdod elementlari hamda undan keyingi barcha elementlarning keyingi qayta oqimiga sabab bo'ladi.

// 356.  Massivni inkor qilish bilan nima sodir bo'ladi
// Belgili massivni inkor etish massivni mantiqiy qiymatga !majburlaydi. Massivlar to'g'ri deb hisoblanganligi sababli, inkor qilinsa, u qaytib keladi false
// console.log(![]); // false
// 357.  Agar ikkita massiv qo'shsak nima bo'ladi
// Agar siz ikkita massivni birga qo'shsangiz, u ikkalasini ham satrlarga aylantiradi va ularni birlashtiradi. Masalan, massivlarni qo'shish natijasi quyidagicha bo'ladi,

// console.log(['a'] + ['b']);  // "ab"
// console.log([] + []); // ""
// console.log(![] + []); // "false", because ![] returns false.
// 358.  Noto'g'ri qiymatlar bo'yicha yuqori qo'shimcha operatorning chiqishi qanday bo'ladi
// Agar siz qo'shimcha (+) operatorini noto'g'ri qiymatlar (null, undefined, NaN, false, "") ustiga qo'ysangiz, noto'g'ri qiymat nolga aylanadi. Keling, ularni brauzer konsolida quyidagi tarzda ko'rsatamiz,

// console.log(+null); // 0
// console.log(+undefined);// NaN
// console.log(+false); // 0
// console.log(+NaN); // NaN
// console.log(+""); // 0

// 359.  Maxsus belgilar yordamida o'z-o'zidan strigni qanday yaratasiz
// O'z-o'zidan qator []()!+belgilar kombinatsiyasi bilan tuzilishi mumkin. Ushbu naqshga erishish uchun quyidagi konventsiyalarni eslab qolishingiz kerak.
// Massivlar toʻgʻri qiymatlar boʻlganligi sababli, massivlarni inkor etish notoʻgʻri natijani keltirib chiqaradi: ![] === false
// JavaScript-ni majburlash qoidalariga ko'ra, massivlarni birga qo'shish ularni qatorga qo'shadi: [] + [] === ""
// Massiv oldiga + operatori qoʻyilsa, massiv “false”ga oʻzgaradi, inkor qilish uni rost qiladi va natijani oʻzgartirish “1” qiymatini hosil qiladi: +(!(+[])) === 1
// Yuqoridagi qoidalarni qo'llash orqali biz quyidagi shartlarni olishimiz mumkin
// ![] + [] === "false"
// +!+[] === 1

// Endi belgilar namunasi quyidagi tarzda yaratiladi,
//       s               e               l               f
//  ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^

//  (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]
//  ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^
// (![] + [])[+!+[]+!+[]+!+[]] +
// (![] + [])[+!+[]+!+[]+!+[]+!+[]] +
// (![] + [])[+!+[]+!+[]] +
// (![] + [])[+[]]
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// (![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]

// 360.  Massivdan noto'g'ri qiymatlarni qanday olib tashlash mumkin
// Parametr sifatida mantiqiy ni o'tkazish orqali massivda filtr usulini qo'llashingiz mumkin. Shunday qilib, u massivdan barcha noto'g'ri qiymatlarni (0, aniqlanmagan, null, noto'g'ri va "") olib tashlaydi.
// const myArray = [false, null, 1,5, undefined]
// myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);

// 361.  Massivning noyob qiymatlarini qanday olish mumkin
// SetSiz va qolgan ifoda/spread(...) sintaksisining kombinatsiyasi bilan massivning noyob qiymatlarini olishingiz mumkin .

// console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]

// 362.  Taxalluslarni buzish nima
// Ba'zan siz mulk nomidan boshqa nomga ega vayron qilingan o'zgaruvchiga ega bo'lishni xohlaysiz. Bunday holda, : newNameo'zgaruvchining nomini belgilash uchun a dan foydalanasiz. Bu jarayon taxalluslarni buzish deb ataladi.
// const obj = { x: 1 };
// // Grabs obj.x as as { otherName }
// const { x: otherName } = obj;
// 363.  Map usulini ishlatmasdan massiv qiymatlarini qanday Map qilish mumkin
// Massiv qiymatlarini mapfaqat Massiv usuli yordamida metoddan foydalanmasdan xaritalash mumkin from. Mamlakatlar massividan shahar nomlarini xaritaga keltiramiz,

// const countries = [
//     { name: 'India', capital: 'Delhi' },
//     { name: 'US', capital: 'Washington' },
//     { name: 'Russia', capital: 'Moscow' },
//     { name: 'Singapore', capital: 'Singapore' },
//     { name: 'China', capital: 'Beijing' },
//     { name: 'France', capital: 'Paris' },
// ];

// const cityNames = Array.from(countries, ({ capital}) => capital);
// console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
// 364.  Massivni qanday bo'shatish mumkin
// Massiv uzunligini nolga o'rnatish orqali massivni tezda bo'shatish mumkin.
// let cities = ['Singapore', 'Delhi', 'London'];
// cities.length = 0; // cities becomes []

// 365.  Qanday qilib raqamlarni ma'lum o'nli kasrlarga yaxlitlash mumkin
// toFixedMahalliy JavaScript usulidan foydalanib, raqamlarni ma'lum miqdordagi o'nli kasrlarga yaxlitlashingiz mumkin .
// let pie = 3.141592653;
// pie = pie.toFixed(3); // 3.142

// 366.  Massivni ob'ektga aylantirishning eng oson yo'li qanday?
// Spread(...) operatori yordamida massivni bir xil ma’lumotlarga ega ob’ektga aylantirishingiz mumkin

// var fruits = ["banana", "apple", "orange", "watermelon"];
// var fruitsObject = {...fruits};
// console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}

// 367.  Ba'zi ma'lumotlar bilan massivni qanday yaratish mumkin
// fillUsul yordamida siz ba'zi ma'lumotlarga ega massiv yoki bir xil qiymatlarga ega massiv yaratishingiz mumkin
// var newArray = new Array(5).fill("0");
// console.log(newArray); // ["0", "0", "0", "0", "0"]

// 368.  Konsol ob'ektidagi to'ldiruvchilar nima
// Quyida konsol ob'ektida mavjud bo'lgan to'ldiruvchilar ro'yxati keltirilgan,
// %o - ob'ektni oladi,
// %s - bu qatorni oladi,
// %d — Oʻnlik yoki butun son uchun ishlatiladi.
// const user = { "name":"John", "id": 1, "city": "Delhi"};
// console.log("Hello %s, your details %o are available in the object form", "John", user); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object

// 369.  Konsol xabarlariga CSS qo'shish mumkinmi?
// Ha, siz CSS uslublarini veb-sahifadagi html matniga o'xshash konsol xabarlariga qo'llashingiz mumkin.

// console.log('%c The text has blue color, with large font and red background', 'color: blue; font-size: x-large; background: red');

// Matn quyidagi kabi ko'rsatiladi,

// 370.  Konsol ob'ektining dir usulidan maqsad nima
// Belgilangan console.dir()JavaScript obyekti xususiyatlarining interaktiv roʻyxatini JSON sifatida koʻrsatish uchun foydalaniladi.
// const user = { "name":"John", "id": 1, "city": "Delhi"};
// console.dir(user);
// JSON ko'rinishida ko'rsatilgan foydalanuvchi ob'ekti

// 371.  Konsolda HTML elementlarini disk raskadrovka qilish mumkinmi?
// Ha, xuddi elementlarni tekshirish kabi konsolda HTML elementlarini olish va disk raskadrovka qilish mumkin.
// const element = document.getElementsByTagName("body")[0];
// console.log(element);
// U HTML elementini konsolda chop etadi,

// 372.  Konsol ob'ekti yordamida ma'lumotlarni jadval formatida qanday ko'rsatish mumkin
// console.table()Murakkab massivlar yoki ob'ektlarni ko'rish uchun konsoldagi ma'lumotlarni jadval ko'rinishida ko'rsatish uchun ishlatiladi .
// const users = [{ "name":"John", "id": 1, "city": "Delhi"}, { "name":"Max", "id": 2, "city": "London"}, { "name":"Rod", "id": 3, "city": "Paris"} ];
// console.table(users);
// Jadval formatida tasvirlangan ma'lumotlar,

// console.table() IE da qo'llab-quvvatlanmasligini unutmang .

// 373.  Argument son yoki son emasligini qanday tekshirish mumkin
// IsNaN va isFinite usullarining kombinatsiyasi argument son yoki yo'qligini tasdiqlash uchun ishlatiladi.
// function isNumber(n){
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }

// 374.  Buferga nusxa ko'chirish tugmasi qanday yaratiladi
// Kirish elementining mazmunini (.select() usuli yordamida) tanlashingiz va execCommand (ya'ni, execCommand('copy')) bilan nusxa ko'chirish buyrug'ini bajarishingiz kerak. Kesish va joylashtirish kabi boshqa tizim buyruqlarini ham bajarishingiz mumkin.

// document.querySelector("#copy-button").onclick = function() {
//   // Select the content
//   document.querySelector("#copy-input").select();
//   // Copy to the clipboard
//   document.execCommand('copy');
// };

// 375.  Timestamp uchun shortcut nima
// new Date().getTime()Joriy vaqt tamg'asini olish uchun foydalanishingiz mumkin . Qiymatni olish uchun muqobil yorliq mavjud.
// console.log(+new Date());
// console.log(Date.now());

// 376.  Ko'p o'lchovli massivlarni qanday tekislash mumkin
// Ikki o'lchovli massivlarni tekislash Spread operatori bilan ahamiyatsiz.

// const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
// const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]

// Lekin siz uni rekursiv qo'ng'iroqlar orqali ko'p o'lchovli massivlar bilan ishlashingiz mumkin,

// function flattenMultiArray(arr) {
//     const flattened = [].concat(...arr);
//     return flattened.some(item => Array.isArray(item)) ? flattenMultiArray(flattened) : flattened;
//  }
// const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
// const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]

// 377.  Ko'p holatni tekshirishning(multi condition checking) eng oson usuli
// indexOfHar bir qiymatni bitta shart sifatida tekshirish o'rniga, kirishni bir nechta qiymatlar bilan solishtirish uchun foydalanishingiz mumkin .

// // Verbose approach
// if (input === 'first' || input === 1 || input === 'second' || input === 2) {
//   someFunction();
// }
// // Shortcut
// if (['first', 1, 'second', 2].indexOf(input) !== -1) {
//   someFunction();
// }

// 378.  Brauzerning orqaga tugmachasini qanday suratga olasiz
// Usul window.onbeforeunloadbrauzerning orqaga tugmasi hodisalarini yozib olish uchun ishlatiladi. Bu foydalanuvchilarni joriy ma'lumotlarni yo'qotish haqida ogohlantirish uchun foydalidir.
//  window.onbeforeunload = function() {
//     alert("You work will be lost");
//  };

// 379.  Veb-sahifada sichqonchaning o'ng tugmachasini qanday o'chirib qo'yish mumkin

// oncontextmenu Tana elementidagi atributdan false qiymatini qaytarish orqali sahifadagi o'ng tugmani o'chirib qo'yish mumkin .
// <body oncontextmenu="return false;">

// 380.  O'rash ob'ektlari(wrapper object) nima
// String, raqam va mantiqiy kabi ibtidoiy qiymatlar xossa va usullarga ega emas, lekin ular ustida amallarni bajarishga harakat qilganingizda ular vaqtincha ob'ektga (Wrapper obyekti) aylantiriladi yoki majburlanadi. Misol uchun, agar siz ibtidoiy satr qiymatida toUpperCase() usulini qo'llasangiz, u xatoga yo'l qo'ymaydi, lekin satrning bosh harfini qaytaradi.

// let name = "john";

// console.log(name.toUpperCase());  // Behind the scenes treated as console.log(new String(name).toUpperCase());

// Ya'ni, null va undefineddan tashqari har bir ibtidoiy o'rash ob'ektlariga ega va o'rash ob'ektlari ro'yxati: String, Number, Boolean, Symbol va BigInt.

// 381.  AJAX nima
// AJAX asinxron JavaScript va XML degan ma'noni anglatadi va u ma'lumotlarni asinxron tarzda ko'rsatish uchun ishlatiladigan tegishli texnologiyalar (HTML, CSS, JavaScript, XMLHttpRequest API va boshqalar) guruhidir. ya'ni veb-sahifani qayta yuklamasdan serverga ma'lumotlarni yuborishimiz va serverdan ma'lumotlarni olishimiz mumkin.

// 382.  Asinxron kod bilan ishlashning turli usullari qanday
// Quyida asenkron kod bilan ishlashning turli usullari ro'yxati keltirilgan.
// Callbacks
// Promises
// Sinxron/kutish
// Async.js, bluebird va boshqalar kabi uchinchi tomon kutubxonalari

// 383.  Qanday qilib qabul qilishni bekor qilish mumkin
// Bir necha kun oldin, mahalliy va'dalarning bitta kamchiliklari olib kelish so'rovini bekor qilishning bevosita usuli emas. Ammo AbortControllerjs spetsifikatsiyasining yangisi bir yoki bir nechta chaqiruvlarni bekor qilish uchun signaldan foydalanishga imkon beradi. Yuklab olish so'rovini bekor qilishning asosiy oqimi quyidagicha bo'ladi:
// AbortControllerMisol yarating
// Misolning signal xususiyatini oling va signalni signalni olish varianti sifatida uzating
// Ushbu signaldan foydalanadigan barcha chaqiruvlarni bekor qilish uchun AbortController-ning abort xususiyatiga qo'ng'iroq qiling. Masalan, keling, bir xil signalni bir nechta chaqiruv qo'ng'iroqlariga o'tkazamiz, bu signal bilan barcha so'rovlarni bekor qiladi,
// const controller = new AbortController ( ) ;
// const { signal } = kontroller ;

// olib kelish ( "http://localhost:8000" , { signal } ) . keyin ( javob => {
//     konsol . log ( `Soʻrov 1 tugallandi!` ) ;
// } ) . catch ( e => {
//     if ( e . name === "AbortError") {
//         // Biz u bekor qilinganini bilamiz!
//     }
// } ) ;

// olib kelish ( "http://localhost:8000" , { signal } ) . keyin ( javob => {
//     konsol . log ( `Soʻrov 2 tugallandi!` ) ;
// } ) . catch ( e => {
//      if ( e . name === "AbortError" ) {
//          // Biz u bekor qilinganligini bilamiz!
//       }
// } ) ;

// // Ikkala so'rovni bekor qilish uchun 2 soniya kuting
// setTimeout ( ( ) => kontroller . abort ( ) , 2000 ) ;

// 384.  Veb nutq API (web speech API) nima ?
// Veb nutq API-si zamonaviy brauzerlarga nutqni (ya'ni, ovozli ma'lumotlarni veb-ilovalarda) tanib olish va sintez qilish imkonini berish uchun ishlatiladi. Ushbu API 2012 yilda W3C hamjamiyati tomonidan taqdim etilgan. U ikkita asosiy qismdan iborat:
// SpeechRecognition (Speech Recognition (Asinxron nutqni aniqlash yoki Speech-to-Text): Bu audio kiritishdan ovozli kontekstni tanib olish va shunga mos ravishda javob berish imkoniyatini beradi. Bunga SpeechRecognitioninterfeys orqali kirish mumkin. Quyidagi misol nutqdan matn olish uchun ushbu APIdan qanday foydalanishni ko'rsatadi,
// oyna . SpeechRecognition = oyna . webkitSpeechRecognition || oyna . Nutqni aniqlash ;  // Chrome uchun webkitSpeechRecognition va FF uchun SpeechRecognition
// const recognition = yangi oyna . SpeechRecognition ( ) ;
// tan olish . onresult = ( hodisa ) => { // SpeechRecognitionEvent turi
//   const speechToText = voqea . natijalar [ 0 ] [0 ] . transkript ;
//   konsol . log ( nutqToText ) ;
// }
// tanib olish . boshlash ( ) ;
// Ushbu API-da brauzer sizdan mikrofoningizdan foydalanishga ruxsat so'raydi
// SpeechSynthesis (matnni nutqqa): Bu audio kiritishdan ovozli kontekstni tanib olish va javob berish imkoniyatini beradi. Bunga SpeechSynthesisinterfeys orqali kirish mumkin. Masalan, matndan ovoz/nutq olish uchun quyidagi kod ishlatiladi,
// if ( oynada 'speechSynthesis' ) { var nutq = yangi SpeechSynthesisUtterance ( ' Salom Dunyo!' ) ; nutq . lang = 'en-US' ; oyna . nutq sintezi . gapirish ( nutq ) ; }
// Yuqoridagi misollarni chrome(33+) brauzerining dasturchi konsolida sinab ko'rish mumkin. Eslatma: Bu API hali ham ishlayotgan qoralama va faqat Chrome va Firefox brauzerlarida mavjud (albatta Chrome faqat spetsifikatsiyani amalga oshirgan)
// 385.  Minimal vaqt tugashini kamaytirish(minimum timeout) nima
// Brauzer va NodeJS javascript muhitlari 0 ms dan ortiq minimal kechikish bilan siqiladi. Bu shuni anglatadiki, 0ms kechikish bir zumda sodir bo'lmaydi. Brauzerlar: Ularda kamida 4ms kechikish bor. Qayta qo'ng'iroqlarni joylashtirish (ma'lum bir chuqurlik) tufayli yoki ma'lum bir qator ketma-ket oraliqlardan keyin ketma-ket qo'ng'iroqlar ishga tushirilganda, bu regulyator sodir bo'ladi. Eslatma: Eski brauzerlarda kamida 10 ms kechikish mavjud. Nodejs: Ularda kamida 1ms kechikish bor. Bu drossel kechikish 2147483647 dan kattaroq yoki 1 dan kamroq bo'lsa sodir bo'ladi. Bu vaqt tugashini qisqartirish xatti-harakatini tushuntirishga eng yaxshi misol quyida keltirilgan kod parchasi tartibidir.

// function runMeFirst() {
//     console.log('My script is initialized');
// }
// setTimeout(runMeFirst, 0);
// console.log('Script loaded');

// Script loaded
// My script is initialized

// setTimeout dan foydalanmasangiz, jurnallar tartibi ketma-ket bo'ladi.
// function runMeFirst() {
//    console.log('My script is initialized');
// }
// runMeFirst();
// console.log('Script loaded');

// My script is initialized
// Script loaded

// 386.  Zamonaviy brauzerlarda nol vaqt tugashini qanday amalga oshirasiz
// 0ms dan ortiq minimal kechikish tufayli kodni darhol bajarish uchun setTimeout(fn, 0) dan foydalana olmaysiz. Ammo bu xatti-harakatga erishish uchun window.postMessage() dan foydalanishingiz mumkin.

// 387.  Event loop qanday vazifalar mavjud
// Vazifa - bu dasturni ishga tushirishni boshlash, voqeani qayta qo'ng'iroq qilishni boshlash yoki ishdan bo'shatilgan interval yoki vaqt tugashi kabi standart mexanizmlar tomonidan ishga tushirilishi rejalashtirilgan har qanday JavaScript kodi/dasturidir. Bu vazifalarning barchasi vazifa navbatida rejalashtirilgan. Quyida vazifalar navbatiga vazifalar qo'shish uchun foydalanish holatlari ro'yxati keltirilgan
// Yangi JavaScript dasturi to'g'ridan-to'g'ri konsoldan yoki <script>element tomonidan ishga tushirilganda, vazifa vazifalar qatoriga qo'shiladi.
// Voqea sodir bo'lganda, voqeani qayta qo'ng'iroq qilish vazifa navbatiga qo'shiladi
// SetTimeout yoki setIntervalga erishilganda, tegishli qayta qo'ng'iroq vazifa navbatiga qo'shiladi

// 388.  Mikrovazifa(microtask) nima
// Microtask - bu hozir bajarilayotgan vazifa/mikrotask bajarilgandan so'ng darhol bajarilishi kerak bo'lgan javascript kodi. Ular tabiatan to'siq bo'ladi. ya'ni, mikrovazifalar navbati bo'sh bo'lgunga qadar asosiy mavzu bloklanadi. Mikrotopshiriqlarning asosiy manbalari Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers va boshqalar.
// Eslatma: Ushbu mikrovazifalarning barchasi voqea tsiklining bir xil aylanishida qayta ishlanadi

// 389.  ?

// 390.  ?

// 391.  Typescript faylida javascript kutubxonalaridan qanday foydalanasiz
// Ma'lumki, hamma JavaScript kutubxonalari yoki ramkalarida TypeScript deklaratsiya fayllari mavjud emas. Ammo agar siz hali ham TypeScript fayllarimizdagi kutubxonalar yoki ramkalardan kompilyatsiya xatosiga yo'l qo'ymasdan foydalanmoqchi bo'lsangiz, yagona yechim - declareo'zgaruvchan deklaratsiya bilan birga kalit so'z. Misol uchun, sizda customLibraryTypeScript deklaratsiyasiga ega bo'lmagan va customLibraryglobal nomlar maydonida nom maydoniga ega bo'lgan kutubxonangiz borligini tasavvur qilaylik. Siz ushbu kutubxonadan quyidagi matn kodida foydalanishingiz mumkin,
// var customLibrary declare ;
// Ishlash vaqtida typescript customLibraryo'zgaruvchiga tur sifatida anyturni beradi. Declare kalit so'zini ishlatmasdan boshqa alternativa quyida keltirilgan
// var customLibrary : any ;
// 392.  Promises va kuzatilishi mumkin bo'lganlar o'rtasidagi farqlar qanday

// 393.   Heap nima
// Uyma (Yoki xotira uyasi) - bu o'zgaruvchilarni aniqlaganimizda ob'ektlar saqlanadigan xotira joyi. Ya'ni, bu barcha xotira taqsimoti va ajratish joyi bo'lgan joy. Uyma va qo'ng'iroqlar to'plami ham JS ish vaqtining ikkita konteyneridir. Ish vaqti kodda o'zgaruvchilar va funksiya deklaratsiyasiga duch kelganda, ularni Uyumda saqlaydi.

// 394.  Voqealar jadvali(event table) nima
// Voqealar jadvali - bu ma'lum vaqt oralig'idan keyin yoki ba'zi API so'rovlari hal qilinganidan keyin asinxron tarzda bajariladigan barcha hodisalarni saqlaydigan va kuzatib boruvchi ma'lumotlar tuzilmasi. ya'ni setTimeout funksiyasini chaqirganingizda yoki asinxron operatsiyani chaqirganingizda, u Voqealar jadvaliga qo'shiladi. U o'z-o'zidan funktsiyalarni bajarmaydi. Voqealar jadvalining asosiy maqsadi voqealarni kuzatib borish va ularni quyidagi diagrammada ko'rsatilganidek, voqea navbatiga yuborishdir.

// 395.  MicroTask navbati nima
// Microtask Queue - bu va'da qilingan ob'ektlar tomonidan boshlangan barcha vazifalar qayta qo'ng'iroq qilish navbatidan oldin qayta ishlanadigan yangi navbat. Mikrovazifalar navbati keyingi renderlash va bo'yash ishlaridan oldin qayta ishlanadi. Ammo agar bu mikrovazifalar uzoq vaqt davomida ishlayotgan bo'lsa, bu vizual buzilishlarga olib keladi.

// 396.  Shim va polifill o'rtasidagi farq nima
// Shim - bu faqat shu muhit vositalaridan foydalangan holda eski muhitga yangi API olib keladigan kutubxona. Bu veb-ilova bilan cheklanishi shart emas. Masalan, es5-shim.js eski brauzerlarda (asosan IE9-dan oldingi) ES5 xususiyatlarini taqlid qilish uchun ishlatiladi. Holbuki, polyfill bu kod (yoki plagin) boʻlagi boʻlib, u siz, ishlab chiquvchi, brauzer mahalliy sifatida taqdim etishini kutgan texnologiyani taʼminlaydi. Oddiy jumla bilan aytganda, polyfill brauzer API uchun shimdir.

// 397.  Primitiv yoki primitiv bo'lmagan qiymat turini qanday aniqlash mumkin
// JavaScript-da ibtidoiy turlarga boolean, string, number, BigInt, null, Symbol va undefined kiradi. Holbuki, ibtidoiy bo'lmagan turlarga Ob'ektlar kiradi. Lekin siz ularni quyidagi funksiya bilan osongina aniqlashingiz mumkin,
// var myPrimitive = 30;
// var myNonPrimitive = {};
// function isPrimitive(val) {
//     return Object(val) !== val;
// }

// isPrimitive(myPrimitive);
// isPrimitive(myNonPrimitive);
// Agar qiymat ibtidoiy ma'lumotlar turi bo'lsa, Ob'ekt konstruktori qiymat uchun yangi o'rash ob'ektini yaratadi. Ammo agar qiymat ibtidoiy bo'lmagan ma'lumotlar turi (ob'ekt) bo'lsa, Ob'ekt konstruktori xuddi shu ob'ektni beradi.

// 398.  Babel nima
// Babel - bu ECMAScript 2015+ kodini joriy va eski brauzerlar yoki muhitlarda JavaScript-ning orqaga qarab mos keladigan versiyasiga aylantirish uchun JavaScript transpilyatoridir. Ba'zi asosiy xususiyatlar quyida keltirilgan,
// Sintaksisni o'zgartirish
// Maqsadli muhitda etishmayotgan Polyfill xususiyatlari (@babel/polyfill yordamida)
// Manba kodini o'zgartirish (yoki kod modlari)

// 399.  Node.js butunlay bitta tishlimi (single threaded)
// Node - bu bitta oqim, lekin Node.js standart kutubxonasiga kiritilgan ba'zi funksiyalar (masalan, fs moduli funktsiyalari) bitta tishli emas. ya'ni, ularning mantig'i dasturning tezligi va ishlashini yaxshilash uchun Node.js bitta ish zarrachasidan tashqarida ishlaydi.

// 400.  Kuzatiladigan narsalardan qanday umumiy foydalanish holatlari mavjud
// Kuzatiladigan qurilmalardan foydalanishning eng keng tarqalgan holatlaridan ba'zilari push-bildirishnomalari bo'lgan veb-rozetkalar, foydalanuvchi kiritgan o'zgarishlar, takroriy intervallar va hk.

// 401.  RxJS nima
// RxJS (JavaScript uchun reaktiv kengaytmalar) - bu asinxron yoki qayta qo'ng'iroqqa asoslangan kodni yaratishni osonlashtiradigan kuzatiladiganlardan foydalangan holda reaktiv dasturlashni amalga oshirish uchun kutubxona. Shuningdek, u kuzatiladiganlarni yaratish va ular bilan ishlash uchun yordamchi funksiyalarni taqdim etadi.

// 402.  Funktsiya konstruktori va funksiya deklaratsiyasi o'rtasidagi farq nima?
// Bilan yaratilgan funksiyalar Function constructoro'zlarining yaratilish kontekstlariga chek qo'ymaydi, lekin ular doimo global miqyosda yaratiladi. ya'ni, funksiya faqat o'zining mahalliy o'zgaruvchilari va global qamrov o'zgaruvchilariga kirishi mumkin. Holbuki, funktsiya deklaratsiyasi tashqi funktsiya o'zgaruvchilariga (yopiqlar) ham kirishi mumkin.
// Keling, bu farqni misol bilan ko'rib chiqaylik,
// Funktsiya konstruktori:

// var a = 100;
// function createFunction() {
//     var a = 200;
//     return new Function('return a;');
// }
// console.log(createFunction()()); // 100

// Funktsiya deklaratsiyasi:

// var a = 100;
// function createFunction() {
//     var a = 200;
//     return function func() {
//         return a;
//     }
// }
// console.log(createFunction()()); // 200

// 403.  Qisqa tutashuv holati (Short circuit condition) nima
// Qisqa tutashuv shartlari oddiy if iboralarini siqilgan tarzda yozish uchun mo'ljallangan. Keling, misol yordamida stsenariyni namoyish qilaylik. Agar siz autentifikatsiya sharti bilan portalga kirmoqchi boʻlsangiz, quyidagi ifoda boʻladi:

// if (authenticate) {
//    loginToPorta();
// }

// Javascript mantiqiy operatorlari chapdan o'ngga qarab baholanganligi sababli, yuqoridagi ifodani && mantiqiy operatori yordamida soddalashtirish mumkin.

// authenticate && loginToPorta();

// 404.  Massiv hajmini o'zgartirishning eng oson yo'li qanday?
// Massivning uzunlik xossasi massiv o‘lchamini o‘zgartirish yoki tezda bo‘shatish uchun foydalidir. Elementlar sonini 5 dan 2 gacha oʻzgartirish uchun raqamlar massivida uzunlik xususiyatini qoʻllaymiz,

// var array = [1, 2, 3, 4, 5];
// console.log(array.length); // 5

// array.length = 2;
// console.log(array.length); // 2
// console.log(array); // [1,2]

// va massivni ham bo'shatish mumkin

// var array = [1, 2, 3, 4, 5];
// array.length = 0;
// console.log(array.length); // 0
// console.log(array); // []

// 405.  Kuzatiladigan narsa nima
// Kuzatiladigan funksiya asosan qiymatlar oqimini kuzatuvchiga vaqt o‘tishi bilan sinxron yoki asinxron tarzda qaytarishi mumkin bo‘lgan funksiyadir. Iste'molchi qo'ng'iroq subscribe()qilish usuli orqali qiymatni olishi mumkin. Keling, kuzatilishi mumkin bo'lgan oddiy misolni ko'rib chiqaylik
// import { Observable } from 'rxjs';

// const observable = new Observable(observer => {
//   setTimeout(() => {
//     observer.next('Message from a Observable!');
//   }, 3000);
// });

// observable.subscribe(value => console.log(value));

// 406.  Funktsiya va sinf deklaratsiyasi o'rtasidagi farq nima
// Funktsiya deklaratsiyasi va sinf deklaratsiyasi o'rtasidagi asosiy farq shundaki hoisting. Funktsiya deklaratsiyasi ko'tariladi, lekin sinf deklaratsiyasi emas.
// Sinflar:
// const user = new User(); // ReferenceError
// class User {}
// Konstruktor funktsiyasi:
//  const user = new User(); // No error
//  function User() {
//  }

// 407.  Asinx funksiya nima
// Asinx funksiya asynckalit so'z bilan e'lon qilingan funksiya bo'lib, asinxron, va'daga asoslangan xatti-harakatlarni va'da zanjirlaridan qochib, toza uslubda yozish imkonini beradi. Bu funktsiyalar nol yoki undan ko'p awaitifodalarni o'z ichiga olishi mumkin.
// Keling, quyida async funktsiyasi misolini olaylik,
// async function logger() {

//   let data = await fetch('http://someapi.com/users'); // pause until fetch returns
//   console.log(data)
// } logger();

// 408.  Qanday qilib va'dalarni yutish(promise swallowing) xatolarining oldini olish mumkin
// Asinxron koddan foydalanganda, JavaScript-ning ES6 va'dalari qayta qo'ng'iroq piramidalarisiz va har ikkinchi qatorda xatoliklarni bartaraf qilmasdan hayotingizni ancha osonlashtirishi mumkin. Ammo va'dalarning ba'zi tuzoqlari bor va eng kattasi sukut bo'yicha xatolarni yutishdir.
// Aytaylik, siz quyidagi barcha holatlar uchun konsolda xatolikni chop etishni kutmoqdasiz,
// Promise.resolve('promised value').then(function() {
//       throw new Error('error');
// });

// Promise.reject('error value').catch(function() {
//       throw new Error('error');
// });

// new Promise(function(resolve, reject) {
//       throw new Error('error');
// });

// Biroq, hech qanday xatoliklarni chop etmaydigan ko'plab zamonaviy JavaScript muhitlari mavjud. Siz bu muammoni turli yo'llar bilan hal qilishingiz mumkin,
// Har bir zanjirning oxiriga ushlash blokini qo'shing: har bir va'da qilingan zanjirning oxiriga tutib olish blokini qo'shishingiz mumkin

// Ammo har bir va'da zanjiri va batafsil ma'lumot uchun yozish juda qiyin.

// Bajarilgan usulni qo'shish: Siz birinchi yechimni keyin almashtirib, bloklarni bajarilgan usul bilan ushlashingiz mumkin

// Promise.resolve('promised value').done(function() {
//     throw new Error('error');
// });

// Aytaylik, siz HTTP yordamida ma'lumotlarni olishni xohlaysiz va keyinchalik olingan ma'lumotlarga asinxron tarzda ishlov berishni xohlaysiz. doneBlokni quyidagi tarzda yozishingiz mumkin ,

// getDataFromHttp()
//   .then(function(result) {
//     return processDataAsync(result);
//   })
//   .done(function(processed) {
//     displayData(processed);
//   });

// Kelajakda, agar ishlov berish kutubxonasi API sinxronlashtirilsa, siz doneblokni quyidagi tarzda olib tashlashingiz mumkin,

//  getDataFromHttp()
//    .then(function(result) {
//      return displayData(processDataAsync(result));
//    })

// va keyin siz jim xatolarga olib keladigan blokirovka qilish uchun blok doneqo'shishni unutdingiz.then
// Bluebird tomonidan ES6 va'dalarini kengaytiring: Bluebird ikkinchi yechimdagi muammoning oldini olish uchun ES6 Promises API-ni kengaytiradi. Ushbu kutubxonada rad etilgan va'dalardan stderrgacha bo'lgan barcha xatolarni chop etadigan "standart" onRejection ishlov beruvchisi mavjud. O'rnatishdan so'ng, ishlov berilmagan rad etishlarni qayta ishlashingiz mumkin

// Promise.onPossiblyUnhandledRejection(function(error){
//     throw error;
// });
// va rad etishni rad eting, uni faqat bo'sh ushlash bilan bajaring

// Promise.reject('error value').catch(function() {});

// 409.  Deno nima
// Deno - bu V8 JavaScript dvigateli va Rust dasturlash tilidan foydalanadigan JavaScript va TypeScript uchun oddiy, zamonaviy va xavfsiz ish vaqti.

// 410.  Qanday qilib ob'ektni javascriptda takrorlanadigan qilish mumkin
// Odatiy bo'lib, oddiy ob'ektlar takrorlanmaydi. Lekin siz ob'ektga xossani belgilash orqali uni iterable qilishingiz mumkin Symbol.iterator.
// Buni misol bilan ko'rsatamiz,
// const collection = {
//   one: 1,
//   two: 2,
//   three: 3,
//   [Symbol.iterator]() {
//     const values = Object.keys(this);
//     let i = 0;
//     return {
//       next: () => {
//         return {
//           value: this[values[i++]],
//           done: i > values.length
//         }
//       }
//     };
//   }
// };

// const iterator = collection[Symbol.iterator]();

// console.log(iterator.next());    // → {value: 1, done: false}
// console.log(iterator.next());    // → {value: 2, done: false}
// console.log(iterator.next());    // → {value: 3, done: false}
// console.log(iterator.next());    // → {value: undefined, done: true}

// Yuqoridagi jarayonni generator funktsiyasi yordamida soddalashtirish mumkin,
//  const collection = {
//    one: 1,
//    two: 2,
//    three: 3,
//    [Symbol.iterator]: function * () {
//      for (let key in this) {
//        yield this[key];
//      }
//    }
//  };
//  const iterator = collection[Symbol.iterator]();
//  console.log(iterator.next());    // {value: 1, done: false}
//  console.log(iterator.next());    // {value: 2, done: false}
//  console.log(iterator.next());    // {value: 3, done: false}
//  console.log(iterator.next());    // {value: undefined, done: true}

// 411.  To'g'ri quyruq chaqiruvi ( Proper Tail Call ) nima
// Birinchidan, "To'g'ri quyruq qo'ng'irog'i" haqida gapirishdan oldin, biz quyruq haqida bilishimiz kerak. Quyi qo'ng'iroq - chaqiruvchi funktsiyaning yakuniy harakati sifatida bajariladigan pastki dastur yoki funktsiya chaqiruvi. Holbuki , to'g'ri qo'ng'iroq (PTC) - bu funktsiya chaqiruvi quyruq chaqiruvi bo'lganda, dastur yoki kod rekursiya uchun qo'shimcha stek ramkalarini yaratmaydigan usul.
// Masalan, faktorial funktsiyaning quyidagi klassik yoki bosh rekursiyasi har bir qadam uchun stekga tayanadi. Har bir bosqichga qadar ishlov berish kerakn * factorial(n - 1)
// function factorial(n) {
//   if (n === 0) {
//     return 1
//   }
//   return n * factorial(n - 1)
// }
// console.log(factorial(5)); //120
// Ammo agar siz Tail rekursiya funksiyalaridan foydalansangiz, ular stekga tayanmasdan, kerakli barcha kerakli ma’lumotlarni rekursiyaga o‘tkazishda davom etadi.
// function factorial(n, acc = 1) {
//   if (n === 0) {
//     return acc
//   }
//   return factorial(n - 1, n * acc)
// }
// console.log(factorial(5)); //120
// Yuqoridagi naqsh birinchisi bilan bir xil natijani qaytaradi. Ammo akkumulyator rekursiv qo'ng'iroqlarda stek xotirasidan foydalanmasdan jami argument sifatida hisobini yuritadi

// 412.  Ob'ektni Promise(va’da) ekani yoki yoq ekanini qanday tekshirish mumkin
// Agar qiymat va'da yoki yo'qligini bilmasangiz, va'dani Promise.resolve(value)qaytaradigan qiymat sifatida o'rash

//    function isPromise(object){
//       if(Promise && Promise.resolve){
//       return Promise.resolve(object) == object;
//       }else{
//       throw "Promise not supported in your environment"
//       }
//    }

//    var i = 1;
//    var promise = new Promise(function(resolve,reject){
//       resolve()
//    });

//    console.log(isPromise(i)); // false
//    console.log(isPromise(promise)); // true

// Yana bir usul - .then()ishlov beruvchi turini tekshirish

// function isPromise(value) {
//    return Boolean(value && typeof value.then === 'function');
// }
// var i = 1;
// var promise = new Promise(function(resolve,reject){
//    resolve()
// });

// console.log(isPromise(i)) // false
// console.log(isPromise(promise)); // true

// 413.  Funktsiya konstruktor sifatida chaqirilganligini qanday aniqlash mumkin
// new.targetPseudo-xususiyatdan funktsiya konstruktor (yangi operator yordamida) yoki oddiy funksiya chaqiruvi sifatida chaqirilganligini aniqlash uchun foydalanishingiz mumkin .
// Agar konstruktor yoki funksiya new operatori yordamida chaqirilsa, new.target konstruktor yoki funksiyaga havolani qaytaradi.
// Funktsiya chaqiruvlari uchun new.target aniqlanmagan.
// function Myfunc() {
//    if (new.target) {
//       console.log('called with new');
//    } else {
//       console.log('not called with new');
//    }
// }

// new Myfunc(); // called with new
// Myfunc(); // not called with new
// Myfunc.call({}); not called with new

// 414.  Argumentlar ob'ekti va Rest parametri o'rtasidagi farqlar qanday
// Argumentlar ob'ekti va rest parametrlari o'rtasida uchta asosiy farq mavjud
// Argumentlar ob'ekti massivga o'xshaydi, lekin massiv emas. Qolgan parametrlar esa massiv misollaridir.
// Argumentlar obyekti tartiblash, xaritalash, forEach yoki pop kabi usullarni qo‘llab-quvvatlamaydi. Holbuki, bu usullar rest parametrlarida ishlatilishi mumkin.
// Qolgan parametrlar faqat alohida nom berilmagan parametrlardir, argumentlar obyekti esa funksiyaga oʻtkazilgan barcha argumentlarni oʻz ichiga oladi.

// 415.  Spred operatori va Rest parametri o'rtasidagi farqlar qanday
// Rest parametri qolgan barcha elementlarni massivga to'playdi. Holbuki, Spread operatori takrorlanuvchilarni (massivlar / ob'ektlar / satrlar) bitta argumentlar / elementlarga kengaytirilishiga imkon beradi. ya'ni, Rest parametri tarqalish operatoriga qarama-qarshidir.

// 416.  Har xil turdagi generatorlar qanday
// Besh turdagi generatorlar mavjud,

//  Generator funktsiyasi deklaratsiyasi:

//  function* myGenFunc() {
//       yield 1;
//       yield 2;
//       yield 3;
//  }
//  const genObj = myGenFunc();

// Generator funksiyasi ifodalari:

// const myGenFunc = function* () {
//        yield 1;
//        yield 2;
//        yield 3;
// };
// const genObj = myGenFunc();

// Ob'ekt literallarida generator usuli ta'riflari:

//  const myObj = {
//      * myGeneratorMethod() {
//         yield 1;
//         yield 2;
//         yield 3;
//      }
//  };
//  const genObj = myObj.myGeneratorMethod();

// Sinfdagi generator usuli ta'riflari:
//   class MyClass {
//      * myGeneratorMethod() {
//         yield 1;
//         yield 2;
//         yield 3;
//      }
//   }
//   const myObject = new MyClass();
//   const genObj = myObject.myGeneratorMethod();

// Generator hisoblangan xususiyat sifatida:

// const SomeObj = {
//   *[Symbol.iterator] () {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }

// console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]

// 417.  O'rnatilgan iterativlar(built-in) nima
// Quyida JavaScript-da o'rnatilgan iterativlar ro'yxati keltirilgan,
// Massivlar va TypedArrays
// Strings: Har bir belgi yoki Unicode kod nuqtalari ustida takrorlang
// Xaritalar: kalit-qiymat juftliklarini takrorlash
// To'plamlar: ularning elementlari bo'yicha takrorlanadi
// argumentlar: Funktsiyalarda massivga o'xshash maxsus o'zgaruvchi
// NodeList kabi DOM to'plami

// 418.  for...of va for... o'rtasida qanday farq bor
// Js maʼlumotlar tuzilmalari boʻyicha ham for...in, ham for...of iboralari takrorlanadi. Yagona farq ular takrorlagan narsada:
// for..in ob'ektning barcha sanab o'tiladigan xususiyat kalitlari bo'ylab takrorlanadi
// for..of iteratsiya qilinadigan ob'ektning qiymatlari ustidan takrorlanadi.
// Keling, bu farqni misol bilan tushuntiramiz,
// let arr = ['a', 'b', 'c'];

// arr.newProp = 'newVlue';

// // key are the property keys
// for (let key in arr) {
//   console.log(key);
// }

// // value are the property values
// for (let value of arr) {
//   console.log(value);
// }

// For..in tsikli ob'ekt tugmalari ustida takrorlanganligi sababli, birinchi sikl massiv ob'ekti bo'ylab takrorlanayotganda 0, 1, 2 va newProp ni qayd qiladi. For..of sikli arr maʼlumotlar strukturasi qiymatlari ustidan takrorlanadi va konsolda a, b, c jurnallarini yozadi.

// 419.  Namuna(instance) va namuna bo'lmagan(non-instance) xususiyatlarni qanday aniqlaysiz
// Instance xususiyatlari sinf usullari ichida aniqlanishi kerak. Masalan, ism va yosh xususiyatlari insayder konstruktorni quyidagi tarzda aniqlaydi,

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Statik (sinf) va prototip ma'lumotlar xususiyatlari ClassBody deklaratsiyasidan tashqarida aniqlanishi kerak. Keling, Person sinfi uchun yosh qiymatini quyida belgilaymiz,

// 420.  isNaN va Number.isNaN o'rtasidagi farq nima?

// isNaN : Global funktsiya isNaNargumentni Raqamga aylantiradi va natijada olingan qiymat NaN bo'lsa, true qiymatini qaytaradi.
// Number.isNaN : Bu usul argumentni aylantirmaydi. Lekin u Raqam turi va NaN qiymati bo'lsa, u haqiqatni qaytaradi.
// Keling, farqni misol bilan ko'rib chiqaylik,
// isNaN(‘hello’);   // true
// Number.isNaN('hello'); // false

// 421.  IIFE-ni qo'shimcha qavslarsiz qanday chaqirish mumkin?
// Darhol chaqiriladigan funktsiya ifodalari (IIFE) bayonotlar to'plamini o'z ichiga olgan funktsiyani o'rash uchun bir juft qavsni talab qiladi.

// (function(dt) {
//    console.log(dt.toLocaleTimeString());
//  })(new Date());

// Ikkala IIFE ham, void operatori ham ifoda natijasini bekor void operatorqilganligi sababli, quyidagi kabi IIFE uchun qo'shimcha qavslardan qochishingiz mumkin,

//  void function(dt) {
//    console.log(dt.toLocaleTimeString());
//  }(new Date());

// 422.  Buni almashtirish holatlarida(switch case) ifodalardan(expression) foydalanish mumkinmi?
// Siz almashtirish holatida ishlatiladigan iboralarni ko'rgan bo'lishingiz mumkin, lekin almashtirish holati uchun haqiqiy qiymatni belgilash orqali almashtirish holatlari uchun ham foydalanish mumkin. Misol tariqasida haroratga asoslangan ob-havo sharoitini ko'rib chiqaylik,

// const weather = function getWeather(temp) {
//    switch(true) {
//        case temp < 0: return 'freezing';
//        case temp < 10: return 'cold';
//        case temp < 24: return 'cool';
//        default: return 'unknown';
//    }
//    }(10);

// 423.  Va'da qilingan xatolarga(Promise errors) etibor (ignore) bermaslikning eng oson yo'li qanday?
// Va'da qilingan xatolarga e'tibor bermaslikning eng oson va xavfsiz usuli bu xatoni bekor qilishdir. Ushbu yondashuv ESLint-ga ham mos keladi.
// await promise.catch(e => void e);

// 424.  CSS yordamida konsol dagi natijani qanday qilib stil berish mumkin?
// Konsol chiqishiga CSS formati kontent spesifikacisi %c yordamida CSS uslubini qo'shishingiz mumkin. Konsol satri xabari boshqa argumentda spetsifikatsiya va CSS uslubidan keyin qo'shilishi mumkin. Quyidagi kabi console.log va CSS spetsifikatsiyasi yordamida qizil rangli matnni chop qilaylik,

// console.log("%cThis is a red text", "color:red");

// Bundan tashqari, tarkibga ko'proq uslublar qo'shish mumkin. Masalan, yuqoridagi matn uchun shrift o'lchamini o'zgartirish mumkin

// console.log("%cThis is a red text with bigger font", "color:red; font-size:20px");

// 425.  Null birlashtiruvchi operator (??) nima?
// Bu mantiqiy operator bo'lib, agar chap tomondagi operand nol yoki aniqlanmagan bo'lsa, o'zining o'ng tomoni operandini qaytaradi, aks holda chap tomon operandini qaytaradi. Buni mantiqiy OR (||) operatori bilan taqqoslash mumkin, agar chap operand faqat null yoki aniqlanmagan bo'lsa, o'ng tomondagi operandni qaytaradi.

// console.log(null ?? true); // true
// console.log(false ?? true); // false
// console.log(undefined ?? true); // true

// 426.  Konsol chiqishini qanday guruhlash va joylashtirish mumkin?
// Jurnallarni console.group()osongina o'qish va guruhni yopish uchun console.groupEnd() dan foydalanish uchun tegishli jurnal xabarlarini guruhlash uchun foydalanish mumkin. Shu bilan birga, siz xabarlarni ierarxik tarzda chiqarish imkonini beruvchi guruhlarni joylashtirishingiz mumkin.
// Misol uchun, agar siz foydalanuvchi ma'lumotlarini qayd qilsangiz:
// console.group('User Details');
// console.log('name: Sudheer Jonna');
// console.log('job: Software Developer');

// // Nested Group
// console.group('Address');
// console.log('Street: Commonwealth');
// console.log('City: Los Angeles');
// console.log('State: California');

// console.groupEnd();
// Agar siz guruhlar sukut bo'yicha yopilishini xohlasangiz, console.groupCollapsed()o'rniga foydalanishingiz mumkin .console.group()

// 427.  Zich(dense) va siyrak(sparse) massivlar o'rtasidagi farq nima?
// Birinchi(0) dan oxirgi (array.length - 1) gacha bo'lgan har bir indeksdagi elementlarni o'z ichiga olgan massiv zich massiv deb ataladi. Har qanday indeksda kamida bitta element etishmayotgan bo'lsa, massiv siyrak deb nomlanadi.
// Keling, quyidagi ikki turdagi massivlarni ko'rib chiqaylik,
// const avengers = ['Ironman', 'Hulk', 'CaptainAmerica'];
// console.log(avengers[0]); // 'Ironman'
// console.log(avengers[1]); // 'Hulk'
// console.log(avengers[2]); // 'CaptainAmerica'
// console.log(avengers.length); // 3

// const justiceLeague = ['Superman', 'Aquaman', ,'Batman'];
// console.log(justiceLeague[0]); // 'Superman'
// console.log(justiceLeague[1]); // 'Aquaman'
// console.log(justiceLeague[2]); // undefined
// console.log(justiceLeague[3]); // 'Batman'
// console.log(justiceLeague.length); // 4

// 428.  Siyrak(dense) massivlarni yaratishning turli usullari qanday?
// JavaScript-da siyrak massivlarni yaratishning 4 xil usuli mavjud
// Massiv harfi : massiv literalidan foydalanganda qiymatni o'tkazib yuboring

// const justiceLeague = ['Superman', 'Aquaman', ,'Batman'];
// console.log(justiceLeague); // ['Superman', 'Aquaman', empty ,'Batman']

// ii.        Array() konstruktori: Massivni (uzunlik) yoki yangi massivni (uzunlik) chaqirish
// const array = Array(3);
// console.log(array); // [empty, empty ,empty]

// O'chirish operatori: massivda o'chirish[index] operatoridan foydalanish

// const justiceLeague = ['Superman', 'Aquaman', 'Batman'];
// delete justiceLeague[1];
// console.log(justiceLeague); // ['Superman', empty, ,'Batman']

// Uzunlik xususiyatini oshirish : massivning uzunlik xususiyatini oshirish
// const justiceLeague = ['Superman', 'Aquaman', 'Batman'];
// justiceLeague.length = 5;
// console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty]

// 429.  setTimeout, setImmediate va process.nextTick o'rtasidagi farq nima?
// Set Timeout: setTimeout() millisekundlar kechikishidan keyin bir martalik qayta qo'ng'iroqning bajarilishini rejalashtirishdir.
// Set Immediate : setImmediate funksiyasi joriy voqea tsikli tugagandan so'ng darhol funktsiyani bajarish uchun ishlatiladi.
// Process  NextTick: Agar ma'lum bir bosqichda process.nextTick() chaqirilsa, process.nextTick() ga o'tkazilgan barcha qayta qo'ng'iroqlar voqea tsikli davom etgunga qadar hal qilinadi. Agar process.nextTick() rekursiv chaqirilsa, bu hodisa tsiklini bloklaydi va I/U ochligini yaratadi.

// 430.  Asl massivni(original array) o'zgartirmasdan massivni qanday o'zgartirish mumkin?
// Usul reverse()massivdagi elementlarning tartibini o'zgartiradi, lekin asl massivni o'zgartiradi. Bu holatni isbotlash uchun oddiy misol keltiraylik,
// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.reverse();

// console.log(newArray); // [ 5, 4, 3, 2, 1]
// console.log(originalArray); // [ 5, 4, 3, 2, 1]

// Asl massivni o'zgartirmaydigan bir nechta echimlar mavjud. Keling, bir ko'rib chiqaylik.

// Kesish va teskari usullardan foydalanish: Bu holda, slice()sayoz nusxa yaratish uchun massivdagi usulni va undan keyin nusxadagi usulni chaqirish kifoya reverse().

//   const originalArray = [1, 2, 3, 4, 5];
//   const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy

//   console.log(originalArray); // [1, 2, 3, 4, 5]
//   console.log(newArray); // [ 5, 4, 3, 2, 1]

// Tarqatish va teskari usullardan foydalanish: Bu holda, massivning nusxasini yaratish uchun tarqalish sintaksisidan (...) foydalanamiz va undan so'ng reverse()nusxada usul chaqiramiz.

//   const originalArray = [1, 2, 3, 4, 5];
//   const newArray = [...originalArray].reverse();

//   console.log(originalArray); // [1, 2, 3, 4, 5]
//   console.log(newArray); // [ 5, 4, 3, 2, 1]

// Kamaytirish va tarqatish usullaridan foydalanish: Bu yerda massiv elementlarida reduktor funksiyasini bajaring va tarqalish sintaksisi yordamida to‘plangan massivni o‘ng tomonga qo‘shing.

//  const originalArray = [1, 2, 3, 4, 5];
//  const newArray = originalArray.reduce((accumulator, value) => {
//       return [value, ...accumulator];
//  }, []);

//  console.log(originalArray); // [1, 2, 3, 4, 5]
//  console.log(newArray); // [ 5, 4, 3, 2, 1]

// ReductionRight va spread usullaridan foydalanish: Bu yerda massiv elementlarida o‘ng reduktor funksiyasini (ya’ni kamaytirish usulining teskari yo‘nalishini) bajaring va tarqalish sintaksisi yordamida to‘plangan massivni chap tomonga qo‘shing.

//       const originalArray = [1, 2, 3, 4, 5];
//       const newArray = originalArray.reduceRight((accumulator, value) => {
//            return [...accumulator, value];
//       }, []);

//       console.log(originalArray); // [1, 2, 3, 4, 5]
//       console.log(newArray); // [ 5, 4, 3, 2, 1]

// ReductionRight va push usullaridan foydalanish: Bu yerda massiv elementlarida o‘ng reduktor funksiyasini (ya’ni kamaytirish usulining qarama-qarshi yo‘nalishini) bajaring va takrorlangan qiymatni akkumulyatorga suring.

//       const originalArray = [1, 2, 3, 4, 5];
//       const newArray = originalArray.reduceRight((accumulator, value) => {
//            accumulator.push(value);
//            return accumulator;
//       }, []);

//       console.log(originalArray); // [1, 2, 3, 4, 5]
//       console.log(newArray); // [ 5, 4, 3, 2, 1]
