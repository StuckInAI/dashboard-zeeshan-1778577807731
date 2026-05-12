import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: 'primary' | 'success' | 'warning' | 'danger' | 'info';
};

function getColorStyles(color: StatCardProps['color']) {
  switch (color) {
    case 'primary':
      return { bg: 'var(--color-primary-light)', color: 'var(--color-primary)' };
    case 'success':
      return { bg: 'var(--color-success-light)', color: 'var(--color-success)' };
    case 'warning':
      return { bg: 'var(--color-warning-light)', color: 'var(--color-warning)' };
    case 'danger':
      return { bg: 'var(--color-danger-light)', color: 'var(--color-danger)' };
    case 'info':
      return { bg: 'var(--color-info-light)', color: 'var(--color-info)' };
  }
}

export default function StatCard({ title, value, change, trend, icon: Icon, color }: StatCardProps) {
  const colorStyles = getColorStyles(color);
  
  return (
    <div style={{ backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)', transition: 'all 0.2s' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--color-text-secondary)' }}>{title}</span>
        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colorStyles.bg, color: colorStyles.color }}>
          <Icon size={20} />
        </div>
      </div>
      <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-sm)' }}>{value}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontSize: 'var(--text-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', fontWeight: 'var(--font-medium)', color: trend === 'up' ? 'var(--color-success)' : 'var(--color-danger)' }}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{change}</span>
        </div>
        <span style={{ color: 'var(--color-text-light)' }}>from last month</span>
      </div>
    </div>
  );
}
