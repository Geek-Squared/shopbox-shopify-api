-- CreateTable
CREATE TABLE "ShopifyMerchant" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "storeSlug" TEXT,
    "storeName" TEXT,
    "whatsappConnected" BOOLEAN NOT NULL DEFAULT false,
    "whatsappNumber" TEXT,
    "whatsappPhoneId" TEXT,
    "whatsappToken" TEXT,
    "instagramConnected" BOOLEAN NOT NULL DEFAULT false,
    "instagramToken" TEXT,
    "instagramAccountId" TEXT,
    "messengerConnected" BOOLEAN NOT NULL DEFAULT false,
    "messengerToken" TEXT,
    "messengerPageId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "installedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uninstalledAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShopifyMerchant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopifyMerchant_shop_key" ON "ShopifyMerchant"("shop");

-- CreateIndex
CREATE INDEX "ShopifyMerchant_shop_idx" ON "ShopifyMerchant"("shop");
