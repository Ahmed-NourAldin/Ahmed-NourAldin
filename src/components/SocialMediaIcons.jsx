import React from 'react';
import phone from "../assets/phone.png"

const SocialMediaIcons = () =>
{
  
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>

      <a href="https://www.linkedin.com/in/ahmed-esam-front-end/" target='_blank' className="hover:opacity-50 transition duration-500" rel="noreferrer">
        <img src="https://github.com/ed-roh/react-portfolio/blob/master/public/assets/instagram.png?raw=true" alt="linkedin-link" />
      </a>
      <a href="https://www.instagram.com/ahmedenouraldin/" target='_blank' className="hover:opacity-50 transition duration-500" rel="noreferrer">
        <img src="https://github.com/ed-roh/react-portfolio/blob/master/public/assets/linkedin.png?raw=true" alt="instagram-link" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100057493277186" target='_blank' className="hover:opacity-50 transition duration-500" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/ed-roh/react-portfolio/master/public/assets/facebook.png" alt="facebook-link" />
      </a>
      <a href="tel:+0201050303819" className="hover:opacity-50 w-[32px] h-[32px] transition duration-500">
        <img  src={phone} alt="phone-icon"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
