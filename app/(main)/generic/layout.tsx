import HeadSegment from '@/components/generic/head-segment';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 h-full w-full flex-col">
      <HeadSegment />
      {children}
    </div>
  );
}
