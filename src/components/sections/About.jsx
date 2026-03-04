import { TEMPLE_META, UI_TEXT } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

const ABOUT_TEXT = {
  para1: {
    en: "Founded in 1962 by the visionary saint Swami Prakashananda, Shri Mahadev Mandir has stood for over six decades as a beacon of spiritual learning, community service, and devotional worship in Pune.",
    hi: "दूरदर्शी संत स्वामी प्रकाशानंद द्वारा १९६२ में स्थापित, श्री महादेव मंदिर छह दशकों से अधिक समय से पुणे में आध्यात्मिक शिक्षा, सामुदायिक सेवा और भक्तिपूर्ण पूजा का केंद्र रहा है।",
    mr: "दूरदर्शी संत स्वामी प्रकाशानंद यांनी १९६२ मध्ये स्थापन केलेले श्री महादेव मंदिर सहा दशकांहून अधिक काळ पुण्यात आध्यात्मिक शिक्षण, सामुदायिक सेवा आणि भक्तिपूर्ण उपासनेचे केंद्र राहिले आहे.",
  },
  para2: {
    en: "Our temple is consecrated to Lord Shiva, with subsidiary shrines to Goddess Parvati, Lord Ganesha, and Lord Vishnu. The temple complex spans three acres and includes a meditation hall, Vedic school, and community kitchen.",
    hi: "हमारा मंदिर भगवान शिव को समर्पित है, साथ ही देवी पार्वती, भगवान गणेश और भगवान विष्णु के उप-मंदिर भी हैं। मंदिर परिसर तीन एकड़ में फैला है और इसमें ध्यान हॉल, वैदिक विद्यालय और सामुदायिक रसोई शामिल है।",
    mr: "आमचे मंदिर भगवान शिवाला समर्पित आहे, तसेच देवी पार्वती, भगवान गणेश आणि भगवान विष्णू यांची उपमंदिरे आहेत. मंदिर परिसर तीन एकरमध्ये पसरलेला असून त्यात ध्यान हॉल, वैदिक शाळा आणि सामुदायिक स्वयंपाकघर आहे.",
  },
  quote: {
    en: "Where devotion meets divinity",
    hi: "जहाँ भक्ति और दिव्यता का मिलन होता है",
    mr: "जिथे भक्ती आणि दिव्यत्व एकत्र येतात",
  },
};

export default function About({ t }) {
  return (
    <section id="about" className="py-16 px-4 bg-stone-50">
      <div className="max-w-lg mx-auto">
        <SectionHeader
          eyebrow={t(UI_TEXT.ourStory)}
          heading={t(UI_TEXT.aHomeForThe) + " " + t(UI_TEXT.divine)}
        />

        {/* Image */}
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="aspect-[16/9] bg-gradient-to-br from-amber-900 to-stone-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-3">🛕</div>
                <p className="font-display text-amber-200/60 text-xl italic">
                  {t(TEMPLE_META.name)}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="font-display text-white text-lg italic">
                "{t(ABOUT_TEXT.quote)}"
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.1}>
          <p className="font-body text-stone-600 leading-relaxed mb-4 text-sm">
            {t(ABOUT_TEXT.para1)}
          </p>
          <p className="font-body text-stone-600 leading-relaxed mb-8 text-sm">
            {t(ABOUT_TEXT.para2)}
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 gap-4">
            {TEMPLE_META.stats.map(({ value, label }) => (
              <div
                key={value}
                className="text-center p-4 bg-white rounded-xl border border-stone-100 shadow-sm"
              >
                <div className="font-display text-3xl text-amber-700">{value}</div>
                <div className="font-body text-xs text-stone-500 mt-1 leading-tight">
                  {t(label)}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}