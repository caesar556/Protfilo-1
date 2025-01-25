import lottieAnime from "../animation/Animation - 1733263918672.json";
import Lottie from "lottie-react";
import { useState, useRef } from "react";
import Loader from './Loader';
import { Sectionwrapper } from '../hooks'
import { styles } from '../utils/styles';
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const formRef = useRef(null);

  const handleLoading = () => {
    setIsLoading(false);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoadingForm(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        form_name: form.name,
        to_name: "Belal Hussien",
        from_email: form.email,
        to_email: "bh255890@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoadingForm(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }).catch((error) => {
      setLoadingForm(false);
      console.log(error);
      alert("Something went wrong.")
    })
  }
  useGSAP(() => {
    gsap.fromTo(
      "#contact-anime",
      { opacity: 0, x: 180 },
      {
        x: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: "#contact-anime",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, [])
  return (
    <section id = "contact" className="min-h-[650px] relative overflow-hidden rounded-lg shadow-card" >
      <div className="inset-0 h-full w-full absolute">
        {
          isLoading &&
          <Loader />
        }
        <video
          className="object-cover h-full w-full"
          src="videos/contact.mp4" type="video/mp4"
          autoPlay
          loop
          muted
          onLoadedData={handleLoading}
        />
      </div>
      <div className="relative h-full w-full flex justify-center  xl:justify-normal">
        <div className="w-full xl:w-1/2">
          <div id="contact-anime" className="bg-transparent special-font sm:border border-primary my-14 max-w-[380px] mx-auto p-7 rounded-xl shadow-card ">
            <p className={`${styles.sectionSubText}`} >Get in touch</p>
            <h2 className={`${styles.sectionHeadText} mb-3`}><b>C</b>ontact.</h2>
            <form
              onSubmit={handleSubmitForm}
              ref={formRef}
              className="flex flex-col gap-6"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-3">Your Name</span>
                <input
                  required
                  onChange={handleChange}
                  value={form.name}
                  type="text"
                  name="name"
                  placeholder="What's your good name?"
                  className="bg-tertiary font-medium border-none py-3 px-5 rounded-lg outline-none"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-3">Email</span>
                <input
                  required
                  onChange={handleChange}
                  value={form.email}
                  type="email"
                  name="email"
                  placeholder="write your Email"
                  className="bg-tertiary font-medium py-3 px-5 rounded-lg outline-none border-none"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-3">Your Message</span>
                <textarea
                  required
                  onChange={handleChange}
                  value={form.message}
                  rows={4}
                  type="text"
                  name="message"
                  placeholder="What you want to say?"
                  className="input bg-tertiary font-medium py-3  px-5 rounded-lg outline-none border-none"
                />
              </label>
              <button
                disabled={loadingForm}
                className={`bg-tertiary p-2 w-[80px] outline-none transition border-none rounded-lg text-[18px] font-medium ${loadingForm ? "opacity-50 cursor-not-allowed" : "hover:text-white duration-150"}`}
                type="submit"
              >
                {loadingForm ? "Sending..." : "Send"}
              </button>

            </form>
          </div>
        </div>
        <Lottie id="contact-anime" className=" w-1/2 h-screen hidden xl:block p-6" animationData={lottieAnime} loop={true} />
      </div>
    </section>
  )
}

export default Sectionwrapper(Contact, "contact");