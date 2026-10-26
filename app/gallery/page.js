import Header from '../../components/Header';
import Footer from '../../components/Footer';

const gallery = [
  ['gallery-21.jpg', 'Warm living spaces'],
  ['gallery-19.jpg', 'Contemporary bedroom'],
  ['living-residential.jpg', 'Residential interiors'],
  ['gallery-17.jpg', 'Smart storage design'],
  ['gallery-18.jpg', 'Home office styling'],
  ['gallery-20.jpg', 'Built-in craftsmanship'],
  ['gallery-25.jpg', 'Living room details'],
  ['gallery-12.jpg', 'Material and light'],
  ['living-commercial.jpg', 'Commercial interiors'],
  ['gallery-10.jpg', 'Refined finishes'],
  ['gallery-13.jpg', 'Custom cabinetry'],
  ['gallery-14.jpg', 'Bedroom details'],
];

export const metadata = {
  title: 'Gallery | Grand Space Interiors',
  description: 'Selected residential and commercial interior design projects by Grand Space Interiors.',
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="gallery-page">
        <div className="container">
          <p className="gallery-kicker">SELECTED WORK</p>
          <h1 className="gallery-title">A collection of spaces<br />made to feel like home.</h1>
          <div className="gallery-grid">
            {gallery.map(([src, title]) => (
              <figure className="gallery-item" key={src}>
                <img src={`/images/${src}`} alt={title} />
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
