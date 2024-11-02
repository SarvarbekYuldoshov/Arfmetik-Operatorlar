//------------------------------------DARSDA KO’RILADIGAN MASALALAR---------------------------------------------------------->

//----------------------------------------Begin->1------------------------------------------------------------------------->
// Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin. 

// L= 2 * π * R, S = π * R^2
// R=prompt("R ni kiriting");
// L=2*3*R;
// S=3*R**2;
// console.log(L,S);

// ---------------------------------------Begin->2------------------------------------------------------------------------> 
// Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi G aniqlansin. G = a * b
 
// a=prompt("a ni kiriting->");
// b=prompt("b ni kiriting->");
// c=Math.sqrt(a,b);
// console.log("c=",c);

// ---------------------------------------Begin->3------------------------------------------------------------------------>
// x ning qiymati berilganda y funksiyaning qiymati aniqlansin.y = 3 * x^6 - 6 * x^2 - 7

// x=prompt("x ni kiriting->");
// y=3*x**6-6*x**2-7;
// console.log("y=",y);

// ---------------------------------------Begin->4------------------------------------------------------------------------>
// X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.

// X=prompt("X ni kiriting->");
// A=prompt("A ni kiriting->");
// Y=prompt("Y ni kiriting->");
// console.log("1 kg konfet narxi :",A/X);
// console.log("Y kg konfet narxi:", (A/X)*Y);

// ---------------------------------------Begin->5-----------------------------------------------------------------------> 
// Berilgan A va B sonlarining qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.

// A=prompt("A ni kiriting->");
// B=prompt("B ni kiriting->");
// console.log("A=",B);
// console.log("B=",A);


// --------------------------------------Integer->1------------------------------------------------------------------------> 

// Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini,
// so`ng birlar xonasidagi raqamini hamda ularning yig’indisini chiqaruvchi programma tuzilsin.

// a=prompt(" 2 xonali soni kiriting->");
// c=(a-a%10)/10;
// b=a%10;
// d=c+b;
// console.log("O'nlar lar xonasidagi son",c," Birlar xonasidagi son",b," Yigindisi",d);

// ------------------------------------Integer->2------------------------------------------------------------------------->

// Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.

// a=prompt("Ikki xonali soni kiriting");
// c=(a-a%10)/10;
// b=a%10;
// d=b*10+c;
// console.log("Urni almashgandan keyingi son",d);

// -----------------------------------Integer->3---------------------------------------------------------------------------> 

// Uch xonali son berilgan.Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.

// a=prompt("Uch xonali soni kirirting->");
// b=a%10;
// c=(a-b)/10;
// d=c%10;
// h=c-d;
// console.log("Yuzlar xonasidagi son->",h);
// -----------------------------------Integer->4--------------------------------------------------------------------------->

// 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish
// operatsiyasidan foydalanib, berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 1239
// Output: 2

// let  r=prompt("sonni kiriting->");
// if(r>999){
//   console.log("Yuzliklar xonasidagi raqam->",Math.floor((r%1000)/100));
// }
// else {
//   console.log("Noto`g`ri son kiritdingiz");
// }

// -----------------------------------Integer->5--------------------------------------------------------------------------->

// Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat, minut va sekund o'tganini aniqlovchi programma tuzilsin.

// let s=prompt();
// console.log("N sekund ->",s);
// a=Math.floor(s/3600);
// c=Math.floor((s-a*3600)/60);
// d=s-a*3600-c*60;
// console.log("Kun boshidan boshlab  ", a ," soat ", "  ", c," daqiqa  ",d ," sekund o`tdi" );


// -----------------------------------------------------UYGA VAZIFA--------------------------------------------------------->

// ------------------------------------------------------Begin->1-----------------------------------------------------------> 

// To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.
// S = a * b
// P = 2 * (a + b)

// a=prompt(" a  ni kiriting->");
// b=prompt(" b  ni kiriting->");
// S=a*b;
// P=2*(a+b);
// console.log("S=",S,"P=",P);

// -------------------------------------------------------Begin-2>------------------------------------------------------------>
// Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin. 
// L = π * d
// π = 3.14
// r = d / 2;
// S = π * r^2

// d=prompt("Diametrni kiriting->")
// L=3.14*d;
// r=d/2;
// S=3.14*r*r;
// console.log("L=",L,"S=",S);

// -------------------------------------------------------Begin->3--------------------------------------------------------------->

// Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S aniqlansin.
// V = a^3
// S = 6 * a^2 

// a=prompt(" a ni kiriting->");
// V=a**3;
// S=6*a**2;
// console.log("V=",V,"S=",S);

// -------------------------------------------------------Begin->4--------------------------------------------------------------->
// Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.
// V = a * b * c
// S = 2 * (a * b + b * c + a * c)

// a=prompt(" a ni kiriting->");
// b=prompt(" b ni kiriting->");
// c=prompt(" c ni kiriting->");
// V=a*b*c;
// S=2*(a*b+b*c+a*c);
// console.log("V=",V,"S=",S);

// -------------------------------------------------------Begin->5--------------------------------------------------------------->

// Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
// M = (a + b) / 2

// a=prompt("a ni kiriting->");
// b=prompt("b ni kiriting->");
// M=(a+b)/2;
// console.log("M=",M);

// -------------------------------------------------------Begin->6---------------------------------------------------------------> 
// To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
// c = a2+b2
// P = a + b + c

// a=prompt(" a ni kiriting");
// b=prompt(" b ni kiriting");
// c=Math.sqrt(a+b);
// P=a+b+c;
// console.log("Gipotenuza c=",c,"Perimetir P=",P);

// --------------------------------------------------------Begin->7------------------------------------------------------------->

// Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// S1 = π * r1
// S2 = π * r2
// S = π * (r1^2 − r2^2).
 
// r1=prompt(" r1 ni kiriting");
// r2=prompt(" r2 ni kiriting");
// if(r1>r2);
// S1=3*r1;
// S2=3*r2;
// S=3*(r1**2-r2**2);
// console.log("S1=",S1,"S2=",S2,"S=",S);

// -------------------------------------------------------Begin->8---------------------------------------------------------------->

// Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// L = 2 * π * R
// S = π * R^2
// π = 3.14

// L=prompt(" L ni kiriting");
// R=L/6;
// S=3*R**2;
// console.log("R=",R,"S=",S);

// ---------------------------------------------------------Begin->9--------------------------------------------------------------->

// Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.
// L = (x1-x2)2 + (y1 - y2)2

// x1=prompt("x1 ni kiriting");
// x2=prompt("x2 ni kiriting");
// y1=prompt("y1 ni kiriting");
// y2=prompt("y2 ni kiriting");
// L=(x1-x2)**2+(y1-y2)**2;
// console.log("L=",L);

// ------------------------------------------------------------Begin->10---------------------------------------------------------->

// A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin.
// A, B va C ning yangi qiymatilari ekranga chiqarilsin.

// A=prompt("A ni kiring");
// B=prompt("B ni kiring");
// C=prompt("C ni kiring");
// A=B;
// B=C;
// C=A;
// console.log("A=",A,"B=",B,"C=",C);

// --------------------------------------------------------------Begin->11--------------------------------------------------------->

// x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
// y = 4 * (x - 3)^6 - 7 * (x - 3)^3 + 2

// x=parseFloat(prompt("x ni kiriting"));
// y=4*(x-3)**6-7*(x-3)**3+2;
// console.log("y=",y);


// --------------------------------------------------------------Begin->12--------------------------------------------------------->

// A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
// A^3‚ A^6‚ A^9, A^15

// A=parseFloat(prompt("a ni kiriting"));
// a=A**3;
// b=A**6;
// c=A**9;
// d=A**15;
// console.log("a=",a,"b=",b,"c=",c,"d=",d,);

// ---------------------------------------------------------------Begin->13-------------------------------------------------------->

// Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin. 
// Tc = (Tf - 32) * 5/9

// let  tf=parseFloat(prompt("Temperatura Tf (farengeyt) da kiriting->"));
// console.log((tf-32)*5/9);


// -----------------------------------------------------------------Begin->14--------------------------------------------------------->

// X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.
// X=prompt("X ni kiriting");
// A=prompt("A ni kiriting");
// Y=prompt("Y ni kiriting");
// B=prompt("B ni kiriting");
// console.log(" 1kg shokolad",X/A);
// console.log(" 1kg konfet",Y/B);
// console.log("1 kg shokolad 1 kg konfetdan ",X/A-Y/B,"Sum qimat turadi");


// ----------------------------------------------------------------Begin->15--------------------------------------------------------->

// Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?

// X=prompt("X ni kiriting");
// A=prompt("A ni kiriting");
// Y=prompt("Y ni kiriting");
// B=prompt("B ni kiriting");
// console.log(" 1kg olma",X/A);
// console.log(" 1kg olma",Y/B);
// console.log(" Abdulaziz jami",X/A+Y/B,"sumlik savdo qilgan");

// --------------------------------------------------------------Integer->1----------------------------------------------------------->

// Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.

// let a = parseInt(prompt("Uch xonali sonni kiriting:"));
// if (!(a > 99 && a <= 999)) {
//   console.log("Siz uch xonali son kiritmadingiz.");
// } 

// else {
//   console.log("Kiritilgan son:", a);
//   console.log(
//     "Birliklar xonasidagi raqam:",
//     a % 10,
//     "O`nliklar xonasidagi raqam:",
//     (Math.floor(a / 10) % 10)
//   );
// }

// function birlikOnlik(integer) {
//     var birlik = integer % 10;
//     var onlik = Math.floor(integer / 10) % 10;
//     console.log("Birliklar xonasidagi raqam: " + birlik);
//     console.log("Onliklar xonasidagi raqam: " + onlik);
// }

// var uchXonaliSon = parseInt(prompt("Uch xonali sonni kiriting: "));
// birlikOnlik(uchXonaliSon);



// ---------------------------------------------------------------Integer->2----------------------------------------------------------->

// Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin

// a=parseFloat(prompt("a  soni kiriting"));
// a1=a%10;
// a10=Math.floor(a/10)%10;
// a100=Math.floor(a/100);
// a=a1+a10+a100;
// console.log("a",a,"Uch xonali son yigindisi");

// ---------------------------------------------------------------Integer->3---------------------------------------------------------->

// Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.

//  let a=prompt("Uch xonali soni kiriting");
//  var a1=a%10;
//  var a10=Math.floor(a/10)%10;
//  var a100=Math.floor(a/100);
//  var teskari=a1*100+a10*10+a100;
// console.log("teskari=",teskari);

// ---------------------------------------------------------------Integer->4----------------------------------------------------------->

// Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan ,
// hosil bo`lgan sonni aniqlovchi programma tuzilsin. 
// Input: 123
// Output: 213

// let a=prompt("Uch xonali soni kiriting");
// var a1=a%10;
// var a10=Math.floor(a/10)%10;
// var a100=Math.floor(a/100);
// var almashtrilgan=a1*100+a10+a100*10;
// console.log("almashtrilgan=",almashtrilgan);

// ---------------------------------------------------------------Integer-<_5_>----------------------------------------------------------->

// Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan
//  hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// 
        // a=prompt("Uch xonali soni kiriting");
        // var a1=a%10;
        // var a10=Math.floor(a/10)%10;
        // var a100=Math.floor(a/100);
        // var almashtrilgan=a1*10+a10+a100*100;
        // console.log("almashtrilgan=",almashtrilgan);

// ----------------------------------------------------------------Integer-<_6_>------------------------------------------------------------->

// 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 98123

// a=parseFloat(prompt("Sonni kiriting->"));
//  if (!(a > 999)) {
//   console.log("Xato son kiritdingiz. Iltimos, 999 dan katta son kiriting.");
// } 
// else {
//   console.log("Sonni o`zi:", a);
//   console.log("Minglar xonasidagi  son:", Math.floor(a/1000)%10);
// }


// ----------------------------------------------------------------Integer-<_7_>-------------------------------------------------------------->

// Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.

// a=parseFloat(prompt("Kun boshidan boshlab necha sekund o`tganligini kiriting->"));
// console.log("Kun boshidan boshlab " ,Math.floor(a/60)," minut to`la o`tdi." );


// ----------------------------------------------------------------Integer-<_8_>--------------------------------------------------------------->

// Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.

// a=parseFloat(prompt("Kun boshidan boshlab necha sekund utganini kiriting"));
// console.log("Kun boshidan boshlab",Math.floor(a/3600),"soat tula utdi.");


// ---------------------------------------------------------------Integer-<_9_>---------------------------------------------------------------->

// Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.

// a=parseFloat(prompt("Kun boshidan boshlab necha sekund utganini kirirting"));
// console.log("kun boshidan boshlab",Math.floor(a/60),"minut utdi",Math.floor(a/60)*60,"sekund utdi");

// ---------------------------------------------------------------Integer-<_10_>---------------------------------------------------------------->

// Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.

// a=parseFloat(prompt("Kun boshidan boshlab necha sekund utganini kiriting"));
// console.log("kun boshidan boshlab",Math.floor(a/3600),"soat",Math.floor(a/60)*60,"senund utdi");

use