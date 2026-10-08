import Image from "next/image";
const KAKAO_URL =
  "http://qr.kakao.com/talk/vZX.nng2l1NLfL5xYV3tKl06vls-";

const CHEONGRYONG_URL = "https://danangcheongryong.com";
const SAKURA_URL = "https://danangdlgsakura.com";
const REVIEW_URL =
  "https://www.dananghot.com/bbs/board.php?bo_table=6002";

const schedule = [
  {
    day: "1일차",
    items: [
      "다낭 공항 픽업",
      "가이드 미팅",
      "숙소 체크인",
      "오후 자유관광 및 석식",
      "가라오케",
    ],
  },
  {
    day: "2일차",
    items: [
      "조식",
      "자유관광 및 식사",
      "마사지 또는 이발소 90분",
      "가라오케",
    ],
  },
  {
    day: "3일차",
    items: [
      "조식",
      "자유관광 및 식사",
      "마사지 또는 이발소 90분",
      "가라오케",
    ],
  },
  {
    day: "4일차",
    items: [
      "조식",
      "간단한 시내 관광 및 기념품 구입",
      "오후 식사",
      "공항 샌딩",
    ],
  },
];

const prices = [
  {
    people: "1인",
    price: "1,600 USD",
    total: "총 1,600 USD",
  },
  {
    people: "2인",
    price: "1인 1,300 USD",
    total: "총 2,600 USD",
  },
  {
    people: "3인",
    price: "1인 1,200 USD",
    total: "총 3,600 USD",
  },
  {
    people: "4인",
    price: "1인 1,100 USD",
    total: "총 4,400 USD",
  },
];

const includes = [
  {
    title: "숙소",
    text: "호캉스 가능한 호텔 또는 프라이빗 풀빌라",
    icon: "🏨",
  },
  {
    title: "전 일정 차량",
    text: "기사 포함 7인승 또는 9인승 차량 · 공항 픽업/샌딩",
    icon: "🚘",
  },
  {
    title: "여행 일정",
    text: "관광 · 식사 · 마사지/이발소 · 가라오케 일정 구성",
    icon: "✨",
  },
];

const faqs = [
  {
    q: "여행 일정은 변경할 수 있나요?",
    a: "가능합니다. 항공편과 인원, 원하는 일정에 맞춰 상담 후 일정을 조정할 수 있습니다.",
  },
  {
    q: "골프 일정도 추가할 수 있나요?",
    a: "가능합니다. 1인 150 USD 추가 시 18홀 골프 일정이 가능하며 그린피, 카트, 캐디 비용이 포함됩니다.",
  },
  {
    q: "호텔 대신 풀빌라 이용이 가능한가요?",
    a: "예약 시 원하는 숙소 형태를 말씀해주시면 일정과 인원에 맞춰 안내해드립니다.",
  },
  {
    q: "차량은 어떤 차량이 제공되나요?",
    a: "인원과 일정에 따라 7인승 또는 9인승 차량을 배정하며 기사 서비스가 포함됩니다.",
  },
  {
    q: "공항 픽업과 샌딩도 포함인가요?",
    a: "네. 기본 패키지에는 다낭 공항 픽업 및 샌딩이 포함됩니다.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#2b2b2b]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#d7b768]/30 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-xl font-black md:text-2xl">
            <span className="text-[#b58a2a]">다낭 황제투어</span>
          </a>

          <nav className="flex items-center gap-4 text-xs font-bold text-gray-600 md:gap-7 md:text-sm">
            <a href="#package" className="transition hover:text-[#b58a2a]">
              패키지
            </a>
            <a href="#schedule" className="transition hover:text-[#b58a2a]">
              일정
            </a>
            <a href="#price" className="transition hover:text-[#b58a2a]">
              가격
            </a>
            <a href="#review" className="transition hover:text-[#b58a2a]">
              후기
            </a>
            <a
              href="#related"
              className="hidden transition hover:text-[#b58a2a] sm:block"
            >
              연관서비스
            </a>
            <a
              href="#faq"
              className="hidden transition hover:text-[#b58a2a] md:block"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-[#d7b768]/25"
      >
        <Image
  src="/emperor-hero.png"
  alt="다낭 황제투어 프리미엄 여행"
  fill
  priority
  className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/15" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-20 md:px-8 lg:grid-cols-2">
          <div className="max-w-3xl">
            <p className="text-xs font-black tracking-[0.35em] text-[#b58a2a] md:text-sm">
              DANANG PREMIUM TOUR
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-[#1f1f1f] md:text-7xl">
              다낭 3박 5일
              <br />
              <span className="text-[#c19432]">황제투어</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
              숙소부터 전 일정 차량, 관광, 마사지 · 이발소, 가라오케까지
              다낭 여행 일정을 한 번에 준비하세요.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#price"
                className="rounded-xl bg-[#d8b052] px-7 py-4 text-center font-black text-white shadow-md transition hover:bg-[#c79b38]"
              >
                패키지 가격 보기
              </a>

              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#cfa84f] bg-white px-7 py-4 text-center font-black text-[#a77d20] transition hover:bg-[#fff6df]"
              >
                카카오톡 예약 문의
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              카카오톡 ID : danangking
            </p>
          </div>

          <div>
            <div className="rounded-[32px] border border-[#d7b768]/30 bg-white p-6 shadow-xl md:p-8">
              <p className="text-sm font-black text-[#b58a2a]">
                PREMIUM PACKAGE
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#222]">
                초특급 패키지
              </h2>

              <div className="mt-7 grid gap-4">
                <div className="rounded-2xl bg-[#fff8e9] p-5">
                  <p className="font-black text-[#b58a2a]">숙소</p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    호텔 또는 프라이빗 풀빌라
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff8e9] p-5">
                  <p className="font-black text-[#b58a2a]">차량</p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    기사 포함 전 일정 차량 · 공항 픽업/샌딩
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff8e9] p-5">
                  <p className="font-black text-[#b58a2a]">여행 일정</p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    관광 · 식사 · 마사지/이발소 · 가라오케
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d7b768]/30 bg-[#fffdf8] p-5">
                  <p className="font-black text-[#b58a2a]">
                    골프 추가 가능
                  </p>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    1인 150 USD 추가 · 18홀 · 그린피 · 카트 · 캐디 포함
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section id="package">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.3em] text-[#b58a2a]">
              PACKAGE
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#222] md:text-5xl">
              패키지 포함사항
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
              다낭 도착부터 출국까지 필요한 주요 여행 서비스를 한 번에
              준비합니다.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {includes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#e4cf9a] bg-white p-7 shadow-sm"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-black text-[#b58a2a]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLF */}
      <section className="bg-[#fff7e4]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="rounded-3xl border border-[#d7b768]/30 bg-white p-7 shadow-sm md:p-10">
            <p className="text-xs font-black tracking-[0.3em] text-[#b58a2a]">
              OPTIONAL GOLF
            </p>

            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-black text-[#222] md:text-4xl">
                  골프 일정 추가 가능
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  기본 황제투어 일정에 골프를 추가해서 이용할 수 있습니다.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff6d7] px-6 py-5">
                <p className="text-sm font-bold text-gray-500">
                  1인 추가금액
                </p>
                <p className="mt-1 text-3xl font-black text-[#b58a2a]">
                  150 USD
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-[#fffaf0] p-4 text-center font-bold">
                18홀
              </div>
              <div className="rounded-xl bg-[#fffaf0] p-4 text-center font-bold">
                그린피 · 카트
              </div>
              <div className="rounded-xl bg-[#fffaf0] p-4 text-center font-bold">
                캐디 포함
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="bg-[#f9f6ef]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-black tracking-[0.3em] text-[#b58a2a]">
            3 NIGHTS / 5 DAYS
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#222] md:text-5xl">
            3박 5일 기본 일정
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {schedule.map((day) => (
              <div
                key={day.day}
                className="rounded-3xl border border-[#e8dfca] bg-white p-6 shadow-sm"
              >
                <p className="text-2xl font-black text-[#b58a2a]">
                  {day.day}
                </p>

                <div className="mt-6 space-y-3">
                  {day.items.map((item, index) => (
                    <div key={item}>
                      <p className="leading-7 text-gray-600">{item}</p>

                      {index !== day.items.length - 1 && (
                        <p className="py-1 text-[#c6a45b]">↓</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-500">
            실제 일정은 항공편, 현지 상황 및 고객 요청에 따라 조정될 수
            있습니다.
          </p>
        </div>
      </section>

      {/* PRICE */}
      <section id="price">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.3em] text-[#b58a2a]">
              PACKAGE PRICE
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#222] md:text-5xl">
              초특급 가격표
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            {prices.map((price) => (
              <div
                key={price.people}
                className="rounded-3xl border border-[#e4cf9a] bg-white p-6 text-center shadow-sm"
              >
                <p className="text-xl font-black">{price.people}</p>

                <p className="mt-4 text-2xl font-black text-[#b58a2a]">
                  {price.price}
                </p>

                <p className="mt-2 text-sm text-gray-500">{price.total}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#e4cf9a] bg-[#fffaf0] p-6">
            <h3 className="font-black text-[#b58a2a]">참고사항</h3>

            <div className="mt-4 space-y-2 text-sm leading-7 text-gray-600">
              <p>· 세부 일정은 예약 상담을 통해 변경 가능합니다.</p>
              <p>
                · 골프는 1인 150 USD 추가 시 18홀 이용 가능하며 그린피,
                카트, 캐디가 포함됩니다.
              </p>
              <p>· 항공권은 기본 패키지에 포함되지 않습니다.</p>
              <p>· 현지 상황에 따라 숙소 및 일정은 변경될 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section id="review" className="bg-[#fff7e4]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-black tracking-[0.3em] text-[#b58a2a]">
            REAL REVIEW
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#222] md:text-5xl">
            다낭 황제투어 후기
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-600">
            실제 다낭 여행 후기를 참고해 여행 일정을 준비해보세요.
          </p>

          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-[#d8b052] px-7 py-4 font-black text-white shadow-sm transition hover:bg-[#c79b38]"
          >
            황제 투어 후기 더보기 →
          </a>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section id="related">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.3em] text-[#b58a2a]">
              RELATED SERVICE
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#222] md:text-5xl">
              다낭 연관 서비스
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
              황제투어와 함께 이용하기 좋은 다낭 현지 서비스를 확인해보세요.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            <a
              href={CHEONGRYONG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-[#e4cf9a] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-black tracking-[0.25em] text-[#b58a2a]">
                DANANG CHEONGRYONG
              </p>

              <h3 className="mt-3 text-2xl font-black text-[#222]">
                다낭 청룡열차
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                마사지 및 이발소 코스, 가격과 이용 안내를 확인할 수 있습니다.
              </p>

              <p className="mt-6 font-black text-[#b58a2a]">
                청룡열차 공식 홈페이지 →
              </p>
            </a>

            <a
              href={SAKURA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-[#e4cf9a] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-black tracking-[0.25em] text-[#b58a2a]">
                DANANG DLG SAKURA
              </p>

              <h3 className="mt-3 text-2xl font-black text-[#222]">
                다낭 DLG 한인 사쿠라
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                코스 가격, 영업시간, 위치, 픽업 및 예약 정보를 확인할 수
                있습니다.
              </p>

              <p className="mt-6 font-black text-[#b58a2a]">
                사쿠라 공식 홈페이지 →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#f9f6ef]">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-black tracking-[0.3em] text-[#b58a2a]">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#222] md:text-5xl">
            자주 묻는 질문
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-[#eadfca] bg-white p-6 shadow-sm"
              >
                <h3 className="font-black text-[#b58a2a]">Q. {faq.q}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  A. {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section className="bg-[#f2d88f] text-[#282214]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-24">
          <p className="text-sm font-black tracking-[0.25em]">
            RESERVATION
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            다낭 황제투어 예약문의
          </h2>

          <p className="mt-5 text-lg">
            여행 날짜 · 인원 · 원하는 숙소를 알려주시면 상담해드립니다.
          </p>

          <p className="mt-2 font-black">
            카카오톡 ID : danangking
          </p>

          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-[#272016] px-9 py-4 font-black text-white"
          >
            카카오톡 상담하기
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e9dfcb] bg-white py-8 text-center text-sm text-gray-500">
        © 2026 다낭 황제투어. All Rights Reserved.
      </footer>

      {/* FLOATING KAKAO */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[#FEE500] px-5 py-3 font-black text-[#191919] shadow-xl transition hover:scale-105 md:bottom-7 md:right-7"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#191919] text-[10px] text-[#FEE500]">
          TALK
        </span>
        예약 문의
      </a>
    </main>
  );
}