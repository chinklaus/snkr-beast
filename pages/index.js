import { useRouter } from 'next/router';
import { getStaticPage, queries } from '@/data';
import Layout from '@/layout';
import HomePage from '@/container/home-page';

function IndexPage({ data }) {
  const { page, site } = data;

  return (
    <>
      <Layout siteData={site} pageData={page}>
        <HomePage mainData={page} />
      </Layout>
      <style jsx>{`
        .page-home {
          position: relative;
        }
        .c-3 {
          h1 {
            text-align: center;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ preview = {}, previewData }) {
  const pageData = await getStaticPage(
    `*[_type == "page" && _id == ${queries.homeID}] | order(_updatedAt desc)[0]{
      hasTransparentHeader,
      pageHome {
        ...,
          heroSection {
            ...,
            photos{
              desktopPhoto {
              ...,
              ${queries.imageMeta}
            }     
          }  
        },
      },     
      title,
      seo
    }
  `,
    {
      active: preview,
      token: previewData?.token,
    }
  );

  return {
    props: {
      preview,
      data: pageData,
    },
  };
}

export default IndexPage;
