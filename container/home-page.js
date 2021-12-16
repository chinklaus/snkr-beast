import Photo from '@/components/photo';

export default function HomePage({ mainData }) {
  const { title, pageHome } = mainData;
  return (
    <>
      <div className="home-page">
        <Photo
          photo={pageHome.heroSection.photos.desktopPhoto}
          srcSizes={[800, 1000, 1200, 1600]}
          sizes="100vw"
        />
      </div>
      <style jsx>{`
        .home-page {
          min-height: 100vh;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
