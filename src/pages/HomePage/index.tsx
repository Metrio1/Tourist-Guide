import Hero from '../../components/Hero/Hero';
import PopularPlaces from '../../components/PopularPlaces/PopularPlaces';
import Gallery from '../../components/Gallery/Gallery';
import About from '../../components/About/About';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularPlaces />
      <Gallery />
      <About />
    </>
  );
}
