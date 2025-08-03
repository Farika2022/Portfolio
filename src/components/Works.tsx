import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Reveal.tsx";
import {
  Brain,
  Heart,
  Lightbulb,
  Globe,
  BookPlusIcon,
  Laptop,
} from "lucide-react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Modal from "react-modal";

{
  /*Included images */
}
import BookHome from "../assets/Book_home.png";
import BookInfo from "../assets/Book_info.png";
import BookS from "../assets/Book_service.png";
import BookS1 from "../assets/Book_service1.png";
import BookS2 from "../assets/Book_service2.png";
import BookC from "../assets/Book_contact.png";
import BookU from "../assets/Book_Ureg.png";
import BookUl from "../assets/Book_Ulogin.png";
import Book1 from "../assets/Booking1.png";
import Book2 from "../assets/Booking2.png";
import Book3 from "../assets/Booking3.png";
import Book4 from "../assets/Booking3 (2).png";
import BookInfo1 from "../assets/Booking_info.png";
import BookA from "../assets/Book_Alogin.png";
import BookA1 from "../assets/Admin1.png";
import BookA2 from "../assets/Admin2.png";
import BookA3 from "../assets/Admin3.png";
import BookA4 from "../assets/Admin4.png";
import atkins from "../assets/atkins.png";
import diet from "../assets/diet.png";
import about from "../assets/Aboutdiet.png";
import grocery from "../assets/grocery.png";
import result from "../assets/result.png";
import keto from "../assets/keto.png";
import veg from "../assets/veg.png";
import balance from "../assets/balance.png";
import Label from "../assets/Label Propagation Implementation.jpeg";
import KNN from "../assets/KNN Implementation.jpeg";
import Forest from "../assets/Random Forest Implementation.jpeg";
import grid from "../assets/Grid cell implementation.jpg";
import occurance from "../assets/Dropdown list of prediction models.jpeg";
import Sexp from "../assets/img_popup2.png";
import learnmore from "../assets/img_popup3.png";
import intro1 from "../assets/img_PBunmodified.png";
import notify from "../assets/img_notifier.png";
import IP from "../assets/img_internalpage1.png";
import IP2 from "../assets/img_internalpage_notrackers.png";
import event from "../assets/event.png";
import event1 from "../assets/event1.png";
import weather from "../assets/weather_app.mp4";
import weather1 from "../assets/weather.png";
import Ecommerce from "../assets/E-commerce1.mp4";
import Ecommerce1 from "../assets/Ecommerce.png";

const Works: React.FC = () => {
  return (
    <section
      id="works"
      className="relative bg-violet-blush py-2 overflow-hidden"
    >
      <div className="section">
        <div className="mb-12 text-center">
          <Reveal direction="up">
            <motion.h2
              className="text-4xl md:text-5xl font-serif text-center mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Works
            </motion.h2>
          </Reveal>

          <motion.div
            className="h-2 w-24 bg-pink-accent mx-auto rounded-full mb-1"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {/*Projects  Section*/}
        </div>
        <div className="max-w-2xl mx-auto mb-12">
          <Reveal direction="left" delay={0.2}>
            <motion.blockquote
              className="text-2xl md:text-2xl font-serif italic text-center text-neutral-900 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              “Measuring programming progress by lines of code is like measuring
              aircraft building progress by weight.” -{" "}
              <strong>Bill Gates</strong>
            </motion.blockquote>

            <motion.p
              className="text-xl text-center text-neutral-700 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              As per the quotes, my works shows my level of progress. I arranged
              my projects in chronological order.
            </motion.p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Reveal direction="right" delay={0.4}>
            <PhilosophyCard
              title="Chrome-extention"
              description="In this project, we used pre-existing extention and modified some features. I included Green color notifier and Extension Info page "
              delay={0}
              images={[
                {
                  original: notify,
                  thumbnail: notify,
                },
                {
                  original: intro1,
                  thumbnail: intro1,
                },

                {
                  original: Sexp,
                  thumbnail: Sexp,
                },
                {
                  original: learnmore,
                  thumbnail: learnmore,
                },
                {
                  original: IP,
                  thumbnail: IP,
                },
                {
                  original: IP2,
                  thumbnail: IP2,
                },
              ]}
            />
          </Reveal>
          <Reveal direction="right" delay={0.4}>
            <PhilosophyCard
              title="Help the Botanist"
              description="In this project, I was responsible for developing the front-end of a plant distribution prediction tool. The web application allows users to select a plant species and an occurrence mode, which triggers the display of a heatmap over Denmark.If current occurrence data is available, the app shows a real-time heatmap based on actual observations. If not, it communicates with a Machine Learning model to predict the plant's potential distribution, and displays a generated heatmap accordingly. I integrated the frontend with the backend (ML model) using FastAPI, enabling smooth, asynchronous communication between the client interface and the model server."
              delay={0.1}
              images={[
                {
                  original: grid,
                  thumbnail: grid,
                },
                {
                  original: occurance,
                  thumbnail: occurance,
                },

                {
                  original: KNN,
                  thumbnail: KNN,
                },
                {
                  original: Label,
                  thumbnail: Label,
                },
                {
                  original: Forest,
                  thumbnail: Forest,
                },
              ]}
            />
          </Reveal>
          <Reveal direction="right" delay={0.4}>
            <PhilosophyCard
              title="Booking Website"
              delay={0.2}
              images={[
                {
                  original: BookHome,
                  thumbnail: BookHome,
                },
                {
                  original: BookInfo,
                  thumbnail: BookInfo,
                },
                {
                  original: BookS,
                  thumbnail: BookS,
                },
                {
                  original: BookS1,
                  thumbnail: BookS1,
                },
                {
                  original: BookS2,
                  thumbnail: BookS2,
                },
                {
                  original: BookC,
                  thumbnail: BookC,
                },
                {
                  original: BookU,
                  thumbnail: BookU,
                },
                {
                  original: BookUl,
                  thumbnail: BookUl,
                },
                {
                  original: Book1,
                  thumbnail: Book1,
                },
                {
                  original: Book2,
                  thumbnail: Book2,
                },
                {
                  original: Book3,
                  thumbnail: Book3,
                },
                {
                  original: Book3,
                  thumbnail: Book3,
                },
                {
                  original: Book4,
                  thumbnail: Book4,
                },
                {
                  original: BookInfo1,
                  thumbnail: BookInfo1,
                },
                {
                  original: BookA,
                  thumbnail: BookA,
                },
                {
                  original: BookA1,
                  thumbnail: BookA1,
                },
                {
                  original: BookA2,
                  thumbnail: BookA2,
                },
                {
                  original: BookA3,
                  thumbnail: BookA3,
                },
                {
                  original: BookA4,
                  thumbnail: BookA4,
                },
              ]}
              description={
                <>
                  <p className="text-xl text-white ">
                    I developed a full-stack web application that enables
                    customers to book wash services for their vehicles through a
                    user-friendly client interface. Customers can explore the
                    various services provided by the company and schedule
                    appointments with ease.
                  </p>
                  <br />
                  <p className="text-xl text-white ">
                    <strong>On the admin side</strong>, the platform includes a
                    secure dashboard where administrators can:
                  </p>
                  &nbsp;
                  <ul className="text-xl list-disc list-inside ml-4">
                    <li>Monitor bookings in real-time</li>
                    <li>View a list of all registered customers</li>
                    <li>Track the service progress of each booking</li>
                  </ul>
                  <br />
                  <p className="text-xl text-white ">
                    This project demonstrates my skills in both frontend and
                    backend development, as well as handling CRUD operations,
                    user authentication, and responsive design for a seamless
                    experience across devices.
                  </p>
                </>
              }
            />
          </Reveal>
          <Reveal direction="left" delay={0.4}>
            <PhilosophyCard
              title=" Upcoming Events "
              description="I created a simple website about UpcomingEvents. To strengthen my HTML and CSS skill."
              delay={0}
              images={[
                {
                  original: event,
                  thumbnail: event,
                },

                {
                  original: event1,
                  thumbnail: event,
                },
              ]}
            />
          </Reveal>
          <Reveal direction="right" delay={0.4}>
            <PhilosophyCard
              title=" Basic Diet Information "
              description="I created a simple website about diet. And I included basic information about the diet along with its types."
              delay={0}
              images={[
                {
                  original: diet,
                  thumbnail: diet,
                },

                {
                  original: about,
                  thumbnail: about,
                },
                {
                  original: grocery,
                  thumbnail: grocery,
                },
                {
                  original: result,
                  thumbnail: result,
                },
                {
                  original: atkins,
                  thumbnail: atkins,
                },
                {
                  original: keto,
                  thumbnail: keto,
                },
                {
                  original: veg,
                  thumbnail: veg,
                },
                {
                  original: balance,
                  thumbnail: balance,
                },
              ]}
            />
          </Reveal>
          <Reveal direction="right" delay={0.4}>
            <PhilosophyCard
              title=" Weather App "
              description="I created a simple Weather App. It display the real-time temperature, wind and humidity of the selected city."
              delay={0}
              images={[
                {
                  type: "video",
                  original: weather, 
                  thumbnail: weather1, 
                },
              ]}
            />
          </Reveal>
          <Reveal direction="left" delay={0.4}>
            <PhilosophyCard
              title=" E-commerce website "
              description="I created a simple e-commerce website for dress. And I also included simple cart and payment pages to it."
              delay={0}
              images={[
               {
                  type: "video",
                  original: Ecommerce, 
                  thumbnail: Ecommerce1, 
                },
              ]}
            />
          </Reveal>
        </div>

        <div className="relative w-1/2 h-[200px]"></div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            className="absolute bottom-0 left-0 w-full h-auto"
            viewBox="0 10 800 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f0d527fd"
              d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,128C672,149,768,203,864,202.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
const PhilosophyCard: React.FC<{
  title: string;
  description: React.ReactNode;
  delay: number;
  images?: { type?: "image" | "video"; original: string; thumbnail: string }[];
}> = ({ title, description, delay, images = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = descRef.current;
    if (el) {
      // If content overflows when not expanded
      const shouldShow = el.scrollHeight > el.clientHeight;
      setShowToggle(shouldShow);
    }
  }, [description]);
  return (
    <motion.div
      className="flex flex-col justify-between h-90 text-center p-12 bg-gradient-to-br from-violet-accent to-pink-accent rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Stacked image preview */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="relative w-12 h-12 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={images[0].thumbnail}
            alt="Preview"
            className="rounded-md shadow-md w-full h-full object-cover"
          />
          {images.length > 1 && (
            <div className="absolute top-0 right-0 bg-black bg-opacity-50 text-white px-2 text-xs rounded-bl">
              +{images.length - 1} more
            </div>
          )}
        </div>
        <h3 className="text-2xl font-serif text-neutral-900 mb-4">{title}</h3>
      </div>

      <div
        ref={descRef}
        className={`text-white text-xl transition-all ${
          showFull ? "max-h-full" : "line-clamp-4"
        } overflow-hidden`}
      >
        {description}
      </div>

      {/* Only show if text is overflowing */}
      {showToggle && (
        <button
          className="text-center mt-2 text-yellow-300 text-sm self-start"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Read More"}
        </button>
      )}

      {/* Modal Gallery */}
      {images.length > 0 && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="max-w-4xl bottom-20 mx-auto mt-16 bg-white rounded-lg p-10 outline-none"
          overlayClassName="fixed   inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50"
        >
          <ImageGallery
            items={images}
  showPlayButton={true}
  showThumbnails={true}
  additionalClass="custom-gallery"
  renderItem={renderMediaItem}
          />
        </Modal>
      )}
    </motion.div>
  );
};
const renderMediaItem = (item: any) => {
  if (item.type === 'video') {
    return (
      <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 10 }}>
        <video
          controls
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          poster={item.thumbnail}
        >
          <source src={item.original} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // Default image
  return (
    <img
      src={item.original}
      alt=""
      style={{ width: '100%', borderRadius: '12px' }}
    />
  );
};
export default Works;
