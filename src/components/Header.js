import {useState } from 'react';
import Image from 'next/image'
import ThemeSwitch from '@/components/ThemeSwitch';

const Header = () => {
    const [sun, setSun] = useState(true);
    return (
      <>
        <div>
            <Image
            src="/images/logo.png"
            alt="logo"
            width={60}
            height={60}
            />
        </div>
        <ThemeSwitch sun={sun} setSun={setSun} />
      </>
    );
  };
  
  export default Header;
  