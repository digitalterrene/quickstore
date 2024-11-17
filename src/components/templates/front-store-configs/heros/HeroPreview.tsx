"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { DesktopDevice } from "../devices/DesktopDevice";
import { templates } from "./templates";
import { useFrontStoreHeroConfig } from "@/context/front-store-configs";

export default function HeroPreview({
  frontStoreConfigHeroInputs,
}: {
  frontStoreConfigHeroInputs?: any;
}) {
  const { setFrontStoreConfigHeroInputs } = useFrontStoreHeroConfig();
  const [ActiveTemplate, setActiveTemplate] = useState<ReactNode>(() => {
    const matchedTemplate = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigHeroInputs?.template_name
    );
    return matchedTemplate?.template || null;
  });
  useEffect(() => {
    setFrontStoreConfigHeroInputs(frontStoreConfigHeroInputs);
    const matchedTemplate = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigHeroInputs?.template_name
    );
    setActiveTemplate(matchedTemplate?.template || null);
  }, [templates, frontStoreConfigHeroInputs]);
  return <div>{ActiveTemplate}</div>;
}
