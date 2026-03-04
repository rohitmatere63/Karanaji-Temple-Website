



import { useState } from "react";
import { TEMPLE_META, UI_TEXT } from "../../data/templeData.js";
import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

const ABOUT_TEXT = {
  para1: {
    en: "An idol of Lord Dattatreya in the Padmasana (lotus posture) is rarely seen anywhere else; this is the only place in India where such a form can be witnessed. This white, pristine idol, measuring barely one vit (the span of a hand) in height, is kept at the center of the temple's inner sanctum. It is said that Mother Ganga herself presented this idol as a blessing (Prasad) to Shri Shivdayal Swami, who had performed penance here.",
    hi: "श्रीदत्तप्रभूंची पद्मासनस्थित मूर्ती अन्यत्र कोठेही पहायला मिळत नाही व एकमेव भारतामधून इथे पहायला मूर्ती मिळते. प्रत्यक्ष गंगामाईनं श्रीदत्तप्रभूंची ही मूर्ती येथे तप केलेल्या श्री शिवदयाळ स्वामींना प्रसादस्वरुप दिलेली आहे. मंदिरात असलेल्या देवघरात केंद्रस्थानी जेमतेम एक वित उंचीची ही पांढरी शुभ्र मूर्ती ठेवलेली आहे.",
    mr: "श्रीदत्तप्रभूंची पद्मासनस्थित मूर्ती अन्यत्र कोठेही पहायला मिळत नाही व एकमेव भारतामधून इथे पहायला मूर्ती मिळते. प्रत्यक्ष गंगामाईनं श्रीदत्तप्रभूंची ही मूर्ती येथे तप केलेल्या श्री शिवदयाळ स्वामींना प्रसादस्वरुप दिलेली आहे. मंदिरात असलेल्या देवघरात केंद्रस्थानी जेमतेम एक वित उंचीची ही पांढरी शुभ्र मूर्ती ठेवलेली आहे.",
  },
  para2: {
    en: "In the Treta Yuga, on the full moon day of the month of Margashirsha exactly at noon, Lord Dattatreya took incarnation as the son of Maharishi Atri and the great, virtuous Sadhvi Anasuya.",
    hi: "त्रेतायुगात मार्गशिर्ष पौर्णिमेच्या भर माध्यान्ही, महर्षी अत्रि आणि महापतिव्रता साध्वी अनसूया यांच्या सुपुत्ररुपानं भगवान् श्रीदत्तात्रेयांनी अवतार धारण केला.",
    mr: "त्रेतायुगात मार्गशिर्ष पौर्णिमेच्या भर माध्यान्ही, महर्षी अत्रि आणि महापतिव्रता साध्वी अनसूया यांच्या सुपुत्ररुपानं भगवान् श्रीदत्तात्रेयांनी अवतार धारण केला.",
  },
  extra1: {
    en: "The wife of Maharishi Atri, the great Saint Mata Anasuya, was the daughter of Kardama Muni (himself the son of Goddess Lakshmi) and Devahuti. Witnessing the profound wisdom, ascetic power (Tapa-samarthya), and detachment (Vairagya) of Atri Muni, Kardama Muni and Devahuti were deeply pleased and gave their beautiful and virtuous daughter, Anasuya, to him in marriage. The name 'Anasuya' signifies one who is devoid of envy (Asuya-rahit). The maternal home of this great Sati, which is the ancestral home (Aajol) of Lord Dattatreya (the Ashram of Maharishi Kardama), is located in the scenic region of the Dandakaranya forest near the village of Karanji, close to Dindori.",
    hi: "साक्षात् श्रीलक्ष्मीमातेचे पुत्र असलेल्या कर्दममुनी आणि देवाहुती यांची सुकन्या म्हणजेच महर्षी अत्रिंची पत्नी महासाध्वी माता अनसूया! अत्रिमुनींचं ज्ञान, तपःसामर्थ्य आणि वैराग्य पाहून कर्दममुनी-देवाहुतीही त्यांच्यावर प्रसन्न झाले आणि त्यांनी आपल्या अनसूया या सौंदर्यवती-सुशील कन्येचा अत्रिमुनींशी विवाह लावून दिला. 'अनसूया' म्हणजे 'असूयारहित'! अश्या या महान सती श्रीअनसूयेचं माहेर अर्थात् श्रीदत्तप्रभूंचं आजोळ (महर्षी कर्दममुनींचा आश्रम) आहे.",
    mr: "साक्षात् श्रीलक्ष्मीमातेचे पुत्र असलेल्या कर्दममुनी आणि देवाहुती यांची सुकन्या म्हणजेच महर्षी अत्रिंची पत्नी महासाध्वी माता अनसूया! अत्रिमुनींचं ज्ञान, तपःसामर्थ्य आणि वैराग्य पाहून कर्दममुनी-देवाहुतीही त्यांच्यावर प्रसन्न झाले आणि त्यांनी आपल्या अनसूया या सौंदर्यवती-सुशील कन्येचा अत्रिमुनींशी विवाह लावून दिला. 'अनसूया' म्हणजे 'असूयारहित'! अश्या या महान सती श्रीअनसूयेचं माहेर अर्थात् श्रीदत्तप्रभूंचं आजोळ (महर्षी कर्दममुनींचा आश्रम) आहे.",
  },
   extra2: {
    en: "Situated directly on the Nashik-Vani road, as one travels towards Vani, the Ojharkhed Dam lies to the left, while this holy site is just 3-4 km inside to the right of the main road. This place is also known as the 'Nirjal Math'. The hermitages of other great ascetic sages like Parashar, Markandeya, and Kanva were also located in this vicinity. Furthermore, Kapila Muni—whom Lord Krishna Himself described in the Bhagavad Gita performed his penance at this very location.",
    hi: "दंडकारण्याचा अतिशय रम्य परिसर असलेल्या दिंडोरीजवळ 'करंजी' या गावी, अगदी भर नाशिक-वणी मार्गावर! वणीकडे जाताना डाव्या बाजूला लागतं ओझरखेड धरण आणि उजव्या बाजूला मुख्य रस्त्यापासून केवळ ३-४ किमी आत हे पवित्र स्थान आहे. यालाच 'निर्जल मठ' असंही म्हणतात. याच परिसरात पराशर, मार्कंडेय, कण्व या तपस्वी महर्षींचेही आश्रम होते. साक्षात् श्रीकृष्णानं ज्यांचं वर्णन 'सिद्धानां कपिलो मुनीः' असं केलंय, त्या कपिलमुनींनीही या स्थानी तपश्चर्या केलेली आहे.",
    mr: "दंडकारण्याचा अतिशय रम्य परिसर असलेल्या दिंडोरीजवळ 'करंजी' या गावी, अगदी भर नाशिक-वणी मार्गावर! वणीकडे जाताना डाव्या बाजूला लागतं ओझरखेड धरण आणि उजव्या बाजूला मुख्य रस्त्यापासून केवळ ३-४ किमी आत हे पवित्र स्थान आहे. यालाच 'निर्जल मठ' असंही म्हणतात. याच परिसरात पराशर, मार्कंडेय, कण्व या तपस्वी महर्षींचेही आश्रम होते. साक्षात् श्रीकृष्णानं ज्यांचं वर्णन 'सिद्धानां कपिलो मुनीः' असं केलंय, त्या कपिलमुनींनीही या स्थानी तपश्चर्या केलेली आहे.",
  },
  quote: {
    en: "Where devotion meets divinity",
    hi: "जहाँ भक्ति और दिव्यता का मिलन होता है",
    mr: "जिथे भक्ती आणि दिव्यत्व एकत्र येतात",
  },
  readMore: { en: "Read More", hi: "और पढ़ें", mr: "अधिक वाचा" },
  readLess: { en: "Read Less", hi: "कम पढ़ें", mr: "कमी वाचा" },
};

export default function About({ t }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-16 px-4 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
        //   eyebrow={t(UI_TEXT.ourStory)}
          heading={"।। श्री गुरुदेव दत्त ।।"}
        />

        {/* Image */}
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="aspect-[16/9]">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqi7ZNgzebYTuTSPoIbRAM6WC89hl-5lthEuKjxdxr1v2H4iPnD9BoLcDSmpEIuAyIRcnnAe2SryjQSNlpu4ZTaj93ARP13_OjTYVgXcIvkmYG_8yS_Mm_yTp0RmjokvQFMMDwk=s1360-w1360-h1020-rw"
                alt="Temple"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="font-display text-white text-lg italic">
                "{t(ABOUT_TEXT.quote)}"
              </p>
            </div> */}
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.1}>
          <p className="font-body text-stone-600 leading-relaxed mb-4 text-sm">
            {t(ABOUT_TEXT.para1)}
          </p>
          <p className="font-body text-stone-600 leading-relaxed text-sm">
            {t(ABOUT_TEXT.para2)}
          </p>

          {/* Expandable extra content */}
          <div
            style={{
              maxHeight: expanded ? "500px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out",
            }}
          >

            <p className="font-body text-stone-600 leading-relaxed text-sm mt-4 mb-4">
              {t(ABOUT_TEXT.extra1)}
            </p>
            

            <p className="font-body text-stone-600 leading-relaxed text-sm">
            {t(ABOUT_TEXT.extra2)}
          </p>
          
          </div>

          {/* Read More / Read Less button */}
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 flex items-center gap-2 font-body text-sm text-amber-700 hover:text-amber-600 transition-colors"
          >
            {expanded ? t(ABOUT_TEXT.readLess) : t(ABOUT_TEXT.readMore)}
            <span
              style={{
                display: "inline-block",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              ▾
            </span>
          </button>
        </FadeIn>

        {/* Stats */}
        {/* <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 gap-4 mt-8">
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
        </FadeIn> */}
      </div>
    </section>
  );
}