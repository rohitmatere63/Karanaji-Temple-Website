// ─── Slideshow Images (Unsplash — free to use) ───────────────
export const SLIDES = [
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerZiXqeVMDJBI2Z4KlWq0AUZ-_HKzpLSF5XZoGBe_WFlVadN3PJLKr5Xg2UuI9vl2RVarPtrohtQ7jIZ7FwHy2QY4Ydw5o8CFmH5zdAbqWXqwObbp_eQZ4GRfkZjDJxdZv69vQ=s1360-w1360-h1020-rw",
    caption: { en: "A Place of Peace & Devotion", hi: "शांति और भक्ति का स्थान", mr: "शांती आणि भक्तीचे स्थान" },
  },
  {
    url: "https://pilgrimdata.in/wp-content/uploads/2024/11/11-80.jpeg",
    caption: { en: "Sacred Rituals Every Day", hi: "प्रतिदिन पवित्र अनुष्ठान", mr: "दररोज पवित्र विधी" },
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerm1eButWsO4yeOeG76aphCWtoo1yac8AJAsZkc8NSSNs43RCXdOlx3sRmiwVr2555WD3g_aNNUab9O62zvpJCwxOzAL8TZPlBsKqXF6MBhK_RWqzPMygS32EK8GEl6VNYHajL1=s1360-w1360-h1020-rw",
    caption: { en: "Welcoming All Devotees", hi: "सभी भक्तों का स्वागत", mr: "सर्व भक्तांचे स्वागत" },
  },
  {
    url: "https://i.ytimg.com/vi/MCXEbPPByTY/sddefault.jpg",
    caption: { en: "Serving the Community Since 1962", hi: "१९६२ से समाज की सेवा", mr: "१९६२ पासून समाजसेवा" },
  },
];

// ─── Temple Meta ──────────────────────────────────────────────
export const TEMPLE_META = {
  name: { en: "Shri Kshetra Karanji Datta Devasthan", hi: "श्री क्षेत्र करंजी दत्त देवस्थान", mr: "श्री क्षेत्र करंजी दत्त देवस्थान" },
  tagline: { en: "Mandir & Trust", hi: "मंदिर एवं ट्रस्ट", mr: "मंदिर आणि ट्रस्ट" },
  established: "XXXX",
  location: "Ambevani, Nashik, Maharashtra",
  deity: { en: "Lord Shiva", hi: "भगवान शिव", mr: "भगवान शिव" },
  phone: "+91 XXXXX XXXXX",
  email: "info@shreekhetrakaranji.org",
  address: "Shri Kshetra Karanji (Kardam Rishi Ashram), Ambevani, Dindori, Nashik — 422205, Maharashtra",
  directions: {
    en: "3 Kilometre from Ambevani Entrance  & 2 KM from Ozarkhed Dam",
    hi: "आंबेवणी प्रवेश द्वार से 3 किलोमीटर और ओझरखेड बांध से 2 किलोमीटर",
    mr: "आंबेवणी प्रवेशद्वारापासून ३ किलोमीटर आणि ओझरखेड धरणापासून २ किलोमीटर",
  },
  hours: {
    en: "Open daily: 5:00 AM – 9:00 PM\nSpecial hours on festival days",
    hi: "प्रतिदिन खुला: सुबह ५:०० – रात ९:००\nत्योहारों पर विशेष समय",
    mr: "रोज उघडे: सकाळी ५:०० – रात्री ९:००\nसणांच्या दिवशी विशेष वेळ",
  },
  stats: [
    { value: "60+", label: { en: "Years of Service", hi: "सेवा के वर्ष", mr: "सेवेची वर्षे" } },
    { value: "500+", label: { en: "Daily Visitors", hi: "दैनिक दर्शनार्थी", mr: "दररोज भाविक" } },
    { value: "12", label: { en: "Annual Festivals", hi: "वार्षिक उत्सव", mr: "वार्षिक उत्सव" } },
  ],
};

// ─── Nav Links ────────────────────────────────────────────────
export const NAV_LINKS = [
  { id: "home",     label: { en: "Home",     hi: "होम",      mr: "मुख्यपान" } },
  { id: "about",    label: { en: "About",    hi: "परिचय",    mr: "परिचय" } },
  { id: "schedule", label: { en: "Schedule", hi: "समय-सारिणी", mr: "वेळापत्रक" } },
  { id: "events",   label: { en: "Events",   hi: "आयोजन",    mr: "कार्यक्रम" } },
  { id: "gallery",  label: { en: "Gallery",  hi: "गैलरी",    mr: "गॅलरी" } },
  { id: "updates",  label: { en: "Updates",  hi: "समाचार",   mr: "अपडेट्स" } },
  { id: "contact",  label: { en: "Contact",  hi: "संपर्क",   mr: "संपर्क" } },
];

// ─── Daily Schedule ───────────────────────────────────────────
export const DAILY_SCHEDULE = [
  { time: "5:30 AM", icon: "🪔", ritual: { en: "Temple Opens", hi: "मंदिर खुलने का समय", mr: " मंदिर उघडण्याची वेळ" } },
  { time: "7:00 AM", icon: "🔔", ritual: { en: "Morning Aarti",            hi: "प्रातः आरती",           mr: "सकाळची आरती" } },
  // { time: "9:00 AM", icon: "🌸", ritual: { en: "Archana & Naivedyam",      hi: "अर्चना एवं नैवेद्य",    mr: "अर्चना व नैवेद्य" } },
  { time: "12:00 PM", icon: "☀️", ritual: { en: "Afternoon Aarti",          hi: "दुपारची आरती",         mr: "मध्यान्ह पूजा" } },
  { time: "6:00 PM", icon: "🔔", ritual: { en: "Evening Aarti",            hi: "सायं आरती",             mr: "संध्याकाळची आरती" } },
  { time: "8:00 PM", icon: "🌙", ritual: { en: "Shayan Aarti & Closing",   hi: "शयन आरती एवं बंद",      mr: "शयन आरती व बंद" } },
];

// ─── Events ───────────────────────────────────────────────────
export const EVENTS = [
  {
    date: "Mar 14", year: "2026",
    tag: { en: "Major Festival", hi: "मुख्य उत्सव", mr: "मुख्य उत्सव" },
    title: { en: "Maha Shivaratri", hi: "महाशिवरात्रि", mr: "महाशिवरात्री" },
    description: { en: "All-night vigil with special abhishekam, bhajans and prasadam distribution.", hi: "विशेष अभिषेक, भजन और प्रसाद वितरण के साथ रात्रि जागरण।", mr: "विशेष अभिषेक, भजन आणि प्रसाद वाटपासह रात्रजागर।" },
  },
  {
    date: "23 Dec", year: "2026",
    tag: { en: "Festival", hi: "मुख्य उत्सव", mr: "मुख्य उत्सव" },
    title: { en: "Shree Datta Jayanti Utsav", hi: "श्री दत्त जयंती उत्सव", mr: "श्री दत्त जयंती उत्सव" },
    description: { en: "Celebrated with grand puja, cultural programs and community feast.", hi: "भव्य पूजा, सांस्कृतिक कार्यक्रम और सामूहिक भोज के साथ मनाई जाती है।", mr: "भव्य पूजा, सांस्कृतिक कार्यक्रम आणि सामुदायिक भोजनासह साजरी केली जाते।" },
  },
  {
    date: "16 Dec", year: "2026",
    tag: { en: "Festival", hi: "उत्सव", mr: "उत्सव" },
    title: { en: "Akhand Harinam Saptah", hi: "अखंड हरिनाम सप्‍ताह", mr: "अखंड हरिनाम सप्‍ताह" },
    description: { en: "7 day event.", hi: " हा सोहळा सलग सात दिवस चालतो", mr: " हा सोहळा सलग सात दिवस चालतो|" },
  },
  // {
  //   date: "Apr 22", year: "2026",
  //   tag: { en: "Festival", hi: "उत्सव", mr: "उत्सव" },
  //   title: { en: "Akshaya Tritiya", hi: "अक्षय तृतीया", mr: "अक्षय तृतीया" },
  //   description: { en: "Auspicious day for new beginnings. Anna daan and gold puja.", hi: "नई शुरुआत का शुभ दिन। अन्नदान और स्वर्ण पूजा।", mr: "नव्या सुरुवातीचा शुभ दिवस. अन्नदान आणि सुवर्ण पूजा." },
  // },
  // {
  //   date: "May 12", year: "2026",
  //   tag: { en: "Community", hi: "सामुदायिक", mr: "सामुदायिक" },
  //   title: { en: "Buddha Purnima", hi: "बुद्ध पूर्णिमा", mr: "बुद्ध पौर्णिमा" },
  //   description: { en: "Interfaith prayers and community service activities.", hi: "अंतरधार्मिक प्रार्थना और सामुदायिक सेवा गतिविधियाँ।", mr: "आंतरधर्मीय प्रार्थना आणि सामुदायिक सेवा उपक्रम." },
  // },
  // {
  //   date: "Jun 1", year: "2026",
  //   tag: { en: "Festival", hi: "उत्सव", mr: "उत्सव" },
  //   title: { en: "Ganga Dussehra", hi: "गंगा दशहरा", mr: "गंगा दसरा" },
  //   description: { en: "Sacred river worship, kalash yatra and community prayers.", hi: "पवित्र नदी पूजन, कलश यात्रा और सामूहिक प्रार्थना।", mr: "पवित्र नदी पूजन, कलश यात्रा आणि सामुदायिक प्रार्थना." },
  // },
];

// ─── Gallery ──────────────────────────────────────────────────

export const GALLERY_ITEMS = [
  { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqqDEaum8MpsIMdSwGFWfaKnbiQ490HtjKsOJzpCYOiQdxRNHo5owU0dpWiNysughlB2B-SjJQ7WpOdfmJd4OHDSbfDQcVizT21wiSsauYZGLruZF_WK-w7Hc0IBXt8Ulm5y43L=s1360-w1360-h1020-rw", icon: "🛕", label: { en: "Ganapati Madir", hi: "Ganapati Madir",          mr: "Ganapati Madir" } },
  { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep84ZlAPfZRYgqKMVCsYGJjDGWBTxEcxz74KTa6igKxUdCUzaeFqWSuex37upGDquUm5UySfM4olYbJHb3A6t1mE9gB3mU6Huc1NT-99PMPPcF_MU3Uq-5c1edHOE2AHaCJMhw=s1360-w1360-h1020-rw",  icon: "🪔", label: { en: "Mahadev Mandir",      hi: "Mahadev Mandir",     mr: "Mahadev Mandir" } },
  { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoEVa7hbUkE6LEgEwlIgbFBZP9d3ybmvjBwDn-8DChd6u2wfHL-gk47AuZwbmQdNctn0PcwPQlbMZmRDKRidlsvEzdBFb8BDTMbaomqVh7MJ1JLBT9B2aSy0tHfx-W5pfl12nZjdw=s1360-w1360-h1020-rw",   icon: "🏛️", label: { en: "Shree Vitthal Rukmini Mandir",     hi: "hree Vitthal Rukmini Mandir",   mr: "hree Vitthal Rukmini Mandir" } },
  { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersM_IbwT0LglBMB-uGZ135UF8Ne_1ME6XPt9OT5BtflEcYt_SffpweBfg9BkVipjDDDWKlL2gbaY6FJ4jPNYvDgmiIFRWEY5sWm5xScMTR6S3Lsgf0i85iB1dXgBGklNiib1pYXA=s1360-w1360-h1020-rw", icon: "🎊", label: { en: "Shubhashgiri Maharaj Samadhi",           hi: "Shubhashgiri Maharaj Samadhi",        mr: "Shubhashgiri Maharaj Samadhi" } },
  { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep24qKeizhhgZX166zztMPaOPWmcL2wEe_UQUBcgiyjlc-0eM9alt8Zb1NU19kE3IDw6dLH6N2v9aoWrmJxdXWSW6LFQ3l2tSSpFi4yKDP22YKw2VGg0aDoox49exDk4yj_BH9wdW39GCQ=s1360-w1360-h1020-rw",     icon: "🌺", label: { en: "Saptashrungi Mata Mandir",   hi: "Saptashrungi Mata Mandir",   mr: "Saptashrungi Mata Mandir" } },
  { url: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep8SCsgXTfDlhtaK_TroFs55E8TpYCAQOcpD0-lJ_6YUJcjKWmyRmhqjhOj8DyVzJl7wNw0VmTD32NjSsdaW1nzxm_qKWnXPO_EnDav4caOKLkes0GIZ05j8-a2zJ1DK19N9lOh=w141-h235-n-k-no-nu", icon: "🙏", label: { en: "Ganga Mata Mandir", hi: "Ganga Mata Mandir", mr: "Ganga Mata Mandir" } },
];

// ─── Updates ──────────────────────────────────────────────────
export const UPDATES = [
  {
    date: "Feb 28, 2026",
    title: { en: "B Class Pilgrimage Status",          hi: " 'ब' वर्ग तीर्थक्षेत्राचा दर्जा",             mr: " 'ब' वर्ग तीर्थक्षेत्राचा दर्जा" },
    description: { en: "We are pleased to announce that Shree Kshetra Karanji Devasthan has been granted 'B' Class Pilgrimage Status by the Village Development Department of the Government of Maharashtra.", hi: "श्री क्षेत्र करंजी देवस्थान याला महाराष्ट्र शासनाच्या ग्रामविकास विभागामार्फत 'ब' वर्ग तीर्थक्षेत्राचा दर्जा मंजूर करण्यात आला आहे.", mr: "श्री क्षेत्र करंजी देवस्थान याला महाराष्ट्र शासनाच्या ग्रामविकास विभागामार्फत 'ब' वर्ग तीर्थक्षेत्राचा दर्जा मंजूर करण्यात आला आहे." },
  },
  {
    date: "Feb 15, 2026",
    title: { en: "Volunteer Program Launched",         hi: "स्वयंसेवक कार्यक्रम शुरू",       mr: "स्वयंसेवक कार्यक्रम सुरू" },
    description: { en: "Join our seva program every Sunday 8 AM–12 PM. All are welcome to contribute to our community kitchen.", hi: "हर रविवार सुबह ८ से दोपहर १२ बजे तक हमारे सेवा कार्यक्रम में शामिल हों। सामुदायिक रसोई में योगदान करने के लिए सभी का स्वागत है।", mr: "दर रविवारी सकाळी ८ ते दुपारी १२ वाजेपर्यंत आमच्या सेवा कार्यक्रमात सहभागी व्हा. सामुदायिक स्वयंपाकघरात योगदान देण्यासाठी सर्वांचे स्वागत आहे." },
  },
  {
    date: "Jan 30, 2026",
    title: { en: "Temple Renovation Complete",         hi: "मंदिर नवीनीकरण पूर्ण",           mr: "मंदिर नूतनीकरण पूर्ण" },
    description: { en: "The north wing restoration and gopuram repainting has been completed. We thank all donors for their generous contributions.", hi: "उत्तरी खंड का पुनरुद्धार और गोपुरम की पुनः पेंटिंग पूर्ण हो गई है। हम सभी दानदाताओं के उदार योगदान के लिए आभारी हैं।", mr: "उत्तर विभागाचे नूतनीकरण व गोपुरमचे पुनर्रंगकाम पूर्ण झाले आहे. सर्व देणगीदारांच्या उदार योगदानाबद्दल आम्ही आभारी आहोत." },
  },
  // {
  //   date: "Jan 10, 2026",
  //   title: { en: "Online Puja Booking Available",      hi: "ऑनलाइन पूजा बुकिंग उपलब्ध",     mr: "ऑनलाइन पूजा बुकिंग उपलब्ध" },
  //   description: { en: "Book archana, abhishekam and special pujas online. Slots available 7 days in advance.", hi: "अर्चना, अभिषेक और विशेष पूजाएं ऑनलाइन बुक करें। स्लॉट ७ दिन पहले से उपलब्ध हैं।", mr: "अर्चना, अभिषेक आणि विशेष पूजा ऑनलाइन बुक करा. स्लॉट ७ दिवस आधीपासून उपलब्ध आहेत." },
  // },
];

// ─── Marquee Chants ───────────────────────────────────────────
export const MARQUEE_CHANTS = [
  "🌸 Shri Gurudev Datta", "🔔 Om Namah Shivaya", "🪔 Har Har Mahadev", "🌺 जय गुरु दत्त", 
];

// ─── Contact Form Purposes ────────────────────────────────────
export const CONTACT_PURPOSES = {
  en: ["Puja Booking", "Event Inquiry", "Donation", "General Query"],
  hi: ["पूजा बुकिंग", "आयोजन संबंधी", "दान", "सामान्य प्रश्न"],
  mr: ["पूजा बुकिंग", "कार्यक्रम चौकशी", "देणगी", "सामान्य प्रश्न"],
};

// ─── UI Text (buttons, labels, etc.) ─────────────────────────
export const UI_TEXT = {
  visitUs:       { en: "Visit Us",           hi: "दर्शन करें",      mr: "भेट द्या" },
  todaySchedule: { en: "Today's Schedule",   hi: "आज का समय",       mr: "आजचे वेळापत्रक" },
  learnMore:     { en: "Learn More",         hi: "अधिक जानें",      mr: "अधिक जाणा" },
  ourStory:      { en: "Our Story",          hi: "हमारी कहानी",     mr: "आमची कथा" },
  aHomeForThe:   { en: "A Home for the",     hi: "का पावन धाम",     mr: "चे पवित्र धाम" },
  divine:        { en: "Divine",             hi: "परमात्मा",         mr: "परमात्मा" },
  sendMessage:   { en: "Send Message 🙏",    hi: "संदेश भेजें 🙏",   mr: "संदेश पाठवा 🙏" },
  yourName:      { en: "Your Name",          hi: "आपका नाम",        mr: "तुमचे नाव" },
  email:         { en: "Email Address",      hi: "ईमेल पता",        mr: "ईमेल पत्ता" },
  phone:         { en: "Phone Number",       hi: "फोन नंबर",        mr: "फोन नंबर" },
  selectPurpose: { en: "Select Purpose",     hi: "उद्देश्य चुनें",   mr: "उद्देश निवडा" },
  yourMessage:   { en: "Your message...",    hi: "आपका संदेश...",   mr: "तुमचा संदेश..." },
  thankYou:      { en: "Dhanyavaad!",        hi: "धन्यवाद!",        mr: "धन्यवाद!" },
  receivedMsg:   { en: "We've received your message and will get back to you shortly.", hi: "हमें आपका संदेश मिल गया है, हम जल्द ही संपर्क करेंगे।", mr: "आम्हाला तुमचा संदेश मिळाला आहे, आम्ही लवकरच संपर्क करू." },
  sendAnother:   { en: "Send another message", hi: "और संदेश भेजें", mr: "आणखी संदेश पाठवा" },
  address:       { en: "Address",            hi: "पता",             mr: "पत्ता" },
  templeHours:   { en: "Temple Hours",       hi: "मंदिर समय",       mr: "मंदिर वेळ" },
  contact:       { en: "Contact",            hi: "संपर्क",          mr: "संपर्क" },
  howToReach:    { en: "How to Reach",       hi: "कैसे पहुँचें",    mr: "कसे पोहोचाल" },
  scrollDown:    { en: "Scroll",             hi: "स्क्रॉल करें",    mr: "स्क्रोल करा" },
  ourStory: { en: "Our Story", hi: "हमारी कहानी", mr: "आमची कथा" },
aHomeForThe: { en: "A Home for the", hi: "का पावन धाम", mr: "चे पवित्र धाम" },
divine: { en: "Divine", hi: "परमात्मा", mr: "परमात्मा" },
};