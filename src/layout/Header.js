import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "O Meni", to: "#", id: 1 },
  { name: "Kontakt", to: "#", id: 2 },
  { name: "Galerija", to: "#", id: 3 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Header() {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    cycleOpen();
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="lg:px-16 flex place-items-center justify-between bg-primary w-full text-2xl text-bg-primary">
        <div className="hidden md:block transition ease-in-out hover:scale-110 duration-200 hover:text-white">
          <Link href="#">O meni</Link>
        </div>
        <div className="ml-3 mt-1 w-40 transition ease-in-out hover:scale-110 duration-200 hover:text-white">
          <Image alt="" src="/images/logo.png" width={200} height={60}></Image>
        </div>

        <div className="hidden md:block ransition ease-in-out hover:scale-110 duration-200 hover:text-white">
          <Link href="#">Kontakt</Link>
        </div>

        <div className="mr-2 flex md:hidden">
          <button
            onClick={handleClick}
            type="button"
            className=" inline-flex items-center justify-center p-2 rounded-md  text-bg-primary"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: "100vw",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="container flex flex-col p-6 bg-bg-primary-darker"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  variants={itemVariants}
                  className="text-right pb-2  text-4xl font-semibold text-primary"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
