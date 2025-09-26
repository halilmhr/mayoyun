import type { Question, Grade } from '../types';

// 3. Sınıf Sayıları Okuma ve Yazma soru havuzu
const grade3NumberReadingQuestions: Question[] = [
  {
    question: "145 sayısını yazıyla nasıl yazarız?",
    options: ["Yüz kırk beş", "Bin kırk beş", "Yüz elli beş", "Doksan beş"],
    correctAnswer: "Yüz kırk beş"
  },
  {
    question: "İki yüz otuz altı sayısını rakamlarla nasıl yazarız?",
    options: ["236", "263", "326", "632"],
    correctAnswer: "236"
  },
  {
    question: "789 sayısının okunuşu nedir?",
    options: ["Yedi sekiz dokuz", "Yedi yüz seksen dokuz", "Sekiz yüz doksan", "Dokuz yüz seksen"],
    correctAnswer: "Yedi yüz seksen dokuz"
  },
  {
    question: "Beş yüz on iki sayısı rakamlarla nasıl yazılır?",
    options: ["512", "502", "521", "552"],
    correctAnswer: "512"
  },
  {
    question: "354 sayısında hangi rakam yüzler basamağındadır?",
    options: ["3", "5", "4", "35"],
    correctAnswer: "3"
  },
  {
    question: "Dokuz yüz doksan dokuz sayısının rakamsal yazılışı nedir?",
    options: ["999", "909", "990", "99"],
    correctAnswer: "999"
  },
  {
    question: "173 sayısını yazıyla nasıl okuruz?",
    options: ["Yüz yetmiş üç", "Bin yetmiş üç", "Yedi yüz on üç", "Üç yüz yetmiş bir"],
    correctAnswer: "Yüz yetmiş üç"
  },
  {
    question: "Altı yüz kırk sekiz rakamlarla nasıl yazılır?",
    options: ["648", "684", "468", "846"],
    correctAnswer: "648"
  },
  {
    question: "295 sayısında hangi rakam onlar basamağındadır?",
    options: ["9", "2", "5", "95"],
    correctAnswer: "9"
  },
  {
    question: "Üç yüz yedi sayısının doğru yazılışı hangisidir?",
    options: ["307", "370", "37", "3007"],
    correctAnswer: "307"
  },
  {
    question: "826 sayısının okunuşu nedir?",
    options: ["Sekiz yüz yirmi altı", "Altı yüz yirmi sekiz", "İki yüz altmış sekiz", "Sekiz bin yirmi altı"],
    correctAnswer: "Sekiz yüz yirmi altı"
  },
  {
    question: "İki yüz beş sayısı rakamlarla nasıl yazılır?",
    options: ["205", "250", "25", "2005"],
    correctAnswer: "205"
  },
  {
    question: "467 sayısında hangi rakam birler basamağındadır?",
    options: ["7", "6", "4", "67"],
    correctAnswer: "7"
  },
  {
    question: "Dört yüz elli dokuz sayısının rakamsal yazılışı nedir?",
    options: ["459", "495", "549", "945"],
    correctAnswer: "459"
  },
  {
    question: "183 sayısını yazıyla nasıl okuruz?",
    options: ["Yüz seksen üç", "Bin seksen üç", "Üç yüz seksen bir", "Sekiz yüz on üç"],
    correctAnswer: "Yüz seksen üç"
  },
  {
    question: "Yedi yüz on dört rakamlarla nasıl yazılır?",
    options: ["714", "741", "417", "147"],
    correctAnswer: "714"
  },
  {
    question: "592 sayısında hangi rakam yüzler basamağındadır?",
    options: ["5", "9", "2", "59"],
    correctAnswer: "5"
  },
  {
    question: "Bir yüz altmış iki sayısının doğru yazılışı hangisidir?",
    options: ["162", "126", "216", "621"],
    correctAnswer: "162"
  },
  {
    question: "738 sayısının okunuşu nedir?",
    options: ["Yedi yüz otuz sekiz", "Sekiz yüz otuz yedi", "Üç yüz yetmiş sekiz", "Yedi bin otuz sekiz"],
    correctAnswer: "Yedi yüz otuz sekiz"
  },
  {
    question: "Dokuz yüz on üç sayısı rakamlarla nasıl yazılır?",
    options: ["913", "931", "139", "319"],
    correctAnswer: "913"
  }
];

// Basamak ve Basamak Değeri soruları
const grade3PlaceValueQuestions: Question[] = [
  {
    question: "456 sayısının yüzler basamağındaki rakamın değeri kaçtır?",
    options: ["400", "40", "4", "456"],
    correctAnswer: "400"
  },
  {
    question: "783 sayısının onlar basamağındaki rakamın değeri kaçtır?",
    options: ["80", "8", "800", "783"],
    correctAnswer: "80"
  },
  {
    question: "329 sayısının birler basamağındaki rakamın değeri kaçtır?",
    options: ["9", "90", "900", "29"],
    correctAnswer: "9"
  },
  {
    question: "645 sayısında 6 rakamının değeri kaçtır?",
    options: ["600", "60", "6", "64"],
    correctAnswer: "600"
  },
  {
    question: "271 sayısında 7 rakamının bulunduğu basamak hangisidir?",
    options: ["Onlar", "Birler", "Yüzler", "Binler"],
    correctAnswer: "Onlar"
  },
  {
    question: "598 sayısının birler basamağındaki rakamın değeri kaçtır?",
    options: ["8", "80", "800", "98"],
    correctAnswer: "8"
  },
  {
    question: "134 sayısında 3 rakamının değeri kaçtır?",
    options: ["30", "3", "300", "34"],
    correctAnswer: "30"
  },
  {
    question: "867 sayısının yüzler basamağındaki rakam hangisidir?",
    options: ["8", "6", "7", "86"],
    correctAnswer: "8"
  },
  {
    question: "429 sayısında 4 rakamının bulunduğu basamak hangisidir?",
    options: ["Yüzler", "Onlar", "Birler", "Binler"],
    correctAnswer: "Yüzler"
  },
  {
    question: "753 sayısının onlar basamağındaki rakamın değeri kaçtır?",
    options: ["50", "5", "500", "53"],
    correctAnswer: "50"
  }
];

// Soru havuzları
const questionPools = {
  'reading-writing-numbers-3': grade3NumberReadingQuestions,
  'place-value-3': grade3PlaceValueQuestions,
  // Diğer konular için varsayılan sorular
  'default': [
    {
      question: "2 + 3 işleminin sonucu kaçtır?",
      options: ["5", "6", "4", "7"],
      correctAnswer: "5"
    },
    {
      question: "10 - 4 işleminin sonucu kaçtır?",
      options: ["6", "14", "5", "7"],
      correctAnswer: "6"
    },
    {
      question: "3 × 2 işleminin sonucu kaçtır?",
      options: ["6", "5", "8", "4"],
      correctAnswer: "6"
    },
    {
      question: "8 ÷ 2 işleminin sonucu kaçtır?",
      options: ["4", "6", "2", "10"],
      correctAnswer: "4"
    },
    {
      question: "7 + 8 işleminin sonucu kaçtır?",
      options: ["15", "16", "14", "13"],
      correctAnswer: "15"
    },
    {
      question: "12 - 5 işleminin sonucu kaçtır?",
      options: ["7", "17", "6", "8"],
      correctAnswer: "7"
    },
    {
      question: "4 × 5 işleminin sonucu kaçtır?",
      options: ["20", "9", "25", "15"],
      correctAnswer: "20"
    },
    {
      question: "18 ÷ 3 işleminin sonucu kaçtır?",
      options: ["6", "21", "15", "5"],
      correctAnswer: "6"
    },
    {
      question: "9 + 6 işleminin sonucu kaçtır?",
      options: ["15", "16", "14", "13"],
      correctAnswer: "15"
    },
    {
      question: "20 - 8 işleminin sonucu kaçtır?",
      options: ["12", "28", "11", "13"],
      correctAnswer: "12"
    },
    {
      question: "6 × 3 işleminin sonucu kaçtır?",
      options: ["18", "9", "21", "15"],
      correctAnswer: "18"
    },
    {
      question: "24 ÷ 4 işleminin sonucu kaçtır?",
      options: ["6", "20", "28", "8"],
      correctAnswer: "6"
    },
    {
      question: "11 + 9 işleminin sonucu kaçtır?",
      options: ["20", "19", "21", "18"],
      correctAnswer: "20"
    },
    {
      question: "15 - 7 işleminin sonucu kaçtır?",
      options: ["8", "22", "7", "9"],
      correctAnswer: "8"
    },
    {
      question: "7 × 4 işleminin sonucu kaçtır?",
      options: ["28", "11", "32", "24"],
      correctAnswer: "28"
    }
  ]
};

export const generateRandomQuestions = (topicId: string, count: number = 15): Question[] => {
  const pool = questionPools[topicId as keyof typeof questionPools] || questionPools.default;
  
  // Eğer havuzda yeterli soru yoksa, mevcut soruları tekrarlayarak tamamla
  if (pool.length < count) {
    const repeatedPool = [];
    for (let i = 0; i < count; i++) {
      repeatedPool.push(pool[i % pool.length]);
    }
    return shuffleArray(repeatedPool).slice(0, count);
  }
  
  // Rastgele soru seçimi
  return shuffleArray([...pool]).slice(0, count);
};

// Array'i karıştıran fonksiyon (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}