import { Clock, CheckCircle, AlertCircle, Info } from 'lucide-react';

type Activity = {
  id: string;
  type: 'success' | 'warning' | 'info';
  title: string;
  description: string;
  timestamp: string;
};

const activities: Activity[] = [
  {
    id: '1',
    type: 'success',
    title: 'New user registered',
    description: 'John Doe joined the platform',
    timestamp: '2 minutes ago',
  },
  {
    id: '2',
    type: 'info',
    title: 'System update',
    description: 'Version 2.1.0 deployed successfully',
    timestamp: '15 minutes ago',
  },
  {
    id: '3',
    type: 'warning',
    title: 'Low storage warning',
    description: 'Database storage at 85% capacity',
    timestamp: '1 hour ago',
  },
  {
    id: '4',
    type: 'success',
    title: 'Payment received',
    description: 'Invoice #1234 paid by Acme Corp',
    timestamp: '2 hours ago',
  },
  {
    id: '5',
    type: 'info',
    title: 'New feature released',
    description: 'Dashboard analytics now available',
    timestamp: '3 hours ago',
  },
];

function getActivityIcon(type: Activity['type']) {
  switch (type) {
    case 'success':
      return CheckCircle;
    case 'warning':
      return AlertCircle;
    case 'info':
      return Info;
  }
}

function getActivityColor(type: Activity['type']) {
  switch (type) {
    case 'success':
      return { bg: 'var(--color-success-light)', color: 'var(--color-success)' };
    case 'warning':
      return { bg: 'var(--color-warning-light)', color: 'var(--color-warning)' };
    case 'info':
      return { bg: 'var(--color-info-light)', color: 'var(--color-info)' };
  }
}

export default function RecentActivity() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--color-border-light)' }}>
        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)' }}>Recent Activity</h2>
        <Clock size={20} style={{ color: 'var(--color-text-light)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          const colors = getActivityColor(activity.type);
          return (
            <div key={activity.id} style={{ display: 'flex', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', transition: 'all 0.2s' }}>
              <div style={{ flexShrink: 0, width: '2.25rem', height: '2.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg, color: colors.color }}>
                <Icon size={18} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xs)' }}>{activity.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-xs)' }}>{activity.description}</p>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)' }}>{activity.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
