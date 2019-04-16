import React from 'react'
import Header from './Header';
import ChatSection from './ChatSection';
import ContactUs from './ContactUs';
import Footer from './Footer';
import HowItWorks from './HowItWorks'

const Home = () => {
    return (
        <div>
            <Header />
            <HowItWorks />
            <ChatSection />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home;
