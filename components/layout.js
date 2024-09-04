// components/layout.js

import Navbar from './Navigation/navbar';
import Footer from './Navigation/footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='mb-24'>
        <Navbar/>
      </div>
      <main className="flex-1 ml-6 mr-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;