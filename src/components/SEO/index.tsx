import React from "react";
import { useCompanyMetadata } from "../../hooks/useCompanyMetadata";
import type { HeadProps } from "gatsby";
export const SEO = (props: HeadProps) => {
  const { name } = useCompanyMetadata();
  return <div>hello</div>;
};
