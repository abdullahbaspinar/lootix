import {ImageSourcePropType} from 'react-native';

/* ---------------- Rozet ---------------- */
export type Badge = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  category: string;
  description: string; // GÖREV İÇERİĞİ
  goal: number;
  progress: number;
  unlocked: boolean;
};

// Toplam rozet hedefi (sayaç "X/28" gösterir)
export const TOTAL_BADGES = 28;

export const BADGES: Badge[] = [
  {id: 'gozbagi', name: 'Gözbağı Çözüldü', image: require('../assets/badges/gozbagi.png'), category: 'Analiz', description: 'İlk kez harcama analizi ekranını görüntüle.', goal: 1, progress: 1, unlocked: true},
  {id: 'gerceklesme', name: 'Gerçekle Yüzleşme', image: require('../assets/badges/gerceklesme.png'), category: 'Analiz', description: 'Aylık harcamalarını ilk kez baştan sona incele.', goal: 1, progress: 1, unlocked: true},
  {id: 'ilktaahhut', name: 'İlk Taahhüt', image: require('../assets/badges/ilktaahhut.png'), category: 'Hedef', description: 'İlk tasarruf hedefini oluştur.', goal: 1, progress: 1, unlocked: true},
  {id: 'hedefbelir', name: 'Hedef Belirleyici', image: require('../assets/badges/hedefbelir.png'), category: 'Hedef', description: '3 farklı tasarruf hedefi belirle.', goal: 3, progress: 3, unlocked: true},
  {id: 'analitik', name: 'Analitik Zihin', image: require('../assets/badges/analitik.png'), category: 'Analiz', description: 'Harcama raporunu 7 gün üst üste incele.', goal: 7, progress: 7, unlocked: true},
  {id: 'celikirade', name: 'Çelik İrade', image: require('../assets/badges/celikirade.png'), category: 'Disiplin', description: 'Bir hafta boyunca plan dışı harcama yapma.', goal: 7, progress: 7, unlocked: true},
  {id: 'sarsilmaz', name: 'Sarsılmaz', image: require('../assets/badges/sarsilmaz.png'), category: 'Disiplin', description: '30 gün boyunca bütçe limitini aşma.', goal: 30, progress: 30, unlocked: true},
  {id: 'sabirtasi', name: 'Sabır Taşı', image: require('../assets/badges/sabirtasi.png'), category: 'Disiplin', description: 'Bir satın almayı en az 24 saat ertele.', goal: 1, progress: 1, unlocked: true},
  {id: 'zenustasi', name: 'Zen Ustası', image: require('../assets/badges/zenustasi.png'), category: 'Disiplin', description: 'Bir ay boyunca dürtüsel alışveriş yapma.', goal: 30, progress: 30, unlocked: true},

  {id: 'kirmizicizgi', name: 'Kırmızı Çizgi', image: require('../assets/badges/kirmizicizgi.png'), category: 'Disiplin', description: 'Bir harcama limiti belirle ve o ay limiti aşma.', goal: 1, progress: 0, unlocked: false},
  {id: 'bilincli', name: 'Bilinçli Tüketici', image: require('../assets/badges/bilincli.png'), category: 'Analiz', description: '10 alışverişte fiyat karşılaştırması yap.', goal: 10, progress: 4, unlocked: false},
  {id: 'butcededek', name: 'Bütçe Dedektifi', image: require('../assets/badges/butcededek.png'), category: 'Analiz', description: 'Unuttuğun 3 abonelik/gizli harcamayı tespit et.', goal: 3, progress: 1, unlocked: false},
  {id: 'trendkirici', name: 'Trend Kırıcı', image: require('../assets/badges/trendkirici.png'), category: 'Analiz', description: 'Harcamanı 1 ay boyunca düşüş trendinde tut.', goal: 1, progress: 0, unlocked: false},
  {id: 'iptalgucu', name: 'İptal Gücü', image: require('../assets/badges/iptalgucu.png'), category: 'Disiplin', description: 'Kullanmadığın bir aboneliği iptal et.', goal: 1, progress: 0, unlocked: false},
  {id: 'dijitaldenge', name: 'Dijital Denge', image: require('../assets/badges/dijitaldenge.png'), category: 'Disiplin', description: 'Dijital harcamalarını bir ay dengede tut.', goal: 1, progress: 0, unlocked: false},
  {id: 'yariyol', name: 'Yarı Yol', image: require('../assets/badges/yariyol.png'), category: 'Hedef', description: 'Bir hedefin %50\u2019sine ulaş.', goal: 50, progress: 20, unlocked: false},
  {id: 'kumbarasesi', name: 'Kumbaranın Sesi', image: require('../assets/badges/kumbarasesi.png'), category: 'Tasarruf', description: 'İlk birikimini kumbaraya ekle.', goal: 1, progress: 0, unlocked: false},
  {id: 'ganimet', name: 'Gerçek Ganimet', image: require('../assets/badges/ganimet.png'), category: 'Tasarruf', description: 'Bir tasarruf hedefini tamamen tamamla.', goal: 1, progress: 0, unlocked: false},
  {id: 'istikrarli', name: 'İstikrarlı Yatırımcı', image: require('../assets/badges/istikrarli.png'), category: 'Tasarruf', description: '3 ay üst üste düzenli birikim yap.', goal: 3, progress: 1, unlocked: false},
  {id: 'erdemli', name: 'Erdemli Oyuncu', image: require('../assets/badges/erdemli.png'), category: 'Topluluk', description: 'Topluluk kurallarına 30 gün uy.', goal: 30, progress: 12, unlocked: false},
  {id: 'cesuradim', name: 'Cesur Adım', image: require('../assets/badges/cesuradim.png'), category: 'Hedef', description: 'İlk büyük tasarruf adımını at.', goal: 1, progress: 0, unlocked: false},
  {id: 'ilhamkaynagi', name: 'İlham Kaynağı', image: require('../assets/badges/ilhamkaynagi.png'), category: 'Topluluk', description: 'Bir arkadaşına başarınla ilham ver.', goal: 1, progress: 0, unlocked: false},
  {id: 'zirveisigi', name: 'Zirvenin Işığı', image: require('../assets/badges/zirveisigi.png'), category: 'Topluluk', description: 'Liderlik tablosunda ilk 3\u2019e gir.', goal: 1, progress: 0, unlocked: false},
  {id: 'zirvekoruyu', name: 'Zirve Koruyucusu', image: require('../assets/badges/zirvekoruyu.png'), category: 'Topluluk', description: 'Liderliğini 1 hafta boyunca koru.', goal: 7, progress: 0, unlocked: false},
  {id: 'yolarkadasi', name: 'Yol Arkadaşı', image: require('../assets/badges/yolarkadasi.png'), category: 'Topluluk', description: 'Davet kodunla bir arkadaşını uygulamaya davet et.', goal: 1, progress: 0, unlocked: false},
];

/* ---------------- Liderlik ---------------- */
export type LeaderboardUser = {
  id: string;
  name: string;
  points: number;
  rank: number;
  initials: string;
  trend?: 'up' | 'down'; // puan yukari mi asagi mi (ok rengi/yonu)
  avatar?: ImageSourcePropType; // ozel foto; verilmezse varsayilan profil kullanilir
  isCurrentUser?: boolean;
};

export const LEADERBOARD: LeaderboardUser[] = [
  {id: '1', name: 'Rumuz1', points: 4800, rank: 1, initials: 'R1', trend: 'up'},
  {id: '2', name: 'Rumuz8', points: 4600, rank: 2, initials: 'R8', trend: 'up'},
  {id: '3', name: 'Rumuz3', points: 4300, rank: 3, initials: 'R3', trend: 'down'},
  {id: '4', name: 'Rumuz4', points: 3900, rank: 4, initials: 'R4', trend: 'down'},
  {id: '5', name: 'Rumuz5', points: 3700, rank: 5, initials: 'R5', trend: 'down'},
  {id: '6', name: 'Rumuz6', points: 3500, rank: 6, initials: 'R6', trend: 'up'},
  {id: '7', name: 'Rumuz7', points: 3400, rank: 7, initials: 'R7', trend: 'up'},
  {id: '8', name: 'Rumuz9', points: 3300, rank: 8, initials: 'R9', trend: 'down'},
  {id: '9', name: 'Rumuz10', points: 3250, rank: 9, initials: 'RX', trend: 'up'},
  {id: '10', name: 'Rumuz11', points: 3220, rank: 10, initials: 'RA', trend: 'down'},
  {id: '11', name: 'Rumuz12', points: 3210, rank: 11, initials: 'RB', trend: 'up'},
  {id: '12', name: 'KullaniciRumuzu', points: 3200, rank: 12, initials: 'KR', trend: 'up', isCurrentUser: true},
  {id: '13', name: 'Rumuz13', points: 3100, rank: 13, initials: 'RC', trend: 'down'},
  {id: '14', name: 'Rumuz14', points: 3050, rank: 14, initials: 'RD', trend: 'up'},
  {id: '15', name: 'Rumuz15', points: 2980, rank: 15, initials: 'RE', trend: 'down'},
];
