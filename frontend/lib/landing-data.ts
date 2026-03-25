import type { SushiImageId } from "@/lib/sushi-image-map";

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type Pillar = {
  id: string;
  title: string;
  description: string;
};

export type PromoLine = {
  id: string;
  label: string;
  title: string;
  description: string;
  discount: string;
  oldPrice: string;
  newPrice: string;
};

export type FeaturedItem = {
  id: string;
  name: string;
  badge: string;
  description: string;
  imageId: SushiImageId;
};

export type ComboItem = {
  id: string;
  badge: string;
  audience: string;
  name: string;
  description: string;
  details: string;
  price: string;
  items: string[];
  ctaLabel: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  badge?: string;
  price?: string;
  imageId: SushiImageId;
};

export type MenuGroup = {
  id: string;
  title: string;
  description: string;
  priceFrom?: string;
  items: MenuItem[];
};

export type Branch = {
  id: string;
  name: string;
  address: string;
  openHours: string;
  tags: string[];
};

export const landingData = {
  brandName: "Nami Sushi",
  hero: {
    eyebrow: "Nami Sushi",
    title: "Nami Sushi, đi ăn gọn mà vui.",
    description:
      "Một quán sushi hiện đại cho những buổi đi ăn cùng bạn bè: sáng, gọn, dễ rủ nhau ghé và đủ rõ ràng để gọi món không bị rối.",
    chips: ["Combo 2-4 người", "Đồng giá 39.000đ / 14:00 - 17:00", "Đặt bàn nhanh"],
    primaryCta: {
      label: "Xem combo",
      href: "#combos",
    },
    secondaryCta: {
      label: "Xem menu",
      href: "#menu",
    },
  } satisfies HeroContent,
  pillars: [
    {
      id: "pretty",
      title: "Combo rõ cho nhóm 2-4",
      description: "Đi đông vẫn gọi nhanh, không phải ngồi chia món qua quá nhiều lượt.",
    },
    {
      id: "accessible",
      title: "Menu chia theo nhóm",
      description: "Nhìn vào biết nên bắt đầu từ đâu và gọi tiếp gì cho cả bàn.",
    },
    {
      id: "modern",
      title: "Chất Nhật hiện đại",
      description: "Sáng, gọn và đủ trẻ để đi thường xuyên mà không bị kiểu cách.",
    },
    {
      id: "group",
      title: "Dễ rủ nhau ghé",
      description: "Hợp cho những buổi sau giờ học, giờ làm hoặc đi nhóm bất chợt.",
    },
  ] satisfies Pillar[],
  promos: [
    {
      id: "promo-1",
      label: "14:00 - 17:00",
      title: "Đồng giá chiều",
      description: "Ebi Nigiri, Tamago Sushi và Classic Maki là mấy món dễ gọi nhất trong khung này.",
      discount: "-20%",
      oldPrice: "49.000đ",
      newPrice: "39.000đ",
    },
    {
      id: "promo-2",
      label: "Thứ 4 hằng tuần",
      title: "Đi 4 tiết kiệm hơn",
      description: "Friends Table Set đang giảm cho nhóm 3-4 người, hợp nếu muốn chốt bàn nhanh.",
      discount: "-15%",
      oldPrice: "469.000đ",
      newPrice: "399.000đ",
    },
    {
      id: "promo-3",
      label: "17:00 - 19:00",
      title: "Combo sau giờ làm",
      description: "After Class Combo là lựa chọn gọn nhất cho nhóm ghé nhanh buổi chiều tối.",
      discount: "-17%",
      oldPrice: "289.000đ",
      newPrice: "239.000đ",
    },
  ] satisfies PromoLine[],
  featuredItems: [
    {
      id: "ebi-nigiri",
      name: "Ebi Nigiri",
      badge: "Dễ gọi",
      description: "Nhẹ, sạch vị và thường là món dễ chốt đầu tiên khi cả bàn muốn gọi nhanh.",
      imageId: "ebiNigiri",
    },
    {
      id: "tuna-nigiri",
      name: "Tuna Nigiri",
      badge: "Đậm vừa",
      description: "Rõ vị hơn một chút nhưng vẫn dễ ăn, hợp cho người muốn gọi thêm món cá đậm hơn.",
      imageId: "tunaNigiri",
    },
    {
      id: "tamago-sushi",
      name: "Tamago Sushi",
      badge: "Mềm vị",
      description: "Nhẹ và dễ ăn, hợp để xen giữa các món cá đậm hơn.",
      imageId: "tamago",
    },
    {
      id: "kani-sushi",
      name: "Kani Sushi",
      badge: "Dễ ăn",
      description: "Vị nhẹ và khá hợp khi đi cùng nhiều gu khác nhau.",
      imageId: "kani",
    },
    {
      id: "salmon-ikura",
      name: "Salmon Ikura",
      badge: "Điểm nhấn",
      description: "Mềm và rõ vị hơn, hợp để gọi thêm khi muốn bàn có một món nổi hơn.",
      imageId: "salmonIkura",
    },
    {
      id: "classic-maki",
      name: "Classic Maki",
      badge: "Gọn vị",
      description: "Gọn gàng, dễ gắp và rất hợp để chen giữa các món lẻ khi cả bàn muốn chia nhanh.",
      imageId: "maki",
    },
  ] satisfies FeaturedItem[],
  combos: [
    {
      id: "duo-maki-set",
      badge: "Hot hôm nay",
      audience: "2 người",
      name: "Duo Maki Set",
      description: "Set vừa tầm cho 2 người, lên bàn gọn và rất dễ chốt khi muốn gọi nhanh.",
      details:
        "Phần này đi theo kiểu vừa đủ no, có món cuộn dễ ăn và mấy món quen vị để khỏi phải nghĩ nhiều.",
      price: "269.000đ",
      items: ["2 cuộn roll dễ ăn", "2 nigiri quen vị", "1 phần gọi thêm"],
      ctaLabel: "Đặt bàn với combo này",
    },
    {
      id: "friends-table-set",
      badge: "Nhóm 3-4",
      audience: "3-4 người",
      name: "Friends Table Set",
      description: "Khay nhiều món hơn cho nhóm 3-4 người, hợp lúc muốn gọi một lần cho gọn.",
      details:
        "Phần này đầy bàn hơn, chia nhanh hơn và đỡ phải gọi lắt nhắt từng món cho cả nhóm.",
      price: "399.000đ",
      items: ["1 khay mix cho 3-4 người", "2 món ăn kèm", "1 món nóng"],
      ctaLabel: "Xem combo hot",
    },
    {
      id: "after-class-combo",
      badge: "Nhóm trẻ",
      audience: "Sau giờ học, giờ làm",
      name: "After Class Combo",
      description: "Combo gọn hơn cho buổi ghé nhanh sau giờ học hay giờ làm.",
      details:
        "Phần nhỏ hơn, vào bàn nhanh và hợp khi muốn ăn vừa đủ rồi đi tiếp, không cần gọi quá nhiều.",
      price: "239.000đ",
      items: ["2 cuộn roll", "1 món vui miệng", "2 đồ uống"],
      ctaLabel: "Giữ chỗ với combo này",
    },
  ] satisfies ComboItem[],
  menuGroups: [
    {
      id: "easy-nigiri",
      title: "Nigiri dễ bắt đầu",
      description: "Mấy món dễ gọi trước, hợp cho bàn chưa biết nên bắt đầu từ đâu.",
      priceFrom: "Từ 39.000đ",
      items: [
        {
          id: "classic-nigiri",
          name: "Classic Nigiri",
          description: "Món cơ bản, dễ ăn và gần như ai trong bàn cũng gọi được.",
          badge: "Dễ ăn",
          imageId: "nigiri",
        },
        {
          id: "crab-stick-nigiri",
          name: "Crab Stick Nigiri",
          description: "Vị nhẹ và khá an toàn nếu muốn mở đầu bàn ăn bằng món dễ ăn.",
          badge: "Dễ chọn",
          imageId: "crabStickNigiri",
        },
        {
          id: "amaebi-sushi",
          name: "Amaebi Sushi",
          description: "Nhẹ và thanh, hợp cho người thích vị dịu hơn một chút.",
          badge: "Nhẹ vị",
          imageId: "amaebi",
        },
        {
          id: "hotate-sushi",
          name: "Hotate Sushi",
          description: "Êm vị, dễ ăn và không bị ngấy.",
          badge: "Êm vị",
          imageId: "hotate",
        },
      ],
    },
    {
      id: "seafood-bright",
      title: "Hải sản sáng vị",
      description: "Nếu muốn đổi sang mấy món hải sản rõ vị hơn, xem nhóm này tiếp là vừa.",
      priceFrom: "Từ 49.000đ",
      items: [
        {
          id: "hamachi-sushi",
          name: "Hamachi Sushi",
          description: "Dễ ăn nhưng vị vẫn rõ, hợp gọi sau mấy món mở đầu.",
          badge: "Sạch vị",
          imageId: "hamachi",
        },
        {
          id: "hokkigai-sushi",
          name: "Hokkigai Sushi",
          description: "Rõ vị hơn một chút nhưng vẫn khá dễ ăn.",
          badge: "Rõ vị",
          imageId: "hokkigai",
        },
        {
          id: "ika-sushi",
          name: "Ika Sushi",
          description: "Mát vị và hợp để xen giữa các món béo hơn.",
          badge: "Gọn vị",
          imageId: "ika",
        },
        {
          id: "maguro-sushi",
          name: "Maguro Sushi",
          description: "Đậm hơn một chút, hợp cho người thích vị cá rõ hơn.",
          badge: "Đậm vừa",
          imageId: "maguro",
        },
      ],
    },
    {
      id: "richer-seafood",
      title: "Món cá đậm vị",
      description: "Nhóm này dành cho bàn thích vị đậm hơn và muốn gọi mấy món cá nổi rõ hơn.",
      priceFrom: "Từ 59.000đ",
      items: [
        {
          id: "saba-sushi",
          name: "Saba Sushi",
          description: "Vị rõ hơn hẳn, hợp cho ai thích ăn cá đậm hơn một chút.",
          badge: "Đậm vị",
          imageId: "saba",
        },
        {
          id: "iwashi-sushi",
          name: "Iwashi Sushi",
          description: "Lạ miệng hơn một chút, hợp khi muốn đổi vị.",
          badge: "Lạ miệng",
          imageId: "iwashi",
        },
        {
          id: "tako-sushi",
          name: "Tako Sushi",
          description: "Ăn vui miệng và giúp bàn có thêm món khác kiểu.",
          badge: "Vui miệng",
          imageId: "tako",
        },
        {
          id: "anago-sushi",
          name: "Anago Sushi",
          description: "Tròn vị, dễ hợp gu và khá đáng gọi nếu thích món đậm hơn.",
          badge: "Tròn vị",
          imageId: "anago",
        },
      ],
    },
    {
      id: "signature-bites",
      title: "Món có điểm nhấn",
      description: "Nhóm này hợp để gọi thêm khi muốn bàn có vài món nổi hơn, ăn cũng vui hơn.",
      priceFrom: "Từ 69.000đ",
      items: [
        {
          id: "roe-salmon-sushi",
          name: "Roe Salmon Sushi",
          description: "Dễ nhận ra, ăn vui miệng và khá hợp để gọi thêm cho bàn đỡ đều.",
          badge: "Nổi bật",
          imageId: "roeSalmon",
        },
        {
          id: "ikura-sushi",
          name: "Ikura Sushi",
          description: "Mặn nhẹ và rõ vị, hợp cho người thích món có trứng cá.",
          badge: "Rõ vị",
          imageId: "ikura",
        },
        {
          id: "negitoro-sushi",
          name: "Negitoro Sushi",
          description: "Mềm và đậm vừa phải, hợp gọi thêm khi muốn đổi vị.",
          badge: "Mượt vị",
          imageId: "negitoro",
        },
        {
          id: "inari-sushi",
          name: "Inari Sushi",
          description: "Mềm, ngọt nhẹ và là món khá dễ nhận ra trên bàn.",
          badge: "Dễ nhận ra",
          imageId: "inari",
        },
        {
          id: "unagi-sushi",
          name: "Unagi Sushi",
          description: "Đậm và tròn vị, hợp cho người muốn chốt thêm một món chắc tay.",
          badge: "Đậm vị",
          imageId: "unagi",
        },
      ],
    },
    {
      id: "maki-rolls",
      title: "Maki và roll gọi thêm",
      description: "Toàn mấy món cuộn dễ gắp, dễ chia, hợp gọi thêm cho cả bàn.",
      priceFrom: "Từ 35.000đ",
      items: [
        {
          id: "kappa-maki",
          name: "Kappa Maki",
          description: "Nhẹ vị, dễ ăn và hợp xen giữa các món đậm hơn.",
          badge: "Cuộn gọn",
          imageId: "kappaMaki",
        },
        {
          id: "avocado-roll",
          name: "Avocado Roll",
          description: "Mềm, dễ ăn và hợp cho người thích vị nhẹ.",
          badge: "Mềm gọn",
          imageId: "avocado",
        },
        {
          id: "california-roll",
          name: "California Roll",
          description: "Dễ chia và khá hợp để gọi thêm cho cả bàn.",
          badge: "Dễ chia",
          imageId: "california",
        },
        {
          id: "natto-roll",
          name: "Natto Roll",
          description: "Lạ miệng hơn một chút, hợp cho ai muốn thử vị khác.",
          badge: "Lạ vị",
          imageId: "natto",
        },
      ],
    },
  ] satisfies MenuGroup[],
  branches: [
    {
      id: "branch-highlight",
      name: "[CHI_NHANH]",
      address: "[DIA_CHI]",
      openHours: "[GIO_MO_CUA]",
      tags: ["Dễ gặp nhau", "Hợp nhóm", "Đi lại thuận tiện"],
    },
    {
      id: "branch-02",
      name: "[CHI_NHANH_02]",
      address: "[DIA_CHI_02]",
      openHours: "[GIO_MO_CUA_02]",
      tags: ["Gần trung tâm", "Dễ ghé nhanh"],
    },
  ] satisfies Branch[],
  quickActions: [
    { id: "phone", label: "Gọi nhanh", href: "tel:[SO_DIEN_THOAI]" },
    { id: "zalo", label: "Nhắn Zalo", href: "#" },
    { id: "messenger", label: "Nhắn Messenger", href: "#" },
  ],
  footer: {
    line: "Sushi ngon mắt cho những buổi hẹn vui hơn.",
    note: "Món đẹp, dễ ăn, dễ rủ nhau đi cùng bất kỳ lúc nào.",
  },
};
