import { motion } from "motion/react";
import Menu from "../../icons/Menu";

export default function MobileMenuIcon() {
  const mobileMenuOpened = true;

  return (
    <motion.button
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      className="justify-center items-center max-lg:flex hidden"
    >
      <Menu className="stroke-primary-50 h-7 w-7" width={2} />
    </motion.button>
  );
}
