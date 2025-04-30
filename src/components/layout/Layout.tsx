import React from 'react';
import { Outlet } from 'react-router-dom'; // Assumes you're using react-router for routing

// Other imports for layout components
import Sidebar from './Sidebar'; // This is a placeholder. Make sure you have a Sidebar component.
import Header from './Header';   // Your Header component, if it exists.
import Footer from './Footer';   // Your Footer component, if it exists.

const Layout = () => {
  return (
    <div className="layout">
      {/* Header */}
      <Header />

      {/* Main Content with Sidebar */}
      <div className="main-content-wrapper">
        <main className="main-content">
          {/* This will render the page-specific content */}
          <Outlet />
        </main>

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
