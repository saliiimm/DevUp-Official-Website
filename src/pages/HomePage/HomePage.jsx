import HomeWelcome from '@/components/HomeWelcome/HomeWelcome';
import HomeDepartments from '@/components/HomeDepartments/HomeDepartments';
import AboutUsTextImage from '@/components/AboutUsTextImage/AboutUsTextImage';
import WhyJoinUs from '@/components/WhyJoinUs/WhyJoinUs';
import FAQ from '@/components/FAQ/FAQ';
import ContactUs from '@/components/ContactUs/ContactUs';

const HomePage = () => {
  return (
    <main>
      <HomeWelcome />
      <HomeDepartments />
      <AboutUsTextImage />
      <WhyJoinUs />
      <ContactUs />
      <FAQ />
    </main>
  );
};

export default HomePage;
