import { Footer } from "@/components/layout";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function BlogFooter() {
  return (
    <Footer>
      <div className="mb-12 mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-6">
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">About Me</h3>
          <div className="text-gray-700">
            <p>Lover of Life. Seeker of Joy.</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Drop By</h3>
          <div className="text-gray-700">
            <p>Toulouse, Batroun, or elsewhere</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Get in Touch</h3>
          <div className="flex flex-row gap-6">
            <a href="mailto:marya.sdk@gmail.com" aria-label="Send me an email">
              <MdOutlineEmail className="fill-gray-400" size={25} />
            </a>
            <a
              href={"https://www.linkedin.com/in/marya-sdk/"}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on Linkedin"
            >
              <FaLinkedin className="fill-gray-400" size={25} />
            </a>
            <a
              href={"https://www.instagram.com/maryasadek/"}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on Instagram"
            >
              <FaInstagram className="fill-gray-400" size={25} />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}
