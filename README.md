# JavaScript Interview Questions & Answers

> Click :star:if you like the project. Pull Requests are highly appreciated. Follow me [@azmu0520](https://github.com/azmu0520) for technical updates.

Go to [Coding Exercise](#coding-exercise) for coding specific questions

## Download PDF/Epub formats

You can download the PDF and Epub version of this repository from the latest run on the [actions tab](https://github.com/sudheerj/JavaScript-Interview-Questions/actions).

---

<p align="center">
  <a href=https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=javascript-interview-questions>
    <img src=https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:70/https://www.filepicker.io/api/file/AKYtjj5SSGyJuyZrkAB2 alt="ZTM Logo">
  </a>
  <p align="center">
    <ol>
    <li>Take this <a href=https://links.zerotomastery.io/jsp_sudheer>JavaScript Projects</a> course to go from a JavaScript beginner to confidently building your own projects</li>
    <li>Take this <a href=https://links.zerotomastery.io/mci_sudheer2>coding interview bootcamp</a> if you’re serious about getting hired and don’t have a CS degree</li>
    <li>Take this <a href=https://links.zerotomastery.io/ajs_sudheer>Advanced JavaScript Course</a> to learn advanced JS concepts and become a top JS developer</li>
    </ol>
  </p>
</p>

---

<div align="center">
    <p>
        <a href="https://www.youtube.com/watch?v=Zb4dPi7CANU">
            JavaScript Interview Questions | Top JavaScript Interview Questions and Answers.
            <div>
                <img src="https://img.youtube.com/vi/Zb4dPi7CANU/0.jpg" width="220" height="150" alt="JavaScript">
            </div>
        </a>
    </p>
</div>

---

### Table of Contents

| No. | Questions                                                                                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [JavaScriptda objectlarni yaratishning qanday usullari mavjud](#javaScriptda-objectlarni-yaratishning-qanday-usullari-mavjud)                                                          |
| 2   | [Prototype chain nima ](#Prototype-is-a-prototype-chain)                                                                                                                               |
| 3   | [Call, Apply and Bind o'rtasidagi farq nima ](#Call-is-the-difference-between-call-apply-and-bind)                                                                                     |
| 4   | [JSON nima va uning umumiy operatsiyalari ](#JSON-is-json-and-its-common-operations)                                                                                                   |
| 5   | [Array slice method maqsad nima ](#Array-is-the-purpose-of-the-array-slice-method)                                                                                                     |
| 6   | [Array splice method maqsad nima ](#Array-is-the-purpose-of-the-array-splice-method)                                                                                                   |
| 7   | [Slice and splice o'rtasidagi farq nima ](#Slice-is-the-difference-between-slice-and-splice)                                                                                           |
| 8   | [Object and Map qanday solishtirasiz ](#Object-do-you-compare-object-and-map)                                                                                                          |
| 9   | [ == va === operatorlar o'rtasidagi farq nima ](#what-is-the-difference-between--and--operators)                                                                                       |
| 10  | [Lambda yoki arrow functionlar nima ](#what-are-lambda-or-arrow-functions)                                                                                                             |
| 11  | [Birinchi class function nima ](#what-is-a-first-class-function)                                                                                                                       |
| 12  | [Birinchi tartibli (first order) function nima ](#what-is-a-first-order-function)                                                                                                      |
| 13  | [Higher order function nima ](#what-is-a-higher-order-function)                                                                                                                        |
| 14  | [Unary function nima ](#what-is-a-unary-function)                                                                                                                                      |
| 15  | [Currying function nima ](#what-is-the-currying-function)                                                                                                                              |
| 16  | [Pure function nima ](#what-is-a-pure-function)                                                                                                                                        |
| 17  | [Let kalit so'zining maqsadi nima ](#what-is-the-purpose-of-the-let-keyword)                                                                                                           |
| 18  | [Let va var o'rtasidagi farq nima ](#what-is-the-difference-between-let-and-var)                                                                                                       |
| 19  | [Nima maqsadda let kalit so'zi sifatida foydalaniladi ](#what-is-the-reason-to-choose-the-name-let-as-a-keyword)                                                                       |
| 20  | [Qanday qilib o'zgaruvchilarni almashtirish blokida xatosiz qayta e'lon qilasiz ](#how-do-you-redeclare-variables-in-switch-block-without-an-error)                                    |
| 21  | [Vaqtinchalik o'lik zona nima ? (Temporal Dead Zone) ](#what-is-the-temporal-dead-zone)                                                                                                |
| 22  | [IIFE (darhol chaqiriladigan funksiya ifodasi) nima? ](#what-is-iifeimmediately-invoked-function-expression)                                                                           |
| 23  | [JavaScriptda URL-manzilni qanday dekodlash yoki enkodlash mumkin ](#how-do-you-decode-or-encode-a-url-in-javascript)                                                                  |
| 24  | [Memoization nima ](#what-is-memoization)                                                                                                                                              |
| 25  | [Hoisting nima ](#what-is-hoisting)                                                                                                                                                    |
| 26  | [ES6 da qanday sinflar(class) mavjud ](#what-are-classes-in-es6)                                                                                                                       |
| 27  | [Closures nima ](#what-are-closures)                                                                                                                                                   |
| 28  | [Modules nima ](#what-are-modules)                                                                                                                                                     |
| 29  | [Nima uchun sizga modullar kerak ](#why-do-you-need-modules)                                                                                                                           |
| 30  | [Javasciprtda scopelar nima ](#what-is-scope-in-javascript)                                                                                                                            |
| 31  | [Service worker nima ](#what-is-a-service-worker)                                                                                                                                      |
| 32  | [Server worker yordamida DOMni qanday boshqarish mumkin ](#how-do-you-manipulate-dom-using-a-service-worker)                                                                           |
| 33  | [Server worker qayta ishga tushirishda ma'lumotlardan qanday foydalanasiz ](#how-do-you-reuse-information-across-service-worker-restarts)                                              |
| 34  | [IndexedDB nima ](#what-is-indexeddb)                                                                                                                                                  |
| 35  | [Veb-xotira(web storage) nima ](#what-is-web-storage)                                                                                                                                  |
| 36  | [Post xabari(post message) nima ](#what-is-a-post-message)                                                                                                                             |
| 37  | [Cookie nima ](#what-is-a-cookie)                                                                                                                                                      |
| 38  | [Cookie nima uchun kerak ](#why-do-you-need-a-cookie)                                                                                                                                  |
| 39  | [Cookie-da qanday variantlar mavjud ](#what-are-the-options-in-a-cookie)                                                                                                               |
| 40  | [Cookie faylini qanday o'chirish mumkin ](#how-do-you-delete-a-cookie)                                                                                                                 |
| 41  | [Cookie, mahalliy saqlash va seans saqlash o'rtasidagi farqlar qanday ](#What-are-the-differences-between-cookie-local-storage-and-session-storage)                                    |
| 42  | [ localStorage va sessionStorage o'rtasidagi asosiy farq nima ](#what-is-the-main-difference-between-localstorage-and-sessionstorage)                                                  |
| 43  | [Veb-xotiraga(web storage) qanday kirish mumkin ](#how-do-you-access-web-storage)                                                                                                      |
| 44  | [Session storageda qanday usullar mavjud ](#what-are-the-methods-available-on-session-storage)                                                                                         |
| 45  | [Saqlash hodisasi nima va uning voqea ishlovchisi (storage event and its event handler) ](#what-is-a-storage-event-and-its-event-handler)                                              |
| 46  | [Nima uchun sizga veb-xotira kerak ](#why-do-you-need-web-storage)                                                                                                                     |
| 47  | [Veb-xotira brauzerining yordamini qanday tekshirish mumkin ](#how-do-you-check-web-storage-browser-support)                                                                           |
| 48  | [Veb-workersning brauzer qo'llab-quvvatlashini qanday tekshirish mumkin ](#how-do-you-check-web-workers-browser-support)                                                               |
| 49  | [Veb-workerga misol keltiring ](#give-an-example-of-web-worker)                                                                                                                        |
| 50  | [Web-ishchilarning DOM-da qanday cheklovlari bor ](#what-are-the-restrictions-of-web-workers-on-dom)                                                                                   |
| 51  | [Promise nima ](#what-is-a-promise)                                                                                                                                                    |
| 52  | [Nega sizga promise kerak ](#why-do-you-need-a-promise)                                                                                                                                |
| 53  | [Promisening uchta holati nima ](#what-are-the-three-states-of-promise)                                                                                                                |
| 54  | [Callback funktsiyasi nima ](#what-is-a-callback-function)                                                                                                                             |
| 55  | [Nega bizga Callbacklar kerak ](#why-do-we-need-callbacks)                                                                                                                             |
| 56  | [Callback hell nima ](#what-is-a-callback-hell)                                                                                                                                        |
| 57  | [Server tomonidan yuborilgan voqealar(event) nima ](#what-is-server-sent-events)                                                                                                       |
| 58  | [Server tomonidan yuborilgan voqea bildirishnomalarini qanday qabul qilasiz ](#how-do-you-receive-server-sent-event-notifications)                                                     |
| 59  | [Server tomonidan yuborilgan voqealar uchun brauzer yordamini qanday tekshirish mumkin ](#how-do-you-check-browser-support-for-server-sent-events)                                     |
| 60  | [Server yuborilgan voqealar uchun qanday hodisalar mavjud ](#what-are-the-events-available-for-server-sent-events)                                                                     |
| 61  | [Promisening asosiy qoidalari qanday ](#what-are-the-main-rules-of-promise)                                                                                                            |
| 62  | [Callback dagi callback nima ](#what-is-callback-in-callback)                                                                                                                          |
| 63  | [promise zanjiri(chaining) nima ](#what-is-promise-chaining)                                                                                                                           |
| 64  | [Promise.all nima](#what-is-promise.all)                                                                                                                                               |
| 65  | [Promise race mathoding maqsadi nima ](#what-is-the-purpose-of-race-method-in-promise)                                                                                                 |
| 66  | [Javascriptda qat'iy rejim(strict mode) nima ](#what-is-a-strict-mode-in-javascript)                                                                                                   |
| 67  | [Nima uchun sizga qattiq rejim kerak ](#why-do-you-need-strict-mode)                                                                                                                   |
| 68  | [Qattiq rejimni qanday e'lon qilasiz ](#how-do-you-declare-strict-mode)                                                                                                                |
| 69  | [Ikkilamchi undovdan maqsad nima (! !) ](#what-is-the-purpose-of-double-exclamation)                                                                                                   |
| 70  | [Delete operatorining maqsadi nima ](#what-is-the-purpose-of-delete-operator)                                                                                                          |
| 71  | [typeOf operatori nima ](#what-is-typeof-operator)                                                                                                                                     |
| 72  | [Belgilanmagan xususiyati (undefined prop) nima ](#what-is-undefined-property)                                                                                                         |
| 73  | [Null qiymat nima ](#what-is-null-value)                                                                                                                                               |
| 74  | [Null va undefined ortasida farq nima ](#what-is-the-difference-between-null-and-undefined)                                                                                            |
| 75  | [Eval nima ](#What-is-eval)                                                                                                                                                            |
| 76  | [Window va document o'rtasidagi farq nima ](#what-is-the-difference-between-window-and-document)                                                                                       |
| 77  | [Javascriptda tarixga(Js history) qanday kirish mumkin ](#how-do-you-access-history-in-javascript)                                                                                     |
| 78  | [Caps lock tugmasi yoqilgan yoki yo'qligini qanday aniqlash mumkin ](#how-do-you-detect-caps-lock-key-turned-on-or-not)                                                                |
| 79  | [NaN nima ](#what-is-isnan)                                                                                                                                                            |
| 80  | [E'lon qilinmagan va aniqlanmagan o'zgaruvchilar o'rtasidagi farqlar qanday ](#what-are-the-differences-between-undeclared-and-undefined-variables)                                    |
| 81  | [Global o'zgaruvchilar nima ](#what-are-global-variables)                                                                                                                              |
| 82  | [Global o'zgaruvchilar bilan qanday muammolar mavjud ](#what-are-the-problems-with-global-variables)                                                                                   |
| 83  | [NaN property nima ](#what-is-nan-property)                                                                                                                                            |
| 84  | [isFinite funksiyasining maqsadi nima ](#what-is-the-purpose-of-isfinite-function)                                                                                                     |
| 85  | [Hodisalar oqimi (event flow) nima ](#what-is-an-event-flow)                                                                                                                           |
| 86  | [Event bubbling nima ](#what-is-event-bubbling)                                                                                                                                        |
| 87  | [Event capturing nima ](#what-is-event-capturing)                                                                                                                                      |
| 88  | [Form JavaScript yordamida qanday yuborasiz ](#how-do-you-submit-a-form-using-javascript)                                                                                              |
| 89  | [Operatsion tizim tafsilotlari(operating system details) ni qanday topish mumkin ](#how-do-you-find-operating-system-details)                                                          |
| 90  | [Document load va DOMContentLoaded hodisalari o'rtasidagi farq nima ](#what-is-the-difference-between-document-load-and-domcontentloaded-events)                                       |
| 91  | [What is the difference between native, host and user objects](#what-is-the-difference-between-native,-host-and-user-objects)                                                          |
| 92  | [JavaScript kodini tuzatish(debugging) uchun qanday vositalar yoki usullar qo'llaniladi](#what-are-the-tools-or-techniques-used-for-debugging-javascript-code)                         |
| 93  | [Promise da callback funksiya ishlatishni qanday ijobiy va salbiy tomonlari bor](#what-are-the-pros-and-cons-of-promises-over-callbacks)                                               |
| 94  | [Atribut va xususiyat(property) o'rtasidagi farq nima](#what-is-the-difference-between-an-attribute-and-a-property)                                                                    |
| 95  | [Bir xil kelib chiqish siyosati (same-origin policy) nima](#what-is-same-origin-policy)                                                                                                |
| 96  | [Void 0 ning maqsadi nima](#what-is-the-purpose-of-void-0)                                                                                                                             |
| 97  | [JavaScript kompilyatsiya qilingan yoki tarjima qilingan tilmi](#is-javascript-a-compiled-or-interpreted-language)                                                                     |
| 98  | [Js case-sensitive (katta va kichik hariflarni farqalydigan ) tilmi](#is-javascript-a-case-sensitive-language)                                                                         |
| 99  | [Java va JavaScript o'rtasida bog'liqlik bormi](#is-there-any-relation-between-java-and-javascript)                                                                                    |
| 100 | [Events nima](#what-are-events)                                                                                                                                                        |
| 101 | [Javascriptni kim yaratgan](#who-created-javascript)                                                                                                                                   |
| 102 | [PreventDefault usuli qanday holatda ishlatiladi](#what-is-the-use-of-preventdefault-method)                                                                                           |
| 103 | [StopPropagation usuli qanday holatda ishlatiladi](#what-is-the-use-of-stoppropagation-method)                                                                                         |
| 104 | [Noto'g'ri foydalanishni qaytarish uchun qanday qadamlar mavjud](#what-are-the-steps-involved-in-return-false)                                                                         |
| 105 | [BOM nima](#what-is-bom)                                                                                                                                                               |
| 106 | [setTimeout dan qanday foydalanish kerak](#what-is-the-use-of-settimeout)                                                                                                              |
| 107 | [setInterval nimadan foydalaniladi](#what-is-the-use-of-setinterval)                                                                                                                   |
| 108 | [Nima uchun JavaScript yagona Ipli (Single threaded) deb hisoblanadi](#why-is-javascript-treated-as-single-threaded)                                                                   |
| 109 | [Tadbir delegatsiyasi(event delegation) nima](#what-is-an-event-delegation)                                                                                                            |
| 110 | [ECMAScript nima](#what-is-ecmascript)                                                                                                                                                 |
| 111 | [JSON nima](#what-is-json)                                                                                                                                                             |
| 112 | [JSON sintaksisi qoidalari qanday](#what-are-the-syntax-rules-of-json)                                                                                                                 |
| 113 | [JSON stringify nima maqsadda foydalaniladi](#what-is-the-purpose-json-stringify)                                                                                                      |
| 114 | [JSON string ni qanday tahlil(parse) qilasiz](#how-do-you-parse-json-string)                                                                                                           |
| 115 | [Nima uchun sizga JSON kerak](#why-do-you-need-json)                                                                                                                                   |
| 116 | [PWAs nima](#what-are-pwas?)                                                                                                                                                           |
| 117 | [clearTimeout usulining ishlatish maqsadi nima](#what-is-the-purpose-of-cleartimeout-method)                                                                                           |
| 118 | [ClearInterval usulidan maqsad nima](#what-is-the-purpose-of-clearinterval-method)                                                                                                     |
| 119 | [Javascriptda yangi sahifani qanday yo’naltirish mumkin](#how-do-you-redirect-new-page-in-javascript)                                                                                  |
| 120 | [Stringda substring mavjudligini qanday tekshirish mumkin](#how-do-you-check-whether-a-string-contains-a-substring)                                                                    |
| 121 | [Javascriptda elektron pochtani qanday tekshirish mumkin](#how-do-you-validate-an-email-in-javascript)                                                                                 |
| 122 | [Joriy urlni javascript bilan qanday olish mumkin](#how-do-you-get-the-current-url-with-javascript)                                                                                    |
| 123 | [Joylashuv obyektining turli url xususiyatlari qanday](#what-are-the-various-url-properties-of-location-object)                                                                        |
| 124 | [Javascriptda so'rovlar qatori qiymatlarini qanday olish mumkin](#how-do-get-query-string-values-in-javascript)                                                                        |
| 125 | [objektda kalit(key) mavjudligini qanday tekshirish mumkin](#how-do-you-check-if-a-key-exists-in-an-object)                                                                            |
| 126 | [Javascript objektini qanday aylantirasiz(loop) yoki sanab o'tasiz](#how-do-you-loop-through-or-enumerate-javascript-object)                                                           |
| 127 | [Bo'sh objektni qanday sinab ko'rasiz ](#how-do-you-test-for-an-empty-object)                                                                                                          |
| 128 | [Argumentlar obyekti nima ](#what-is-an-arguments-object)                                                                                                                              |
| 129 | [Qanday qilib satrning birinchi harfini katta harf bilan yozish mumkin ](#how-do-you-make-first-letter-of-the-string-in-an-uppercase)                                                  |
| 130 | [For loopning qanday ijobiy va salbiy tomonlari bor](#what-are-the-pros-and-cons-of-for-loop)                                                                                          |
| 131 | [Joriy sanani javascriptda qanday ko'rsatasiz](#how-do-you-display-the-current-date-in-javascript)                                                                                     |
| 132 | [Ikki sana objektini qanday solishtirasiz](#how-do-you-compare-two-date-objects)                                                                                                       |
| 133 | [Satrning boshqa satr bilan boshlanishini qanday tekshirish mumkin](#how-do-you-check-if-a-string-starts-with-another-string)                                                          |
| 134 | [Javascriptda satrni(string) qanday kesish mumkin](#how-do-you-trim-a-string-in-javascript)                                                                                            |
| 135 | [Javascriptda kalit , qiymat juftligini qanday qo'shasiz](#how-do-you-add-a-key-value-pair-in-javascript)                                                                              |
| 136 | [!-- belgisi maxsus operatorni ifodalaydi](#is-the-'!--'-notation-represents-a-special-operator)                                                                                       |
| 137 | [O'zgaruvchilarga standart qiymatlarni qanday belgilash mumkin](#how-do-you-assign-default-values-to-variables)                                                                        |
| 138 | [Ko'p qatorli satrlarni qanday aniqlash mumkin](#how-do-you-define-multiline-strings)                                                                                                  |
| 139 | [Ilova qobig'i(app shell) modeli nima](#what-is-an-app-shell-model)                                                                                                                    |
| 140 | [Funktsiyalar uchun xususiyatlarni aniqlay olamizmi](#can-we-define-properties-for-functions)                                                                                          |
| 141 | [Funksiya kutayotgan parametrlar sonini qanday usul bilan topish mumkin](#what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function)                                     |
| 142 | [Polifill nima ?](#what-is-a-polyfill)                                                                                                                                                 |
| 143 | [Tanaffus(break) va davom(continue) iboralari nima](#what-are-break-and-continue-statements)                                                                                           |
| 144 | [Js yorliqlari(js label) nima ?](#what-are-js-labels)                                                                                                                                  |
| 145 | [Deklaratsiyalarni yuqorida saqlashning qanday afzalliklari bor](#what-are-the-benefits-of-keeping-declarations-at-the-top)                                                            |
| 146 | [O'zgaruvchilarni ishga tushirishning(initialize) qanday afzalliklari bor](#what-are-the-benefits-of-initializing-variables)                                                           |
| 147 | [Yangi objekt yaratish uchun qanday tavsiyalar mavjud](#what-are-the-recommendations-to-create-new-object)                                                                             |
| 148 | [JSON massivlarini qanday aniqlaysiz](#how-do-you-define-json-arrays)                                                                                                                  |
| 149 | [Tasodifiy butun sonlarni qanday yaratasiz](#how-do-you-generate-random-integers)                                                                                                      |
| 150 | [Butun sonlarni malum miqdor orasida chop etish uchun tasodifiy butun sonlar funksiyasini yoza olasizmi?](#can-you-write-a-random-integers-function-to-print-integers-with-in-a-range) |
| 151 | [Tree shaking nima](#what-is-tree-shaking)                                                                                                                                             |
| 152 | [Tree shaking nima keragi bor](#what-is-the-need-of-tree-shaking)                                                                                                                      |
| 153 | [Eval dan foydalanish tavsiya etiladimi](#is-it-recommended-to-use-eval)                                                                                                               |
| 154 | [Muntazam ifoda(regEx) nima ?](#what-is-a-regular-expression)                                                                                                                          |
| 155 | [Muntazam ifodada qanday string methods mavjud](#what-are-the-string-methods-available-in-regular-expression)                                                                          |
| 156 | [Muntazam ifodadagi modifikatorlar nima](#what-are-modifiers-in-regular-expression)                                                                                                    |
| 157 | [Muntazam ifoda naqshlari (patterns)nima](#what-are-regular-expression-patterns)                                                                                                       |
| 158 | [RegExp obyekti nima](#what-is-a-regexp-object)                                                                                                                                        |
| 159 | [Patter(naqsh) uchun satrni qanday qidirasiz](#how-do-you-search-a-string-for-a-pattern)                                                                                               |
| 160 | [Exec usulining maqsadi nima](#what-is-the-purpose-of-exec-method)                                                                                                                     |
| 161 | [HTML elementining stilini qanday o'zgartirish mumkin](#how-do-you-change-style-of-a-html-element)                                                                                     |
| 162 | ['1+2+'3' natijasi qanday bo'ladi](#what-would-be-the-result-of-1+2+'3')                                                                                                               |
| 163 | [Debbuger statment nima ?](#what-is-a-debugger-statement)                                                                                                                              |
| 164 | [Nima maqsadda Breakpoinlar debugginda qolaniladi ?](#what-is-the-purpose-of-breakpoints-indebugging)                                                                                  |
| 165 | [Identifikator sifatida ajratilgan so'zlardan foydalansam bo'ladimi?](#can-i-use-reserved-words-as-identifiers)                                                                        |
| 166 | [Mobil brauzerni qanday aniqlash mumkin ?](#how-do-you-detect-a-mobile-browser)                                                                                                        |
| 167 | [Regexpsiz mobil brauzerni qanday aniqlash mumkin ?](#how-do-you-detect-a-mobile-browser-without-regexp)                                                                               |
| 168 | [JS yordamida tasvir(image) kengligi va balandligini qanday olish mumkin](#how-do-you-get-the-image-width-and-height-using-js)                                                         |
| 169 | [Sinxron HTTP so'rovini qanday qilasiz](#how-do-you-make-synchronous-http-request)                                                                                                     |
| 170 | [Asinxron HTTP so'rovini qanday qilasiz](#how-do-you-make-asynchronous-http-request)                                                                                                   |
| 171 | [Javascriptda sanani boshqa vaqt mintaqasiga qanday o'zgartirasiz](#how-do-you-convert-date-to-another-timezone-in-javascript)                                                         |
| 172 | [Oyna(window) hajmini olish uchun qanday xususiyatlardan foydalaniladi](#what-are-the-properties-used-to-get-size-of-window)                                                           |
| 173 | [Javascriptda shartli operator nima](#what-is-a-conditional-operator-in-javascript)                                                                                                    |
| 174 | [Shartli operatorda nested ko’rinishni qo'llay olasizmi?](#Can-you-apply-chaining-on-conditional-operator)                                                                             |
| 175 | [Sahifani yuklagandan so'ng javascriptni yurgazish usullari qanday?](#what-are-the-ways-to-execute-javascript-after-page-load)                                                         |
| 176 | [Proto va prototip o'rtasidagi farq nima](#what-is-the-difference-between-proto-and-prototype)                                                                                         |
| 177 | [Sizga nuqtali vergul kerak bo'lgan misol keltiring](#give-an-example-where-do-you-really-need-semicolon)                                                                              |
| 178 | [Freeze usuli nima](#what-is-a-freeze-method)                                                                                                                                          |
| 179 | [Muzlatish usulidan maqsad nima](#what-is-the-purpose-of-freeze-method)                                                                                                                |
| 180 | [Nima uchun muzlatish usulidan foydalanishim kerak](#why-do-i-need-to-use-freeze-method)                                                                                               |
| 181 | [Brauzer tilini afzal ko'rishni qanday aniqlash mumkin](#how-do-you-detect-a-browser-language-preference)                                                                              |
| 182 | [Qanday qilib javascript yordamida stringni sarlavha(title) kattaligiga aylantirish mumkin](#how-to-convert-string-to-title-case-with-javascript)                                      |
| 183 | [Sahifada o'chirilgan(disabled) javascript sahifani qanday aniqlash mumkin](#how-do-you-detect-javascript-disabled-in-the-page)                                                        |
| 184 | [Javascript tomonidan qo'llab-quvvatlanadigan turli operatorlar nima](#what-are-various-operators-supported-by-javascript)                                                             |
| 185 | [Rest parametri nima](#what-is-a-rest-parameter)                                                                                                                                       |
| 186 | [Agar oxirgi argument sifatida Rest parametridan foydalanmasangiz nima bo'ladi](#what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument)                                     |
| 187 | [Javascriptda qanday bitli operatorlar mavjud](#what-are-the-bitwise-operators-available-in-javascript)                                                                                |
| 188 | [Spread operatori nima](#what-is-a-spread-operator)                                                                                                                                    |
| 189 | [objektning muzlatilgan yoki muzlatilmaganligini qanday aniqlash mumkin](#how-do-you-determine-whether-object-is-frozen-or-not)                                                        |
| 190 | [Bir xil yoki objektdan foydalanmayotgan ikkita qiymatni qanday aniqlash mumkin](#how-do-you-determine-two-values-same-or-not-using-object)                                            |
| 191 | [objektni ishlatishdan maqsad - bu usul](#what-is-the-purpose-of-using-object-is-method)                                                                                               |
| 192 | [Xususiyatlarni bir objektdan ikkinchisiga qanday nusxalash mumkin](#how-do-you-copy-properties-from-one-object-to-other)                                                              |
| 193 | [Tayinlash usuli qanday qo'llaniladi](#what-are-the-applications-of-assign-method)                                                                                                     |
| 194 | [Proksi-server nima ?](#what-is-a-proxy-object)                                                                                                                                        |
| 195 | [Seal usulining maqsadi nima](#what-is-the-purpose-of-seal-method)                                                                                                                     |
| 196 | [Seal usuli qanday qo'llaniladi](#what-are-the-applications-of-seal-method)                                                                                                            |
| 197 | [Freeze va Seal usullari o'rtasidagi farqlar qanday](#what-are-the-differences-between-freeze-and-seal-methods)                                                                        |
| 198 | [objektning muhrlangan yoki yo'qligini qanday aniqlash mumkin](#how-do-you-determine-if-an-object-is-sealed-or-not)                                                                    |
| 199 | [Qanday qilib sanab boladigan (enumerable) kalit va qiymat juftlarini olasiz](#how-do-you-get-enumerable-key-and-value-pairs)                                                          |
| 200 | [Object.values ​​va Object.entries usuli o'rtasidagi asosiy farq nima](#what-is-the-main-difference-between-object.values-and-object.entries-method)                                   |
| 201 | [Har qanday objektning kalitlari ro'yxatini qanday olishingiz mumkin](#how-can-you-get-the-list-of-keys-of-any-object)                                                                 |
| 202 | [Prototip bilan objektni qanday yaratasiz](#how-do-you-create-an-object-with-prototype)                                                                                                |
| 203 | [Weakset nima](#what-is-a-weakset)                                                                                                                                                     |
| 204 | [WeakSet va Set o'rtasidagi farqlar qanday](#what-are-the-differences-between-weakset-and-set)                                                                                         |
| 205 | [WeakSet-da mavjud usullar to'plamini sanab o'ting](#list-down-the-collection-of-methods-available-on-weakset)                                                                         |
| 206 | [WeakMap nima](#what-is-a-weakmap)                                                                                                                                                     |
| 207 | [WeakMap va Map o'rtasidagi farqlar qanday](#what-are-the-differences-between-weakmap-and-map)                                                                                         |
| 208 | [WeakMap-da mavjud usullar to'plamini sanab o'ting](#list-down-the-collection-of-methods-available-on-weakmap)                                                                         |
| 209 | [Unevaldan maqsad nima](#what-is-the-purpose-of-uneval)                                                                                                                                |
| 210 | [URL manzilini qanday kodlash(encode) mumkin](#how-do-you-encode-an-url)                                                                                                               |
| 211 | [URLni qanday dekodlash(decode) mumkin](#how-do-you-decode-an-url)                                                                                                                     |
| 212 | [Veb-sahifa matini qanday chop qilasiz](#how-do-you-print-the-contents-of-web-page)                                                                                                    |
| 213 | [Uneval va eval o'rtasidagi farq nima](#what-is-the-difference-between-uneval-and-eval)                                                                                                |
| 214 | [Anonim(anonymous) funksiya nima](#what-is-an-anonymous-function)                                                                                                                      |
| 215 | [Mahalliy va global o'zgaruvchilar o'rtasidagi ustuvorlik tartibi qanday](#what-is-the-precedence-order-between-local-and-global-variables)                                            |
| 216 | [JavaScript kirish elementlari nima ?](#what-are-javascript-accessors)                                                                                                                 |
| 217 | [Objekt konstruktorida xususiyatni qanday aniqlash mumkin](#how-do-you-define-property-on-object-constructor)                                                                          |
| 218 | [Get va defineProperty o'rtasidagi farq nima ?](#what-is-the-difference-between-get-and-defineproperty)                                                                                |
| 219 | [Getters va Settersning afzalliklari nimada](#what-are-the-advantages-of-getters-and-setters)                                                                                          |
| 220 | [DefineProperty usuli yordamida qabul qiluvchilar(getter) va sozlagichlarni(setter) qo'shishim mumkinmi](#can-i-add-getters-and-setters-using-defineproperty-method)                   |
| 221 | [Switch-case ni ishlatishdan maqsad nima](#what-is-the-purpose-of-switch-case)                                                                                                         |
| 222 | [Switch casedan foydalanishda qanday qoidalarga rioya qilish kerak](#what-are-the-conventions-to-be-followed-for-the-usage-of-swtich-case)                                             |
| 223 | [Primitiv ma'lumotlar turlari nima ?](#what-are-primitive-data-types)                                                                                                                  |
| 224 | [Objekt xususiyatlariga kirishning turli usullari qanday](#what-are-the-different-ways-to-access-object-properties)                                                                    |
| 225 | [Funksiya parametrlari qoidalari qanday](#what-are-the-function-parameter-rules)                                                                                                       |
| 226 | [Xato obyekti(error object) nima](#what-is-an-error-object)                                                                                                                            |
| 227 | [Sintaksis xatosiga duch kelganingizda](#when-you-get-a-syntax-error)                                                                                                                  |
| 228 | [Xato obyektidan farqli xato nomlari qanday](#what-are-the-different-error-names-from-error-object)                                                                                    |
| 229 | [Xatolarni hal qilishda qanday turli bayonotlar mavjud](#what-are-the-various-statements-in-error-handling)                                                                            |
| 230 | [Javascriptda ikki turdagi looplar qanday?](#what-are-the-two-types-of-loops-in-javascript)                                                                                            |
| 231 | [nodejs nima](#what-is-nodejs)                                                                                                                                                         |
| 232 | [Intl objekti nima](#what-is-an-intl-object)                                                                                                                                           |
| 233 | [Tilga xos sana va vaqtni formatlashni qanday amalga oshirasiz](#how-do-you-perform-language-specific-date-and-time-formatting)                                                        |
| 234 | [Iterator nima](#what-is-an-iterator)                                                                                                                                                  |
| 235 | [Sinxron iteratsiya qanday ishlaydi](#how-does-synchronous-iteration-works)                                                                                                            |
| 236 | [Hodisa sikli(event loop) nima](#what-is-an-event-loop)                                                                                                                                |
| 237 | [Call stack nima ?](#what-is-call-stack)                                                                                                                                               |
| 238 | [Hodisa navbati (event qoeue) nima](#what-is-an-event-queue)                                                                                                                           |
| 239 | [Dekorator nima](#what-is-a-decorator)                                                                                                                                                 |
| 240 | [Intl obyektining xossalari(Intl object prop) qanday](#what-are-the-properties-of-intl-object)                                                                                         |
| 241 | [Unary operator nima](#what-is-an-unary-operator)                                                                                                                                      |
| 242 | [Massivdagi elementlarni qanday saralaysiz](#how-do-you-sort-elements-in-an-array)                                                                                                     |
| 243 | [Massivlarni saralashda compareFunction nimadan iborat](#what-is-the-purpose-of-comparefunction-while-sorting-arrays)                                                                  |
| 244 | [Massivni qanday teskari aylantirasiz](#how-do-you-reversing-an-array)                                                                                                                 |
| 245 | [Massivda minimal va maksimal qiymatlarni qanday topasiz](#how-do-you-find-min-and-max-value-in-an-array)                                                                              |
| 246 | [Matematik funktsiyalarsiz min va maksimal qiymatlarni qanday topish mumkin](#how-do-you-find-min-and-max-values-without--math-functions)                                              |
| 247 | [Bo'sh statment nima va uning maqsadi](#what-is-an-empty-statement-and-purpose-of-it)                                                                                                  |
| 248 | [Modulning metama'lumotlarini qanday olish mumkin](#how-do-you-get-meta-data-of-a-module)                                                                                              |
| 249 | [Vergul operatori nima](#what-is-a-comma-operator)                                                                                                                                     |
| 250 | [Vergul operatorining afzalligi nimada](#what-is-the-advantage-of-a-comma-operator)                                                                                                    |
| 251 | [Typesciprt nima ?](#what-is-typescript)                                                                                                                                               |
| 252 | [Javascript va typescript o'rtasidagi farqlar qanday](#what-are-the-differences-between-javascript-and-typescript)                                                                     |
| 253 | [Typescriptning javascriptdan qanday afzalliklari bor](#what-are-the-advantages-of-typescript-over-javascript)                                                                         |
| 254 | [objektni ishga tushirish (obj initialize) nima](#what-is-an-object-initializer)                                                                                                       |
| 255 | [Konstruktor usuli nima](#what-is-a-constructor-method)                                                                                                                                |
| 256 | [Agar classda bir necha marta konstruktor yozsangiz nima bo'ladi](#what-happens-if-you-write-constructor-more-than-once-in-a-class)                                                    |
| 257 | [Parent classning konstruktorini qanday chaqirish mumkin?](#how-do-you-call-the-constructor-of-a-parent-class)                                                                         |
| 258 | [objektning prototipini qanday olish mumkin](#how-do-you-get-the-prototype-of-an-object)                                                                                               |
| 259 | [Agar getPrototype usuli uchun string turini o'tkazsam nima bo'ladi](#what-happens-if-i-pass-string-type-for-getprototype-method)                                                      |
| 260 | [Bir objektning prototipini boshqasiga qanday o'rnatish mumkin](#how-do-you-set-prototype-of-one-object-to-another)                                                                    |
| 261 | [objektni kengaytirish(extendable) mumkin yoki yo'qligini qanday tekshirish mumkin](#how-do-you-check-whether-an-object-can-be-extendable-or-not)                                      |
| 262 | [objektni kengaytirishni qanday oldini olish mumkin](#how-do-you-prevent-an-object-to-extend)                                                                                          |
| 263 | [objektni kengaytirilmaydigan qilishning turli usullari qanday](#what-are-the-different-ways-to-make-an-object-non-extensible)                                                         |
| 264 | [objektda bir nechta xususiyatlarni qanday aniqlash mumkin](#how-do-you-define-multiple-properties-on-an-object)                                                                       |
| 265 | [Javascriptda MEAN nima](#what-is-mean-in-javascript)                                                                                                                                  |
| 266 | [Javascriptda xiralashish(Obfuscation ) nima](#what-is-obfuscation-in-javascript)                                                                                                      |
| 267 | [Nima uchun sizga obfuscation kerak ?](#why-do-you-need-obfuscation)                                                                                                                   |
| 268 | [Kichiklashtirish(minification) nima](#what-is-minification)                                                                                                                           |
| 269 | [Kichiklashtirishning qanday afzalliklari bor](#what-are-the-advantages-of-minification)                                                                                               |
| 270 | [Obfuscation va shifrlash o'rtasidagi farqlar qanday](#what-are-the-differences-between-obfuscation-and-encryption)                                                                    |
| 271 | [Kichiklashtirish uchun qanday umumiy vositalar qo'llaniladi](#what-are-the-common-tools-used-for-minification)                                                                        |
| 272 | [Javascript yordamida shaklni(form) tekshirishni qanday amalga oshirasiz](#how-do-you-perform-form-validation-using-javascript)                                                        |
| 273 | [Shaklni(form) tekshirishni javascriptsiz qanday amalga oshirasiz](#how-do-you-perform-form-validation-without-javascript)                                                             |
| 274 | [Cheklovlarni tekshirish uchun qanday DOM usullari mavjud](#what-are-the-dom-methods-available-for-constraint-validation)                                                              |
| 275 | [Mavjud cheklovni tekshirish DOM xususiyatlari qanday](#what-are-the-available-constraint-validation-dom-properties)                                                                   |
| 276 | [Yaroqlilik xususiyatlarining ro'yxati qanday](#what-are-the-list-of-validity-properties)                                                                                              |
| 277 | [rangeOverflow xususiyatidan foydalanishga misol keltiring](#give-an-example-usage-of-rangeoverflow-property)                                                                          |
| 278 | [Enums xususiyati javascriptda mavjudmi?](#is-enums-feature-available-in-javascript)                                                                                                   |
| 279 | [Enum nima](#What-is-an-enum)                                                                                                                                                          |
| 280 | [objektning barcha xususiyatlarini qanday ro'yxatga olasiz](#how-do-you-list-all-properties-of-an-object)                                                                              |
| 281 | [How do you get property descriptors of an object](#how-do-you-get-property-descriptors-of-an-object)                                                                                  |
| 282 | [Xususiyat deskriptori tomonidan taqdim etilgan atributlar qanday](#what-are-the-attributes-provided-by-a-property-descriptor)                                                         |
| 283 | [Classlarni qanday uzaytirasiz(extends)](#how-do-you-extend-classes)                                                                                                                   |
| 284 | [Sahifani qayta yuklamasdan urlni qanday o'zgartirish mumkin](#how-do-i-modify-the-url-without-reloading-the-page)                                                                     |
| 285 | [Massiv ma'lum bir qiymatni o'z ichiga oladi yoki yo'qligini qanday tekshirish mumkin](#how-do-you-check-whether-an-array-includes-a-particular-value-or-not)                          |
| 286 | [Skayar massivlarni qanday solishtirasiz](#how-do-you-compare-scalar-arrays)                                                                                                           |
| 287 | [Get parametrlaridan qiymatni qanday olish mumkin](#how-to-get-the-value-from-get-parameters)                                                                                          |
| 288 | [Qanday qilib raqamlarni vergul bilan ming ajratuvchi sifatida chop qilasiz](#how-do-you-print-numbers-with-commas-as-thousand-separators)                                             |
| 289 | [Java va javascript o'rtasidagi farq nima](#what-is-the-difference-between-java-and-javascript)                                                                                        |
| 290 | [JavaScript namespace qo'llab-quvvatlaydimi?](#does-javascript-supports-namespace)                                                                                                     |
| 291 | [Namescpace qanday e'lon qilasiz](#how-do-you-declare-namespace)                                                                                                                       |
| 292 | [Bosh sahifadagi iframe-da javascript kodini qanday chaqirish mumkin](#how-do-you-invoke-javascript-code-in-an-iframe-from-parent-page)                                                |
| 293 | [Vaqt mintaqasini sanadan qanday qilib siljitish mumkin](#how-do-get-the-timezone-offset-from-date)                                                                                    |
| 294 | [CSS va JS fayllarini dinamik ravishda qanday yuklaysiz](#how-do-you-load-css-and-js-files-dynamically)                                                                                |
| 295 | [DOM-da HTML elementlarini topishning turli usullari qanday?](#what-are-the-different-methods-to-find-html-elements-in-dom)                                                            |
| 296 | [jQuery nima](#what-is-jquery)                                                                                                                                                         |
| 297 | [V8 JavaScript dvigateli nima](#what-is-v8-javascript-engine)                                                                                                                          |
| 298 | [Nima uchun biz javascriptni dinamik til deb ataymiz](#why-do-we-call-javascript-as-dynamic-language)                                                                                  |
| 299 | [Void operatori nima](#what-is-a-void-operator)                                                                                                                                        |
| 300 | [Kursorni kutish(wait) uchun qanday sozlash kerak](#how-to-set-the-cursor-to-wait)                                                                                                     |
| 301 | [Qanday qilib cheksiz sikl (infinite loop)yaratasiz](#how-do-you-create-an-infinite-loop)                                                                                              |
| 302 | [Nima uchun bayonot bilan avoid kerak](#why-do-you-need-to-avoid-with-statement)                                                                                                       |
| 303 | [Quyidagi for looplarning natijalari qanday](#what-is-the-output-of-below-for-loops)                                                                                                   |
| 304 | [ES6 ning ba'zi xususiyatlarini sanab o'ting](#list-down-some-of-the-features-of-es6)                                                                                                  |
| 305 | [ES6 nima](#what-is-es6)                                                                                                                                                               |
| 306 | [Let va const o'zgaruvchilarni qayta e'lon qila olamanmi?](#can-I-redeclare-let-and-const-variables)                                                                                   |
| 307 | [Const o'zgaruvchisi qiymatni o'zgarmas qiladimi](#is-const-variable-makes-the-value-immutable)                                                                                        |
| 308 | [Standart parametrlar nima](#what-are-default-parameters)                                                                                                                              |
| 309 | [Shablon literallari nima](#what-are-template-literals)                                                                                                                                |
| 310 | [Shablon literallarida ko'p qatorli satrlarni qanday yozish mumkin](#how-do-you-write-multi-line-strings-in-template-literals)                                                         |
| 311 | [Murakkab(nested) shablonlari nima](#what-are-nesting-templates)                                                                                                                       |
| 312 | [Belgilangan(tagged) shablonlar nima](#what-are-tagged-templates)                                                                                                                      |
| 313 | [Raw stringlar nima](#what-are-raw-strings)                                                                                                                                            |
| 314 | [Destructuring assignment (strukturani buzish) nima ?](#what-is-destructuring-assignment)                                                                                              |
| 315 | [Topshiriqni buzishda standart qiymatlar qanday](#what-are-default-values-in-destructuring-assignment)                                                                                 |
| 316 | [Topshiriqni buzishda o'zgaruvchilarni qanday almashtirasiz](#how-do-you-swap-variables-in-destructuring-assignment)                                                                   |
| 317 | [Kengaytirilgan objekt harflari nima](#what-are-enhanced-object-literals)                                                                                                              |
| 318 | [Dinamik import nima](#what-are-dynamic-imports)                                                                                                                                       |
| 319 | [Dinamik import uchun qanday holatlar mavjud](#what-are-the-use-cases-for-dynamic-imports)                                                                                             |
| 320 | [Tiplangan massivlar(typed arrays) nima](#what-are-typed-arrays)                                                                                                                       |
| 321 | [Modul yuklagichlarining(modal loader) afzalliklari nimada](#what-are-the-advantages-of-module-loaders)                                                                                |
| 322 | [Collation (harakatlash) nima ](#what-is-collation)                                                                                                                                    |
| 323 | [For .. of statmentni nima uchun ishlatiladi](#what-is-for...of-statement)                                                                                                             |
| 324 | [Quyidagi yoyilgan operator massivining natijasi nimaga teng](#what-is-the-output-of-below-spread-operator-array)                                                                      |
| 325 | [PostMessage xavfsizmi?](#is-postmessage-secure)                                                                                                                                       |
| 326 | [Joyker belgisi sifatida postxabar maqsadli kelib chiqishi bilan bog'liq qanday muammolar mavjud](#what-are-the-problems-with-postmessage-target-origin-as-wildcard)                   |
| 327 | [Qanday qilib tajovuzkorlardan postMessages olishdan qochasiz](#how-do-you-avoid-receiving-postmessages-from-attackers)                                                                |
| 328 | [PostMessages-dan butunlay qochishim mumkinmi?](#can-i-avoid-using-postmessages-completely)                                                                                            |
| 329 | [PostMessages sinxronlashganmi ?](#is-postmessages-synchronous)                                                                                                                        |
| 330 | [Javascript qanday paradigma](#what-paradigm-is-javascript)                                                                                                                            |
| 331 | [Ichki(Internal) va tashqi(external) javascript o'rtasidagi farq nima](#what-is-the-difference-between-internal-and-external-javascript)                                               |
| 332 | [JavaScript server tomonidagi skriptga qaraganda tezroqmi](#is-javascript-faster-than-server-side-script)                                                                              |
| 333 | [Belgilash qutisi(checkbox) holatini(status) qanday olish mumkin](#how-do-you-get-the-status-of-a-checkbox)                                                                            |
| 334 | [Double tilde operatorining maqsadi nima](#what-is-the-purpose-of-double-tilde-operator)                                                                                               |
| 335 | [Belgilarni ASCII kodiga qanday o'zgartirasiz](#how-do-you-convert-character-to-ascii-code)                                                                                            |
| 336 | [ArrayBuffer nima](#what-is-arraybuffer)                                                                                                                                               |
| 337 | [Quyidagi satr ifodasining natijasi nima](#what-is-the-output-of-below-string-expression)                                                                                              |
| 338 | [Xato obyektining(error object) maqsadi nima](#what-is-the-purpose-of-error-object)                                                                                                    |
| 339 | [EvalError obyektining maqsadi nima](#what-is-the-purpose-of-evalerror-object)                                                                                                         |
| 340 | [Qattiy bo'lmagan rejimdan qat'iy rejimga o'tkazilgan xatolar ro'yxati qanday](#what-are-the-list-of-cases-error-thrown-from-non-strict-mode-to-strict-mode)                           |
| 341 | [Barcha objektlarning prototiplari bormi?](#do-all-objects-have-prototypes)                                                                                                            |
| 342 | [Parametr va argument o'rtasidagi farq nima](#what-is-the-difference-between-a-parameter-and-an-argument)                                                                              |
| 343 | [Massivlardagi some usulining maqsadi nima](#what-is-the-purpose-of-some-method-in-arrays)                                                                                             |
| 344 | [Ikki yoki undan ortiq massivni qanday birlashtirasiz](#how-do-you-combine-two-or-more-arrays)                                                                                         |
| 345 | [Sayoz(shallow) va chuqur(deep) nusxa o'rtasidagi farq nima](#what-is-the-difference-between-shallow-and-deep-copy)                                                                    |
| 346 | [Satrning ma'lum nusxalarini qanday yaratish mumkin](#how-do-you-create-specific-number-of-copies-of-a-string)                                                                         |
| 347 | [Qanday qilib barcha mos keladigan satrlarni muntazam ifodaga qaytarasiz](#how-do-you-return-all-matching-strings-against-a-regular-expression)                                        |
| 348 | [Stringni boshida yoki oxirida qanday qilib kesish mumkin](#how-do-you-trim-a-string-at-the-beginning-or-ending)                                                                       |
| 349 | [Unar operator bilan quyidagi konsol bayonotining chiqishi nima](#what-is-the-output-of-below-console-statement-with-unary-operator)                                                   |
| 350 | [Javascript mixins foydalanadimi?](#does-javascript-uses-mixins)                                                                                                                       |
| 351 | [Thunk funktsiyasi nima](#what-is-a-thunk-function)                                                                                                                                    |
| 352 | [Asinxron thunks nima](#what-are-asynchronous-thunks)                                                                                                                                  |
| 353 | [Quyidagi funksiya chaqiruvlarining natijasi nima](#what-is-the-output-of-below-function-calls)                                                                                        |
| 354 | [Satrdagi barcha qator uzilishlarini qanday olib tashlash mumkin](#how-to-remove-all-line-breaks-from-a-string)                                                                        |
| 355 | [Qayta ishlash(reflow) va qayta bo'yash(repaint) o'rtasidagi farq nima](#what-is-the-difference-between-reflow-and-repaint)                                                            |
| 356 | [Massivni inkor qilish bilan nima sodir bo'ladi](#what-happens-with-negating-an-array)                                                                                                 |
| 357 | [Agar ikkita massiv qo'shsak nima bo'ladi](#what-happens-if-we-add-two-arrays)                                                                                                         |
| 358 | [Noto'g'ri qiymatlar bo'yicha yuqori qo'shimcha operatorning chiqishi qanday bo'ladi](#what-is-the-output-of-prepend-additive-operator-on-falsy-values)                                |
| 359 | [Maxsus belgilar yordamida o'z-o'zidan strigni qanday yaratasiz](#how-do-you-create-self-string-using-special-characters)                                                              |
| 360 | [Massivdan noto'g'ri qiymatlarni qanday olib tashlash mumkin](#how-do-you-remove-falsy-values-from-an-array)                                                                           |
| 361 | [Massivning noyob qiymatlarini qanday olish mumkin](#how-do-you-get-unique-values-of-an-array)                                                                                         |
| 362 | [Taxalluslarni buzish nima](#what-is-destructuring-aliases)                                                                                                                            |
| 363 | [Map usulini ishlatmasdan massiv qiymatlarini qanday Map qilish mumkin](#how-do-you-map-the-array-values-without-using-map-method)                                                     |
| 364 | [Massivni qanday bo'shatish mumkin](#how-do-you-empty-an-array)                                                                                                                        |
| 365 | [Qanday qilib raqamlarni ma'lum o'nli kasrlarga yaxlitlash mumkin](#how-do-you-rounding-numbers-to-certain-decimals)                                                                   |
| 366 | [Massivni objektga aylantirishning eng oson yo'li qanday?](#what-is-the-easiest-way-to-convert-an-array-to-an-object)                                                                  |
| 367 | [Ba'zi ma'lumotlar bilan massivni qanday yaratish mumkin](#how-do-you-create-an-array-with-some-data)                                                                                  |
| 368 | [Konsol objektidagi to'ldiruvchilar nima](#what-are-the-placeholders-from-console-object)                                                                                              |
| 369 | [Konsol xabarlariga CSS qo'shish mumkinmi?](#is-it-possible-to-add-css-to-console-messages)                                                                                            |
| 370 | [Konsol objektining dir usulidan maqsad nima](#what-is-the-purpose-of-dir-method-of-console-object)                                                                                    |
| 371 | [Konsolda HTML elementlarini disk raskadrovka qilish mumkinmi?](#is-it-possible-to-debug-html-elements-in-console)                                                                     |
| 372 | [Konsol objekti yordamida ma'lumotlarni jadval formatida qanday ko'rsatish mumkin](#how-do-you-display-data-in-a-tabular-format-using-console-object)                                  |
| 373 | [Argument son yoki son emasligini qanday tekshirish mumkin](#how-do-you-verify-that-an-argument-is-a-number-or-not)                                                                    |
| 374 | [Buferga nusxa ko'chirish tugmasi qanday yaratiladi](#how-do-you-create-copy-to-clipboard-button)                                                                                      |
| 375 | [Timestamp uchun shortcut nima](#what-is-the-shortcut-to-get-timestamp)                                                                                                                |
| 376 | [Ko'p o'lchovli massivlarni qanday tekislash mumkin](#how-do-you-flattening-multi-dimensional-arrays)                                                                                  |
| 377 | [Ko'p holatni tekshirishning(multi condition checking) eng oson usuli](#what-is-the-easiest-multi-condition-checking)                                                                  |
| 378 | [Brauzerning orqaga tugmachasini qanday suratga olasiz](#how-do-you-capture-browser-back-button)                                                                                       |
| 379 | [Veb-sahifada sichqonchaning o'ng tugmachasini qanday o'chirib qo'yish mumkin](#how-do-you-disable-right-click-in-the-web-page)                                                        |
| 380 | [O'rash objektlari(wrapper object) nima](#what-are-wrapper-objects)                                                                                                                    |
| 381 | [AJAX nima](#what-is-ajax)                                                                                                                                                             |
| 382 | [Asinxron kod bilan ishlashning turli usullari qanday](#what-are-the-different-ways-to-deal-with-asynchronous-code)                                                                    |
| 383 | [Qanday qilib qabul qilishni bekor qilish mumkin](#how-to-cancel-a-fetch-request)                                                                                                      |
| 384 | [Veb nutq API (web speech API) nima ?](#what-is-web-speech-api)                                                                                                                        |
| 385 | [Minimal vaqt tugashini kamaytirish(minimum timeout) nima](#what-is-minimum-timeout-throttling)                                                                                        |
| 386 | [Zamonaviy brauzerlarda nol vaqt tugashini qanday amalga oshirasiz](#how-do-you-implement-zero-timeout-in-modern-browsers)                                                             |
| 387 | [Event loop qanday vazifalar mavjud](#what-are-tasks-in-event-loop)                                                                                                                    |
| 388 | [Mikrovazifa(microtask) nima](#what-are-microtasks)                                                                                                                                    |
| 389 | [What are different event loops](#what-are-different-event-loops)                                                                                                                      |
| 390 | [What is the purpose of queuemicrotask](#what-is-the-purpose-of-queuemicrotask)                                                                                                        |
| 391 | [Typescript faylida javascript kutubxonalaridan qanday foydalanasiz](#how-do-you-use-javascript-libraries-in-typescript-file)                                                          |
| 392 | [Promises va kuzatilishi mumkin bo'lganlar o'rtasidagi farqlar qanday](#what-are-the-differences-between-promises-and-observables)                                                     |
| 393 | [Heap nima](#what-is-heap)                                                                                                                                                             |
| 394 | [Voqealar jadvali(event table) nima](#what-is-an-event-table)                                                                                                                          |
| 395 | [MicroTask navbati nima](#what-is-a-microtask-queue)                                                                                                                                   |
| 396 | [Shim va polifill o'rtasidagi farq nima](#what-is-the-difference-between-shim-and-polyfill)                                                                                            |
| 397 | [Primitiv yoki primitiv bo'lmagan qiymat turini qanday aniqlash mumkin](#how-do-you-detect-primitive-or-non-primitive-value-type)                                                      |
| 398 | [Babel nima](#what-is-babel)                                                                                                                                                           |
| 399 | [Node.js butunlay bitta tishlimi (single threaded)](#is-node.js-completely-single-threaded)                                                                                            |
| 400 | [Kuzatiladigan narsalardan qanday umumiy foydalanish holatlari mavjud](#what-are-the-common-use-cases-of-observables)                                                                  |
| 401 | [RxJS nima](#what-is-rxjs)                                                                                                                                                             |
| 402 | [Funktsiya konstruktori va funksiya deklaratsiyasi o'rtasidagi farq nima](#what-is-the-difference-between-function-constructor-and-function-declaration)                               |
| 403 | [Qisqa tutashuv holati (Short circuit condition) nima](#what-is-a-short-circuit-condition)                                                                                             |
| 404 | [Massiv hajmini o'zgartirishning eng oson yo'li qanday?](#what-is-the-easiest-way-to-resize-an-array)                                                                                  |
| 405 | [Kuzatiladigan narsa nima](#what-is-an-observable)                                                                                                                                     |
| 406 | [Funktsiya va sinf deklaratsiyasi o'rtasidagi farq nima](#what-is-the-difference-between-function-and-class-declarations)                                                              |
| 407 | [Asinx funksiya nima](#what-is-an-async-function)                                                                                                                                      |
| 408 | [Qanday qilib va'dalarni yutish(promise swallowing) xatolarining oldini olish mumkin](#how-do-you-prevent-promises-swallowing-errors)                                                  |
| 409 | [Deno nima](#what-is-deno)                                                                                                                                                             |
| 410 | [Qanday qilib objektni javascriptda takrorlanadigan qilish mumkin](#how-do-you-make-an-object-iterable-in-javascript)                                                                  |
| 411 | [To'g'ri quyruq chaqiruvi ( Proper Tail Call ) nima](#what-is-a-proper-tail-call)                                                                                                      |
| 412 | [objektni Promise(va’da) ekani yoki yoq ekanini qanday tekshirish mumkin](#how-do-you-check-an-object-is-a-promise-or-not)                                                             |
| 413 | [Funktsiya konstruktor sifatida chaqirilganligini qanday aniqlash mumkin](#how-to-detect-if-a-function-is-called-as-constructor)                                                       |
| 414 | [Argumentlar objekti va Rest parametri o'rtasidagi farqlar qanday](#what-are-the-differences-between-arguments-object-and-rest-parameter)                                              |
| 415 | [Spred operatori va Rest parametri o'rtasidagi farqlar qanday](#what-are-the-differences-between-spread-operator-and-rest-parameter)                                                   |
| 416 | [Har xil turdagi generatorlar qanday](#what-are-the-different-kinds-of-generators)                                                                                                     |
| 417 | [O'rnatilgan iterativlar(built-in) nima](#what-are-the-built-in-iterables)                                                                                                             |
| 418 | [for...of va for... o'rtasida qanday farq bor](#what-are-the-differences-between-for...of-and-for...in-statements)                                                                     |
| 419 | [Namuna(instance) va namuna bo'lmagan(non-instance) xususiyatlarni qanday aniqlaysiz](#how-do-you-define-instance-and-non-instance-properties)                                         |
| 420 | [isNaN va Number.isNaN o'rtasidagi farq nima](#what-is-the-difference-between-isnan-and-number.isnan)                                                                                  |
| 421 | [IIFE-ni qo'shimcha qavslarsiz qanday chaqirish mumkin](#how-to-invoke-an-iife-without-any-extra-brackets)                                                                             |
| 422 | [Buni almashtirish holatlarida(switch case) ifodalardan(expression) foydalanish mumkinmi?](#is-that-possible-to-use-expressions-in-switch-cases)                                       |
| 423 | [Va'da qilingan xatolarga(Promise errors) etibor (ignore) bermaslikning eng oson yo'li qanday?](#what-is-the-easiest-way-to-ignore-promise-errors)                                     |
| 424 | [CSS yordamida konsol dagi natijani qanday qilib stil berish mumkin?](#how-do-style-the-console-output-using-css)                                                                      |
| 425 | [Nullish coalescing operator(??) nima](<#what-is-nullish-coalescing-operator-(??)>)                                                                                                    |
| 426 | [Konsol chiqishini qanday guruhlash va joylashtirish mumkin?](#how-do-you-group-and-nest-console-output)                                                                               |
| 427 | [Zich(dense) va siyrak(sparse) massivlar o'rtasidagi farq nima?](#what-is-the-difference-between-dense-and-sparse-arrays)                                                              |
| 428 | [Siyrak(dense) massivlarni yaratishning turli usullari qanday?](#what-are-the-different-ways-to-create-sparse-arrays)                                                                  |
| 429 | [setTimeout, setImmediate va process.nextTick o'rtasidagi farq nima](#what-is-the-difference-between-set-timeout-,-set-immediate-and-processnext-tick)                                 |
| 430 | [Asl massivni(original array) o'zgartirmasdan massivni qanday o'zgartirish mumkin?](#how-do-you-reverse-an-array-without-modifying-original-array)                                     |

1. ### JavaScriptda objectlarni yaratishning qanday usullari mavjud

   Quyidagi kabi javascriptda objektlar yaratishning ko'plab usullari mavjud

   1. **Object constructor:**

      Bo'sh objektni yaratishning eng oddiy usuli objekt konstruktoridan foydalanishdir. Hozirgi vaqtda bunday yondashuv tavsiya etilmaydi.

      ```javascript
      var object = new Object();
      ```

   2. **Object's create method:**

      Object ning yaratish usuli prototip objektini parametr sifatida o'tkazish orqali yangi objektni yaratadi

      ```javascript
      var object = Object.create(null);
      ```

   3. **Object literal syntax:**

      objektning so'zma-so'z sintaksisi (yoki objektni ishga tushiruvchisi) jingalak qavslarga o'ralgan nom-qiymat juftlarining vergul bilan ajratilgan to'plamidir.

      ```javascript
      var object = {
           name: "Sudheer"
           age: 34
      };

      objektning so'zma-so'z xossasi qiymatlari har qanday ma'lumot turiga, jumladan massiv, funksiya va ichki o'rnatilgan objekt bo'lishi mumkin.

      ```

      **Note:** Bu objektni yaratishning eng oson usuli

   4. **Function constructor:**

      Har qanday funktsiyani yarating va objekt misollarini yaratish uchun yangi operatorni qo'llang

      ```javascript
      function Person(name) {
        this.name = name;
        this.age = 21;
      }
      var object = new Person('Sudheer');
      ```

   5. **Function constructor with prototype:**

      Bu funktsiya konstruktoriga o'xshaydi, lekin u xususiyatlari va usullari uchun prototipdan foydalanadi,

      ```javascript
      function Person() {}
      Person.prototype.name = 'Sudheer';
      var object = new Person();
      ```

      Bu funksiya prototipi bilan objekt yaratish usuli bilan yaratilgan misolga teng va keyin ushbu funktsiyani misol va parametrlar bilan argument sifatida chaqirish.

      ```javascript
      function func {};

      new func(x, y, z);
      ```

      **(OR)**

      ```javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ```

   6. **ES6 Class syntax:**

      ES6 objektlarni yaratish uchun sinf xususiyatini taqdim etadi

      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }

      var object = new Person('Sudheer');
      ```

   7. **Singleton pattern:**

      Singleton - bu faqat bir marta yaratilishi mumkin bo'lgan objekt. Uning konstruktoriga takroriy qo'ng'iroqlar bir xil misolni qaytaradi va shu bilan ular tasodifan bir nechta misollarni yaratmasligiga ishonch hosil qilish mumkin.

      ```javascript
      var object = new (function () {
        this.name = 'Sudheer';
      })();
      ```

      **[⬆ Back to Top](#table-of-contents)**

2. ### Prototip zanjiri nima

   **Prototype chaining** mavjud objektlar asosida yangi turdagi objektlarni qurish uchun ishlatiladi. Bu sinfga asoslangan tilda merosga o'xshaydi.

Objekt namunasidagi prototip **Object.getPrototypeOf(object)** yoki \***\*proto\*\*** xususiyati orqali, konstruktorlar funksiyasidagi prototip esa **Object.prototype**. orqali mavjud .

![Screenshot](images/prototype_chain.png)

**[⬆ Back to Top](#table-of-contents)**

3. ### Call, Apply and Bind o'rtasidagi farq nima

   Call, Apply and Bind farqlarini quyidagi misollar bilan tushuntirish mumkin,,

   **Call:** `this` call() usuli berilgan qiymat va birma-bir taqdim etilgan argumentlarga ega funktsiyani chaqiradi

   ```javascript
   var employee1 = { firstName: 'John', lastName: 'Rodson' };
   var employee2 = { firstName: 'Jimmy', lastName: 'Baily' };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
     );
   }

   invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
   invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
   ```

   **Apply:** Berilgan qiymatga ega funktsiyani chaqiradi `this` va argumentlarni massiv sifatida o'tkazishga imkon beradi.

   ```javascript
   var employee1 = { firstName: 'John', lastName: 'Rodson' };
   var employee2 = { firstName: 'Jimmy', lastName: 'Baily' };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
     );
   }

   invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
   invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?
   ```

   **bind:** har qanday miqdordagi argumentlarni o'tkazish imkonini beruvchi yangi funktsiyani qaytaradi

   ```javascript
   var employee1 = { firstName: 'John', lastName: 'Rodson' };
   var employee2 = { firstName: 'Jimmy', lastName: 'Baily' };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
     );
   }

   var inviteEmployee1 = invite.bind(employee1);
   var inviteEmployee2 = invite.bind(employee2);
   inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
   inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
   ```

   Call va apply bir birini orginga ishlatilishi mumkin bolgan metodlar . Ikkalasi ham joriy funktsiyani darhol bajaradi. Argumentlarni massiv yoki vergul bilan ajratilgan roʻyxatida yuborish osonroqmi, qaror qabul qilishingiz kerak. You can remember by treating Call **comma** (ajratilgan list) uchun Apply esa **Array** uchun.

`this` Bind esa bind() ga o'tkazilgan birinchi parametrga o'rnatiladigan yangi funktsiyani yaratadi .

**[⬆ Back to Top](#table-of-contents)**

4. ### JSON nima va uning umumiy operatsiyalari

   **JSON** bu JavaScript ob'yekt sintaksisiga asoslangan matnga asoslangan ma'lumotlar formati bo'lib, u tomonidan ommalashgan `Douglas Crockford`. Bu tarmoq boʻylab maʼlumotlarni uzatmoqchi boʻlganingizda foydali boʻladi va u asosan .json kengaytmali matn fayli va MIME turi ilova/json boʻlsa.

   **Parsing:** satrni mahalliy objektga aylantirish

   ```javascript
   JSON.parse(text);
   ```

   **Stringification:** mahalliy objektni tarmoq bo'ylab uzatilishi uchun stringa aylantirish

   ```javascript
   JSON.stringify(object);
   ```

   **[⬆ Back to Top](#table-of-contents)**

5. ### Array slice usulidan maqsad nima

   slice() usuli massivdagi tanlangan elementlarni yangi massiv obyekti sifatida qaytaradi . U berilgan boshlang'ich argumentdan boshlanadigan elementlarni tanlaydi va oxirgi elementni qo'shmasdan berilgan ixtiyoriy yakuniy argumentda tugaydi. Agar siz ikkinchi argumentni o'tkazib yuborsangiz, u oxirigacha tanlaydi.

Ushbu usulning ba'zi misollari:

```javascript
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```

**Note:** Eslatma: Slice usuli asl massivni o'zgartirmaydi, lekin u kichik to'plamni yangi massiv sifatida qaytaradi.

**[⬆ Back to Top](#table-of-contents)**

6. ### Massivni birlashtirish(splice) usulining maqsadi nima

   Splice () usuli qatorga elementlarni qo'shish/o'chirish uchun ishlatiladi va keyin olib tashlangan elementni qaytaradi. Birinchi argument qo'shish yoki o'chirish uchun massiv o'rnini belgilaydi, ixtiyoriy ikkinchi argument esa o'chirilishi kerak bo'lgan elementlar sonini ko'rsatadi. Har bir qo'shimcha argument massivga qo'shiladi.

Ushbu usulning ba'zi misollari:

```javascript
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, 'a', 'b', 'c'); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
```

**Note:** Splice usuli asl massivni o'zgartiradi va o'chirilgan massivni qaytaradi.

**[⬆ Back to Top](#table-of-contents)**

7. ### What is the difference between slice and splice

Slice va splice o'rtasidagi farq nima

| Slice                                              | Splice                                                                       |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| Asl massivni o'zgartirmaydi (o'zgarmas)            | Asl massivni o'zgartiradi (o'zgaruvchan)                                     |
| Asl massivning pastki to'plamini qaytaradi         | O'chirilgan elementlarni massiv sifatida qaytaradi                           |
| Massivdan elementlarni tanlash uchun foydalaniladi | Massivga/massivdan elementlarni kiritish yoki oʻchirish uchun foydalaniladi+ |

**[⬆ Back to Top](#table-of-contents)**

8. ### Objekt va mapni qanday solishtirasiz

   objektlar Maplarga o'xshaydi , chunki ikkalasi ham kalitlarni qiymatlarga o'rnatish, ushbu qiymatlarni olish, kalitlarni o'chirish va kalitda biror narsa saqlanganligini aniqlash imkonini beradi. Shu sababli, objektlar tarixan Maplar sifatida ishlatilgan. Lekin muhim farqlar borki, ular ma'lum holatlarda Mapdan foydalanishni afzal ko'radi.

   1. objektning kalitlari qatorlar va belgilar bo'lib, ular Map uchun har qanday qiymat, jumladan funktsiyalar, objektlar va har qanday ibtidoiy bo'lishi mumkin.
   2. Mapdagi kalitlar tartiblangan, objektga qo'shilgan kalitlar esa yo'q. Shunday qilib, uni takrorlashda Map objekti kalitlarni kiritish tartibida qaytaradi.
   3. Siz Map hajmini siz o'lcham xususiyati bilan osongina olishingiz mumkin, shu bilan birga objektdagi xususiyatlar soni qo'lda aniqlanishi kerak.
   4. Map takrorlanadigan va shuning uchun to'g'ridan-to'g'ri takrorlanishi mumkin, holbuki objektni takrorlash uchun uning kalitlarini qandaydir tarzda olish va ularni takrorlash kerak.
   5. objektning prototipi bor, shuning uchun Mapda ehtiyot bo'lmasangiz, kalitlaringiz bilan to'qnashishi mumkin bo'lgan standart kalitlar mavjud. ES5 dan boshlab map = Object.create(null) yordamida buni chetlab o'tish mumkin, lekin bu kamdan-kam hollarda amalga oshiriladi.
   6. Map kalit juftlarini tez-tez qo'shish va olib tashlashni o'z ichiga olgan stsenariylarda yaxshiroq ishlashi mumkin.

   **[⬆ Back to Top](#table-of-contents)**

9. ### == va === operatorlarining farqi nimada

   JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

   1. Ikki satr bir xil belgilar ketma-ketligi, bir xil uzunlik va tegishli pozitsiyalarda bir xil belgilarga ega bo'lsa, qat'iy tengdir.
   2. Ikki raqam son jihatdan teng bo'lsa, ular qat'iy tengdir. ya'ni, bir xil raqam qiymatiga ega.
      Bunda ikkita alohida holat mavjud,
      1. NaN hech narsaga teng emas, shu jumladan NaN.
      2. Ijobiy va manfiy nollar bir-biriga teng.
   3. Ikki mantiqiy operand, agar ikkalasi ham to'g'ri yoki ikkalasi ham yolg'on bo'lsa, qat'iy teng bo'ladi.
   4. Ikki objekt bir xil objektga tegishli bo'lsa, ular mutlaqo tengdir.
   5. Null va Undefined turlari === ga teng emas, lekin == ga teng. ya'ni, null===aniqlanmagan --> noto'g'ri, lekin null==aniqlanmagan --> rost

   Yuqoridagi holatlarni qamrab oluvchi ba'zi misollar,

   ```javascript
   0 == false   // true
   0 === false  // false
   1 == "1"     // true
   1 === "1"    // false
   null == undefined // true
   null === undefined // false
   '0' == false // true
   '0' === false // false
   []==[] or []===[] //false, refer different objects in memory
   {}=={} or {}==={} //false, refer different objects in memory
   ```

   **[⬆ Back to Top](#table-of-contents)**

10. ### Lambda yoki Arrow funktsiyalari nima

Arrow funksiyasi funksiya ifodasi uchun qisqaroq sintaksis bo‘lib, o‘ziga xos this, arguments, super yoki new.target ga ega emas . Bu funksiyalar usul bo'lmagan funksiyalar uchun eng mos keladi va ularni konstruktor sifatida ishlatib bo'lmaydi.

    **[⬆ Back to Top](#table-of-contents)**

11. ### Birinchi sinf funktsiyasi(first class) nima

    Javascriptda funksiyalar birinchi darajali objektlardir. Birinchi darajali funktsiyalar bu tildagi funktsiyalar boshqa o'zgaruvchilar kabi ko'rib chiqilishini anglatadi.

    Masalan, bunday tilda funksiya boshqa funksiyalarga argument sifatida uzatilishi, boshqa funksiya tomonidan qaytarilishi va o‘zgaruvchiga qiymat sifatida berilishi mumkin. Misol uchun, quyidagi misolda tinglovchiga tayinlangan ishlov beruvchi funktsiyalari

    ```javascript
    const handler = () => console.log('This is a click handler function');
    document.addEventListener('click', handler);
    ```

    **[⬆ Back to Top](#table-of-contents)**

12. ### Birinchi tartibli(first ordered) funksiya nima

    Birinchi darajali funktsiya boshqa funktsiyani argument sifatida qabul qilmaydigan va funktsiyani qaytarish qiymati sifatida qaytarmaydigan funktsiyadir.

    ```javascript
    const firstOrder = () => console.log('I am a first order function!');
    ```

    **[⬆ Back to Top](#table-of-contents)**

13. ### Yuqori tartibli (higher order) funktsiya nima

    Yuqori tartibli funktsiya boshqa funktsiyani argument sifatida qabul qiladigan yoki funktsiyani qaytarish qiymati yoki ikkalasini qaytaradigan funktsiyadir.

    ```javascript
    const firstOrderFunc = () =>
      console.log('Hello, I am a First order function');
    const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
    higherOrder(firstOrderFunc);
    ```

    **[⬆ Back to Top](#table-of-contents)**

14. ### Unar funksiya nima

Unar funktsiya (ya'ni monad) - aynan bitta argumentni qabul qiladigan funksiya. Bu funktsiya tomonidan qabul qilingan bitta argumentni anglatadi.

    Let us take an example of unary function,

    ```javascript
    const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value
    ```

    **[⬆ Back to Top](#table-of-contents)**

15. ### Currying funksiyasi nima

Currying - bu bir nechta argumentli funktsiyani olish va uni har birida faqat bitta argumentga ega bo'lgan funktsiyalar ketma-ketligiga aylantirish jarayoni. Currying matematik Xaskell Karri sharafiga nomlangan . Korriingni qo'llash orqali n-ary funksiya uni birlik funktsiyaga aylantiradi.

    Keling, n-ary funksiyasini va uning qanday qilib karriy funksiyaga aylanishini misol qilib olaylik.

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1, 2, 3)); // 6

    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction(1)(2); // returns a function: c => 3 + c
    curryUnaryFunction(1)(2)(3); // returns the number 6
    ```

Curried funktsiyalari kodning qayta ishlatilishini va funktsional tarkibini yaxshilash uchun ajoyib .

    **[⬆ Back to Top](#table-of-contents)**

16. ### Pure(sof) funktsiya nima

Sof funktsiya - bu qaytariladigan qiymat faqat uning argumentlari bilan hech qanday nojo'ya ta'sirlarsiz aniqlanadigan funktsiyadir. ya'ni, agar siz bir xil argumentlarga ega funktsiyani "n" soni va ilovadagi joylar soni "n" bilan chaqirsangiz, u har doim bir xil qiymatni qaytaradi

    Keling, sof va nopok funktsiyalar o'rtasidagi farqni ko'rish uchun misol keltiraylik,

    ```javascript
    //Impure
    let numberArray = [];
    const impureAddNumber = (number) => numberArray.push(number);
    //Pure
    const pureAddNumber = (number) => (argNumberArray) =>
      argNumberArray.concat([number]);

    //Display the results
    console.log(impureAddNumber(6)); // returns 1
    console.log(numberArray); // returns [6]
    console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
    console.log(numberArray); // returns [6]
    ```

Yuqoridagi kod parchalariga ko'ra, Push funktsiyasi massivni o'zgartirish va parametr qiymatidan mustaqil bo'lgan surish raqami indeksini qaytarish orqali o'zini nopok qiladi. Boshqa tomondan, Concat massivni oladi va uni boshqa massiv bilan birlashtiradi va nojo'ya ta'sirlarsiz butunlay yangi massiv hosil qiladi. Bundan tashqari, qaytarish qiymati oldingi massivning birlashmasi hisoblanadi.

    Esda tutingki, Pure funktsiyalari muhim ahamiyatga ega, chunki ular birlik sinovini hech qanday nojo'ya ta'sirlarsiz va qaramlik in'ektsiyasiga ehtiyoj sezmasdan soddalashtiradi. Ular, shuningdek, qattiq bog'lanishdan qochishadi va hech qanday nojo'ya ta'sirlarga ega bo'lmasdan, ilovangizni buzishni qiyinlashtiradi. Ushbu tamoyillar ES6 ning o'zgarmaslik kontseptsiyasi bilan birlashtirilib, ruxsat berishdan ko'ra const ga ustunlik beradi .

    **[⬆ Back to Top](#table-of-contents)**

17. ### Let kalit so'zining maqsadi nima

Bayonot blok doirasi mahalliy o'zgaruvchinilet e'lon qiladi . Shunday qilib, let kalit so'zi bilan aniqlangan o'zgaruvchilar u ishlatiladigan blok, bayonot yoki ifoda bilan cheklangan. Holbuki, kalit so'z bilan e'lon qilingan o'zgaruvchilar o'zgaruvchini global miqyosda yoki lokal ravishda blok doirasidan qat'i nazar, butun funktsiyani aniqlash uchun ishlatiladi.var

Foydalanishni ko'rsatish uchun misol keltiraylik,

    ```javascript
    let counter = 30;
    if (counter === 30) {
      let counter = 31;
      console.log(counter); // 31
    }
    console.log(counter); // 30 (because the variable in if block won't exist here)
    ```

    **[⬆ Back to Top](#table-of-contents)**

18. ### Let va var o'rtasidagi farq nima

    Siz farqlarni jadval shaklida ko'rsatishingiz mumkin

    | var                               | let                                        |
    | --------------------------------- | ------------------------------------------ |
    | U JavaScript boshidan beri mavjud | ES6 ning bir qismi sifatida taqdim etilgan |
    | Funktsiya doirasiga ega           | U blok doirasiga ega                       |
    | O'zgaruvchilar ko'tariladi        | Ko'tarilgan, lekin ishga tushirilmagan     |

    Farqni ko'rish uchun misol keltiramiz,

    ```javascript
    function userDetails(username) {
      if (username) {
        console.log(salary); // undefined due to hoisting
        console.log(age); // ReferenceError: Cannot access 'age' before initialization
        let age = 30;
        var salary = 10000;
      }
      console.log(salary); //10000 (accessible to due function scope)
      console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails('John');
    ```

    **[⬆ Back to Top](#table-of-contents)**

19. ### Kalit so'z sifatida let nomini tanlashning sababi nimada?

    letScheme va Basic kabi dastlabki dasturlash tillari tomonidan qabul qilingan matematik bayonotdir . U imkon qadar letyaqin an'anaviy kalit so'z sifatida ishlatadigan o'nlab boshqa tillardan olingan .var

    **[⬆ Back to Top](#table-of-contents)**

20. ### Qanday qilib o'zgaruvchilarni switch blokida xatosiz qayta e'lon qilasiz

    Agar siz a dagi o'zgaruvchilarni qayta e'lon qilishga harakat qilsangiz, switch blocku xatolarga olib keladi, chunki faqat bitta blok mavjud. Misol uchun, quyidagi kod bloki quyidagi kabi sintaksis xatosini keltirib chiqaradi,

    ```javascript
    let counter = 1;
    switch (x) {
      case 0:
        let name;
        break;

      case 1:
        let name; // SyntaxError for redeclaration.
        break;
    }
    ```

    Ushbu xatolikka yo'l qo'ymaslik uchun siz case bandi ichida ichki blok yaratishingiz va yangi blokli leksik muhitni yaratishingiz mumkin.

    ```javascript
    let counter = 1;
    switch (x) {
      case 0: {
        let name;
        break;
      }
      case 1: {
        let name; // No SyntaxError for redeclaration.
        break;
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

21. ### Temporal Dead Zone (Vaqtinchalik o'lik zona) nima

    Vaqtinchalik o'lik zona - bu JavaScriptda o'zgaruvchini let va const kalit so'zlari bilan e'lon qilishda yuzaga keladigan xatti-harakatlar, lekin var bilan emas. ECMAScript 6 da letyoki consto'zgaruvchiga uning e'lon qilinishidan oldin (uning doirasi doirasida) kirish ReferenceErrorga olib keladi. Bu sodir bo'ladigan vaqt oralig'i, o'zgaruvchining bog'lanishi yaratilishi va uning e'lon qilinishi o'rtasidagi vaqt oralig'i vaqtinchalik o'lik zona deb ataladi.

    Keling, bu xatti-harakatni misol bilan ko'rib chiqaylik,

    ```javascript
    function somemethod() {
      console.log(counter1); // undefined
      console.log(counter2); // ReferenceError
      var counter1 = 1;
      let counter2 = 2;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

22. ### IIFE (darhol chaqiriladigan funksiya ifodasi) nima?

    IIFE (Immediately Invoked Function Expression) bu JavaScript funksiyasi boʻlib, u aniqlangan zahoti ishga tushadi. Uning imzosi quyidagicha bo'ladi,

    ```javascript
    (function () {
      // logic here
    })();
    ```

    IIFE-dan foydalanishning asosiy sababi ma'lumotlar maxfiyligini olishdir, chunki IIFE ichida e'lon qilingan har qanday o'zgaruvchilarga tashqi dunyo kirishi mumkin emas. ya'ni, agar siz IIFE bilan o'zgaruvchilarga kirishga harakat qilsangiz, u quyidagi kabi xatoga yo'l qo'yadi,

    ```javascript
    (function () {
      var message = 'IIFE';
      console.log(message);
    })();
    console.log(message); //Error: message is not defined
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### JavaScriptda URL-manzilni qanday dekodlash yoki enkodlash mumkin?

    encodeURI()funksiyasi URL manzilini kodlash uchun ishlatiladi. Bu funksiya parametr sifatida URL satrini talab qiladi va kodlangan qatorni qaytaradi. decodeURI()funksiya URL manzilini ochish uchun ishlatiladi. Bu funksiya parametr sifatida kodlangan URL satrini talab qiladi va bu dekodlangan qatorni qaytaradi.

    **Note:** encodeURI()funksiyasi URL manzilini kodlash uchun ishlatiladi. Bu funksiya parametr sifatida URL satrini talab qiladi va kodlangan qatorni qaytaradi. decodeURI()funksiya URL manzilini ochish uchun ishlatiladi. Bu funksiya parametr sifatida kodlangan URL satrini talab qiladi va bu dekodlangan qatorni qaytaradi.

    ```javascript
    let uri = 'employeeDetails?name=john&occupation=manager';
    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);
    ```

    **[⬆ Back to Top](#table-of-contents)**

24. ### Memoization nima

    Memoizatsiya - bu avvaldan hisoblangan natijalarni keshlash orqali funktsiyaning ishlashini oshirishga harakat qiladigan dasturlash usuli. Har safar xotirada saqlangan funksiya chaqirilganda, uning parametrlari keshni indekslash uchun ishlatiladi. Agar ma'lumotlar mavjud bo'lsa, uni butun funktsiyani bajarmasdan qaytarish mumkin. Aks holda funktsiya bajariladi va natija keshga qo'shiladi. Keling, xotira bilan funksiya qo'shishga misol keltiraylik,

    ```javascript
    const memoizAddition = () => {
      let cache = {};
      return (value) => {
        if (value in cache) {
          console.log('Fetching from cache');
          return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        } else {
          console.log('Calculating result');
          let result = value + 20;
          cache[value] = result;
          return result;
        }
      };
    };
    // returned function from memoizAddition
    const addition = memoizAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```

    **[⬆ Back to Top](#table-of-contents)**

25. ### Hoisting nima

    Yuk ko'tarish JavaScript mexanizmi bo'lib, unda kod bajarilishidan oldin o'zgaruvchilar va funksiya deklaratsiyasi o'z doirasining yuqori qismiga ko'chiriladi. Esda tutingki, JavaScript faqat deklaratsiyalarni ko'taradi, ishga tushirishni emas. Keling, o'zgaruvchan yuk ko'tarishning oddiy misolini olaylik,

    ```javascript
    console.log(message); //output : undefined
    var message = 'The variable Has been hoisted';
    ```

    Yuqoridagi kod tarjimon uchun quyidagi kabi ko'rinadi,

    ```javascript
    var message;
    console.log(message);
    message = 'The variable Has been hoisted';
    ```

    **[⬆ Back to Top](#table-of-contents)**

26. ### ES6 da qanday class(siniflar) mavjud

    ES6 da Javascript sinflari JavaScript-ning mavjud prototipiga asoslangan merosiga nisbatan asosan sintaktik shakar hisoblanadi. Masalan, prototipga asoslangan meros quyidagi funksiya ifodasida yozilgan,

    ```javascript
    function Bike(model, color) {
      this.model = model;
      this.color = color;
    }

    Bike.prototype.getDetails = function () {
      return this.model + ' bike has' + this.color + ' color';
    };
    ```

    ES6 sinflari esa muqobil sifatida belgilanishi mumkin

    ```javascript
    class Bike {
      constructor(color, model) {
        this.color = color;
        this.model = model;
      }

      getDetails() {
        return this.model + ' bike has' + this.color + ' color';
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

27. ### Closures nima

    Closure bu - funktsiya va ushbu funktsiya e'lon qilingan leksik muhitning kombinatsiyasi. ya'ni, bu tashqi yoki qo'shuvchi funksiya o'zgaruvchilariga kirish huquqiga ega bo'lgan ichki funktsiyadir. Yopish uchta ko'lamli zanjirga ega

    1. O'zgaruvchilar uning jingalak qavslar orasida aniqlangan o'z doirasi
    2. Tashqi funktsiya o'zgaruvchilari
    3. Global o'zgaruvchilar

    Keling, yopish kontseptsiyasiga misol keltiraylik,

    ```javascript
    function Welcome(name) {
      var greetingInfo = function (message) {
        console.log(message + ' ' + name);
      };
      return greetingInfo;
    }
    var myFunction = Welcome('John');
    myFunction('Welcome '); //Output: Welcome John
    myFunction('Hello Mr.'); //output: Hello Mr.John
    ```

    Yuqoridagi kodga ko'ra, ichki funksiya (ya'ni, greetingInfo) tashqi funksiya qaytganidan keyin ham tashqi funksiya doirasidagi (ya'ni Welcome) o'zgaruvchilarga kirish huquqiga ega.

    **[⬆ Back to Top](#table-of-contents)**

28. ### Modullar nima

    Modullar mustaqil, qayta foydalanish mumkin bo'lgan kodning kichik birliklariga ishora qiladi va ko'plab JavaScript dizayn naqshlarining asosi bo'lib xizmat qiladi. Ko'pgina JavaScript modullari objektni, funktsiyani yoki konstruktorni eksport qiladi

    **[⬆ Back to Top](#table-of-contents)**

29. ### Nima uchun sizga modullar kerak

    Quyida JavaScript ekotizimidagi modullardan foydalanishning afzalliklari ro'yxati keltirilgan

    1. Saqlash imkoniyati
    2. Qayta foydalanish imkoniyati
    3. Namespacing

    **[⬆ Back to Top](#table-of-contents)**

30. ### Javascriptda qamrov(scope) nima

Amal qilish doirasi - bu ish vaqtida kodingizning ma'lum bir qismidagi o'zgaruvchilar, funktsiyalar va objektlarga kirish imkoniyati. Boshqacha qilib aytganda, qamrov sizning kodingiz sohalarida o'zgaruvchilar va boshqa resurslarning ko'rinishini aniqlaydi.

    **[⬆ Back to Top](#table-of-contents)**

31. ### Service worker(Xizmat xodimi) nima

    Xizmat xodimi asosan fonda ishlaydigan, veb-sahifadan ajratilgan va veb-sahifa yoki foydalanuvchi o'zaro ta'sirini talab qilmaydigan xususiyatlarni taqdim etadigan skript (JavaScript fayli). Xizmat xodimlarining asosiy xususiyatlaridan ba'zilari - bu boy oflayn tajribalar (oflayn birinchi veb-ilovalarni ishlab chiqish), davriy fon sinxronlash, push-bildirishnomalar, tarmoq so'rovlarini ushlab turish va boshqarish va javoblar keshini dasturiy ravishda boshqarish.

    **[⬆ Back to Top](#table-of-contents)**

32. ### Server worker yordamida DOMni qanday boshqarish mumkin

    Xizmat xodimi DOMga to'g'ridan-to'g'ri kira olmaydi. Ammo u interfeys orqali yuborilgan xabarlarga javob berish orqali o'zi boshqaradigan sahifalar bilan postMessagebog'lanishi mumkin va bu sahifalar DOMni boshqarishi mumkin.

    **[⬆ Back to Top](#table-of-contents)**

33. ### Server worker qayta ishga tushirishda ma'lumotlardan qanday

    onfetchXizmat ishchisi bilan bog'liq muammo shundaki, u foydalanilmayotganda tugatiladi va keyingi kerak bo'lganda qayta ishga tushadi, shuning uchun siz xizmat ko'rsatuvchi ishchi va onmessageishlovchilar ichidagi global holatga tayanolmaysiz . Bunday holda, xizmat ko'rsatuvchi ishchilar qayta ishga tushirishda davom etish va qayta foydalanish uchun IndexedDB API ga kirish huquqiga ega bo'ladi.

    **[⬆ Back to Top](#table-of-contents)**

34. ### IndexedDB nima

    IndexedDB - bu katta hajmdagi tuzilgan ma'lumotlarni, shu jumladan fayllar/bloblarni mijoz tomonidan saqlash uchun past darajadagi API. Ushbu API ushbu ma'lumotlarning yuqori samarali qidiruvlarini yoqish uchun indekslardan foydalanadi.

    **[⬆ Back to Top](#table-of-contents)**

35. ### Veb-xotira(web storage) nima

Veb-xotira - bu brauzerlar kalit/qiymat juftlarini foydalanuvchi brauzerida mahalliy sifatida cookie-fayllardan foydalanishdan ko'ra ancha intuitiv tarzda saqlashi mumkin bo'lgan mexanizmni ta'minlovchi API. Veb-xotira mijozga ma'lumotlarni saqlash uchun ikkita mexanizmni taqdim etadi.

    1. **Local storage:** U amaldagi ma'lumotlarni amal qilish muddatisiz saqlaydi.
    2. **Session storage:** U bir seans uchun ma'lumotlarni saqlaydi va brauzer yorlig'i yopilganda ma'lumotlar yo'qoladi.

    **[⬆ Back to Top](#table-of-contents)**

36. ### Post xabari(post message) nima

    Xabarni yuborish - bu Oyna objektlari (ya'ni, sahifa va u ochilgan qalqib chiquvchi oyna o'rtasida yoki sahifa va uning ichiga o'rnatilgan iframe o'rtasida) o'zaro bog'lanishni ta'minlaydigan usul. Odatda, turli sahifalardagi skriptlarga bir-biriga kirishga ruxsat beriladi, agar sahifalar bir xil manba siyosatiga (yaʼni, sahifalar bir xil protokol, port raqami va xostga ega boʻlsa) amal qilgan taqdirdagina.

    **[⬆ Back to Top](#table-of-contents)**

37. ### Cookie nima

    Cookie - bu brauzeringiz kirishi uchun kompyuteringizda saqlanadigan ma'lumotlarning bir qismi. Cookie-fayllar kalit/qiymat juftligi sifatida saqlanadi. Masalan, foydalanuvchi nomi bilan quyidagi cookie faylini yaratishingiz mumkin:

    ```javascript
    document.cookie = 'username=John';
    ```

    ![Screenshot](images/cookie.png)

    **[⬆ Back to Top](#table-of-contents)**

38. ### Cookie nima uchun kerak

Cookie-fayllar foydalanuvchi profili (masalan, foydalanuvchi nomi) haqidagi ma'lumotlarni eslab qolish uchun ishlatiladi. Bu asosan ikki bosqichni o'z ichiga oladi,

    1. Foydalanuvchi veb-sahifaga tashrif buyurganida, foydalanuvchi profili cookie faylida saqlanishi mumkin.
    2. Keyingi safar foydalanuvchi sahifaga tashrif buyurganida, cookie foydalanuvchi profilini eslab qoladi.

    **[⬆ Back to Top](#table-of-contents)**

39. ### Cookie-da qanday variantlar mavjud

    TCookie uchun quyida bir nechta variant mavjud,

    1. Sukut bo'yicha, brauzer yopilganda cookie o'chiriladi, ammo amal qilish muddatini belgilash orqali bu xatti-harakatni o'zgartirishingiz mumkin (UTC vaqti bilan).

    ```javascript
    document.cookie = 'username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC';
    ```

    2. Odatiy bo'lib, cookie joriy sahifaga tegishli. Lekin siz brauzerga cookie fayli qaysi yoʻlga tegishli ekanligini yoʻl parametri yordamida ayta olasiz.

    ```javascript
    document.cookie = 'username=John; path=/services';
    ```

    **[⬆ Back to Top](#table-of-contents)**

40. ### Cookie faylini qanday o'chirish mumkin

    Yaroqlilik muddatini o‘tgan sana sifatida belgilash orqali cookie faylini o‘chirishingiz mumkin. Bu holda cookie qiymatini belgilashingiz shart emas. Masalan, joriy sahifadagi foydalanuvchi nomi cookie-faylini quyidagi tarzda o'chirishingiz mumkin.

    ```javascript
    document.cookie =
      'username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;';
    ```

    **Note:** To'g'ri cookie-faylni o'chirib tashlashingizga ishonch hosil qilish uchun cookie-fayl yo'li opsiyasini belgilashingiz kerak. Ba'zi brauzerlar, agar siz yo'l parametrini ko'rsatmasangiz, cookie-fayllarni o'chirishga ruxsat bermaydi.

    **[⬆ Back to Top](#table-of-contents)**

41. ### Cookie, mahalliy saqlash va seans saqlash o'rtasidagi farqlar qanday

    Quyida cookie, mahalliy saqlash va seans xotirasi oʻrtasidagi farqlar keltirilgan.

    | Feature                                   | Cookie                                           | Local storage          | Session storage        |
    | ----------------------------------------- | ------------------------------------------------ | ---------------------- | ---------------------- |
    | Mijoz yoki server tomonidan kirish mumkin | Ham server tomoni, ham mijoz tomoni              | faqat mijoz tomoni     | faqat mijoz tomoni     |
    | Lifetime                                  | Muddati tugaydi opsiyasi yordamida sozlanganidek | o'chirilgunga qadar    | yorliq yopilguncha     |
    | SSL qo'llab-quvvatlaydi                   | Qo'llab-quvvatlanadi                             | Qo'llab-quvvatlanmaydi | Qo'llab-quvvatlanmaydi |
    | Maksimal ma'lumotlar hajmi                | 4KB                                              | 5 MB                   | 5MB                    |

    **[⬆ Back to Top](#table-of-contents)**

42. ### [[ localStorage va sessionStorage o'rtasidagi asosiy farq nima

    LocalStorage SessionStorage bilan bir xil, lekin u brauzer yopilgan va qayta ochilganda ham maʼlumotlarni saqlab qoladi (yaʼni uning amal qilish muddati yoʻq), seansStorageʼda esa sahifa seansi tugashi bilan maʼlumotlar tozalanadi.

    **[⬆ Back to Top](#table-of-contents)**

43. ### Veb-xotiraga(web storage) qanday kirish mumkin

    Window obyekti mos ravishda (window.localStorage) va (window.sessionStorage) xossalariga ega bo'lgan WindowLocalStorageva WindowSessionStorageobjektlarini amalga oshiradi. Ushbu xususiyatlar Saqlash objektining namunasini yaratadi, bu orqali ma'lum domen va saqlash turi (sessiya yoki mahalliy) uchun ma'lumotlar elementlarini o'rnatish, olish va o'chirish mumkin. Masalan, siz mahalliy saqlash objektlarida quyida ko'rsatilganidek o'qishingiz va yozishingiz mumkinlocalStoragesessionStorage

    ```javascript
    localStorage.setItem('logo', document.getElementById('logo').value);
    localStorage.getItem('logo');
    ```

    **[⬆ Back to Top](#table-of-contents)**

44. ### Session storageda qanday usullar mavjud

    Window obyekti mos ravishda (window.localStorage) va (window.sessionStorage) xossalariga ega bo'lgan WindowLocalStorageva WindowSessionStorageobjektlarini amalga oshiradi. Ushbu xususiyatlar Saqlash objektining namunasini yaratadi, bu orqali ma'lum domen va saqlash turi (sessiya yoki mahalliy) uchun ma'lumotlar elementlarini o'rnatish, olish va o'chirish mumkin. Masalan, siz mahalliy saqlash objektlarida quyida ko'rsatilganidek o'qishingiz va yozishingiz mumkinlocalStoragesessionStorage

    ```javascript
    // Save data to sessionStorage
    sessionStorage.setItem('key', 'value');

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem('key');

    // Remove saved data from sessionStorage
    sessionStorage.removeItem('key');

    // Remove all saved data from sessionStorage
    sessionStorage.clear();
    ```

    **[⬆ Back to Top](#table-of-contents)**

45. ### Saqlash hodisasi nima va uning voqea ishlovchisi (storage event and

    StorageEvent - bu boshqa hujjat kontekstida saqlash joyi o'zgartirilganda paydo bo'ladigan hodisa. Holbuki, saqlash xususiyati saqlash hodisalarini qayta ishlash uchun EventHandler hisoblanadi. Sintaksis quyidagi kabi bo'ladi

    ```javascript
    window.onstorage = functionRef;
    ```

    Keling, saqlash kaliti va uning qiymatlarini qayd qiluvchi xotira hodisasi ishlovchisidan foydalanish misolini olaylik

    ```javascript
    window.onstorage = function (e) {
      console.log(
        'The ' +
          e.key +
          ' key has been changed from ' +
          e.oldValue +
          ' to ' +
          e.newValue +
          '.'
      );
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

46. ### Nima uchun sizga veb-xotira kerak

    Veb-saqlash yanada xavfsizroq va katta hajmdagi ma'lumotlar veb-sayt ishlashiga ta'sir qilmasdan mahalliy sifatida saqlanishi mumkin. Bundan tashqari, ma'lumotlar hech qachon serverga o'tkazilmaydi. Shuning uchun bu Cookie-fayllarga qaraganda ko'proq tavsiya etilgan yondashuv.

    **[⬆ Back to Top](#table-of-contents)**

47. ### Veb-xotira brauzerining yordamini qanday tekshirish mumkin

Veb-xotiradan foydalanishdan oldin brauzerning localStorage va sessionStorage uchun qo'llab-quvvatlanishini tekshirishingiz kerak,

    ```javascript
    if (typeof Storage !== 'undefined') {
      // Code for localStorage/sessionStorage.
    } else {
      // Sorry! No Web Storage support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

48. ### Veb-workersning brauzer qo'llab-quvvatlashini qanday tekshirish

    Uni ishlatishdan oldin veb-xodimlar uchun brauzer yordamini tekshirishingiz kerak

    ```javascript
    if (typeof Worker !== 'undefined') {
      // code for Web worker support.
    } else {
      // Sorry! No Web Worker support..
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

49. ### Veb-workerga misol keltiring

    Hisoblash misolida veb ishchilaridan foydalanishni boshlash uchun quyidagi bosqichlarni bajarishingiz kerak

    1. Veb ishchi faylini yarating: Hisoblash qiymatini oshirish uchun skript yozishingiz kerak. Keling, uni counter.js deb nomlaymiz

    ```javascript
    let i = 0;

    function timedCount() {
      i = i + 1;
      postMessage(i);
      setTimeout('timedCount()', 500);
    }

    timedCount();
    ```

    Bu yerda postMessage() usuli xabarni HTML sahifasiga qaytarish uchun ishlatiladi

    1. Veb ishchi objektini yaratish: Brauzer qo'llab-quvvatlashini tekshirish orqali veb-ishchi objektini yaratishingiz mumkin. Keling, bu faylni web_worker_example.js deb nomlaymiz

    ```javascript
    if (typeof w == 'undefined') {
      w = new Worker('counter.js');
    }
    ```

    va biz veb-ishchidan xabarlar olishimiz mumkin

    ```javascript
    w.onmessage = function (event) {
      document.getElementById('message').innerHTML = event.data;
    };
    ```

    1. Veb ishchini tugatish: Veb ishchilari xabarlarni tinglashda davom etadilar (hatto tashqi skript tugagandan keyin ham) u tugatilmaguncha. Siz xabarlarni tinglashni tugatish uchun terminate() usulidan foydalanishingiz mumkin.

    ```javascript
    w.terminate();
    ```

    1. Veb ishchisini qayta ishlatish: Agar ishchi o'zgaruvchini aniqlanmagan qilib qo'ysangiz, kodni qayta ishlatishingiz mumkin

    ```javascript
    w = undefined;
    ```

    **[⬆ Back to Top](#table-of-contents)**

50. ### Web-ishchilarning DOM-da qanday cheklovlari bor

WebWorkers quyida joylashgan JavaScript obyektlariga kirish huquqiga ega emas, chunki ular tashqi fayllarda aniqlangan

    1. Window object
    2. Document object
    3. Parent object

    **[⬆ Back to Top](#table-of-contents)**

51. ### Promise(vada) nima

    Va'da - bu hal qilingan qiymat yoki hal qilinmagan sabab (masalan, tarmoq xatosi) bilan kelajakda bir muncha vaqt bitta qiymat ishlab chiqarishi mumkin bo'lgan objekt. U 3 ta mumkin bo'lgan holatdan birida bo'ladi: bajarilgan, rad etilgan yoki kutilayotgan.

Promise yaratish sintaksisi quyidagi kabi ko'rinadi:

    ```javascript
    const promise = new Promise(function (resolve, reject) {
      // promise description
    });
    ```

    Va'dadan foydalanish quyidagicha bo'ladi,

    ```javascript
    const promise = new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve("I'm a Promise!");
        }, 5000);
      },
      (reject) => {}
    );

    promise.then((value) => console.log(value));
    ```

    Va'daning harakat oqimi quyidagicha bo'ladi:

    ![Screenshot](images/promises.png)

    **[⬆ Back to Top](#table-of-contents)**

52. ### Nega sizga promise kerak

    Va'dalar asinxron operatsiyalarni bajarish uchun ishlatiladi. Ular callbacklar uchun muqobil yondashuvni taqdim etadilar, bu esa callbackni kamaytirish va toza kodni yozish orqali amalga oshiriladi.

    **[⬆ Back to Top](#table-of-contents)**

53. ### Promisening uchta holati nima

    Va'dalar uchta holatga ega:

    1. **Pending:** Bu operatsiya boshlanishidan oldingi va'daning dastlabki holati
    2. **Fulfilled:** Bu holat belgilangan operatsiya tugaganligini bildiradi.
    3. **Rejected:** Bu holat operatsiya tugallanmaganligini bildiradi. Bunday holda xato qiymati chiqariladi.

    **[⬆ Back to Top](#table-of-contents)**

54. ### Callback funktsiyasi nima

    Callback funktsiyasi boshqa funktsiyaga argument sifatida o'tkaziladigan funktsiyadir. Bu funksiya amalni bajarish uchun tashqi funksiya ichida chaqiriladi. Callback funksiyasidan qanday foydalanishni oddiy misol qilib olaylik

    ```javascript
    function callbackFunction(name) {
      console.log('Hello ' + name);
    }

    function outerFunction(callback) {
      let name = prompt('Please enter your name.');
      callback(name);
    }

    outerFunction(callbackFunction);
    ```

    **[⬆ Back to Top](#table-of-contents)**

55. ### Nega bizga Callbacklar kerak

    callbacklar kerak, chunki JavaScript voqealarga asoslangan tildir. Bu degani, javobni kutish o'rniga JavaScript boshqa hodisalarni tinglashda ishlashda davom etadi. API chaqiruvini chaqiruvchi birinchi funksiya (setTimeout tomonidan simulyatsiya qilingan) va xabarni qayd qiluvchi keyingi funksiyaga misol keltiraylik.

    ```javascript
    function firstFunction() {
      // Simulate a code delay
      setTimeout(function () {
        console.log('First function called');
      }, 1000);
    }
    function secondFunction() {
      console.log('Second function called');
    }
    firstFunction();
    secondFunction();

    Output;
    // Second function called
    // First function called
    ```

    Natijadan ko'rinib turibdiki, JavaScript birinchi funktsiyaning javobini kutmagan va qolgan kod bloki bajarilgan. Shunday qilib, callback ma'lum kod boshqa kod bajarilishini tugatmaguncha bajarilmasligiga ishonch hosil qilish uchun ishlatiladi.

    **[⬆ Back to Top](#table-of-contents)**

56. ### Callback hell nima

Chaqiruv jahannami asinxron mantiq bilan ishlashda kodni o‘qish va disk raskadrovka qilishni qiyinlashtiradigan bir nechta ichki qo‘ng‘iroqlarga ega anti-naqshdir. callback qilish jahannami quyida ko'rinadi,

    ```javascript
    async1(function(){
        async2(function(){
            async3(function(){
                async4(function(){
                    ....
                });
            });
        });
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

57. ### Server tomonidan yuborilgan voqealar(event) nima

Server tomonidan yuborilgan voqealar (SSE) - bu serverni surish texnologiyasi bo'lib, brauzer so'rovga murojaat qilmasdan HTTP ulanishi orqali serverdan avtomatik yangilanishlarni olish imkonini beradi. Bular bir tomonlama aloqa kanali - hodisalar faqat serverdan mijozga o'tadi. Bu Facebook/Twitter yangilanishlarida, aksiyalar narxlari yangilanishlarida, yangiliklar tasmalarida va hokazolarda ishlatilgan.

    **[⬆ Back to Top](#table-of-contents)**

58. ### Server tomonidan yuborilgan voqea bildirishnomalarini qanday qabul

    EventSource obyekti server tomonidan yuborilgan voqea bildirishnomalarini olish uchun ishlatiladi. Masalan, siz serverdan quyidagi tarzda xabarlar olishingiz mumkin:

    ```javascript
    if (typeof EventSource !== 'undefined') {
      var source = new EventSource('sse_generator.js');
      source.onmessage = function (event) {
        document.getElementById('output').innerHTML += event.data + '<br>';
      };
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

59. ### Server tomonidan yuborilgan voqealar uchun brauzer yordamini qanday

    Server tomonidan yuborilgan voqealar uchun brauzerni qo'llab-quvvatlashni quyidagi tarzda ishlatishdan oldin amalga oshirishingiz mumkin,

    ```javascript
    if (typeof EventSource !== 'undefined') {
      // Server-sent events supported. Let's have some code here!
    } else {
      // No server-sent events supported
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

60. ### Server yuborilgan voqealar uchun qanday hodisalar mavjud

    Quyida server tomonidan yuborilgan voqealar uchun mavjud voqealar roʻyxati keltirilgan
    | Event | Description |
    |---- | ---------
    | onopen | U serverga ulanish ochilganda ishlatiladi |
    | onmessage | Ushbu hodisa xabar qabul qilinganda ishlatiladi |
    | onerror | Xatolik yuzaga kelganda sodir bo'ladi |

    **[⬆ Back to Top](#table-of-contents)**

61. ### Promisening asosiy qoidalari qanday

Va'da muayyan qoidalar to'plamiga amal qilishi kerak,

    1. `.then()` Va'da - bu standartga mos keladigan usulni ta'minlovchi objekt
    2. Kutilayotgan va'da bajarilgan yoki rad etilgan holatga o'tishi mumkin
    3. Bajarilgan yoki rad etilgan va'da hal qilinadi va u boshqa hech qanday holatga o'tmasligi kerak.
    4. Va'da bajarilgandan so'ng, qiymat o'zgarmasligi kerak.

    **[⬆ Back to Top](#table-of-contents)**

62. ### Callback dagi callback nima

    Harakatlarni birma-bir bajarish uchun siz bitta callbackni boshqa callbackqa joylashtirishingiz mumkin. Bu callbacklarda callbacklar sifatida tanilgan.

    ```javascript
    loadScript('/script1.js', function (script) {
      console.log('first script is loaded');

      loadScript('/script2.js', function (script) {
        console.log('second script is loaded');

        loadScript('/script3.js', function (script) {
          console.log('third script is loaded');
          // after all scripts are loaded
        });
      });
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

63. ### Promise zanjiri(chaining) nima

    Va'dalar yordamida birin-ketin asinxron vazifalarni bajarish jarayoni va'da zanjiri deb nomlanadi. Yakuniy natijani hisoblash uchun va'da zanjiriga misol keltiraylik,

    ```javascript
    new Promise(function (resolve, reject) {
      setTimeout(() => resolve(1), 1000);
    })
      .then(function (result) {
        console.log(result); // 1
        return result * 2;
      })
      .then(function (result) {
        console.log(result); // 2
        return result * 3;
      })
      .then(function (result) {
        console.log(result); // 6
        return result * 4;
      });
    ```

    Yuqoridagi ishlov beruvchilarda natija quyidagi ish oqimi bilan .then() ishlov beruvchilari zanjiriga uzatiladi,

    1. Dastlabki va'da 1 soniyada hal qilinadi,
    2. Shundan so'ng .thenishlov beruvchi natijani (1) jurnalga kiritish orqali chaqiriladi va natijada \* 2 qiymati bilan va'da qaytariladi..
    3. Shundan so'ng, qiymat .thennatijani (2) qayd qilish orqali keyingi ishlov beruvchiga o'tdi va natija \* 3 bilan va'dani qaytaring.
    4. Nihoyat, natijani (6) qayd qilish orqali qiymat oxirgi .thenishlov beruvchiga o'tdi va natija \* 4 bilan va'dani qaytaring.

    **[⬆ Back to Top](#table-of-contents)**

64. ### Promise.all nima](#what-is-promise

    Promise.all - bu bir qator va'dalarni kiritish (takrorlash) sifatida qabul qiladigan va'da va u barcha va'dalar hal qilinganda yoki ulardan biri rad etilganda hal qilinadi. Masalan, prod.all usulining sintaksisi quyida keltirilgan,

    ```javascript
    Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))
    ```

    **Note:** Va'dalar tartibi (natijani chiqarish) kiritish tartibiga muvofiq saqlanadi.

    **[⬆ Back to Top](#table-of-contents)**

65. ### Promise race mathoding maqsadi nima

    Promise.race() usuli birinchi navbatda hal qilingan yoki rad etilgan va'da namunasini qaytaradi. Keling, race() usulini misol qilib olaylik, bunda birinchi navbatda vad2 hal qilinadi

    ```javascript
    var promise1 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 500, 'one');
    });
    var promise2 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 100, 'two');
    });

    Promise.race([promise1, promise2]).then(function (value) {
      console.log(value); // "two" // Both promises will resolve, but promise2 is faster
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

66. ### Javascriptda qat'iy rejim(strict mode) nima

    Qattiq rejim - bu ECMAScript 5-dagi yangi xususiyat bo'lib, u sizga dastur yoki funksiyani "qat'iy" operatsion kontekstda joylashtirish imkonini beradi. Shunday qilib, u muayyan harakatlarning bajarilishini oldini oladi va ko'proq istisnolarni keltirib chiqaradi. To'g'ridan-to'g'ri ifoda "use strict";brauzerga javascript kodini qattiq rejimda ishlatishni buyuradi.

    **[⬆ Back to Top](#table-of-contents)**

67. ### Nima uchun sizga qattiq rejim kerak

    Qattiq rejim haqiqiy xatolarga "yomon sintaksis" haqida xabar berib, "xavfsiz" JavaScript yozish uchun foydalidir. Masalan, xatolik yo'li bilan tasodifan global o'zgaruvchini yaratishni bartaraf qiladi va yozilmaydigan xususiyatga, faqat qabul qiluvchi xususiyatga, mavjud bo'lmagan xususiyatga, mavjud bo'lmagan o'zgaruvchiga yoki bo'lmagan xususiyatga tayinlash uchun xatolik chiqaradi. mavjud objekt.
    **[⬆ Back to Top](#table-of-contents)**

68. ### Qattiq rejimni qanday e'lon qilasiz

    Qat'iy rejim "qat'iy foydalanish" qo'shilishi bilan e'lon qilinadi; skript yoki funksiya boshiga. Agar skript boshida e'lon qilingan bo'lsa, u global miqyosga ega.

    ```javascript
    'use strict';
    x = 3.14; // This will cause an error because x is not declared
    ```

    va agar siz funktsiya ichida e'lon qilsangiz, u mahalliy doiraga ega

    ```javascript
    x = 3.14; // This will not cause an error.
    myFunction();

    function myFunction() {
      'use strict';
      y = 3.14; // This will cause an error
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

69. ### Ikkilamchi undovdan maqsad nima (! !)

    Qo'sh undov yoki inkor (!!) natijada turning mantiqiy ekanligini ta'minlaydi. Agar u noto'g'ri bo'lsa (masalan, 0, null, aniqlanmagan va hokazo), u noto'g'ri, aks holda rost bo'ladi. Misol uchun, siz quyidagi ibora yordamida IE versiyasini sinab ko'rishingiz mumkin,

    ```javascript
    let isIE8 = false;
    isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false
    ```

    Agar siz ushbu ifodani ishlatmasangiz, u asl qiymatni qaytaradi.

    ```javascript
    console.log(navigator.userAgent.match(/MSIE 8.0/)); // returns either an Array or null
    ```

    **Note:** ifoda !! operator emas, lekin u faqat ikki marta! operator.

    **[⬆ Back to Top](#table-of-contents)**

70. ### Delete operatorining maqsadi nima

    Delete kalit so'zi mulkni va uning qiymatini o'chirish uchun ishlatiladi.

    ```javascript
    var user = { name: 'John', age: 20 };
    delete user.age;

    console.log(user); // {name: "John"}
    ```

    **[⬆ Back to Top](#table-of-contents)**

71. ### typeOf operatori nima

    JavaScript o'zgaruvchisining turini topish uchun JavaScript typeof operatoridan foydalanishingiz mumkin. U o'zgaruvchi yoki ifoda turini qaytaradi.

    ```javascript
    typeof 'John Abraham'; // Returns "string"
    typeof (1 + 2); // Returns "number"
    ```

    **[⬆ Back to Top](#table-of-contents)**

72. ### Belgilanmagan xususiyati (undefined prop) nima

    Qiymatni aniqlanmagan qilib belgilash orqali har qanday o'zgaruvchini bo'shatish mumkin.

    ```javascript
    var user; // Value is undefined, type is undefined
    console.log(typeof user); //undefined
    ```

    Qiymatni aniqlanmagan qilib belgilash orqali har qanday o'zgaruvchini bo'shatish mumkin.

    ```javascript
    user = undefined;
    ```

    **[⬆ Back to Top](#table-of-contents)**

73. ### Null qiymat nima

    Null qiymati har qanday objekt qiymatining ataylab yo'qligini ifodalaydi. Bu JavaScript-ning ibtidoiy qiymatlaridan biridir. Null qiymat turi objekt hisoblanadi. Qiymatni null ga o'rnatish orqali o'zgaruvchini bo'shatish mumkin.

    ```javascript
    var user = null;
    console.log(typeof user); //object
    ```

    **[⬆ Back to Top](#table-of-contents)**

74. ### Null va undefined ortasida farq nima

    Quyida null va undefined o'rtasidagi asosiy farqlar keltirilgan,

    | Null                                                                                         | Undefined                                                                                |
    | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
    | Bu o'zgaruvchining hech qanday objektga ishora qilmasligini ko'rsatadigan tayinlash qiymati. | Bu o'zgaruvchi e'lon qilingan, lekin hali qiymat tayinlanmagan tayinlash qiymati emas.   |
    | Type of null is object                                                                       | Type of undefined is undefined                                                           |
    | Null qiymat nol, bo'sh yoki mavjud bo'lmagan havolani ifodalovchi ibtidoiy qiymatdir.        | Aniqlanmagan qiymat o'zgaruvchiga qiymat berilmaganda ishlatiladigan ibtidoiy qiymatdir. |
    | O'zgaruvchi uchun qiymat yo'qligini ko'rsatadi                                               | O'zgaruvchining o'zi yo'qligini ko'rsatadiitself                                         |
    | Primitiv amallarni bajarishda nolga (0) aylantiriladi                                        | Primitiv operatsiyalarni bajarishda NaN ga aylantiriladi                                 |

    **[⬆ Back to Top](#table-of-contents)**

75. ### Eval nima

    eval() funktsiyasi satr sifatida taqdim etilgan JavaScript kodini baholaydi. Satr JavaScript ifodasi, o'zgaruvchi, bayonot yoki bayonotlar ketma-ketligi bo'lishi mumkin.

    ```javascript
    console.log(eval('1 + 2')); //  3
    ```

    **[⬆ Back to Top](#table-of-contents)**

76. ### Window va document o'rtasidagi farq nima

    Quyida oyna va hujjat o'rtasidagi asosiy farqlar keltirilgan,

    | Window                                                                             | Document                                                                                       |
    | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
    | Bu har qanday veb-sahifadagi ildiz darajasining elementidir                        | Bu oyna objektining bevosita bolasi. Bu Document Object Model (DOM) sifatida ham tanilgan.     |
    | Odatiy bo'lib oyna objekti bevosita sahifada mavjud                                | Siz unga window.document yoki hujjat orqali kirishingiz mumkin.                                |
    | Unda alert(), confirm() kabi usullar va hujjat, joylashuv kabi xususiyatlar mavjud | U getElementById, getElementsByTagName, createElement va boshqalar kabi usullarni taqdim etadi |

    **[⬆ Back to Top](#table-of-contents)**

77. ### Javascriptda tarixga(Js history) qanday kirish mumkin

    window.history obyekti brauzer tarixini o'z ichiga oladi. Tarixdagi oldingi va keyingi URL-larni back() va next() usullaridan foydalanib yuklashingiz mumkin.

    ```javascript
    function goBack() {
      window.history.back();
    }
    function goForward() {
      window.history.forward();
    }
    ```

    **Note:** Siz window.history prefiksisiz ham kirishingiz mumkin.

    **[⬆ Back to Top](#table-of-contents)**

78. ### Caps lock tugmasi yoqilgan yoki yo'qligini qanday aniqlash mumkin

    Belgilangan mouseEvent getModifierState()modifikator kaliti faollashtirilgan yoki yoqilmaganligini ko'rsatadigan mantiqiy qiymatni qaytarish uchun ishlatiladi. CapsLock, ScrollLock va NumLock kabi modifikatorlar bosilganda faollashadi va yana bosilganda o'chiriladi.

    Misol bilan CapsLock-ni yoqish/o'chirish harakatini aniqlash uchun kirish elementini olaylik,

    ```html
    <input type="password" onmousedown="enterInput(event)" />

    <p id="feedback"></p>

    <script>
      function enterInput(e) {
        var flag = e.getModifierState('CapsLock');
        if (flag) {
          document.getElementById('feedback').innerHTML = 'CapsLock activated';
        } else {
          document.getElementById('feedback').innerHTML =
            'CapsLock not activated';
        }
      }
    </script>
    ```

    **[⬆ Back to Top](#table-of-contents)**

79. ### NaN nima

    isNaN() funksiyasi qiymat noqonuniy son (Not-a-Number) yoki yoʻqligini aniqlash uchun ishlatiladi. ya'ni, agar qiymat NaN ga teng bo'lsa, bu funktsiya true ni qaytaradi. Aks holda u false qaytaradi.

    ```javascript
    isNaN('Hello'); //true
    isNaN('100'); //false
    ```

    **[⬆ Back to Top](#table-of-contents)**

80. ### E'lon qilinmagan va aniqlanmagan o'zgaruvchilar o'rtasidagi farqlar qanday undefined variables

    Quyida e'lon qilinmagan va aniqlanmagan o'zgaruvchilar o'rtasidagi asosiy farqlar keltirilgan,

    | undeclared                                                                                                      | undefined                                                                                                    |
    | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
    | Bu o'zgaruvchilar dasturda mavjud emas va e'lon qilinmaydi                                                      | Ushbu o'zgaruvchilar dasturda e'lon qilingan, ammo hech qanday qiymat bermagan                               |
    | Agar siz e'lon qilinmagan o'zgaruvchining qiymatini o'qishga harakat qilsangiz, ish vaqti xatosi paydo bo'ladi. | Agar siz aniqlanmagan o'zgaruvchining qiymatini o'qishga harakat qilsangiz, aniqlanmagan qiymat qaytariladi. |

    **[⬆ Back to Top](#table-of-contents)**

81. ### Global o'zgaruvchilar nima

    Global o'zgaruvchilar kodning butun uzunligi bo'ylab hech qanday qamrovsiz mavjud bo'lganlardir. Var kalit so'zi mahalliy o'zgaruvchini e'lon qilish uchun ishlatiladi, lekin agar uni o'tkazib yuborsangiz, u global o'zgaruvchiga aylanadi.

    ```javascript
    msg = 'Hello'; // var is missing, it becomes global variable
    ```

    **[⬆ Back to Top](#table-of-contents)**

82. ### Global o'zgaruvchilar bilan qanday muammolar mavjud

Global o'zgaruvchilar bilan bog'liq muammo mahalliy va global miqyosdagi o'zgaruvchilar nomlarining ziddiyatidir. Global o'zgaruvchilarga tayanadigan kodni disk raskadrovka qilish va sinab ko'rish ham qiyin.

    **[⬆ Back to Top](#table-of-contents)**

83. ### NaN property nima

    NaN xususiyati global xususiyat bo'lib, u "Raqam emas" qiymatini ifodalaydi. ya'ni, bu qiymat qonuniy raqam emasligini bildiradi. Dasturda NaN dan foydalanish juda kam uchraydi, lekin uni bir necha hollarda qaytarish qiymati sifatida ishlatish mumkin

    ```javascript
    Math.sqrt(-1);
    parseInt('Hello');
    ```

    **[⬆ Back to Top](#table-of-contents)**

84. ### isFinite funksiyasining maqsadi nima

isFinite() funksiyasi sonning cheklangan, qonuniy son ekanligini aniqlash uchun ishlatiladi. Qiymat +infinity, -infinity yoki NaN (Not-a-Number) bo'lsa, u noto'g'ri, aks holda u haqiqatni qaytaradi.

    ```javascript
    isFinite(Infinity); // false
    isFinite(NaN); // false
    isFinite(-Infinity); // false

    isFinite(100); // true
    ```

    **[⬆ Back to Top](#table-of-contents)**

85. ### Hodisalar oqimi (event flow) nima

    Voqealar oqimi - veb-sahifada voqea qabul qilish tartibi. Turli xil boshqa elementlarga joylashtirilgan elementni bosganingizda, bosishingiz oʻz manziliga yoki maqsad elementiga yetib borgunga qadar, u global oyna obyekti bilan yuqoridan boshlab, birinchi navbatda, har bir asosiy element uchun bosish hodisasini ishga tushirishi kerak. Voqealar oqimining ikki yo'li mavjud

    1. Yuqoridan pastga (hodisani suratga olish)
    2. Pastdan tepaga (voqea ko‘pirish)

    **[⬆ Back to Top](#table-of-contents)**

86. ### Event bubbling nima

    Voqealar ko'piklanishi - bu hodisa tarqalishining bir turi bo'lib, unda hodisa birinchi navbatda eng ichki maqsad elementida ishga tushadi, so'ngra eng tashqi DOM elementiga yetguncha bir xil joylashtirish ierarxiyasidagi maqsad elementning ajdodlarida (ota-onalarida) ketma-ket ishga tushadi.

    **[⬆ Back to Top](#table-of-contents)**

87. ### Event capturing nima

    Voqealarni suratga olish - hodisani tarqatishning bir turi bo'lib, unda hodisa birinchi navbatda eng tashqi element tomonidan ushlanib, so'ngra eng ichki DOM elementiga yetguncha bir xil joylashtirish ierarxiyasidagi maqsadli elementning avlodlarida (bolalarida) ketma-ket ishga tushadi.

    **[⬆ Back to Top](#table-of-contents)**

88. ### Form JavaScript yordamida qanday yuborasiz

    document.forms[0].submit() dan foydalanib ariza yuborishingiz mumkin. Shaklga kiritilgan barcha ma'lumotlar onsubmit voqea ishlov beruvchisi yordamida yuboriladi

    ```javascript
    function submit() {
      document.forms[0].submit();
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

89. ### Operatsion tizim tafsilotlari(operating system details) ni qanday topish mumkin

    window.navigator objekti tashrif buyuruvchining brauzeri OS tafsilotlari haqidagi ma'lumotlarni o'z ichiga oladi. Ba'zi OS xususiyatlari platforma mulki ostida mavjud,

    ```javascript
    console.log(navigator.platform);
    ```

    **[⬆ Back to Top](#table-of-contents)**

90. ### Document load va DOMContentLoaded hodisalari o'rtasidagi farq nima DOMContentLoaded events

    Hodisa DOMContentLoadedboshlang'ich HTML hujjati to'liq yuklangan va tahlil qilinganda, aktivlar (uslublar jadvallari, tasvirlar va pastki ramkalar) yuklashni tugatilishini kutmasdan ishga tushiriladi. Holbuki, load hodisasi butun sahifa, shu jumladan barcha bog'liq manbalar (uslublar jadvallari, tasvirlar) yuklanganda ishga tushiriladi.

    **[⬆ Back to Top](#table-of-contents)**

91. ### What is the difference between native, host and user objectsobjects

    Native objectsECMAScript spetsifikatsiyasi bilan belgilangan JavaScript tilining bir qismi bo'lgan objektlardir. Masalan, ECMAScript spetsifikatsiyasida belgilangan String, Math, RegExp, Object, Function va hokazo asosiy objektlar. Host objectsbrauzer yoki ish vaqti muhiti (tugun) tomonidan taqdim etilgan objektlardir. Masalan, window, XmlHttpRequest, DOM tugunlari va boshqalar xost objektlari sifatida qabul qilinadi. User objectsjavascript kodida belgilangan objektlardir. Masalan, profil ma'lumotlari uchun yaratilgan Foydalanuvchi objektlari.

    **[⬆ Back to Top](#table-of-contents)**

92. ### JavaScript kodini tuzatish(debugging) uchun qanday vositalar yoki usullar qo'llaniladiJavaScript code

    Javascriptni nosozliklarni tuzatish uchun quyidagi vositalar yoki usullardan foydalanishingiz mumkin

    1. Chrome Devtools
    2. debugger statement
    3. Good old console.log statement

    **[⬆ Back to Top](#table-of-contents)**

93. ### Promise da callback funksiya ishlatishni qanday ijobiy va salbiy tomonlari bor

    Quyida callbacklar bo'yicha va'dalarning ijobiy va salbiy tomonlari ro'yxati keltirilgan,

    **Pros:**

    1. Bu o'qib bo'lmaydigan callback qilishning oldini oladi
    2. then() bilan ketma-ket asinxron kodni yozish oson.
    3. Promise.all() bilan parallel asinxron kodni yozish oson.
    4. Callbacklarning ba'zi umumiy muammolarini hal qiladi (callback ni juda kech, juda erta, ko'p marta qo'ng'iroq qiling va xatolar/istisnolarni yutib yuboring)

    **Cons:**

    1. U ozgina murakkab kod yaratadi
    2. U ozgina murakkab kod yaratadi

    **[⬆ Back to Top](#table-of-contents)**

94. ### Atribut va xususiyat(property) o'rtasidagi farq nima

    Atributlar HTML belgilashda, xususiyatlar esa DOMda aniqlanadi. Masalan, quyidagi HTML elementi 2 ta atribut turi va qiymatiga ega,

    ```javascript
    <input type="text" value="Name:">
    ```

    Quyidagi kabi atribut qiymatini olishingiz mumkin,

    ```javascript
    const input = document.querySelector('input');
    console.log(input.getAttribute('value')); // Good morning
    console.log(input.value); // Good morning
    ```

Va matn maydonining qiymatini "Xayrli oqshom" ga o'zgartirganingizdan so'ng, u shunday bo'ladi

    ```javascript
    console.log(input.getAttribute('value')); // Good morning
    console.log(input.value); // Good evening
    ```

    **[⬆ Back to Top](#table-of-contents)**

95. ### Bir xil kelib chiqish siyosati (same-origin policy) nima

    Bir xil kelib chiqish siyosati JavaScript-ni domen chegaralari bo'ylab so'rovlar qilishiga to'sqinlik qiluvchi siyosatdir. Boshlanish URI sxemasi, xost nomi va port raqamining kombinatsiyasi sifatida aniqlanadi. Agar siz ushbu siyosatni yoqsangiz, u Document Object Model (DOM) yordamida bir sahifadagi zararli skript boshqa veb-sahifadagi maxfiy maʼlumotlarga kirishini oldini oladi.

    **[⬆ Back to Top](#table-of-contents)**

96. ### Void 0 ning maqsadi nima

Void(0) sahifani yangilanishini oldini olish uchun ishlatiladi. Bu kiruvchi nojo'ya ta'sirni bartaraf etishda foydali bo'ladi, chunki u aniqlanmagan ibtidoiy qiymatni qaytaradi. U odatda href="JavaScript:Void(0);" ishlatadigan HTML hujjatlari uchun ishlatiladi. <a>element ichida . ya'ni havolani bosganingizda brauzer yangi sahifani yuklaydi yoki xuddi shu sahifani yangilaydi. Ammo bu ibora yordamida bu xatti-harakatning oldini oladi. Masalan, quyidagi havola sahifani qayta yuklamasdan xabarni bildiradi

    ```javascript
    <a href='JavaScript:void(0);' onclick="alert('Well done!')">
      Click Me!
    </a>
    ```

    **[⬆ Back to Top](#table-of-contents)**

97. ### JavaScript kompilyatsiya qilingan yoki tarjima qilingan tilmi

    JavaScript kompilyatsiya qilingan til emas, balki talqin qilinadigan tildir. Brauzerdagi tarjimon JavaScript kodini o'qiydi, har bir satrni sharhlaydi va uni ishga tushiradi. Hozirgi vaqtda zamonaviy brauzerlar JavaScript-ni ishga tushirish arafasida bajariladigan bayt-kodga kompilyatsiya qiladigan Just-In-Time (JIT) kompilyatsiyasi deb nomlanuvchi texnologiyadan foydalanadilar.

    **[⬆ Back to Top](#table-of-contents)**

98. ### Js case-sensitive (katta va kichik hariflarni farqalydigan ) tilmi

    Ha, JavaScript katta-kichik harflarga sezgir tildir. Til kalit so'zlari, o'zgaruvchilar, funksiya va objekt nomlari va boshqa identifikatorlar har doim harflarning izchil bosh harflari bilan kiritilishi kerak.
    **[⬆ Back to Top](#table-of-contents)**

99. ### Java va JavaScript o'rtasida bog'liqlik bormi

    Yo'q, ular butunlay ikki xil dasturlash tillari va bir-biriga hech qanday aloqasi yo'q. Ammo ularning ikkalasi ham objektga yo'naltirilgan dasturlash tillari va boshqa ko'plab tillar singari, ular asosiy funktsiyalar uchun o'xshash sintaksisga amal qiladilar (agar, boshqacha, uchun, o'tish, buzish, davom ettirish va hokazo).

    **[⬆ Back to Top](#table-of-contents)**

100.  ### Events nima

      Hodisalar HTML elementlari bilan sodir bo'ladigan "narsalar"dir. HTML sahifalarida JavaScript ishlatilsa, JavaScript reactbu hodisalarda ham bo'lishi mumkin. HTML hodisalariga ba'zi misollar:

      1.  Veb-sahifa yuklash tugallandi
      2.  Kirish maydoni o'zgartirildi
      3.  Tugma bosildi

      Keling, tugma elementi uchun bosish hodisasining harakatini tasvirlaylik,

      ```javascript
      <!doctype html>
      <html>
       <head>
         <script>
           function greeting() {
             alert('Hello! Good morning');
           }
         </script>
       </head>
       <body>
         <button type="button" onclick="greeting()">Click me</button>
       </body>
      </html>
      ```

      **[⬆ Back to Top](#table-of-contents)**

101.  ### Javascriptni kim yaratgan

      JavaScript Brendan Eich tomonidan 1995 yilda Netscape Communications kompaniyasida ishlagan vaqtida yaratilgan. Dastlab u nomi ostida ishlab chiqilgan , ammo keyinchalik Netscape-ning beta-versiyalarida birinchi marta yuborilganida, Mochatil rasmiy ravishda nomlangan .LiveScript

      **[⬆ Back to Top](#table-of-contents)**

102.  ### PreventDefault usuli qanday holatda ishlatiladi

      preventDefault() usuli, agar u bekor qilinadigan bo'lsa, hodisani bekor qiladi, ya'ni hodisaga tegishli bo'lgan standart harakat yoki xatti-harakatlar sodir bo'lmaydi. Masalan, “Yuborish” tugmasini bosganingizda shaklni yuborishni oldini olish va giperhavolani bosganda sahifaning URL manzilini ochishning oldini olish keng tarqalgan foydalanish holatlaridir.

      ```javascript
      document
        .getElementById('link')
        .addEventListener('click', function (event) {
          event.preventDefault();
        });
      ```

      **Note:** Esda tutingki, barcha tadbirlarni bekor qilish mumkin emas.

      **[⬆ Back to Top](#table-of-contents)**

103.  ### StopPropagation usuli qanday holatda ishlatiladi

      StopPropagation usuli hodisaning hodisalar zanjirida ko'payishini to'xtatish uchun ishlatiladi. Misol uchun, stopPropagation usuli bilan quyida joylashgan ichki divlar ichki o'rnatilgan div(Div1) ni bosganda standart hodisa tarqalishini oldini oladi.

      ```javascript
      <p>Click DIV1 Element</p>
      <div onclick="secondFunc()">DIV 2
        <div onclick="firstFunc(event)">DIV 1</div>
      </div>

      <script>
      function firstFunc(event) {
        alert("DIV 1");
        event.stopPropagation();
      }

      function secondFunc() {
        alert("DIV 2");
      }
      </script>
      ```

      **[⬆ Back to Top](#table-of-contents)**

104.  ### Noto'g'ri foydalanishni qaytarish uchun qanday qadamlar mavjud

      Hodisa ishlov beruvchilarida noto'g'ri xabarni qaytarish quyidagi amallarni bajaradi:

      1.  Avval u brauzerning standart harakatini yoki harakatini to'xtatadi.
      2.  Bu hodisaning DOMni targ'ib qilishiga to'sqinlik qiladi
      3.  Callbackni bajarishni to'xtatadi va chaqirilganda darhol qaytadi..

      **[⬆ Back to Top](#table-of-contents)**

105.  ### BOM nima

      Brauzer obyekti modeli (BOM) JavaScript-ga brauzer bilan “suhbatlashish” imkonini beradi. U navigator, tarix, ekran, joylashuv va oynaning bolalari bo'lgan hujjatdan iborat. Brauzer objekt modeli standartlashtirilmagan va turli brauzerlar asosida o'zgarishi mumkin.

      ![Screenshot](images/bom.png)

      **[⬆ Back to Top](#table-of-contents)**

106.  ### setTimeout dan qanday foydalanish kerak

      setTimeout() usuli funktsiyani chaqirish yoki belgilangan millisekundlardan keyin ifodani baholash uchun ishlatiladi. Masalan, setTimeout usuli yordamida 2 soniyadan so'ng xabarni tizimga kiritamiz,

      ```javascript
      setTimeout(function () {
        console.log('Good morning');
      }, 2000);
      ```

      **[⬆ Back to Top](#table-of-contents)**

107.  ### setInterval nimadan foydalaniladi

      setInterval() usuli funksiyani chaqirish yoki ifodani belgilangan oraliqlarda (millisekundlarda) baholash uchun ishlatiladi. Masalan, setInterval usuli yordamida 2 soniyadan so'ng xabarni tizimga kiritamiz,

      ```javascript
      setInterval(function () {
        console.log('Good morning');
      }, 2000);
      ```

      **[⬆ Back to Top](#table-of-contents)**

108.  ### Nima uchun JavaScript yagona Ipli (Single threaded) deb hisoblanadi

      JavaScript - bu bitta oqimli til. Chunki til spetsifikatsiyasi dasturchiga kod yozishga imkon bermaydi, shunda tarjimon uning qismlarini bir nechta ip yoki jarayonlarda parallel ravishda ishga tushirishi mumkin. Java, go, C++ kabi tillar ko'p bosqichli va ko'p jarayonli dasturlarni yaratishi mumkin.

      **[⬆ Back to Top](#table-of-contents)**

109.  ### Tadbir delegatsiyasi(event delegation) nima

      Voqealar delegatsiyasi - bu voqealarni tinglash usuli bo'lib, unda siz asosiy elementni uning ichida sodir bo'ladigan barcha voqealar uchun tinglovchi sifatida topshirasiz.

      Misol uchun, agar siz ma'lum bir shakl ichidagi maydon o'zgarishlarini aniqlamoqchi bo'lsangiz, voqea delegatsiyasi texnikasidan foydalanishingiz mumkin,

      ```javascript
      var form = document.querySelector('#registration-form');

      // Listen for changes to fields inside the form
      form.addEventListener(
        'input',
        function (event) {
          // Log the field that was changed
          console.log(event.target);
        },
        false
      );
      ```

      **[⬆ Back to Top](#table-of-contents)**

110.  ### ECMAScript nima

      ECMAScript JavaScript asosini tashkil etuvchi skript tilidir. ECMAScript ECMA xalqaro standartlar tashkiloti tomonidan ECMA-262 va ECMA-402 spetsifikatsiyalarida standartlashtirilgan. ECMAScript ning birinchi nashri 1997 yilda chiqarilgan.

      **[⬆ Back to Top](#table-of-contents)**

111.  ### JSON nima

      JSON (JavaScript Object Notation) - bu ma'lumotlarni almashish uchun ishlatiladigan engil format. U JavaScriptda objektlarni qurish usulida JavaScript tilining kichik to'plamiga asoslangan.

      **[⬆ Back to Top](#table-of-contents)**

112.  ### JSON sintaksisi qoidalari qanday

      Quyida JSON sintaksisi qoidalari ro'yxati keltirilgan

      1.  Ma'lumotlar nom/qiymat juftliklarida
      2.  Ma'lumotlar vergul bilan ajratiladi
      3.  Jingalak qavslar narsalarni ushlab turadi
      4.  Kvadrat qavslar massivlarni ushlab turad

      **[⬆ Back to Top](#table-of-contents)**

113.  ### JSON stringify nima maqsadda foydalaniladi

      Veb-serverga ma'lumotlarni yuborishda ma'lumotlar string formatida bo'lishi kerak. Bunga JSON obyektini stringify() usuli yordamida satrga aylantirish orqali erishishingiz mumkin.

      ```javascript
      var userJSON = { name: 'John', age: 31 };
      var userString = JSON.stringify(user);
      console.log(userString); //"{"name":"John","age":31}"
      ```

      **[⬆ Back to Top](#table-of-contents)**

114.  ### JSON string ni qanday tahlil(parse) qilasiz

      Veb-serverdan ma'lumotlarni qabul qilishda ma'lumotlar har doim string formatida bo'ladi. Lekin bu satr qiymatini parse() usuli yordamida JavaScript obyektiga aylantirishingiz mumkin.

      ```javascript
      var userString = '{"name":"John","age":31}';
      var userJSON = JSON.parse(userString);
      console.log(userJSON); // {name: "John", age: 31}
      ```

      **[⬆ Back to Top](#table-of-contents)**

115.  ### Nima uchun sizga JSON kerak

      Brauzer va server o'rtasida ma'lumot almashishda ma'lumotlar faqat matn bo'lishi mumkin. JSON faqat matn bo'lgani uchun uni serverga va serverdan osongina yuborish va istalgan dasturlash tili tomonidan ma'lumotlar formati sifatida foydalanish mumkin.

      **[⬆ Back to Top](#table-of-contents)**

116.  ### PWAs nima

      Progressiv veb-ilovalar (PWA) HTML, CSS va JavaScript-ni o'z ichiga olgan umumiy veb-texnologiyalar yordamida yaratilgan veb-sayt orqali etkazib beriladigan mobil ilovaning bir turi. Ushbu PWA'lar serverlarga joylashtiriladi, URL manzillari orqali kirish mumkin va qidiruv tizimlari tomonidan indekslanadi.

      **[⬆ Back to Top](#table-of-contents)**

117.  ### clearTimeout usulining ishlatish maqsadi nima

      ClearTimeout() funksiyasi javascriptda setTimeout() funktsiyasi tomonidan o'rnatilgan vaqt tugashini o'chirish uchun ishlatiladi. ya'ni, setTimeout() funksiyasining qaytish qiymati o'zgaruvchida saqlanadi va taymerni tozalash uchun clearTimeout() funksiyasiga o'tkaziladi.

Masalan, quyidagi setTimeout usuli xabarni 3 soniyadan keyin ko'rsatish uchun ishlatiladi. Bu vaqt tugashi clearTimeout() usuli bilan tozalanishi mumkin.

      ```javascript
      <script>
      var msg;
      function greeting() {
         alert('Good morning');
      }
      function start() {
        msg =setTimeout(greeting, 3000);

      }

      function stop() {
          clearTimeout(msg);
      }
      </script>
      ```

      **[⬆ Back to Top](#table-of-contents)**

118.  ### ClearInterval usulidan maqsad nima

      ClearInterval() funksiyasi javascriptda setInterval() funktsiyasi tomonidan o'rnatilgan intervalni tozalash uchun ishlatiladi. ya'ni, setInterval() funktsiyasi tomonidan qaytarilgan qiymat o'zgaruvchida saqlanadi va intervalni tozalash uchun clearInterval() funksiyasiga o'tkaziladi.

Masalan, har 3 soniyada xabarni ko'rsatish uchun quyidagi setInterval usuli qo'llaniladi. Ushbu intervalni clearInterval() usuli bilan tozalash mumkin.

      ```javascript
      <script>
      var msg;
      function greeting() {
         alert('Good morning');
      }
      function start() {
        msg = setInterval(greeting, 3000);

      }

      function stop() {
          clearInterval(msg);
      }
      </script>
      ```

      **[⬆ Back to Top](#table-of-contents)**

119.  ### Javascriptda yangi sahifani qanday yo’naltirish mumkin

      locationVanilla JavaScriptda siz oyna objektining xususiyatidan foydalanib, yangi sahifaga yo'naltirishingiz mumkin . Sintaksis quyidagicha bo'ladi:

      ```javascript
      function redirect() {
        window.location.href = 'newPage.html';
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

120.  ### Stringda substring mavjudligini qanday tekshirish mumkin

      Satrda pastki satr bor yoki yo'qligini tekshirishning 3 ta mumkin bo'lgan usuli mavjud,

      1.  **Using includes:** ES6 tomonidan taqdim etilgan String.prototype.includesqatorni sinash uchun pastki qator mavjud

      ```javascript
      var mainString = 'hello',
        subString = 'hell';
      mainString.includes(subString);
      ```

      1.  **Using indexOf:** ES5 yoki undan yuqoriroq muhitda siz String.prototype.indexOfpastki qator indeksini qaytaradiganidan foydalanishingiz mumkin. Agar indeks qiymati -1 ga teng bo'lmasa, bu pastki satr asosiy satrda mavjudligini anglatadi.

      ```javascript
      var mainString = 'hello',
        subString = 'hell';
      mainString.indexOf(subString) !== -1;
      ```

      1.  **Using RegEx:** Kengaytirilgan yechim muntazam ifodalarni sinovdan o'tkazish usulidan ( RegExp.test) foydalanadi.

      ```javascript
      var mainString = 'hello',
        regex = /hell/;
      regex.test(mainString);
      ```

      **[⬆ Back to Top](#table-of-contents)**

121.  ### Javascriptda elektron pochtani qanday tekshirish mumkin

      Oddiy iboralar yordamida JavaScriptda elektron pochta xabarini tasdiqlashingiz mumkin. Tasdiqlashlarni mijoz tomoni o'rniga server tomonida qilish tavsiya etiladi. Chunki javascript mijoz tomonida o'chirib qo'yilishi mumkin.

      ```javascript
      function validateEmail(email) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

      The above regular expression accepts unicode characters.

122.  ### Joriy urlni javascript bilan qanday olish mumkin

      window.location.hrefJoriy url yo'lini olish uchun ifodadan foydalanishingiz mumkin va URLni yangilash uchun ham xuddi shu ifodadan foydalanishingiz mumkin . Siz document.URLfaqat o'qish uchun ham foydalanishingiz mumkin, ammo bu yechim FFda muammolarga ega.

      ```javascript
      console.log('location.href', window.location.href); // Returns full URL
      ```

      **[⬆ Back to Top](#table-of-contents)**

123.  ### Joylashuv obyektining turli url xususiyatlari qanday

      Quyidagi Locationobyekt xususiyatlari sahifaning URL komponentlariga kirish uchun ishlatilishi mumkin,

      1.                                   href - butun URL
      2.  protokol - URL manzilining protokoli
      3.  xost - URL manzilining xost nomi va porti
      4.  hostname - URL manzilining xost nomi
      5.  port - URL manzilidagi port raqami
      6.  pathname - URL manzilining yo'l nomi
      7.  qidiruv - URLning so'rov qismi
      8.  xesh - URLning langar qismi

      **[⬆ Back to Top](#table-of-contents)**

124.  ### Javascriptda so'rovlar qatori qiymatlarini qanday olish mumkin

      Javascriptda so'rovlar qatori qiymatlarini olish uchun URLSearchParams dan foydalanishingiz mumkin. URL so'rovlar qatoridan mijoz kodi qiymatini olish uchun misolni ko'rib chiqaylik,

      ```javascript
      const urlParams = new URLSearchParams(window.location.search);
      const clientCode = urlParams.get('clientCode');
      ```

      **[⬆ Back to Top](#table-of-contents)**

125.  ### objektda kalit(key) mavjudligini qanday tekshirish mumkin

      objektda kalit mavjudligi yoki yo'qligini uchta yondashuv yordamida tekshirishingiz mumkin,

      1.  **Using in operator:** objektda kalit mavjudmi yoki yo'qmi, in operatoridan foydalanishingiz mumkin

      ```javascript
      'key' in obj;
      ```

      Agar kalit mavjud emasligini tekshirishni istasangiz, qavsdan foydalanishni unutmang,

      ```javascript
      !('key' in obj);
      ```

      1.  **Using hasOwnProperty method:** Siz hasOwnPropertyobjekt namunasining xususiyatlarini (va meros qilib olingan xususiyatlarni emas) ayniqsa sinab ko'rish uchun foydalanishingiz mumkin.

      ```javascript
      obj.hasOwnProperty('key'); // true
      ```

      1.  **Using undefined comparison:** Agar objektdan mavjud bo'lmagan xususiyatga kirsangiz, natija aniqlanmagan. Mulkning mavjudligini aniqlash uchun xususiyatlarni undefined bilan solishtiramiz.

      ```javascript
      const user = {
        name: 'John',
      };

      console.log(user.name !== undefined); // true
      console.log(user.nickName !== undefined); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

126.  ### Javascript objektini qanday aylantirasiz(loop) yoki sanab o'tasiz

      for-inJavascript objekti bo'ylab aylanish uchun tsikldan foydalanishingiz mumkin . Shuningdek, siz olgan kalit objektning haqiqiy mulki ekanligiga va prototipdan foydalanish hasOwnPropertyusulidan kelib chiqmasligiga ishonch hosil qilishingiz mumkin.

      ```javascript
      var object = {
        k1: 'value1',
        k2: 'value2',
        k3: 'value3',
      };

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          console.log(key + ' -> ' + object[key]); // k1 -> value1 ...
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

127.  ### Bo'sh objektni qanday sinab ko'rasiz

      ECMAScript versiyalariga asoslangan turli xil echimlar mavjud

      1.  **Using Object entries(ECMA 7+):** Siz konstruktor turi bilan birga objekt yozuvlari uzunligidan foydalanishingiz mumkin.

      ```javascript
      Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
      ```

      1.  **Using Object keys(ECMA 5+):** Konstruktor turi bilan birga objekt tugmachalari uzunligidan ham foydalanishingiz mumkin.

      ```javascript
      Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
      ```

      1.  **Using for-in with hasOwnProperty(Pre-ECMA 5):** bilan for-in dan foydalanish: hasOwnProperty bilan birga for-in tsiklidan foydalanishingiz mumkin

      ```javascript
      function isEmpty(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            return false;
          }
        }

        return JSON.stringify(obj) === JSON.stringify({});
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

128.  ### Argumentlar obyekti nima

      Argumentlar obyekti funksiyalar ichida foydalanish mumkin boʻlgan massivga oʻxshash obyekt boʻlib, u funksiyaga uzatilgan argumentlar qiymatlarini oʻz ichiga oladi. Masalan, sum funktsiyasi ichida argumentlar objektidan qanday foydalanishni ko'rib chiqamiz,

      ```javascript
      function sum() {
        var total = 0;
        for (var i = 0, len = arguments.length; i < len; ++i) {
          total += arguments[i];
        }
        return total;
      }

      sum(1, 2, 3); // returns 6
      ```

      **Note:** Argumentlar obyektida massiv usullarini qo‘llay olmaysiz. Lekin siz quyidagi kabi oddiy massivga aylantira olasiz.

      ```javascript
      var argsArray = Array.prototype.slice.call(arguments);
      ```

      **[⬆ Back to Top](#table-of-contents)**

129.  ### Qanday qilib satrning birinchi harfini katta harf bilan yozish mumkin

      Siz bosh harfdagi birinchi harf bilan satr yaratish uchun charAt, toUpperCase va slice usullari kabi qator usullardan foydalanadigan funksiya yaratishingiz mumkin.

      ```javascript
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

130.  ### For loopning qanday ijobiy va salbiy tomonlari bor

      For-loop javascriptda tez-tez ishlatiladigan iteratsiya sintaksisidir. Buning ham ijobiy, ham salbiy tomonlari bor

      #### Pros

      1.  Har qanday muhitda ishlaydi
      2.  Siz tanaffus va davom etish oqimini boshqarish bayonotlaridan foydalanishingiz mumkin

      #### Cons

      1.  Too verbose
      2.  Imperative
      3.  You might face one-by-off errors

      **[⬆ Back to Top](#table-of-contents)**

131.  ### Joriy sanani javascriptda qanday ko'rsatasiz

      new Date()Joriy sana va vaqtni o'z ichiga olgan yangi Sana objektini yaratish uchun foydalanishingiz mumkin . Masalan, joriy sanani mm/dd/yyyy da ko'rsatamiz

      ```javascript
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;
      document.write(today);
      ```

      **[⬆ Back to Top](#table-of-contents)**

132.  ### Ikki sana objektini qanday solishtirasiz

      Taqqoslash operatorlari (==, !=, === va !== operatorlari) oʻrniga sana qiymatlarini solishtirish uchun date.getTime() usulidan foydalanishingiz kerak.

      ```javascript
      var d1 = new Date();
      var d2 = new Date(d1);
      console.log(d1.getTime() === d2.getTime()); //True
      console.log(d1 === d2); // False
      ```

      **[⬆ Back to Top](#table-of-contents)**

133.  ### Satrning boshqa satr bilan boshlanishini qanday tekshirish mumkin

      String.prototype.startsWith()Satrning boshqa satr bilan boshlanishi yoki boshlanmasligini tekshirish uchun ECMAScript 6 usulidan foydalanishingiz mumkin . Ammo u hali barcha brauzerlarda qo'llab-quvvatlanmaydi. Keling, ushbu foydalanishni ko'rish uchun misolni ko'rib chiqaylik,

      ```javascript
      'Good morning'.startsWith('Good'); // true
      'Good morning'.startsWith('morning'); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

134.  ### Javascriptda satrni(string) qanday kesish mumkin

      JavaScript satrning boshida yoki oxirida mavjud bo'lgan bo'shliqlarni kesish uchun satr turlari bo'yicha kesish usulini taqdim etdi.

      ```javascript
      '  Hello World   '.trim(); //Hello World
      ```

      Agar brauzeringiz(<IE9) bu usulni qo'llab-quvvatlamasa, quyida polyfilldan foydalanishingiz mumkin.

      ```javascript
      if (!String.prototype.trim) {
        (function () {
          // Make sure we trim BOM and NBSP
          var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          String.prototype.trim = function () {
            return this.replace(rtrim, '');
          };
        })();
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

135.  ### Javascriptda kalit , qiymat juftligini qanday qo'shasiz

      objektga yangi xususiyatlar qo'shishning ikkita mumkin bo'lgan echimi mavjud. Ushbu yechimlarni tushuntirish uchun oddiy objektni olaylik.

      ```javascript
      var object = {
        key1: value1,
        key2: value2,
      };
      ```

      1.  **Using dot notation:** Bu yechim xususiyat nomini bilganingizda foydalidir

      ```javascript
      object.key3 = 'value3';
      ```

      1.  **Using square bracket notation:** Bu yechim xususiyat nomi dinamik ravishda aniqlanganda foydalidir.

      ```javascript
      obj['key3'] = 'value3';
      ```

      **[⬆ Back to Top](#table-of-contents)**

136.  ### [[!-- belgisi maxsus operatorni ifodalaydi

      Yo'q, bu maxsus operator emas. Ammo bu birin-ketin ikkita standart operatorning kombinatsiyasi,

      1.  Mantiqiy emas (!)
      2.  Prefiksning kamayishi (--)

      Avvaliga qiymat bittaga kamaydi, so'ngra haqiqat/noto'g'ri qiymatni aniqlash uchun nolga teng yoki yo'qligini tekshirish uchun sinovdan o'tkazildi.

      **[⬆ Back to Top](#table-of-contents)**

137.  ### O'zgaruvchilarga standart qiymatlarni qanday belgilash mumkin

      ||Standart qiymatni berish uchun tayinlash ifodasida mantiqiy yoki operatordan foydalanishingiz mumkin . Sintaksis quyidagi kabi ko'rinadi,

      ```javascript
      var a = b || c;
      ```

      Yuqoridagi ifodaga ko'ra, "a" o'zgaruvchisi "b" noto'g'ri bo'lsa (agar null, noto'g'ri, aniqlanmagan, 0, bo'sh satr yoki NaN bo'lsa), aks holda "a" o'zgaruvchisi "c" qiymatini oladi. "b" qiymati.

      **[⬆ Back to Top](#table-of-contents)**

138.  ### Ko'p qatorli satrlarni qanday aniqlash mumkin

      Siz “\” belgisidan keyin qator terminatori yordamida koʻp qatorli satr harflarini belgilashingiz mumkin.

      ```javascript
      var str =
        'This is a \
      very lengthy \
      sentence!';
      ```

      Ammo "\" belgisidan keyin bo'sh joy bo'lsa, kod aynan bir xil ko'rinadi, lekin u SyntaxErrorni keltirib chiqaradi.

      **[⬆ Back to Top](#table-of-contents)**

139.  ### Ilova qobig'i(app shell) modeli nima

      Ilova qobig'i (yoki ilovalar qobig'i) arxitekturasi mahalliy ilovalarda ko'rganingiz kabi foydalanuvchilaringiz ekraniga ishonchli va bir zumda yuklanadigan Progressive Web ilovasini yaratish usullaridan biridir. Bu tarmoqsiz ekranga dastlabki HTML-ni tezda olish uchun foydalidir.

      **[⬆ Back to Top](#table-of-contents)**

140.  ### Funktsiyalar uchun xususiyatlarni aniqlay olamizmi

      Ha, biz funktsiyalar uchun xususiyatlarni belgilashimiz mumkin, chunki funktsiyalar ham objektlardir.

      ```javascript
      fn = function (x) {
        //Function code goes here
      };

      fn.name = 'John';

      fn.profile = function (y) {
        //Profile code goes here
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

141.  ### Funksiya kutayotgan parametrlar sonini qanday usul bilan topish mumkina function

      function.lengthFunktsiya kutayotgan parametrlar sonini topish uchun sintaksisdan foydalanishingiz mumkin . sumKeling , raqamlar yig'indisini hisoblash uchun funktsiyaga misol keltiraylik ,

      ```javascript
      function sum(num1, num2, num3, num4) {
        return num1 + num2 + num3 + num4;
      }
      sum.length; // 4 is the number of parameters expected.
      ```

      **[⬆ Back to Top](#table-of-contents)**

142.  ### Polifill nima ?

      Polyfill - bu uni qo'llab-quvvatlamaydigan eski brauzerlarda zamonaviy funksiyalarni ta'minlash uchun ishlatiladigan JS kodining bir qismi. Masalan, Silverlight plaginining polyfill dasturidan Microsoft Internet Explorer 7 da HTML Canvas elementining funksionalligini taqlid qilish uchun foydalanish mumkin.

      **[⬆ Back to Top](#table-of-contents)**

143.  ### Tanaffus(break) va davom(continue) iboralari nima

      Break iborasi tsikldan “sakrab chiqish” uchun ishlatiladi. ya'ni, tsiklni buzadi va tsikldan keyin kodni bajarishda davom etadi.

      ```javascript
      for (i = 0; i < 10; i++) {
        if (i === 5) {
          break;
        }
        text += 'Number: ' + i + '<br>';
      }
      ```

      Davom etish iborasi tsikldagi bir iteratsiyadan "sakrab o'tish" uchun ishlatiladi. ya'ni, agar belgilangan shart yuzaga kelsa, u bir iteratsiyani (siklda) buzadi va tsikldagi keyingi iteratsiya bilan davom etadi.

      ```javascript
      for (i = 0; i < 10; i++) {
        if (i === 5) {
          continue;
        }
        text += 'Number: ' + i + '<br>';
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

144.  ### Js yorliqlari(js label) nima ?

      Yorliq bayonoti bizga JavaScriptda tsikllar va bloklarni nomlash imkonini beradi. Keyin biz ushbu teglardan kodga keyinroq murojaat qilish uchun foydalanishimiz mumkin. Masalan, yorliqli quyidagi kod raqamlar bir xil bo'lganda chop etishdan saqlaydi,

      ```javascript
      var i, j;

      loop1: for (i = 0; i < 3; i++) {
        loop2: for (j = 0; j < 3; j++) {
          if (i === j) {
            continue loop1;
          }
          console.log('i = ' + i + ', j = ' + j);
        }
      }

      // Output is:
      //   "i = 1, j = 0"
      //   "i = 2, j = 0"
      //   "i = 2, j = 1"
      ```

      **[⬆ Back to Top](#table-of-contents)**

145.  ### Deklaratsiyalarni yuqorida saqlashning qanday afzalliklari bor

      Barcha deklaratsiyalarni har bir skript yoki funksiyaning yuqori qismida saqlash tavsiya etiladi. Buni amalga oshirishning afzalliklari,

      1.  Tozaroq kod beradi
      2.  Bu mahalliy o'zgaruvchilarni qidirish uchun yagona joyni ta'minlaydi
      3.  Keraksiz global o'zgaruvchilardan qochish oson
      4.  Bu istalmagan qayta deklaratsiyalar ehtimolini kamaytiradi

      **[⬆ Back to Top](#table-of-contents)**

146.  ### O'zgaruvchilarni ishga tushirishning(initialize) qanday afzalliklari bor

      Quyidagi imtiyozlar tufayli o'zgaruvchilarni ishga tushirish tavsiya etiladi,

      1.  Bu toza kodni beradi
      2.  U o'zgaruvchilarni ishga tushirish uchun yagona joyni taqdim etadi
      3.  Kodda aniqlanmagan qiymatlardan saqlaning

      **[⬆ Back to Top](#table-of-contents)**

147.  ### Yangi objekt yaratish uchun qanday tavsiyalar mavjud

      dan foydalangan holda yangi objektlar yaratishdan qochish tavsiya etiladi new Object(). Buning o'rniga objektlarni yaratish uchun uning turiga qarab qiymatlarni ishga tushirishingiz mumkin.

      1.  Yangi Object() oʻrniga {} ni belgilang
      2.  new String() o'rniga "" belgilang
      3.  Yangi raqam o'rniga 0 belgilang()
      4.  new Boolean() o'rniga yolg'onni belgilang
      5.  Yangi Array() oʻrniga [] ni belgilang
      6.  Yangi RegExp() oʻrniga /()/ ni belgilang
      7.  Yangi Function() oʻrniga (){} funksiyasini tayinlang

      Siz ularni misol sifatida belgilashingiz mumkin,

      ```javascript
      var v1 = {};
      var v2 = '';
      var v3 = 0;
      var v4 = false;
      var v5 = [];
      var v6 = /()/;
      var v7 = function () {};
      ```

      **[⬆ Back to Top](#table-of-contents)**

148.  ### JSON massivlarini qanday aniqlaysiz

      JSON massivlari kvadrat qavslar ichida yoziladi va massivlar javascript objektlarini o'z ichiga oladi. Masalan, foydalanuvchilarning JSON massivi quyidagi kabi bo'ladi

      ```javascript
      "users":[
        {"firstName":"John", "lastName":"Abrahm"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Shane", "lastName":"Warn"}
      ]
      ```

      **[⬆ Back to Top](#table-of-contents)**

149.  ### Tasodifiy butun sonlarni qanday yaratasiz

      Tasodifiy butun sonlarni qaytarish uchun Math.random() funksiyasini Math.floor() bilan ishlatishingiz mumkin. Misol uchun, agar siz 1 dan 10 gacha bo'lgan tasodifiy butun sonlarni yaratmoqchi bo'lsangiz, ko'paytirish koeffitsienti 10 bo'lishi kerak,

      ```javascript
      Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
      Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
      ```

      **Note:** Math.random() 0 (shu jumladan) va 1 (eksklyuziv) orasidagi tasodifiy sonni qaytaradi.

      **[⬆ Back to Top](#table-of-contents)**

150.  ### Butun sonlarni malum miqdor orasida chop etish uchun tasodifiy butun sonlar funksiyasini yoza olasizmi?with in a range

      Ha, siz min va maksimal o'rtasidagi tasodifiy sonni qaytarish uchun tegishli tasodifiy funktsiyani yaratishingiz mumkin (ikkalasi ham kiritilgan)

      ```javascript
      function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      randomInteger(1, 100); // returns a random integer from 1 to 100
      randomInteger(1, 1000); // returns a random integer from 1 to 1000
      ```

      **[⬆ Back to Top](#table-of-contents)**

151.  ### Tree shaking nima

      Daraxtning silkinishi o'lik kodni yo'q qilishning bir shaklidir. Bu shuni anglatadiki, foydalanilmagan modullar qurish jarayonida to'plamga kiritilmaydi va buning uchun u ES2015 modul sintaksisining statik tuzilishiga (ya'ni import va eksport) tayanadi. Dastlab bu ES2015 modul to'plami tomonidan ommalashgan rollup.

      **[⬆ Back to Top](#table-of-contents)**

152.  ### Tree shaking nima keragi bor

      Tree Shaking har qanday dasturda kod hajmini sezilarli darajada kamaytirishi mumkin. Ya'ni, biz sim orqali qancha kamroq kod yuborsak, dastur shunchalik samarali bo'ladi. Misol uchun, agar biz shunchaki SPA ramkalaridan foydalangan holda "Salom dunyo" ilovasini yaratmoqchi bo'lsak, u bir necha MB vaqtni oladi, lekin daraxtni silkitib, uning hajmini atigi bir necha yuz KBgacha kamaytirishi mumkin. Daraxtlarni silkitish Rollup va Webpack bundlerlarida amalga oshiriladi.

      **[⬆ Back to Top](#table-of-contents)**

153.  ### Eval dan foydalanish tavsiya etiladimi

      Yo'q, bu xavfsizlik muammosini keltirib chiqaradigan o'zboshimchalik kodini ishga tushirishga imkon beradi. Bizga ma'lumki, eval() funksiyasi matnni kod sifatida ishlatish uchun ishlatiladi. Ko'pgina hollarda, uni ishlatish shart emas.

      **[⬆ Back to Top](#table-of-contents)**

154.  ### Muntazam ifoda(regEx) nima ?

      Muntazam ibora qidiruv sxemasini tashkil etuvchi belgilar ketma-ketligidir. Matndagi ma'lumotlarni qidirish uchun ushbu qidiruv namunasidan foydalanishingiz mumkin. Bulardan matn qidirish va matnni almashtirish operatsiyalarining barcha turlarini bajarish uchun foydalanish mumkin. Keling, sintaksis formatini ko'rib chiqaylik,

      ```javascript
      /pattern/modifiers;
      ```

      Masalan, katta-kichik harflarga sezgir bo'lmagan foydalanuvchi nomi bilan muntazam ifoda yoki qidiruv namunasi:

      ```javascript
      /John/i;
      ```

      **[⬆ Back to Top](#table-of-contents)**

155.  ### Muntazam ifodada qanday string methods mavjud

      Muntazam ifodalarda ikkita string usuli mavjud: search() va replace(). Search() usuli moslikni qidirish uchun ifodadan foydalanadi va mos keladigan joyni qaytaradi.

      ```javascript
      var msg = 'Hello John';
      var n = msg.search(/John/i); // 6
      ```

      Replace() usuli naqsh almashtirilgan o'zgartirilgan satrni qaytarish uchun ishlatiladi.

      ```javascript
      var msg = 'Hello John';
      var n = msg.replace(/John/i, 'Buttler'); // Hello Buttler
      ```

      **[⬆ Back to Top](#table-of-contents)**

156.  ### Muntazam ifodadagi modifikatorlar nima

      Modifikatorlar katta-kichik va global qidiruvlarni amalga oshirish uchun ishlatilishi mumkin. Keling, ba'zi modifikatorlarni sanab o'tamiz,

      | Modifier | Description                                            |
      | -------- | ------------------------------------------------------ |
      | i        | Katta-kichik harflarni sezmaydigan moslikni bajaring   |
      | g        | Birinchi o'yinda to'xtamasdan, global o'yinni bajaring |
      | m        | Ko'p qatorli moslikni bajaring                         |

      Keling, global modifikatorga misol keltiraylik,

      ```javascript
      var text = 'Learn JS one by one';
      var pattern = /one/g;
      var result = text.match(pattern); // one,one
      ```

      **[⬆ Back to Top](#table-of-contents)**

157.  ### Muntazam ifoda naqshlari (patterns)nima

      Muntazam ifodalar belgilarni moslashtirish uchun naqshlar guruhini taqdim etadi. Asosan, ular 3 turga bo'linadi,

      1.  **Brackets:** Bu belgilar qatorini topish uchun ishlatiladi. Masalan, quyida ba'zi foydalanish holatlari keltirilgan,
          1. [abc]: Qavslar (a,b,c) orasidagi har qanday belgilarni topish uchun ishlatiladi.
          2. [0-9]: Qavslar orasidagi istalgan raqamlarni topish uchun ishlatiladi
          3. (a|b): | bilan ajratilgan har qanday muqobillarni topish uchun ishlatiladi
      2.  **Metacharacters:** Bular alohida ma'noga ega bo'lgan belgilar, Masalan, quyida ba'zi foydalanish holatlari,
          1. \\d: raqamni topish uchun ishlatiladi
          2. \\s: bo'shliq belgisini topish uchun ishlatiladi
          3. \\b: so'z boshida yoki oxirida moslikni topish uchun ishlatiladi
      3.  **Quantifiers:** Bu miqdorlarni aniqlash uchun foydalidir Masalan, quyida ba'zi foydalanish holatlari keltirilgan,
          1. n+: kamida bitta n ni o'z ichiga olgan har qanday satr uchun mosliklarni topish uchun ishlatiladi
          2. n\*: n ning nol yoki undan ortiq takrorlanishini o‘z ichiga olgan har qanday satr uchun mosliklarni topish uchun foydalaniladi.
          3. n?: n ning nol yoki bitta takrorlanishini o'z ichiga olgan har qanday satr uchun mosliklarni topish uchun ishlatiladi

      **[⬆ Back to Top](#table-of-contents)**

158.  ### RegExp obyekti nima

      RegExp objekti oldindan belgilangan xususiyatlar va usullarga ega muntazam ifoda objektidir. Keling, RegExp objektidan oddiy foydalanishni ko'rib chiqaylik,

      ```javascript
      var regexp = new RegExp('\\w+');
      console.log(regexp);
      // expected output: /\w+/
      ```

      **[⬆ Back to Top](#table-of-contents)**

159.  ### Patter(naqsh) uchun satrni qanday qidirasiz

      Siz naqsh uchun satrni izlash va natijaga qarab rost yoki yolgʻonni qaytarish uchun test() muntazam ifoda usulidan foydalanishingiz mumkin.

      ```javascript
      var pattern = /you/;
      console.log(pattern.test('How are you?')); //true
      ```

      **[⬆ Back to Top](#table-of-contents)**

160.  ### Exec usulining maqsadi nima

      Exec usulining maqsadi test usuliga o'xshaydi, lekin u ko'rsatilgan satrda moslikni qidirishni amalga oshiradi va rost/noto'g'ri qaytarish o'rniga natija massivini yoki nullni qaytaradi.

      ```javascript
      var pattern = /you/;
      console.log(pattern.exec('How are you?')); //["you", index: 8, input: "How are you?", groups: undefined]
      ```

      **[⬆ Back to Top](#table-of-contents)**

161.  ### HTML elementining stilini qanday o'zgartirish mumkin

      HTML elementining ichki uslubi yoki sinf nomini JavaScript yordamida o'zgartirishingiz mumkin

      1.  **Using style property:** Inline uslubini uslub xususiyatidan foydalanib o'zgartirishingiz mumkin

      ```javascript
      document.getElementById('title').style.fontSize = '30px';
      ```

      1.  **Using ClassName property:**className xususiyatidan foydalanib, element sinfini o'zgartirish oson

      ```javascript
      document.getElementById('title').className = 'custom-title';
      ```

      **[⬆ Back to Top](#table-of-contents)**

162.  ### '1+2+'3' natijasi qanday bo'ladi

      Chiqish bo'ladi 33. Raqamli qiymatlar bo'lganligi sababli 1, 2birinchi ikki raqamning natijasi raqamli qiymat bo'ladi 3. Keyingi raqam qator tipidagi qiymatdir, chunki raqamli qiymat 3va satr turi qiymatining qo'shilishi 3faqat birlashtiruvchi qiymat bo'ladi 33.

      **[⬆ Back to Top](#table-of-contents)**

163.  ### Debbuger statment nima ?

      Nosozliklarni tuzatuvchi bayonot to'xtash nuqtasini o'rnatish kabi har qanday mavjud disk raskadrovka funksiyasini chaqiradi. Agar nosozliklarni tuzatish funksiyasi mavjud bo'lmasa, bu bayonot hech qanday ta'sir qilmaydi. Masalan, quyidagi funksiyada tuzatuvchi bayonoti kiritilgan. Shunday qilib, skript manbasidagi to'xtash nuqtasi kabi tuzatuvchi bayonotida bajarish to'xtatiladi.

      ```javascript
      function getProfile() {
        // code goes here
        debugger;
        // code goes here
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

164.  ### Nima maqsadda Breakpoinlar debugginda qolaniladi ?

      Nosozliklarni tuzatuvchi bayonot bajarilgandan so'ng va disk raskadrovka oynasi ochilgandan so'ng JavaScript kodida to'xtash nuqtalarini o'rnatishingiz mumkin. Har bir to'xtash nuqtasida JavaScript ishlashni to'xtatadi va sizga JavaScript qiymatlarini tekshirish imkonini beradi. Qiymatlarni tekshirgandan so'ng, o'ynash tugmasi yordamida kodning bajarilishini davom ettirishingiz mumkin.

      **[⬆ Back to Top](#table-of-contents)**

165.  ### Identifikator sifatida ajratilgan so'zlardan foydalansam bo'ladimi?

      Yo'q, siz ajratilgan so'zlarni o'zgaruvchilar, teglar, objektlar yoki funktsiyalar nomi sifatida ishlata olmaysiz. Keling, bitta oddiy misolni ko'rib chiqaylik,

      ```javascript
      var else = "hello"; // Uncaught SyntaxError: Unexpected token else
      ```

      **[⬆ Back to Top](#table-of-contents)**

166.  ### Mobil brauzerni qanday aniqlash mumkin ?

      Siz foydalanuvchining mobil qurilmani ko'rish yoki ko'rmasligiga qarab haqiqiy yoki noto'g'ri qiymatni qaytaradigan regexdan foydalanishingiz mumkin.

      ```javascript
      window.mobilecheck = function () {
        var mobileCheck = false;
        (function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            mobileCheck = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return mobileCheck;
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

167.  ### Regexpsiz mobil brauzerni qanday aniqlash mumkin ?

      Siz shunchaki qurilmalar ro'yxatini ko'rib chiqish va foydalanuvchi agenti biror narsaga mos kelishini tekshirish orqali mobil brauzerlarni aniqlashingiz mumkin. Bu RegExp-dan foydalanish uchun muqobil yechim,

      ```javascript
      function detectmob() {
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          return true;
        } else {
          return false;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

168.  ### JS yordamida tasvir(image) kengligi va balandligini qanday olish mumkin

      Javascript yordamida tasvirni dasturiy ravishda olishingiz va o'lchamlarni (kenglik va balandlik) tekshirishingiz mumkin.

      ```javascript
      var img = new Image();
      img.onload = function () {
        console.log(this.width + 'x' + this.height);
      };
      img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
      ```

      **[⬆ Back to Top](#table-of-contents)**

169.  ### Sinxron HTTP so'rovini qanday qilasiz

      Brauzerlar JavaScriptdan sinxron HTTP so'rovlarini amalga oshirish uchun ishlatilishi mumkin bo'lgan XMLHttpRequest obyektini taqdim etadi.

      ```javascript
      function httpGet(theUrl) {
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open('GET', theUrl, false); // false for synchronous request
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

170.  ### Asinxron HTTP so'rovini qanday qilasiz

      Brauzerlar XMLHttpRequest objektini taqdim etadi, undan JavaScriptdan 3-parametrni rost deb o'tkazish orqali asinxron HTTP so'rovlarini amalga oshirish uchun foydalanish mumkin.

      ```javascript
      function httpGetAsync(theUrl, callback) {
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.onreadystatechange = function () {
          if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
        };
        xmlHttp.open('GET', theUrl, true); // true for asynchronous
        xmlHttp.send(null);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

171.  ### Javascriptda sanani boshqa vaqt mintaqasiga qanday o'zgartirasiz

      Bir vaqt mintaqasidagi sanalarni boshqasiga aylantirish uchun toLocaleString() usulidan foydalanishingiz mumkin. Misol uchun, hozirgi sanani quyida keltirilgan Britaniya ingliz vaqt mintaqasiga aylantiramiz,

      ```javascript
      console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); //29/06/2019, 09:56:00
      ```

      **[⬆ Back to Top](#table-of-contents)**

172.  ### Oyna(window) hajmini olish uchun qanday xususiyatlardan foydalaniladi

      Oyna hajmini topish uchun siz innerWidth, innerHeight, clientWidth, clientHeight xususiyatlaridan, hujjat elementidan va hujjat tanasi obyektlaridan foydalanishingiz mumkin. Keling, oyna yoki hujjat hajmini hisoblash uchun ushbu xususiyatlarning kombinatsiyasidan foydalanamiz,

      ```javascript
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      var height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      ```

      **[⬆ Back to Top](#table-of-contents)**

173.  ### Javascriptda shartli operator nima

      Shartli (uchlik) operator uchta operandni qabul qiladigan yagona JavaScript operatori bo'lib, if operatorlari uchun yorliq vazifasini bajaradi.

      ```javascript
      var isAuthenticated = false;
      console.log(
        isAuthenticated ? 'Hello, welcome' : 'Sorry, you are not authenticated'
      ); //Sorry, you are not authenticated
      ```

      **[⬆ Back to Top](#table-of-contents)**

174.  ### Shartli operatorda nested ko’rinishni qo'llay olasizmi?

      Ha, zanjirni if ​​… else if … else if … else zanjiriga oʻxshash shartli operatorlarda qoʻllashingiz mumkin. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      function traceValue(someParam) {
        return condition1
          ? value1
          : condition2
          ? value2
          : condition3
          ? value3
          : value4;
      }

      // The above conditional operator is equivalent to:

      function traceValue(someParam) {
        if (condition1) {
          return value1;
        } else if (condition2) {
          return value2;
        } else if (condition3) {
          return value3;
        } else {
          return value4;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

175.  ### Sahifani yuklagandan so'ng javascriptni yurgazish usullari qanday?

      Sahifani yuklagandan so'ng JavaScript-ni turli yo'llar bilan bajarishingiz mumkin,

      1.  **window.onload:**

      ```javascript
      window.onload = function ...
      ```

      1.  **document.onload:**

      ```javascript
      document.onload = function ...
      ```

      1.  **body onload:**

      ```javascript
      <body onload="script();">
      ```

      **[⬆ Back to Top](#table-of-contents)**

176.  ### Proto va prototip o'rtasidagi farq nima

      Objekt - bu `__proto__` qidirish zanjirida usullarni va hokazolarni hal qilish uchun ishlatiladigan haqiqiy objekt. Holbuki , yangi objekt bilan objekt yaratishda prototypequrish uchun foydalaniladigan objekt. `__proto__`

      ```javascript
      new Employee().__proto__ === Employee.prototype;
      new Employee().prototype === undefined;
      ```

      **[⬆ Back to Top](#table-of-contents)**

177.  ### Sizga nuqtali vergul kerak bo'lgan misol keltiring

      JavaScriptdagi har bir bayonotdan keyin nuqta-vergul qo'yish tavsiya etiladi. Misol uchun, quyidagi holatda nuqtali vergul yo'qligi sababli ish vaqtida ".. bu funktsiya emas" xatosini chiqaradi.

      ```javascript
      // define a function
      var fn = (function () {
        //...
      })(
        // semicolon missing at this line

        // then execute some code inside a closure
        function () {
          //...
        }
      )();
      ```

      and it will be interpreted as

      ```javascript
      var fn = (function () {
        //...
      })(function () {
        //...
      })();
      ```

      Bunday holda, biz ikkinchi funktsiyani birinchi funktsiyaga argument sifatida o'tkazamiz va keyin birinchi funktsiya chaqiruvining natijasini funktsiya sifatida chaqirishga harakat qilamiz. Demak, ikkinchi funksiya ish vaqtida "... funksiya emas" xatosi bilan ishlamay qoladi.

      **[⬆ Back to Top](#table-of-contents)**

178.  ### Freeze usuli nima

      objektni muzlatish uchun freeze() usuli qo'llaniladi. objektni muzlatish objektga yangi xususiyatlar qo'shishga imkon bermaydi, mavjud xususiyatlarning sanab o'tishini, sozlanishini yoki yozilishini o'chirishni va o'zgartirishni oldini oladi. ya'ni, u o'tgan objektni qaytaradi va muzlatilgan nusxani yaratmaydi.

      ```javascript
      const obj = {
        prop: 100,
      };

      Object.freeze(obj);
      obj.prop = 200; // Throws an error in strict mode

      console.log(obj.prop); //100
      ```

      **Note:** Agar o'tkazilgan argument objekt bo'lmasa, u TypeErrorni keltirib chiqaradi.

      **[⬆ Back to Top](#table-of-contents)**

179.  ### Muzlatish usulidan maqsad nima

      Quyida muzlatish usulidan foydalanishning asosiy afzalliklari keltirilgan,

      1.  U objektlar va massivlarni muzlatish uchun ishlatiladi.
      2.  U objektni o'zgarmas qilish uchun ishlatiladi.

      **[⬆ Back to Top](#table-of-contents)**

180.  ### Nima uchun muzlatish usulidan foydalanishim kerak

      objektga yo'naltirilgan paradigmada mavjud API mavjud kontekstdan tashqari kengaytirilishi, o'zgartirilishi yoki qayta ishlatilishi mo'ljallanmagan ayrim elementlarni o'z ichiga oladi. Shuning uchun u finalturli tillarda ishlatiladigan kalit so'z sifatida ishlaydi.

      **[⬆ Back to Top](#table-of-contents)**

181.  ### Brauzer tilini afzal ko'rishni qanday aniqlash mumkin

      Quyidagi kabi brauzer tilini afzal ko'rish uchun navigator objektidan foydalanishingiz mumkin,

      ```javascript
      var language =
        (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
        navigator.language || // All browsers
        navigator.userLanguage; // IE <= 10

      console.log(language);
      ```

      **[⬆ Back to Top](#table-of-contents)**

182.  ### Qanday qilib javascript yordamida stringni sarlavha(title) kattaligiga aylantirish mumkin

      Sarlavha har bir so'zning birinchi harfi bosh harf bilan yozilishini anglatadi. Quyidagi funksiyadan foydalanib, satrni sarlavha holatiga aylantirishingiz mumkin,

      ```javascript
      function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
      toTitleCase('good morning john'); // Good Morning John
      ```

      **[⬆ Back to Top](#table-of-contents)**

183.  ### Sahifada o'chirilgan(disabled) javascript sahifani qanday aniqlash mumkin

      <noscript> JavaScript o'chirilgan yoki o'chirilganligini aniqlash uchun tegdan foydalanishingiz mumkin . Ichki kod bloki <noscript> JavaScript o'chirilganida bajariladi va odatda sahifa JavaScriptda yaratilganda muqobil tarkibni ko'rsatish uchun ishlatiladi.

      ```javascript
      <script type="javascript">
          // JS related code goes here
      </script>
      <noscript>
          <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
      </noscript>
      ```

      **[⬆ Back to Top](#table-of-contents)**

184.  ### Javascript tomonidan qo'llab-quvvatlanadigan turli operatorlar nima

      Operator ma'lum bir qiymat yoki operandni (matematik va mantiqiy hisob-kitoblar) boshqarishga qodir. Quyidagi kabi JavaScript tomonidan qo'llab-quvvatlanadigan turli operatorlar mavjud,

      1.  **Arithmetic Operators:** + (Qo‘shish),– (ayirish), \* (ko‘paytirish), / (bo‘lish), % (modul), + + (ko‘paytirish) va – – (kamaytirish) ni o‘z ichiga oladi.
      2.  **Comparison Operators:** &&(Mantiqiy VA),||(Mantiqiy OR),!(Mantiqiy EMAS) ni oʻz ichiga oladi.
      3.  **Logical Operators:** &&(Mantiqiy VA),||(Mantiqiy OR),!(Mantiqiy EMAS) ni oʻz ichiga oladi.
      4.  **Assignment Operators:** o'z ichiga oladi: = (topshiriq operatori), += (qo'shish va tayinlash operatori), – = (ayirish va belgilash operatori), \*= (ko'paytirish va belgilash), /= (bo'lish va belgilash), %= (modullar va tayinlash )
      5.  **Ternary Operators:** U shartli(: ?) operatorni o'z ichiga oladi
      6.  **typeof Operator:** o'zgaruvchining turini topish uchun foydalaniladi. Sintaksis o'xshayditypeof variable

      **[⬆ Back to Top](#table-of-contents)**

185.  ### Rest parametri nima

      Rest parametri funksiya parametrlarini boshqarishning takomillashtirilgan usuli bo‘lib, u bizga cheksiz miqdordagi argumentlarni massiv sifatida ko‘rsatishga imkon beradi. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      function f(a, b, ...theArgs) {
        // ...
      }
      ```

      Masalan, parametrlarning dinamik soni bo'yicha hisoblash uchun yig'indi misolini olaylik,

      ```javascript
      function total(…args){
      let sum = 0;
      for(let i of args){
      sum+=i;
      }
      return sum;
      }
      console.log(fun(1,2)); //3
      console.log(fun(1,2,3)); //6
      console.log(fun(1,2,3,4)); //13
      console.log(fun(1,2,3,4,5)); //15
      ```

      **Note:** Rest parametri ES2015 yoki ES6 da qo'shilgan

      **[⬆ Back to Top](#table-of-contents)**

186.  ### Agar oxirgi argument sifatida Rest parametridan foydalanmasangiz nima bo'ladiargument

      Quyida JavaScriptda ishlatiladigan bitli mantiqiy operatorlar ro'yxati keltirilgan

      ```javascript
      function someFunc(a,…b,c){
      //You code goes here
      return;
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

187.  ### Javascriptda qanday bitli operatorlar mavjud

      Below are the list of bitwise logical operators used in JavaScript

      1. Bit boʻyicha VA ( & )
      2. Bit bo'yicha YOKI ( | )
      3. Bitwise XOR ( ^ )
      4. Bit yo'nalishi bo'yicha EMAS ( ~ )
      5. Chapga siljitish ( << )
      6. O'ngga siljish ( >> )
      7. Nol toʻldirish Oʻngga siljish ( >>> )

      **[⬆ Back to Top](#table-of-contents)**

188.  ### Spread operatori nima

      Spread operatori takrorlanuvchilarni (massivlar / objektlar / satrlar) bitta argumentlar / elementlarga kengaytirilishiga imkon beradi. Keling, bu xatti-harakatni ko'rish uchun misol keltiraylik,

      ```javascript
      function calculateSum(x, y, z) {
        return x + y + z;
      }

      const numbers = [1, 2, 3];

      console.log(calculateSum(...numbers)); // 6
      ```

      **[⬆ Back to Top](#table-of-contents)**

189.  ### objektning muzlatilgan yoki muzlatilmaganligini qanday aniqlash mumkin

      Object.isFrozen() usuli objektning muzlatilgan yoki muzlatilmaganligini aniqlash uchun ishlatiladi. Agar quyidagi shartlarning barchasi to'g'ri bo'lsa, objekt muzlatilgan hisoblanadi,

      1.  Agar u kengaytirilmaydigan bolsa (not extandable).
      2.  Agar uning barcha xususiyatlari konfiguratsiya qilinmasa.
      3.  Agar uning barcha ma'lumotlar xususiyatlari yozilmaydigan bo'lsa. Foydalanish quyidagicha bo'ladi,

      ```javascript
      const object = {
        property: 'Welcome JS world',
      };
      Object.freeze(object);
      console.log(Object.isFrozen(object));
      ```

      **[⬆ Back to Top](#table-of-contents)**

190.  ### Bir xil yoki objektdan foydalanmayotgan ikkita qiymatni qanday aniqlash mumkin

      Object.is() usuli ikkita qiymat bir xil qiymat ekanligini aniqlaydi. Misol uchun, har xil turdagi qiymatlar bilan foydalanish,

      ```javascript
      Object.is('hello', 'hello'); // true
      Object.is(window, window); // true
      Object.is([], []); // false
      ```

      Quyidagilardan biri bajarilsa, ikkita qiymat bir xil bo'ladi:

      1.  both undefined
      2.  both null
      3.  both true or both false
      4.  both strings of the same length with the same characters in the same order
      5.  both the same object (means both object have same reference)
      6.  both numbers and
          both +0
          both -0
          both NaN
          both non-zero and both not NaN and both have the same value.

      **[⬆ Back to Top](#table-of-contents)**

191.  ### objektni ishlatishdan maqsad - bu usul

      Objekt isusulining ba'zi ilovalari quyidagilardir:

      1.  It is used for comparison of two strings.
      2.  It is used for comparison of two numbers.
      3.  It is used for comparing the polarity of two numbers.
      4.  It is used for comparison of two objects.

      **[⬆ Back to Top](#table-of-contents)**

192.  ### Xususiyatlarni bir objektdan ikkinchisiga qanday nusxalash mumkin

      Bir yoki bir nechta manba objektlaridan maqsadli objektga qiymatlar va xususiyatlarni nusxalash uchun ishlatiladigan Object.assign() usulidan foydalanishingiz mumkin. U maqsadli objektdan ko'chirilgan xususiyatlar va qiymatlarga ega bo'lgan maqsadli objektni qaytaradi. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      Object.assign(target, ...sources);
      ```

      Keling, bitta manba va bitta maqsadli objekt bilan misol qilaylik,

      ```javascript
      const target = { a: 1, b: 2 };
      const source = { b: 3, c: 4 };

      const returnedTarget = Object.assign(target, source);

      console.log(target); // { a: 1, b: 3, c: 4 }

      console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
      ```

      Yuqoridagi kodda kuzatilganidek, bmanbadan maqsadgacha umumiy xususiyat( ) mavjud, shuning uchun uning qiymati qayta yozildi.

      **[⬆ Back to Top](#table-of-contents)**

193.  ### Tayinlash usuli qanday qo'llaniladi

      Quyida Object.assign() usulining asosiy ilovalari keltirilgan.

      1.  U objektni klonlash uchun ishlatiladi.
      2.  U bir xil xususiyatlarga ega objektlarni birlashtirish uchun ishlatiladi.

      **[⬆ Back to Top](#table-of-contents)**

194.  ### Proksi-server nima ?

      Proksi-server objekti mulkni qidirish, tayinlash, ro'yxatga olish, funktsiyani chaqirish va hokazo kabi asosiy operatsiyalar uchun maxsus xatti-harakatni aniqlash uchun ishlatiladi. Sintaksis quyidagicha bo'ladi:

      ```javascript
      var p = new Proxy(target, handler);
      ```

      Keling, proksi obyektiga misol keltiraylik,

      ```javascript
      var handler = {
        get: function (obj, prop) {
          return prop in obj ? obj[prop] : 100;
        },
      };

      var p = new Proxy({}, handler);
      p.a = 10;
      p.b = null;

      console.log(p.a, p.b); // 10, null
      console.log('c' in p, p.c); // false, 100
      ```

      Yuqoridagi kodda getproksi-serverda operatsiya bajarilganda uning xatti-harakatlarini belgilaydigan ishlov beruvchidan foydalanadi

      **[⬆ Back to Top](#table-of-contents)**

195.  ### Seal usulining maqsadi nima

      Object.seal () usuli objektga yangi xususiyatlar qo'shilishining oldini olish va barcha mavjud xususiyatlarni sozlanmaydigan qilib belgilash orqali uni muhrlash uchun ishlatiladi. Ammo mavjud xususiyatlarning qiymatlari yozilishi mumkin ekan, o'zgartirilishi mumkin. Seal() usuli haqida ko'proq tushunish uchun quyidagi misolni ko'rib chiqaylik

      ```javascript
      const object = {
        property: 'Welcome JS world',
      };
      Object.seal(object);
      object.property = 'Welcome to object world';
      console.log(Object.isSealed(object)); // true
      delete object.property; // You cannot delete when sealed
      console.log(object.property); //Welcome to object world
      ```

      **[⬆ Back to Top](#table-of-contents)**

196.  ### Seal usuli qanday qo'llaniladi

      Quyida Object.seal() usulining asosiy ilovalari keltirilgan,

      1.  U objektlar va massivlarni muhrlash uchun ishlatiladi.
      2.  U objektni o'zgarmas qilish uchun ishlatiladi.

      **[⬆ Back to Top](#table-of-contents)**

197.  ### Freeze va Seal usullari o'rtasidagi farqlar qanday

      Agar objekt Object.freeze() usuli yordamida muzlatilgan bo'lsa, uning xususiyatlari o'zgarmas bo'lib qoladi va ularda hech qanday o'zgartirishlar kiritilmaydi, objekt Object.seal() usuli yordamida muhrlangan bo'lsa, o'zgarishlar mavjud xususiyatlarda amalga oshirilishi mumkin. objektning.

      **[⬆ Back to Top](#table-of-contents)**

198.  ### objektning muhrlangan yoki yo'qligini qanday aniqlash mumkin

      Objekt muhrlangan yoki muhrlanmaganligini aniqlash uchun Object.isSealed() usuli qo'llaniladi. Agar quyidagi shartlarning barchasi to'g'ri bo'lsa, objekt muhrlangan hisoblanadi

      1.  If it is not extensible.
      2.  If all of its properties are non-configurable.
      3.  If it is not removable (but not necessarily non-writable).
          Let's see it in the action

      ```javascript
      const object = {
        property: 'Hello, Good morning',
      };

      Object.seal(object); // Using seal() method to seal the object

      console.log(Object.isSealed(object)); // checking whether the object is sealed or not
      ```

      **[⬆ Back to Top](#table-of-contents)**

199.  ### Qanday qilib sanab boladigan (enumerable) kalit va qiymat juftlarini olasiz

      Object.entries() usuli ma'lum bir objektning o'z sanab bo'ladigan qatorli kalitli [kalit, qiymat] juftliklari massivini for...in siklida taqdim etilgan tartibda qaytarish uchun ishlatiladi. Misolda object.entries() usulining funksionalligini ko'rib chiqamiz,

      ```javascript
      const object = {
        a: 'Good morning',
        b: 100,
      };

      for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`); // a: 'Good morning'
        // b: 100
      }
      ```

      **Note:** The order is not guaranteed as object defined.

      **[⬆ Back to Top](#table-of-contents)**

200.  ### Object.values ​​va Object.entries usuli o'rtasidagi asosiy farq nimaentries method

      Object.values() usulining xatti-harakati Object.entries() usuliga o'xshaydi, lekin u [kalit, qiymat] juftlari o'rniga qiymatlar qatorini qaytaradi.

      ```javascript
      const object = {
        a: 'Good morning',
        b: 100,
      };

      for (let value of Object.values(object)) {
        console.log(`${value}`); // 'Good morning'
        100;
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

201.  ### Har qanday objektning kalitlari ro'yxatini qanday olishingiz mumkin

      Siz Object.keys()ma'lum bir objektning o'z mulk nomlari massivini qaytarish uchun ishlatiladigan usuldan, biz odatdagi tsikl bilan bir xil tartibda foydalanishingiz mumkin. Masalan, siz foydalanuvchi objektining kalitlarini olishingiz mumkin,

      ```javascript
      const user = {
        name: 'John',
        gender: 'male',
        age: 40,
      };

      console.log(Object.keys(user)); //['name', 'gender', 'age']
      ```

      **[⬆ Back to Top](#table-of-contents)**

202.  ### Prototip bilan objektni qanday yaratasiz

      Object.create() usuli ko'rsatilgan prototip objekti va xususiyatlariga ega yangi objektni yaratish uchun ishlatiladi. Ya'ni, yangi yaratilgan objektning prototipi sifatida mavjud objektdan foydalanadi. Belgilangan prototip objekti va xususiyatlari bilan yangi objektni qaytaradi.

      ```javascript
      const user = {
        name: 'John',
        printInfo: function () {
          console.log(`My name is ${this.name}.`);
        },
      };

      const admin = Object.create(user);

      admin.name = 'Nick'; // Remember that "name" is a property set on "admin" but not on "user" object

      admin.printInfo(); // My name is Nick
      ```

      **[⬆ Back to Top](#table-of-contents)**

203.  ### Weakset nima

      WeakSet zaif (zaif havolalar) saqlanadigan objektlar to'plamini saqlash uchun ishlatiladi. Sintaksis quyidagicha bo'ladi:

      ```javascript
      new WeakSet([iterable]);
      ```

      Uning xatti-harakatini tushuntirish uchun quyidagi misolni ko'rib chiqaylik,

      ```javascript
      var ws = new WeakSet();
      var user = {};
      ws.add(user);
      ws.has(user); // true
      ws.delete(user); // removes user from the set
      ws.has(user); // false, user has been removed
      ```

      **[⬆ Back to Top](#table-of-contents)**

204.  ### WeakSet va Set o'rtasidagi farqlar qanday

      Asosiy farq shundaki, Set-dagi objektlarga havolalar kuchli, WeakSet-dagi objektlarga havolalar zaif. Ya'ni, WeakSet-dagi objektga boshqa havola bo'lmasa, axlat yig'ilishi mumkin. Boshqa farqlar,

      1.  To'plamlar har qanday qiymatni saqlashi mumkin, WeakSets esa faqat objektlar to'plamini saqlashi mumkin
      2.  WeakSet Setdan farqli o'laroq o'lcham xususiyatiga ega emas
      3.  WeakSet-da aniq, kalitlar, qiymatlar, yozuvlar, forEach kabi usullar mavjud emas.
      4.  WeakSet takrorlanmaydi.

      **[⬆ Back to Top](#table-of-contents)**

205.  ### WeakSet-da mavjud usullar to'plamini sanab o'ting

      Quyida WeakSet-da mavjud usullar ro'yxati keltirilgan,

      1.  Quyida WeakSet-da mavjud usullar ro'yxati keltirilgan,
      2.  Delete(value): Qiymatni WeakSet to'plamidan o'chiradi.
      3.  has(value): Agar qiymat WeakSet to'plamida mavjud bo'lsa, u haqiqatni qaytaradi, aks holda u noto'g'ri qaytaradi.

      Keling, yuqoridagi barcha usullarning funksionalligini misolda ko'rib chiqaylik,

      ```javascript
      var weakSetObject = new WeakSet();
      var firstObject = {};
      var secondObject = {};
      // add(value)
      weakSetObject.add(firstObject);
      weakSetObject.add(secondObject);
      console.log(weakSetObject.has(firstObject)); //true
      weakSetObject.delete(secondObject);
      ```

      **[⬆ Back to Top](#table-of-contents)**

206.  ### WeakMap nima

      WeakMap objekti - bu kalitlarga zaif havola qilingan kalit/qiymat juftliklari to'plami. Bunday holda, kalitlar objektlar bo'lishi kerak va qiymatlar ixtiyoriy qiymatlar bo'lishi mumkin. Sintaksis quyidagi kabi ko'rinadi,

      ```javascript
      new WeakMap([iterable]);
      ```

      Uning xatti-harakatini tushuntirish uchun quyidagi misolni ko'rib chiqaylik,

      ```javascript
      var ws = new WeakMap();
      var user = {};
      ws.set(user);
      ws.has(user); // true
      ws.delete(user); // removes user from the map
      ws.has(user); // false, user has been removed
      ```

      **[⬆ Back to Top](#table-of-contents)**

207.  ### WeakMap va Map o'rtasidagi farqlar qanday

      Asosiy farq shundaki, Map-dagi asosiy objektlarga havolalar kuchli, WeakMap-dagi asosiy objektlarga havolalar zaif. Ya'ni, WeakMap'dagi asosiy objekt, agar unga boshqa havola bo'lmasa, axlat yig'ilishi mumkin. Boshqa farqlar,

      1.  Xaritalar har qanday kalit turini saqlashi mumkin, WeakMaps esa faqat asosiy objektlar to'plamini saqlashi mumkin
      2.  WeakMap xaritadan farqli o'laroq o'lcham xususiyatiga ega emas
      3.  WeakMap-da aniq, kalitlar, qiymatlar, yozuvlar, forEach kabi usullar mavjud emas.
      4.  WWeakMap takrorlanmaydi.

      **[⬆ Back to Top](#table-of-contents)**

208.  ### WeakMap-da mavjud usullar to'plamini sanab o'ting

      Quyida WeakMap-da mavjud usullar ro'yxati keltirilgan,

      1.  set(kalit, qiymat): WeakMap obyektidagi kalit uchun qiymatni o'rnatadi. WeakMap obyektini qaytaradi.
      2.  o'chirish (kalit): Kalit bilan bog'liq har qanday qiymatni o'chiradi.
      3.  has(key): Qiymat WeakMap obyektidagi kalit bilan bog‘langan yoki bog‘lanmaganligini tasdiqlovchi mantiqiy qiymatni qaytaradi.
      4.  get(key): Kalit bilan bog'langan qiymatni qaytaradi yoki agar mavjud bo'lmasa, aniqlanmagan.
          Keling, yuqoridagi barcha usullarning funksionalligini misolda ko'rib chiqaylik,

      ```javascript
      var weakMapObject = new WeakMap();
      var firstObject = {};
      var secondObject = {};
      // set(key, value)
      weakMapObject.set(firstObject, 'John');
      weakMapObject.set(secondObject, 100);
      console.log(weakMapObject.has(firstObject)); //true
      console.log(weakMapObject.get(firstObject)); // John
      weakMapObject.delete(secondObject);
      ```

      **[⬆ Back to Top](#table-of-contents)**

209.  ### Unevaldan maqsad nima

      uneval() o'rnatilgan funksiya bo'lib, u objekt manba kodining satrli tasvirini yaratish uchun ishlatiladi. Bu yuqori darajadagi funksiya va hech qanday objekt bilan bog'lanmagan. Uning funksionalligi haqida ko'proq bilish uchun quyidagi misolni ko'rib chiqaylik,

      ```javascript
      var a = 1;
      uneval(a); // returns a String containing 1
      uneval(function user() {}); // returns "(function user(){})"
      ```

      **[⬆ Back to Top](#table-of-contents)**

210.  ### URL manzilini qanday kodlash(encode) mumkin

      EncodeURI() funksiyasi (, / ? : @ & = + $ #) belgilardan tashqari maxsus belgilarga ega boʻlgan toʻliq URI kodini kodlash uchun ishlatiladi.

      ```javascript
      var uri = 'https://mozilla.org/?x=шеллы';
      var encoded = encodeURI(uri);
      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
      ```

      **[⬆ Back to Top](#table-of-contents)**

211.  ### URLni qanday dekodlash(decode) mumkin

      DecodeURI() funksiyasi avval encodeURI() tomonidan yaratilgan Yagona Resurs Identifikatorini (URI) dekodlash uchun ishlatiladi.

      ```javascript
      var uri = 'https://mozilla.org/?x=шеллы';
      var encoded = encodeURI(uri);
      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
      try {
        console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
      } catch (e) {
        // catches a malformed URI
        console.error(e);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

212.  ### Veb-sahifa matini qanday chop qilasiz

      Oyna obyekti joriy oynaning mazmunini chop etish uchun ishlatiladigan print() usulini taqdim etdi. U turli xil chop etish opsiyalaridan birini tanlash imkonini beruvchi Chop etish dialog oynasini ochadi. Misolda chop etish usulidan foydalanishni ko'rib chiqaylik,

      ```html
      <input type="button" value="Print" onclick="window.print()" />
      ```

      **Note:** Ko'pgina brauzerlarda chop etish dialog oynasi ochiq bo'lsa, u bloklanadi.

      **[⬆ Back to Top](#table-of-contents)**

213.  ### Uneval va eval o'rtasidagi farq nima

      Funktsiya unevalberilgan objektning manbasini qaytaradi; Holbuki, evalfunktsiya bu manba kodini boshqa xotira sohasida baholash orqali aksincha qiladi. Farqni aniqlashtirish uchun misolni ko'rib chiqaylik,

      ```javascript
      var msg = uneval(function greeting() {
        return 'Hello, Good morning';
      });
      var greeting = eval(msg);
      greeting(); // returns "Hello, Good morning"
      ```

      **[⬆ Back to Top](#table-of-contents)**

214.  ### Anonim(anonymous) funksiya nima

      Anonim funksiya - bu nomsiz funksiya! Anonim funktsiyalar odatda o'zgaruvchi nomiga tayinlanadi yoki callback funktsiyasi sifatida ishlatiladi. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      function (optionalParameters) {
        //do something
      }

      const myFunction = function(){ //Anonymous function assigned to a variable
        //do something
      };

      [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
        //do something
      });
      ```

      Keling, yuqoridagi anonim funktsiyani misolda ko'rib chiqaylik,

      ```javascript
      var x = function (a, b) {
        return a * b;
      };
      var z = x(5, 10);
      console.log(z); // 50
      ```

      **[⬆ Back to Top](#table-of-contents)**

215.  ### Mahalliy va global o'zgaruvchilar o'rtasidagi ustuvorlik tartibi qandayvariables

      Mahalliy o'zgaruvchi bir xil nomdagi global o'zgaruvchidan ustun turadi. Keling, bu xatti-harakatni misolda ko'rib chiqaylik.

      ```javascript
      var msg = 'Good morning';
      function greeting() {
        msg = 'Good Evening';
        console.log(msg);
      }
      greeting();
      ```

      **[⬆ Back to Top](#table-of-contents)**

216.  ### JavaScript kirish elementlari nima ?

      ECMAScript 5 getter va setterlar orqali javascript objektiga kirish yoki hisoblangan xususiyatlarni taqdim etdi. Getters getkalit so'zdan foydalanadi, Setters esa kalit so'zdan foydalanadi set.

      ```javascript
      var user = {
        firstName: "John",
        lastName : "Abraham",
        language : "en",
        get lang() {
          return this.language;
        }
        set lang(lang) {
        this.language = lang;
        }
      };
      console.log(user.lang); // getter access lang as en
      user.lang = 'fr';
      console.log(user.lang); // setter used to set lang as fr
      ```

      **[⬆ Back to Top](#table-of-contents)**

217.  ### Objekt konstruktorida xususiyatni qanday aniqlash mumkin

      Object.defineProperty() statik usuli to'g'ridan-to'g'ri objektda yangi xususiyatni aniqlash yoki objektdagi mavjud xususiyatni o'zgartirish uchun ishlatiladi va objektni qaytaradi. Mulkni qanday aniqlashni bilish uchun misolni ko'rib chiqaylik,

      ```javascript
      const newObject = {};

      Object.defineProperty(newObject, 'newProperty', {
        value: 100,
        writable: false,
      });

      console.log(newObject.newProperty); // 100

      newObject.newProperty = 200; // It throws an error in strict mode due to writable setting
      ```

      **[⬆ Back to Top](#table-of-contents)**

218.  ### Get va defineProperty o'rtasidagi farq nima ?

      Classlardan foydalanmaguningizcha ikkalasi ham xuddi shunday natijalarga ega. Agar siz foydalansangiz get, xususiyat objektning prototipida aniqlanadi, Object.defineProperty()xususiyatdan foydalanish esa u qo'llaniladigan misolda aniqlanadi.

      **[⬆ Back to Top](#table-of-contents)**

219.  ### Getters va Settersning afzalliklari nimada

      Quyida Getters va Setters afzalliklari ro'yxati keltirilgan,

      1. Ular oddiyroq sintaksisni ta'minlaydi
      2. Ular JSda hisoblangan xususiyatlarni yoki yordamchilarni aniqlash uchun ishlatiladi.
      3. Xususiyatlar va usullar o'rtasidagi ekvivalentlik munosabatini ta'minlash uchun foydalidir
      4. Ular yaxshiroq ma'lumot sifatini ta'minlashi mumkin
      5. Kapsüllangan mantiq bilan sahna ortida narsalarni qilish uchun foydalidir.

      **[⬆ Back to Top](#table-of-contents)**

220.  ### DefineProperty usuli yordamida qabul qiluvchilar(getter) va sozlagichlarni(setter) qo'shishim mumkinmi

      Ha, siz Object.defineProperty()Getters va Setters qo'shish uchun usuldan foydalanishingiz mumkin. Masalan, quyidagi hisoblagich objekti oshirish, kamaytirish, qo'shish va ayirish xususiyatlaridan foydalanadi,

      ```javascript
      var obj = { counter: 0 };

      // Define getters
      Object.defineProperty(obj, 'increment', {
        get: function () {
          this.counter++;
        },
      });
      Object.defineProperty(obj, 'decrement', {
        get: function () {
          this.counter--;
        },
      });

      // Define setters
      Object.defineProperty(obj, 'add', {
        set: function (value) {
          this.counter += value;
        },
      });
      Object.defineProperty(obj, 'subtract', {
        set: function (value) {
          this.counter -= value;
        },
      });

      obj.add = 10;
      obj.subtract = 5;
      console.log(obj.increment); //6
      console.log(obj.decrement); //5
      ```

      **[⬆ Back to Top](#table-of-contents)**

221.  ### Switch-case ni ishlatishdan maqsad nima

      JavaScriptdagi switch case bayonoti qaror qabul qilish uchun ishlatiladi. Ba'zi hollarda switch case bayonotidan foydalanish if-else iboralariga qaraganda qulayroq bo'ladi. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      switch (expression)
      {
          case value1:
              statement1;
              break;
          case value2:
              statement2;
              break;
          .
          .
          case valueN:
              statementN;
              break;
          default:
              statementDefault;
      }
      ```

      Yuqoridagi ko'p tomonlama filial bayonoti ifoda qiymatiga asoslangan kodning turli qismlariga bajarilishini jo'natishning oson yo'lini taqdim etadi.

      **[⬆ Back to Top](#table-of-contents)**

222.  ### Switch casedan foydalanishda qanday qoidalarga rioya qilish kerakswitch case

      Quyida e'tiborga olinishi kerak bo'lgan konventsiyalar ro'yxati keltirilgan.

      1.  Ifoda raqam yoki satr turi bo'lishi mumkin.
      2.  Ifoda uchun takroriy qiymatlarga ruxsat berilmaydi.
      3.  Standart bayonot ixtiyoriy. Agar kommutatorga uzatilgan ifoda hech qanday registr qiymatiga mos kelmasa, u holda birlamchi holat ichidagi bayonot bajariladi.
      4.  Break iborasi kommutator ichida gaplar ketma-ketligini tugatish uchun ishlatiladi.
      5.  Break bayonoti ixtiyoriy. Ammo agar u o'tkazib yuborilsa, ijro keyingi ishda davom etadi.

      **[⬆ Back to Top](#table-of-contents)**

223.  ### Primitiv ma'lumotlar turlari nima ?


    Ibtidoiy ma'lumotlar turi - bu ibtidoiy qiymatga ega bo'lgan ma'lumotlar (uning xususiyatlari yoki usullari yo'q). 7 turdagi ibtidoiy ma'lumotlar turlari mavjud.

      1.  string
      2.  number
      3.  boolean
      4.  null
      5.  undefined
      6.  bigint
      7.  symbol

      **[⬆ Back to Top](#table-of-contents)**

224.  ### Objekt xususiyatlariga kirishning turli usullari qanday

      Objekt xususiyatiga kirishning 3 ta mumkin bo'lgan usuli mavjud.

      1.  **Dot notation:** Xususiyatlarga kirish uchun nuqtadan foydalanadi

      ```javascript
      objectName.property;
      ```

      1.  **Square brackets notation:** mulkka kirish uchun kvadrat qavslardan foydalanadi

      ```javascript
      objectName['property'];
      ```

      1.  **Expression notation:** U kvadrat qavs ichidagi ifodadan foydalanadi

      ```javascript
      objectName[expression];
      ```

      **[⬆ Back to Top](#table-of-contents)**

225.  ### Funksiya parametrlari qoidalari qanday

      JavaScript funksiyalari parametrlar uchun quyidagi qoidalarga amal qiladi,

      1.  Funktsiya ta'riflari parametrlar uchun ma'lumotlar turlarini aniqlamaydi.
      2.  O'tkazilgan argumentlar turini tekshirishni amalga oshirmang.
      3.  Qabul qilingan argumentlar sonini tekshirmang. ya'ni, quyidagi funktsiya yuqoridagi qoidalarga amal qiladi,

      ```javascript
      function functionName(parameter1, parameter2, parameter3) {
        console.log(parameter1); // 1
      }
      functionName(1);
      ```

      **[⬆ Back to Top](#table-of-contents)**

226.  ### Xato obyekti(error object) nima

      Xato objekti xatolik yuzaga kelganda xato haqida ma'lumot beruvchi o'rnatilgan xato objektidir. U ikkita xususiyatga ega: ism va xabar. Masalan, quyidagi funksiya xato tafsilotlarini qayd qiladi,

      ```javascript
      try {
        greeting('Welcome');
      } catch (err) {
        console.log(err.name + '<br>' + err.message);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

227.  ### Sintaksis xatosiga duch kelganingizda

      Sintaksis xatosi bilan kodni baholashga harakat qilsangiz, SyntaxError chiqariladi. Misol uchun, funktsiya parametri uchun quyida etishmayotgan tirnoq sintaksis xatosini keltirib chiqaradi

      ```javascript
      try {
        eval("greeting('welcome)"); // Missing ' will produce an error
      } catch (err) {
        console.log(err.name);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

228.  ### Xato obyektidan farqli xato nomlari qanday

      Xato obyektidan qaytarilgan 6 xil turdagi xato nomlari mavjud,
      | Error Name | Description |
      |---- | ---------
      | EvalError | Eval() funksiyasida xatolik yuz berdi |
      | RangeError | Raqam “diapazondan tashqarida” xatolik yuz berdi |
      | ReferenceError | Noqonuniy havola tufayli xato|
      | SyntaxError | Sintaksis xatosi tufayli yuzaga kelgan xato|
      | TypeError | Tur xatosi tufayli yuzaga kelgan xato |
      | URIError | EncodeURI() tufayli xatolik |

      **[⬆ Back to Top](#table-of-contents)**

229.  ### Xatolarni hal qilishda qanday turli bayonotlar mavjud

      Quyida xatolarni qayta ishlashda ishlatiladigan bayonotlar ro'yxati keltirilgan,

      1.  **try:** Ushbu bayonot kod blokini xatolarni tekshirish uchun ishlatiladi
      2.  **catch:** Ushbu bayonot xatoni boshqarish uchun ishlatiladi
      3.  **throw:** Ushbu bayonot maxsus xatolar yaratish uchun ishlatiladi.
      4.  **finally:** Ushbu ibora natijadan qat'iy nazar try and catchdan keyin kodni bajarish uchun ishlatiladi.

      **[⬆ Back to Top](#table-of-contents)**

230.  ### Javascriptda ikki turdagi looplar qanday?

      1.  **Entry Controlled loops:** Ushbu turdagi halqa turida sinov holati halqa tanasiga kirishdan oldin tekshiriladi. Masalan, For Loop va While Loop ushbu turkumga kiradi.
      2.  **Exit Controlled Loops:** bu turdagi halqa turida sinov holati halqa tanasining oxirida tekshiriladi yoki baholanadi. ya'ni, test sharti rost yoki noto'g'ri bo'lishidan qat'i nazar, pastadir tanasi kamida bir marta bajariladi. Masalan, do-while sikli ushbu turkumga kiradi.

      **[⬆ Back to Top](#table-of-contents)**

231.  ### nodejs nima

      Node.js tezkor va kengaytiriladigan tarmoq ilovalarini osongina yaratish uchun Chrome JavaScript ish vaqti asosida yaratilgan server tomoni platformasidir. Bu Google'ning V8 JavaScript dvigateli va libuv kutubxonasidan foydalanadigan voqealarga asoslangan, bloklanmagan, asinxron kiritish-chiqarish ish vaqti.

      **[⬆ Back to Top](#table-of-contents)**

232.  ### Intl objekti nima

      Intl objekti ECMAScript Internationalization API uchun nom maydoni bo'lib, u tilga sezgir qatorlarni taqqoslashni, raqamlarni formatlashni va sana va vaqtni formatlashni ta'minlaydi. U bir nechta konstruktorlar va tilga sezgir funktsiyalarga kirishni ta'minlaydi.

      **[⬆ Back to Top](#table-of-contents)**

233.  ### Tilga xos sana va vaqtni formatlashni qanday amalga oshirasiz

      Intl.DateTimeFormatTilga sezgir sana va vaqtni formatlashni ta'minlaydigan objektlar uchun konstruktor bo'lgan objektdan foydalanishingiz mumkin . Keling, bu xatti-harakatni misol bilan ko'rib chiqaylik,

      ```javascript
      var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
      console.log(new Intl.DateTimeFormat('en-GB').format(date)); // 07/08/2019
      console.log(new Intl.DateTimeFormat('en-AU').format(date)); // 07/08/2019
      ```

      **[⬆ Back to Top](#table-of-contents)**

234.  ### Iterator nima

      Iterator - bu ketma-ketlikni va uning tugashi bilan qaytariladigan qiymatni belgilaydigan objekt. U Iterator protokolini next()ikkita xususiyatga ega objektni qaytaradigan usul bilan amalga oshiradi: value(ketma-ketlikdagi keyingi qiymat) va done(agar ketma-ketlikdagi oxirgi qiymat iste'mol qilingan bo'lsa, bu to'g'ri bo'ladi).

      **[⬆ Back to Top](#table-of-contents)**

235.  ### Sinxron iteratsiya qanday ishlaydi

      Sinxron iteratsiya ES6 da joriy qilingan va u quyidagi komponentlar to'plami bilan ishlaydi,

      **Iterable:** Bu kaliti Symbol.iterator bo'lgan usul orqali takrorlanishi mumkin bo'lgan objekt.
      **Iterator:** Bu takrorlanadigan chaqiruv orqali qaytariladigan objekt [Symbol.iterator](). Ushbu iterator objekti har bir takrorlangan elementni objektga o'rab oladi va uni next()usul orqali birma-bir qaytaradi.
      **IteratorResult:** Bu usul bilan qaytarilgan objekt next(). objekt ikkita xususiyatni o'z ichiga oladi; valuexususiyat takrorlangan elementni o'z ichiga oladi va xususiyat doneelement oxirgi element yoki yo'qligini aniqlaydi.

      Keling, quyidagi kabi massiv bilan sinxron iteratsiyani namoyish qilaylik,

      ```javascript
      const iterable = ['one', 'two', 'three'];
      const iterator = iterable[Symbol.iterator]();
      console.log(iterator.next()); // { value: 'one', done: false }
      console.log(iterator.next()); // { value: 'two', done: false }
      console.log(iterator.next()); // { value: 'three', done: false }
      console.log(iterator.next()); // { value: 'undefined, done: true }
      ```

      **[⬆ Back to Top](#table-of-contents)**

236.  ### Hodisa sikli(event loop) nima

Voqealar davri - bu callback funktsiyalari navbati. Asinx funksiyasi bajarilganda, callback funktsiyasi navbatga suriladi. JavaScript mexanizmi asinxronizatsiya funksiyasi kodni bajarishni tugatmaguncha voqea siklini qayta ishlashni boshlamaydi. Eslatma: Bu Node.js-ga JavaScript-ning bir torli bo'lishiga qaramay, bloklanmagan kiritish-chiqarish operatsiyalarini bajarishga imkon beradi.

      **[⬆ Back to Top](#table-of-contents)**

237.  ### Call stack nima ?

      Call Stack - bu JavaScript tarjimonlari uchun dasturdagi funktsiya chaqiruvlarini kuzatib borish uchun ma'lumotlar tuzilmasi. Uning ikkita asosiy harakati bor,

      1.  Har safar funktsiyani bajarish uchun chaqirsangiz, uni stekga surasiz.
      2.  Bajarish tugallanganda, funktsiya stekdan chiqariladi.

      Keling, misol qilib olaylik va bu holatni diagramma formatida tasvirlash

      ```javascript
      function hungry() {
        eatFruits();
      }
      function eatFruits() {
        return "I'm eating fruits";
      }

      // Invoke the `hungry` function
      hungry();
      ```

      Yuqoridagi kod quyidagi kabi qo'ng'iroqlar to'plamida qayta ishlanadi,

      1.  `hungry()`ni call stack listga funksiyasiga qo'shing va kodni yurgazing.
      2.  `eatFruits()`ni call stack listga funksiyasiga qo'shing va kodni yurgazing.
      3.  `eatFruits()` funksiayni call stack listdan o'chirib tashlang.
      4.  `hungry()` funksiayni call stack listdan o'chirib tashlang chunki endi listda hech qanday malumot qolmadi.

      ![Screenshot](images/call-stack.png)

      **[⬆ Back to Top](#table-of-contents)**

238.  ### Hodisa navbati (event qoeue) nima

      **[⬆ Back to Top](#table-of-contents)**

239.  ### Dekorator nima

      Dekorator - bu funktsiyani baholovchi va maqsad, nom va dekorator deskriptorini argument sifatida qabul qiluvchi ifoda. Bundan tashqari, u ixtiyoriy ravishda maqsadli objektga o'rnatish uchun dekorativ identifikatorni qaytaradi. Dizayn vaqtida foydalanuvchi sinfi uchun administrator dekoratorini aniqlaymiz,

      ```javascript
      function admin(isAdmin) {
         return function(target) {
             target.isAdmin = isAdmin;
         }
      }

      @admin(true)
      class User() {
      }
      console.log(User.isAdmin); //true

       @admin(false)
       class User() {
       }
       console.log(User.isAdmin); //false
      ```

      **[⬆ Back to Top](#table-of-contents)**

240.  ### Intl obyektining xossalari(Intl object prop) qanday

      Quyida Intl objektida mavjud xususiyatlar ro'yxati keltirilgan,

      1.  **Collator:** Bular tilga sezgir satrlarni taqqoslash imkonini beruvchi objektlardir.
      2.  **DateTimeFormat:** Bular tilga sezgir sana va vaqtni formatlashni ta'minlaydigan objektlardir.
      3.  **ListFormat:** Bular tilga sezgir roʻyxat formatlash imkonini beruvchi obʼyektlardir.
      4.  **NumberFormat:** tilga sezgir raqamlarni formatlashni ta'minlaydigan objektlar.
      5.  **PluralRules:** ko'plikka sezgir formatlash va ko'plik uchun tilga xos qoidalarni faollashtiradigan objektlar.
      6.  **RelativeTimeFormat:** Tilga sezgir nisbiy vaqt formatlash imkonini beruvchi objektlar.

      **[⬆ Back to Top](#table-of-contents)**

241.  ### Unary operator nima

      Birlik(+) operator oʻzgaruvchini raqamga aylantirish uchun ishlatiladi.Agar oʻzgaruvchini oʻzgartirib boʻlmasa, u baribir raqamga aylanadi, lekin qiymati NaN. Keling, bu xatti-harakatni harakatda ko'rib chiqaylik.

      ```javascript
      var x = '100';
      var y = +x;
      console.log(typeof x, typeof y); // string, number

      var a = 'Hello';
      var b = +a;
      console.log(typeof a, typeof b, b); // string, number, NaN
      ```

      **[⬆ Back to Top](#table-of-contents)**

242.  ### Massivdagi elementlarni qanday saralaysiz

      Sort() usuli massiv elementlarini joyida tartiblash uchun ishlatiladi va tartiblangan massivni qaytaradi. Foydalanish misoli quyidagi kabi bo'ladi,

      ```javascript
      var months = ['Aug', 'Sep', 'Jan', 'June'];
      months.sort();
      console.log(months); //  ["Aug", "Jan", "June", "Sep"]
      ```

      **[⬆ Back to Top](#table-of-contents)**

243.  ### Massivlarni saralashda compareFunction nimadan iborat

      Tartiblash tartibini aniqlash uchun compareFunction funksiyasidan foydalaniladi. Agar o'tkazib yuborilsa, massiv elementlari satrlarga aylantiriladi, so'ngra har bir belgining Unicode kod nuqtasi qiymatiga ko'ra tartiblanadi. Keling, compareFunction dan foydalanishni ko'rish uchun misol keltiramiz,

      ```javascript
      let numbers = [1, 2, 5, 3, 4];
      numbers.sort((a, b) => b - a);
      console.log(numbers); // [5, 4, 3, 2, 1]
      ```

      **[⬆ Back to Top](#table-of-contents)**

244.  ### Massivni qanday teskari aylantirasiz

      Massivdagi minimal va maksimal elementlarni topish uchun massiv oʻzgaruvchilari Math.minva usullaridan foydalanishingiz mumkin . Math.maxMassivdagi min va maksimal qiymatlarni topish uchun ikkita funktsiya yarataylik,

      ```javascript
      let numbers = [1, 2, 5, 3, 4];
      numbers.sort((a, b) => b - a);
      numbers.reverse();
      console.log(numbers); // [1, 2, 3, 4 ,5]
      ```

      **[⬆ Back to Top](#table-of-contents)**

245.  ### Massivda minimal va maksimal qiymatlarni qanday topasiz

      Minimal va maksimal qiymatlarni topish uchun har bir qiymatni eng past yoki eng yuqori qiymat bilan solishtirgan holda massivda aylanib yuradigan funksiyalarni yozishingiz mumkin. Keling, minimal va maksimal qiymatlarni topish uchun ushbu funktsiyalarni yarataylik,

      ```javascript
      var marks = [50, 20, 70, 60, 45, 30];
      function findMin(arr) {
        return Math.min.apply(null, arr);
      }
      function findMax(arr) {
        return Math.max.apply(null, arr);
      }

      console.log(findMin(marks));
      console.log(findMax(marks));
      ```

      **[⬆ Back to Top](#table-of-contents)**

246.  ### Matematik funktsiyalarsiz min va maksimal qiymatlarni qanday topish mumkin

      Bo'sh bayonot nuqta-vergul (;) bo'lib, JavaScript sintaksisi talab qilsa ham, hech qanday bayonot bajarilmasligini bildiradi. Bo'sh bayonot bilan hech qanday harakat yo'qligi sababli siz undan kamroq foydalanish deb o'ylashingiz mumkin, ammo bo'sh ibora vaqti-vaqti bilan bo'sh tanaga ega bo'lgan tsikl yaratmoqchi bo'lganingizda foydali bo'ladi. Masalan, siz nol qiymatga ega massivni quyidagi tarzda ishga tushirishingiz mumkin,

      ```javascript
      var marks = [50, 20, 70, 60, 45, 30];
      function findMin(arr) {
        var length = arr.length;
        var min = Infinity;
        while (length--) {
          if (arr[length] < min) {
            min = arr[len];
          }
        }
        return min;
      }

      function findMax(arr) {
        var length = arr.length;
        var max = -Infinity;
        while (len--) {
          if (arr[length] > max) {
            max = arr[length];
          }
        }
        return max;
      }

      console.log(findMin(marks));
      console.log(findMax(marks));
      ```

      **[⬆ Back to Top](#table-of-contents)**

247.  ### Bo'sh statment nima va uning maqsadi

      Bo'sh bayonot nuqta-vergul (;) bo'lib, JavaScript sintaksisi talab qilsa ham, hech qanday bayonot bajarilmasligini bildiradi. Bo'sh bayonot bilan hech qanday harakat yo'qligi sababli siz undan kamroq foydalanish deb o'ylashingiz mumkin, ammo bo'sh ibora vaqti-vaqti bilan bo'sh tanaga ega bo'lgan tsikl yaratmoqchi bo'lganingizda foydali bo'ladi. Masalan, siz nol qiymatga ega massivni quyidagi tarzda ishga tushirishingiz mumkin,

      ```javascript
      // Initialize an array a
      for(int i=0; i < a.length; a[i++] = 0) ;
      ```

      **[⬆ Back to Top](#table-of-contents)**

248.  ### Modulning metama'lumotlarini qanday olish mumkin

      Siz import.metaJavaScript moduliga kontekstga xos meta-ma'lumotlarni ochib beruvchi meta-xususiyat bo'lgan objektdan foydalanishingiz mumkin. U modulning URL manzili kabi joriy modul haqidagi ma'lumotlarni o'z ichiga oladi. Brauzerlarda siz NodeJS-dan farqli meta-ma'lumotlarni olishingiz mumkin.

      ```javascript
      <script type='module' src='welcome-module.js'></script>;
      console.log(import.meta); // { url: "file:///home/user/welcome-module.js" }
      ```

      **[⬆ Back to Top](#table-of-contents)**

249.  ### Vergul operatori nima

      Vergul operatori uning har bir operandini chapdan o'ngga baholash uchun ishlatiladi va oxirgi operandning qiymatini qaytaradi. Bu massivlar, objektlar va funksiya argumentlari va parametrlarida verguldan foydalanishdan butunlay farq qiladi. Masalan, raqamli iboralar uchun foydalanish quyidagicha bo'ladi:

      ```javascript
      var x = 1;
      x = (x++, x);

      console.log(x); // 2
      ```

      **[⬆ Back to Top](#table-of-contents)**

250.  ### Vergul operatorining afzalligi nimada

      Odatda bitta ifodani talab qiladigan joyga bir nechta iboralarni kiritish uchun ishlatiladi. Ushbu vergul operatorining keng tarqalgan qo'llanilishidan biri tsiklda bir nechta parametrlarni taqdim foretishdir. Misol uchun, quyida keltirilgan for tsikli vergul operatori yordamida bitta joyda bir nechta ifodalardan foydalanadi,

      ```javascript
      for (var a = 0, b =10; a <= 10; a++, b--)
      ```

      Vergul operatoridan qaytishdan oldin qayta ishlanadigan qaytarish bayonotida ham foydalanishingiz mumkin.

      ```javascript
      function myFunction() {
        var a = 1;
        return (a += 10), a; // 11
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

251.  ### Typesciprt nima ?

      TypeScript - bu Microsoft tomonidan yaratilgan JavaScript-ning terilgan to'plami bo'lib, u ixtiyoriy turlar, sinflar, asinxron/kutish va boshqa ko'plab xususiyatlarni qo'shadi va oddiy JavaScript-ga kompilyatsiya qiladi. Angular butunlay TypeScript-da qurilgan va asosiy til sifatida ishlatiladi. Siz uni global miqyosda o'rnatishingiz mumkin

      ```bash
      npm install -g typescript
      ```

      Keling, TypeScript-dan foydalanishning oddiy misolini ko'rib chiqaylik,

      ```typescript
      function greeting(name: string): string {
        return 'Hello, ' + name;
      }

      let user = 'Sudheer';

      console.log(greeting(user));
      ```

      Salomlashish usuli argument sifatida faqat string turiga ruxsat beradi.

      **[⬆ Back to Top](#table-of-contents)**

252.  ### Javascript va typescript o'rtasidagi farqlar qanday

      Quyida javascript va typescript o'rtasidagi farqlar ro'yxati keltirilgan,

      | feature             | typescript                                               | javascript                                                       |
      | ------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
      | Language paradigm   | objektga yo'naltirilgan dasturlash tili                  | Scripting language                                               |
      | Typing support      | Statik yozishni qo'llab-quvvatlaydi                      | U dinamik yozishga ega                                           |
      | Modules             | Qo'llab-quvvatlanadi                                     | Qo'llab-quvvatlanmaydi                                           |
      | Interface           | U interfeys tushunchasiga ega                            | nterfeyslarni qo'llab-quvvatlamaydi                              |
      | Optional parameters | Funktsiyalar ixtiyoriy parametrlarni qo'llab-quvvatlaydi | Funktsiyalar uchun ixtiyoriy parametrlarni qo'llab-quvvatlamaydi |

      **[⬆ Back to Top](#table-of-contents)**

253.  ### Typescriptning javascriptdan qanday afzalliklari bor

      Quyida matn terishning javascriptdan ba'zi afzalliklari keltirilgan,

      1.  TypeScript kompilyatsiya vaqtidagi xatolarni faqat ishlab chiqish vaqtida topishi mumkin va bu ish vaqtidagi xatolarni kamroq qiladi. Holbuki, javascript talqin qilinadigan tildir.
      2.  TypeScript qattiq terilgan yoki statik yozishni qo'llab-quvvatlaydi, bu kompilyatsiya vaqtida turdagi to'g'riligini tekshirish imkonini beradi. Bu javascriptda mavjud emas.
      3.  TypeScript kompilyatori .ts fayllarini ES3, ES4 va ES5 ga kompilyatsiya qilishi mumkin, ba'zi brauzerlarda qo'llab-quvvatlanmaydigan javascriptning ES6 xususiyatlaridan farqli o'laroq.

      **[⬆ Back to Top](#table-of-contents)**

254.  ### objektni ishga tushirish (obj initialize) nima

      objektni ishga tushirish - bu objektni ishga tushirishni tavsiflovchi ifoda. Ushbu iboraning sintaksisi jingalak qavslar ({}) ichiga olingan nol yoki undan koʻp xususiyat nomlari va obʼyektning bogʻlangan qiymatlarining vergul bilan ajratilgan roʻyxati sifatida ifodalanadi. Bu literal notation sifatida ham tanilgan. Bu objektni yaratish usullaridan biridir.

      ```javascript
      var initObject = { a: 'John', b: 50, c: {} };

      console.log(initObject.a); // John
      ```

      **[⬆ Back to Top](#table-of-contents)**

255.  ### Konstruktor usuli nima

      Konstruktor usuli - bu sinf ichida yaratilgan objektni yaratish va ishga tushirish uchun maxsus usul. Agar siz konstruktor usulini ko'rsatmasangiz, standart konstruktor ishlatiladi. Konstruktordan foydalanish misoli quyidagicha bo'ladi,

      ```javascript
      class Employee {
        constructor() {
          this.name = 'John';
        }
      }

      var employeeObject = new Employee();

      console.log(employeeObject.name); // John
      ```

      **[⬆ Back to Top](#table-of-contents)**

256.  ### Agar classda bir necha marta konstruktor yozsangiz nima bo'ladiclass

      Classda "konstruktor" maxsus usul bo'lib, u sinfda faqat bir marta aniqlanishi kerak. ya'ni, agar siz konstruktor usulini sinfda bir necha marta yozsangiz, u SyntaxErrorxatoga yo'l qo'yadi.

      ```javascript
       class Employee {
         constructor() {
           this.name = "John";
         }
         constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
           this.age = 30;
         }
       }

       var employeeObject = new Employee();

       console.log(employeeObject.name);
      ```

      **[⬆ Back to Top](#table-of-contents)**

257.  ### Parent classning konstruktorini qanday chaqirish mumkin?

      Siz superkalit so'zni ota-sinf konstruktoriga qo'ng'iroq qilish uchun ishlatishingiz mumkin. Esda tutingki, super()"bu" havolasidan foydalanishdan oldin uni chaqirish kerak. Aks holda, bu havola xatosiga olib keladi. Keling, undan foydalanish,

      ```javascript
      class Square extends Rectangle {
        constructor(length) {
          super(length, length);
          this.name = 'Square';
        }

        get area() {
          return this.width * this.height;
        }

        set area(value) {
          this.area = value;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

258.  ### objektning prototipini qanday olish mumkin

      Object.getPrototypeOf(obj)Belgilangan objektning prototipini qaytarish uchun usuldan foydalanishingiz mumkin . ya'ni ichki prototypemulkning qiymati. Agar meros qilib olingan xususiyatlar bo'lmasa null, qiymat qaytariladi.

      ```javascript
      const newPrototype = {};
      const newObject = Object.create(newPrototype);

      console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
      ```

      **[⬆ Back to Top](#table-of-contents)**

259.  ### Agar getPrototype usuli uchun string turini o'tkazsam nima bo'ladi

      ES5 da, agar obj parametri objekt bo'lmasa, u TypeError istisnosini chiqaradi. Holbuki ES2015 da parametr .ga majburlanadi Object.

      ```javascript
      // ES5
      Object.getPrototypeOf('James'); // TypeError: "James" is not an object
      // ES2015
      Object.getPrototypeOf('James'); // String.prototype
      ```

      **[⬆ Back to Top](#table-of-contents)**

260.  ### Bir objektning prototipini boshqasiga qanday o'rnatish mumkin

      Object.setPrototypeOf()Belgilangan objektning prototipini (ya'ni, ichki Prototypexususiyatni) boshqa objektga yoki nullga o'rnatadigan usuldan foydalanishingiz mumkin . Misol uchun, agar siz kvadrat objektning prototipini to'rtburchak objektga o'rnatmoqchi bo'lsangiz, quyidagicha bo'ladi:

      ```javascript
      Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
      Object.setPrototypeOf({}, null);
      ```

      **[⬆ Back to Top](#table-of-contents)**

261.  ### objektni kengaytirish(extendable) mumkin yoki yo'qligini qanday tekshirish mumkin

      Usul Object.isExtensible()objektning kengaytirilishi mumkin yoki yo'qligini aniqlash uchun ishlatiladi. ya'ni, unga yangi xususiyatlar qo'shilishi mumkinmi yoki yo'qmi.

      ```javascript
      const newObject = {};
      console.log(Object.isExtensible(newObject)); //true
      ```

      **Note:** Odatiy bo'lib, barcha objektlar kengaytirilishi mumkin. ya'ni, yangi xususiyatlar qo'shilishi yoki o'zgartirilishi mumkin.

      **[⬆ Back to Top](#table-of-contents)**

262.  ### objektni kengaytirishni qanday oldini olish mumkin

      Usul Object.preventExtensions()objektga yangi xususiyatlar qo'shilishining oldini olish uchun ishlatiladi. Boshqacha qilib aytganda, u objektga kelajakdagi kengaytmalarni oldini oladi. Keling, ushbu mulkdan foydalanishni ko'rib chiqaylik,

      ```javascript
      const newObject = {};
      Object.preventExtensions(newObject); // NOT extendable

      try {
        Object.defineProperty(newObject, 'newProperty', {
          // Adding new property
          value: 100,
        });
      } catch (e) {
        console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

263.  ### objektni kengaytirilmaydigan qilishning turli usullari qanday

      Siz kengaytirilmaydigan objektni 3 usulda belgilashingiz mumkin,

      1.  Object.preventExtensions
      2.  Object.seal
      3.  Object.freeze

      ```javascript
      var newObject = {};

      Object.preventExtensions(newObject); // Prevent objects are non-extensible
      Object.isExtensible(newObject); // false

      var sealedObject = Object.seal({}); // Sealed objects are non-extensible
      Object.isExtensible(sealedObject); // false

      var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
      Object.isExtensible(frozenObject); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

264.  ### objektda bir nechta xususiyatlarni qanday aniqlash mumkin

      Usul Object.defineProperties()to'g'ridan-to'g'ri objektda yangi xususiyatlarni aniqlash yoki mavjud xususiyatlarni o'zgartirish va objektni qaytarish uchun ishlatiladi. Bo'sh objektda bir nechta xususiyatni aniqlaymiz,

      ```javascript
      const newObject = {};

      Object.defineProperties(newObject, {
        newProperty1: {
          value: 'John',
          writable: true,
        },
        newProperty2: {},
      });
      ```

      **[⬆ Back to Top](#table-of-contents)**

265.  ### Javascriptda MEAN nima

      MEAN (MongoDB, Express, AngularJS va Node.js) stek - bu dinamik veb-ilovalarni yaratish uchun mavjud bo'lgan eng mashhur ochiq manbali JavaScript dasturiy ta'minot stekidir, bunda siz veb-loyihaning server tomoni va mijoz tomonini yozishingiz mumkin. butunlay JavaScriptda.

      **[⬆ Back to Top](#table-of-contents)**

266.  ### Javascriptda xiralashish(Obfuscation ) nima

      Obfuscation - bu odamlar tushunishi qiyin bo'lgan tushunarsiz JavaScript kodini (ya'ni, manba yoki mashina kodi) yaratishning ataylab harakati. Bu shifrlashga o'xshash narsa, lekin mashina kodni tushunishi va uni bajarishi mumkin. Obfuscationdan oldin quyidagi funktsiyani ko'rib chiqaylik,

      ```javascript
      function greeting() {
        console.log('Hello, welcome to JS world');
      }
      ```

      Va Obfuscation kodidan keyin u quyidagi ko'rinishda bo'ladi,

      ```javascript
      eval(
        (function (p, a, c, k, e, d) {
          e = function (c) {
            return c;
          };
          if (!''.replace(/^/, String)) {
            while (c--) {
              d[c] = k[c] || c;
            }
            k = [
              function (e) {
                return d[e];
              },
            ];
            e = function () {
              return '\\w+';
            };
            c = 1;
          }
          while (c--) {
            if (k[c]) {
              p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
            }
          }
          return p;
        })(
          "2 1(){0.3('4, 7 6 5 8')}",
          9,
          9,
          'console|greeting|function|log|Hello|JS|to|welcome|world'.split('|'),
          0,
          {}
        )
      );
      ```

      **[⬆ Back to Top](#table-of-contents)**

267.  ### Nima uchun sizga obfuscation kerak ?

      Quyida chalkashlikning bir necha sabablari keltirilgan,

      1.  Kod hajmi kamayadi. Shunday qilib, server va mijoz o'rtasida ma'lumotlarni uzatish tez bo'ladi.
      2.  U biznes mantiqini tashqi dunyodan yashiradi va kodni boshqalardan himoya qiladi
      3.  Teskari muhandislik juda qiyin
      4.  Teskari muhandislik juda qiyin

      **[⬆ Back to Top](#table-of-contents)**

268.  ### Kichiklashtirish(minification) nima

      Kichkinalashtirish - bu barcha keraksiz belgilarni olib tashlash jarayoni (bo'sh joylar olib tashlanadi) va o'zgaruvchilar uning funksionalligini o'zgartirmasdan qayta nomlanadi. Bu, shuningdek, chalkashlikning bir turi.

      **[⬆ Back to Top](#table-of-contents)**

269.  ### Kichiklashtirishning qanday afzalliklari bor

      Odatda og'ir trafik va resurslarning intensiv talablari uchun minimallashtirishdan foydalanish tavsiya etiladi. Bu quyidagi afzalliklarga ega bo'lgan fayl o'lchamlarini kamaytiradi,

      1.  Veb-sahifani yuklash vaqtini qisqartiradi
      2.  Tarmoqli kengligidan foydalanishni tejaydi

      **[⬆ Back to Top](#table-of-contents)**

270.  ### Obfuscation va shifrlash o'rtasidagi farqlar qanday

      Quyida obfuscation va shifrlash o'rtasidagi asosiy farqlar keltirilgan,

      | Feature            | Obfuscation                                                              | Encryption                                                                 |
      | ------------------ | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
      | Definition         | Har qanday boshqa shakldagi har qanday ma'lumotlar shaklini o'zgartirish | Kalit yordamida ma'lumot shaklini o'qib bo'lmaydigan formatga o'zgartirish |
      | A key to decode    | Uni hech qanday kalitsiz dekodlash mumkin                                | Bu talab qilinadi                                                          |
      | Target data format | U murakkab shaklga aylanadi                                              | O'qib bo'lmaydigan formatga aylantirildi                                   |

      **[⬆ Back to Top](#table-of-contents)**

271.  ### Kichiklashtirish uchun qanday umumiy vositalar qo'llaniladi

      Javascript fayllarini kichiklashtirish uchun ko'plab onlayn/oflayn vositalar mavjud,

      1.  Google's Closure Compiler
      2.  UglifyJS2
      3.  jsmin
      4.  javascript-minifier.com/
      5.  prettydiff.com

      **[⬆ Back to Top](#table-of-contents)**

272.  ### Javascript yordamida shaklni(form) tekshirishni qanday amalga oshirasiz

      JavaScript HTML formasini tekshirish uchun ishlatilishi mumkin. Misol uchun, agar forma maydoni bo'sh bo'lsa, shakl yuborilishiga yo'l qo'ymaslik uchun funktsiya xabar berishi va "false" ni qaytarishi kerak. Keling, html shaklida foydalanuvchi loginini amalga oshiramiz,

      ```html
      <form name="myForm" onsubmit="return validateForm()" method="post">
        User name: <input type="text" name="uname" />
        <input type="submit" value="Submit" />
      </form>
      ```

      Va foydalanuvchi loginni tekshirish quyida keltirilgan,

      ```javascript
      function validateForm() {
        var x = document.forms['myForm']['uname'].value;
        if (x == '') {
          alert("The username shouldn't be empty");
          return false;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

273.  ### Shaklni(form) tekshirishni javascriptsiz qanday amalga oshirasiz

      HTML formasini tekshirishni JavaScriptdan foydalanmasdan avtomatik ravishda amalga oshirishingiz mumkin. requiredKirish boʻsh boʻlganida shaklni yuborishni oldini olish uchun atributni qoʻllash orqali tekshirish yoqilgan .

      ```html
      <form method="post">
        <input type="text" name="uname" required />
        <input type="submit" value="Submit" />
      </form>
      ```

      **Note:** Shaklni avtomatik tekshirish Internet Explorer 9 yoki undan oldingi versiyalarida ishlamaydi.

      **[⬆ Back to Top](#table-of-contents)**

274.  ### Cheklovlarni tekshirish uchun qanday DOM usullari mavjud

      Quyidagi DOM usullari noto'g'ri kiritishda cheklovlarni tekshirish uchun mavjud,

      1.  checkValidity(): Agar kirish elementida to'g'ri ma'lumotlar mavjud bo'lsa, u rostni qaytaradi.
      2.  setCustomValidity(): U kiritish elementining validationMessage xususiyatini o'rnatish uchun ishlatiladi. Keling, DOM tekshiruvlari bilan foydalanuvchi login formasini olaylik

      ```javascript
      function myFunction() {
        var userName = document.getElementById('uname');
        if (!userName.checkValidity()) {
          document.getElementById('message').innerHTML =
            userName.validationMessage;
        } else {
          document.getElementById('message').innerHTML =
            'Entered a valid username';
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

275.  ### Mavjud cheklovni tekshirish DOM xususiyatlari qanday

      Quyida mavjud bo'lgan cheklashlarni tekshirishning ba'zi DOM xususiyatlarining ro'yxati keltirilgan,

      1.  validity: u kirish elementining haqiqiyligi bilan bog'liq boolean xususiyatlar ro'yxatini taqdim etadi.
      2.  validationMessage: Yaroqlilik noto'g'ri bo'lsa, u xabarni ko'rsatadi.
      3.  willValidate: Bu kirish elementi tekshiriladimi yoki yo'qligini bildiradi.

      **[⬆ Back to Top](#table-of-contents)**

276.  ### Yaroqlilik xususiyatlarining ro'yxati qanday

      Kirish elementining haqiqiylik xususiyati ma'lumotlarning haqiqiyligi bilan bog'liq xususiyatlar to'plamini ta'minlaydi.

      1.  customError: Agar moslashtirilgan toʻgʻrilik xabari oʻrnatilgan boʻlsa, u haqiqatni qaytaradi.
      2.  patternMismatch: Agar elementning qiymati uning naqsh atributiga mos kelmasa, u haqiqatni qaytaradi.
      3.  rangeOverflow: Agar element qiymati uning maksimal atributidan katta bo'lsa, u haqiqatni qaytaradi.
      4.  rangeUnderflow: Agar element qiymati uning min atributidan kichik bo'lsa, u haqiqatni qaytaradi.
      5.  stepMismatch: Agar elementning qiymati step atributiga ko'ra noto'g'ri bo'lsa, u haqiqatni qaytaradi.
      6.  tooLong: Agar element qiymati uning maxLength atributidan oshsa, u rostni qaytaradi.
      7.  typeMismatch: Agar elementning qiymati type atributiga ko'ra noto'g'ri bo'lsa, u rostni qaytaradi.
      8.  valueMissing: Agar talab qilinadigan atributga ega element hech qanday qiymatga ega bo'lmasa, u haqiqatni qaytaradi.
      9.  valid: Agar elementning qiymati to'g'ri bo'lsa, u haqiqatni qaytaradi.

      **[⬆ Back to Top](#table-of-contents)**

277.  ### rangeOverflow xususiyatidan foydalanishga misol keltiring

      Agar element qiymati uning maksimal atributidan katta bo'lsa, rangeOverflow xususiyati haqiqatni qaytaradi. Misol uchun, agar qiymat 100 dan ortiq bo'lsa, quyidagi shaklni yuborish xato qiladi,

      ```html
      <input id="age" type="number" max="100" />
      <button onclick="myOverflowFunction()">OK</button>
      ```

      ```javascript
      function myOverflowFunction() {
        if (document.getElementById('age').validity.rangeOverflow) {
          alert('The mentioned age is not allowed');
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

278.  ### Enums xususiyati javascriptda mavjudmi?

      Yo'q, JavaScript enumlarni qo'llab-quvvatlamaydi. Ammo ularni simulyatsiya qilish uchun turli xil echimlar mavjud, garchi ular aniq ekvivalentlarni taqdim etmasa ham. Masalan, siz objektda muzlatish yoki muhrni ishlatishingiz mumkin,

      ```javascript
      var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})
      ```

      **[⬆ Back to Top](#table-of-contents)**

279.  ### Enum nima

      Enum - bu o'zgaruvchilarni oldindan belgilangan doimiylar to'plamidan bitta qiymat bilan cheklovchi tur. JavaScriptda raqamlar yo'q, lekin typescript o'rnatilgan enum yordamini ta'minlaydi.

      ```javascript
      enum Color {
       RED, GREEN, BLUE
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

280.  ### objektning barcha xususiyatlarini qanday ro'yxatga olasiz

      Object.getOwnPropertyNames()To'g'ridan-to'g'ri berilgan objektda topilgan barcha xususiyatlar qatorini qaytaradigan usuldan foydalanishingiz mumkin . Keling, uni misolda ishlatishni ko'rib chiqaylik,

      ```javascript
      const newObject = {
        a: 1,
        b: 2,
        c: 3,
      };

      console.log(Object.getOwnPropertyNames(newObject));
      ['a', 'b', 'c'];
      ```

      **[⬆ Back to Top](#table-of-contents)**

281.  ### How do you get property descriptors of an object

      Siz Object.getOwnPropertyDescriptors()berilgan objektning barcha o'ziga xos xususiyat identifikatorlarini qaytaradigan usuldan foydalanishingiz mumkin. Ushbu usuldan foydalanish misoli quyida keltirilgan,

      ```javascript
      const newObject = {
        a: 1,
        b: 2,
        c: 3,
      };
      const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
      console.log(descriptorsObject.a.writable); //true
      console.log(descriptorsObject.a.configurable); //true
      console.log(descriptorsObject.a.enumerable); //true
      console.log(descriptorsObject.a.value); // 1
      ```

      **[⬆ Back to Top](#table-of-contents)**

282.  ### Xususiyat deskriptori tomonidan taqdim etilgan atributlar qanday

      Xususiyat deskriptori - bu quyidagi atributlarga ega bo'lgan yozuv

      1.  value: mulk bilan bog'liq qiymat
      2.  writable: Mulk bilan bog'liq qiymatni o'zgartirish mumkinmi yoki yo'qligini aniqlaydi
      3.  configurable: Agar ushbu xususiyat identifikatorining turini o'zgartirish mumkin bo'lsa va xususiyat mos keladigan objektdan o'chirilishi mumkin bo'lsa, true qiymatini qaytaradi.
      4.  enumerable: Xususiyat tegishli objektdagi xususiyatlarni sanab o'tishda paydo bo'ladimi yoki yo'qligini aniqlaydi.
      5.  set: Xususiyat uchun o'rnatuvchi sifatida xizmat qiluvchi funktsiya
      6.  get: Mulk uchun oluvchi sifatida xizmat qiluvchi funktsiya

      **[⬆ Back to Top](#table-of-contents)**

283.  ### Classlarni qanday uzaytirasiz(extends)

      extendsKalit so'z sinf deklaratsiyasida/iboralarida boshqa sinfning farzandi bo'lgan sinf yaratish uchun ishlatiladi . Undan maxsus sinflarni, shuningdek, o'rnatilgan objektlarni pastki sinflarga ajratish uchun foydalanish mumkin. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      class ChildClass extends ParentClass { ... }
      ```

      Polygon ota-klassidan Square kichik sinfiga misol keltiraylik,

      ```javascript
      class Square extends Rectangle {
        constructor(length) {
          super(length, length);
          this.name = 'Square';
        }

        get area() {
          return this.width * this.height;
        }

        set area(value) {
          this.area = value;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

284.  ### Sahifani qayta yuklamasdan urlni qanday o'zgartirish mumkin

      Mulk window.location.urlurlni o'zgartirish uchun foydali bo'ladi, lekin u sahifani qayta yuklaydi. HTML5 tegishli ravishda tarix yozuvlarini qo'shish va o'zgartirish imkonini beruvchi history.pushState()va usullarini taqdim etdi. history.replaceState()Masalan, pushState-dan quyidagi kabi foydalanishingiz mumkin,

      ```javascript
      window.history.pushState('page2', 'Title', '/page2.html');
      ```

      **[⬆ Back to Top](#table-of-contents)**

285.  ### Massiv ma'lum bir qiymatni o'z ichiga oladi yoki yo'qligini qanday tekshirish mumkinvalue or not

      Usul Array#includes()massiv o'z yozuvlari orasida ma'lum bir qiymatni o'z ichiga oladi yoki yo'qligini aniqlash uchun ishlatiladi yoki rost yoki yolg'on. Massiv ichidagi elementni (raqamli va satr) topish misolini ko'rib chiqaylik.

      ```javascript
      var numericArray = [1, 2, 3, 4];
      console.log(numericArray.includes(3)); // true

      var stringArray = ['green', 'yellow', 'blue'];
      console.log(stringArray.includes('blue')); //true
      ```

      **[⬆ Back to Top](#table-of-contents)**

286.  ### Skayar massivlarni qanday solishtirasiz

      Ikki skaler (to'g'ridan-to'g'ri === yordamida solishtirilgan) massivlarni solishtirish uchun uzunlik va massivlarning har bir usulidan foydalanishingiz mumkin. Ushbu iboralarning kombinatsiyasi kutilgan natijani berishi mumkin,

      ```javascript
      const arrayFirst = [1, 2, 3, 4, 5];
      const arraySecond = [1, 2, 3, 4, 5];
      console.log(
        arrayFirst.length === arraySecond.length &&
          arrayFirst.every((value, index) => value === arraySecond[index])
      ); // true
      ```

      Agar siz tartibdan qat'i nazar massivlarni solishtirmoqchi bo'lsangiz, ularni avval tartiblashingiz kerak,

      ```javascript
      const arrayFirst = [2, 3, 1, 4, 5];
      const arraySecond = [1, 2, 3, 4, 5];
      console.log(
        arrayFirst.length === arraySecond.length &&
          arrayFirst
            .sort()
            .every((value, index) => value === arraySecond[index])
      ); //true
      ```

      **[⬆ Back to Top](#table-of-contents)**

287.  ### Get parametrlaridan qiymatni qanday olish mumkin

      new URL()objekt url qatorini qabul qiladi va bu searchParamsobyektning xususiyati get parametrlariga kirish uchun ishlatilishi mumkin. window.locationEsda tutingki , eski brauzerlarda (jumladan, IE) URL-manzilga kirish uchun polyfill-dan foydalanish kerak bo'lishi mumkin .

      ```javascript
      let urlString = 'http://www.some-domain.com/about.html?x=1&y=2&z=3'; //window.location.href
      let url = new URL(urlString);
      let parameterZ = url.searchParams.get('z');
      console.log(parameterZ); // 3
      ```

      **[⬆ Back to Top](#table-of-contents)**

288.  ### Qanday qilib raqamlarni vergul bilan ming ajratuvchi sifatida chop qilasiz

      Siz Number.prototype.toLocaleString()ushbu raqamning ming ajratuvchisi, valyutasi va boshqalar kabi tilga sezgir ko'rinishga ega satrni qaytaradigan usuldan foydalanishingiz mumkin.

      ```javascript
      function convertToThousandFormat(x) {
        return x.toLocaleString(); // 12,345.679
      }

      console.log(convertToThousandFormat(12345.6789));
      ```

      **[⬆ Back to Top](#table-of-contents)**

289.  ### Java va javascript o'rtasidagi farq nima

      Ikkalasi ham mutlaqo bog'liq bo'lmagan dasturlash tillari va ular o'rtasida aloqa yo'q. Java statik tarzda teriladi, kompilyatsiya qilinadi, o'z VM da ishlaydi. Holbuki, Javascript dinamik ravishda yoziladi, talqin qilinadi va brauzer va nodejs muhitida ishlaydi. Keling, jadval formatidagi asosiy farqlarni ko'rib chiqaylik,

      | Feature     | Java                               | JavaScript                                                                    |
      | ----------- | ---------------------------------- | ----------------------------------------------------------------------------- |
      | Typed       | Bu kuchli terilgan til             | Bu dinamik terilgan til                                                       |
      | Paradigm    | objektga yo'naltirilgan dasturlash | Prototipga asoslangan dasturlash                                              |
      | Scoping     | Block scoped                       | Function-scoped                                                               |
      | Concurrency | Mavzuga asoslangan                 | voqeaga asoslangan                                                            |
      | Memory      | Ko'proq xotiradan foydalanadi      | Kamroq xotiradan foydalanadi. Shuning uchun u veb-sahifalar uchun ishlatiladi |

      **[⬆ Back to Top](#table-of-contents)**

290.  ### JavaScript namespace qo'llab-quvvatlaydimi?

      JavaScript sukut bo'yicha nom maydonini qo'llab-quvvatlamaydi. Shunday qilib, agar siz biron bir element (funktsiya, usul, objekt, o'zgaruvchi) yaratsangiz, u global bo'lib, global nomlar maydonini ifloslantiradi. Hech qanday nom maydonisiz ikkita funktsiyani aniqlashga misol keltiraylik,

      ```javascript
      function func1() {
        console.log('This is a first definition');
      }
      function func1() {
        console.log('This is a second definition');
      }
      func1(); // This is a second definition
      ```

      U har doim ikkinchi funktsiya ta'rifini chaqiradi. Bunday holda, nom maydoni nomlarning to'qnashuvi muammosini hal qiladi.

      **[⬆ Back to Top](#table-of-contents)**

291.  ### Namescpace qanday e'lon qilasiz

      JavaScriptda nom bo'shliqlari bo'lmasa ham, nomlar bo'shliqlarini yaratish uchun Objects, IIFE dan foydalanishimiz mumkin.

      1.  **Using Object Literal Notation:** O'zgaruvchilar va funktsiyalarni nom maydoni vazifasini bajaradigan objekt literaliga o'tkazamiz. Shundan so'ng siz ularga objekt belgilaridan foydalanib kirishingiz mumkin

      ```javascript
      var namespaceOne = {
         function func1() {
             console.log("This is a first definition");
         }
      }
      var namespaceTwo = {
           function func1() {
               console.log("This is a second definition");
           }
       }
      namespaceOne.func1(); // This is a first definition
      namespaceTwo.func1(); // This is a second definition
      ```

      1.  **Using IIFE (Immediately invoked function expression):** IIFE ning tashqi qavslar juftligi uning ichidagi barcha kodlar uchun mahalliy qamrovni yaratadi va anonim funksiyani funksiya ifodasiga aylantiradi. Shu sababli, nom maydoni sifatida ishlash uchun ikkita turli funktsiya ifodalarida bir xil funktsiyani yaratishingiz mumkin.

      ```javascript
      (function () {
        function fun1() {
          console.log('This is a first definition');
        }
        fun1();
      })();

      (function () {
        function fun1() {
          console.log('This is a second definition');
        }
        fun1();
      })();
      ```

      1.  **Using a block and a let/const declaration:** ECMAScript 6 da o'zgaruvchi doirasini blok bilan cheklash uchun siz shunchaki blok va let deklaratsiyasidan foydalanishingiz mumkin.

      ```javascript
      {
        let myFunction = function fun1() {
          console.log('This is a first definition');
        };
        myFunction();
      }
      //myFunction(): ReferenceError: myFunction is not defined.

      {
        let myFunction = function fun1() {
          console.log('This is a second definition');
        };
        myFunction();
      }
      //myFunction(): ReferenceError: myFunction is not defined.
      ```

      **[⬆ Back to Top](#table-of-contents)**

292.  ### Bosh sahifadagi iframe-da javascript kodini qanday chaqirish mumkin

      document.getElementByDastlab iFrame-ga yoki yordamida kirish kerak window.frames. Shundan so'ng contentWindowiFrame xususiyati targetFunction uchun ruxsat beradi

      ```javascript
      document.getElementById('targetFrame').contentWindow.targetFunction();
      window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox
      ```

      **[⬆ Back to Top](#table-of-contents)**

293.  ### Vaqt mintaqasini sanadan qanday qilib siljitish mumkin

      getTimezoneOffsetSana obyektining usulidan foydalanishingiz mumkin . Bu usul vaqt mintaqasi farqini, daqiqalarda, joriy tildan (xost tizimi sozlamalari) UTCgacha qaytaradi

      ```javascript
      var offset = new Date().getTimezoneOffset();
      console.log(offset); // -480
      ```

      **[⬆ Back to Top](#table-of-contents)**

294.  ### CSS va JS fayllarini dinamik ravishda qanday yuklaysiz

      Siz DOM da havola va skript elementlarini yaratishingiz va ularni bosh tegga bola sifatida qo'shishingiz mumkin. Quyidagi kabi skript va uslub resurslarini qo'shish funksiyasini yarataylik,

      ```javascript
      function loadAssets(filename, filetype) {
        if (filetype == 'css') {
          // External CSS file
          var fileReference = document.createElement('link');
          fileReference.setAttribute('rel', 'stylesheet');
          fileReference.setAttribute('type', 'text/css');
          fileReference.setAttribute('href', filename);
        } else if (filetype == 'js') {
          // External JavaScript file
          var fileReference = document.createElement('script');
          fileReference.setAttribute('type', 'text/javascript');
          fileReference.setAttribute('src', filename);
        }
        if (typeof fileReference != 'undefined')
          document.getElementsByTagName('head')[0].appendChild(fileReference);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

295.  ### DOM-da HTML elementlarini topishning turli usullari qanday?

      Agar siz HTML sahifasining istalgan elementiga kirishni istasangiz, hujjat objektiga kirishdan boshlashingiz kerak. Keyinchalik HTML elementini topish uchun quyidagi usullardan birini qo'llashingiz mumkin,

      1.  document.getElementById(id): Id boʻyicha elementni topadi
      2.  document.getElementsByTagName(name): Teg nomi boʻyicha elementni topadi
      3.  document.getElementsByClassName(name): U elementni sinf nomi bilan topadi

      **[⬆ Back to Top](#table-of-contents)**

296.  ### jQuery nima

      jQuery mashhur JavaScript-brauzerlar kutubxonasi boʻlib, u Hujjat Obyekt Modeli (DOM) oʻtishini, hodisalarni boshqarishni, animatsiyalarni va brauzerlar orasidagi tafovutlarni minimallashtirish orqali AJAX oʻzaro taʼsirini taʼminlaydi. U "Kamroq yoz, ko'proq ish qil" falsafasi bilan mashhur. Masalan, jQuery-dan foydalanib, sahifa yuklanishida salomlash xabarini quyidagi tarzda ko'rsatishingiz mumkin,

      ```javascript
      $(document).ready(function () {
        // It selects the document and apply the function on page load
        alert('Welcome to jQuery world');
      });
      ```

      **Note:** Siz uni jQuery rasmiy saytidan yuklab olishingiz yoki google kabi CDN-lardan o'rnatishingiz mumkin.

      **[⬆ Back to Top](#table-of-contents)**

297.  ### V8 JavaScript dvigateli nima

      V8 - bu C++ tilida yozilgan Google Chrome brauzeri tomonidan qo'llaniladigan ochiq manbali yuqori samarali JavaScript dvigatelidir. U node.js loyihasida ham foydalanilmoqda. U ECMAScript va WebAssembly’ni amalga oshiradi va Windows 7 yoki undan keyingi versiyalarida, macOS 10.12+ va x64, IA-32, ARM yoki MIPS protsessorlaridan foydalanadigan Linux tizimlarida ishlaydi. Eslatma: U mustaqil ishlashi mumkin yoki istalgan C++ dasturiga kiritilishi mumkin.

      **[⬆ Back to Top](#table-of-contents)**

298.  ### Nima uchun biz javascriptni dinamik til deb ataymiz

      JavaScript erkin terilgan yoki dinamik tildir, chunki JavaScriptdagi o'zgaruvchilar biron bir qiymat turi bilan bevosita bog'lanmagan va har qanday o'zgaruvchi barcha turdagi qiymatlar bilan tayinlanishi/qayta tayinlanishi mumkin.

      ```javascript
      let age = 50; // age is a number now
      age = 'old'; // age is a string now
      age = true; // age is a boolean
      ```

      **[⬆ Back to Top](#table-of-contents)**

299.  ### Void operatori nima

      Operator voidberilgan ifodani baholaydi va keyin aniqlanmagan (ya'ni, qiymatni qaytarmasdan) qaytaradi. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      void expression;
      void expression;
      ```

      Xabarni hech qanday yo'naltirish yoki qayta yuklamasdan ko'rsataylik

      ```javascript
      <a href="javascript:void(alert('Welcome to JS world'))">
        Click here to see a message
      </a>
      ```

      **Note:** Bu operator ko'pincha "void (0)" yordamida aniqlanmagan ibtidoiy qiymatni olish uchun ishlatiladi.

      **[⬆ Back to Top](#table-of-contents)**

300.  ### Kursorni kutish(wait) uchun qanday sozlash kerak

      Kursor "kursor" xususiyatidan foydalanib, JavaScriptda kutishga o'rnatilishi mumkin. Quyidagi funksiyadan foydalanib, sahifa yuklashda ushbu xatti-harakatni bajaramiz.

      ```javascript
      function myFunction() {
        window.document.body.style.cursor = 'wait';
      }
      ```

      and this function invoked on page load

      ```html
      <body onload="myFunction()"></body>
      ```

      **[⬆ Back to Top](#table-of-contents)**

301.  ### Qanday qilib cheksiz sikl (infinite loop)yaratasiz

      Hech qanday ifoda ishlatmasdan for va while sikllaridan foydalanib cheksiz tsikllar yaratishingiz mumkin. For loop tuzilishi yoki sintaksisi ESLint va kod optimallashtiruvchi vositalari nuqtai nazaridan yaxshiroq yondashuv,

      ```javascript
      for (;;) {}
      while (true) {}
      ```

      **[⬆ Back to Top](#table-of-contents)**

302.  ### Nima uchun bayonot bilan avoid kerak

      JavaScript-ning with bayonoti objektlarga takroriy kirishlarni yozish uchun stenografiyani ta'minlash uchun mo'ljallangan. Shunday qilib, u uzoq objekt havolasini ishlash jazosisiz takrorlash zaruratini kamaytirish orqali fayl hajmini kamaytirishga yordam beradi. objektga bir necha marta kirishda ortiqchalikni oldini olish uchun ishlatiladigan misolni olaylik.

      ```javascript
      a.b.c.greeting = 'welcome';
      a.b.c.age = 32;
      ```

      Undan foydalanish with buni quyidagilarga aylantiradi:

      ```javascript
      with (a.b.c) {
        greeting = 'welcome';
        age = 32;
      }
      ```

      Ammo bu with bayonot ishlash muammolarini keltirib chiqaradi, chunki argument haqiqiy o'zgaruvchiga yoki with argumenti ichidagi xususiyatga murojaat qilishini oldindan aytib bo'lmaydi.

      **[⬆ Back to Top](#table-of-contents)**

303.  ### Quyidagi for looplarning natijalari qanday

      ```javascript
      for (var i = 0; i < 4; i++) {
        // global scope
        setTimeout(() => console.log(i));
      }

      for (let i = 0; i < 4; i++) {
        // block scope
        setTimeout(() => console.log(i));
      }
      ```

      Yuqoridagi for looplarning chiqishi 4 4 4 4 va 0 1 2 3 ga teng

      **Explanation:** Javascriptning voqea navbati/siklasi tufayli setTimeoutcallback funksiyasi sikl bajarilgandan so'ng chaqiriladi. i o'zgaruvchisi kalit so'z bilan e'lon qilinganligi varsababli u global o'zgaruvchiga aylandi va vaqt setTimeoutfunksiyasi chaqirilganda iteratsiya yordamida qiymat 4 ga teng bo'ldi. Demak, birinchi tsiklning chiqishi 4 4 4 4.

      Ikkinchi siklda esa i oʻzgaruvchisi letkalit soʻz sifatida eʼlon qilingan boʻlsa, u bloklangan oʻzgaruvchiga aylanadi va u har bir iteratsiya uchun yangi qiymatga ega boʻladi (0, 1, 2 3). Demak, birinchi tsiklning chiqishi 0 1 2 3.

      **[⬆ Back to Top](#table-of-contents)**

304.  ### ES6 ning ba'zi xususiyatlarini sanab o'ting

      Quyida ES6 ning ba'zi yangi xususiyatlari ro'yxati keltirilgan.

      1.  Konstantalar yoki o'zgarmas o'zgaruvchilarni qo'llab-quvvatlash
      2.  O'zgaruvchilar, konstantalar va funktsiyalar uchun blok-ko'lamli yordam
      3.  Ok funksiyalari
      4.  Standart parametrlar
      5.  Dam olish va tarqalish parametrlari
      6.  Shablon harflari
      7.  Ko'p qatorli satrlar
      8.  Topshiriqni buzish
      9.  Kengaytirilgan objekt harflari
      10. Va'dalar
      11. Sinflar
      12. Modullar

      **[⬆ Back to Top](#table-of-contents)**

305.  ### ES6 nima

      ES6 javascript tilining oltinchi nashri boʻlib, 2015-yil iyun oyida chiqarilgan. U dastlab ECMAScript 6 (ES6) nomi bilan tanilgan va keyinchalik ECMAScript 2015 deb oʻzgartirilgan. Deyarli barcha zamonaviy brauzerlar ES6ʼni qoʻllab-quvvatlaydi, lekin eski brauzerlar uchun koʻplab transpilerlar mavjud. , Babel.js va boshqalar kabi.

      **[⬆ Back to Top](#table-of-contents)**

306.  ### Let va const o'zgaruvchilarni qayta e'lon qila olamanmi?

      Yo'q, siz let va const o'zgaruvchilarini qayta e'lon qila olmaysiz. Agar shunday qilsangiz, u quyidagi xatoni chiqaradi

      ```bash
      Uncaught SyntaxError: Identifier 'someVariable' has already been declared
      ```

      **Explanation:** Kalit so'z bilan o'zgaruvchini e'lon qilish varfunksiya doirasiga ishora qiladi va o'zgaruvchiga ko'tarish xususiyati tufayli u qo'shimcha doiraning yuqori qismida e'lon qilingandek ishlanadi. Shunday qilib, bir xil ko'tarilgan o'zgaruvchiga hech qanday xatosiz hissa qo'shadigan barcha bir nechta deklaratsiyalar. Keling, var va let/const o'zgaruvchilari uchun bir xil doiradagi o'zgaruvchilarni qayta e'lon qilish misolini olaylik.

      ```javascript
      var name = 'John';
      function myFunc() {
        var name = 'Nick';
        var name = 'Abraham'; // Re-assigned in the same function block
        alert(name); // Abraham
      }
      myFunc();
      alert(name); // John
      ```

      Blok ko'lamli ko'p deklaratsiya sintaksis xatosini keltirib chiqaradi,

      ```javascript
      let name = 'John';
      function myFunc() {
        let name = 'Nick';
        let name = 'Abraham'; // Uncaught SyntaxError: Identifier 'name' has already been declared
        alert(name);
      }

      myFunc();
      alert(name);
      ```

      **[⬆ Back to Top](#table-of-contents)**

307.  ### Const o'zgaruvchisi qiymatni o'zgarmas qiladimi

      Yo'q, const o'zgaruvchisi qiymatni o'zgarmas qilib qo'ymaydi. Ammo u keyingi topshiriqlarga ruxsat bermaydi (ya'ni, siz topshiriq bilan e'lon qilishingiz mumkin, lekin keyinroq boshqa qiymat tayinlay olmaysiz)

      ```javascript
      const userList = [];
      userList.push('John'); // Can mutate even though it can't re-assign
      console.log(userList); // ['John']
      ```

      **[⬆ Back to Top](#table-of-contents)**

308.  ### Standart parametrlar nima

      E5 da biz funktsiya parametrlarining standart qiymatlarini boshqarish uchun mantiqiy OR operatorlariga bog'lanishimiz kerak. ES6 da standart funksiya parametrlari xususiyati hech qanday qiymat yoki aniqlanmagan holda parametrlarni standart qiymatlar bilan ishga tushirishga imkon beradi. Keling, xatti-harakatlarni misollar bilan taqqoslaylik,

      ```javascript
      //ES5
      var calculateArea = function (height, width) {
        height = height || 50;
        width = width || 60;

        return width * height;
      };
      console.log(calculateArea()); //300
      ```

      Standart parametrlar ishga tushirishni soddalashtiradi,

      ```javascript
      //ES6
      var calculateArea = function (height = 50, width = 60) {
        return width * height;
      };

      console.log(calculateArea()); //300
      ```

      **[⬆ Back to Top](#table-of-contents)**

309.  ### Shablon literallari nima

      Shablon literallari yoki shablon satrlari o'rnatilgan ifodalarga ruxsat beruvchi satr harflaridir. Ular ikkita yoki bitta tirnoq o'rniga orqaga belgi (`) bilan o'ralgan. E6 da bu xususiyat quyidagi kabi dinamik ifodalardan foydalanish imkonini beradi,

      ```javascript
      var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;
      ```

      ES5 da sizga quyidagi kabi uzilish qatori kerak bo'ladi,

      ```javascript
      var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
      ```

      **Note:** Shablon harflari bilan ko'p qatorli satrlar va satr interpolyatsiyasi xususiyatlaridan foydalanishingiz mumkin.

      **[⬆ Back to Top](#table-of-contents)**

310.  ### Shablon literallarida ko'p qatorli satrlarni qanday yozish mumkin

      ES5 da ko'p qatorli satrlarni olish uchun yangi satrdan qochish belgilaridan ('\\n') va birlashtiruvchi belgilardan (+) foydalanishingiz kerak bo'ladi.

      ```javascript
      console.log('This is string sentence 1\n' + 'This is string sentence 2');
      ```

      Holbuki ES6 da yangi qator belgilarini eslatib o'tish shart emas,

      ```javascript
      console.log(`This is string sentence
      'This is string sentence 2`);
      ```

      **[⬆ Back to Top](#table-of-contents)**

311.  ### Murakkab(nested) shablonlari nima

      Joylashtiruvchi shablon shablondagi ${ } toʻldiruvchisi ichida ichki orqa belgilarga ruxsat berish uchun shablon harflari sintaksisida qoʻllab-quvvatlanadigan xususiyatdir. Misol uchun, quyida joylashgan shablon foydalanuvchi ruxsatiga asoslangan piktogrammalarni ko'rsatish uchun ishlatiladi, tashqi shablon esa platforma turini tekshiradi,

      ```javascript
      const iconStyles = `icon ${
        isMobilePlatform()
          ? ''
          : `icon-${user.isAuthorized ? 'submit' : 'disabled'}`
      }`;
      ```

      Yuqoridagi foydalanish holatini shablon xususiyatlarini joylashtirmasdan ham yozishingiz mumkin. Biroq, joylashtirish shablonlari xususiyati yanada ixcham va o'qilishi mumkin.

      ```javascript
      //Without nesting templates
       const iconStyles = `icon ${ isMobilePlatform() ? '' :
        (user.isAuthorized ? 'icon-submit' : 'icon-disabled'}`;
      ```

      **[⬆ Back to Top](#table-of-contents)**

312.  ### Belgilangan(tagged) shablonlar nima

      Teglangan andozalar shablonlarning ilg'or shakli bo'lib, unda teglar funksiya yordamida shablon harflarini tahlil qilish imkonini beradi. Teg funksiyasi birinchi parametrni satrlar massivi, qolgan parametrlarni esa ifoda sifatida qabul qiladi. Ushbu funktsiya parametrlar asosida manipulyatsiya qilingan satrlarni ham qaytarishi mumkin. Keling, tashkilotda IT-professional mahorat to'plamining ushbu tegli shablon xatti-harakatlaridan foydalanishni ko'rib chiqaylik,

      ```javascript
      var user1 = 'John';
      var skill1 = 'JavaScript';
      var experience1 = 15;

      var user2 = 'Kane';
      var skill2 = 'JavaScript';
      var experience2 = 5;

      function myInfoTag(strings, userExp, experienceExp, skillExp) {
        var str0 = strings[0]; // "Mr/Ms. "
        var str1 = strings[1]; // " is a/an "
        var str2 = strings[2]; // "in"

        var expertiseStr;
        if (experienceExp > 10) {
          expertiseStr = 'expert developer';
        } else if (skillExp > 5 && skillExp <= 10) {
          expertiseStr = 'senior developer';
        } else {
          expertiseStr = 'junior developer';
        }

        return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;
      }

      var output1 = myInfoTag`Mr/Ms. ${user1} is a/an ${experience1} in ${skill1}`;
      var output2 = myInfoTag`Mr/Ms. ${user2} is a/an ${experience2} in ${skill2}`;

      console.log(output1); // Mr/Ms. John is a/an expert developer in JavaScript
      console.log(output2); // Mr/Ms. Kane is a/an junior developer in JavaScript
      ```

      **[⬆ Back to Top](#table-of-contents)**

313.  ### Raw stringlar nima

      String.raw()ES6 shablon satrlarining xom string shaklini olish uchun ishlatiladigan usuldan foydalangan holda xom satrlar xususiyatini taqdim etadi . Bu xususiyat sizga kirish ketma-ketligini qayta ishlamasdan, xom satrlarga kirish imkonini beradi. Masalan, foydalanish quyidagicha bo'ladi,

      ```javascript
      var calculationString = String.raw`The sum of numbers is \n${
        1 + 2 + 3 + 4
      }!`;
      console.log(calculationString); // The sum of numbers is 10
      ```

      Agar siz xom satrlardan foydalanmasangiz, yangi qator belgilar ketma-ketligi chiqishni bir nechta satrlarda ko'rsatish orqali qayta ishlanadi.

      ```javascript
      var calculationString = `The sum of numbers is \n${1 + 2 + 3 + 4}!`;
      console.log(calculationString);
      // The sum of numbers is
      // 10
      ```

      Shuningdek, raw xususiyati teg funksiyasining birinchi argumentida mavjud

      ```javascript
      function tag(strings) {
        console.log(strings.raw[0]);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

314.  ### Destructuring assignment (strukturani buzish) nima ?

      Strukturani buzish topshirig'i - bu massivlardagi qiymatlarni yoki objektlardan xususiyatlarni alohida o'zgaruvchilarga ochish imkonini beruvchi JavaScript ifodasi. Keling, massivdan oy qiymatlarini tuzilmani buzish topshirig'idan foydalanib olamiz

      ```javascript
      var [one, two, three] = ['JAN', 'FEB', 'MARCH'];

      console.log(one); // "JAN"
      console.log(two); // "FEB"
      console.log(three); // "MARCH"
      ```

      va siz tuzilmani buzish topshirig'i yordamida objektning foydalanuvchi xususiyatlarini olishingiz mumkin,

      ```javascript
      var { name, age } = { name: 'John', age: 32 };

      console.log(name); // John
      console.log(age); // 32
      ```

      **[⬆ Back to Top](#table-of-contents)**

315.  ### Topshiriqni buzishda standart qiymatlar qanday

      O'zgaruvchiga massiv yoki objektdan ajratilgan qiymat tuzilmani buzish paytida aniqlanmagan bo'lsa, standart qiymat tayinlanishi mumkin. Bu har bir topshiriq uchun standart qiymatlarni alohida o'rnatishdan qochishga yordam beradi. Keling, massivlar va objektlardan foydalanish holatlariga misol keltiraylik,

      **Arrays destructuring:**

      ```javascript
      var x, y, z;

      [x = 2, y = 4, z = 6] = [10];
      console.log(x); // 10
      console.log(y); // 4
      console.log(z); // 6
      ```

      **Objects destructuring:**

      ```javascript
      var { x = 2, y = 4, z = 6 } = { x: 10 };

      console.log(x); // 10
      console.log(y); // 4
      console.log(z); // 6
      ```

      **[⬆ Back to Top](#table-of-contents)**

316.  ### Topshiriqni buzishda o'zgaruvchilarni qanday almashtirasiz

      Agar siz tuzilmani buzish topshirig'idan foydalanmasangiz, ikkita qiymatni almashtirish uchun vaqtinchalik o'zgaruvchi kerak bo'ladi. Vayron qiluvchi xususiyatdan foydalangan holda, ikkita o'zgaruvchan qiymatni bitta destruktiv ifodada almashtirish mumkin. Keling, massiv tuzilmasini buzishda ikkita raqamli o'zgaruvchini almashtiramiz,

      ```javascript
      var x = 10,
        y = 20;

      [x, y] = [y, x];
      console.log(x); // 20
      console.log(y); // 10
      ```

      **[⬆ Back to Top](#table-of-contents)**

317.  ### Kengaytirilgan objekt harflari nima

      objekt harflari jingalak qavslar ichida xossalarga ega objektlarni tezda yaratishni osonlashtiradi. Misol uchun, u quyidagi kabi umumiy objekt xususiyatini aniqlash uchun qisqaroq sintaksisni taqdim etadi.

      ```javascript
      //ES6
      var x = 10,
        y = 20;
      obj = { x, y };
      console.log(obj); // {x: 10, y:20}
      //ES5
      var x = 10,
        y = 20;
      obj = { x: x, y: y };
      console.log(obj); // {x: 10, y:20}
      ```

      **[⬆ Back to Top](#table-of-contents)**

318.  ### Dinamik import nima

      Funktsiya sintaksisidan foydalangan holda dinamik importlar import()bizga va'dalar yoki asinxron/kutish sintaksisi yordamida talab bo'yicha modullarni yuklash imkonini beradi. Hozirda bu xususiyat 4- bosqich taklifida . Dinamik importning asosiy afzalligi - bu to'plam o'lchamlarini qisqartirish, so'rovlarimizning hajmi/to'lovli javobi va foydalanuvchi tajribasining umumiy yaxshilanishi. Dinamik importning sintaksisi quyidagi kabi bo'ladi:

      ```javascript
      import('./Module').then((Module) => Module.method());
      ```

      **[⬆ Back to Top](#table-of-contents)**

319.  ### Dinamik import uchun qanday holatlar mavjud

      Quyida statik importga nisbatan dinamik importdan foydalanishning ayrim holatlari keltirilgan.

      1.  Modulni talab bo'yicha yoki shartli ravishda import qiling. Misol uchun, agar siz eski brauzerga polyfillni yuklamoqchi bo'lsangiz

      ```javascript
      if (isLegacyBrowser()) {
          import(···)
          .then(···);
      }
      ```

      1.  Modul o'rniga oddiy skript ichidan modul import qiling.

      ```javascript
      import(`messages_${getLocale()}.js`).then(···);
      ```

      1.  Import a module from within a regular script instead a module.

      **[⬆ Back to Top](#table-of-contents)**

320.  ### Tiplangan massivlar(typed arrays) nima

      Yozilgan massivlar ikkilik ma'lumotlarni qayta ishlash uchun ECMAScript 6 API'dan massivga o'xshash objektlardir. JavaScript 8 ta terilgan massiv turlarini taqdim etadi,

      1.  Int8Array: An array of 8-bit imzolangan butun sonlar massivi
      2.  Int16Array: An array of 16-bit imzolangan butun sonlar massivi
      3.  Int32Array: An array of 32-bit imzolangan butun sonlar massivi
      4.  Uint8Array: An array of 8-bit imzolangan butun sonlar massivi
      5.  Uint16Array: An array of 16-bit imzolangan butun sonlar massivi
      6.  Uint32Array: An array of 32-bit imzolangan butun sonlar massivi
      7.  Float32Array: An array of 32-bit floating point numbers
      8.  Float64Array: An array of 64-bit floating point numbers

      Misol uchun, siz quyida ko'rsatilgandek 8 bitli imzolangan tamsayılar qatorini yaratishingiz mumkin

      ```javascript
      const a = new Int8Array();
      // You can pre-allocate n bytes
      const bytes = 1024;
      const a = new Int8Array(bytes);
      ```

      **[⬆ Back to Top](#table-of-contents)**

321.  ### Modul yuklagichlarining(modal loader) afzalliklari nimada

      Modul yuklagichlari quyidagi xususiyatlarni taqdim etadi:

      1.  Dynamic loading
      2.  State isolation
      3.  Global namespace isolation
      4.  Compilation hooks
      5.  Nested virtualization

      **[⬆ Back to Top](#table-of-contents)**

322.  ### Collation (harakatlash) nima

      Harmanlama satrlar to'plamini saralash va qatorlar to'plami ichida qidirish uchun ishlatiladi. U mahalliy parametr bo'yicha parametrlangan va Unicode-dan xabardor. Keling, taqqoslash va saralash xususiyatlarini olaylik,

      1.  **Comparison:**

      ```javascript
      var list = ['ä', 'a', 'z']; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
      var l10nDE = new Intl.Collator('de');
      var l10nSV = new Intl.Collator('sv');
      console.log(l10nDE.compare('ä', 'z') === -1); // true
      console.log(l10nSV.compare('ä', 'z') === +1); // true
      ```

      1.  **Sorting:**

      ```javascript
      var list = ['ä', 'a', 'z']; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
      var l10nDE = new Intl.Collator('de');
      var l10nSV = new Intl.Collator('sv');
      console.log(list.sort(l10nDE.compare)); // [ "a", "ä", "z" ]
      console.log(list.sort(l10nSV.compare)); // [ "a", "z", "ä" ]
      ```

      **[⬆ Back to Top](#table-of-contents)**

323.  ### For .. of statmentni nima uchun ishlatiladi

      For...of iborasi takrorlanadigan objektlar yoki o'rnatilgan String, Array, Massivga o'xshash objektlar (masalan, argumentlar yoki NodeList), TypedArray, Map, Set va foydalanuvchi tomonidan aniqlangan takrorlanuvchilar kabi elementlar ustidan takrorlanuvchi tsikl yaratadi. Massivlarda for...of iborasining asosiy qo'llanilishi quyida keltirilgan bo'ladi:

      ```javascript
      let arrayIterable = [10, 20, 30, 40, 50];

      for (let value of arrayIterable) {
        value++;
        console.log(value); // 11 21 31 41 51
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

324.  ### Quyidagi yoyilgan operator massivining natijasi nimaga teng]

      ```javascript
      [...'John Resig'];
      ```

      Massivning chiqishi ['J', 'o', 'h', 'n', '', 'R', 'e', ​​'s', 'i', 'g'] Izoh: Satr. bu takrorlanadigan tur va massiv ichidagi tarqalish operatori iteratsiya qilinadigan har bir belgini bitta element bilan taqqoslaydi. Demak, satrning har bir belgisi Massiv ichidagi elementga aylanadi.

      **[⬆ Back to Top](#table-of-contents)**

325.  ### PostMessage xavfsizmi?]

      Ha, agar dasturchi/ishlab chiquvchi kelgan xabarning kelib chiqishi va manbasini tekshirishda ehtiyot bo'lsa, postMessages juda xavfsiz deb hisoblanishi mumkin. Ammo agar siz xabarni manbasini tasdiqlamasdan yuborishga/qabul qilishga harakat qilsangiz, saytlararo skript hujumlarini keltirib chiqaradi.

      **[⬆ Back to Top](#table-of-contents)**

326.  ### Joyker belgisi sifatida postxabar maqsadli kelib chiqishi bilan bog'liq qanday muammolar mavjud]origin as wildcard

      PostMessage usulining ikkinchi argumenti xabarni qaysi manbadan qabul qilishiga ruxsat berilganligini belgilaydi. Agar argument sifatida “\*” joker belgisidan foydalansangiz, xabarni har qanday manbaga qabul qilishga ruxsat beriladi. Bunday holda, jo'natuvchi oynasi xabarni jo'natishda maqsadli oyna maqsadli manbada ekanligini bilishning hech qanday usuli yo'q. Agar maqsadli oyna boshqa manbaga yo'naltirilgan bo'lsa, boshqa manba ma'lumotlarni oladi. Shunday qilib, bu XSS zaifliklariga olib kelishi mumkin.

      ```javascript
      targetWindow.postMessage(message, '*');
      ```

      **[⬆ Back to Top](#table-of-contents)**

327.  ### Qanday qilib tajovuzkorlardan postMessages olishdan qochasiz]attackers

      Tinglovchi har qanday xabarni tinglaganligi sababli, tajovuzkor tajovuzkorning kelib chiqishidan xabar yuborish orqali dasturni aldashi mumkin, bu esa qabul qiluvchiga xabarni haqiqiy jo'natuvchining oynasidan olgandek taassurot qoldiradi. “message.origin” atributidan foydalanib, qabul qiluvchining oxiridagi xabarning kelib chiqishini tekshirish orqali bu muammodan qochishingiz mumkin. Misol uchun, jo'natuvchining kelib chiqishini tekshirib ko'raylik http://www.some-sender.com qabul qiluvchi tomonida www.some-receiver.com ,

      ```javascript
      //Listener on http://www.some-receiver.com/
      window.addEventListener("message", function(message){
          if(/^http://www\.some-sender\.com$/.test(message.origin)){
               console.log('You received the data from valid sender', message.data);
         }
      });
      ```

      **[⬆ Back to Top](#table-of-contents)**

328.  ### PostMessages-dan butunlay qochishim mumkinmi?]

      Siz postMessages-dan butunlay (yoki 100%) foydalana olmaysiz. Ilovangiz xavflarni hisobga olgan holda postMessage-dan foydalanmasa ham, ko'plab uchinchi tomon skriptlari uchinchi tomon xizmati bilan bog'lanish uchun postMessage-dan foydalanadi. Demak, ilovangiz sizning xabaringizsiz postMessage dan foydalanayotgan bo‘lishi mumkin.

      **[⬆ Back to Top](#table-of-contents)**

329.  ### PostMessages sinxronlashganmi ?]

      PostMessages IE8 brauzerida sinxrondir, lekin ular IE9 va boshqa barcha zamonaviy brauzerlarda (masalan, IE9+, Firefox, Chrome, Safari) asinxrondir. Ushbu asinxron xatti-harakat tufayli biz postMessage qaytarilganda callback mexanizmidan foydalanamiz.

      **[⬆ Back to Top](#table-of-contents)**

330.  ### Javascript qanday paradigma]

      JavaScript ko'p paradigmali til bo'lib, imperativ/protsessual dasturlashni, objektga yo'naltirilgan dasturlashni va funktsional dasturlashni qo'llab-quvvatlaydi. JavaScript prototip merosga ega objektga yo'naltirilgan dasturlashni qo'llab-quvvatlaydi.

      **[⬆ Back to Top](#table-of-contents)**

331.  ### Ichki(Internal) va tashqi(external) javascript o'rtasidagi farq nima]external javascript

      **Internal JavaScript:** Bu skript tegidagi manba kodi.
      **External JavaScript:** Manba kodi tashqi faylda saqlanadi (.js kengaytmasi bilan saqlanadi) va tegda havola qilinadi.

      **[⬆ Back to Top](#table-of-contents)**

332.  ### JavaScript server tomonidagi skriptga qaraganda tezroqmi]

      Ha, JavaScript server tomonidagi skriptga qaraganda tezroq. JavaScript mijoz tomoni skripti bo'lgani uchun uni hisoblash yoki hisoblash uchun hech qanday veb-server yordamini talab qilmaydi. Shunday qilib, JavaScript har doim ASP, PHP va boshqalar kabi server tomonidagi skriptlardan tezroq.

      **[⬆ Back to Top](#table-of-contents)**

333.  ### Belgilash qutisi(checkbox) holatini(status) qanday olish mumkin]

      Siz checkedxususiyatni DOM-dagi tanlangan katakchaga qo'llashingiz mumkin. Agar qiymat bo'lsa True, belgilash katakchasi belgilanganligini bildiradi, aks holda belgilanmaydi. Misol uchun, quyidagi HTML belgilash katakchasi elementiga quyidagi kabi javascript yordamida kirish mumkin,

      ```html
      <input type="checkbox" name="checkboxname" value="Agree" /> Agree the
      conditions<br />
      ```

      ```javascript
      console.log(document.getElementById(‘checkboxname’).checked); // true or false
      ```

      **[⬆ Back to Top](#table-of-contents)**

334.  ### Double tilde operatorining maqsadi nima]

      Ikki tomonlama tilda operatori (~~) ikki tomonlama EMAS bitli operator sifatida tanilgan. Bu operator Math.floor() ni tezroq almashtiradi.

      **[⬆ Back to Top](#table-of-contents)**

335.  ### Belgilarni ASCII kodiga qanday o'zgartirasiz]

      Siz String.prototype.charCodeAt()satr belgilarini ASCII raqamlariga aylantirish uchun usuldan foydalanishingiz mumkin. Masalan, "ABC" qatorining birinchi harfi uchun ASCII kodini topamiz,

      ```javascript
      'ABC'.charCodeAt(0); // returns 65
      ```

      Usul String.fromCharCode()raqamlarni teng ASCII belgilariga aylantiradi.

      ```javascript
      String.fromCharCode(65, 66, 67); // returns 'ABC'
      ```

      **[⬆ Back to Top](#table-of-contents)**

336.  ### ArrayBuffer nima]

      ArrayBuffer objekti umumiy, qattiq uzunlikdagi xom ikkilik ma'lumotlar buferini ko'rsatish uchun ishlatiladi. Siz uni quyidagi tarzda yaratishingiz mumkin,

      ```javascript
      let buffer = new ArrayBuffer(16); // create a buffer of length 16
      alert(buffer.byteLength); // 16
      ```

      ArrayBuffer-ni boshqarish uchun biz "view" objektidan foydalanishimiz kerak.

      ```javascript
      //Create a DataView referring to the buffer
      let view = new DataView(buffer);
      ```

      **[⬆ Back to Top](#table-of-contents)**

337.  ### Quyidagi satr ifodasining natijasi nima]

      ```javascript
      console.log('Welcome to JS world'[0]);
      ```

      Yuqoridagi ifodaning chiqishi "W" dir
      **Explanation:** Satrdagi maxsus indeksli qavs belgisi ma'lum bir joyda belgini qaytaradi. Demak, u satrning "W" belgisini qaytaradi. Bu IE7 va undan past versiyalarda qo'llab-quvvatlanmaganligi sababli, kerakli natijaga erishish uchun .charAt() usulidan foydalanishingiz kerak bo'lishi mumkin.

      **[⬆ Back to Top](#table-of-contents)**

338.  ### Xato obyektining(error object) maqsadi nima]

      Xato konstruktori xato objektini yaratadi va xatolik objektlarining misollari ish vaqti xatolari yuzaga kelganda tashlanadi. Xato obyekti foydalanuvchi tomonidan belgilangan istisnolar uchun asosiy obyekt sifatida ham foydalanish mumkin. Xato objektining sintaksisi quyidagicha bo'ladi,

      ```javascript
      new Error([message[, fileName[, lineNumber]]])
      ```

      Quyidagi kabi try...catch blokidagi Error obyekti yordamida foydalanuvchi tomonidan belgilangan istisnolar yoki xatolarni tashlashingiz mumkin,

      ```javascript
      try {
        if (withdraw > balance)
          throw new Error("Oops! You don't have enough balance");
      } catch (e) {
        console.log(e.name + ': ' + e.message);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

339.  ### EvalError obyektining maqsadi nima]

      EvalError obyekti global eval()funksiya bilan bog'liq xatoni bildiradi. Garchi bu istisno JavaScript tomonidan endi tashlanmasa ham, EvalError obyekti moslik uchun qoladi. Ushbu iboraning sintaksisi quyidagi kabi bo'ladi:

      ```javascript
      new EvalError([message[, fileName[, lineNumber]]])
      ```

      Quyidagi kabi try...catch blokida EvalError-ni tashlashingiz mumkin,

      ```javascript
      try {
        throw new EvalError('Eval function error', 'someFile.js', 100);
      } catch (e) {
        console.log(e.message, e.name, e.fileName);              // "Eval function error", "EvalError", "someFile.js"
      ```

      **[⬆ Back to Top](#table-of-contents)**

340.  ### Qattiy bo'lmagan rejimdan qat'iy rejimga o'tkazilgan xatolar ro'yxati qanday]non-strict mode to strict mode

      Qachon 'use strict'; Sintaksis bo'lsa, quyidagi holatlarning ba'zilari skriptni bajarishdan oldin SyntaxError beradi

      1.  Oktal sintaksisidan foydalanganda

      ```javascript
      var n = 022;
      ```

      1.  Statement `bilan` foydalanganda
      2.  O'zgaruvchi nomida o'chirish operatoridan foydalanganda
      3.  O'zgaruvchi yoki funktsiya argument nomi sifatida baholash yoki argumentlardan foydalanish
      4.  Yangi zahiralangan kalit so'zlardan foydalanganda
      5.  Blokdagi funktsiyani e'lon qilganingizda

      ```javascript
      if (someCondition) {
        function f() {}
      }
      ```

      Shunday qilib, yuqoridagi holatlardagi xatolar ishlab chiqish/ishlab chiqarish muhitidagi xatolardan qochishga yordam beradi.

      **[⬆ Back to Top](#table-of-contents)**

341.  ### Barcha objektlarning prototiplari bormi?]

      Yo'q. Foydalanuvchi tomonidan yaratilgan asosiy objekt yoki new kalit so'zi yordamida yaratilgan objektdan tashqari barcha objektlar prototiplariga ega.

      **[⬆ Back to Top](#table-of-contents)**

342.  ### Parametr va argument o'rtasidagi farq nima]argument

      Parametr funksiya taʼrifining oʻzgaruvchan nomi, argument esa funksiya chaqirilganda unga berilgan qiymatni ifodalaydi. Keling, buni oddiy funksiya bilan tushuntiramiz

      ```javascript
      function myFunction(parameter1, parameter2, parameter3) {
        console.log(arguments[0]); // "argument1"
        console.log(arguments[1]); // "argument2"
        console.log(arguments[2]); // "argument3"
      }
      myFunction('argument1', 'argument2', 'argument3');
      ```

      **[⬆ Back to Top](#table-of-contents)**

343.  ### Massivlardagi some usulining maqsadi nima]

      Some() usuli massivdagi kamida bitta element taqdim etilgan funksiya tomonidan amalga oshirilgan testdan o'tishini tekshirish uchun ishlatiladi. Usul mantiqiy qiymatni qaytaradi. Keling, har qanday g'alati elementlarni sinab ko'rish uchun misol keltiraylik,

      ```javascript
      var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      var odd = (element) => element % 2 !== 0;

      console.log(array.some(odd)); // true (the odd element exists)
      ```

      **[⬆ Back to Top](#table-of-contents)**

344.  ### Ikki yoki undan ortiq massivni qanday birlashtirasiz]

      Concat() usuli barcha elementlarni o'z ichiga olgan yangi massivni qaytarish orqali ikki yoki undan ortiq massivlarni birlashtirish uchun ishlatiladi. Sintaksis quyidagi kabi bo'ladi,

      ```javascript
      array1.concat(array2, array3, ..., arrayX)
      ```

      Keling, massivning sabzavot va mevalar massivlari bilan bog'lanishiga misol keltiraylik,

      ```javascript
      var veggies = ['Tomato', 'Carrot', 'Cabbage'];
      var fruits = ['Apple', 'Orange', 'Pears'];
      var veggiesAndFruits = veggies.concat(fruits);
      console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears
      ```

      **[⬆ Back to Top](#table-of-contents)**

345.  ### Sayoz(shallow) va chuqur(deep) nusxa o'rtasidagi farq nima]copy

      objektni nusxalashning ikki yo'li mavjud:

      **Shallow Copy:**
      objektning bitli nusxasi. Asl objektdagi qiymatlarning aniq nusxasiga ega bo'lgan yangi objekt yaratiladi. Agar objektning biron bir maydoni boshqa objektlarga havolalar bo'lsa, faqat mos yozuvlar manzillari ko'chiriladi, ya'ni faqat xotira manzili ko'chiriladi.

      **Example**

      ```javascript
      var empDetails = {
        name: 'John',
        age: 25,
        expertise: 'Software Developer',
      };
      ```

      dublikat yaratish uchun

      ```javascript
      var empDetailsShallowCopy = empDetails; //Shallow copying!
      ```

      agar biz dublikatdagi ba'zi mulk qiymatini shunday o'zgartirsak:

      ```javascript
      empDetailsShallowCopy.name = 'Johnson';
      ```

      Yuqoridagi bayonot ning nomini ham o'zgartiradi empDetails, chunki bizda sayoz nusxa mavjud. Bu shuni anglatadiki, biz asl ma'lumotlarni ham yo'qotamiz.

      **Deep copy (chuuqur nusxalash):**
      Chuqur nusxa barcha maydonlardan nusxa ko'chiradi va maydonlar tomonidan ko'rsatilgan dinamik ravishda ajratilgan xotira nusxalarini yaratadi. Chuqur nusxa objekt unga tegishli bo'lgan objektlar bilan birga nusxalanganda sodir bo'ladi.

      **Example**

      ```javascript
      var empDetails = {
        name: 'John',
        age: 25,
        expertise: 'Software Developer',
      };
      ```

      Asl objektdan yangi o'zgaruvchiga xususiyatlardan foydalanib, chuqur nusxasini yarating

      ```javascript
      var empDetailsDeepCopy = {
        name: empDetails.name,
        age: empDetails.age,
        expertise: empDetails.expertise,
      };
      ```

      Endi agar siz o'zgartirsangiz empDetailsDeepCopy.name, u faqat ta'sir qiladi empDetailsDeepCopyva ta'sir qilmaydiempDetails

      **[⬆ Back to Top](#table-of-contents)**

346.  ### Satrning ma'lum nusxalarini qanday yaratish mumkin]string

      Usul repeat()yangi satrni yaratish va qaytarish uchun ishlatiladi, unda u chaqirilgan qatorning birlashtirilgan nusxalarining belgilangan sonini o'z ichiga oladi. Ushbu usul ECMAScript 2015 spetsifikatsiyasiga qo'shilganligini unutmang.
      Keling, uni 4 marta takrorlash uchun Hello stringiga misol keltiraylik,

      ```javascript
      'Hello'.repeat(4); // 'HelloHelloHelloHello'
      ```

347.  ### Qanday qilib barcha mos keladigan satrlarni muntazam ifodaga qaytarasiz]regular expression

      Usul matchAll()muntazam ifodaga qarshi satrga mos keladigan barcha natijalarning iteratorini qaytarish uchun ishlatilishi mumkin. Misol uchun, quyidagi misol muntazam ifodaga nisbatan mos keladigan qator natijalarini qaytaradi,

      ```javascript
      let regexp = /Hello(\d?))/g;
      let greeting = 'Hello1Hello2Hello3';

      let greetingList = [...greeting.matchAll(regexp)];

      console.log(greetingList[0]); //Hello1
      console.log(greetingList[1]); //Hello2
      console.log(greetingList[2]); //Hello3
      ```

      **[⬆ Back to Top](#table-of-contents)**

348.  ### Stringni boshida yoki oxirida qanday qilib kesish mumkin]ending

      String prototipi trimusuli satrning ikkala tomonini kesish uchun ishlatiladi. Ammo, ayniqsa, satrning boshida yoki oxirida kesishni istasangiz, unda siz trimStart/trimLeft va trimEnd/trimRight usullardan foydalanishingiz mumkin. Keling, salomlashishda ushbu usullarning namunasini ko'rib chiqaylik,

      ```javascript
      var greeting = '   Hello, Goodmorning!   ';

      console.log(greeting); // "   Hello, Goodmorning!   "
      console.log(greeting.trimStart()); // "Hello, Goodmorning!   "
      console.log(greeting.trimLeft()); // "Hello, Goodmorning!   "

      console.log(greeting.trimEnd()); // "   Hello, Goodmorning!"
      console.log(greeting.trimRight()); // "   Hello, Goodmorning!"
      ```

      **[⬆ Back to Top](#table-of-contents)**

349.  ### Unar operator bilan quyidagi konsol bayonotining chiqishi nima]with unary operator

      Quyida keltirilgan unary operator bilan konsol bayonotini olaylik,

      ```javascript
      console.log(+'Hello');
      ```

      Yuqoridagi konsol jurnali bayonotining chiqishi NaNni qaytaradi. Chunki element unar operator tomonidan prefiksga ega va JavaScript tarjimoni ushbu elementni raqam turiga aylantirishga harakat qiladi. Konvertatsiya bajarilmagani uchun bayonotning qiymati NaN qiymatiga olib keladi.

      **[⬆ Back to Top](#table-of-contents)**

350.  ### Javascript mixins foydalanadimi?]

      Mixin umumiy objektga yo'naltirilgan dasturlash atamasi bo'lib, u boshqa sinflar tomonidan meros qilib olinishi kerak bo'lmagan holda ishlatilishi mumkin bo'lgan usullarni o'z ichiga olgan sinfdir. JavaScriptda biz faqat bitta objektdan meros olishimiz mumkin. ya'ni. [[prototype]] objekt uchun faqat bitta bo'lishi mumkin .

      Ammo ba'zida biz bir nechtasini kengaytirishni talab qilamiz, buni bartaraf etish uchun biz Mixin-dan foydalanishimiz mumkin, bu usullarni boshqa sinf prototipiga nusxalashga yordam beradi.

      Masalan, bizda ikkita sinf bor Userva CleanRoom. Aytaylik , foydalanuvchi xonani talabiga ko'ra tozalashi uchun CleanRoom funksiyani ga qo'shishimiz kerak. UserBu erda miksinlar deb ataladigan tushuncha paydo bo'ladi.

      ```javascript
      // mixin
      let cleanRoomMixin = {
        cleanRoom() {
          alert(`Hello ${this.name}, your room is clean now`);
        },
        sayBye() {
          alert(`Bye ${this.name}`);
        },
      };

      // usage:
      class User {
        constructor(name) {
          this.name = name;
        }
      }

      // copy the methods
      Object.assign(User.prototype, cleanRoomMixin);

      // now User can clean the room
      new User('Dude').cleanRoom(); // Hello Dude, your room is clean now!
      ```

      **[⬆ Back to Top](#table-of-contents)**

351.  ### Thunk funktsiyasi nima]

      Thunk - bu qiymatni baholashni kechiktiradigan funksiya. Bu hech qanday argumentlarni talab qilmaydi, lekin har safar thunkni chaqirganingizda qiymat beradi. ya'ni, u hozir bajarilmaydi, lekin kelajakda bo'ladi. Keling, sinxron misolni olaylik,

      ```javascript
      const add = (x, y) => x + y;

      const thunk = () => add(2, 3);

      thunk(); // 5
      ```

      **[⬆ Back to Top](#table-of-contents)**

352.  ### Asinxron thunks nima]

      Asinxron thunklar tarmoq so'rovlarini amalga oshirish uchun foydalidir. Keling, tarmoq so'rovlarining misolini ko'rib chiqaylik,

      ```javascript
      function fetchData(fn) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then((response) => response.json())
          .then((json) => fn(json));
      }

      const asyncThunk = function () {
        return fetchData(function getData(data) {
          console.log(data);
        });
      };

      asyncThunk();
      ```

      Funktsiya getData darhol chaqirilmaydi, lekin u faqat API so'nggi nuqtasidan ma'lumotlar mavjud bo'lganda chaqiriladi. setTimeout funksiyasi bizning kodimizni asinxron qilish uchun ham ishlatiladi. Haqiqiy vaqtda eng yaxshi misol - jo'natish uchun harakatlarni kechiktirish uchun asinxron thunklardan foydalanadigan redux davlat boshqaruvi kutubxonasi.

      **[⬆ Back to Top](#table-of-contents)**

353.  ### Quyidagi funksiya chaqiruvlarining natijasi nima]

      **Code snippet:**

      ```javascript
      const circle = {
        radius: 20,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
      };
      ```

      console.log(circle.diameter());
      console.log(circle.perimeter());

      **Output:**

      The output 40 va NaN ni tashkil qiladi. Esda tutingki, diametr oddiy funktsiyadir, perimetr qiymati esa o'q funktsiyasidir. Muntazam thisfunktsiyaning kalit so'zi (ya'ni, diametr) sinf (ya'ni, Shakl objekti) bo'lgan atrofdagi doiraga ishora qiladi. Perimetr funktsiyasining ushbu kalit so'zi oyna objekti bo'lgan atrofdagi doiraga ishora qiladi. Oyna objektlarida radius xususiyati yo'qligi sababli u aniqlanmagan qiymatni qaytaradi va son qiymatining ko'pligi NaN qiymatini qaytaradi.

      **[⬆ Back to Top](#table-of-contents)**

354.  ### Satrdagi barcha qator uzilishlarini qanday olib tashlash mumkin]

      Eng oson yondashuv - bu satrdagi yangi qatorlarni aniqlash va almashtirish uchun muntazam iboralardan foydalanish. Bunday holda biz almashtirish funktsiyasidan satr bilan birga foydalanamiz, bu bizning holatlarimizda bo'sh qatordir.

      ```javascript
      function remove_linebreaks( var message ) {
          return message.replace( /[\r\n]+/gm, "" );
      }
      ```

      Yuqoridagi ifodada g va m global va ko'p qatorli bayroqlar uchundir.

      **[⬆ Back to Top](#table-of-contents)**

355.  ### Qayta ishlash(reflow) va qayta bo'yash(repaint) o'rtasidagi farq nima]

      Qayta bo'yash elementning ko'rinishiga ta'sir qiladigan o'zgarishlar kiritilganda sodir bo'ladi, lekin uning tartibiga emas. Bunga misollar kontur, ko'rinish yoki fon rangini o'z ichiga oladi. Qayta ishlash sahifaning bir qismining (yoki butun sahifaning) tartibiga ta'sir qiluvchi o'zgarishlarni o'z ichiga oladi. Brauzer oynasining o'lchamini o'zgartirish, shriftni o'zgartirish, tarkibni o'zgartirish (foydalanuvchi matni kabi), hisoblangan uslublarni o'z ichiga olgan JavaScript usullarini qo'llash, DOMga elementlarni qo'shish yoki o'chirish va element sinflarini o'zgartirish - bu qayta ishlashni boshlashi mumkin bo'lgan bir nechta narsalar. Elementni qayta o'tkazish DOMdagi barcha asosiy va ajdod elementlari hamda undan keyingi barcha elementlarning keyingi qayta oqimiga sabab bo'ladi.

      **[⬆ Back to Top](#table-of-contents)**

356.  ### Massivni inkor qilish bilan nima sodir bo'ladi]

      Belgili massivni inkor etish massivni mantiqiy qiymatga !majburlaydi. Massivlar to'g'ri deb hisoblanganligi sababli, inkor qilinsa, u qaytib keladi false.

      ```javascript
      console.log(![]); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

357.  ### Agar ikkita massiv qo'shsak nima bo'ladi]

      Agar siz ikkita massivni birga qo'shsangiz, u ikkalasini ham satrlarga aylantiradi va ularni birlashtiradi. Masalan, massivlarni qo'shish natijasi quyidagicha bo'ladi,

      ```javascript
      console.log(['a'] + ['b']); // "ab"
      console.log([] + []); // ""
      console.log(![] + []); // "false", because ![] returns false.
      ```

      **[⬆ Back to Top](#table-of-contents)**

358.  ### Noto'g'ri qiymatlar bo'yicha yuqori qo'shimcha operatorning chiqishi qanday bo'ladi]on falsy values

      Agar siz qo'shimcha (+) operatorini noto'g'ri qiymatlar (null, undefined, NaN, false, "") ustiga qo'ysangiz, noto'g'ri qiymat nolga aylanadi. Keling, ularni brauzer konsolida quyidagi tarzda ko'rsatamiz,

      ```javascript
      console.log(+null); // 0
      console.log(+undefined); // NaN
      console.log(+false); // 0
      console.log(+NaN); // NaN
      console.log(+''); // 0
      ```

      **[⬆ Back to Top](#table-of-contents)**

359.  ### Maxsus belgilar yordamida o'z-o'zidan strigni qanday yaratasiz]characters

      O'z-o'zidan qator []()!+belgilar kombinatsiyasi bilan tuzilishi mumkin. Ushbu naqshga erishish uchun quyidagi konventsiyalarni eslab qolishingiz kerak.

      1.  Massivlar toʻgʻri qiymatlar boʻlgani uchun massivlarni inkor etish notoʻgʻri maʼnoni keltirib chiqaradi: ![] === false
      2.  Massivlar toʻgʻri qiymatlar boʻlgani uchun massivlarni inkor etish notoʻgʻri maʼnoni keltirib chiqaradi: ![] === false
      3.  Massiv oldiga + operatori qoʻyilsa, massiv “false”ga oʻzgaradi, inkor qilish uni rost qiladi va natijani oʻzgartirish “1” qiymatini hosil qiladi: +(!(+[])) === 1

      Yuqoridagi qoidalarni qo'llash orqali biz quyidagi shartlarni olishimiz mumkin

      ```javascript
      (![] + [] === 'false' + !+[]) === 1;
      ```

      Endi belgilar namunasi quyidagi tarzda yaratiladi,

      ```javascript
            s               e               l               f
       ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^

       (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]
       ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^
      (![] + [])[+!+[]+!+[]+!+[]] +
      (![] + [])[+!+[]+!+[]+!+[]+!+[]] +
      (![] + [])[+!+[]+!+[]] +
      (![] + [])[+[]]
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      (![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]
      ```

      **[⬆ Back to Top](#table-of-contents)**

360.  ### Massivdan noto'g'ri qiymatlarni qanday olib tashlash mumkin]

      Parametr sifatida mantiqiy ni o'tkazish orqali massivda filtr usulini qo'llashingiz mumkin. Shunday qilib, u massivdan barcha noto'g'ri qiymatlarni (0, aniqlanmagan, null, noto'g'ri va "") olib tashlaydi.

      ```javascript
      const myArray = [false, null, 1, 5, undefined];
      myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
      ```

      **[⬆ Back to Top](#table-of-contents)**

361.  ### Massivning noyob qiymatlarini qanday olish mumkin

      Set Siz va qolgan ifoda/spread(...) sintaksisining kombinatsiyasi bilan massivning noyob qiymatlarini olishingiz mumkin .

      ```javascript
      console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]
      ```

      **[⬆ Back to Top](#table-of-contents)**

362.  ### Taxalluslarni buzish nima

      Ba'zan siz mulk nomidan boshqa nomga ega vayron qilingan o'zgaruvchiga ega bo'lishni xohlaysiz. Bunday holda, : newName o'zgaruvchining nomini belgilash uchun a dan foydalanasiz. Bu jarayon taxalluslarni buzish deb ataladi.

      ```javascript
      const obj = { x: 1 };
      // Grabs obj.x as as { otherName }
      const { x: otherName } = obj;
      ```

      **[⬆ Back to Top](#table-of-contents)**

363.  ### Map usulini ishlatmasdan massiv qiymatlarini qanday Map qilish mumkinmethod

      Massiv qiymatlarini mapfaqat Massiv usuli yordamida metoddan foydalanmasdan xaritalash mumkin from. Mamlakatlar massividan shahar nomlarini xaritaga keltiramiz,

      ```javascript
      const countries = [
        { name: 'India', capital: 'Delhi' },
        { name: 'US', capital: 'Washington' },
        { name: 'Russia', capital: 'Moscow' },
        { name: 'Singapore', capital: 'Singapore' },
        { name: 'China', capital: 'Beijing' },
        { name: 'France', capital: 'Paris' },
      ];

      const cityNames = Array.from(countries, ({ capital }) => capital);
      console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
      ```

      **[⬆ Back to Top](#table-of-contents)**

364.  ### Massivni qanday bo'shatish mumkin

      Massiv uzunligini nolga o'rnatish orqali massivni tezda bo'shatish mumkin.

      ```javascript
      let cities = ['Singapore', 'Delhi', 'London'];
      cities.length = 0; // cities becomes []
      ```

      **[⬆ Back to Top](#table-of-contents)**

365.  ### Qanday qilib raqamlarni ma'lum o'nli kasrlarga yaxlitlash mumkin

      toFixed Mahalliy JavaScript usulidan foydalanib, raqamlarni ma'lum miqdordagi o'nli kasrlarga yaxlitlashingiz mumkin .

      ```javascript
      let pie = 3.141592653;
      pie = pie.toFixed(3); // 3.142
      ```

      **[⬆ Back to Top](#table-of-contents)**

366.  ### Massivni objektga aylantirishning eng oson yo'li qanday?object

      Spread(...) operatori yordamida massivni bir xil ma’lumotlarga ega ob’ektga aylantirishingiz mumkin.

      ```javascript
      var fruits = ['banana', 'apple', 'orange', 'watermelon'];
      var fruitsObject = { ...fruits };
      console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}
      ```

      **[⬆ Back to Top](#table-of-contents)**

367.  ### Ba'zi ma'lumotlar bilan massivni qanday yaratish mumkin

      fill Usul yordamida siz ba'zi ma'lumotlarga ega massiv yoki bir xil qiymatlarga ega massiv yaratishingiz mumkin .

      ```javascript
      var newArray = new Array(5).fill('0');
      console.log(newArray); // ["0", "0", "0", "0", "0"]
      ```

      **[⬆ Back to Top](#table-of-contents)**

368.  ### Konsol objektidagi to'ldiruvchilar nima

      Quyida konsol objektida mavjud bo'lgan to'ldiruvchilar ro'yxati keltirilgan,

      1.  %o — object oladi,
      2.  %s — string oladi,
      3.  %d — Oʻnlik yoki butun son uchun ishlatiladi.

          These placeholders can be represented in the console.log as below

      ```javascript
      const user = { name: 'John', id: 1, city: 'Delhi' };
      console.log(
        'Hello %s, your details %o are available in the object form',
        'John',
        user
      ); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object
      ```

      **[⬆ Back to Top](#table-of-contents)**

369.  ### Konsol xabarlariga CSS qo'shish mumkinmi?

      Ha, siz CSS uslublarini veb-sahifadagi html matniga o'xshash konsol xabarlariga qo'llashingiz mumkin.

      ```javascript
      console.log(
        '%c The text has blue color, with large font and red background',
        'color: blue; font-size: x-large; background: red'
      );
      ```

      The text will be displayed as below,
      ![Screenshot](images/console-css.png)

      **Note:** Barcha CSS uslublari konsol xabarlariga qo'llanilishi mumkin.

      **[⬆ Back to Top](#table-of-contents)**

370.  ### Konsol objektining dir usulidan maqsad nimaobject

      Belgilangan console.dir() JavaScript obyekti xususiyatlarining interaktiv roʻyxatini JSON sifatida koʻrsatish uchun ishlatiladi.

      ```javascript
      const user = { name: 'John', id: 1, city: 'Delhi' };
      console.dir(user);
      ```

      SON ko'rinishida ko'rsatilgan foydalanuvchi objekti
      ![Screenshot](images/console-dir.png)

      **[⬆ Back to Top](#table-of-contents)**

371.  ### Konsolda HTML elementlarini disk raskadrovka qilish mumkinmi?

      Ha, xuddi elementlarni tekshirish kabi konsolda HTML elementlarini olish va disk raskadrovka qilish mumkin.

      ```javascript
      const element = document.getElementsByTagName('body')[0];
      console.log(element);
      ```

      U HTML elementini konsolda chop etadi,

      ![Screenshot](images/console-html.png)

      **[⬆ Back to Top](#table-of-contents)**

372.  ### Konsol objekti yordamida ma'lumotlarni jadval formatida qanday ko'rsatish mumkinconsole object

      console.table() Murakkab massivlar yoki objektlarni ko'rish uchun konsoldagi ma'lumotlarni jadval ko'rinishida ko'rsatish uchun ishlatiladi .

      ```js
      const users = [
        { name: 'John', id: 1, city: 'Delhi' },
        { name: 'Max', id: 2, city: 'London' },
        { name: 'Rod', id: 3, city: 'Paris' },
      ];
      console.table(users);
      ```

      Jadval formatida tasvirlangan ma'lumotlar,

      ![Screenshot](images/console-table.png)
      **Not:** console.table() IE da qo'llab-quvvatlanmasligini unutmang .

      **[⬆ Back to Top](#table-of-contents)**

373.  ### Argument son yoki son emasligini qanday tekshirish mumkinnot

      IsNaN va isFinite usullarining kombinatsiyasi argument son yoki yo'qligini tasdiqlash uchun ishlatiladi.

      ```javascript
      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

374.  ### Buferga nusxa ko'chirish tugmasi qanday yaratiladi

      Kirish elementining mazmunini (.select() usuli yordamida) tanlashingiz va execCommand (ya'ni, execCommand('copy')) bilan nusxa ko'chirish buyrug'ini bajarishingiz kerak. Kesish va joylashtirish kabi boshqa tizim buyruqlarini ham bajarishingiz mumkin.

      ```javascript
      document.querySelector('#copy-button').onclick = function () {
        // Select the content
        document.querySelector('#copy-input').select();
        // Copy to the clipboard
        document.execCommand('copy');
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

375.  ### Timestamp uchun shortcut nima

      new Date().getTime() Joriy vaqt tamg'asini olish uchun foydalanishingiz mumkin . Qiymatni olish uchun muqobil yorliq mavjud.

      ```javascript
      console.log(+new Date());
      console.log(Date.now());
      ```

      **[⬆ Back to Top](#table-of-contents)**

376.  ### Ko'p o'lchovli massivlarni qanday tekislash mumkin

      Ikki o'lchovli massivlarni tekislash Spread operatori bilan ahamiyatsiz.

      ```javascript
      const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
      const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
      ```

      Lekin siz uni rekursiv qo'ng'iroqlar orqali ko'p o'lchovli massivlar bilan ishlashingiz mumkin,

      ```javascript
      function flattenMultiArray(arr) {
        const flattened = [].concat(...arr);
        return flattened.some((item) => Array.isArray(item))
          ? flattenMultiArray(flattened)
          : flattened;
      }
      const multiDimensionalArr = [
        11,
        [22, 33],
        [44, [55, 66, [77, [88]], 99]],
      ];
      const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
      ```

      **[⬆ Back to Top](#table-of-contents)**

377.  ### Ko'p holatni tekshirishning(multi condition checking) eng oson usuli

      indexOf Har bir qiymatni bitta shart sifatida tekshirish o'rniga, kirishni bir nechta qiymatlar bilan solishtirish uchun foydalanishingiz mumkin .

      ```javascript
      // Verbose approach
      if (
        input === 'first' ||
        input === 1 ||
        input === 'second' ||
        input === 2
      ) {
        someFunction();
      }
      // Shortcut
      if (['first', 1, 'second', 2].indexOf(input) !== -1) {
        someFunction();
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

378.  ### Brauzerning orqaga tugmachasini qanday suratga olasiz

      Usul window.onbeforeunload brauzerning orqaga tugmasi hodisalarini yozib olish uchun ishlatiladi. Bu foydalanuvchilarni joriy ma'lumotlarni yo'qotish haqida ogohlantirish uchun foydalidir.

      ```javascript
      window.onbeforeunload = function () {
        alert('You work will be lost');
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

379.  ### Veb-sahifada sichqonchaning o'ng tugmachasini qanday o'chirib qo'yish mumkin

      oncontextmenu Body elementidagi atributdan false qiymatini qaytarish orqali sahifani o'ng tugmasini bosishni o'chirib qo'yish mumkin .

      ```html
      <body oncontextmenu="return false;"></body>
      ```

      **[⬆ Back to Top](#table-of-contents)**

380.  ### O'rash objektlari(wrapper object) nima

      String, raqam va mantiqiy kabi ibtidoiy qiymatlar xossa va usullarga ega emas, lekin ular ustida amallarni bajarishga harakat qilganingizda ular vaqtincha objektga (Wrapper objekti) aylantiriladi yoki majburlanadi. Misol uchun, agar siz ibtidoiy satr qiymatida toUpperCase() usulini qo'llasangiz, u xatoga yo'l qo'ymaydi, lekin satrning bosh harfini qaytaradi.

      ```javascript
      let name = 'john';

      console.log(name.toUpperCase()); // Behind the scenes treated as console.log(new String(name).toUpperCase());
      ```

      Ya'ni, null va undefineddan tashqari har bir ibtidoiy o'rash objektlariga ega va o'rash objektlari ro'yxati: String, Number, Boolean, Symbol va BigInt.

      **[⬆ Back to Top](#table-of-contents)**

381.  ### AJAX nima

      AJAX asinxron JavaScript va XML degan ma'noni anglatadi va u ma'lumotlarni asinxron tarzda ko'rsatish uchun ishlatiladigan tegishli texnologiyalar (HTML, CSS, JavaScript, XMLHttpRequest API va boshqalar) guruhidir. ya'ni veb-sahifani qayta yuklamasdan serverga ma'lumotlarni yuborishimiz va serverdan ma'lumotlarni olishimiz mumkin.

      **[⬆ Back to Top](#table-of-contents)**

382.  ### Asinxron kod bilan ishlashning turli usullari qandayAsynchronous Code

      Quyida asenkron kod bilan ishlashning turli usullari ro'yxati keltirilgan.

      1.  Callbacks
      2.  Promises
      3.  Async/await
      4.  Third-party libraries such as async.js,bluebird etc

      **[⬆ Back to Top](#table-of-contents)**

383.  ### Qanday qilib qabul qilishni bekor qilish mumkin

      Bir necha kun oldin, mahalliy va'dalarning bitta kamchiliklari olib kelish so'rovini bekor qilishning bevosita usuli emas. Ammo AbortControllerjs spetsifikatsiyasining yangisi bir yoki bir nechta chaqiruvlarni bekor qilish uchun signaldan foydalanishga imkon beradi. Yuklab olish so'rovini bekor qilishning asosiy oqimi quyidagicha bo'ladi:

      1.  AbortController Misol yarating
      2.  Misolning signal xususiyatini oling va signalni signalni olish varianti sifatida uzating
      3.  Ushbu signaldan foydalanadigan barcha chaqiruvlarni bekor qilish uchun AbortController-ning bekor qilish xususiyatiga chaqiradi
          Masalan, bir xil signalni bir nechta chaqiruv qo'ng'iroqlariga o'tkazamiz, bu signal bilan barcha so'rovlarni bekor qiladi,

      ```javascript
      const controller = new AbortController();
      const { signal } = controller;

      fetch('http://localhost:8000', { signal })
        .then((response) => {
          console.log(`Request 1 is complete!`);
        })
        .catch((e) => {
          if (e.name === 'AbortError') {
            // We know it's been canceled!
          }
        });

      fetch('http://localhost:8000', { signal })
        .then((response) => {
          console.log(`Request 2 is complete!`);
        })
        .catch((e) => {
          if (e.name === 'AbortError') {
            // We know it's been canceled!
          }
        });

      // Wait 2 seconds to abort both requests
      setTimeout(() => controller.abort(), 2000);
      ```

      **[⬆ Back to Top](#table-of-contents)**

384.  ### Veb nutq API (web speech API) nima ?

      Veb nutq API-si zamonaviy brauzerlarga nutqni (ya'ni, ovozli ma'lumotlarni veb-ilovalarda) tanib olish va sintez qilish imkonini berish uchun ishlatiladi. Ushbu API 2012 yilda W3C hamjamiyati tomonidan taqdim etilgan. U ikkita asosiy qismdan iborat:

      1.  **SpeechRecognition (Asynchronous Speech Recognition or Speech-to-Text):** Bu audio kiritishdan ovozli kontekstni tanib olish va shunga mos ravishda javob berish imkoniyatini beradi. Bunga SpeechRecognition interfeys orqali kirish mumkin.
          Quyidagi misol nutqdan matn olish uchun ushbu APIdan qanday foydalanishni ko'rsatadi,

      ```javascript
      window.SpeechRecognition =
        window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
      const recognition = new window.SpeechRecognition();
      recognition.onresult = (event) => {
        // SpeechRecognitionEvent type
        const speechToText = event.results[0][0].transcript;
        console.log(speechToText);
      };
      recognition.start();
      ```

      Ushbu API-da brauzer sizdan mikrofoningizdan foydalanishga ruxsat so'raydi

      1.  **SpeechSynthesis (Text-to-Speech):** Bu audio kiritishdan ovozli kontekstni tanib olish va javob berish imkoniyatini beradi. Bunga SpeechSynthesisinterfeys orqali kirish mumkin.

      Masalan, matndan ovoz/nutq olish uchun quyidagi kod ishlatiladi,

      ```javascript
      if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance('Hello World!');
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
      }
      ```

      Yuqoridagi misollarni chrome(33+) brauzerining dasturchi konsolida sinab ko'rish mumkin.
      **Note:** Bu API hali ham ishlayotgan qoralama va faqat Chrome va Firefox brauzerlarida mavjud (albatta Chrome faqat spetsifikatsiyani amalga oshirgan)

      **[⬆ Back to Top](#table-of-contents)**

385.  ### Minimal vaqt tugashini kamaytirish(minimum timeout) nima

      Brauzer va NodeJS javascript muhitlari 0 ms dan ortiq minimal kechikish bilan siqiladi. Bu shuni anglatadiki, 0ms kechikish bir zumda sodir bo'lmaydi.
      **Browsers:** Ularda kamida 4ms kechikish bor. callbacklarni joylashtirish (ma'lum bir chuqurlik) tufayli yoki ma'lum bir qator ketma-ket oraliqlardan keyin ketma-ket qo'ng'iroqlar ishga tushirilganda, bu regulyator sodir bo'ladi. Eslatma: Eski brauzerlarda kamida 10 ms kechikish mavjud.
      **Nodejs:** Ularda kamida 1ms kechikish bor. Bu drossel kechikish 2147483647 dan kattaroq yoki 1 dan kamroq bo'lsa sodir bo'ladi. Bu vaqt tugashini qisqartirish xatti-harakatini tushuntirishga eng yaxshi misol quyida keltirilgan kod parchasi tartibidir.

      ```javascript
      function runMeFirst() {
        console.log('My script is initialized');
      }
      setTimeout(runMeFirst, 0);
      console.log('Script loaded');
      ```

      va natija mana shunday boladi

      ```cmd
      Script loaded
      My script is initialized
      ```

      dan foydalanmasangiz `setTimeout`, jurnallar tartibi ketma-ket bo'ladi.

      ```javascript
      function runMeFirst() {
        console.log('My script is initialized');
      }
      runMeFirst();
      console.log('Script loaded');
      ```

      and the output is,

      ```cmd
      My script is initialized
      Script loaded
      ```

      **[⬆ Back to Top](#table-of-contents)**

386.  ### Zamonaviy brauzerlarda nol vaqt tugashini qanday amalga oshirasizbrowsers

      0ms dan ortiq minimal kechikish tufayli kodni darhol bajarish uchun setTimeout(fn, 0) dan foydalana olmaysiz. Ammo bu xatti-harakatga erishish uchun window.postMessage() dan foydalanishingiz mumkin.

      **[⬆ Back to Top](#table-of-contents)**

387.  ### Event loop qanday vazifalar mavjud

      Vazifa - bu dasturni ishga tushirishni boshlash, voqeani callbackni boshlash yoki ishdan bo'shatilgan interval yoki vaqt tugashi kabi standart mexanizmlar tomonidan ishga tushirilishi rejalashtirilgan har qanday JavaScript kodi/dasturidir. Bu vazifalarning barchasi vazifa navbatida rejalashtirilgan.
      Quyida vazifalar navbatiga vazifalar qo'shish uchun foydalanish holatlari ro'yxati keltirilgan,

      1.  Yangi JavaScript dasturi to'g'ridan-to'g'ri konsoldan yoki `<script>` element tomonidan ishga tushirilganda, vazifa vazifalar qatoriga qo'shiladi.
      2.  Voqea sodir bo'lganda, voqeani callback vazifa navbatiga qo'shiladi
      3.  SetTimeout yoki setIntervalga erishilganda, tegishli callback vazifa navbatiga qo'shiladi

      **[⬆ Back to Top](#table-of-contents)**

388.  ### Mikrovazifa(microtask) nima

      Microtask bu hozir bajarilayotgan vazifa/mikrotask bajarilgandan so'ng darhol bajarilishi kerak bo'lgan javascript kodi. Ular tabiatan to'siq bo'ladi. ya'ni, mikrovazifalar navbati bo'sh bo'lgunga qadar asosiy mavzu bloklanadi. Mikrotopshiriqlarning asosiy manbalari Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers va boshqalar.

      **Note:** Ushbu mikrovazifalarning barchasi voqea tsiklining bir xil aylanishida qayta ishlanadi.
      **[⬆ Back to Top](#table-of-contents)**

389.  ### What are different event loops

      **[⬆ Back to Top](#table-of-contents)**

390.  ### What is the purpose of queuemicrotask

      **[⬆ Back to Top](#table-of-contents)**

391.  ### Typescript faylida javascript kutubxonalaridan qanday foydalanasizfile

      Ma'lumki, hamma JavaScript kutubxonalari yoki ramkalarida TypeScript deklaratsiya fayllari mavjud emas. Ammo agar siz hali ham TypeScript fayllarimizdagi kutubxonalar yoki ramkalardan kompilyatsiya xatosiga yo'l qo'ymasdan foydalanmoqchi bo'lsangiz, yagona yechim - declareo'zgaruvchan deklaratsiya bilan birga kalit so'z. Misol uchun, sizda customLibraryTypeScript deklaratsiyasiga ega bo'lmagan va customLibraryglobal nomlar maydonida nom maydoniga ega bo'lgan kutubxonangiz bor deb tasavvur qilaylik. Siz ushbu kutubxonadan quyidagi matn kodida foydalanishingiz mumkin,

      ```javascript
      declare var customLibrary;
      ```

      Ishlash vaqtida typescript customLibraryo'zgaruvchiga tur sifatida anyturni beradi. Declare kalit so'zini ishlatmasdan boshqa alternativa quyida keltirilgan

      ```javascript
      var customLibrary: any;
      ```

      **[⬆ Back to Top](#table-of-contents)**

392.  ### Promises va kuzatilishi mumkin bo'lganlar o'rtasidagi farqlar qandayobservables

      Jadval shaklidagi asosiy farqlardan ba'zilari

      | Promises                                                   | Observables                                                                                      |
      | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
      | Bir vaqtning o'zida faqat bitta qiymat chiqaradi           | Muayyan vaqt davomida bir nechta qiymatlarni chiqaradi (0 dan bir nechta qiymatlar oqimi)        |
      | Tabiatda ishtiyoqli; ular darhol chaqiriladi               | Tabiatan dangasa; ular obunani chaqirishni talab qiladi                                          |
      | Va'da darhol hal qilingan bo'lsa ham, har doim asinxrondir | Kuzatiladigan sinxron yoki asinxron bo'lishi mumkin                                              |
      | Hech qanday operatorni taqdim etmaydi                      | Map, forEach, filtrlash, kamaytirish, qayta urinish va retryWhen kabi operatorlarni taqdim etadi |
      | Bekor qilish mumkin emas                                   | unsubscribe() usuli yordamida bekor qilindi                                                      |

      **[⬆ Back to Top](#table-of-contents)**

393.  ### Heap nima

      Heap(Yoki xotira uyasi) - bu o'zgaruvchilarni aniqlaganimizda objektlar saqlanadigan xotira joyi. Ya'ni, bu barcha xotira taqsimoti va ajratish joyi bo'lgan joy. Uyma va qo'ng'iroqlar to'plami ham JS ish vaqtining ikkita konteyneridir. Ish vaqti kodda o'zgaruvchilar va funksiya deklaratsiyasiga duch kelganda, ularni Uyumda saqlaydi.

      ![Screenshot](images/heap.png)

      **[⬆ Back to Top](#table-of-contents)**

394.  ### Voqealar jadvali(event table) nima

      Voqealar jadvali - bu ma'lum vaqt oralig'idan keyin yoki ba'zi API so'rovlari hal qilinganidan keyin asinxron tarzda bajariladigan barcha hodisalarni saqlaydigan va kuzatib boruvchi ma'lumotlar tuzilmasi. ya'ni setTimeout funksiyasini chaqirganingizda yoki asinxron operatsiyani chaqirganingizda, u Voqealar jadvaliga qo'shiladi. U o'z-o'zidan funktsiyalarni bajarmaydi. Voqealar jadvalining asosiy maqsadi voqealarni kuzatib borish va ularni quyidagi diagrammada ko'rsatilganidek, voqea navbatiga yuborishdir.

      ![Screenshot](images/event-table.png)

      **[⬆ Back to Top](#table-of-contents)**

395.  ### MicroTask navbati nima

      Microtask Queue - bu va'da qilingan objektlar tomonidan boshlangan barcha vazifalar callback qilish navbatidan oldin qayta ishlanadigan yangi navbat. Mikrovazifalar navbati keyingi renderlash va bo'yash ishlaridan oldin qayta ishlanadi. Ammo agar bu mikrovazifalar uzoq vaqt davomida ishlayotgan bo'lsa, bu vizual buzilishlarga olib keladi.

      **[⬆ Back to Top](#table-of-contents)**

396.  ### Shim va polifill o'rtasidagi farq nima

      Shim bu faqat shu muhit vositalaridan foydalangan holda eski muhitga yangi API olib keladigan kutubxona. Bu veb-ilova bilan cheklanishi shart emas. Masalan, es5-shim.js eski brauzerlarda (asosan IE9-dan oldingi) ES5 xususiyatlarini taqlid qilish uchun ishlatiladi. Holbuki, polyfill bu kod (yoki plagin) boʻlagi boʻlib, u siz, ishlab chiquvchi, brauzer mahalliy sifatida taqdim etishini kutgan texnologiyani taʼminlaydi. Oddiy jumla bilan aytganda, polyfill brauzer API uchun shimdir.

      **[⬆ Back to Top](#table-of-contents)**

397.  ### Primitiv yoki primitiv bo'lmagan qiymat turini qanday aniqlash mumkinvalue type

      JavaScriptda ibtidoiy turlarga boolean, string, number, BigInt, null, Symbol va undefined kiradi. Holbuki, ibtidoiy bo'lmagan turlarga objektlar kiradi. Lekin siz ularni quyidagi funksiya bilan osongina aniqlashingiz mumkin,

      ```javascript
      var myPrimitive = 30;
      var myNonPrimitive = {};
      function isPrimitive(val) {
        return Object(val) !== val;
      }

      isPrimitive(myPrimitive);
      isPrimitive(myNonPrimitive);
      ```

      Agar qiymat ibtidoiy ma'lumotlar turi bo'lsa, objekt konstruktori qiymat uchun yangi o'rash objektini yaratadi. Ammo agar qiymat ibtidoiy bo'lmagan ma'lumotlar turi (objekt) bo'lsa, objekt konstruktori xuddi shu objektni beradi.

      **[⬆ Back to Top](#table-of-contents)**

398.  ### Babel nima

      Babel - bu ECMAScript 2015+ kodini joriy va eski brauzerlar yoki muhitlarda JavaScript-ning orqaga qarab mos keladigan versiyasiga aylantirish uchun JavaScript transpilyatoridir. Ba'zi asosiy xususiyatlar quyida keltirilgan,

      1.  Transform syntax
      2.  Maqsadli muhitda etishmayotgan Polyfill xususiyatlari (@babel/polyfill yordamida)
      3.  Manba kodini o'zgartirish (yoki kod modlari)

      **[⬆ Back to Top](#table-of-contents)**

399.  ### Node.js butunlay bitta tishlimi (single threaded)

      Node bu bitta ip (single thread), lekin Node.js standart kutubxonasiga kiritilgan ba'zi funksiyalar (masalan, fs moduli funktsiyalari) bitta tishli emas. ya'ni, ularning mantig'i dasturning tezligi va ishlashini yaxshilash uchun Node.js bitta ish zarrachasidan tashqarida ishlaydi.

      **[⬆ Back to Top](#table-of-contents)**

400.  ### Kuzatiladigan narsalardan qanday umumiy foydalanish holatlari mavjud

      Kuzatiladigan qurilmalardan foydalanishning eng keng tarqalgan holatlaridan ba'zilari push-bildirishnomalari, foydalanuvchi kiritishidagi o'zgarishlar, takroriy intervallar va boshqalar bilan veb-rozetkalardir.

      **[⬆ Back to Top](#table-of-contents)**

401.  ### RxJS nima

      RxJS (Reactive Extensions for JavaScript) bu asinxron yoki callbackqa asoslangan kodni yaratishni osonlashtiradigan kuzatiladiganlardan foydalangan holda reaktiv dasturlashni amalga oshirish uchun kutubxona. Shuningdek, u kuzatiladiganlarni yaratish va ular bilan ishlash uchun yordamchi funksiyalarni taqdim etadi.

      **[⬆ Back to Top](#table-of-contents)**

402.  ### Funktsiya konstruktori va funksiya deklaratsiyasi o'rtasidagi farq nimaconstructor and function declaration

      Bilan yaratilgan funksiyalar Function constructoro'zlarining yaratilish kontekstlariga chek qo'ymaydi, lekin ular doimo global miqyosda yaratiladi. ya'ni, funksiya faqat o'zining mahalliy o'zgaruvchilari va global qamrov o'zgaruvchilariga kirishi mumkin. Holbuki, funktsiya deklaratsiyasi tashqi funktsiya o'zgaruvchilariga (yopiqlar) ham kirishi mumkin.

Keling, bu farqni misol bilan ko'rib chiqaylik,

      **Function Constructor:**

      ```javascript
      var a = 100;
      function createFunction() {
        var a = 200;
        return new Function('return a;');
      }
      console.log(createFunction()()); // 100
      ```

      **Function declaration:**

      ```javascript
      var a = 100;
      function createFunction() {
        var a = 200;
        return function func() {
          return a;
        };
      }
      console.log(createFunction()()); // 200
      ```

      **[⬆ Back to Top](#table-of-contents)**

403.  ### Qisqa tutashuv holati (Short circuit condition) nima

      Qisqa tutashuv shartlari oddiy if iboralarini siqilgan tarzda yozish uchun mo'ljallangan. Keling, misol yordamida stsenariyni namoyish qilaylik. Agar siz autentifikatsiya sharti bilan portalga kirmoqchi boʻlsangiz, quyidagi ifoda boʻladi:

      ```javascript
      if (authenticate) {
        loginToPorta();
      }
      ```

      Javascript mantiqiy operatorlari chapdan o'ngga qarab baholanganligi sababli, yuqoridagi ifodani && mantiqiy operatori yordamida soddalashtirish mumkin.

      ```javascript
      authenticate && loginToPorta();
      ```

      **[⬆ Back to Top](#table-of-contents)**

404.  ### Massiv hajmini o'zgartirishning eng oson yo'li qanday?

      Massivning uzunlik xossasi massiv o‘lchamini o‘zgartirish yoki tezda bo‘shatish uchun foydalidir. Elementlar sonini 5 dan 2 gacha o'zgartirish uchun raqamlar massivida uzunlik xususiyatini qo'llaymiz,

      ```javascript
      var array = [1, 2, 3, 4, 5];
      console.log(array.length); // 5

      array.length = 2;
      console.log(array.length); // 2
      console.log(array); // [1,2]
      ```

      and the array can be emptied too va array ham boshatilishi mumkin

      ```javascript
      var array = [1, 2, 3, 4, 5];
      array.length = 0;
      console.log(array.length); // 0
      console.log(array); // []
      ```

      **[⬆ Back to Top](#table-of-contents)**

405.  ### Kuzatiladigan narsa nima

      Kuzatiladigan funksiya asosan qiymatlar oqimini kuzatuvchiga vaqt o‘tishi bilan sinxron yoki asinxron tarzda qaytarishi mumkin bo‘lgan funksiyadir. Iste'molchi qo'ng'iroq subscribe()qilish usuli orqali qiymatni olishi mumkin. Keling, kuzatilishi mumkin bo'lgan oddiy misolni ko'rib chiqaylik

      ```javascript
      import { Observable } from 'rxjs';

      const observable = new Observable((observer) => {
        setTimeout(() => {
          observer.next('Message from a Observable!');
        }, 3000);
      });

      observable.subscribe((value) => console.log(value));
      ```

      ![Screenshot](images/observables.png)

      **Note:** Kuzatiladiganlar hali JavaScript tilining bir qismi emas, lekin ularni tilga qo'shish taklif qilinmoqda

      **[⬆ Back to Top](#table-of-contents)**

406.  ### Funktsiya va sinf(class) deklaratsiyasi o'rtasidagi farq nimadeclarations

      unktsiya deklaratsiyasi va class deklaratsiyasi o'rtasidagi asosiy farq shundaki `hoisting`. Funktsiya deklaratsiyasi ko'tariladi, lekin sinf deklaratsiyasi emas.

      **Classes:**

      ```javascript
      const user = new User(); // ReferenceError

      class User {}
      ```

      **Constructor Function:**

      ```javascript
      const user = new User(); // No error

      function User() {}
      ```

      **[⬆ Back to Top](#table-of-contents)**

407.  ### Asinx funksiya nima

      Asinx funksiya asynckalit so'z bilan e'lon qilingan funksiya bo'lib, asinxron, va'daga asoslangan xatti-harakatlarni va'da zanjirlaridan qochib, toza uslubda yozish imkonini beradi. Bu funktsiyalar nol yoki undan ko'p awaitifodalarni o'z ichiga olishi mumkin.

      Keling, quyida async funktsiyasi misolini olaylik,

      ```javascript
      async function logger() {
        let data = await fetch('http://someapi.com/users'); // pause until fetch returns
        console.log(data);
      }
      logger();
      ```

      Bu asosan ES2015 va'dalari va generatorlari bo'yicha sintaksis shakaridir.

      **[⬆ Back to Top](#table-of-contents)**

408.  ### Qanday qilib va'dalarni yutish(promise swallowing) xatolarining oldini olish mumkin

      Asinxron koddan foydalanganda, JavaScript-ning ES6 va'dalari callback piramidalarisiz va har ikkinchi qatorda xatoliklarni bartaraf qilmasdan hayotingizni ancha osonlashtirishi mumkin. Ammo va'dalarning ba'zi tuzoqlari bor va eng kattasi sukut bo'yicha xatolarni yutishdir.

      Aytaylik, siz quyidagi barcha holatlar uchun konsolda xatolikni chop etishni kutmoqdasiz,

      ```javascript
      Promise.resolve('promised value').then(function () {
        throw new Error('error');
      });

      Promise.reject('error value').catch(function () {
        throw new Error('error');
      });

      new Promise(function (resolve, reject) {
        throw new Error('error');
      });
      ```

      Biroq, hech qanday xatoliklarni chop etmaydigan ko'plab zamonaviy JavaScript muhitlari mavjud. Siz bu muammoni turli yo'llar bilan hal qilishingiz mumkin,

      1.  Har bir zanjirning oxiriga ushlash blokini qo'shing: har bir va'da qilingan zanjirning oxiriga tutib olish blokini qo'shishingiz mumkin

          ```javascript
          Promise.resolve('promised value')
            .then(function () {
              throw new Error('error');
            })
            .catch(function (error) {
              console.error(error.stack);
            });
          ```

          Ammo har bir va'da zanjiri va batafsil ma'lumot uchun yozish juda qiyin.

      2.  Bajarilgan usulni qo'shish: Birinchi yechimni keyin o'zgartirishingiz va bloklarni bajarilgan usul bilan ushlashingiz mumkin

          ```javascript
          Promise.resolve('promised value').done(function () {
            throw new Error('error');
          });
          ```

          Aytaylik, siz HTTP yordamida ma'lumotlarni olishni xohlaysiz va keyinchalik olingan ma'lumotlarga asinxron tarzda ishlov berishni xohlaysiz. `done` Blokni quyidagi tarzda yozishingiz mumkin ,

          ```javascript
          getDataFromHttp()
            .then(function (result) {
              return processDataAsync(result);
            })
            .done(function (processed) {
              displayData(processed);
            });
          ```

          Kelajakda, agar qayta ishlash kutubxonasi API sinxronlashtirilsa, siz `done` blokni quyidagi tarzda olib tashlashingiz mumkin,

          ```javascript
          getDataFromHttp().then(function (result) {
            return displayData(processDataAsync(result));
          });
          ```

          va keyin siz jim xatolarga olib keladigan blokirovka qilish uchun blok done qo'shishni unutdingiz.then

      3.  **Extend ES6 Promises by Bluebird:**
          Bluebird ikkinchi yechimdagi muammoning oldini olish uchun ES6 Promises API-ni kengaytiradi. Ushbu kutubxonada rad etilgan va'dalardan stderrgacha bo'lgan barcha xatolarni chop etadigan "standart" onRejection ishlov beruvchisi mavjud. O'rnatishdan so'ng, ishlov berilmagan rad etishlarni qayta ishlashingiz mumkin

          ```javascript
          Promise.onPossiblyUnhandledRejection(function (error) {
            throw error;
          });
          ```

          va rad etishni rad eting, uni faqat bo'sh ushlash bilan bajaring

          ```javascript
          Promise.reject('error value').catch(function () {});
          ```

      **[⬆ Back to Top](#table-of-contents)**

409.  ### Deno nima

      Deno - bu V8 JavaScript dvigateli va Rust dasturlash tilidan foydalanadigan JavaScript va TypeScript uchun oddiy, zamonaviy va xavfsiz ish vaqti.

      **[⬆ Back to Top](#table-of-contents)**

410.  ### Qanday qilib objektni javascriptda takrorlanadigan qilish mumkin

      Odatiy bo'lib, oddiy objektlar takrorlanmaydi. Lekin siz objektga xossani belgilash orqali uni iterable qilishingiz mumkin `Symbol.iterator`.

      Buni misol bilan ko'rsatamiz,

      ```javascript
      const collection = {
        one: 1,
        two: 2,
        three: 3,
        [Symbol.iterator]() {
          const values = Object.keys(this);
          let i = 0;
          return {
            next: () => {
              return {
                value: this[values[i++]],
                done: i > values.length,
              };
            },
          };
        },
      };

      const iterator = collection[Symbol.iterator]();

      console.log(iterator.next()); // → {value: 1, done: false}
      console.log(iterator.next()); // → {value: 2, done: false}
      console.log(iterator.next()); // → {value: 3, done: false}
      console.log(iterator.next()); // → {value: undefined, done: true}
      ```

      Yuqoridagi jarayonni generator funktsiyasi yordamida soddalashtirish mumkin,

      ```javascript
      const collection = {
        one: 1,
        two: 2,
        three: 3,
        [Symbol.iterator]: function* () {
          for (let key in this) {
            yield this[key];
          }
        },
      };
      const iterator = collection[Symbol.iterator]();
      console.log(iterator.next()); // {value: 1, done: false}
      console.log(iterator.next()); // {value: 2, done: false}
      console.log(iterator.next()); // {value: 3, done: false}
      console.log(iterator.next()); // {value: undefined, done: true}
      ```

      **[⬆ Back to Top](#table-of-contents)**

411.  ### To'g'ri quyruq chaqiruvi ( Proper Tail Call ) nima

      Birinchidan, "Proper Tail Call" haqida gapirishdan oldin quyruq haqida bilishimiz kerak. Quyi qo'ng'iroq - chaqiruvchi funktsiyaning yakuniy harakati sifatida bajariladigan pastki dastur yoki funktsiya chaqiruvi. Holbuki , **Proper tail call(PTC)** - bu funktsiya chaqiruvi quyruq chaqiruvi bo'lganda, dastur yoki kod rekursiya uchun qo'shimcha stek ramkalarini yaratmaydigan usul.

      Masalan, faktorial funktsiyaning quyidagi klassik yoki bosh rekursiyasi har bir qadam uchun stekga tayanadi. Har bir bosqichga qadar ishlov berish kerak `n * factorial(n - 1)`

      ```javascript
      function factorial(n) {
        if (n === 0) {
          return 1;
        }
        return n * factorial(n - 1);
      }
      console.log(factorial(5)); //120
      ```

      Ammo agar siz Tail rekursiya funksiyalaridan foydalansangiz, ular stekga tayanmasdan, kerakli barcha kerakli ma’lumotlarni rekursiyaga o‘tkazishda davom etadi.

      ```javascript
      function factorial(n, acc = 1) {
        if (n === 0) {
          return acc;
        }
        return factorial(n - 1, n * acc);
      }
      console.log(factorial(5)); //120
      ```

      Yuqoridagi naqsh birinchisi bilan bir xil natijani qaytaradi. Ammo akkumulyator rekursiv qo'ng'iroqlarda stek xotirasidan foydalanmasdan jami argument sifatida hisobini yuritadi.

      **[⬆ Back to Top](#table-of-contents)**

412.  ### objektni Promise(va’da) ekani yoki yoq ekanini qanday tekshirish mumkin

      Agar qiymat va'dami yoki yo'qligini bilmasangiz, va'dani `Promise.resolve(value)` qaytaradigan qiymat sifatida o'rash

      ```javascript
      function isPromise(object) {
        if (Promise && Promise.resolve) {
          return Promise.resolve(object) == object;
        } else {
          throw 'Promise not supported in your environment';
        }
      }

      var i = 1;
      var promise = new Promise(function (resolve, reject) {
        resolve();
      });

      console.log(isPromise(i)); // false
      console.log(isPromise(promise)); // true
      ```

      Yana bir usul - `.then()`ishlov beruvchi turini tekshirish

      ```javascript
      function isPromise(value) {
        return Boolean(value && typeof value.then === 'function');
      }
      var i = 1;
      var promise = new Promise(function (resolve, reject) {
        resolve();
      });

      console.log(isPromise(i)); // false
      console.log(isPromise(promise)); // true
      ```

      **[⬆ Back to Top](#table-of-contents)**

413.  ### Funktsiya konstruktor sifatida chaqirilganligini qanday aniqlash mumkinconstructor

      `new.target` Pseudo-xususiyatdan funktsiya konstruktor (yangi operator yordamida) yoki oddiy funksiya chaqiruvi sifatida chaqirilganligini aniqlash uchun foydalanishingiz mumkin .

      1.  Agar konstruktor yoki funksiya new operatori yordamida chaqirilsa, new.target konstruktor yoki funksiyaga havolani qaytaradi.
      2.  Funktsiya chaqiruvlari uchun new.target aniqlanmagan.

      ```javascript
      function Myfunc() {
         if (new.target) {
            console.log('called with new');
         } else {
            console.log('not called with new');
         }
      }

      new Myfunc(); // called with new
      Myfunc(); // not called with new
      Myfunc.call({}); not called with new
      ```

      **[⬆ Back to Top](#table-of-contents)**

414.  ### Argumentlar objekti va Rest parametri o'rtasidagi farqlar qandayand rest parameter

      Argumentlar objekti va dam olish parametrlari o'rtasida uchta asosiy farq mavjud

      1.  Argumentlar objekti massivga o'xshaydi, lekin massiv emas. Qolgan parametrlar esa massiv misollaridir.
      2.  Argumentlar obyekti tartiblash, xaritalash, forEach yoki pop kabi usullarni qo‘llab-quvvatlamaydi. Holbuki, bu usullar dam olish parametrlarida ishlatilishi mumkin.
      3.  Qolgan parametrlar faqat alohida nom berilmagan parametrlardir, argumentlar obyekti esa funksiyaga oʻtkazilgan barcha argumentlarni oʻz ichiga oladi.

      **[⬆ Back to Top](#table-of-contents)**

415.  ### Spred operatori va Rest parametri o'rtasidagi farqlar qandayand rest parameter

      Rest parametri qolgan barcha elementlarni massivga to'playdi. Holbuki, Spread operatori takrorlanuvchilarni (massivlar / objektlar / satrlar) bitta argumentlar / elementlarga kengaytirilishiga imkon beradi. ya'ni, Rest parametri tarqalish operatoriga qarama-qarshidir.

      **[⬆ Back to Top](#table-of-contents)**

416.  ### Har xil turdagi generatorlar qanday

      Besh turdagi generatorlar mavjud,

      1.  **Generator function declaration:**

          ```javascript
          function* myGenFunc() {
            yield 1;
            yield 2;
            yield 3;
          }
          const genObj = myGenFunc();
          ```

      2.  **Generator function expressions:**

          ```javascript
          const myGenFunc = function* () {
            yield 1;
            yield 2;
            yield 3;
          };
          const genObj = myGenFunc();
          ```

      3.  **Generator method definitions in object literals:**

          ```javascript
          const myObj = {
            *myGeneratorMethod() {
              yield 1;
              yield 2;
              yield 3;
            },
          };
          const genObj = myObj.myGeneratorMethod();
          ```

      4.  **Generator method definitions in class:**

          ```javascript
          class MyClass {
            *myGeneratorMethod() {
              yield 1;
              yield 2;
              yield 3;
            }
          }
          const myObject = new MyClass();
          const genObj = myObject.myGeneratorMethod();
          ```

      5.  **Generator as a computed property:**

          ```javascript
          const SomeObj = {
            *[Symbol.iterator]() {
              yield 1;
              yield 2;
              yield 3;
            },
          };

          console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]
          ```

      **[⬆ Back to Top](#table-of-contents)**

417.  ### O'rnatilgan iterativlar(built-in) nima

      Quyida JavaScriptda o'rnatilgan iterativlar ro'yxati keltirilgan,

      1.  Arrays and TypedArrays
      2.  Strings: Har bir belgi yoki Unicode kod nuqtalari ustida takrorlang
      3.  Maps: ikalit-qiymat juftliklarini takrorlash
      4.  Sets: kalit-qiymat juftliklarini takrorlash
      5.  arguments: Funktsiyalarda massivga o'xshash maxsus o'zgaruvchi
      6.  NodeList kabi DOM to'plami

      **[⬆ Back to Top](#table-of-contents)**

418.  ### for...of va for... o'rtasida qanday farq bor

      Js maʼlumotlar tuzilmalari boʻyicha ham for...in, ham for...of iboralari takrorlanadi. Yagona farq ular takrorlagan narsada:

      1.  for..in objektning barcha sanab o'tiladigan xususiyat kalitlari bo'ylab takrorlanadi
      2.  for..of iteratsiya qilinadigan objektning qiymatlari ustidan takrorlanadi.

      Keling, bu farqni misol bilan tushuntiramiz,

      ```javascript
      let arr = ['a', 'b', 'c'];

      arr.newProp = 'newVlue';

      // key are the property keys
      for (let key in arr) {
        console.log(key);
      }

      // value are the property values
      for (let value of arr) {
        console.log(value);
      }
      ```

      For..in tsikli objekt tugmalari ustida takrorlanganligi sababli, birinchi sikl massiv objekti bo'ylab takrorlanayotganda 0, 1, 2 va newProp ni qayd qiladi. For..of sikli arr maʼlumotlar strukturasi qiymatlari ustidan takrorlanadi va konsolda a, b, c jurnallarini qayd qiladi.

      **[⬆ Back to Top](#table-of-contents)**

419.  ### Namuna(instance) va namuna bo'lmagan(non-instance) xususiyatlarni qanday aniqlaysiz

      Instance xususiyatlari sinf usullari ichida aniqlanishi kerak. Masalan, ism va yosh xususiyatlari insayder konstruktorni quyidagi tarzda aniqlaydi,

      ```javascript
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }
      ```

      Statik (sinf) va prototip ma'lumotlar xususiyatlari ClassBody deklaratsiyasidan tashqarida aniqlanishi kerak. Keling, Person sinfi uchun yosh qiymatini quyida belgilaymiz,

      ```javascript
      Person.staticAge = 30;
      Person.prototype.prototypeAge = 40;
      ```

      **[⬆ Back to Top](#table-of-contents)**

420.  ### isNaN va Number.isNaN o'rtasidagi farq nima

      1.  **isNaN**: Global funktsiya `isNaN` argumentni Raqamga aylantiradi va natijada olingan qiymat NaN bo'lsa, true qiymatini qaytaradi.
      2.  **Number.isNaN**: Bu usul argumentni aylantirmaydi. Lekin u Raqam turi va NaN qiymati bo'lsa, u haqiqatni qaytaradi.

      Keling, farqni misol bilan ko'rib chiqaylik,

      ```javascript
      isNaN(‘hello’);   // true
      Number.isNaN('hello'); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

421.  ### IIFE-ni qo'shimcha qavslarsiz qanday chaqirish mumkin

      Darhol chaqiriladigan funktsiya ifodalari (IIFE) bayonotlar to'plamini o'z ichiga olgan funktsiyani o'rash uchun bir juft qavsni talab qiladi.

      ```js
      (function (dt) {
        console.log(dt.toLocaleTimeString());
      })(new Date());
      ```

      Ikkala IIFE ham, void operatori ham ifoda natijasini bekor `void operator` qilganligi sababli, quyidagi kabi IIFE uchun qo'shimcha qavslardan qochishingiz mumkin,

      ```js
      void (function (dt) {
        console.log(dt.toLocaleTimeString());
      })(new Date());
      ```

      **[⬆ Back to Top](#table-of-contents)**

422.  ### Buni almashtirish holatlarida(switch case) ifodalardan(expression) foydalanish mumkinmi?cases?

      Siz almashtirish holatida ishlatiladigan iboralarni ko'rgan bo'lishingiz mumkin, lekin almashtirish holati uchun haqiqiy qiymatni belgilash orqali almashtirish holatlari uchun ham foydalanish mumkin. Misol tariqasida haroratga asoslangan ob-havo sharoitini ko'rib chiqaylik,

      ```js
      const weather = (function getWeather(temp) {
        switch (true) {
          case temp < 0:
            return 'freezing';
          case temp < 10:
            return 'cold';
          case temp < 24:
            return 'cool';
          default:
            return 'unknown';
        }
      })(10);
      ```

      **[⬆ Back to Top](#table-of-contents)**

423.  ### Promise errorlariga etibor (ignore) bermaslikning eng oson yo'li qanday?

      Va'da qilingan xatolarga e'tibor bermaslikning eng oson va xavfsiz usuli bu xatoni bekor qilishdir. Ushbu yondashuv ESLint-ga ham mos keladi.

      ```js
      await promise.catch((e) => void e);
      ```

      **[⬆ Back to Top](#table-of-contents)**

424.  ### CSS yordamida konsol dagi natijani qanday qilib stil berish mumkin?

      Konsol chiqishiga CSS formati kontent spetsifikatsiyasi %c yordamida CSS uslubini qo'shishingiz mumkin. Konsol satri xabari boshqa argumentda spetsifikatsiya va CSS uslubidan keyin qo'shilishi mumkin. Quyidagi kabi console.log va CSS spetsifikatsiyasi yordamida qizil rangli matnni chop qilaylik,

      ```js
      console.log('%cThis is a red text', 'color:red');
      ```

      Bundan tashqari, tarkibga ko'proq uslublar qo'shish mumkin. Masalan, yuqoridagi matn uchun shrift o'lchamini o'zgartirish mumkin

      ```js
      console.log(
        '%cThis is a red text with bigger font',
        'color:red; font-size:20px'
      );
      ```

      **[⬆ Back to Top](#table-of-contents)**

425.  ### Nullish coalescing operator(??) nima

      Bu mantiqiy operator bo'lib, agar chap tomondagi operand nol yoki aniqlanmagan bo'lsa, o'zining o'ng tomoni operandini qaytaradi, aks holda chap tomon operandini qaytaradi. Buni mantiqiy OR (||) operatori bilan taqqoslash mumkin, agar chap operand faqat null yoki aniqlanmagan bo'lsa, o'ng tomondagi operandni qaytaradi.

      ```js
      console.log(null ?? true); // true
      console.log(false ?? true); // false
      console.log(undefined ?? true); // true
      ```

      **[⬆ Back to Top](#table-of-contents)**

426.  ### Konsol chiqishini qanday guruhlash va joylashtirish mumkin?]

      Jurnallarni `console.group()` osongina o'qish va guruhni yopish uchun console.groupEnd() dan foydalanish uchun tegishli jurnal xabarlarini guruhlash uchun foydalanish mumkin. Shu bilan birga, siz xabarlarni ierarxik tarzda chiqarish imkonini beruvchi guruhlarni joylashtirishingiz mumkin.

      Misol uchun, agar siz foydalanuvchi ma'lumotlarini qayd qilsangiz:

      ```js
      console.group('User Details');
      console.log('name: Sudheer Jonna');
      console.log('job: Software Developer');

      // Nested Group
      console.group('Address');
      console.log('Street: Commonwealth');
      console.log('City: Los Angeles');
      console.log('State: California');

      console.groupEnd();
      ```

      Agar siz guruhlar sukut bo'yicha yopilishini xohlasangiz, `console.groupCollapsed()` o'rniga foydalanishingiz mumkin `.console.group()`

      **[⬆ Back to Top](#table-of-contents)**

427.  ### Zich(dense) va siyrak(sparse) massivlar o'rtasidagi farq nima?]arrays?

      Birinchi(0) dan oxirgi (array.length - 1) gacha bo'lgan har bir indeksdagi elementlarni o'z ichiga olgan massiv zich massiv deb ataladi. Har qanday indeksda kamida bitta element yo'q bo'lsa, massiv siyrak deb nomlanadi.

      Keling, quyidagi ikki turdagi massivlarni ko'rib chiqaylik,

      ```js
      const avengers = ['Ironman', 'Hulk', 'CaptainAmerica'];
      console.log(avengers[0]); // 'Ironman'
      console.log(avengers[1]); // 'Hulk'
      console.log(avengers[2]); // 'CaptainAmerica'
      console.log(avengers.length); // 3

      const justiceLeague = ['Superman', 'Aquaman', , 'Batman'];
      console.log(justiceLeague[0]); // 'Superman'
      console.log(justiceLeague[1]); // 'Aquaman'
      console.log(justiceLeague[2]); // undefined
      console.log(justiceLeague[3]); // 'Batman'
      console.log(justiceLeague.length); // 4
      ```

      **[⬆ Back to Top](#table-of-contents)**

428.  ### Siyrak(dense) massivlarni yaratishning turli usullari qanday?]arrays?

      JavaScriptda siyrak massivlarni yaratishning 4 xil usuli mavjud

      1.  **Array literal:** massiv literalidan foydalanganda qiymatni o'tkazib yuboring
          ```js
          const justiceLeague = ['Superman', 'Aquaman', , 'Batman'];
          console.log(justiceLeague); // ['Superman', 'Aquaman', empty ,'Batman']
          ```
      2.  **Array() constructor:** Massivni (uzunlik) yoki yangi massivni (uzunlik) chaqirish
          ```js
          const array = Array(3);
          console.log(array); // [empty, empty ,empty]
          ```
      3.  **Delete operator:** massivda o'chirish[index] operatoridan foydalanish
          const justiceLeague = ['Superman', 'Aquaman', 'Batman'];
          delete justiceLeague[1];
          console.log(justiceLeague); // ['Superman', empty, ,'Batman']

          ```

          ```

      4.  **Increase length property:** massivning uzunlik xususiyatini oshirish
          `js const justiceLeague = ['Superman', 'Aquaman', 'Batman']; justiceLeague.length = 5; console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty] `
          **[⬆ Back to Top](#table-of-contents)**

429.  ### setTimeout, setImmediate va process.nextTick o'rtasidagi farq nima]setImmediate and process.nextTick?

      1.  **Set Timeout:** setTimeout() millisekundlar kechikishidan keyin bir martalik callbackning bajarilishini rejalashtirishdir.
      2.  **Set Immediate:** setImmediate funksiyasi joriy voqea tsikli tugagandan so'ng darhol funktsiyani bajarish uchun ishlatiladi.
      3.  **Process NextTick:** Agar ma'lum bir bosqichda process.nextTick() chaqirilsa, process.nextTick() ga o'tkazilgan barcha callbacklar voqea tsikli davom etgunga qadar hal qilinadi. Agar process.nextTick() rekursiv chaqirilsa, bu hodisa siklini bloklaydi va I/U ochligini yaratadi.

      **[⬆ Back to Top](#table-of-contents)**

430.  ### Asl massivni(original array) o'zgartirmasdan massivni qanday o'zgartirish mumkin?]original array?

      Usul `reverse()` massivdagi elementlarning tartibini o'zgartiradi, lekin asl massivni o'zgartiradi. Bu holatni isbotlash uchun oddiy misol keltiraylik,

      ```javascript
      const originalArray = [1, 2, 3, 4, 5];
      const newArray = originalArray.reverse();

      console.log(newArray); // [ 5, 4, 3, 2, 1]
      console.log(originalArray); // [ 5, 4, 3, 2, 1]
      ```

      Asl massivni o'zgartirmaydigan bir nechta echimlar mavjud. Keling, bir ko'rib chiqaylik.

      1.  **Using slice and reverse methods:**
          Bunday holda, `slice()` sayoz nusxa yaratish uchun massivdagi usuldan so'ng nusxadagi usulni chaqirish kifoya `reverse()`.

          ```javascript
          const originalArray = [1, 2, 3, 4, 5];
          const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy

          console.log(originalArray); // [1, 2, 3, 4, 5]
          console.log(newArray); // [ 5, 4, 3, 2, 1]
          ```

      2.  **Using spread and reverse methods:**
          Bu holda, massivning nusxasini yaratish uchun tarqalish sintaksisidan (...) foydalanamiz va undan so'ng `reverse()`nusxada usul chaqiramiz.

          ```javascript
          const originalArray = [1, 2, 3, 4, 5];
          const newArray = [...originalArray].reverse();

          console.log(originalArray); // [1, 2, 3, 4, 5]
          console.log(newArray); // [ 5, 4, 3, 2, 1]
          ```

      3.  **Using reduce and spread methods:**
          Bu yerda massiv elementlarida reduktor funksiyasini bajaring va tarqalish sintaksisi yordamida to‘plangan massivni o‘ng tomonga qo‘shing.

          ```javascript
          const originalArray = [1, 2, 3, 4, 5];
          const newArray = originalArray.reduce((accumulator, value) => {
            return [value, ...accumulator];
          }, []);

          console.log(originalArray); // [1, 2, 3, 4, 5]
          console.log(newArray); // [ 5, 4, 3, 2, 1]
          ```

      4.  **Using reduceRight and spread methods:**
          Bu yerda massiv elementlarida o‘ng reduktor funksiyasini (ya’ni kamaytirish usulining teskari yo‘nalishini) bajaring va tarqalish sintaksisi yordamida to‘plangan massivni chap tomonga qo‘shing.

          ```javascript
          const originalArray = [1, 2, 3, 4, 5];
          const newArray = originalArray.reduceRight((accumulator, value) => {
            return [...accumulator, value];
          }, []);

          console.log(originalArray); // [1, 2, 3, 4, 5]
          console.log(newArray); // [ 5, 4, 3, 2, 1]
          ```

      5.  **Using reduceRight and push methods:**
          Bu yerda massiv elementlarida o‘ng reduktor funksiyasini (ya’ni kamaytirish usulining qarama-qarshi yo‘nalishini) bajaring va takrorlangan qiymatni akkumulyatorga suring.

          ```javascript
          const originalArray = [1, 2, 3, 4, 5];
          const newArray = originalArray.reduceRight((accumulator, value) => {
            accumulator.push(value);
            return accumulator;
          }, []);

          console.log(originalArray); // [1, 2, 3, 4, 5]
          console.log(newArray); // [ 5, 4, 3, 2, 1]
          ```

      **[⬆ Back to Top](#table-of-contents)**

### Coding Exercise

#### 1. Quyidagi kodning natijasi nima

```javascript
var car = new Vehicle('Honda', 'white', '2010', 'UK');
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
```

- 1: Undefined
- 2: ReferenceError
- 3: null
- 4: {model: "Honda", color: "white", year: "2010", country: "UK"}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Funktsiya deklaratsiyasi har qanday o'zgaruvchilarga o'xshash tarzda ko'tariladi. Shunday qilib, `Vehicle` funktsiya deklaratsiyasini joylashtirish hech qanday farq qilmaydi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 2. Quyidagi kodning natijasi nima

```javascript
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
```

- 1: 1, undefined and undefined
- 2: ReferenceError: X is not defined
- 3: 1, undefined and number
- 4: 1, number and number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Albatta ning qaytish qiymati foo()o'sish operatori tufayli 1 ga teng. Lekin bayonot let x = y = 0mahalliy x o'zgaruvchini e'lon qiladi. Holbuki y tasodifan global o'zgaruvchi sifatida e'lon qilingan. Bu bayonot tengdir,

```javascript
let x;
window.y = 0;
x = window.y;
```

Blok doirasidagi x o'zgaruvchisi funksiyadan tashqarida aniqlanmaganligi sababli, tur ham aniqlanmagan bo'ladi. Global o'zgaruvchi yfunktsiyadan tashqarida mavjud bo'lsa, qiymat 0 va turi raqam.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 3. Quyidagi kodning natijasi nima

```javascript
function main() {
  console.log('A');
  setTimeout(function print() {
    console.log('B');
  }, 0);
  console.log('C');
}
main();
```

- 1: A, B and C
- 2: B, A and C
- 3: A and C
- 4: A, C and B

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Bayonotlar tartibi voqealar tsikli mexanizmiga asoslanadi. Bayonotlar tartibi quyidagi tartibda bo'ladi,

1. Dastlab, asosiy funktsiya stekga suriladi.
2. Keyin brauzer asosiy funktsiyaning birinchi bayonotini (ya'ni, A ning console.log) stekga surib, darhol ishga tushadi va chiqadi.
3. Ammo setTimeout callback uchun kechikishni qo'llash uchun bayonot Brauzer API-ga ko'chirildi.
4. Bu orada, C ning console.log stekga qo'shildi, bajarildi va chiqdi.
5. Callback setTimeoutBrauzer API-dan xabarlar navbatiga ko'chirildi.
6. Funktsiya mainstekdan chiqib ketdi, chunki bajariladigan bayonotlar yo'q
7. Callback xabarlar navbatdan stekga ko'chirildi, chunki stek bo'sh.
8. B uchun console.log stekga qo'shiladi va konsolda ko'rsatiladi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 4. What is the output of below equality check

```javascript
console.log(0.1 + 0.2 === 0.3);
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Bu float nuqta matematik muammosiga bog'liq. Suzuvchi nuqta raqamlari ikkilik formatda kodlanganligi sababli, ulardagi qo'shish operatsiyalari yaxlitlash xatolariga olib keladi. Demak, suzuvchi nuqtalarni taqqoslash kutilgan natijani bermaydi. Tushuntirish haqida batafsil ma'lumotni bu yerda topishingiz mumkin 0.30000000000000004.com/

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 5. Quyidagi kodning natijasi nima

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

- 1: 1function
- 2: 1object
- 3: ReferenceError
- 4: 1undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Yuqoridagi kod parchalaridagi asosiy fikrlar quyidagilardir:

1. If iborasi ichida funktsiya deklaratsiyasi o'rniga funktsiya ifodasini ko'rishingiz mumkin. Shunday qilib, u har doim haqiqatga qaytadi.
2. U hech qanday joyda e'lon qilinmagan (yoki tayinlanmagan) uchun f aniqlanmagan va f turi ham aniqlanmagan.

Boshqacha qilib aytganda, xuddi shunday

```javascript
var y = 1;
if ('foo') {
  y += typeof f;
}
console.log(y);
```

**Note:** MS Edge brauzeri uchun 1 objektni qaytaradi

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 6. Quyidagi kodning natijasi nima

```javascript
function foo() {
  return;
  {
    message: 'Hello World';
  }
}
console.log(foo());
```

- 1: Hello World
- 2: Object {message: "Hello World"}
- 3: Undefined
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Bu nuqta-vergul muammosi. Odatda JavaScriptda nuqta-vergul ixtiyoriy. Shunday qilib, agar biron bir ibora (bu holda, qaytish) mavjud bo'lsa, nuqta-vergul yo'q bo'lsa, u darhol avtomatik ravishda kiritiladi. Shunday qilib, funktsiya aniqlanmagan sifatida qaytarildi.

Agar ochiladigan jingalak qavs return kalit so'zi bilan birga bo'lsa, funktsiya kutilganidek qaytariladi.

```javascript
function foo() {
  return {
    message: 'Hello World',
  };
}
console.log(foo()); // {message: "Hello World"}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 7. Quyidagi kodning natijasi nima

```javascript
var myChars = ['a', 'b', 'c', 'd'];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
```

- 1: [empty, 'b', 'c', 'd'], empty, 3
- 2: [null, 'b', 'c', 'd'], empty, 3
- 3: [empty, 'b', 'c', 'd'], undefined, 4
- 4: [null, 'b', 'c', 'd'], undefined, 4

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Operator deleteobjekt xususiyatini o'chiradi, lekin u massivni qayta indekslamaydi yoki uning uzunligini o'zgartirmaydi. Shunday qilib, massivning soni yoki elementlari yoki uzunligi o'zgarmaydi. Agar siz myChars-ni chop qilmoqchi bo'lsangiz, u noaniq qiymat o'rnatmasligini, aksincha xususiyat massivdan o'chirilganligini kuzatishingiz mumkin. Chrome-ning yangi versiyalari farqni biroz aniqroq qilish emptyo'rniga foydalanadi.undefined

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 8. Quyidagi kodning natijasi nima in latest Chrome

```javascript
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);
```

- 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
- 2: [empty × 3], [empty × 2, 100], [empty × 3]
- 3: [null × 3], [null × 2, 100], [null × 3]
- 4: [], [100], []

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Eng so'nggi Chrome versiyalari sparse arrayushbu bo'sh xn belgisi yordamida ko'rsatiladi (ular teshiklar bilan to'ldirilgan). Holbuki eski versiyalarda aniqlanmagan xn yozuvlari mavjud. Eslatma: FF ning so'nggi versiyasi n empty slotsnotatsiyani ko'rsatadi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 9. Quyidagi kodning natijasi nima

```javascript
const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ['prop' + 3]() {
    return 2;
  },
};

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
```

- 1: 0, 1, 2
- 2: 0, { return 1 }, 2
- 3: 0, { return 1 }, { return 2 }
- 4: 0, 1, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

ES6 objektlar uchun usul ta'riflari va xususiyat qisqartmalarini taqdim etadi. Shunday qilib, prop2 va prop3 ham muntazam funktsiya qiymatlari sifatida ko'rib chiqiladi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 10. Quyidagi kodning natijasi nima

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

- 1: true, true
- 2: true, false
- 3: SyntaxError, SyntaxError,
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Muhim nuqta shundaki, agar bayonot bir xil operatorlarni o'z ichiga olgan bo'lsa (masalan, < yoki >), uni chapdan o'ngga qarab baholash mumkin. Birinchi bayonot quyidagi tartibda bo'ladi,

1. console.log(1 < 2 < 3);
2. console.log(true < 3);
3. console.log(1 < 3); // Taqqoslash paytidagidek true aylantirildi
4. True

Ikkinchi bayonot quyidagi tartibda bo'lsa,

1. console.log(3 > 2 > 1);
2. console.log(true > 1);
3. console.log(1 > 1); // Taqqoslash paytidagidek false aylantirildi
4. False

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 11. Quyidagi kodning natijasi nima in non-strict mode

```javascript
function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Qattiq bo'lmagan rejimda odatiy JavaScript funktsiyalari nomli parametrlarni takrorlash imkonini beradi. Yuqoridagi kod parchasi 1 va 3 parametrlarda takroriy parametrlarga ega. Birinchi parametrning qiymati funksiyaga uzatiladigan uchinchi argumentga moslashtiriladi. Demak, 3-argument birinchi parametrni bekor qiladi.

Eslatma: Qattiq rejimda takroriy parametrlar Sintaksis xatosini keltirib chiqaradi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 12. Quyidagi kodning natijasi nima

```javascript
const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Oddiy funktsiyalardan farqli o'laroq, o'q funktsiyalari qat'iy yoki qat'iy bo'lmagan rejimda takroriy parametrlarga ruxsat bermaydi. SyntaxErrorShunday qilib, siz konsolda ko'rishingiz mumkin .

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 13. Quyidagi kodning natijasi nima

```javascript
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
```

- 1: ReferenceError: arguments is not defined
- 2: 3
- 3: undefined
- 4: null

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

O'q funktsiyalarida arguments, super, this, or new.targetbog'lanish mavjud emas. Shunday qilib, o'zgaruvchiga har qanday havola argumentsleksik jihatdan o'ralgan muhitda bog'lanishni hal qilishga harakat qiladi. Bunday holda, argumentlar o'zgaruvchisi o'q funktsiyasidan tashqarida aniqlanmaydi. Shunday qilib, siz mos yozuvlar xatosini olasiz.

Oddiy funktsiya funksiyaga uzatiladigan argumentlar sonini ta'minlaydi

```javascript
const func = function () {
  return arguments.length;
};
console.log(func(1, 2, 3));
```

Ammo agar siz hali ham o'q funksiyasidan foydalanmoqchi bo'lsangiz, argumentlar bo'yicha rest operatori kutilgan argumentlarni taqdim etadi

```javascript
const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 14. Quyidagi kodning natijasi nima

```javascript
console.log(String.prototype.trimLeft.name === 'trimLeft');
console.log(String.prototype.trimLeft.name === 'trimStart');
```

- 1: True, False
- 2: False, True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

kabi funktsiyalarga mos kelishi String.prototype.padStartuchun bo'shliqlarni kesish uchun standart usul nomi sifatida qabul qilinadi trimStart. Veb-veb-moslashuv sabablari tufayli, eski usul nomi "trimLeft" hali ham "trimStart" uchun taxallus sifatida ishlaydi. Shunday qilib, "trimLeft" prototipi har doim "trimStart" dir.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 15. Quyidagi kodning natijasi nima

```javascript
console.log(Math.max());
```

- 1: undefined
- 2: Infinity
- 3: 0
- 4: -Infinity

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

-Infinity boshlang'ich taqqoslanuvchi hisoblanadi, chunki deyarli barcha boshqa qiymatlar kattaroqdir. Shunday qilib, hech qanday dalillar keltirilmaganda, -Infinity qaytariladi. Eslatma: Argumentlarning nol soni haqiqiy holat hisoblanadi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 16. Quyidagi kodning natijasi nima

```javascript
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
```

- 1: True, True
- 2: True, False
- 3: False, False
- 4: False, True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

ECMAScript spetsifikatsiyasidagi (ECMA-262) taqqoslash algoritmiga ko'ra, yuqoridagi ifoda quyidagi tarzda JS ga aylantirildi

```javascript
10 === Number([10].valueOf().toString()); // 10
```

Demak, raqam atrofidagi raqamli qavslar ([]) muhim emas, u har doim ifodadagi raqamga aylantiriladi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 17. Quyidagi kodning natijasi nima

```javascript
console.log(10 + '10');
console.log(10 - '10');
```

- 1: 20, 0
- 2: 1010, 0
- 3: 1010, 10-10
- 4: NaN, NaN

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Birlashtirish operatori (+) ham son, ham qator turlari uchun qo'llaniladi. Shunday qilib, agar biron bir operand satr turi bo'lsa, ikkala operand ham satrlar sifatida birlashtiriladi. Ayirma (-) operatori operandlarni raqam turiga aylantirishga harakat qiladi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 18. Quyidagi kodning natijasi nima

```javascript
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}
```

- 1: True, I'm True
- 2: True, I'm False
- 3: False, I'm True
- 4: False, I'm False

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Taqqoslash operatorlarida ifoda [0]Number([0].valueOf().toString()) ga aylantirildi, u noto'g'ri deb hal qilinadi. Holbuki [0], taqqoslash operatori yo'qligi sababli hech qanday konvertatsiya qilmasdan haqiqiy qiymatga aylanadi.

</p>
</details>

#### 19. Quyidagi kodning natijasi nima

```javascript
console.log([1, 2] + [3, 4]);
```

- 1: [1,2,3,4]
- 2: [1,2][3,4]
- 3: SyntaxError
- 4: 1,23,4

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

- operatori massivlar uchun mo'ljallanmagan yoki aniqlanmagan. Shunday qilib, u massivlarni satrlarga aylantiradi va ularni birlashtiradi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 20. Quyidagi kodning natijasi nima

```javascript
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set('Firefox');
console.log(browser);
```

- 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
- 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
- 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
- 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

`Set` objekt noyob qiymatlar to'plami bo'lgani uchun u to'plamdagi takroriy qiymatlarga ruxsat bermaydi . Shu bilan birga, bu katta-kichik harflarga sezgir ma'lumotlar tuzilmasi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 21. Quyidagi kodning natijasi nima

```javascript
console.log(NaN === NaN);
```

- 1: True
- 2: False

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

JavaScript IEEE 754 spetsifikatsiya standartlariga amal qiladi. Ushbu spetsifikatsiyaga ko'ra, NaN'lar suzuvchi nuqtali raqamlar uchun hech qachon teng bo'lmaydi.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 22. Quyidagi kodning natijasi nima

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
```

- 1: 4
- 2: NaN
- 3: SyntaxError
- 4: -1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Ichkarida indexOf qat'iy tenglik operatoridan (===) foydalanadi va NaN === NaNnoto'g'ri deb baholaydi. indexOf massiv ichida NaN ni topa olmagani uchun u har doim -1 ni qaytaradi. Ammo siz Array.prototype.findIndexmassiv dagi NaN indeksini aniqlash uchun usuldan foydalanishingiz mumkin yoki NaN massivda bor yoki Array.prototype.includesyo'qligini tekshirish uchun foydalanishingiz mumkin.

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 23. Quyidagi kodning natijasi nima

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);
```

- 1: 1, [2, 3, 4, 5]
- 2: 1, {2, 3, 4, 5}
- 3: SyntaxError
- 4: 1, [2, 3, 4]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Dam olish parametrlaridan foydalanganda, keyingi vergullarga ruxsat berilmaydi va SyntaxError paydo bo'ladi. Agar siz keyingi vergulni olib tashlasangiz, u 1-javobni ko'rsatadi

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b); // 1, [2, 3, 4, 5]
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 25. Quyidagi kodning natijasi nima

```javascript
async function func() {
  return 10;
}
console.log(func());
```

- 1: Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<rejected\>: 10}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Async funktsiyalari har doim va'da beradi. Biroq, asinxronizatsiya funktsiyasining qaytish qiymati aniq va'da bo'lmasa ham, u va'da bilan o'ralgan bo'ladi. Yuqoridagi asinxron funksiyasi quyidagi ifodaga teng,

```javascript
function func() {
  return Promise.resolve(10);
}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 26. Quyidagi kodning natijasi nima

```javascript
async function func() {
  await 10;
}
console.log(func());
```

- 1: Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<resolved\>: undefined}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Kutish ifodasi va'da qilingan aniqlik bilan 10 qiymatini qaytaradi va har bir kutish ifodasidan keyingi kod .thenqayta qo'ng'iroqda mavjud sifatida ko'rib chiqilishi mumkin. Bunday holda, funktsiya oxirida hech qanday qaytarish ifodasi mavjud emas. Shunday qilib, standart qaytish qiymati undefinedva'daning qarori sifatida qaytariladi. Yuqoridagi asinxron funksiyasi quyidagi ifodaga teng,

func func ( ) {

```javascript
function func() {
  return Promise.resolve(10).then(() => undefined);
}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 27. Quyidagi kodning natijasi nima

```javascript
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}

processArray([1, 2, 3, 4]);
```

- 1: SyntaxError
- 2: 1, 2, 3, 4
- 3: 4, 4, 4, 4
- 4: 4, 3, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Garchi "processArray" asinxron funksiya bo'lsa ham, biz foydalanadigan anonim funksiya sinxrondir forEach. Sinxron funksiya ichida await dan foydalansangiz, u sintaksis xatosini keltirib chiqaradi.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 28. Quyidagi kodning natijasi nima

```javascript
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log('Process completed!');
}
process([1, 2, 3, 5]);
```

- 1: 1 2 3 5 and Process completed!
- 2: 5 5 5 5 and Process completed!
- 3: Process completed! and 5 5 5 5
- 4: Process completed! and 1 2 3 5

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

ForEach usuli barcha elementlar tugashini kutmaydi, lekin u faqat vazifalarni bajaradi va keyingi bosqichga o'tadi. Shunday qilib, oxirgi bayonot birinchi navbatda va'da qilingan qarorlar ketma-ketligi bilan ko'rsatiladi.

Lekin siz massivlar ketma-ketligini for..of loop yordamida boshqarasiz,

```javascript
async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log('Process completed!');
}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 29. Quyidagi kodning natijasi nima

```javascript
var set = new Set();
set.add('+0').add('-0').add(NaN).add(undefined).add(NaN);
console.log(set);
```

- 1: Set(4) {"+0", "-0", NaN, undefined}
- 2: Set(3) {"+0", NaN, undefined}
- 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
- 4: Set(4) {"+0", NaN, undefined, NaN}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

To'plamda tenglikni tekshirishdan istisnolar mavjud,

1. Barcha NaN qiymatlari teng
2. Har ikkala +0 va -0 turli qiymatlar sifatida qabul qilinadi

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 30. Quyidagi kodning natijasi nima

```javascript
const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

cnsooe.log(sym1 === sym2, sym3 === sym4);
```

- 1: true, true
- 2: true, false
- 3: false, true
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Belgisi quyidagi konventsiyalardan keyin,

1. Symbol() dan qaytarilgan har bir belgi qiymati ixtiyoriy qatordan qat'iy nazar noyobdir.
2. `Symbol.for()` funktsiya global belgilar ro'yxati ro'yxatida belgi yaratadi. Lekin u har bir qo‘ng‘iroqda yangi belgi yaratishi shart emas, u avval berilgan kalitga ega bo‘lgan belgi reestrda mavjudligini tekshiradi va agar topilsa, belgini qaytaradi. Aks holda, ro'yxatga olish kitobida yangi belgi yaratiladi.

**Note:** Belgi tavsifi faqat disk raskadrovka maqsadlarida foydalidir.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 31. Quyidagi kodning natijasi nima

```javascript
const sym1 = new Symbol('one');
console.log(sym1);
```

- 1: SyntaxError
- 2: one
- 3: Symbol('one')
- 4: Symbol

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

`Symbol` bu objekt konstruktori emas, shunchaki standart funksiyadir (boshqa ibtidoiylardan farqli o'laroq, yangi Boolean, yangi String va yangi raqam). Shunday qilib, agar siz yangi operator bilan qo'ng'iroq qilmoqchi bo'lsangiz, TypeError paydo bo'ladi

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 32. Quyidagi kodning natijasi nima

```javascript
let myNumber = 100;
let myString = '100';

if (!typeof myNumber === 'string') {
  console.log('It is not a string!');
} else {
  console.log('It is a string!');
}

if (!typeof myString === 'number') {
  console.log('It is not a number!');
} else {
  console.log('It is a number!');
}
```

- 1: SyntaxError
- 2: It is not a string!, It is not a number!
- 3: It is not a string!, It is a number!
- 4: It is a string!, It is a number!

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Qaytish qiymati typeof myNumber (OR) typeof myStringhar doim haqiqiy qiymatdir ("raqam" yoki "string"). beri! operator qiymatni mantiqiy qiymatga o'zgartiradi, ikkalasining qiymati !typeof myNumber or !typeof myStringhar doim noto'g'ri. Shuning uchun if sharti bajarilmaydi va boshqaruv else blokiga o'tadi.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 33. Quyidagi kodning natijasi nima

```javascript
console.log(
  JSON.stringify({ myArray: ['one', undefined, function () {}, Symbol('')] })
);
console.log(
  JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')])
);
```

- 1: {"myArray":['one', undefined, {}, Symbol]}, {}
- 2: {"myArray":['one', null,null,null]}, {}
- 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
- 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The symbols has below constraints,

1. The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.
2. All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 34. Quyidagi kodning natijasi nima

```javascript
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

new A();
new B();
```

- 1: A, A
- 2: A, B

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Using constructors, `new.target` refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 35. Quyidagi kodning natijasi nima

```javascript
const [x, ...y] = [1, 2, 3, 4];
console.log(x, y);
```

- 1: 1, [2, 3, 4]
- 2: 1, [2, 3]
- 3: 1, [2]
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 36. Quyidagi kodning natijasi nima

```javascript
const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);
```

- 1: 30, 20
- 2: 10, 20
- 3: 10, undefined
- 4: 30, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The object property follows below rules,

1. The object properties can be retrieved and assigned to a variable with a different name
2. The property assigned a default value when the retrieved value is `undefined`

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 37. Quyidagi kodning natijasi nima

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area();
```

- 1: 200
- 2: Error
- 3: undefined
- 4: 0

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error `Error: Cannot read property 'length' of undefined` as mentioned above.

You can avoid the error with either of the below changes,

1. **Pass at least an empty object:**

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area({});
```

2. **Assign default empty object:**

```javascript
function area({ length = 10, width = 20 } = {}) {
  console.log(length * width);
}

area();
```

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 38. Quyidagi kodning natijasi nima

```javascript
const props = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jack' },
  { id: 3, name: 'Tom' },
];

const [, , { name }] = props;
console.log(name);
```

- 1: Tom
- 2: Error
- 3: undefined
- 4: John

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 39. Quyidagi kodning natijasi nima

```javascript
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType('');
checkType(null);
```

- 1: number, undefined, string, object
- 2: undefined, undefined, string, object
- 3: number, number, string, object
- 4: number, number, number, number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.

Hence, the result of function calls categorized as below,

1. The first two function calls logs number type since the type of default value is number
2. The type of '' and null values are string and object type respectively.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 40. Quyidagi kodning natijasi nima

```javascript
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add('Orange'));
console.log(add('Apple'));
```

- 1: ['Orange'], ['Orange', 'Apple']
- 2: ['Orange'], ['Apple']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 41. Quyidagi kodning natijasi nima

```javascript
function greet(greeting, name, message = greeting + ' ' + name) {
  console.log([greeting, name, message]);
}

greet('Hello', 'John');
greet('Hello', 'John', 'Good morning!');
```

- 1: SyntaxError
- 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 42. Quyidagi kodning natijasi nima

```javascript
function outer(f = inner()) {
  function inner() {
    return 'Inner';
  }
}
outer();
```

- 1: ReferenceError
- 2: Inner

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, `inner` is not defined).

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 43. Quyidagi kodning natijasi nima

```javascript
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
```

- 1: [3, 4, 5], undefined
- 2: SyntaxError
- 3: [3, 4, 5], []
- 4: [3, 4, 5], [undefined]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 44. Quyidagi kodning natijasi nima

```javascript
const obj = { key: 'value' };
const array = [...obj];
console.log(array);
```

- 1: ['key', 'value']
- 2: TypeError
- 3: []
- 4: ['key']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as `map(), reduce(), and assign()`. If you still try to do it, it still throws `TypeError: obj is not iterable`.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 45. Quyidagi kodning natijasi nima

```javascript
function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = new myGenFunc();
console.log(myGenObj.next().value);
```

- 1: 1
- 2: undefined
- 3: SyntaxError
- 4: TypeError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 46. Quyidagi kodning natijasi nima

```javascript
function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
```

- 1: { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
- 2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
- 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
- 4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: `{value: undefined, done: true}`.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 47. Quyidagi kodning natijasi nima

```javascript
const myGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
```

- 1: 1,2,3 and 1,2,3
- 2: 1,2,3 and 4,5,6
- 3: 1 and 1
- 4: 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 48. Quyidagi kodning natijasi nima

```javascript
const num = 0o38;
console.log(num);
```

- 1: SyntaxError
- 2: 38

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 49. Quyidagi kodning natijasi nima

```javascript
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
```

- 1: 100
- 2: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

**Note:** Class expressions also applies to the same hoisting restrictions of class declarations.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 50. Quyidagi kodning natijasi nima

```javascript
function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());
```

- 1: undefined, undefined
- 2: Person, Person
- 3: SyntaxError
- 4: Window, Window

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

When a regular or prototype method is called without a value for **this**, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial `this` value is undefined so both methods return window objects.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 51. Quyidagi kodning natijasi nima

```javascript
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car('BMW');
console.log(car.start());
```

- 1: SyntaxError
- 2: BMW vehicle started, BMW car started
- 3: BMW car started, BMW vehicle started
- 4: BMW car started, BMW car started

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 52. Quyidagi kodning natijasi nima

```javascript
const USER = { age: 30 };
USER.age = 25;
console.log(USER.age);
```

- 1: 30
- 2: 25
- 3: Uncaught TypeError
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 53. Quyidagi kodning natijasi nima

```javascript
console.log('🙂' === '🙂');
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparision of same emojies is equivalent to string comparison. Hence, the output is always true.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 54. Quyidagi kodning natijasi nima?

```javascript
console.log(typeof typeof typeof true);
```

- 1: string
- 2: boolean
- 3: NaN
- 4: number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 55. Quyidagi kodning natijasi nima?

```javascript
let zero = new Number(0);

if (zero) {
  console.log('If');
} else {
  console.log('Else');
}
```

- 1: If
- 2: Else
- 3: NaN
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

1. The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.
2. Objects are always truthy in if block

Hence the above code block always goes to if section.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 55. Quyidagi kodning natijasi nima in non strict mode?

```javascript
let msg = 'Good morning!!';

msg.name = 'John';

console.log(msg.name);
```

- 1: ""
- 2: Error
- 3: John
- 4: Undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 56. Quyidagi kodning natijasi nima?

```javascript
let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();
```

- 1: 11, 10
- 2: 11, 11
- 3: 10, 11
- 4: 10, 10

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

11 and 10 is logged to the console.

The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable `count` which overwrites the ourter `count` variable. So the first console.log displays value 11.
Whereas the second console.log logs 10 by capturing the count variable from outerscope.

</p>

</details>

**[⬆ Back to Top](#table-of-contents)**

#### 57. Quyidagi kodning natijasi nima ?

- 1: console.log(true && 'hi');
- 2: console.log(true && 'hi' && 1);
- 3: console.log(true && '' && 0);

<details><summary><b>Answer</b></summary>
  
 - 1: hi
 - 2: 1
 - 3: ''
  
 Reason : The operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

**Note:** Below these values are consider as falsy value

- 1: 0
- 2: ''
- 3: null
- 4: undefined
- 5: NAN

</p>
</details>

---

#### 58. Quyidagi kodning natijasi nima ?

```javascript
let arr = [1, 2, 3];
let str = '1,2,3';

console.log(arr == str);
```

- 1: false
- 2: Error
- 3: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Arrays have their own implementation of `toString` method that returns a comma-separated list of elements. So the above code snippet returns true. In order to avoid conversion of array type, we should use === for comparison.

</p>

</details>

## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

---
