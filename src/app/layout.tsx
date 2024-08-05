import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Turf gaming | Coming soon',
    description:
        'Modular, Permissionless eSports Engine revolutionising gaming economy with prediction markets.',
    openGraph: {
        images: `https://0xturf.gg/preview.png`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
