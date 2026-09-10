const courseGroups = {
  "chemistry-1": {
    name: "كيمياء 1",
    englishName: "Chemistry 1",
    url: "https://chat.whatsapp.com/L3tSwapIKAf9nyIxSgc2K9?mode=gi_t",
  },

  "physics-1": {
    name: "فيزياء عامة 1",
    englishName: "General Physics 1",
    url: "https://chat.whatsapp.com/DEzVJgQqnYU4fvqfIfykDt?mode=gi_t",
  },

  "calculus-1": {
    name: "تفاضل وتكامل 1",
    englishName: "Calculus 1",
    url: "https://chat.whatsapp.com/Llgi1T5HQLJFdct0PSCtUw?mode=gi_t",
  },

  "computer-programming": {
    name: "برمجة حاسوب",
    englishName: "Computer Programming",
    url: "https://chat.whatsapp.com/JYN4926uJRP7jxoSfZcfTP",
  },

  "engineering-drawing": {
    name: "رسم هندسي",
    englishName: "Engineering Drawing",
    url: "https://chat.whatsapp.com/Hr0Yr07xybc1LUzACvZ6x3",
  },

  "design-principles-1": {
    name: "مبادئ تصميم 1",
    englishName: "Design Principles 1",
    url: "https://chat.whatsapp.com/ESqAhu0VGyp4VjKyggvl4e?mode=gi_t",
  },

  "architectural-drawing-1": {
    name: "رسم معماري 1",
    englishName: "Architectural Drawing 1",
    url: "https://chat.whatsapp.com/EUbqhs1I07G8yFLJKSjavT?mode=gi_t",
  },

  "freehand-drawing-1": {
    name: "رسم حر 1",
    englishName: "Freehand Drawing 1",
    url: "https://chat.whatsapp.com/IK0DBMgqRD13dQ6I7CA8yG?mode=gi_t",
  },

  "introduction-to-architecture": {
    name: "مقدمة في العمارة",
    englishName: "Introduction to Architecture",
    url: "https://chat.whatsapp.com/F5YMMN1i75W1f8yNQLqjQL?mode=gi_t",
  },
};

const withChemistryCourses = [
  "chemistry-1",
  "physics-1",
  "calculus-1",
  "computer-programming",
  "engineering-drawing",
];

const withoutChemistryCourses = [
  "physics-1",
  "calculus-1",
  "computer-programming",
  "engineering-drawing",
];

const engineeringData = {
  guidanceGroup: {
    name: "إرشاد دفعة 126 كلية الهندسة",
    url: "https://chat.whatsapp.com/KLWJrcdS437EYfnut48vOO?s=cl&p=i&mlu=4",
  },

  universityRequired: [
    {
      id: "arabic-language",
      name: "اللغة العربية",
      englishName: "Arabic Language",
      url: "https://chat.whatsapp.com/Jkgs72INAFg0mP810AXp6I?s=cl&p=i&mlu=0&ilr=4",
    },

    {
      id: "remedial-english",
      name: "اللغة الإنجليزية الاستدراكية",
      englishName: "Remedial English",
      url: "https://chat.whatsapp.com/C3gFMKXC3ZgJ87nuBXC78L?s=hd&p=i&mlu=4&ilr=4",
    },

    {
      id: "english-1",
      name: "اللغة الإنجليزية 1",
      englishName: "English Language 1",
      url: "https://chat.whatsapp.com/DLrfRA3wY0X5Z8HoqVLMJx?s=hd&p=i&mlu=4&ilr=4",
    },

    {
      id: "english-2",
      name: "اللغة الإنجليزية 2",
      englishName: "English Language 2",
      url: "https://chat.whatsapp.com/CaMElK0Zoq0IgxG2QZu43c?s=hd&p=i&mlu=4&ilr=4",
    },

    {
      id: "palestinian-studies",
      name: "دراسات فلسطينية",
      englishName: "Palestinian Studies",
      url: "https://chat.whatsapp.com/FRbEtbyNhyk47M9KbRiJU7?s=hd&p=i&mlu=4&ilr=4",
    },

    {
      id: "islamic-culture",
      name: "الثقافة الإسلامية",
      englishName: "Islamic Culture",
      url: "https://chat.whatsapp.com/LBxiRr3NgY7EyUcWP10a23?s=hd&p=i&mlu=4&ilr=4",
    },

    {
      id: "community-service",
      name: "خدمة المجتمع والتنمية المستدامة",
      englishName: "Community Service & Sustainable Development",
      url: "https://chat.whatsapp.com/HjihwZ2fhIG06PDtkisA7F?s=hd&p=i&mlu=4&ilr=4",
    },

    {
      id: "leadership-communication",
      name: "مهارات القيادة والاتصال",
      englishName: "Leadership & Communication Skills",
      url: "https://chat.whatsapp.com/HabFW4IqutrC6H0auOaFC6?s=hd&p=i&mlu=4&ilr=4",
    },

    {
      id: "introduction-ai-data-science",
      name: "مقدمة في الذكاء الاصطناعي وعلم البيانات",
      englishName: "Introduction to AI & Data Science",
      url: "https://chat.whatsapp.com/BVwK0X1aoJkCI5tGez8tjx?s=hd&p=i&mlu=4&ilr=4",
    },
  ],

  majors: [
    {
      id: "mechanical-vehicles",
      name: "هندسة الميكانيك والمركبات",
      englishName: "Mechanical & Vehicle Engineering",
      batchGroup:
        "https://chat.whatsapp.com/BDe2MmqBnJb4NjdEUKg5gb?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "industrial",
      name: "الهندسة الصناعية",
      englishName: "Industrial Engineering",
      batchGroup:
        "https://chat.whatsapp.com/FE6Ow9EKummHD1GHcj5RiO?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "mechatronics",
      name: "هندسة الميكاترونكس",
      englishName: "Mechatronics Engineering",
      batchGroup:
        "https://chat.whatsapp.com/DOExrLzWN7c0M4TwSfm4qp?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "civil",
      name: "الهندسة المدنية",
      englishName: "Civil Engineering",
      batchGroup:
        "https://chat.whatsapp.com/LtcjDcJFqeVHXiXiTJUeQg?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "building",
      name: "هندسة البناء",
      englishName: "Building Engineering",
      batchGroup:
        "https://chat.whatsapp.com/Cmz9CNRqt4ZL1ybm1oM6Km?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "geomatics",
      name: "هندسة المساحة والجيومتكس",
      englishName: "Surveying & Geomatics Engineering",
      batchGroup:
        "https://chat.whatsapp.com/GZqjJ0trp5zFYkGtorRQkb?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "chemical-pharmaceutical",
      name: "الهندسة الكيميائية والهندسة الصيدلانية",
      englishName: "Chemical & Pharmaceutical Engineering",
      batchGroup:
        "https://chat.whatsapp.com/CYLKQCWc4XvI42whpUxwYH?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "energy-environment",
      name: "هندسة الطاقة والبيئة",
      englishName: "Energy & Environment Engineering",
      batchGroup:
        "https://chat.whatsapp.com/HDxdSNGcUFEC9LzKRgzLtt?s=cl&p=i&mlu=4",
      courses: withChemistryCourses,
    },

    {
      id: "computer-engineering",
      name: "هندسة الحاسوب",
      englishName: "Computer Engineering",
      batchGroup:
        "https://chat.whatsapp.com/EU85WYF2y602CJqtBX4vvQ?s=cl&p=i&mlu=4",
      courses: withoutChemistryCourses,
    },

    {
      id: "electrical",
      name: "الهندسة الكهربائية",
      englishName: "Electrical Engineering",
      batchGroup:
        "https://chat.whatsapp.com/GgvOhUjBQZfEQskHfR79ju?s=cl&p=i&mlu=4",
      courses: withoutChemistryCourses,
    },

    {
      id: "networks-smart-systems",
      name: "هندسة الشبكات والأنظمة الذكية",
      englishName: "Networks & Smart Systems Engineering",
      batchGroup:
        "https://chat.whatsapp.com/JEdQaVGFtVf6Y1A78NitsP?s=cl&p=i&mlu=4",
      courses: withoutChemistryCourses,
    },

    {
      id: "planning-city-technology",
      name: "هندسة التخطيط وتكنولوجيا المدن",
      englishName: "Planning & City Technology Engineering",
      batchGroup:
        "https://chat.whatsapp.com/L2XWIcG4A9sKpQmc3C4uRP?s=cl&p=i&mlu=4",
      courses: [
        "physics-1",
        "calculus-1",
        "computer-programming",
        "design-principles-1",
      ],
    },

    {
      id: "architecture",
      name: "الهندسة المعمارية",
      englishName: "Architecture",
      batchGroup:
        "https://chat.whatsapp.com/K6t0mU5BUYb7a5R0NPYFww?s=cl&p=i&mlu=4",
      courses: [
        "architectural-drawing-1",
        "design-principles-1",
        "freehand-drawing-1",
        "introduction-to-architecture",
        "calculus-1",
        "physics-1",
      ],
    },
  ],

  courseGroups,
};

export default engineeringData;