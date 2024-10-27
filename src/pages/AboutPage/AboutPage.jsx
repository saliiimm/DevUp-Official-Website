import AboutUsTextImage from '@/components/AboutUsTextImage/AboutUsTextImage';
import VisionAndMission from '../../components/VisionAndMission/VisionAndMission';
import Sliders from '../../components/Sliders/Sliders';
import StillHaveAQuestion from '../../components/StillHaveAQuestion/StillHaveAQuestion';

export const data = [
  {
    cover: 'https://images6.alphacoders.com/679/thumb-1920-679459.jpg',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images2.alphacoders.com/851/thumb-1920-85182.jpg',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images6.alphacoders.com/875/thumb-1920-875570.jpg',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images6.alphacoders.com/114/thumb-1920-1141749.jpg',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images3.alphacoders.com/948/thumb-1920-948864.jpg',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images2.alphacoders.com/631/thumb-1920-631095.jpg',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images4.alphacoders.com/665/thumb-1920-665242.png',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images2.alphacoders.com/738/thumb-1920-738176.png',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images8.alphacoders.com/100/thumb-1920-1005531.jpg',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
  {
    cover: 'https://images2.alphacoders.com/582/thumb-1920-582804.png',
    title: 'Lead',
    fullname: 'Islem Naceri',
  },
];
const AboutPage = () => {
  return (
    <div>
      <AboutUsTextImage />
      <Sliders data={data} />
      <VisionAndMission />
      <StillHaveAQuestion />
    </div>
  );
};

export default AboutPage;
