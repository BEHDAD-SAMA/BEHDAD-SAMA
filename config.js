/* ===================== اینجا را ویرایش کنید (فقط داخل گیومه‌ها و اعداد) ===================== */
const CONFIG = {
  namesEn: ["SAMA", "BEHDAD"],              // اسم‌ها به انگلیسی (اول نمایش داده می‌شود)
  namesFa: ["سماء", "بهداد"],               // فقط برای عنوان تب مرورگر؛ روی کارت نمایش داده نمی‌شود
  families: "خانواده‌های محترم محمدی و سلیمانی",
  kicker: "بنام آنکه میثاق را آفرید",
  envelopeHint: "برای گشودن پاکت، بر مهر قلب بزنید",
  message: "با نام آنکه میثاق را آفرید، افتخار می‌دهیم که با حضور گرم و ارزشمند خود، ما را در جشن پیوند سماء و بهداد همراهی فرمایید.",
  verse: "همه عمر برندارم سر از این خمار مستی / که هنوز من نبودم که تو در دلم نشستی",
  dateISO: "2026-10-30T18:00:00+03:30",    // تاریخ و ساعت مراسم (میلادی) برای شمارنده
  dateText: "جمعه ۸ آبان ۱۴۰۵",
  timeText: "ساعت ۱۸:۰۰",
  place: "عمارت مهران",
  address: "گرمدره",
  mapUrl: "https://nshn.ir/2bvSpw2xCDXM",

  coupleBg: "photos/couple.jpg",            // عکس بالای صفحه (پشت اسم‌ها)
  photos: ["photos/2.jpg"],   // گالری
  // افکت ورود هر عکس به ترتیب: "blur" (محو به شفاف) | "spray" (اسپری رنگ) | "iris" (دایره باز شونده) | "slide" (کشیده شدن)
  photoEffects: ["blur"],
  guestsBg: "photos/guests.jpg",            // پس‌زمینهٔ بلر بخش آخر

 music: "music.wav",                       // کنار همین فایل‌ها
  musicStart: 0,                            // ثانیهٔ شروع. اگر موزیک را از قبل ۳۰ ثانیه‌ای بریده‌اید: 0
  musicEnd: 0,                              // ثانیهٔ پایان. 0 یعنی تا آخر فایل. (برای بخش 00:25 تا 00:55 از موزیک کامل: start 25 و end 55)
  musicFadeIn: 1,                           // نرمی شروع (ثانیه)
  musicFadeOut: 1,                          // نرمی پایان (ثانیه)
  musicVolume: 1,                         // بلندی صدا از 0 تا 1
  showMusicErrors: false,                    // اگر موزیک پیدا نشد پیام نشان می‌دهد. بعد از درست شدن false کنید

  sparkles: true,                           // ذرات طلایی درخشان
  kenBurns: true,                           // حرکت آرام عکس بالای صفحه

  // فونت‌ها: Vazirmatn, Aref Ruqaa, Lalezar, Markazi Text, Harmattan, Reem Kufi, Katibeh, Mirza, Lateef, Amiri, Noto Naskh Arabic, Rakkas, Changa, Lemonada
  fontTitle: "Vazirmatn",
  fontBody: "Vazirmatn",
  customFont: { name: "", file: "" },       // فونت شخصی: name: "Dorna", file: "fonts/Dorna.woff2"
  showFontPicker: false,                     // بعد از انتخاب فونت، false کنید

  rsvp: { via: "whatsapp", target: "989128955792" }, // واتساپ: شماره با کد کشور بدون + و صفر | تلگرام: Alisly69 @
  footer: "با مهر و سپاس، خانواده‌های محمدی و سلیمانی"
};
