// // JavaScript function to change the language
// function changeLanguage() {
//     const selectedLanguage = document.getElementById("languageSelector").value;

//     // Define translations for both English and Arabic
//     const translations = {
//         en: {
//             'nav-home': 'Home',
//             'nav-about': 'About Us',
//             'nav-message': "CHAIRMAN'S MESSAGE",
//             'nav-hse': 'HSE & QC POLICY',
//             'nav-staff': 'MANAGEMENT & STAFF',
//             'hero-title': 'Transforming Visions Into Reality',
//             'hero-description': 'We specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail.',
//             'about-title': 'About Us',
//             'about-description': 'We are a company committed to delivering the highest standards in every project we undertake.'
//         },
//         ar: {
//             'nav-home': 'الرئيسية',
//             'nav-about': 'من نحن',
//             'nav-message': 'رسالة الرئيس',
//             'nav-hse': 'سياسة الصحة والسلامة والجودة',
//             'nav-staff': 'الإدارة والموظفون',
//             'hero-title': 'تحويل الرؤى إلى واقع',
//             'hero-description': 'نحن متخصصون في تحويل الرؤى إلى واقع مع حرفية استثنائية واهتمام دقيق بالتفاصيل.',
//             'about-title': 'من نحن',
//             'about-description': 'نحن شركة ملتزمة بتقديم أعلى المعايير في كل مشروع نتعامل معه.'
//         }
//     };

//     // Get the selected language translations
//     const selectedTranslations = translations[selectedLanguage];

//     // Update the text content of the elements
//     for (const key in selectedTranslations) {
//         document.getElementById(key).textContent = selectedTranslations[key];
//     }
// }
