import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const { contentfulLandingPage } = useStaticQuery(
    graphql`
      query {
        contentfulLandingPage {
          title
        }
      }
    `
  );
  const { title } = contentfulLandingPage;
  return (
    <main>
      <div>{title}</div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
