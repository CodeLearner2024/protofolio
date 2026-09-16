// Root layout — locale-aware layout lives in app/[locale]/layout.js
// This file is required by Next.js but the real layout is under [locale].
export const metadata = {
  title: 'Eric NDIHOKUBWAYO — Portfolio',
};

export default function RootLayout({ children }) {
  return children;
}
