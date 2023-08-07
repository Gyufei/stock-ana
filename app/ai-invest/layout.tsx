import MenuLink from '@/components/ai-invest/menu-link';

export default function AiInvestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 h-full w-full flex-col">
      <MenuLink />
      {children}
    </div>
  );
}
