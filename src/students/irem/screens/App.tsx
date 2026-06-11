import React, { useState } from 'react';
import { 
  StatusBar, 
  StyleSheet, 
  useColorScheme, 
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { ProfileScreen } from './ProfileScreen';
import { EditProfileScreen } from './EditProfileScreen';
import { AddFriendScreen } from './AddFriendScreen';
import { SettingsScreen } from './SettingsScreen';
import { AboutScreen } from './AboutScreen';
import { HelpSupportScreen } from './HelpSupportScreen';

const FREQUENT_GAMES = [
  { id: 'f1', name: 'PUBG', image: require('../assets/pubg.png') },
  { id: 'f2', name: 'Valorant', image: require('../assets/valorant.png') },
  { id: 'f3', name: 'CS-GO', image: require('../assets/csgo.png') },
];

const ALL_GAMES = [
  { id: 'a1', name: 'Brawl Stars', image: require('../assets/brawlstars.png') },
  { id: 'a2', name: 'Clash Royale', image: require('../assets/crashroyale.png') },
  { id: 'a3', name: 'Roblox', image: require('../assets/roblox.png') },
  { id: 'a4', name: 'H1Z1', image: require('../assets/h1z1.png') },
  { id: 'a5', name: 'League of Legends', image: require('../assets/lol.png') },
  { id: 'a6', name: 'PUBG Mobile', image: require('../assets/pubg.png') },
  { id: 'a7', name: 'Valorant', image: require('../assets/valorant.png') },
  { id: 'a8', name: 'CS-GO 2', image: require('../assets/csgo.png') },
];

const CATEGORIES = [
  { id: 'cat1', name: 'Lootbox', image: require('../assets/lootbox.png') },
  { id: 'cat2', name: 'Skin', image: require('../assets/skin.png') },
  { id: 'cat3', name: 'Battle Pass', image: require('../assets/battlepass.png') },
  { id: 'cat4', name: 'Diğer', image: require('../assets/diger.png') },
];

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedGameName, setSelectedGameName] = useState('');
  const [selectedGameImage, setSelectedGameImage] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('Lootbox');
  const [totalExpense, setTotalExpense] = useState(3650);
  const [amount, setAmount] = useState('');

  const handleGameSelect = (name: string, image: any) => {
    setSelectedGameName(name);
    setSelectedGameImage(image);
    setCurrentScreen('select_category');
  };

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleCategoryConfirm = () => {
    setAmount('');
    setCurrentScreen('add_amount');
  };

  const handleConfirmExpense = (confirmedAmount: string) => {
    const girilenTutar = parseFloat(confirmedAmount);
    if (!isNaN(girilenTutar)) {
      setTotalExpense((prev) => prev + girilenTutar);
    }
    setCurrentScreen('home');
  };

  const handleKeyboardPress = (value: string) => {
    if (amount.length >= 5) return;
    setAmount((prev) => prev + value);
  };

  const handleKeyboardDelete = () => {
    setAmount((prev) => prev.slice(0, -1));
  };

  const renderOtherScreens = (title: string) => {
    return (
      <View style={[styles.container, { paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom }]}>
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={[styles.content, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' }}>{title}</Text>
        </View>
        {renderNavbar()}
      </View>
    );
  };

  const renderNavbar = () => {
    return (
      <View style={[styles.navbar, { paddingBottom: safeAreaInsets.bottom > 0 ? safeAreaInsets.bottom : 15 }]}>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('hedefler')}>
          <Image source={require('../assets/hedefler.png')} style={[styles.navIcon, currentScreen === 'hedefler' ? styles.activeTintColor : styles.passiveNavIcon]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('analiz')}>
          <Image source={require('../assets/analiz.png')} style={[styles.navIcon, currentScreen === 'analiz' ? styles.activeTintColor : styles.passiveNavIcon]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('home')}>
          <Image source={require('../assets/home1.png')} style={[styles.navIcon, currentScreen === 'home' ? styles.activeTintColor : styles.passiveNavIcon]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('ilerlemeler')}>
          <Image source={require('../assets/ilerlemeler.png')} style={[styles.navIcon, currentScreen === 'ilerlemeler' ? styles.activeTintColor : styles.passiveNavIcon]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('profile')}>
          <Image source={require('../assets/ayarlar.png')} style={[styles.navIcon, currentScreen === 'profile' ? styles.activeTintColor : styles.passiveNavIcon]} />
        </TouchableOpacity>
      </View>
    );
  };

  if (
    currentScreen === 'profile' || 
    currentScreen === 'EditProfile' || 
    currentScreen === 'AddFriend' || 
    currentScreen === 'HelpSupport' || 
    currentScreen === 'Settings' || 
    currentScreen === 'About'
  ) {
    const handleBackTransition = () => {
      if (currentScreen === 'profile') {
        setCurrentScreen('home');
      } else {
        setCurrentScreen('profile');
      }
    };

    if (currentScreen === 'EditProfile') return <EditProfileScreen navigation={{ goBack: handleBackTransition } as any} />;
    if (currentScreen === 'AddFriend') return <AddFriendScreen navigation={{ goBack: handleBackTransition } as any} />;
    if (currentScreen === 'Settings') return <SettingsScreen navigation={{ goBack: handleBackTransition } as any} />;
    if (currentScreen === 'About') return <AboutScreen navigation={{ goBack: handleBackTransition } as any} />;
    if (currentScreen === 'HelpSupport') return <HelpSupportScreen navigation={{ goBack: handleBackTransition } as any} />;

    return (
      <View style={styles.container}>
        <ProfileScreen 
          navigation={{
            navigate: (screen: string) => setCurrentScreen(screen as any),
            goBack: handleBackTransition,
            reset: () => setCurrentScreen('home')
          } as any} 
          route={{} as any} 
        />
        {renderNavbar()}
      </View>
    );
  }

  if (currentScreen === 'add_expense') {
    return (
      <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.mainWhiteCard}>
            <View style={styles.titleRow}>
              <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('home')}>
                <Text style={styles.backArrow}>〈</Text>
              </TouchableOpacity>
              <Text style={styles.mainTitle}>Harcama Ekle</Text>
            </View>
            <Text style={styles.sectionTitle}>En Sık Oynanan Oyunlar</Text>
            <View style={styles.gameGrid}>
              {FREQUENT_GAMES.map((game) => (
                <TouchableOpacity key={game.id} style={styles.gameButton} onPress={() => handleGameSelect(game.name, game.image)}>
                  <View style={styles.imageContainer}><Image source={game.image} style={styles.gameImage} /></View>
                  <Text style={styles.gameName} numberOfLines={1}>{game.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.sectionTitle}>Tüm Oyunlar</Text>
            <View style={styles.gameGrid}>
              {ALL_GAMES.map((game) => (
                <TouchableOpacity key={game.id} style={styles.gameButton} onPress={() => handleGameSelect(game.name, game.image)}>
                  <View style={styles.imageContainer}><Image source={game.image} style={styles.gameImage} /></View>
                  <Text style={styles.gameName} numberOfLines={1}>{game.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
        {renderNavbar()}
      </View>
    );
  }

  if (currentScreen === 'select_category') {
    return (
      <View style={[styles.container, { paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButtonAbsolute} onPress={() => setCurrentScreen('add_expense')}>
            <Text style={styles.backArrow}>〈</Text>
          </TouchableOpacity>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <View style={styles.categoryMainWhiteCard}>
            <View>
              <Text style={styles.categoryMainTitle}>Kategori Seç</Text>
              <Text style={styles.categorySubTitle}>Harcama Türü</Text>
              <View style={styles.categoryList}>
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <TouchableOpacity key={cat.id} style={[styles.categoryRow, isSelected && styles.selectedRow]} onPress={() => handleSelectCategory(cat.name)}>
                      <View style={styles.categoryInfo}>
                        <Image source={cat.image} style={styles.categoryIcon} />
                        <Text style={styles.categoryName}>{cat.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleCategoryConfirm}>
              <Text style={styles.saveButtonText}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  if (currentScreen === 'add_amount') {
    return (
      <View style={[styles.container, { paddingTop: safeAreaInsets.top, paddingBottom: safeAreaInsets.bottom }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButtonAbsolute} onPress={() => setCurrentScreen('select_category')}>
            <Text style={styles.backArrow}>〈</Text>
          </TouchableOpacity>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <View style={styles.amountMainCard}>
            <View style={styles.gameInfoRow}>
              <Image source={selectedGameImage} style={styles.selectedGameImage} />
              <Text style={styles.gameTitle}>{selectedGameName} - {selectedCategory} Harcaması</Text>
            </View>
            <View style={styles.amountDisplay}>
              <Text style={styles.amountText}>{amount === '' ? '0' : amount}<Text style={styles.currency}> ₺</Text></Text>
            </View>
            <View style={styles.keyboard}>
              {[["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]].map((row, rowIndex) => (
                <View key={rowIndex} style={styles.keyboardRow}>
                  {row.map((num) => (
                    <TouchableOpacity key={num} style={styles.keyButton} onPress={() => handleKeyboardPress(num)}>
                      <Text style={styles.keyText}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
              <View style={styles.keyboardRow}>
                <View style={styles.emptyKey} />
                <TouchableOpacity style={styles.keyButton} onPress={() => handleKeyboardPress('0')}>
                  <Text style={styles.keyText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.keyButton, styles.deleteButton]} onPress={handleKeyboardDelete}>
                  <Text style={styles.deleteKeyText}>⌫</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={[styles.confirmButton, amount === '' && styles.disabledButton]} onPress={() => amount !== '' && handleConfirmExpense(amount)} disabled={amount === ''}>
              <Text style={styles.confirmButtonText}>Harcamayı Onayla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  if (currentScreen === 'hedefler') return renderOtherScreens('Hedeflerim');
  if (currentScreen === 'analiz') return renderOtherScreens('Analizlerim');
  if (currentScreen === 'ilerlemeler') return renderOtherScreens('İlerlemelerim');

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.profile} onPress={() => setCurrentScreen('profile')}>
          <Image source={require('../assets/profil.png')} style={{ width: '100%', height: '100%', borderRadius: 27.5 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>Hoş Geldin, İrem 👋</Text>
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Bu Ay Toplam Harcama</Text>
          <Text style={styles.money}>{totalExpense.toLocaleString('tr-TR')}₺</Text>
          <View style={styles.percentBox}>
            <Text style={styles.percentText}>%18</Text>
            <Text style={styles.percentSubText}>Geçen aya göre artış</Text>
          </View>
        </View>

        <View style={styles.graphCard}>
          <View style={styles.graphHeaderRow}>
            <Text style={styles.graphTitle}>Son 7 Günlük Harcama</Text>
            <View style={styles.graphBadge}>
              <Text style={styles.graphBadgeText}>%6</Text>
              <Text style={styles.graphBadgeSubText}>Geçen haftaya göre azalış</Text>
            </View>
          </View>
          <Image source={require('../assets/grafik.png')} style={styles.graphImage} />
        </View>

        <View style={styles.recentPurchaseCard}>
          <View style={styles.purchaseLeft}>
            <Text style={styles.purchaseCardTitle}>Son Satın Alım</Text>
            <Text style={styles.purchaseItem}>PUBG Mobile-Lootbox</Text>
            <Text style={styles.purchasePrice}>50 ₺</Text>
          </View>
          <View style={styles.purchaseRight}>
            <Image source={require('../assets/pubg.png')} style={styles.purchaseImage} />
            <Text style={styles.purchaseTime}>2 saat önce</Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.warningCard}>
            <Text style={styles.warningIcon}>!</Text>
            <Text style={styles.warningText}>Bu hafta yaptığın lootbox harcemalarıyla, hedefinin %18'ini kaybettin.</Text>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={() => setCurrentScreen('add_expense')}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderNavbar()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E5E5E5' 
  },
  header: { 
    height: 110, 
    backgroundColor: '#A6A6A6', 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25, 
    position: 'relative', 
    justifyContent: 'center' 
  },
  logo: { 
    width: 80, 
    height: 80, 
    resizeMode: 'contain', 
    marginTop: 20, 
    position: 'absolute' 
  },
  profile: { 
    width: 55, 
    height: 55, 
    borderRadius: 27.5, 
    marginTop: 25, 
    position: 'absolute', 
    right: 25 
  },
  backButtonAbsolute: { 
    position: 'absolute', 
    left: 20, 
    marginTop: 20, 
    padding: 10, 
    zIndex: 10 
  },
  content: {
    padding: 16,
    paddingTop: 15,
    flex: 1,
    justifyContent: 'space-between', 
  },
  scrollContent: {
    paddingBottom: 130,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,      
    marginBottom: 105,   
  },
  warningCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
    height: 85,          
  },
  warningIcon: {
    color: '#BF0909',
    fontSize: 34,
    fontWeight: 'bold',
    marginRight: 10,
  },
  warningText: {
    fontSize: 10,
    color: '#1A1A1A',
    flex: 1,
    lineHeight: 13,
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#BF0909',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { 
      width: 0, 
      height: 4 
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  plus: {
    color: 'white',
    fontSize: 42,
    fontWeight: '600',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    zIndex: 99,         
  },
  navButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  activeTintColor: {
    tintColor: '#BF0909',
  },
  passiveNavIcon: {
    opacity: 0.35,
  },
  welcome: { 
    fontSize: 20, 
    fontWeight: '700', 
    marginBottom: 12, 
    color: '#1A1A1A' 
  },
  mainCard: { 
    backgroundColor: '#BCBCBC', 
    borderRadius: 25, 
    padding: 16, 
    height: 150, 
    justifyContent: 'space-between' 
  },
  cardTitle: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  money: { 
    color: 'white', 
    fontSize: 40, 
    fontWeight: 'bold' 
  },
  percentBox: { 
    backgroundColor: '#A8A8A8', 
    alignSelf: 'flex-end', 
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    borderRadius: 12, 
    alignItems: 'center', 
    flexDirection: 'row' 
  },
  percentText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 12, 
    marginRight: 5 
  },
  percentSubText: { 
    color: 'white', 
    fontSize: 8 
  },
  graphCard: { 
    backgroundColor: '#F5F5F5', 
    borderRadius: 25, 
    padding: 15, 
    marginTop: 14, 
    height: 180, 
    overflow: 'hidden' 
  },
  graphHeaderRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 8 
  },
  graphTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#1A1A1A' 
  },
  graphBadge: { 
    backgroundColor: '#A8A8A8', 
    borderRadius: 12, 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    alignItems: 'center', 
    flexDirection: 'row' 
  },
  graphBadgeText: { 
    color: '#FFFFFF', 
    fontWeight: '700', 
    fontSize: 12, 
    marginRight: 4 
  },
  graphBadgeSubText: { 
    color: '#FFFFFF', 
    fontSize: 8 
  },
  graphImage: { 
    width: '100%', 
    height: 300, 
    resizeMode: 'contain', 
    marginTop: -90 
  },
  recentPurchaseCard: { 
    backgroundColor: '#F5F5F5', 
    borderRadius: 25, 
    padding: 15, 
    marginTop: 14, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  purchaseLeft: { 
    flex: 1 
  },
  purchaseCardTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#1A1A1A', 
    marginBottom: 2 
  },
  purchaseItem: { 
    fontSize: 13, 
    color: '#555' 
  },
  purchasePrice: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#1A1A1A', 
    marginTop: 1 
  },
  purchaseRight: { 
    alignItems: 'center' 
  },
  purchaseImage: { 
    width: 38, 
    height: 38, 
    borderRadius: 19, 
    marginBottom: 2 
  },
  purchaseTime: { 
    fontSize: 10, 
    color: '#888' 
  },
  mainWhiteCard: { 
    backgroundColor: '#EAEAEA', 
    borderRadius: 30, 
    padding: 20, 
    paddingBottom: 120 
  },
  titleRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 25 
  },
  backButton: { 
    marginRight: 15 
  },
  backArrow: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#000000' 
  },
  mainTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000000' 
  },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#000000', 
    marginBottom: 15, 
    marginTop: 5 
  },
  gameGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    marginBottom: 10 
  },
  gameButton: { 
    width: '47%', 
    marginBottom: 20, 
    alignItems: 'center' 
  },
  imageContainer: { 
    width: '100%', 
    aspectRatio: 1, 
    borderRadius: 22, 
    overflow: 'hidden', 
    marginBottom: 8 
  },
  gameImage: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover' 
  },
  gameName: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#1A1A1A', 
    textAlign: 'center', 
    marginTop: -13, 
    paddingHorizontal: 4 
  },
  categoryMainWhiteCard: { 
    backgroundColor: '#F5F5F5', 
    borderRadius: 30, 
    padding: 20, 
    height: 520, 
    justifyContent: 'space-between' 
  },
  categoryMainTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#000000', 
    textAlign: 'center', 
    marginBottom: 5 
  },
  categorySubTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#1A1A1A', 
    marginBottom: 15 
  },
  categoryList: { 
    marginBottom: 10 
  },
  categoryRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 12, 
    padding: 12, 
    borderRadius: 20, 
    backgroundColor: 'transparent' 
  },
  selectedRow: { 
    backgroundColor: 'rgba(191, 9, 9, 0.08)' 
  },
  categoryInfo: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  categoryIcon: { 
    width: 45, 
    height: 45, 
    resizeMode: 'contain', 
    marginRight: 15 
  },
  categoryName: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#1A1A1A' 
  },
  saveButton: { 
    backgroundColor: '#BF0909', 
    borderRadius: 20, 
    paddingVertical: 14, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 40, 
    elevation: 3 
  },
  saveButtonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  amountMainCard: { 
    backgroundColor: '#EAEAEA', 
    borderRadius: 30, 
    padding: 20, 
    height: 540, 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  gameInfoRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F5F5F5', 
    padding: 12, 
    borderRadius: 20, 
    marginBottom: 15 
  },
  selectedGameImage: { 
    width: 45, 
    height: 45, 
    borderRadius: 12, 
    marginRight: 15 
  },
  gameTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#1A1A1A', 
    flex: 1 
  },
  amountDisplay: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 20, 
    paddingVertical: 15, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 1, 
    borderColor: '#D0D0D0', 
    marginBottom: 15 
  },
  amountText: { 
    fontSize: 38, 
    fontWeight: 'bold', 
    color: '#BF0909' 
  },
  currency: { 
    fontSize: 24, 
    color: '#1A1A1A' 
  },
  keyboard: { 
    justifyContent: 'center', 
    marginBottom: 10 
  },
  keyboardRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10 
  },
  keyButton: { 
    backgroundColor: '#FFFFFF', 
    width: '30%', 
    aspectRatio: 1.4, 
    borderRadius: 18, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 1 
  },
  emptyKey: { 
    width: '30%' 
  },
  keyText: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#1A1A1A' 
  },
  deleteButton: { 
    backgroundColor: '#DCDCDC' 
  },
  deleteKeyText: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#BF0909' 
  },
  confirmButton: { 
    backgroundColor: '#BF0909', 
    borderRadius: 20, 
    paddingVertical: 16, 
    alignItems: 'center', 
    justifyContent: 'center', 
    elevation: 3 
  },
  disabledButton: { 
    backgroundColor: '#A8A8A8' 
  },
  confirmButtonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: '700' 
  },
});

export default App;