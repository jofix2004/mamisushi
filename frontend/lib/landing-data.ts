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
  text: string;
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
    chips: ["Combo 2-4 người", "Đồng giá theo giờ", "Đặt bàn nhanh"],
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
    { id: "promo-1", text: "Đồng giá một số món trong khung giờ [KHUNG_GIO]." },
    { id: "promo-2", text: "Ưu đãi theo [NGAY_DAC_BIET] để đi đông càng vui." },
    { id: "promo-3", text: "Combo hot cho nhóm 2-4 người, dễ gọi và dễ chia." },
  ] satisfies PromoLine[],
  featuredItems: [
    {
      id: "salmon-nigiri",
      name: "Salmon Nigiri",
      badge: "Dễ gọi",
      description: "Mềm vị, gọn và hợp để bắt đầu khi cả nhóm chưa biết chọn gì.",
      imageId: "11",
    },
    {
      id: "ebi-nigiri",
      name: "Ebi Nigiri",
      badge: "Dễ ăn",
      description: "Nhẹ, dễ vào và luôn là một món an toàn cho nhiều gu khác nhau.",
      imageId: "3",
    },
    {
      id: "maguro-nigiri",
      name: "Maguro Nigiri",
      badge: "Đậm hơn",
      description: "Gọn nhưng rõ vị hơn một chút, hợp khi muốn thêm một nhịp đậm cho bàn ăn.",
      imageId: "6",
    },
    {
      id: "kani-nigiri",
      name: "Kani Nigiri",
      badge: "Nhẹ vị",
      description: "Màu sáng, dễ nhìn và khá hợp để nối nhịp giữa các món cá đậm vị.",
      imageId: "2",
    },
    {
      id: "ikura-gunkan",
      name: "Ikura Gunkan",
      badge: "Điểm nhấn",
      description: "Một món nhỏ nhưng làm phần visual của cả dải trở nên bắt mắt hơn.",
      imageId: "4",
    },
    {
      id: "salmon-maki",
      name: "Salmon Maki",
      badge: "Gọn vị",
      description: "Một lựa chọn gọn gàng, nhìn đẹp và rất hợp để chen giữa các món lẻ.",
      imageId: "10",
    },
  ] satisfies FeaturedItem[],
  combos: [
    {
      id: "duo-maki-set",
      badge: "Hot hôm nay",
      audience: "2 người",
      name: "Duo Maki Set",
      description: "Dễ bắt đầu, gọn gàng cho một buổi hẹn nhanh nhưng vẫn đủ vui.",
      details:
        "Tập trung vào những cuộn dễ ăn và dễ chia để hai người có thể quyết nhanh mà vẫn đủ trải nghiệm.",
      price: "[GIA_COMBO]",
      items: ["2 cuộn signature", "1 món ăn kèm", "1 đồ uống đôi"],
      ctaLabel: "Đặt bàn với combo này",
    },
    {
      id: "friends-table-set",
      badge: "Nhóm 3-4",
      audience: "3-4 người",
      name: "Friends Table Set",
      description: "Lựa chọn hợp lý để hội bạn tới là có thể gọi ngay.",
      details:
        "Set dễ lên bàn đẹp, có đủ món để mỗi người cùng thử nhiều vị hơn mà không cần gọi quá nhiều lần.",
      price: "[GIA_COMBO]",
      items: ["4 cuộn signature", "2 món ăn kèm", "1 món nóng"],
      ctaLabel: "Xem combo hot",
    },
    {
      id: "after-class-combo",
      badge: "Nhóm trẻ",
      audience: "Sau giờ học, giờ làm",
      name: "After Class Combo",
      description: "Dành cho những bữa ghé nhanh, gọn và dễ quyết.",
      details:
        "Chỉ cần một combo để cả nhóm ăn vui, chia dễ và vào bàn nhanh hơn mà vẫn đủ món đẹp mắt.",
      price: "[GIA_COMBO]",
      items: ["3 cuộn roll", "1 món vui miệng", "2 đồ uống"],
      ctaLabel: "Giữ chỗ với combo này",
    },
  ] satisfies ComboItem[],
  menuGroups: [
    {
      id: "nigiri-favorites",
      title: "Nigiri được gọi nhiều",
      description:
        "Những miếng nigiri gọn gàng, dễ nhìn và hợp với nhịp chọn món nhanh cho cả nhóm.",
      priceFrom: "Từ [TU_GIA]",
      items: [
        {
          id: "salmon-nigiri-01",
          name: "Salmon Nigiri",
          description: "Mềm, béo nhẹ và rất dễ vào ngay từ lần đầu thử.",
          badge: "Dễ ăn",
          imageId: "1",
        },
        {
          id: "kani-nigiri-02",
          name: "Kani Nigiri",
          description: "Vị nhẹ, màu sắc bắt mắt và hợp để mở đầu bàn ăn.",
          badge: "Dễ chọn",
          imageId: "2",
        },
        {
          id: "ebi-nigiri-03",
          name: "Ebi Nigiri",
          description: "Sạch vị, gọn và khá dễ chịu khi đi cùng nhiều món khác nhau.",
          badge: "Nhẹ vị",
          imageId: "3",
        },
        {
          id: "maguro-nigiri-04",
          name: "Maguro Nigiri",
          description: "Đậm hơn một chút nhưng vẫn rất gọn và sạch vị.",
          badge: "Đậm vị",
          imageId: "6",
        },
        {
          id: "salmon-aburi-05",
          name: "Salmon Aburi",
          description: "Mềm hơn, bóng hơn và hợp để thêm một nhịp ấm cho dải nigiri.",
          badge: "Mềm béo",
          imageId: "11",
        },
      ],
    },
    {
      id: "special-nigiri",
      title: "Nigiri có điểm nhấn",
      description:
        "Những miếng nigiri giàu texture hơn, hợp khi bạn muốn bàn ăn có thêm một điểm nhấn rõ ràng.",
      priceFrom: "Từ [TU_GIA]",
      items: [
        {
          id: "salmon-roe-nigiri",
          name: "Salmon Roe Nigiri",
          description: "Thêm độ vui miệng và độ sáng vị cho bàn ăn nhìn cuốn hơn.",
          badge: "Nổi bật",
          imageId: "5",
        },
        {
          id: "salmon-ikura-nigiri",
          name: "Salmon Ikura Nigiri",
          description: "Mềm, bóng và có điểm nhấn trứng cá rất hợp để lên hình.",
          badge: "Đẹp mắt",
          imageId: "9",
        },
        {
          id: "aburi-salmon",
          name: "Aburi Salmon",
          description: "Nhẹ mùi khò, mềm và hợp cho người thích vị tròn hơn.",
          badge: "Khò nhẹ",
          imageId: "12",
        },
        {
          id: "premium-salmon",
          name: "Premium Salmon",
          description: "Nhiều độ bóng hơn, nhìn sang vừa đủ nhưng vẫn giữ cảm giác trẻ.",
          badge: "Bóng vị",
          imageId: "11",
        },
        {
          id: "ebi-aburi",
          name: "Ebi Aburi",
          description: "Một nhịp chuyển giữa tôm và vị khò nhẹ, hợp khi muốn dải món bớt đều.",
          badge: "Tròn vị",
          imageId: "3",
        },
      ],
    },
    {
      id: "gunkan-and-maki",
      title: "Gunkan và maki",
      description:
        "Những món nhỏ nhưng tạo điểm nhấn rõ, rất hợp để thêm vào khi muốn bàn ăn đa dạng hơn.",
      priceFrom: "Từ [TU_GIA]",
      items: [
        {
          id: "ikura-gunkan",
          name: "Ikura Gunkan",
          description: "Mặn nhẹ, vui miệng và luôn tạo cảm giác bàn ăn phong phú hơn.",
          badge: "Gunkan",
          imageId: "4",
        },
        {
          id: "uni-gunkan",
          name: "Uni Gunkan",
          description: "Béo, mềm và là món giúp phần visual trở nên lạ mắt hơn.",
          badge: "Đậm béo",
          imageId: "8",
        },
        {
          id: "classic-maki",
          name: "Classic Maki",
          description: "Một lựa chọn gọn, dễ cầm và rất hợp để chen giữa các nhóm nigiri.",
          badge: "Maki",
          imageId: "10",
        },
        {
          id: "kani-maki",
          name: "Kani Maki",
          description: "Cuộn nhỏ, sáng màu và hợp để làm dịu nhịp giữa các món đậm vị hơn.",
          badge: "Cuộn gọn",
          imageId: "7",
        },
        {
          id: "salmon-roll",
          name: "Salmon Roll",
          description: "Một cuộn dễ chia, dễ gắp và hợp khi muốn dải món kéo dài thêm.",
          badge: "Dễ chia",
          imageId: "10",
        },
      ],
    },
    {
      id: "maki-goi-them",
      title: "Maki gọi thêm",
      description:
        "Những cuộn nhỏ cho phần cuối nhịp xem, giúp dải menu kéo dài hơn mà vẫn giữ cảm giác nhẹ.",
      priceFrom: "Từ [TU_GIA]",
      items: [
        {
          id: "spicy-salmon-roll",
          name: "Spicy Salmon Roll",
          description: "Cay nhẹ, gọn và hợp để thêm một điểm nhấn cuối dải.",
          badge: "Cay nhẹ",
          imageId: "7",
        },
        {
          id: "avocado-maki",
          name: "Avocado Maki",
          description: "Mềm và sáng vị hơn, giúp dải cuộn ngang bớt cảm giác lặp.",
          badge: "Mềm gọn",
          imageId: "10",
        },
        {
          id: "tuna-roll",
          name: "Tuna Roll",
          description: "Đậm vừa đủ và luôn hợp khi đặt cạnh các món màu sáng hơn.",
          badge: "Đậm vừa",
          imageId: "6",
        },
        {
          id: "kani-roll",
          name: "Kani Roll",
          description: "Một lựa chọn dễ nhìn, dễ ăn và hợp với nhịp xem nhanh.",
          badge: "Dễ ăn",
          imageId: "2",
        },
        {
          id: "salmon-avocado-roll",
          name: "Salmon Avocado Roll",
          description: "Mềm và tròn vị hơn, hợp để gọi thêm khi muốn dải maki đủ đầy hơn.",
          badge: "Dễ gọi",
          imageId: "10",
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
