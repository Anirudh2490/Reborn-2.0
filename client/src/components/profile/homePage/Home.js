import React from 'react'
import Header from './Header';
import ChatSection from './ChatSection';
import ContactUs from './ContactUs';
import Footer from './Footer';
import HowItWorks from './HowItWorks'
import NavBar from '/Users/anirudhrao/reborn2.0/client/src/components/navbar/Navbar.js'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <HowItWorks />
            <ChatSection />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home;
