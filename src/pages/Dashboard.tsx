import { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import StatsGrid from '@/components/dashboard/StatsGrid';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-secondary)' }}>
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div style={{ flex: 1, padding: 'var(--spacing-xl)', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-xs)' }}>Dashboard</h1>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)' }}>Welcome back! Here's what's happening today.</p>
          </div>
          <StatsGrid />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-xl)', marginTop: 'var(--spacing-xl)' }}>
            <RecentActivity />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}