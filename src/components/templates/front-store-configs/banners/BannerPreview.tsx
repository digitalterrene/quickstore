"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { templates } from "./templates";

export default function BannerPreview({
  frontStoreConfigInputs,
}: {
  frontStoreConfigInputs: any;
}) {
  const [ActiveTemplate, setActiveTemplate] = useState<ReactNode>(() => {
    const matchedTemplate = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigInputs?.template_name
    );
    return matchedTemplate?.template || null;
  });
  useEffect(() => {
    const matchedTemplate = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigInputs?.template_name
    );
    setActiveTemplate(matchedTemplate?.template || null);
  }, [templates, frontStoreConfigInputs]);
  return <div className="w-full">{ActiveTemplate}</div>;
}
