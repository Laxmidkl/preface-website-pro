import React, { Fragment } from 'react'
import HeroSection from '../sections/hero-section'
import AboutSection from '../sections/about-section'
import HowItWorksSection from '../sections/how-it-works-section'
import ProductsSection from '../sections/product-section'
import FaqSection from '../sections/faq-section'
import CallToActionSection from '../sections/call-to-action-section'

const HomePageView = () => {
    return (
        <Fragment>
            <HeroSection />
            <AboutSection />
            <HowItWorksSection />
            <ProductsSection />
            <FaqSection />
            <CallToActionSection />
        </Fragment>
    )
}

export default HomePageView