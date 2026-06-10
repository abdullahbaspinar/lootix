import {Goal} from '../constants/goals';

export function calculateProgress(savedAmount: number, price: number): number {
  if (price <= 0) {
    return 0;
  }
  return Math.min(100, Math.round((savedAmount / price) * 100));
}

export function calculateRemaining(savedAmount: number, price: number): number {
  return Math.max(0, price - savedAmount);
}

export function withCalculatedProgress(goal: Goal): Goal {
  return {
    ...goal,
    progress: calculateProgress(goal.savedAmount, goal.price),
  };
}

export function parsePrice(value: string): number {
  return parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
}
