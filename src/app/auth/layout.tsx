import "../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex justify-center w-full bg-secondary'>
      <div className='flex flex-col items-center container py-16'>
        {children}
      </div>
    </div>
  );
}
