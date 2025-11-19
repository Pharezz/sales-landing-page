import React from "react";
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


const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero" className="bg-gray-100">
        <div className="flex flex-col items-center mx-auto space-y-7 section pt-30 px-4 md:px-0">
          <h1 className="text-3xl font-bold text-gray-700 ">
            The Future of Tech is Here
          </h1>
          <p className="text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            itaque ab consectetur, nobis voluptas fugit quibusdam exercitationem
            soluta eos reprehenderit rerum non? Asperiores eum repellendus
            corrupti necessitatibus nulla iure voluptates.
          </p>

          <img src={blueWatch} alt="product image" className="w-50"/>

          <button className="px-25 py-4 mt-5 rounded-full bg-blue-700 text-white border-0 cursor-pointer hover:bg-gray-700 duration-500 font-semibold transition-all ease-in-out mx-auto">
            Buy it Now
          </button>
        </div>
      </section>

      <section id="product" className="">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-gray-700">THE PRODUCT</h1>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            excepturi repudiandae sint beatae minima dolor accusamus illum
            repellendus illo earum?
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10 mt-20 mb-20">
            <img src={blueWatch} alt="product image" className="w-50" />
            <img src={blackWatch} alt="product image" className="w-50" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
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
                Connect Device
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
              <MapPin className="text-blue-500" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">GPS Tracking</h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <HeartPulse className="text-blue-500" size={30} />
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
              <LockKeyhole className="text-blue-500" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">Security Check</h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Lightbulb className="text-blue-500" size={30} />
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
              <Tag className="text-blue-500" size={30} />
              <div className="space-y-1">
                <h1 className="font-semibold text-gray-700 text-lg">Save Your Bills</h1>
                <p className="text-sm text-gray-500 max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  laboriosam maiores deserunt excepturi inventore esse!
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <FlaskConical className="text-blue-500" size={30} />
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
      <section className="bg-gray-100">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 items-center mb-20">
            <div className="space-y-5">
              <div className="flex gap-2">
                <Key className="text-blue-500" size={30} />
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
                <ThumbsUp className="text-blue-500" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">Stay in Touch</h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Megaphone className="text-blue-500" size={30} />
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

            <img src={blackWatch} alt="Product Image" className="mx-auto md:w-auto" />

            <div className="space-y-5">
              <div className="flex gap-2">
                <User className="text-blue-500" size={30} />
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
                <AppWindow className="text-blue-500" size={30} />
                <div className="space-y-1">
                  <h1 className="font-semibold text-gray-700 text-lg">Apps You Love</h1>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laboriosam maiores deserunt excepturi inventore esse!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Watch className="text-blue-500" size={30} />
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
              <CircleCheck className="text-green-500" size={20} />
              <p className="text-sm text-gray-500">
                Compatible with all devices
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <CircleCheck className="text-green-500" size={20} />
              <p className="text-sm text-gray-500">Android and IOS Support</p>
            </span>
            <span className="flex gap-2 items-center">
              <CircleCheck className="text-green-500" size={20} />
              <p className="text-sm text-gray-500">
                Activity and Health Tracker
              </p>
            </span>
            <span className="flex gap-2 items-center">
              <CircleCheck className="text-green-500" size={20} />
              <p className="text-sm text-gray-500">
                Read and reply to messages
              </p>
            </span>
          </span>

          <button className="px-50 py-5 mt-5 rounded-full bg-blue-700 text-white font-semibold border-0 cursor-pointer hover:animate-none transition-all duration-300 ease-in-out mx-auto animate-pulse w-full md:w-auto">
            Buy it Now
          </button>
        </div>
      </section>

      <section id="reviews" className="">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
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
               <p className="text-blue-500 text-center">- Chinedu</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-500 text-center">- Folake</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center ">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-500 text-center">- Azeez</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-500 text-center">- Sadiq</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-500 text-center">- Tolu</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Quote className="text-gray-500" />

              <p className="text-gray-500 text-sm text-center">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus adipisci minima id magni, ipsam nam aspernatur fuga
                quo iure excepturi, modi qui nesciunt eum consequatur"
              </p>
              <p className="text-blue-500 text-center">- Amaka .O</p>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className="bg-gray-100">
        <div className="flex flex-col items-center mx-auto space-y-5 section px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-gray-700">FAQs</h1>
          <p className="text-gray-500 text-center">
            Got questions? We've got answers. If you some other questions, feel
            free to send us an email to{" "}
            <a
              href="#"
              target="_blank"
              className="text-blue-600 hover:underline"
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
      <footer>
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
            Copyright &copy;{new Date().getFullYear()}. All rights reserved{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;