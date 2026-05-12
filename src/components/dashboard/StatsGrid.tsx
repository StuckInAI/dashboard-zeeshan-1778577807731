import { Users, DollarSign, ShoppingCart, Activity } from 'lucide-react';
import StatCard from './StatCard';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up' as const,
    icon: DollarSign,
    color: 'success' as const,
  },
  {
    title: 'Active Users',
    value: '2,543',
    change: '+15.3%',
    trend: 'up' as const,
    icon: Users,
    color: 'primary' as const,
  },
  {
    title: 'Orders',
    value: '1,234',
    change: '-4.2%',
    trend: 'down' as const,
    icon: ShoppingCart,
    color: 'warning' as const,
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+2.1%',
    trend: 'up' as const,
    icon: Activity,
    color: 'info' as const,
  },
];

export default function StatsGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}