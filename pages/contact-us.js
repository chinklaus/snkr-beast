import { useRouter } from 'next/router';
import Layout from '@/layout';
import PageHeading from '@/components/page-heading';
import { getStaticPage, queries } from '@/data';

function ContactUs({ data }) {
  const router = useRouter();
  const { page, site } = data;
  return (
    <>
      <Layout siteData={site} pageData={page}>
        <div className="contact-page">
          <PageHeading pageTitle={page.heading} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = {}, previewData }) {
  const pageData = await getStaticPage(
    `
    *[_type == "page" && slug.current == 'contact-us'] | order(_updatedAt desc)[0]{
      hasTransparentHeader,
      heading,
      modules[]{
        ${queries.modules}
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

export default ContactUs;
