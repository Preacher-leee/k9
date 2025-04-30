import React from 'react';
import { Outlet } from 'react-router-dom'; // Assumes you're using react-router for routing

// Other imports for layout components
import Sidebar from './Sidebar';  // Your sidebar component
import Header from './Header';    // Your header component
import Footer from './Footer';    // Your footer component

const Layout = () => {
  return (
    <div className="layout">
      {/* Header */}
      <Header />

      <div className="main-content-wrapper">
        {/* Main Content */}
        <main className="main-content">
          {/* Page Title */}
          <div className="page-title">
            <h1>Page Title Here</h1> {/* This will dynamically change */}
          </div>

          {/* Ezoic - top - under_page_title Ad */}
          <div className="under-page-title-ad">
            <div id="ezoic-pub-ad-placeholder-115"></div>
          </div>

          {/* This will render the page-specific content */}
          <Outlet />
        </main>

        {/* Sidebar */}
        <aside className="sidebar">
          {/* Sidebar Content */}
          <Sidebar />

          {/* Ezoic - side - sidebar_middle Ad */}
          <div className="sidebar-sticky-ad">
            <div id="ezoic-pub-ad-placeholder-114"></div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
