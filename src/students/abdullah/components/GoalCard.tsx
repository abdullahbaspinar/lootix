import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Goal} from '../constants/goals';
import {colors} from '../constants/colors';
import {calculateRemaining} from '../utils/goalHelpers';

type GoalCardProps = {
  goal: Goal;
  onPress: () => void;
};

export function GoalCard({goal, onPress}: GoalCardProps) {
  const isComplete = goal.progress >= 100;
  const progressColor = isComplete ? colors.success : colors.primary;
  const remaining = calculateRemaining(goal.savedAmount, goal.price);

  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
      android_ripple={{color: 'rgba(211,47,47,0.15)'}}>
      <Text style={styles.statusLabel}>Hedef Durumu</Text>

      <View style={styles.middleRow}>
        <View style={styles.leftSection}>
          <Text style={[styles.percent, {color: progressColor}]}>
            %{goal.progress}
          </Text>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${goal.progress}%`,
                  backgroundColor: progressColor,
                },
              ]}
            />
          </View>
          {!isComplete && (
            <Text style={styles.remaining}>{remaining} ₺ kaldı</Text>
          )}
          {isComplete && (
            <Text style={[styles.remaining, styles.completed]}>
              Hedef tamamlandı!
            </Text>
          )}
        </View>

        <View style={styles.rightSection}>
          <Image source={goal.image} style={styles.image} />
          <Text style={styles.goalInfo}>
            {goal.name} {goal.price}₺
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  statusLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 10,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  leftSection: {
    flex: 1,
  },
  percent: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  progressTrack: {
    height: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  },
  remaining: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  completed: {
    color: colors.success,
    fontWeight: '600',
  },
  rightSection: {
    alignItems: 'center',
    width: 90,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginBottom: 6,
  },
  goalInfo: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 16,
  },
});
