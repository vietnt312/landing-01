export const SEO = {
  siteName: "Bê Thui Hà Nội",
  siteUrl: "https://www.bethuihanoi.com",
  locale: "vi_VN",
  defaultTitle: "Bê Thui Hà Nội – Nhà hàng Bê thui chính gốc Hà Nội",
  defaultDescription:
    "Hệ thống Nhà hàng Bê thui Hà Nội – thưởng thức bê thui truyền thống, không gian sân vườn thoáng mát.",
  defaultOgImage: "https://www.bethuihanoi.com/og.png",
  schemaType: "Restaurant" as const,
} as const;

export type PageSEO = {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
};

export const PAGE_SEO: Record<string, PageSEO> = {
  menu: {
    title: "Thực Đơn – Bê Thui Hà Nội",
    description: "Khám phá thực đơn bê thui đặc sắc với các món bê thui truyền thống cùng nhiều món nhậu hấp dẫn.",
  },
  about: {
    title: "Về Chúng Tôi – Bê Thui Hà Nội",
    description: "Câu chuyện và giá trị của Bê Thui Hà Nội – hệ thống nhà hàng bê thui truyền thống tại Hà Nội.",
  },
  booking: {
    title: "Đặt Bàn – Bê Thui Hà Nội",
    description: "Đặt bàn nhanh chóng tại Bê Thui Hà Nội. Chúng tôi sẽ xác nhận trong thời gian sớm nhất.",
    noindex: true,
  },
  contact: {
    title: "Liên Hệ – Bê Thui Hà Nội",
    description: "Liên hệ với Bê Thui Hà Nội qua hotline, email hoặc ghé thăm trực tiếp nhà hàng.",
  },
};
