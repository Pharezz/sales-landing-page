import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BuyBanner from "./components/BuyBanner";
import {
  AppWindow,
  ArrowUpCircle,
  CircleCheck,
  FacebookIcon,
  FlaskConical,
  HeartPulse,
  Instagram,
  Key,
  Lightbulb,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Megaphone,
  PhoneIcon,
  Quote,
  Tag,
  ThumbsUp,
  Twitter,
  User,
  Watch,
} from "lucide-react";
import config from "./config.json"; // Adjust path if needed

// Icon map for dynamic rendering from config strings
const iconMap = {
  AppWindow,
  CircleCheck,
  FacebookIcon,
  FlaskConical,
  HeartPulse,
  Instagram,
  Key,
  Lightbulb,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Megaphone,
  PhoneIcon,
  Quote,
  Tag,
  ThumbsUp,
  Twitter,
  User,
  Watch,
};

const Home = () => {
  const triggerRef = useRef(null);
  const footerRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerActive, setBannerActive] = useState(false);

  useEffect(() => {
    // Set dynamic CSS variables from config
    document.documentElement.style.setProperty('--primary', config.branding.primary_color);
    document.documentElement.style.setProperty('--secondary', config.branding.secondary_color);
    document.documentElement.style.setProperty('--accent', config.branding.accent_color);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === triggerRef.current && entry.isIntersecting) {
            setBannerActive(true);
            setShowBanner(true);
          }
          if (entry.target === footerRef.current && entry.isIntersecting) {
            setShowBanner(false);
          }
          if (entry.target === footerRef.current && !entry.isIntersecting) {
            if (bannerActive) setShowBanner(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (triggerRef.current) observer.observe(triggerRef.current);
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [bannerActive]);

  // Helper to get image src dynamically (fall back if not found)
  const getImage = (path) => {
  return path ? `/assets/${path.split('/').pop()}` : ''; // Assumes config paths like "the-watch.png" or full "assets/the-watch.png"
};

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      {config.hero.enabled && (
        <section id="hero" className="bg-gray-50">
          <div className="flex flex-col items-center space-y-7 section pt-30 px-4 md:px-0">
            <h1 className="text-3xl font-bold text-center text-secondary">
              {config.hero.title}
            </h1>
            <p className="text-primary text-2xl font-semibold text-center">
              {config.hero.subtitle}
            </p>
            <img src={getImage(config.hero.images.product)} alt="product image" className="w-" />
            <div className="bg-primary text-center text-white py-5 w-full">
              <p className="text-3xl">
                <span className="font-bold">{config.hero.sold_text.split(' To')[0]}</span> To
                <span className="font-bold">{config.hero.sold_text.split(' To')[1]}</span>
              </p>
            </div>
            <h1 className="text-3xl font-semibold text-primary text-center">
              {config.hero.whatsapp_title}
            </h1>
            <div className="grid md:grid-cols-2 gap-10">
              <img src={getImage(config.hero.images.whatsapp1)} alt="whatsapp screenshot" className="w-full h-full" />
              <img src={getImage(config.hero.images.whatsapp2)} alt="whatsapp screenshot" className="w-full h-full" />
            </div>
            <div className="bg-primary text-white py-2 w-full text-center">
              <p className="font-semibold text-2xl">
                {config.hero.monthly_sales}
              </p>
            </div>
          </div>
        </section>
      )}
      {config.product.enabled && (
        <section id="product">
          <div className="flex flex-col items-center space-y-5 section px-4 md:px-0">
            <h1 className="text-3xl font-semibold text-center text-gray-700">
              {config.product.title}
            </h1>
            <p className="text-gray-500 text-center">
              {config.product.description}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-10 mt-20 mb-10">
              <img src={getImage(config.product.images.black_watch)} alt="product image" className="w-80" />
            </div>
            <h1 className="font-semibold text-3xl text-center text-primary">
              {config.product.usage_title}
            </h1>
            <div className="flex flex-col gap-10 items-center">
              {config.product.usage.map((item, index) => (
                <div key={index} className="w-full">
                  <img src={getImage(item.image)} className="w-full" alt="usage image" />
                  <p className="mt-3 text-center text-gray-700">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {config.offer.enabled && (
        <section id="offer">
          <div
            className="flex flex-col items-center space-y-5 mx-auto max-w-6xl py-10 px-4 md:px-0 bg-black"
            ref={triggerRef}
          >
            <h1 className="text-3xl font-semibold text-center text-accent">
              {config.offer.title}
            </h1>
            <p className="text-lg text-white text-center">
              {config.offer.description1}
            </p>
            <p className="text-white">
              {config.offer.description2}
            </p>
            <img src={getImage(config.offer.images.gift)} className="w-fit" alt="free gift img" />
          </div>
          {showBanner && <BuyBanner />}
          <h1 className="text-2xl text-primary font-semibold text-center py-5">
            {config.offer.design_title}
          </h1>
        </section>
      )}
      {config.how_it_works.enabled && (
        <section className="bg-gray-50">
          <div className="flex flex-col items-center space-y-5 section px-4 md:px-0">
            <h1 className="text-3xl font-semibold text-gray-700">{config.how_it_works.title}</h1>
            <p className="text-gray-500 text-center">{config.how_it_works.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {config.how_it_works.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <img src={getImage(step.image)} alt="step image" className="w-32 h-32" />
                  <h1 className="text-lg font-bold text-gray-700 mt-10">{step.title}</h1>
                  <p className="text-gray-500 text-center max-w-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {config.features.enabled && (
        <section id="features">
          <div className="flex flex-col items-center space-y-5 section px-4 md:px-0">
            <h1 className="text-3xl font-semibold text-gray-700">{config.features.title}</h1>
            <p className="text-gray-500 text-center">{config.features.description}</p>
            <hr className="border-2 w-32 rounded opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20 space-y-15 md:space-y-0 mt-20">
              {config.features.benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon];
                return (
                  <div key={index} className="flex gap-2">
                    {Icon && <Icon className="text-primary" size={30} />}
                    <div className="space-y-1">
                      <h1 className="font-semibold text-gray-700 text-lg">{benefit.title}</h1>
                      <p className="text-sm text-gray-500 max-w-xs">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {config.more_features.enabled && (
        <section className="bg-gray-50">
          <div className="flex flex-col items-center space-y-5 section px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-20">
              <div className="space-y-5">
                {config.more_features.features_left.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={index} className="flex gap-2">
                      {Icon && <Icon className="text-primary" size={30} />}
                      <div className="space-y-1">
                        <h1 className="font-semibold text-gray-700 text-lg">{feature.title}</h1>
                        <p className="text-sm text-gray-500 max-w-xs">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img src={getImage(config.more_features.image)} alt="Product Image" className="mx-auto md:w-auto" />
              <div className="space-y-5">
                {config.more_features.features_right.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={index} className="flex gap-2">
                      {Icon && <Icon className="text-primary" size={30} />}
                      <div className="space-y-1">
                        <h1 className="font-semibold text-gray-700 text-lg">{feature.title}</h1>
                        <p className="text-sm text-gray-500 max-w-xs">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
              {config.more_features.compatibilities.map((item, index) => (
                <span key={index} className="flex gap-2 items-center">
                  <CircleCheck className="text-primary" size={20} />
                  <p className="text-sm text-gray-500">{item}</p>
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
      {config.buy_offer.enabled && (
        <section id="buy-offer">
          <div className="flex flex-col items-center space-y-1 section px-4 md:px-0">
            <div className="bg-primary mb-8 text-white py-2 w-full">
              <h1 className="text-2xl font-semibold text-center">
                {config.buy_offer.title}
              </h1>
            </div>
            <h1 className="text-2xl text-center mb-4 text-gray-700">
              {config.buy_offer.subtitle}
            </h1>
            <div className="bg-black space-y-2 py-5 px-8 w-full">
              <h1 className="text-3xl text-center text-secondary font-semibold">
                {config.buy_offer.black_offer.title}
              </h1>
              <p className="text-3xl text-center text-accent font-semibold">
                {config.buy_offer.black_offer.combo_title}
              </p>
              {config.buy_offer.black_offer.items.map((item, index) => (
                <p key={index} className="text-white text-3xl font-semibold">
                  ✅ {item}
                </p>
              ))}
              <img src={getImage(config.buy_offer.black_offer.image)} alt="black smart-watch" className="w-80 mx-auto my-10" />
              <p className="text-white text-center text-3xl font-semibold">
                Old Price: <span className="line-through">{config.buy_offer.black_offer.old_price}</span>
              </p>
              <p className="text-white text-center text-3xl font-semibold">
                New Price: {config.buy_offer.black_offer.new_price}
              </p>
              <p className="text-white text-center text-3xl font-semibold">
                {config.buy_offer.black_offer.delivery}
              </p>
              <div className="bg-white/98 w-full py-2 px-2">
                <h1 className="text-3xl text-center text-primary font-light leading-10">
                  {config.buy_offer.black_offer.celebration_text}
                </h1>
              </div>
            </div>
            <div className="bg-accent py-5 px-8 w-full">
              <p className="text-black text-2xl text-center font-semibold">
                {config.buy_offer.black_offer.stock_left}
              </p>
            </div>
            <div className="bg-black py-5 flex items-center px-8 w-full">
              <button className="md:px-20 py-5 rounded bg-secondary text-white font-semibold cursor-pointer hover:animate-none  transition-all duration-300 ease-in-out mx-auto animate-pulse w-full md:w-auto">
                Click Here to Buy it Now ⚡
              </button>
            </div>
            <p className="text-secondary text-xl text-center mt-3">
              {config.buy_offer.delivery_time}
            </p>
            <div className="bg-black space-y-2 py-5 px-8 w-full mt-10">
              <h1 className="text-3xl text-center text-secondary font-semibold">
                {config.buy_offer.bundle_offer.title}
              </h1>
              <p className="text-3xl text-center text-accent font-semibold">
                {config.buy_offer.bundle_offer.combo_title}
              </p>
              {config.buy_offer.bundle_offer.items.map((item, index) => (
                <p key={index} className="text-white text-3xl font-semibold">
                  ✅ {item}
                </p>
              ))}
              <div className="grid md:grid-cols-2 gap-10 md:gap-0 my-10 items-center justify-items-center">
                {config.buy_offer.bundle_offer.images.map((img, index) => (
                  <img key={index} src={getImage(img)} alt="bundle watch" className="w-80" />
                ))}
              </div>
              <p className="text-white text-center text-3xl font-semibold">
                Old Price: <span className="line-through">{config.buy_offer.bundle_offer.old_price}</span>
              </p>
              <p className="text-white text-center text-3xl font-semibold">
                New Price: {config.buy_offer.bundle_offer.new_price}
              </p>
              <p className="text-white text-center text-3xl font-semibold">
                {config.buy_offer.bundle_offer.delivery}
              </p>
              <div className="bg-white/98 w-full py-2 px-2">
                <h1 className="text-3xl text-center text-primary font-light leading-10">
                  {config.buy_offer.bundle_offer.celebration_text}
                </h1>
              </div>
            </div>
            <div className="bg-accent py-5 px-8 w-full">
              <p className="text-black text-2xl text-center font-semibold">
                {config.buy_offer.bundle_offer.stock_left}
              </p>
            </div>
            <div className="bg-black py-5 flex items-center px-8 w-full">
              <button className="md:px-20 py-5 rounded bg-secondary text-white font-semibold cursor-pointer hover:animate-none  transition-all duration-300 ease-in-out mx-auto animate-pulse w-full md:w-auto">
                Click Here to Buy it Now ⚡
              </button>
            </div>
            <p className="text-secondary text-xl text-center mt-3">
              {config.buy_offer.delivery_time}
            </p>
          </div>
        </section>
      )}
      {config.reviews.enabled && (
        <section id="reviews">
          <div className="flex flex-col items-center space-y-5 mx-auto max-w-6xl pb-20 pt-5 px-4 md:px-0">
            <h1 className="text-3xl font-semibold text-gray-700">{config.reviews.title}</h1>
            <p className="text-gray-500 text-center">{config.reviews.description}</p>
            <hr className="border-2 w-32 rounded opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-15 items-center">
              {config.reviews.reviews.map((review, index) => (
                <div key={index} className="flex flex-col gap-2 items-center">
                  <Quote className="text-gray-500" />
                  <p className="text-gray-500 text-sm text-center">{review.quote}</p>
                  <p className="text-primary text-center">- {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {config.faqs.enabled && (
        <section id="faqs" className="bg-gray-50">
          <div className="flex flex-col items-center space-y-5 section px-4 md:px-0">
            <h1 className="text-3xl font-semibold text-gray-700">{config.faqs.title}</h1>
            <p className="text-gray-500 text-center">
              {config.faqs.description.replace('hello@example.com', '')}
              <a href={`mailto:${config.faqs.email}`} className="text-primary hover:underline">
                {config.faqs.email}
              </a>
            </p>
            <hr className="border-2 w-32 rounded opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-15 items-center">
              {config.faqs.faqs.map((faq, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h1 className="text-gray-700 font-semibold text-lg">{faq.question}</h1>
                  <p className="text-gray-500 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
            <button className="md:px-20 mt-10 py-5 rounded bg-secondary text-white font-semibold cursor-pointer hover:animate-none  transition-all duration-300 ease-in-out mx-auto animate-pulse w-full md:w-auto">
              Click Here to Buy it Now ⚡
            </button>
          </div>
        </section>
      )}
      {config.contact.enabled && (
        <section id="contact">
          <div className="section px-4 md:px-0">
            <div className="max-w-3xl border border-gray-200 rounded flex flex-col mx-auto space-y-5 py-15 px-5 bg-white">
              <h1 className="font-semibold text-gray-700 text-3xl mb-8">
                {config.contact.title}
              </h1>
              <span className="flex gap-1 text-gray-600">
                <MapPin size={20} /> {config.contact.address}
              </span>
              <span className="flex gap-1 text-gray-600">
                <PhoneIcon size={20} /> {config.contact.phone}
              </span>
              <a href={`mailto:${config.contact.email}`} className="flex gap-1 text-gray-600 mb-8">
                <Mail size={20} />
                <p className="hover:text-primary transition-colors duration-300 ease-in-out">
                  {config.contact.email}
                </p>
              </a>
              <button className="bg-primary hover:bg-gray-700 transition-all duration-500 ease-in-out font-semibold cursor-pointer text-white py-3 rounded-lg w-full">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      )}
      {config.footer.enabled && (
        <footer ref={footerRef} className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-center gap-5 pt-10 pb-5 bg-white px-4 md:px-0 w-full">
            <div className="flex items-center">
              <div className="flex justify-center space-x-5 w-full">
                {config.footer.social_links.map((link, index) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-2 rounded-full h-10 w-10 hover:-translate-y-1 duration-300 transition-transform ease-in-out"
                    >
                      {Icon && <Icon />}
                    </a>
                  );
                })}
              </div>
              <a href="#hero" className="bg-primary text-white p-2 rounded-full w-12 h-12 flex justify-center items-center ml-auto">
                <ArrowUpCircle size={32} />
              </a>
            </div>
            <hr className="w-full border-gray-200" />
            <p className="text-sm text-gray-600 text-center">
              {config.footer.copyright}
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Home;