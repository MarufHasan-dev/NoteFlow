import { motion } from "motion/react";
import Close from "../../icons/Close";
import { navigationLinks } from "../../../utils/content";
import { useMobileMenuContext } from "../../../context/MobileMenuContext";
import { useModalContext } from "../../../context/ModalContext";

export default function MobileMenu() {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  const { setActiveModal } = useModalContext();

  function handleGetStarted() {
    setMobileMenuOpened(false);
    setActiveModal("sign-up");
  }

  return (
    <motion.div
      onClick={(e) =>
        e.currentTarget === e.target && setMobileMenuOpened(false)
      }
      className="bg-primary-1300/50 fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-end px-6 pl-28 backdrop-blur-sm"
      animate={mobileMenuOpened ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          visibility: "hidden",
        },
        visible: {
          opacity: 100,
          visibility: "visible",
        },
      }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="bg-primary-1400 bg-[url('./assets/Noise.webp')] flex flex-col justify-between basis-80 my-6 rounded-2xl py-8 px-6 bg-repeat"
        animate={mobileMenuOpened ? "visible" : "hidden"}
        variants={{
          hidden: {
            x: "100%",
            opacity: 0,
            visibility: "hidden",
          },
          visible: {
            x: "0%",
            opacity: 100,
            visibility: "visible",
          },
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        <div>
          <button
            className="w-9.5 h-9.5 border-2 border-primary-75 items-center justify-center flex rounded-xl p-1.5 cursor-pointer hover:bg-primary-75 transition-properties group mb-16"
            onClick={() => setMobileMenuOpened(false)}
          >
            <Close
              width={2}
              className="stroke-primary-75 group-hover:stroke-primary-1400 transition-properties"
            />
          </button>
          <ul className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-lg/8 text-primary-50 hover:text-primary-500 transition-properties"
                  href={link.href}
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="mb-3 text-primary-50 text-base/loose font-medium p-3.5 w-full border-2 border-primary-50 rounded-full cursor-pointer hover:bg-primary-50 hover:text-primary-1400 transition-properties box-border">
            Login
          </button>
          <button
            onClick={handleGetStarted}
            className="text-primary-1300 text-base/loose p-3.5 bg-primary-500 border-2 border-primary-500 hover:bg-primary-50 hover:border-primary-50 w-full rounded-full primary-glow-hover transition-properties cursor-pointer box-border"
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
