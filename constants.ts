import type { Topic, Unit } from './types';

export const GRADE_3_UNITS: Unit[] = [
  { 
    id: 'unit-1', 
    name: 'Ünite 1: Sayılar ve İşlemler', 
    emoji: '🔢',
    color: 'bg-red-500',
    topics: [
      { id: 'reading-writing-numbers-3', name: 'Doğal Sayıları Okuma, Yazma ve Ritmik Sayma', emoji: '✍️', color: 'bg-red-400' },
      { id: 'place-value-3', name: 'Basamak ve Basamak Değeri', emoji: '📊', color: 'bg-orange-400' },
      { id: 'rounding-comparing-ordering-3', name: 'Sayıları Yuvarlama, Karşılaştırma ve Sıralama', emoji: '🔄', color: 'bg-amber-400' },
      { id: 'patterns-3', name: 'Ritmik Sayma ve Sayı Örüntüsü', emoji: '📈', color: 'bg-yellow-400' },
      { id: 'odd-even-numbers-3', name: 'Tek ve Çift Doğal Sayılar', emoji: '☯️', color: 'bg-lime-400' },
      { id: 'roman-numerals-3', name: 'Romen Rakamları', emoji: '🏛️', color: 'bg-green-400' },
      { id: 'addition-3', name: 'Eldesiz ve Eldeli Toplama', emoji: '➕', color: 'bg-emerald-400' },
      { id: 'addition-properties-3', name: 'Toplananların Yer Değiştirmesi', emoji: '↔️', color: 'bg-teal-400' },
      { id: 'subtraction-3', name: 'Onluk Bozarak ve Bozmadan Çıkarma', emoji: '➖', color: 'bg-cyan-400' },
      { id: 'mental-subtraction-3', name: 'Zihinden Çıkarma İşlemi', emoji: '🧠', color: 'bg-sky-400' },
    ]
  },
  {
    id: 'unit-2',
    name: 'Ünite 2: Sayılar ve İşlemler - Veri İşleme',
    emoji: '📈',
    color: 'bg-cyan-500',
    topics: [
        { id: 'addition-estimation-3', name: 'Toplama İşleminde Tahminî Sonuç', emoji: '🤔', color: 'bg-cyan-400' },
        { id: 'mental-addition-3', name: 'Zihinden Toplama İşlemi', emoji: '💡', color: 'bg-teal-400' },
        { id: 'find-addend-3', name: 'Verilmeyen Toplananı Bulma', emoji: '❓', color: 'bg-emerald-400' },
        { id: 'addition-problems-3', name: 'Toplama İşlemi Problemleri', emoji: '➕', color: 'bg-green-400' },
        { id: 'subtraction-estimation-3', name: 'Çıkarma İşleminde Tahminî Sonuç', emoji: '🧐', color: 'bg-lime-400' },
        { id: 'addition-subtraction-problems-3', name: 'Toplama ve Çıkarma İşlemi Problemleri', emoji: '➖', color: 'bg-yellow-400' },
        { id: 'data-graphics-3', name: 'Grafik Dönüştürme ve Yorumlama', emoji: '📊', color: 'bg-amber-400' },
        { id: 'data-tables-3', name: 'Tablo Yorumlama', emoji: '📋', color: 'bg-orange-400' },
    ]
  },
  {
    id: 'unit-3',
    name: 'Ünite 3: Sayılar ve İşlemler (Çarpma/Bölme)',
    emoji: '➗',
    color: 'bg-blue-500',
    topics: [
        { id: 'multiplication-meaning-3', name: 'Çarpma İşleminin Kat Anlamı, Çarpım Tablosu', emoji: '✖️', color: 'bg-blue-400' },
        { id: 'multiplication-methods-3', name: 'Eldesiz ve Eldeli Çarpma İşlemi', emoji: '🧮', color: 'bg-indigo-400' },
        { id: 'short-multiplication-3', name: 'Kısa Yoldan Çarpma İşlemi', emoji: '⚡', color: 'bg-violet-400' },
        { id: 'multiplication-problems-3', name: 'Çarpma İşlemi Problemleri', emoji: '❓', color: 'bg-purple-400' },
        { id: 'division-3', name: 'Bölme İşlemi', emoji: '➗', color: 'bg-fuchsia-400' },
        { id: 'short-division-3', name: 'Kısa Yoldan Bölme İşlemi', emoji: '💡', color: 'bg-pink-400' },
        { id: 'division-problems-3', name: 'Bölme İşlemi Problemleri', emoji: '🧐', color: 'bg-rose-400' },
    ]
  },
  {
    id: 'unit-4',
    name: 'Ünite 4: Sayılar ve İşlemler - Ölçme',
    emoji: '📏',
    color: 'bg-purple-500',
    topics: [
        { id: 'fractions-intro-3', name: 'Kesirler - Bütün, Yarım, Çeyrek ve Birim Kesir', emoji: '🍕', color: 'bg-purple-400' },
        { id: 'fractions-parts-3', name: 'Kesirler - Pay ve Payda İlişkisi', emoji: '🍰', color: 'bg-violet-400' },
        { id: 'time-measurement-3', name: 'Zaman Ölçme - Saatleri Okuma', emoji: '⏰', color: 'bg-indigo-400' },
        { id: 'time-problems-3', name: 'Zaman Ölçme Problemleri', emoji: '⏳', color: 'bg-blue-400' },
        { id: 'money-3', name: 'Paralarımız - Lira ve Kuruş İlişkisi', emoji: '💰', color: 'bg-sky-400' },
        { id: 'money-problems-3', name: 'Para Problemleri', emoji: '🪙', color: 'bg-cyan-400' },
        { id: 'mass-measurement-3', name: 'Tartma - Kilogram ve Gram', emoji: '⚖️', color: 'bg-teal-400' },
        { id: 'mass-problems-3', name: 'Tartma Problemleri', emoji: '🏋️', color: 'bg-emerald-400' },
    ]
  },
  {
    id: 'unit-5',
    name: 'Ünite 5: Geometri',
    emoji: '📐',
    color: 'bg-green-500',
    topics: [
        { id: 'geometric-shapes-3', name: 'Geometrik Cisimler ve Şekiller - Yüz, Köşe, Ayrıt', emoji: '🧊', color: 'bg-green-400' },
        { id: 'polygons-3', name: 'Şekilleri Kenar Sayılarına Göre İsimlendirme', emoji: '🛑', color: 'bg-lime-400' },
        { id: 'tessellations-3', name: 'Geometrik Örüntüler - Kaplama Yapma', emoji: '💠', color: 'bg-yellow-400' },
        { id: 'geometric-terms-1-3', name: 'Geometride Temel Kavramlar - Nokta, Doğru, Işın ve Açı', emoji: '✏️', color: 'bg-amber-400' },
        { id: 'geometric-terms-2-3', name: 'Geometride Temel Kavramlar - Doğru Parçası', emoji: '📏', color: 'bg-orange-400' },
        { id: 'symmetry-3', name: 'Simetri Doğrusu', emoji: '🦋', color: 'bg-red-400' },
    ]
  },
  {
    id: 'unit-6',
    name: 'Ünite 6: Ölçme',
    emoji: '🌍',
    color: 'bg-yellow-500',
    topics: [
        { id: 'length-measurement-3', name: 'Uzunluk Ölçme - Metre, Santimetre', emoji: '📏', color: 'bg-yellow-400' },
        { id: 'length-problems-3', name: 'Uzunluk Ölçme Problemleri', emoji: '📐', color: 'bg-amber-400' },
        { id: 'perimeter-3', name: 'Çevre Ölçme', emoji: '⭕', color: 'bg-orange-400' },
        { id: 'perimeter-problems-3', name: 'Çevre Ölçme Problemleri', emoji: '❓', color: 'bg-red-400' },
        { id: 'area-measurement-3', name: 'Alan Ölçme', emoji: '🖼️', color: 'bg-rose-400' },
        { id: 'liquid-measurement-3', name: 'Sıvı Ölçme - Litre', emoji: '💧', color: 'bg-pink-400' },
    ]
  },
];


export const GRADE_4_TOPICS: Topic[] = [
  { id: 'natural-numbers-4', name: 'Doğal Sayılar', emoji: '🔢', color: 'bg-blue-400' },
  { id: 'addition-subtraction-4', name: 'Toplama ve Çıkarma', emoji: '➕', color: 'bg-green-400' },
  { id: 'multiplication-division-4', name: 'Çarpma ve Bölme', emoji: '✖️', color: 'bg-yellow-400' },
  { id: 'fractions-4', name: 'Kesirler', emoji: '🍕', color: 'bg-red-400' },
  { id: 'measurement-4', name: 'Ölçme (Uzunluk, Zaman)', emoji: '📏', color: 'bg-purple-400' },
  { id: 'geometry-4', name: 'Geometri (Açılar, Şekiller)', emoji: '📐', color: 'bg-pink-400' },
];

export const GRADE_5_TOPICS: Topic[] = [
  { id: 'natural-numbers-5', name: 'Milyonlu Sayılar', emoji: '🏛️', color: 'bg-sky-400' },
  { id: 'advanced-operations-5', name: 'Dört İşlem Problemleri', emoji: '🧠', color: 'bg-emerald-400' },
  { id: 'fractions-5', name: 'Kesirlerle İşlemler', emoji: '🍰', color: 'bg-amber-400' },
  { id: 'decimals-5', name: 'Ondalık Gösterim', emoji: '📊', color: 'bg-rose-400' },
  { id: 'percentages-5', name: 'Yüzdeler', emoji: '💯', color: 'bg-indigo-400' },
  { id: 'area-measurement-5', name: 'Alan Ölçme', emoji: '🖼️', color: 'bg-fuchsia-400' },
];