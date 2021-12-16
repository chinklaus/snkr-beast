import Freeform from '@/components/freeform';
import { getStaticPage, queries } from '@/data';
import PageHeading from '@/components/page-heading';
import Layout from '@/layout';
import Photo from '@/components/photo';

function AboutUs({ data }) {
  const { page, site } = data;
  const block = page.pageInfo;

  return (
    <>
      <Layout siteData={site} pageData={page}>
        <div className="about-page">
          <PageHeading pageTitle={page.heading} />
          <div className="c-2">
            {page.bannerImage && (
              <Photo
                photo={page.bannerImage.photo}
                srcSizes={[800, 1000, 1200, 1600]}
                sizes="100vw"
              />
            )}
            {block && <Freeform data={block} classes="content-layout" />}
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .about-page {
          min-height: 80vh;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ preview = {}, previewData }) {
  const pageData = await getStaticPage(
    `*[_type == "page" && slug.current == 'about-us'] | order(_updatedAt desc)[0]{
       ...,
       "bannerImage": pageAbout["bannerImage"]{
         photo {
              ...,
              ${queries.imageMeta}
            }       
       },
       "pageInfo": pageAbout["pageInfo"]               
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

export default AboutUs;
