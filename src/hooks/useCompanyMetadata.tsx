import { useStaticQuery, graphql } from "gatsby";

export const useCompanyMetadata = () => {
  const { contentfulCompanyInfo } = useStaticQuery(
    graphql`
      query {
        contentfulCompanyInfo {
          name
          logo {
            url
          }
        }
      }
    `
  );

  return {
    name: contentfulCompanyInfo.name,
    imageUrl: contentfulCompanyInfo.logo.url,
  };
};
