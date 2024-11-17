import HeroPreview from "@/components/templates/front-store-configs/heros/HeroPreview";
import React from "react";

export default function StoreHero({ hero }: any) {
  console.log({ hero });
  return (
    <div>
      <HeroPreview frontStoreConfigHeroInputs={hero} />
    </div>
  );
}
