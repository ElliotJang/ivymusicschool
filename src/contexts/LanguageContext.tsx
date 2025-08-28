import React, { createContext, useContext, useState } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '선생님 소개',
    'nav.lessons': '레슨 안내',
    'nav.faq': '자주 묻는 질문',
    'nav.contact': '문의',
    
    // Hero
    'hero.title': 'IVY 음악학원',
    'hero.subtitle': '모든 연령을 위한 일대일 피아노 레슨',
    'hero.cta': '수업 문의하기',
    
    // About
    'about.title': '선생님 소개',
    'about.name': '강 제니 (Jenny Kang)',
    'about.education': '음악 학사, 반주 전공 준학사',
    'about.experience': '경력',
    'about.exp1': '피아노 교사 및 원장, IVY 음악학원, 로스앤젤레스, CA (2006–2016)',
    'about.exp2': '개인 피아노 교사, IVY 음악학원 (CA & GA, 2018–현재)',
    'about.current': '현재 조지아 주 로렌스빌(Lawrenceville, GA) 자택에서 수업 진행 중이며, 새 피아노 스튜디오를 준비 중입니다.',
    'about.certifications': '자격 및 협회 가입',
    'about.cert1': 'MTAC (캘리포니아 음악교사협회) 회원',
    'about.cert2': 'SYMF 회원',
    
    // Lessons
    'lessons.title': '레슨 안내',
    'lessons.subtitle': '모든 레슨은 1:1 맞춤 수업으로, 학생의 실력과 목표에 맞춰 진행됩니다.',
    'lessons.options': '수업 옵션',
    'lessons.classical': '클래식 피아노',
    'lessons.classical.desc': '테크닉, 악보 읽기, 표현력을 기초부터 클래식 곡을 통해 배우는 수업',
    'lessons.pop': '팝 음악 / 코드',
    'lessons.pop.desc': '코드 진행, 리듬 훈련, 듣기 능력을 통해 좋아하는 팝송 연주하기',
    'lessons.chord': '코드 반주',
    'lessons.chord.desc': '코드를 활용한 연주 및 기본 즉흥 연주 배우기',
    'lessons.beginner': '초급 레슨',
    'lessons.beginner.desc': '기본 테크닉, 리듬, 악보 읽기 등 기초 다지기',
    'lessons.intermediate': '중급 및 고급 레슨',
    'lessons.intermediate.desc': '연주력, 음악 이론, 표현력 향상에 집중',
    'lessons.kids': '어린이 및 청소년',
    'lessons.kids.desc': '나이와 수준에 맞춘 재미있고 몰입감 있는 수업',
    'lessons.adults': '성인',
    'lessons.adults.desc': '처음 시작하거나 다시 배우고 싶은 분들을 위한 수업',
    
    // Achievements
    'achievements.title': '학생 성과',
    'achievements.recitals': '7회 이상의 정기 연주회',
    'achievements.competition': '10명 이상의 SYMF(남서부 청소년 음악 콩쿠르) 수상자',
    'achievements.merit': 'Certificate of Merit 레벨 10 이상 합격자 15명 이상 (대부분 Honors)',
    'achievements.universities': '제니 선생님의 제자들은 음악 전공 또는 장학금으로 아래 명문대학에 합격했습니다!',
    'achievements.university.title': '명문대 합격생들',
    
    // FAQ
    'faq.title': '자주 묻는 질문',
    'faq.q1': '아이는 몇 살부터 피아노를 시작할 수 있나요?',
    'faq.a1': '보통 만 5~6세부터 시작하는 것이 적합합니다.',
    'faq.q2': '집에 피아노가 꼭 있어야 하나요?',
    'faq.a2': '처음에는 디지털 키보드도 괜찮습니다. 88건반, 터치감 있는 모델을 추천드리며, 실력이 늘면 업그레이드하시는 것이 좋습니다.',
    'faq.q3': '수업 시간은 얼마나 되나요?',
    'faq.a3': '어린 아이 경우는 60분을 30분씩 나누어 일주일에 두번 하는걸 권합니다. 나이와 수준에 따라 가장 적합한 수업 시간을 상담 후 결정합니다.',
    'faq.q4': '어떤 음악 스타일을 가르치시나요?',
    'faq.a4': '기본적으로는 클래식 피아노를 중심으로 진행되며 학생의 흥미에 따라 팝, 코드 반주 등도 함께 가르칩니다.',
    'faq.q5': '부모가 수업에 함께 있어도 되나요?',
    'faq.a5': '초기 수업에는 학부모 참관이 가능합니다. 이후에는 자립심을 키우기 위해 혼자 수업하는 것을 권장합니다.',
    'faq.q6': '수업료는 어떻게 되나요?',
    'faq.a6': '수업 시간과 횟수에 따라 다릅니다. 개별 상담을 통해 자세한 안내를 드립니다.',
    'faq.q7': '시험이나 콩쿠르 준비도 도와주시나요?',
    'faq.a7': '네, 캘리포니아에서 Certificate of Merit 시험과 SYMF와 같은 지역 대회를 준비해왔습니다.',
    'faq.q8': '성인 초보자도 수업 받을 수 있나요?',
    'faq.a8': '물론입니다! 피아노를 처음 배우시거나 오랜만에 다시 시작하시는 분 모두 환영합니다.',
    
    // Contact
    'contact.title': '문의 및 상담',
    'contact.subtitle': '더 자세한 정보 및 수업료 상담을 원하시면 아래로 연락 주세요:',
    'contact.location': '조지아주 로렌스빌 (Lawrenceville, GA)',
    'contact.phone': '전화번호',
    'contact.email': '이메일',
    'contact.address': '위치',
    'contact.callButton': '전화로 문의하기',
    'contact.smsButton': '문자로 문의하기',
    'contact.emailButton': '이메일로 문의하기',
    'contact.welcomeText': '상담은 언제든지 환영합니다!',
    'contact.infoText': '수업료와 일정에 대해 자세히 안내해드립니다.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.lessons': 'Lessons',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'IVY Music School',
    'hero.subtitle': 'Teaching one-on-one piano lessons to students of all ages',
    'hero.cta': 'Contact for Lessons',
    
    // About
    'about.title': 'About the Teacher',
    'about.name': 'Jenny Kang',
    'about.education': 'Bachelor of Arts in Music, Associate\'s in Accompaniment',
    'about.experience': 'Experience',
    'about.exp1': 'Piano Teacher and CEO, IVY Music School, Los Angeles, CA (2006–2016)',
    'about.exp2': 'Private Piano Instructor, IVY Music School (CA & GA, 2018–present)',
    'about.current': 'Currently teaching from home in Lawrenceville, GA. Preparing to open a new piano studio.',
    'about.certifications': 'Certifications & Affiliations',
    'about.cert1': 'Member, MTAC (Music Teachers\' Association of California)',
    'about.cert2': 'Member, SYMF (Southwestern Youth Music Festival)',
    
    // Lessons
    'lessons.title': 'Lessons',
    'lessons.subtitle': 'All lessons are one-on-one and tailored to the student\'s goals and level.',
    'lessons.options': 'Lesson Options',
    'lessons.classical': 'Classical Piano',
    'lessons.classical.desc': 'Build a strong foundation in technique, sight-reading, and expression through traditional classical repertoire.',
    'lessons.pop': 'Pop Music / Chords',
    'lessons.pop.desc': 'Learn to play your favorite pop songs with chord patterns, rhythm training, and ear development.',
    'lessons.chord': 'Chord & Lead Sheet Playing',
    'lessons.chord.desc': 'Understand how to play using chords and basic improvisation.',
    'lessons.beginner': 'Beginner Lessons',
    'lessons.beginner.desc': 'Learn basic technique, rhythm, and reading music',
    'lessons.intermediate': 'Intermediate & Advanced',
    'lessons.intermediate.desc': 'Focus on performance, theory, and expression',
    'lessons.kids': 'Kids & Teens',
    'lessons.kids.desc': 'Fun and engaging lessons tailored to their age and skill level',
    'lessons.adults': 'Adults',
    'lessons.adults.desc': 'Lessons for beginners or those returning to piano',
    
    // Achievements
    'achievements.title': 'Student Achievements',
    'achievements.recitals': '7+ Recitals',
    'achievements.competition': '10+ Southwestern Youth Music Festival Competition Winners',
    'achievements.merit': 'Certificate of Merit 15+ level 10 passed (Majority with Honors)',
    'achievements.universities': 'My students have been accepted to top universities — some with music majors or scholarships!',
    'achievements.university.title': 'University Admissions',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What age can my child start piano lessons?',
    'faq.a1': 'Most children are ready around age 5 or 6.',
    'faq.q2': 'Do I need a piano at home?',
    'faq.a2': 'A digital keyboard is fine for beginners. I recommend 88 weighted keys. As students progress, an acoustic or a full-size fully weighted keyboard is ideal.',
    'faq.q3': 'How long are the lessons?',
    'faq.a3': 'For young children, I recommend splitting the 60-minute lesson into two 30-minute sessions per week. The most suitable lesson duration will be determined after a consultation, based on the student\'s age and level.',
    'faq.q4': 'What styles of music do you teach?',
    'faq.a4': 'I primarily teach classical piano but incorporate pop and chords based on student interest and skill level.',
    'faq.q5': 'Can I sit in on my child\'s lesson?',
    'faq.a5': 'Parents are welcome to observe, especially in early lessons.',
    'faq.q6': 'What are your rates?',
    'faq.a6': 'Rates vary depending on lesson length and frequency. Please contact me directly for a personalized quote.',
    'faq.q7': 'Do you help students prepare for exams or competitions?',
    'faq.a7': 'Yes, when teaching in California, I prepared students for Certificate of Merit (CM), and local competitions like SYMF.',
    'faq.q8': 'Do you teach adults or beginners with no experience?',
    'faq.a8': 'Absolutely! I work with adult beginners and returning pianists.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'For more Info and Pricing',
    'contact.location': 'Lawrenceville, GA',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Location',
    'contact.callButton': 'Call for Inquiry',
    'contact.smsButton': 'Text for Inquiry',
    'contact.emailButton': 'Email for Inquiry',
    'contact.welcomeText': 'Consultation is always welcome!',
    'contact.infoText': 'We will provide detailed information about tuition and schedule.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};