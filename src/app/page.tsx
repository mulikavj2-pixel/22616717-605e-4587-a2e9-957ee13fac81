"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Coffee, Users, Globe, Award } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="noise"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893573663-x34to19f.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="BrewHaven"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit
          title="Craft Your Perfect Brew"
          description="Discover premium coffee crafted with passion. From smooth espressos to creamy cappuccinos, every cup tells a story."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893575199-eq1l4365.jpg"
          imageAlt="Coffee shop interior"
          showDimOverlay={true}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Our Coffee Selection"
          description="Handpicked beans roasted to perfection. Choose from our signature drinks and specialty beverages."
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "espresso",
              name: "Single Shot Espresso",
              price: "$3.50",
              variant: "Bold & Rich",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893576685-mddgns4k.jpg",
              imageAlt: "Single shot espresso"
            },
            {
              id: "cappuccino",
              name: "Creamy Cappuccino",
              price: "$4.50",
              variant: "Smooth & Velvety",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893578141-6ccecjiu.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "cold-brew",
              name: "Cold Brew Delight",
              price: "$5.00",
              variant: "Refreshing & Smooth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893579476-j97jqaf0.jpg",
              imageAlt: "Iced cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Brew Haven: Where Coffee Meets Community"
          useInvertedBackground="noInvert"
          metrics={[
            {
              icon: Coffee,
              label: "Years Brewing Excellence",
              value: "12+"
            },
            {
              icon: Users,
              label: "Happy Coffee Lovers",
              value: "5000+"
            },
            {
              icon: Globe,
              label: "Premium Bean Origins",
              value: "15"
            },
            {
              icon: Award,
              label: "Quality Certifications",
              value: "8"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Customers Love"
          description="Join thousands who've made Brew Haven their daily ritual."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              nameTitle: "Sarah Johnson, Marketing Executive",
              quote: "The best espresso in town! Every morning I stop by for my perfect brew. The baristas really know their craft.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893583803-k5s764gy.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              nameTitle: "Michael Chen, Software Developer",
              quote: "Perfect workspace, amazing coffee, and incredible atmosphere. This is where I get my best work done.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893584736-hbrpx40t.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              nameTitle: "Emma Rodriguez, Freelancer",
              quote: "The cappuccino here is consistently perfect. Great vibes, quiet corner tables, and the staff remembers my order!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893585966-71bd17k5.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              nameTitle: "David Park, Business Owner",
              quote: "Outstanding quality and service. This has become my go-to spot for client meetings. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893587447-ctycgrpe.jpg",
              imageAlt: "David Park"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about our coffee shop and services."
          useInvertedBackground="noInvert"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday to Friday 6:30 AM - 8:00 PM, Saturday 7:00 AM - 9:00 PM, and Sunday 8:00 AM - 6:00 PM. We're closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer WiFi?",
              content: "Yes! Free high-speed WiFi is available for all customers. Password available at the counter. Perfect for working or studying."
            },
            {
              id: "3",
              title: "Can I order in advance?",
              content: "Absolutely. Call us at (555) 123-4567 or use our online ordering system. We'll have your order ready for pickup."
            },
            {
              id: "4",
              title: "Do you offer dietary options?",
              content: "Yes! We have oat, almond, and coconut milk alternatives. Most of our pastries are labeled with allergen information."
            },
            {
              id: "5",
              title: "Can we host private events?",
              content: "We'd love to! Our space accommodates small gatherings and meetings. Contact us to discuss your event."
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept cash, all major credit cards, digital wallets (Apple Pay, Google Pay), and our loyalty card program."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions or want to reserve a table? We'd love to hear from you. Send us a message and we'll respond within 24 hours."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765893588711-fu65gdxz.jpg"
          imageAlt="Cozy coffee shop interior"
          mediaPosition="right"
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="BrewHaven"
          copyrightText="© 2024 Brew Haven Coffee. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#about" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "#menu" },
                { label: "Pastries", href: "#menu" },
                { label: "Specials", href: "#menu" }
              ]
            },
            {
              title: "Visit Us",
              items: [
                { label: "Location", href: "#contact" },
                { label: "Hours", href: "#contact" },
                { label: "Events", href: "#contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}