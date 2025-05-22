import { motion } from "motion/react";
import Menu from "../../icons/Menu";
import { useMobileMenuContext } from "../../../context/MobileMenuContext";

export default function MobileMenuIcon() {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();

  return (
    <motion.button
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      className="justify-center items-center max-lg:flex hidden"
      onClick={() => setMobileMenuOpened(true)}
    >
      <Menu className="stroke-primary-50 h-7 w-7" width={2} />
    </motion.button>
  );
}
