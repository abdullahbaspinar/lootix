# mustafa — İlerlemeler & Liderlik Tablosu

Bu klasör, ekip projesindeki `src/students/mustafa/` kısmıdır.

## İçerik
- `constants/badges.ts` — 25 rozet (gerçek görsel + görev içeriği) ve liderlik verisi
- `constants/colors.ts` — renk paleti + Pixelify font adları
- `components/BadgeGrid.tsx` — rozet ızgarası (kilitli gri / açık kırmızı)
- `components/BadgeModal.tsx` — rozete tıklayınca görev içeriği + "Görevi Tamamla"
- `components/Podium.tsx`, `components/LeaderboardRow.tsx` — liderlik bileşenleri
- `screens/ProgressScreen.tsx` — İlerlemelerim (navbar'da chart2)
- `screens/LeaderboardScreen.tsx` — Liderlik Tablosu (Progress'ten açılır)
- `assets/badges` (25 PNG), `assets/ui/profil.png`, `assets/fonts` (Pixelify Sans)

## Çalışması için gerekenler
1. **Tam ekip projesi gerekli.** Ekranlar `abdullah` ve `irem` klasörlerine bağımlı:
   - `../../abdullah/navigation/types`, `.../tabNavigation`
   - `../../abdullah/components/LogoPageLayout`, `.../ScreenHeader`
   - `../../abdullah/constants/colors`
   - `../../irem/components/BottomTabBar`
   Yani sadece `mustafa` klasörüyle değil, `src/students/` ağacının tamamıyla çalışır.
2. Ekranlar **isimli export** (`export function ProgressScreen` / `LeaderboardScreen`)
   olduğu için Abdullah'ın `AppNavigator`'ı bunları doğrudan tanır; ekstra ayar gerekmez.

## Pixelify Sans fontu (başlıklar için — tek seferlik)
Başlıklarda `fonts.bold` kullanılıyor. Font bağlı değilse uygulama çökmez, sadece
sistem fontu görünür. Pixelify görünmesi için projenin kökünde:

1. `assets/fonts/PixelifySans-Bold.ttf` ve `-Regular.ttf` dosyalarını şuraya kopyala:
   `android/app/src/main/assets/fonts/`
2. Uygulamayı yeniden derle:
   ```
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   ```
