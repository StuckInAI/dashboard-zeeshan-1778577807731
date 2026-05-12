import { Home, BarChart3, Users, Settings, FileText, FolderOpen } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const menuItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Users, label: 'Users', active: false },
  { icon: FolderOpen, label: 'Projects', active: false },
  { icon: FileText, label: 'Documents', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside style={{ width: isOpen ? '260px' : '80px', backgroundColor: 'var(--color-bg-primary)', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', transition: 'width 0.3s ease', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-xl) var(--spacing-lg)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-info))', color: 'white', flexShrink: 0 }}>
          <BarChart3 size={28} />
        </div>
        {isOpen && <span style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>Dashboard</span>}
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', padding: 'var(--spacing-lg)' }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md)',
                border: 'none',
                background: item.active ? 'var(--color-primary-light)' : 'none',
                color: item.active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-medium)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left',
                width: '100%',
                justifyContent: isOpen ? 'flex-start' : 'center',
              }}
            >
              <Icon size={20} style={{ flexShrink: 0 }} />
              {isOpen && <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
