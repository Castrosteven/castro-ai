import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { useCompanyMetadata } from "../hooks/useCompanyMetadata";
import { Navbar } from "../components/Navbar";
import { Layout } from "../components/Layout";
import "../styles/index.scss";
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
    <Layout>
      <main className="container">
        <div>
          <p>INSERT LANDING PAGE HERE</p>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { name } = useCompanyMetadata();
  return <title>{name} - Home Page</title>;
};
