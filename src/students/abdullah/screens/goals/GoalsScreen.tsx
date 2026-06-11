import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBar} from '../../../irem/components/BottomTabBar';
import {GoalCard} from '../../components/GoalCard';
import {LogoPageLayout} from '../../components/LogoPageLayout';
import {NewGoalModal} from '../../components/NewGoalModal';
import {UpdateGoalProgressModal} from '../../components/UpdateGoalProgressModal';
import {Goal, SAMPLE_GOALS} from '../../constants/goals';
import {colors} from '../../constants/colors';
import {handleTabPress} from '../../navigation/tabNavigation';
import {RootStackParamList} from '../../navigation/types';
import {parsePrice, withCalculatedProgress} from '../../utils/goalHelpers';

type Props = NativeStackScreenProps<RootStackParamList, 'Goals'>;

export function GoalsScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const tabBarOffset = 85 + (insets.bottom > 0 ? insets.bottom : 15);
  const [goals, setGoals] = useState<Goal[]>(
    SAMPLE_GOALS.map(withCalculatedProgress),
  );
  const [newGoalVisible, setNewGoalVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const handleAddGoal = (data: {
    name: string;
    price: string;
    imageUri?: string;
  }) => {
    const price = parsePrice(data.price);
    if (price <= 0) {
      return;
    }

    const newGoal: Goal = withCalculatedProgress({
      id: String(Date.now()),
      name: data.name,
      price,
      savedAmount: 0,
      progress: 0,
      image: data.imageUri
        ? {uri: data.imageUri}
        : require('../../assets/game/pubg.png'),
    });
    setGoals(prev => [...prev, newGoal]);
  };

  const handleUpdateProgress = (goalId: string, newSavedAmount: number) => {
    setGoals(prev =>
      prev.map(goal => {
        if (goal.id !== goalId) {
          return goal;
        }
        return withCalculatedProgress({
          ...goal,
          savedAmount: newSavedAmount,
        });
      }),
    );
  };

  const handleGoalPress = (goal: Goal) => {
    setSelectedGoal(goal);
    setUpdateVisible(true);
  };

  const handleCloseUpdate = () => {
    setUpdateVisible(false);
    setSelectedGoal(null);
  };

  return (
    <View style={styles.container}>
      <LogoPageLayout>
        <Text style={styles.pageTitle}>Hedeflerim</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          {goals.map(goal => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onPress={() => handleGoalPress(goal)}
            />
          ))}
        </ScrollView>
      </LogoPageLayout>

      <BottomTabBar
        activeTab="list"
        onTabPress={tab => handleTabPress(navigation, tab)}
      />

      <View style={[styles.fabContainer, {bottom: tabBarOffset + 12}]}>
        <Pressable
          style={styles.fab}
          onPress={() => setNewGoalVisible(true)}>
          <Text style={styles.fabIcon}>+</Text>
        </Pressable>
        <Text style={styles.fabLabel}>Yeni Hedef</Text>
      </View>

      <NewGoalModal
        visible={newGoalVisible}
        onClose={() => setNewGoalVisible(false)}
        onSubmit={handleAddGoal}
      />

      <UpdateGoalProgressModal
        visible={updateVisible}
        goal={selectedGoal}
        onClose={handleCloseUpdate}
        onSave={handleUpdateProgress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.headerGray,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingBottom: 200,
  },
  fabContainer: {
    position: 'absolute',
    right: 24,
    alignItems: 'center',
    zIndex: 100,
    elevation: 10,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  fabIcon: {
    color: colors.background,
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 30,
  },
  fabLabel: {
    marginTop: 6,
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
});
