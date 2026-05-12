import { Menu, Bell, Search, User } from 'lucide-react';

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-md) var(--spacing-xl)', backgroundColor: 'var(--color-bg-primary)', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)', flex: 1 }}>
        <button
          style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <div style={{ position: 'relative', maxWidth: '400px', flex: 1 }}>
          <Search size={20} style={{ position: 'absolute', left: 'var(--spacing-md)', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)', pointerEvents: 'none' }} />
          <input
            type="text"
            placeholder="Search..."
            style={{ width: '100%', padding: 'var(--spacing-sm) var(--spacing-md) var(--spacing-sm) 2.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', backgroundColor: 'var(--color-bg-secondary)', transition: 'all 0.2s' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
        <button style={{ position: 'relative', background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} aria-label="Notifications">
          <Bell size={20} />
          <span style={{ position: 'absolute', top: '4px', right: '4px', backgroundColor: 'var(--color-danger)', color: 'white', fontSize: '0.625rem', fontWeight: 'var(--font-semibold)', padding: '0 0.375rem', borderRadius: '999px', minWidth: '1.125rem', height: '1.125rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} aria-label="User menu">
          <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '999px', background: 'linear-gradient(135deg, var(--color-primary), var(--color-info))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.2s' }}>
            <User size={20} />
          </div>
        </button>
      </div>
    </header>
  );
}