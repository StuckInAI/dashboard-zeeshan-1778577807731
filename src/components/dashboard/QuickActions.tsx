import { Plus, Upload, Download, Settings, FileText, Users } from 'lucide-react';

type Action = {
  id: string;
  icon: typeof Plus;
  label: string;
  description: string;
  color: 'primary' | 'success' | 'warning' | 'info';
};

const actions: Action[] = [
  {
    id: '1',
    icon: Plus,
    label: 'Create Project',
    description: 'Start a new project',
    color: 'primary',
  },
  {
    id: '2',
    icon: Users,
    label: 'Add User',
    description: 'Invite team members',
    color: 'success',
  },
  {
    id: '3',
    icon: Upload,
    label: 'Upload File',
    description: 'Import documents',
    color: 'info',
  },
  {
    id: '4',
    icon: Download,
    label: 'Export Data',
    description: 'Download reports',
    color: 'warning',
  },
  {
    id: '5',
    icon: FileText,
    label: 'New Document',
    description: 'Create documentation',
    color: 'primary',
  },
  {
    id: '6',
    icon: Settings,
    label: 'Configure',
    description: 'Manage settings',
    color: 'info',
  },
];

export default function QuickActions() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
      <div style={{ marginBottom: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-md)', borderBottom: '1px solid var(--color-border-light)' }}>
        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)' }}>Quick Actions</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 'var(--spacing-md)' }}>
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                padding: 'var(--spacing-lg) var(--spacing-md)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                background: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'center',
              }}
            >
              <div style={{ width: '3rem', height: '3rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: action.color === 'primary' ? 'var(--color-primary-light)' : action.color === 'success' ? 'var(--color-success-light)' : action.color === 'warning' ? 'var(--color-warning-light)' : 'var(--color-info-light)', color: action.color === 'primary' ? 'var(--color-primary)' : action.color === 'success' ? 'var(--color-success)' : action.color === 'warning' ? 'var(--color-warning)' : 'var(--color-info)' }}>
                <Icon size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)', color: 'var(--color-text-primary)' }}>{action.label}</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-light)' }}>{action.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}