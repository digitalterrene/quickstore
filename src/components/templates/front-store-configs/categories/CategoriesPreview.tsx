"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { templates } from "./templates";
import { useFrontStoreCategoriesConfig } from "@/context/front-store-configs";

export default function CategoriesPreview({
  frontStoreConfigInputs,
}: {
  frontStoreConfigInputs: any;
}) {
  console.log({ frontStoreConfigInputs });
  const { setFrontStoreConfigCategoriesInputs } =
    useFrontStoreCategoriesConfig();
  const [ActiveTemplate, setActiveTemplate] = useState<any>(() => {
    const matchedTemplate = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigInputs?.template_name
    );
    return matchedTemplate?.template || null;
  });
  useEffect(() => {
    setFrontStoreConfigCategoriesInputs(frontStoreConfigInputs);
    const matchedTemplate: any = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigInputs?.template_name
    );
    setActiveTemplate(matchedTemplate?.template || null);
  }, [templates, frontStoreConfigInputs]);
  return <div>{ActiveTemplate}</div>;
}
