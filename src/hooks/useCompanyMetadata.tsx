import { useStaticQuery, graphql } from "gatsby";

export const useCompanyMetadata = () => {
  const { contentfulCompanyInfo } = useStaticQuery(
    graphql`
      query {
        contentfulCompanyInfo {
          name
        }
      }
    `
  );

  return {
    name: contentfulCompanyInfo.name,
  };
};
