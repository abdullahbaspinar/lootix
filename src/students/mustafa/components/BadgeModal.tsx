import React from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {Badge} from '../constants/badges';
import {colors} from '../constants/colors';

type BadgeModalProps = {
  badge: Badge | null;
  visible: boolean;
  onClose: () => void;
  onComplete: (id: string) => void;
};

export function BadgeModal({badge, visible, onClose, onComplete}: BadgeModalProps) {
  if (!badge) {
    return null;
  }
  const {name, description, image, unlocked, progress, goal, category} = badge;
  const pct = Math.min(100, Math.round((progress / goal) * 100));

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <View style={[styles.circle, unlocked ? styles.unlocked : styles.locked]}>
            <Image source={image} style={styles.img} resizeMode="contain" />
            {!unlocked && (
              <View style={styles.lockBadge}>
                <Text style={styles.lockGlyph}>🔒</Text>
              </View>
            )}
          </View>

          <Text style={styles.category}>{category.toUpperCase()}</Text>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.taskBox}>
            <Text style={styles.taskLabel}>GÖREV</Text>
            <Text style={styles.taskText}>{description}</Text>
          </View>

          <View style={styles.progressWrap}>
            <View style={styles.track}>
              <View style={[styles.fill, {width: `${pct}%`}]} />
            </View>
            <Text style={styles.progressText}>
              {unlocked ? 'Tamamlandı' : `${progress}/${goal} (%${pct})`}
            </Text>
          </View>

          {unlocked ? (
            <View style={styles.doneRow}>
              <Text style={styles.doneText}>✓ Bu rozetin kilidi açıldı</Text>
            </View>
          ) : (
            <Pressable
              style={({pressed}) => [styles.cta, pressed && {opacity: 0.85}]}
              onPress={() => onComplete(badge.id)}>
              <Text style={styles.ctaText}>🔓 Görevi Tamamla</Text>
            </Pressable>
          )}

          <Pressable onPress={onClose} hitSlop={10} style={styles.close}>
            <Text style={styles.closeText}>Kapat</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center', padding: 24},
  sheet: {width: '100%', backgroundColor: colors.card, borderRadius: 22, paddingHorizontal: 22, paddingTop: 24, paddingBottom: 16, alignItems: 'center'},
  circle: {width: 92, height: 92, borderRadius: 46, alignItems: 'center', justifyContent: 'center', marginBottom: 12, overflow: 'hidden'},
  unlocked: {backgroundColor: colors.card, borderWidth: 3, borderColor: colors.primary},
  locked: {backgroundColor: colors.lockedBg, borderWidth: 3, borderColor: colors.locked},
  img: {width: 56, height: 56},
  lockBadge: {
    position: 'absolute', bottom: 4, right: 12, width: 26, height: 26, borderRadius: 13,
    backgroundColor: colors.locked, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.card,
  },
  lockGlyph: {fontSize: 12},
  category: {fontSize: 11, letterSpacing: 1, color: colors.primary, fontWeight: '700', marginBottom: 2},
  title: {fontSize: 20, fontWeight: '800', color: colors.text, marginBottom: 14},
  taskBox: {width: '100%', backgroundColor: colors.cardAlt, borderRadius: 14, padding: 14, marginBottom: 16},
  taskLabel: {fontSize: 11, letterSpacing: 1, color: colors.textSecondary, fontWeight: '700', marginBottom: 4},
  taskText: {fontSize: 14, color: colors.text, lineHeight: 20},
  progressWrap: {width: '100%', marginBottom: 18},
  track: {height: 8, borderRadius: 4, backgroundColor: colors.border, overflow: 'hidden'},
  fill: {height: '100%', backgroundColor: colors.primary, borderRadius: 4},
  progressText: {marginTop: 6, fontSize: 12, color: colors.textSecondary, textAlign: 'right'},
  cta: {backgroundColor: colors.primary, paddingVertical: 13, paddingHorizontal: 26, borderRadius: 14, width: '100%', alignItems: 'center'},
  ctaText: {color: colors.card, fontWeight: '800', fontSize: 15},
  doneRow: {paddingVertical: 10},
  doneText: {color: colors.primary, fontWeight: '700'},
  close: {marginTop: 10, paddingVertical: 6},
  closeText: {color: colors.textSecondary, fontWeight: '600'},
});
