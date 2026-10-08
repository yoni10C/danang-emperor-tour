import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dananghwangje.com"),

  title: {
    default: "다낭 황제투어 | 3박5일 패키지 가격·일정·예약",
    template: "%s | 다낭 황제투어",
  },

  description:
  "다낭 황제투어 3박5일 패키지 가격, 일정, 숙소, 차량, 골프 추가 및 예약 정보를 확인하세요.",

    verification: {
  other: {
    "naver-site-verification":
      "fa2e19f5f0fb93c1ce46c870a31daedcd41755f5",
  },
},
  keywords: [
    "다낭 황제투어",
    "다낭 황제투어 가격",
    "다낭 황제투어 예약",
    "다낭 3박5일",
    "다낭 패키지 여행",
    "다낭 자유여행",
    "다낭 골프",
    "다낭 마사지",
    "다낭 이발소",
    "다낭 가라오케",
    "다낭 풀빌라",
    "다낭 공항 픽업",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "다낭 황제투어 | 3박5일 프리미엄 패키지",
    description:
      "숙소, 차량, 관광, 마사지·이발소, 가라오케까지 포함된 다낭 3박5일 패키지 일정과 가격을 확인하세요.",
    url: "https://dananghwangje.com",
    siteName: "다낭 황제투어",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/emperor-hero.png",
        width: 1536,
        height: 1024,
        alt: "다낭 황제투어 3박5일 프리미엄 패키지",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "다낭 황제투어 | 3박5일 프리미엄 패키지",
    description:
      "다낭 황제투어 패키지 가격, 일정, 골프 추가 및 예약 정보를 확인하세요.",
    images: ["/emperor-hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "https://dananghwangje.com/favicon.png",
    shortcut: "https://dananghwangje.com/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}