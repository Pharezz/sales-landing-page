import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import connect from "./assets/smartwatch.png";
import configure from "./assets/setting.png";
import connected from "./assets/trophy.png";
import {
  AppWindow,
  CircleCheck,
  Facebook,
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
  X,
} from "lucide-react";
import blueWatch from "./assets/the-watch.png";
import blackWatch from "./assets/apple-watch-3.png";
import gift2 from "./assets/charge-cord2.webp";
import BuyBanner from "./components/BuyBanner";
import whatsAppReview from "./assets/whatsapp-review.jpg";
import whatsAppReview1 from "./assets/whatsapp-review2.jpg";
import watchSleepTrack from "./assets/watchSleepTrack.webp";
import watchJogTrack from "./assets/watchJogTrack.jpg";

const Home = () => {
  const triggerRef = useRef(null);
  const footerRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);
const [BannerActive, setBannerActive] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        // 1. User reaches trigger section for the first time
        if (entry.target === triggerRef.current && entry.isIntersecting) {
          setBannerActive(true);
          setShowBanner(true); // show banner
        }

        // 2. Footer enters view -> always hide banner
        if (entry.target === footerRef.current && entry.isIntersecting) {
          setShowBanner(false);
        }

        // 3. Footer leaves view -> show IF user already activated it
        if (entry.target === footerRef.current && !entry.isIntersecting) {
          if (BannerActive) setShowBanner(true);
        }
      });
    },
    { threshold: 0.2 }
  );

  if (triggerRef.current) observer.observe(triggerRef.current);
  if (footerRef.current) observer.observe(footerRef.current);

  return () => observer.disconnect();
}, [BannerActive]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <section id="hero" className="bg-gray-50">
        <div className="flex flex-col items-center mx-auto space-y-7 section pt-30 px-4 md:px-0">
          <h1 className="text-3xl font-bold text-center text-red-600 ">
            Upgrade Your Style with This Sleek Ultra Smart-watch!
          </h1>
          <p className="text-blue-700 text-2xl font-semibold text-center">
            50% OFF (Save Money) + FREE Gift! + Pay on Delivery + FREE Delivery
            + Very Fast Delivery (4 – 24 Hours Nationwide)
          </p>

          <img src={blueWatch} alt="product image" className="w-" />
          <div className="bg-blue-700 text-center text-white py-5 w-full">
            <p className="text-3xl">
              <span className="font-bold">74,800+ Smart-watches</span> Already
              Sold <br /> To{" "}
              <span className="font-bold">Satisfied Customers In Nigeria</span>{" "}
            </p>
          </div>

          {/* <button className="px-25 py-4 mt-5 rounded-full bg-blue-700 text-white border-0 cursor-pointer hover:bg-gray-700 duration-500 font-semibold transition-all ease-in-out mx-auto">
            Buy it Now
          </button> */}

          <h1 className="text-3xl font-semibold text-blue-700 text-center">
            What Other Nigerians Like You Are Saying on WhatsApp
          </h1>
          <div className="grid md:grid-cols-2 gap-10">
            <img
              src={whatsAppReview}
              alt="whatsapp screenshot "
              className="w-100 h-full"
            />
            <img
              src={whatsAppReview1}
              alt="whatsapp screenshot"
              className="w-100 h-full"
            />
          </div>

          <div className="bg-blue-700 text-white py-2 w-full text-center">
            <p className="font-semibold text-2xl">
              Monthly Sales: 5,458 pieces already sold this month
            </p>
          </div>
        </div>
      </section>

      <section id="product" className="">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            THE ULTRA SMART-WATCH
          </h1>
          <p className="text-gray-500 text-center">
            This smart-watch is built specifically for the modern Nigerian man
            and woman. Whether you’re going out or staying in, it looks sharp
            and classy. People go dey ask you, “Where you for buy am"
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10 mt-20 mb-10">
            {/* <img src={blueWatch} alt="product image" className="w-" /> */}
            <img src={blackWatch} alt="product image" className="w-80" />
          </div>

          <h1 className="font-semibold text-3xl text-center text-blue-700">
            How People Like You Are Using Their Own Smart-watch
          </h1>
          <div className="flex flex-col gap-10 items-center">
            <div className="w-full">
              <img
                src={watchSleepTrack}
                className="w-full"
                alt="man sleeping with smartwatch"
              />
              <p className="mt-3 text-center text-gray-700">
                Chinedu tracks his resting heartrate and sleep rate with his
                smartwatch
              </p>
            </div>
            <div className="w-full">
              <img
                src={watchJogTrack}
                className="w-full"
                alt="woman running with smartwatch"
              />
              <p className="mt-3 text-center text-gray-700">
                Tolu monitors her exercising routine via her smartwatch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* offer */}

      <section id="offer">
        <div
          className="flex flex-col items-center mx-auto space-y-5 max-w-6xl py-10 px-4 md:px-0 bg-black"
          ref={triggerRef}
        >
          <h1 className="text-3xl font-semibold text-center text-amber-300">
            Here is a High-Quality Gift For You – Only For Today
          </h1>

          <p className="text-lg text-white text-center">
            We love to give our customers the best and everything they need to
            look good <br /> and shine when they go out. We are currently giving
            out this item FREE of Charge. Yes, you read right!
          </p>

          <p className="text-white">
            You get <span className="font-bold">FREE</span> 3 in 1 USB Charging
            Cable with your Smart-watch
          </p>

          <img src={gift2} className="w-fit" alt="free gift img" />
        </div>
        {showBanner && <BuyBanner />}
        <h1 className="text-2xl text-blue-700 font-semibold text-center py-5">
          Sleek Design That Turns Heads
        </h1>
      </section>

      <section className="bg-gray-50">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-gray-700">HOW IT WORKS</h1>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            ipsam consequatur autem! Placeat exercitationem distinctio sint
            voluptas. Ab voluptas officiis nihil, sint ullam quaerat minima?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center justify-center">
              <img src={connect} alt="smartwatch" className="w-32 h-32" />
              <h1 className="text-lg font-bold text-gray-700 mt-10">
                Connect Your Device
              </h1>
              <p className=" text-gray-500 text-center max-w-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                officia quod ullam in veritatis reprehenderit accusamus maiores
                itaque nulla. Culpa?
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={configure}
                alt="smartwatch setting"
                className="w-32 h-32"
              />
              <h1 className="text-lg font-bold text-gray-700 mt-10">
                Configure it
              </h1>
              <p className=" text-gray-500 text-center max-w-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                officia quod ullam in veritatis reprehenderit accusamus maiores
                itaque nulla. Culpa?
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={connected} alt="trophy" className="w-32 h-32" />
              <h1 className="text-lg font-bold text-gray-700 mt-10">
                Yess! Connected
              </h1>
              <p className=" text-gray-500 text-center max-w-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                officia quod ullam in veritatis reprehenderit accusamus maiores
                itaque nulla. Culpa?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="" id="features">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-gray-700">THE BENEFITS</h1>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            ipsam consequatur autem! Placeat exercitationem distinctio sint
            voluptas. Ab voluptas officiis nihil, sint ullam quaerat minima?
          </p>
          <hr className=" border-3 w-30 rounded opacity-15" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20 space-y-15 md:space-y-0 mt-20">
            <div className="flex gap-2">
              <MapPin className="text-blue-700" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">
                  GPS Tracking
                </h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <HeartPulse className="text-blue-700" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">
                  Heartbeat Analysis
                </h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <LockKeyhole className="text-blue-700" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">
                  Security Check
                </h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Lightbulb className="text-blue-700" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">
                  Innovative ideas
                </h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Tag className="text-blue-700" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">
                  Save Your Bills
                </h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FlaskConical className="text-blue-700" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">
                  Proven Technology
                </h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt- items-center mb-20">
            <div className="space-y-5">
              <div className="flex gap-2">
                <Key className="text-blue-700" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Fast and Secure
                  </h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <ThumbsUp className="text-blue-700" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Stay in Touch
                  </h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Megaphone className="text-blue-700" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Voice Assistant
                  </h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
            </div>

            <img
              src={blackWatch}
              alt="Product Image"
              className="mx-auto md:w-auto"
            />

            <div className="space-y-5">
              <div className="flex gap-2">
                <User className="text-blue-700" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Designed for You
                  </h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <AppWindow className="text-blue-700" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Apps You Love
                  </h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Watch className="text-blue-700" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Precise Timepiece
                  </h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span className="flex flex-col md:flex-row gap-5 md:gap-20 w-full">
            {" "}
            <span className="flex gap-2 items-center">
              <CircleCheck className="text-blue-700" size={20} />
              <p className="text-sm text-gray-500">
                Compatible with all devices
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <CircleCheck className="text-blue-700" size={20} />
              <p className="text-sm text-gray-500">Android and IOS Support</p>
            </span>
            <span className="flex gap-2 items-center">
              <CircleCheck className="text-blue-700" size={20} />
              <p className="text-sm text-gray-500">
                Activity and Health Tracker
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <CircleCheck className="text-blue-700" size={20} />
              <p className="text-sm text-gray-500">
                Read and reply to messages
              </p>
            </span>
          </span>
        </div>
      </section>

      <section id="buy-offer">
        <div className="flex flex-col items-center mx-auto space-y-1 section px-4 md:px-0">
          <div
            className="bg-blue-700 mb-8 text-white py-2
   w-full"
          >
            <h1 className="text-2xl font-semibold text-center">
              Choose Your Smart-watch
            </h1>
          </div>
          <h1 className="text-2xl text-center mb-4 text-gray-700 ">
            Most people buy the Blue or Black Smart-watch because it Saves More
            Money
          </h1>
          <div className="bg-black space-y-2 py-5 px-8 w-full">
            <h1 className="text-3xl text-center text-red-500 font-semibold">
              🔥 BLACK SMARTWATCH – Today’s Special Deal
            </h1>
            <p className="text-3xl text-center text-amber-300 font-semibold">
              Get This Powerful Combo:
            </p>

            <p className="text-white text-3xl font-semibold ">
              ✅1 Black Smart-watch
            </p>
            <p className="text-white text-3xl font-semibold ">
              ✅1 FREE 3-IN-1 Magnetic, Fast-Charging USB Cable (BLACK) (Worth
              ₦7,600)
            </p>
            <p className="text-white text-3xl font-semibold ">
              ✅Pay On Delivery (See Before You pay)
            </p>
            <img
              src={blackWatch}
              alt="black smart-watch"
              className="w-80 mx-auto my-10"
            />
            <p className="text-white text-center text-3xl font-semibold ">
              Old Price: <span className="line-through">₦59,000</span>
            </p>
            <p className="text-white text-center text-3xl font-semibold ">
              New Price: ₦25,000 Only For Today
            </p>
            <p className="text-white text-center text-3xl font-semibold ">
              Delivery Fee: <span className="line-through">₦3,000</span> FREE!
            </p>
            <div className="bg-[#fffffffa] w-full py-2 px-2">
              <h1 className="text-3xl text-center text-blue-700 font-extralight  leading-10">
                We Are Celebrating 1,000+ Orders! <br />
                To say thank you, we’re giving this{" "}
                <span className="font-bold">BIG discount</span> for a limited
                time only.{" "}
                <span className="font-bold">
                  Order Now (Offer valid while stock lasts. After This, It will
                  Go Back to Original Price)
                </span>
              </h1>
            </div>
          </div>
          <div className="bg-amber-300 py-5 px-8 w-full">
            <p className="text-black text-2xl text-center font-semibold">
              Only 4 packages left in stock – Order Now (Offer valid while stock
              lasts. After This, It will Go Back to Original Price)
            </p>
          </div>
          <div className="bg-black py-5 flex items-center px-8 w-full">
            <button className="md:px-50 py-5 rounded bg-red-600 text-white font-semibold border-0 cursor-pointer hover:animate-none transition-all duration-300 ease-in-out mx-auto animate-pulse w-full md:w-auto">
              Click Here to Buy it Now ⚡
            </button>
          </div>
          <p className="text-red-600 text-xl text-center mt-3">
            Order now to receive between the next{" "}
            <span className="font-semibold">4-24 Hours</span> (Very Fast DAY
            TIME Delivery)
          </p>

          <div className="bg-black space-y-2 py-5 px-8 w-full mt-10">
            <h1 className="text-3xl text-center text-red-500 font-semibold">
              🔥 BLUE AND BLACK BUNDLE – Today’s Special Deal
            </h1>
            <p className="text-3xl text-center text-amber-300 font-semibold">
              Get This Powerful Combo:
            </p>

            <p className="text-white text-3xl font-semibold ">
              ✅1 Blue, 1 Black Smart-watch
            </p>
            <p className="text-white text-3xl font-semibold ">
              ✅1 FREE 3-IN-1 Magnetic, Fast-Charging USB Cable (BLACK) (Worth
              ₦7,600)
            </p>
            <p className="text-white text-3xl font-semibold ">
              ✅Pay On Delivery (See Before You pay)
            </p>
            <div className="grid md:grid-cols-2 gap-10 md:gap-0 my-10 items-center justify-items-center">
              <img src={blueWatch} alt="blue smart-watch" className="w-80" />
              <img src={blackWatch} alt="black smart-watch" className="w-80" />
            </div>

            <p className="text-white text-center text-3xl font-semibold ">
              Old Price: <span className="line-through">₦110,000</span>
            </p>
            <p className="text-white text-center text-3xl font-semibold ">
              New Price: ₦50,000 Only For Today
            </p>
            <p className="text-white text-center text-3xl font-semibold ">
              Delivery Fee: <span className="line-through">₦3,000</span> FREE!
            </p>
            <div className="bg-[#fffffffa] w-full py-2 px-2">
              <h1 className="text-3xl text-center text-blue-700 font-extralight  leading-10">
                We Are Celebrating 1,000+ Orders! <br />
                To say thank you, we’re giving this{" "}
                <span className="font-bold">BIG discount</span> for a limited
                time only.{" "}
                <span className="font-bold">
                  Order Now (Offer valid while stock lasts. After This, It will
                  Go Back to Original Price)
                </span>
              </h1>
            </div>
          </div>
          <div className="bg-amber-300 py-5 px-8 w-full">
            <p className="text-black text-2xl text-center font-semibold">
              Only 6 packages left in stock – Order Now (Offer valid while stock
              lasts. After This, It will Go Back to Original Price)
            </p>
          </div>
          <div className="bg-black py-5 flex items-center px-8 w-full">
            <button className="md:px-50 py-5 rounded bg-red-600 text-white font-semibold border-0 cursor-pointer hover:animate-none transition-all duration-300 ease-in-out mx-auto animate-pulse w-full md:w-auto">
              Click Here to Buy it Now ⚡
            </button>
          </div>
          <p className="text-red-600 text-xl text-center mt-3">
            Order now to receive between the next{" "}
            <span className="font-semibold">4-24 Hours</span> (Very Fast DAY
            TIME Delivery)
          </p>
        </div>
      </section>

      <section id="reviews" className="">
        <div className="flex flex-col items-center mx-auto space-y-5 max-w-6xl pb-20 pt-5 px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-gray-700">REVIEWS</h1>
          <p className="text-gray-500 text-center">
            Don't take our word for it; see what customers who have purchased
            this watch are saying about it!
          </p>
          <hr className=" border-3 w-30 rounded opacity-15" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-15 items-center">
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />
              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-700 text-center">- Chinedu</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-700 text-center">- Folake</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center ">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-700 text-center">- Azeez</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-700 text-center">- Sadiq</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-700 text-center">- Tolu</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-700 text-center">- Amaka .O</p>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className="bg-gray-50">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-gray-700">FAQs</h1>
          <p className="text-gray-500 text-center">
            Got questions? We've got answers. If you some other questions, feel
            free to send us an email to{" "}
            <a
              href="#"
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              hello@example.com
            </a>
          </p>
          <hr className=" border-3 w-30 rounded opacity-15" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-15 items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 font-semibold text-lg">
                Can I pay on delivery?
              </h1>{" "}
              <p className="text-gray-500 text-sm">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 font-semibold text-lg">
                Do you deliver nationwide?
              </h1>
              <p className="text-gray-500 text-sm">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 font-semibold text-lg">
                Will I get a refund if I don't like the product?
              </h1>
              <p className="text-gray-500 text-sm ">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 font-semibold text-lg">
                Will I get a discount for bulk purchase?
              </h1>
              <p className="text-gray-500 text-sm">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 font-semibold text-lg">
                How does the product work?
              </h1>
              <p className="text-gray-500 text-sm">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-700 font-semibold text-lg">
                Can I pay in installments?
              </h1>
              <p className="text-gray-500 text-sm">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
            </div>
          </div>
          <button className="md:px-50 mt-10 py-5 rounded bg-red-600 text-white font-semibold border-0 cursor-pointer hover:animate-none transition-all duration-300 ease-in-out mx-auto animate-pulse w-full md:w-auto">
            Click Here to Buy it Now ⚡
          </button>
        </div>
      </section>
      <section id="contact" className="">
        <div className=" section px-4 md:px-0">
          <div className="max-w-3xl border border-gray-200 rounded flex flex-col mx-auto space-y-5 py-15 px-5 bg-white">
            {" "}
            <h1 className="font-semibold text-gray-700 text-3xl mb-8">
              GET IN TOUCH
            </h1>
            <span className="flex gap-1 text-gray-600">
              <MapPin className="" size={20} /> Your Address
            </span>
            <span className="flex gap-1 text-gray-600">
              <PhoneIcon className="" size={20} /> +234 Your Phone number
            </span>
            <a
              href="#"
              target="_blank"
              className="flex gap-1 text-gray-600 mb-8"
            >
              <Mail className="" size={20} />
              <p className="hover:text-blue-700 transition-colors duration-300 ease-in-out">
                Support@youremail.com
              </p>
            </a>
            <button className="bg-blue-700 hover:bg-gray-700 transition-all duration-500 ease-in-out font-semibold cursor-pointer text-white py-3 rounded-lg w-full">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <footer ref={footerRef}>
        <div className="flex flex-col justify-center items-center gap-5 pt-10 pb-5 bg-white px-4 md:px-0">
          <div className="flex justify-center space-x-5">
            <a
              href=""
              target="_blank"
              className="bg-blue-500 text-white p-2 rounded-full h-10 w-10 hover:-translate-y-1 duration-300 transition-transform ease-in-out"
            >
              <FacebookIcon />
            </a>
            <a
              href=""
              target="_blank"
              className="bg-blue-500 text-white p-2 rounded-full h-10 w-10 hover:-translate-y-1 duration-300 transition-transform ease-in-out"
            >
              <Twitter />
            </a>
            <a
              href=""
              target="_blank"
              className="bg-blue-500 text-white p-2 rounded-full h-10 w-10 hover:-translate-y-1 duration-300 transition-transform ease-in-out"
            >
              <Instagram />
            </a>
            <a
              href=""
              target="_blank"
              className="bg-blue-500 text-white p-2 rounded-full h-10 w-10 hover:-translate-y-1 duration-300 transition-transform ease-in-out"
            >
              <Linkedin />
            </a>
          </div>
          <hr className="w-full text-gray-200" />
          <p className="text-sm text-gray-600">
            Copyright &copy;{new Date().getFullYear()}. All rights reserved{" "}.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
