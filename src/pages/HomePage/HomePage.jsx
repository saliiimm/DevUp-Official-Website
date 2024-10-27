import React from 'react';

import HomeWelcome from '@/components/HomeWelcome/HomeWelcome';
import HomeDepartments from '@/components/HomeDepartments/HomeDepartments';
import AboutUsTextImage from '@/components/AboutUsTextImage/AboutUsTextImage';
import HomeWhyJoining from '@/components/HomeWhyJoining/HomeWhyJoining';
import HomeFAQs from '@/components/HomeFAQs/HomeFAQs';
import ContactUs from '@/components/ContactUs/ContactUs';
import StillHaveAQuestion from '@/components/StillHaveAQuestion/StillHaveAQuestion';

const HomePage = () => {
  return <div>
        <HomeWelcome/>
        <HomeDepartments/>
        <AboutUsTextImage/>
        <HomeWhyJoining/>
        <ContactUs/>
        <HomeFAQs/>
        <StillHaveAQuestion />
  </div>;
};

export default HomePage;
