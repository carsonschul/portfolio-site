import { useState } from "react"
import { motion } from "framer-motion"
import "./index.css"

function App() {

  window.scrollTo(0, 0);

  if (typeof window !== "undefined" && !window.__scrollLockedOnce) {
    document.body.style.overflow = "hidden"
    window.__scrollLockedOnce = true
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-black">
      <motion.header
        className="sticky top-0 z-50 flex justify-center items-center bg-blue-950 h-16"
        initial={{ y: -100, backgroundImage: "none" }}
        animate={{
          y: 0,
          backgroundImage: [
            "none",
            "linear-gradient(to right, #172554, #1e3a8a, #172554)",
            "none",
          ],
        }}
        transition={{
          y: { duration: 2, delay: 5 },
          backgroundImage: { duration: 3, delay: 7 }
        }}
        onAnimationComplete={() => (document.body.style.overflow = "auto")}>
        <nav className="h-full flex justify-evenly w-1/2 text-xl text-white">
          <motion.div
            initial={{ textShadow: "none" }}
            animate={{
              textShadow: ["none", "0 0 30px #e5e7eb", "none"],
            }}
            transition={{ duration: 3, delay: 7 }}
          >
            <a
              href="#about-me"
              className="relative flex items-center justify-center h-full px-20 text-white overflow-hidden group hover-gray-glow duration-300"
            >
              <span className="z-10 relative cursor-pointer">
                About Me
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950" />
            </a>
          </motion.div>
          <motion.div
            initial={{ textShadow: "none" }}
            animate={{
              textShadow: ["none", "0 0 30px #e5e7eb", "none"],
            }}
            transition={{ duration: 3, delay: 7 }}
          >
            <a
              href="#projects"
              className="relative flex items-center justify-center h-full px-20 text-white overflow-hidden group hover-gray-glow duration-300"
            >
              <span className="z-10 relative cursor-pointer">
                Projects
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950" />
            </a>
          </motion.div>
          <motion.div
            initial={{ textShadow: "none" }}
            animate={{
              textShadow: ["none", "0 0 30px #e5e7eb", "none"],
            }}
            transition={{ duration: 3, delay: 7 }}
          >
            <a
              href="#contact"
              className="relative flex items-center justify-center h-full px-20 text-white overflow-hidden group hover-gray-glow duration-300"
            >
              <span className="z-10 relative cursor-pointer">
                Contact
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950" />
            </a>
          </motion.div>
        </nav>
      </motion.header>
      <section
        id="hero"
        className="min-h-screen flex flex-col flex-grow gap-6 items-center justify-center tracking-wide">
        <motion.h1
          id="hero-title"
          className="text-6xl font-bold text-blue-500 blue-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}>
          Carson Schulte
        </motion.h1>
        <p
          id="hero-desc"
          className="flex flex-col gap-4 text-3xl italic text-white items-center gray-glow">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}>
            Web Developer.
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3.5 }}>
            Software Engineer.
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4.5 }}>
            Storyteller at Heart.
          </motion.span>
        </p>
      </section>
      <motion.section
        id="about-me"
        className="flex flex-col items-center justify-center min-h-screen gap-6 bg-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        viewport={{ amount: 0.4 }} // triggers early enough to see the fade
      >
        <h2
          id="about-me-title"
          className="text-blue-500 blue-glow text-6xl font-bold"
        >
          About Me
        </h2>

        <p className="text-white gray-glow text-lg px-56 text-center">
          Hi there. Nice to meet you. I’m the About Me section.
          <br /><br />
          Just kidding, I’m Carson.
          <br /><br />
          I’ve always been a creative person. When I was a kid, I was making dumb skits with my cousins and playing piano nonstop. As I got older, that turned into working as a professional accompanist, acting in theater and short films, and writing my own screenplays.
          <br /><br />
          More recently, I got into coding. I started on freeCodeCamp, working through their web design, JavaScript, and React courses. I didn’t have a teacher or mentor—just curiosity and persistence.
          <br /><br />
          In less than six months, I went from “What’s a component?” to building full projects. My first was an Expense Tracker where I learned state management, conditional rendering, and the basics of UI/UX. After that, I built a Workout Planner themed after my old high school—a full-stack app with custom React UI, authentication, and a Node/Prisma backend.
          <br /><br />
          For me, coding feels like another creative outlet. It’s structure mixed with imagination. And like any good story, I’m just getting started.
        </p>
      </motion.section>
    </div>
  )

}
export default App
