zwshop/
├── app/                          ← Next.js App Router
│   ├── (auth)/
│   │   ├── login/page.tsx        ← Seller login
│   │   └── register/page.tsx     ← Seller registration
│   ├── (seller)/
│   │   ├── dashboard/page.tsx    ← Seller home
│   │   ├── products/page.tsx     ← Product management
│   │   ├── orders/page.tsx       ← Order management
│   │   ├── plugins/page.tsx      ← Plugin marketplace
│   │   └── settings/page.tsx     ← Store settings
│   ├── (admin)/
│   │   └── admin/page.tsx        ← Your admin panel
│   ├── store/
│   │   └── [slug]/page.tsx       ← Public storefront
│   ├── api/
│   │   ├── auth/
│   │   │   ├── register/route.ts
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── otp/route.ts
│   │   ├── sellers/
│   │   │   ├── route.ts          ← GET/PUT seller profile
│   │   │   └── [id]/route.ts
│   │   ├── products/
│   │   │   ├── route.ts          ← GET all / POST new
│   │   │   └── [id]/route.ts     ← GET/PUT/DELETE one
│   │   ├── orders/
│   │   │   ├── route.ts          ← GET all / POST new
│   │   │   └── [id]/route.ts     ← GET/PUT one
│   │   ├── payments/
│   │   │   ├── initiate/route.ts ← Start payment
│   │   │   ├── verify/route.ts   ← Verify payment
│   │   │   └── webhook/route.ts  ← Paynow webhook
│   │   ├── whatsapp/
│   │   │   ├── webhook/route.ts  ← Receive WA messages
│   │   │   └── send/route.ts     ← Send WA messages
│   │   ├── plugins/
│   │   │   ├── route.ts          ← List plugins
│   │   │   └── delivery/
│   │   │       ├── route.ts      ← Delivery plugin
│   │   │       └── riders/route.ts
│   │   └── store/
│   │       └── [slug]/route.ts   ← Public store data
│   └── layout.tsx
│
├── components/
│   ├── seller/
│   │   ├── Sidebar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── OrderCard.tsx
│   │   └── StatsCard.tsx
│   ├── storefront/
│   │   ├── ProductGrid.tsx
│   │   ├── CartDrawer.tsx
│   │   └── CheckoutForm.tsx
│   └── ui/                       ← Shared UI components
│
├── lib/
│   ├── db.ts                     ← PostgreSQL connection
│   ├── auth.ts                   ← JWT helpers
│   ├── whatsapp.ts               ← WhatsApp Cloud API
│   ├── paynow.ts                 ← Paynow payment gateway
│   ├── innbucks.ts               ← InnBucks integration
│   ├── bot/
│   │   ├── engine.ts             ← Bot session manager
│   │   ├── handlers.ts           ← Message handlers
│   │   └── sessions.ts           ← User session state
│   └── plugins/
│       ├── engine.ts             ← Plugin hook system
│       └── delivery/
│           └── index.ts          ← Delivery plugin logic
│
├── types/
│   └── index.ts                  ← All TypeScript types
│
├── prisma/
│   └── schema.prisma             ← Database schema (Prisma ORM)
│
└── .env.local                    ← Environment variables
