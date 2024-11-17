"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { templates } from "./templates";
import { useFrontStoreNavbarConfig } from "@/context/front-store-configs";

export default function NavbarPreview({
  frontStoreConfigNavbarInputs,
}: {
  frontStoreConfigNavbarInputs?: any;
}) {
  const { setFrontStoreConfigNavbarInputs } = useFrontStoreNavbarConfig();
  console.log({ frontStoreConfigNavbarInputs });
  const [ActiveTemplate, setActiveTemplate] = useState<ReactNode>(() => {
    const matchedTemplate = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigNavbarInputs?.template_name
    );
    return matchedTemplate?.template || null;
  });
  useEffect(() => {
    setFrontStoreConfigNavbarInputs(frontStoreConfigNavbarInputs);
    const matchedTemplate = templates?.find(
      (template_element) =>
        template_element?.template_name ===
        frontStoreConfigNavbarInputs?.template_name
    );
    setActiveTemplate(matchedTemplate?.template || null);
  }, [templates, frontStoreConfigNavbarInputs]);

  return <div>{ActiveTemplate}</div>;
}
