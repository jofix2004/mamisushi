# UI Spec Landing Page Sushi

## 1. Pham vi

Tai lieu nay la handoff UI de chuyen sang code giao dien cho landing page sushi.

No duoc viet dua tren:

- `sushi-landing-brief.md`
- `sushi-landing-direction.md`
- `sushi-landing-sitemap-wireframe.md`
- `sushi-landing-copywriting.md`
- `taste-skill-main/taste-skill/SKILL.md`

## 2. Gia dinh implementation

### Hien trang workspace

- Chua co `package.json`
- Chua co app scaffold
- Chua co cau truc `app/`, `src/`, `components/`

### Gia dinh de code

Do workspace chua co scaffold frontend, UI spec nay mac dinh theo quy tac trong `SKILL.md`:

- Next.js + React + TypeScript
- App Router
- Tailwind CSS
- Server Components lam khung layout
- Client Components chi dung cho motion, form, hover physics, va sticky CTA

### Dependency policy

Truoc khi import bat ky package nao, phai kiem tra `package.json`.

Candidate packages cho implementation:

- `framer-motion`
- `@phosphor-icons/react`
- Font qua `next/font`

Neu package chua ton tai, moi duoc de xuat lenh cai dat trong luc code. Tai lieu nay khong mac dinh package da co san.

## 3. Quy chuan bat buoc tu SKILL.md

## Visual

- Khong dung `Inter`
- Khong dung emoji
- Khong dung pure black `#000000`
- Khong dung glow tim/xanh kieu AI
- Chi 1 accent color ro rang
- Khong lam hero centered generic
- Khong dung 3 cot card bang nhau cho feature/combo

## Layout

- Dung `max-w-[1400px] mx-auto` hoac `max-w-7xl mx-auto`
- Khong dung `h-screen`
- Hero phai dung `min-h-[100dvh]`
- Desktop cho phep layout lech
- Mobile phai roi ve 1 cot gon gang

## Motion

- Chi animate `transform` va `opacity`
- Khong animate `top`, `left`, `width`, `height`
- Khong dung `window.addEventListener('scroll')`
- Neu dung Framer Motion, parent va child cho stagger phai o cung mot client tree
- Motion phai la diem nhan, khong show ky thuat qua muc

## Architecture

- Layout page o Server Components
- Motion nho, hover, sticky CTA, reservation form o Client Components la
- Khong nhet state toan cuc neu chua can

## 4. Huong giao dien tong the

### Tinh cach visual

- Sang
- Sach
- Nhat hien dai
- Tre nhung khong lo
- Dep mat va de an

### Cam giac can tao

- Mon len dep
- Khong gian thiet ke gon gang
- Gia de tiep can nhung khong re tien ve mat hinh anh
- Combo la diem de ra quyet dinh nhanh

### Nguyen tac bo cuc

- Visual dan duong, text giai thich
- Khoang tho lon
- It nhung dung accent do dung cho
- Divider mong, negative space la chinh
- Surface dung co cap bac, khong card hoa moi thu

## 5. Design Tokens

## 5.1 Mau sac

Dung 1 bang mau duy nhat xuyen suot trang.

```css
:root {
  --bg: #faf7f2;
  --surface: #ffffff;
  --surface-soft: #f4efe8;
  --ink: #1a1715;
  --ink-soft: #6a625c;
  --line: #e6ddd3;
  --accent: #c64532;
  --accent-deep: #983223;
  --accent-soft: #f3d9d3;
  --success: #315f4a;
  --error: #a3392f;
}
```

### Nguyen tac dung mau

- Nen chinh: `--bg`
- Surface card / panel: `--surface`
- Border / divider: `--line`
- Text chinh: `--ink`
- Text phu: `--ink-soft`
- Accent duy nhat: `--accent`
- Gia combo, CTA chinh, badge noi bat dung `--accent`

## 5.2 Typography

### Font pairing de xuat

- Headline / display: `Outfit`
- Body / UI text: `Geist`

Neu `Outfit` khong phu hop khi code, uu tien `Geist` hoac `Cabinet Grotesk`. Khong dung `Inter`.

### Scale

- H1: `text-4xl md:text-6xl tracking-tighter leading-none`
- H2: `text-3xl md:text-5xl tracking-tight leading-tight`
- H3: `text-xl md:text-2xl tracking-tight`
- Body: `text-base leading-relaxed`
- Body nho: `text-sm leading-6`
- Label / eyebrow: `text-[11px] md:text-xs uppercase tracking-[0.22em]`

### Nguyen tac

- Khong lam H1 qua khong lo
- Headline uu tien trong, chat va gon
- Paragraph toi da ~65 ky tu mot dong tren desktop

## 5.3 Radius, border, shadow

```css
:root {
  --radius-panel: 2rem;
  --radius-card: 1.5rem;
  --radius-pill: 999px;
  --shadow-panel: 0 20px 40px -20px rgba(80, 53, 39, 0.08);
  --shadow-card: 0 14px 30px -18px rgba(80, 53, 39, 0.1);
}
```

### Nguyen tac surface

- Panel lon: `rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)]`
- Card mon/combo: `rounded-[1.5rem]`
- Shadow rat nhe, tint am, khong glow

## 5.4 Khoang cach

- Section ngang: `px-4 md:px-8 xl:px-12`
- Section doc: `py-20 md:py-28`
- Khoang cach giua cac section: uu tien 0, tach bang rhythm noi bo
- Gap module lon: `gap-8 md:gap-12`
- Gap item nho: `gap-3 md:gap-4`

## 6. Page Architecture

## 6.1 Cau truc file de xuat

```text
app/
  page.tsx
  globals.css

components/
  landing/
    landing-shell.tsx
    landing-header.tsx
    hero-section.tsx
    hero-sushi-cluster.client.tsx
    brand-pillars.tsx
    featured-menu-section.tsx
    featured-menu-rail.client.tsx
    combo-section.tsx
    combo-stack.client.tsx
    menu-explorer-section.tsx
    menu-group-rail.client.tsx
    reservation-section.tsx
    reservation-form.client.tsx
    floating-reserve-cta.client.tsx
    site-footer.tsx
    primitives/
      section-heading.tsx
      pill-badge.tsx
      text-button.tsx
      price-lockup.tsx
      input-field.tsx
      textarea-field.tsx
```

## 6.2 Phan bo Server / Client

### Server Components

- `app/page.tsx`
- `landing-shell.tsx`
- `hero-section.tsx`
- `brand-pillars.tsx`
- `featured-menu-section.tsx`
- `combo-section.tsx`
- `menu-explorer-section.tsx`
- `reservation-section.tsx`
- `site-footer.tsx`

### Client leaf components

- `hero-sushi-cluster.client.tsx`
- `featured-menu-rail.client.tsx`
- `combo-stack.client.tsx`
- `menu-group-rail.client.tsx`
- `reservation-form.client.tsx`
- `floating-reserve-cta.client.tsx`

## 7. Data Shape de code UI

```ts
type PromoLine = {
  id: string;
  text: string;
};

type FeaturedItem = {
  id: string;
  name: string;
  description: string;
  badge?: string;
  asset: string;
  price?: string;
};

type ComboItem = {
  id: string;
  name: string;
  audience: string;
  description: string;
  details: string;
  price: string;
  badge?: string;
  asset: string;
  items: string[];
};

type MenuItem = {
  id: string;
  name: string;
  description: string;
  badge?: string;
  asset: string;
  price?: string;
};

type MenuGroup = {
  id: string;
  title: string;
  description: string;
  priceFrom?: string;
  items: MenuItem[];
};

type Branch = {
  id: string;
  name: string;
  address: string;
  openHours: string;
  tags: string[];
  mapUrl?: string;
  isFeatured?: boolean;
};
```

## 8. Section Spec

## 8.1 Hero

### Muc tieu

- Tao first impression bang visual sushi 3D that
- The hien brand ngay lap tuc
- Day xuong combo / menu

### Layout

- Wrapper: `min-h-[100dvh]`
- Grid desktop: `grid-cols-12`
- Text zone: `col-span-5`
- Asset zone: `col-span-7`
- Mobile: 1 cot, text len truoc, asset theo sau

### Cac thanh phan

- Minimal header
- Eyebrow
- H1
- Doan mo ta ngan
- CTA group 2 nut
- Scroll cue
- 3D sushi cluster ben phai

### Header spec

- Trai: wordmark text
- Phai: `Dat ban` button
- Header khong sticky
- Padding nhe, khong lay dien tich hero

### Text spec

- Eyebrow width ngan, chu hoa, mau muted
- H1 toi da 3 dong tren desktop
- Paragraph rong toi da `max-w-[34rem]`
- CTA group khong qua 2 nut

### CTA style

- Primary: nen accent do, text sang, radius pill
- Secondary: border line, bg trong suot, text ink
- Hover: nhe, tactile `-translate-y-[1px]`

### Asset spec

- 1 mon sushi chinh chiem 55-65% chieu rong asset zone
- 2-3 asset phu nho hon 28-36%
- Asset chong lop bang `position: absolute`
- Shadow nhe ben duoi asset
- Khong dung nen gradient manh sau asset

### Motion

- Float loop rat nhe cho asset chinh
- Parallax nhe theo cursor hoac pointer chi trong client leaf
- Asset phu delay stagger vao viewport

### Accessibility

- H1 dung mot lan duy nhat tren trang
- CTA du area chon tren mobile
- Asset decorative co the `aria-hidden="true"` neu khong mang thong tin

## 8.2 Brand / Y tuong

### Muc tieu

- Giai thich dinh vi ngan gon
- Tranh cai nhin qua sang trong
- Tao nhiep dieu sau hero

### Layout

- Desktop: 2 cot lech, 4/8 hoac 5/7
- Cot trai: section heading + mo ta mo dau
- Cot phai: 4 pillar block xep so le, khong card grid deu
- Mobile: xep doc

### Cac thanh phan

- Section eyebrow
- H2
- Intro paragraph
- 4 pillar block

### Pillar block spec

- Khong dung card nang
- Moi block la 1 row hoac panel nhe voi border top
- Tieu de 1 dong
- Body toi da 2 dong
- Co the chen mot accent rule do 2px

### Motion

- Stagger reveal nhe khi section vao viewport
- Accent line mo rong nhe khi block active

## 8.3 Menu Noi Bat / Khuyen Mai Nhanh

### Muc tieu

- Cho ly do de nguoi dung o lai
- Dua featured items va promo vao cung mot vung

### Layout

- Desktop: khung 2 phan
- Ben trai: featured rail rong hon
- Ben phai: promo panel hep hon
- Ti le de xuat: `7/5`
- Mobile: promo panel len tren, rail o duoi

### Featured rail spec

- Horizontal rail co chu y, duoc phep scroll ngang
- Item card theo ti le dung, uu tien asset area lon
- Khong dung 3 card bang nhau can hang truc
- Item card rong de xuat: `min-w-[18rem] md:min-w-[22rem]`

### Item card structure

- Badge
- Asset window
- Ten mon
- 1 dong mo ta
- CTA text nho

### Promo panel spec

- Nen la panel lon co border + shadow nhe
- Chua 3 dong promo
- Co 1 nut `Xem tat ca combo`
- Price neu co chi hien o muc promo/combo, khong day vao item card

### Motion

- Rail reveal theo stagger
- Hover tilt nhe cho asset container
- Promo panel co pulse rat nhe o accent badge, khong flash

### States

- Loading: skeleton tiles theo dung kich thuoc
- Empty: panel thong bao `Menu noi bat dang duoc cap nhat`

## 8.4 Combo Section

### Muc tieu

- Day chuyen doi manh nhat
- Lam combo tro thanh anchor gia va hanh dong

### Layout

- Desktop: 1 combo hero lon + 2 combo phu xep dung hoac lech
- Khong dung 3 card dong hang bang nhau
- Ti le de xuat:
  combo chinh `7/12`
  cot phu `5/12`
- Mobile: stack doc theo thu tu uu tien

### Combo hero card

- Asset lon ben phai hoac tren
- Ten combo, badge doi tuong, mo ta, gia, CTA ben trai hoac duoi
- Price lockup phai la diem nhin so 2 sau asset

### Combo phu

- Nho hon 1 cap
- Thong tin ngan hon
- Gia van ro

### UI details

- Badge doi tuong o dau card
- Gia dung size lon hon body ro rang 1 cap
- CTA chinh dung accent
- Danh sach mon trong combo toi da 4-5 item

### Motion

- Card active hover `translate-y` rat nhe
- Shared entrance choreography neu dung Framer Motion
- Khong dùng carousel neu desktop; chi can stack bat doi xung

### States

- Loading: skeleton cho 1 card lon + 2 card nho
- Empty: hien thong diep + CTA xem menu

## 8.5 Full Menu Explorer

### Muc tieu

- Cho phep xem gan full menu ma van dep va co cap bac

### Layout

- Moi nhom mon la 1 row rieng
- Desktop row: text column `3/12`, rail column `9/12`
- Mobile: text stack tren, rail duoi

### Group header

- H3
- 1 doan mo ta ngan
- Dong `Tu ...`
- Divider mong o tren

### Group rail

- Scroll ngang co chu y
- Moi item la 1 tile co asset lon, text ngan
- So item tren viewport desktop: 2.2 -> 3.2 item de tao cam giac tiep tuc
- Mobile: 1.1 -> 1.4 item

### Menu item tile

- Asset area chiem 65-70% chieu cao tile
- Nen trong, shadow nhe, border mong
- Text area compact
- Gia item chi la phu

### Motion

- Hover parallax nhe cho asset
- Scroll reveal theo nhom
- Khong auto-scroll vo hanh vi la menu can dung duoc

### States

- Loading: skeleton rail theo group
- Empty: group an di neu khong co data

## 8.6 Dat Ban + Chi Nhanh

### Muc tieu

- Chot hanh dong cuoi
- Hien form gon va de gui

### Layout

- Desktop: 2 cot `7/5`
- Trai: reservation form
- Phai: chi nhanh noi bat + quick actions
- Mobile: form -> branch -> quick actions

### Reservation form spec

- Labels nam tren input
- Moi field trong 1 block `gap-2`
- Inputs bo tron mem, border line, bg surface
- Error text nam duoi field
- Helper text hien nhe
- CTA submit full width tren mobile

### Fields

- Ho ten
- So dien thoai
- So nguoi
- Ngay
- Gio
- Chi nhanh
- Ghi chu

### Validation UI

- Border error doi mau do dam
- Error text size nho
- Khong show error truoc khi user tuong tac

### Chi nhanh block

- Card noi bat nhung van gon
- Ten chi nhanh
- Dia chi ngan
- Gio mo cua
- 2-3 tag
- Nut `Chi duong`

### Quick actions

- `Goi nhanh`
- `Nhan Zalo`
- `Nhan Messenger`

Quick actions nen la 3 nut ngang desktop, 3 nut doc hoac 2+1 tren mobile tuy chieu rong.

### States

- Loading submit
- Success inline
- Error inline

## 8.7 Footer

### Muc tieu

- Ket trang gon
- Van de lai du thong tin can thiet

### Layout

- Desktop: 2 cum chinh
- Trai: wordmark + brand line
- Phai: quick links + social
- Mobile: stack doc

### UI details

- Border-top mong
- Padding rong
- Khong them qua nhieu legal clutter neu khong can

## 9. Shared Components Spec

## 9.1 SectionHeading

### Props

- `eyebrow?: string`
- `title: string`
- `description?: string`
- `align?: "left" | "split"`
- `cta?: ReactNode`

### UI

- Eyebrow nho, uppercase
- Title tracking tight
- Description width co gioi han

## 9.2 PillBadge

### Props

- `label: string`
- `tone?: "accent" | "neutral" | "soft"`

### UI

- Height nho
- Radius pill
- Accent dung tiet che

## 9.3 MenuItemCard

### Props

- `item: MenuItem | FeaturedItem`
- `variant?: "featured" | "menu"`

### UI

- Asset wrapper
- Title
- Description
- Optional price
- Optional badge

## 9.4 ComboCard

### Props

- `combo: ComboItem`
- `variant?: "hero" | "secondary"`

### UI

- Badge audience
- Title
- Description
- Price lockup
- CTA

## 9.5 InputField / TextareaField

### Props

- `label`
- `placeholder`
- `helperText?`
- `error?`
- `required?`

### UI

- Label o tren
- Border, helper, error theo mau token

## 10. Motion Spec

## 10.1 Thu vien

- Neu co `framer-motion`, dung cho leaf interactive components
- Neu chua co, fallback bang CSS transitions + `@keyframes` rat nhe
- Khong ket hop GSAP/ThreeJS trong cung component tree voi Framer Motion

## 10.2 Ngon ngu chuyen dong

- Entrance: opacity + y tu 12px -> 0
- Hover: scale 1.01 hoac `-translate-y-[1px]`
- Float: 4-8px tren truc Y
- Parallax: translate rat nhe theo pointer, toi da 8-12px

## 10.3 Spring de xuat

```ts
const spring = { type: "spring", stiffness: 100, damping: 20 };
```

## 10.4 Muc motion theo component

- Hero asset cluster: float lien tuc + parallax nhe
- Featured item cards: hover tilt nhe
- Combo cards: hover lift nhe
- Sticky reserve CTA: slide-in + fade-in khi qua hero
- Form success: fade-in + y nhe

## 10.5 Reduced motion

- Ton trong `prefers-reduced-motion`
- Tat float loop
- Giu lai opacity transitions toi thieu hoac bo hoan toan

## 11. Responsive Spec

## Breakpoints

- Mobile: `< 768px`
- Tablet: `md`
- Desktop: `lg` tro len

## Rules

- Moi layout bat doi xung tren desktop phai sap ve 1 cot tren mobile
- Khong de horizontal overflow, tru cac rail chu dich
- CTA group tren mobile uu tien xep doc neu thieu chieu ngang
- Asset 3D khong duoc che text o mobile
- Form nut submit full width tren mobile

## Container

- Page shell: `max-w-[1400px] mx-auto`
- Inner section co padding biên an toan

## 12. Accessibility Spec

- Headings theo hierarchy: `h1` -> `h2` -> `h3`
- Buttons va links co focus ring ro
- Contrast dat muc tot tren nen sang
- Alt text chi viet khi asset mang nghia noi dung; asset decor de `aria-hidden`
- Form co label that, khong chi placeholder
- Success / error thong bao co `aria-live`

## 13. Loading / Empty / Error States

## Loading

- Khong dung spinner tron lam state chinh
- Dung skeleton block theo dung layout

## Empty

- Featured/combo/menu nhom nao khong co data thi an hoac show empty state ngan

## Error

- Reservation form hien loi inline
- Neu menu/promotions fail, show panel thong diep + CTA thay the

## 14. Asset Spec cho 3D sushi

### Dinh dang uu tien

- `webp` hoac `png` nen trong suot
- Co the them `avif` neu pipeline ho tro

### Nguyen tac render

- Goc nhin nhat quan
- Do bong va shadow dong nhat
- Nguon sang nhat quan
- Tranh chat lieu qua bong gay cam giac do choi

### Kich thuoc de xuat

- Hero asset chinh: canh dai 1400-1800px
- Asset phu: 800-1200px
- Menu/combo assets: 700-1000px

### Naming

- `sushi-hero-main.webp`
- `sushi-hero-side-01.webp`
- `combo-friends-table.webp`
- `maki-salmon.webp`

## 15. Cac class utility / conventions de xuat

### Shell

- `bg-[color:var(--bg)] text-[color:var(--ink)]`
- `selection:bg-[color:var(--accent-soft)]`

### Section panel

- `rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[var(--shadow-panel)]`

### Sub card

- `rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[var(--shadow-card)]`

### Button primary

- `inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white transition-transform duration-300`

### Button secondary

- `inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-transparent px-5 py-3 text-sm font-medium text-[color:var(--ink)]`

## 16. Thu tu implementation de xuat

1. Dung shell page + tokens + typography
2. Code Hero + Header + sticky CTA
3. Code Brand / Y tuong
4. Code Featured + Promo
5. Code Combo
6. Code Full Menu Explorer
7. Code Reservation + Branch block
8. Code Footer
9. Them motion nhe sau khi layout on dinh
10. Bo sung loading / empty / error states

## 17. Pre-code Checklist

- Xac nhan stack thuc te
- Tao `package.json`
- Kiem tra Tailwind version truoc khi viet syntax
- Xac nhan font se dung
- Xac nhan co can `framer-motion` va `@phosphor-icons/react` hay khong
- Chot asset 3D co san hay dung placeholder
- Chot ten brand tam thoi de layout khong bi rong

## 18. Pham vi khong nam trong UI spec nay

- Logo final
- Brand guideline day du
- Backend dat ban
- CMS hoac quan ly menu
- San xuat asset 3D thuc te

Tai lieu nay chi tap trung de chuyen tu brief sang code giao dien mot cach co he thong va dung huong.
