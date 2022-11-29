import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { useCompanyMetadata } from "../hooks/useCompanyMetadata";
import { Navbar } from "../components/Navbar";
import { Layout } from "../components/Layout";
import "../styles/index.scss";
import { Hero } from "../components/Hero";
const IndexPage: React.FC<PageProps> = () => {
  const { contentfulLandingPage } = useStaticQuery(
    graphql`
      query {
        contentfulLandingPage {
          heroHeading
          heroSubTitle
          heroImage {
            url
          }
        }
      }
    `
  );
  const { heroImage, heroHeading, heroSubTitle } = contentfulLandingPage;
  return (
    <Layout>
      <main
        style={{
          height: "60vh",
        }}
        className="container"
      >
        <Hero
          heroHeading={heroHeading}
          heroSubTitle={heroSubTitle}
          heroImage={heroImage.url}
        />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { name } = useCompanyMetadata();
  return <title>{name} - Home Page</title>;
};
