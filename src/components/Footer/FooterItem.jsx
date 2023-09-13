import React from 'react';
import { LogoText } from '../../styled';
export default function FooterItem () {
  return (

      <div class="footer-container">
        <LogoText variant="h4" component="h4">About us</LogoText>
        <LogoText variant="h5" component="h5">Contact</LogoText>
        <LogoText variant="h6" component="h6">Email: info@example.com</LogoText>
        <LogoText variant="h5" component="h6">Phone: 123-456-7890</LogoText>
          <LogoText>&copy; 2023 My Company. All rights reserved.</LogoText>


      </div>


  );
}