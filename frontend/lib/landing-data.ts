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
  ingredients?: string;
  story?: string;
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
  ingredients?: string;
  story?: string;
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
    title: "Nami Sushi. Vừa vặn từng khoảnh khắc.",
    description:
      "Một điểm chạm hiện đại nơi hương vị, không gian và nhịp thưởng thức được điều chỉnh để hợp với lối sống trẻ: tự nhiên, thoải mái và đầy cảm hứng.",
    chips: [],
    primaryCta: {
      label: "Đặt bàn",
      href: "#reserve",
    },
    secondaryCta: {
      label: "Tìm hiểu thêm",
      href: "#featured",
    },
  } satisfies HeroContent,
  pillars: [
    {
      id: "anywhere",
      title: "Gọi món nhẹ tênh",
      description: "Menu gãy gọn, combo thiết kế sẵn giúp cả bàn chốt món cực nhanh không đắn đo.",
    },
    {
      id: "perfect-pair",
      title: "Đồng hành sở thích",
      description: "Miếng cuộn vừa miệng, cực kỳ hợp lý để nhâm nhi lúc cày phim hay nghe podcast.",
    },
    {
      id: "daily-routine",
      title: "Điểm hẹn thường nhật",
      description: "Không gian cởi mở, lý tưởng để rủ nhau ghé ngang sau giờ học hay giờ làm.",
    },
    {
      id: "just-right-price",
      title: "Chất lượng, hợp lý",
      description: "Tính trải nghiệm được tinh chỉnh không phô trương, hoàn toàn vừa vặn với túi tiền.",
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
      ingredients: "Tôm hấp · Cơm trộn giấm",
      story: "Miếng tôm ngọt tự nhiên nằm vừa vặn trên nắm cơm ấm. Không cần thêm gì, vì đơn giản đã là đủ.",
      imageId: "ebiNigiri",
    },
    {
      id: "tuna-nigiri",
      name: "Tuna Nigiri",
      badge: "Đậm vừa",
      description: "Rõ vị hơn một chút nhưng vẫn dễ ăn, hợp cho người muốn gọi thêm món cá đậm hơn.",
      ingredients: "Cá ngừ tươi · Cơm trộn giấm",
      story: "Lát cá ngừ đỏ au, mềm tan ngay đầu lưỡi. Vị umami đậm mà vẫn thanh, đủ để gây thương nhớ.",
      imageId: "tunaNigiri",
    },
    {
      id: "tamago-sushi",
      name: "Tamago Sushi",
      badge: "Mềm vị",
      description: "Nhẹ và dễ ăn, hợp để xen giữa các món cá đậm hơn.",
      ingredients: "Trứng cuộn Nhật · Cơm trộn giấm · Rong biển nori",
      story: "Lát trứng cuộn mịn, ngọt dịu theo kiểu Nhật truyền thống. Món nghỉ ngơi giữa những miếng cá đậm.",
      imageId: "tamago",
    },
    {
      id: "kani-sushi",
      name: "Kani Sushi",
      badge: "Dễ ăn",
      description: "Vị nhẹ và khá hợp khi đi cùng nhiều gu khác nhau.",
      ingredients: "Thanh cua Nhật · Cơm trộn giấm",
      story: "Thanh cua mềm, vị biển nhẹ nhàng. Món an toàn mà ai cũng gọi được, ai cũng thích.",
      imageId: "kani",
    },
    {
      id: "salmon-ikura",
      name: "Salmon Ikura",
      badge: "Điểm nhấn",
      description: "Mềm và rõ vị hơn, hợp để gọi thêm khi muốn bàn có một món nổi hơn.",
      ingredients: "Cá hồi tươi · Trứng cá hồi ikura · Cơm trộn giấm",
      story: "Cá hồi béo mịn kết hợp những hạt ikura tươi bung vỡ ngay khi chạm răng. Vừa sang vừa vui miệng.",
      imageId: "salmonIkura",
    },
    {
      id: "classic-maki",
      name: "Classic Maki",
      badge: "Gọn vị",
      description: "Gọn gàng, dễ gắp và rất hợp để chen giữa các món lẻ khi cả bàn muốn chia nhanh.",
      ingredients: "Cá hồi · Cơm trộn giấm · Rong biển nori · Dưa leo",
      story: "Cuộn tròn gọn gàng, nhân cá hồi tươi bên trong lớp cơm và nori giòn. Chia nhanh, ăn vui.",
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
          ingredients: "Cá hồi tươi · Cơm trộn giấm",
          story: "Salmon mềm béo lên miệng rất gọn, cơm giấm ôm vị vừa đủ để ai ăn cũng thấy dễ chịu.",
          imageId: "nigiri",
        },
        {
          id: "crab-stick-nigiri",
          name: "Crab Stick Nigiri",
          description: "Vị nhẹ và khá an toàn nếu muốn mở đầu bàn ăn bằng món dễ ăn.",
          badge: "Dễ chọn",
          ingredients: "Thanh cua Nhật · Cơm trộn giấm",
          story: "Thanh cua ngọt nhẹ, mềm và sạch vị; kiểu món mở màn không cần nghĩ nhiều vẫn ổn.",
          imageId: "crabStickNigiri",
        },
        {
          id: "amaebi-sushi",
          name: "Amaebi Sushi",
          description: "Nhẹ và thanh, hợp cho người thích vị dịu hơn một chút.",
          badge: "Nhẹ vị",
          ingredients: "Tôm ngọt sống · Cơm trộn giấm",
          story: "Tôm ngọt mượt, càng nhai càng rõ độ ngọt thanh và cảm giác mát đầu lưỡi.",
          imageId: "amaebi",
        },
        {
          id: "hotate-sushi",
          name: "Hotate Sushi",
          description: "Êm vị, dễ ăn và không bị ngấy.",
          badge: "Êm vị",
          ingredients: "Sò điệp Hokkaido · Cơm trộn giấm · Muối chanh",
          story: "Sò điệp béo êm, thơm vị biển rất nhẹ; một miếng là thấy bữa ăn dịu hẳn xuống.",
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
          ingredients: "Cá cam Nhật · Cơm trộn giấm · Gừng",
          story: "Cá cam béo vừa, sạch vị và sáng miệng; lên bàn là kiểu món kéo cả bàn vào nhịp ăn.",
          imageId: "hamachi",
        },
        {
          id: "hokkigai-sushi",
          name: "Hokkigai Sushi",
          description: "Rõ vị hơn một chút nhưng vẫn khá dễ ăn.",
          badge: "Rõ vị",
          ingredients: "Sò đỏ · Cơm trộn giấm",
          story: "Sò đỏ giòn nhẹ, vị biển rõ nhưng không gắt; càng nhai càng thấy vui miệng.",
          imageId: "hokkigai",
        },
        {
          id: "ika-sushi",
          name: "Ika Sushi",
          description: "Mát vị và hợp để xen giữa các món béo hơn.",
          badge: "Gọn vị",
          ingredients: "Mực tươi · Cơm trộn giấm · Gừng",
          story: "Mực tươi giòn nhẹ và mát vị, rất hợp để xen giữa những miếng cá béo hơn.",
          imageId: "ika",
        },
        {
          id: "maguro-sushi",
          name: "Maguro Sushi",
          description: "Đậm hơn một chút, hợp cho người thích vị cá rõ hơn.",
          badge: "Đậm vừa",
          ingredients: "Cá ngừ đại dương · Cơm trộn giấm",
          story: "Cá ngừ đậm umami, lên miệng gọn và chắc vị; dành cho người thích cảm giác rõ ràng.",
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
          ingredients: "Cá thu Nhật · Cơm trộn giấm · Gừng ngâm",
          story: "Cá thu béo đậm, thơm kiểu cá xanh nhưng vẫn gọn vị; ăn xong còn dư vị rất lâu.",
          imageId: "saba",
        },
        {
          id: "iwashi-sushi",
          name: "Iwashi Sushi",
          description: "Lạ miệng hơn một chút, hợp khi muốn đổi vị.",
          badge: "Lạ miệng",
          ingredients: "Cá mòi Nhật · Cơm trộn giấm · Hành lá · Gừng",
          story: "Cá mòi lên vị mạnh hơn, béo và mặn ngọt rõ rệt; hợp khi muốn đổi gu sang thứ cá tính hơn.",
          imageId: "iwashi",
        },
        {
          id: "tako-sushi",
          name: "Tako Sushi",
          description: "Ăn vui miệng và giúp bàn có thêm món khác kiểu.",
          badge: "Vui miệng",
          ingredients: "Bạch tuộc luộc · Cơm trộn giấm · Chanh",
          story: "Bạch tuộc giòn sần sật, nhai đã miệng và có chút tươi chanh kéo vị lại rất sạch.",
          imageId: "tako",
        },
        {
          id: "anago-sushi",
          name: "Anago Sushi",
          description: "Tròn vị, dễ hợp gu và khá đáng gọi nếu thích món đậm hơn.",
          badge: "Tròn vị",
          ingredients: "Lươn biển nướng · Cơm trộn giấm · Sốt unagi · Mè",
          story: "Lươn biển mềm, sốt unagi phủ ngọt đậm vừa phải; kiểu miếng chốt cuối rất chắc tay.",
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
          ingredients: "Cá hồi · Trứng cá tobiko · Cơm trộn giấm · Rong biển",
          story: "Cá hồi mềm béo đi cùng tobiko lách tách; vừa vui miệng vừa làm bàn ăn nổi hẳn lên.",
          imageId: "roeSalmon",
        },
        {
          id: "ikura-sushi",
          name: "Ikura Sushi",
          description: "Mặn nhẹ và rõ vị, hợp cho người thích món có trứng cá.",
          badge: "Rõ vị",
          ingredients: "Trứng cá hồi ikura · Cơm trộn giấm · Rong biển nori",
          story: "Ikura căng mọng, chạm răng là bật vị mặn ngọt mát lạnh rất rõ.",
          imageId: "ikura",
        },
        {
          id: "negitoro-sushi",
          name: "Negitoro Sushi",
          description: "Mềm và đậm vừa phải, hợp gọi thêm khi muốn đổi vị.",
          badge: "Mượt vị",
          ingredients: "Cá ngừ băm · Hành lá · Cơm trộn giấm · Rong biển",
          story: "Cá ngừ băm béo mượt, hành lá kéo vị tươi lên nên ăn rất cuốn mà không ngấy.",
          imageId: "negitoro",
        },
        {
          id: "inari-sushi",
          name: "Inari Sushi",
          description: "Mềm, ngọt nhẹ và là món khá dễ nhận ra trên bàn.",
          badge: "Dễ nhận ra",
          ingredients: "Đậu hũ chiên ngọt · Cơm trộn giấm · Mè rang",
          story: "Vỏ đậu hũ ngọt dịu ôm cơm mềm bên trong; êm, dễ ăn và lên bàn nhìn cũng rất duyên.",
          imageId: "inari",
        },
        {
          id: "unagi-sushi",
          name: "Unagi Sushi",
          description: "Đậm và tròn vị, hợp cho người muốn chốt thêm một món chắc tay.",
          badge: "Đậm vị",
          ingredients: "Lươn nước ngọt nướng · Sốt kabayaki · Cơm trộn giấm · Mè",
          story: "Lươn nướng thơm đậm, sốt kabayaki quấn vị ngọt mặn rất tròn; ăn một miếng là nhớ.",
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
          ingredients: "Dưa leo tươi · Cơm trộn giấm · Rong biển nori",
          story: "Dưa leo giòn mát, cuộn gọn và sạch vị; đúng kiểu món reset khẩu vị giữa bàn.",
          imageId: "kappaMaki",
        },
        {
          id: "avocado-roll",
          name: "Avocado Roll",
          description: "Mềm, dễ ăn và hợp cho người thích vị nhẹ.",
          badge: "Mềm gọn",
          ingredients: "Bơ chín · Cơm trộn giấm · Rong biển nori · Mè",
          story: "Bơ chín béo mượt, mềm nhưng không nặng; miếng cuộn dịu và rất dễ vào.",
          imageId: "avocado",
        },
        {
          id: "california-roll",
          name: "California Roll",
          description: "Dễ chia và khá hợp để gọi thêm cho cả bàn.",
          badge: "Dễ chia",
          ingredients: "Thanh cua · Bơ · Dưa leo · Trứng cá tobiko · Cơm · Nori",
          story: "Cua, bơ và dưa leo đi với nhau rất cân; cuộn này luôn là món gọi thêm dễ chốt nhất.",
          imageId: "california",
        },
        {
          id: "natto-roll",
          name: "Natto Roll",
          description: "Lạ miệng hơn một chút, hợp cho ai muốn thử vị khác.",
          badge: "Lạ vị",
          ingredients: "Đậu nành lên men natto · Cơm trộn giấm · Rong biển nori · Hành lá",
          story: "Natto dẻo kéo sợi, mùi vị lạ nhưng càng ăn càng ghiền; món dành cho người thích trải nghiệm thật sự.",
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
