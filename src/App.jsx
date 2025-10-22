import { useState } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import "./index.css"

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (typeof window !== "undefined" && !window.__scrollLockedOnce) {
    document.body.style.overflow = "hidden"
    window.__scrollLockedOnce = true
  }

  const [readMore, setReadMore] = useState({
    workout: false,
    expense: false,
    portfolio: false
  });

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
        <nav className="h-full text-center flex justify-evenly w-full sm:w-1/2 text-lg sm:text-xl text-white">
          <motion.div
            initial={{ textShadow: "none" }}
            animate={{
              textShadow: ["none", "0 0 30px #e5e7eb", "none"],
            }}
            transition={{ duration: 3, delay: 7 }}
          >
            <a
              href="#about-me"
              className="relative flex items-center justify-center h-full px-4 sm:px-20 text-white overflow-hidden group hover-gray-glow duration-300"
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
              className="relative flex items-center justify-center h-full px-4 sm:px-20 text-white overflow-hidden group hover-gray-glow duration-300"
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
              className="relative flex items-center justify-center h-full px-4 sm:px-20 text-white overflow-hidden group hover-gray-glow duration-300"
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
        className="min-h-screen flex flex-col gap-6 items-center justify-center text-center tracking-wide">
        <motion.h1
          id="hero-title"
          className="text-4xl sm:text-6xl font-bold text-blue-500 blue-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}>
          Carson Schulte
        </motion.h1>
        <p
          id="hero-desc"
          className="flex flex-col gap-4 text-2xl sm:text-4xl italic text-white items-center gray-glow">
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
      <div className="h-24 w-full bg-gradient-to-b from-transparent via-blue-950/40 to-transparent" />
      <section
        id="about-me"
        className="flex flex-col items-center justify-center min-h-screen bg-black scroll-mt-[-50px] px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <h2
            id="about-me-title"
            className="text-blue-500 blue-glow text-4xl sm:text-6xl font-bold"
          >
            About Me
          </h2>

          <p className="text-white gray-glow text-md sm:text-lg px-8 sm:px-56 text-center">
            Hi there. Nice to meet you. I’m the About Me section.
            <br /><br />
            Just kidding, I’m Carson.
            <br /><br />
            I’ve always been a creative person. When I was a kid, I was making dumb
            skits with my cousins and playing piano nonstop. As I got older, that
            turned into working as a professional accompanist, acting in theater and
            short films, and writing my own screenplays.
            <br /><br />
            More recently, I got into coding. I started on freeCodeCamp, working
            through their web design, JavaScript, and React courses. I didn’t have a
            teacher or mentor—just curiosity and persistence.
            <br /><br />
            In less than six months, I went from “What’s a component?” to building
            full projects. My first was an Expense Tracker where I learned state
            management, conditional rendering, and the basics of UI/UX. After that, I
            built a Workout Planner themed after my old high school—a full-stack app
            with custom React UI, authentication, and a Node/Prisma backend.
            <br /><br />
            For me, coding feels like another creative outlet. It’s structure mixed
            with imagination. And like any good story, I’m just getting started.
          </p>
        </motion.div>
      </section>
      <div className="h-24 w-full bg-gradient-to-b from-transparent via-blue-950/40 to-transparent" />
      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen bg-black gap-6 sm:my-16 px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <h2
            id="project-title"
            className="text-blue-500 blue-glow text-4xl sm:text-6xl font-bold mb-2"
          >
            Projects
          </h2>
        </motion.div>
        {/* Project 1 */}
        <motion.div
          className="flex flex-col bg-blue-950/20 border border-blue-900 rounded-2xl p-6 w-full sm:w-1/2 hover:scale-[1.02] transition-transform duration-300 blue-glow-border items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl text-center font-semibold text-blue-400 mb-2">
            Workout Planner
          </h3>
          <p className="text-gray-200 text-md sm:text-lg mb-6 leading-relaxed text-center">
            A full-stack workout app built with React, Node, and Prisma. Users can create custom plans, log exercises, and track progress.
            {readMore.workout === false && (
              <>
                <br />
                <span
                  onClick={() => setReadMore(prev => ({ ...prev, workout: true }))}
                  className="text-gray-400 text-md sm:text-lg hover:underline cursor-pointer">
                  Read more
                </span>
              </>
            )}
            {readMore.workout === true && (
              <>
                <br /> <br />
                As a gym rat myself, this is a passion project that I built with my old high school in mind, with the idea that it could be used by current students to track their workouts and stay motivated. With this app, I learned how to work with nested state, further sharpened my UI/UX skills, and implemented a backend for the first time.
                <br /> <br />
                While I would like to expand this app even further with a log book and even leaderboards if it were implemented into the school system, I'm proud of what I learned and accomplished with this app.
                <br />
                <span
                  onClick={() => setReadMore(prev => ({ ...prev, workout: false }))}
                  className="text-gray-400 hover:underline cursor-pointer">
                  Read less
                </span>
              </>
            )}
          </p>
          <div className="flex justify-center mb-6">
            <img src="https://i.imgur.com/zAIYiki.png" className="w-full sm:h-72 rounded-full border-2 border-white brightness-75 gray-glow-border" />
          </div>
          <div className="flex gap-4 text-blue-300 justify-center">
            <a href="https://workout-planner-2.netlify.app" target="_blank" className="hover:underline text-md sm:text-lg">
              Live Demo →
            </a>
            <a href="https://github.com/carsonschul/seaside-workout-planner" target="_blank" className="text-gray-400 hover:underline text-md sm:text-lg">
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="flex flex-col bg-blue-950/20 border border-blue-900 rounded-2xl p-6 w-full sm:w-1/2 hover:scale-[1.02] transition-transform duration-300 blue-glow-border justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-3xl font-semibold text-blue-400 mb-2">
            Expense Tracker
          </h3>
          <p className="text-gray-200 mb-6 leading-relaxed text-center text-md sm:text-lg">
            A budgeting app built with React that lets users categorize and track spending. Focused on intuitive UI and fluid interaction design.
            {readMore.expense === false && (
              <>
                <br />
                <span
                  onClick={() => setReadMore(prev => ({ ...prev, expense: true }))}
                  className="text-gray-400 hover:underline cursor-pointer text-md sm:text-lg">
                  Read more
                </span>
              </>
            )}
            {readMore.expense === true && (
              <>
                <br /> <br />
                This was my first solo project outside of freeCodeCamp, and I learned a ton from it. I'm particularly proud of the conditional rendering logic on this one, as I had to vigorously determine what should be visible to the user during certain actions in order to create a fluid experience. It was also my first time putting together a UI from scratch.
                <br /><br />
                While I would probably do some things differently now, this app demonstrates that I can develop a product from start to finish.
                <br />
                <span
                  onClick={() => setReadMore(prev => ({ ...prev, expense: false }))}
                  className="text-gray-400 hover:underline cursor-pointer">
                  Read less
                </span>
              </>
            )}
          </p>
          <img src="https://i.imgur.com/7sLylfu.png" className="w-2/3 sm:h-72 rounded-full mb-6 border-2 border-white brightness-75 gray-glow-border" />
          <div className="flex gap-4 text-blue-300">
            <a href="https://expense-tracker-prototype.netlify.app" target="_blank" className="hover:underline text-md sm:text-lg">
              Live Demo →
            </a>
            <a href="https://github.com/carsonschul/expense-tracker" target="_blank" className="text-gray-400 hover:underline text-md sm:text-lg">
              GitHub
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col bg-blue-950/20 border border-blue-900 rounded-2xl p-6 w-full sm:w-1/2 hover:scale-[1.02] transition-transform duration-300 blue-glow-border items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-3xl font-semibold text-blue-400 mb-2">
            This Website
          </h3>
          <p className="text-gray-200 mb-6 leading-relaxed text-md sm:text-lg">
            You're looking at it!
          </p>
          <img src="https://i.imgur.com/aNEELJA.png" className="rounded-full mb-6 border-2 border-white brightness-75 gray-glow-border h-36 sm:h-72 sm:w-2/3" />
          <div className="flex gap-4 text-blue-300">
            <a
              href="#"
              className="hover:underline text-md sm:text-lg"
              onClick={(e) => {
                e.preventDefault()
                alert("My dude... you're already here.")
              }}>
              Live Demo →
            </a>
            <a href="https://github.com/carsonschul/portfolio-site" target="_blank" className="text-gray-400 hover:underline text-md sm:text-lg">
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
      <div className="h-24 w-full bg-gradient-to-b from-transparent via-blue-950/40 to-transparent" />
      <section
        id="contact"
        className="flex flex-col items-center sm:my-16 h-auto scroll-mt-[-50px] text-center gap-8 px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-blue-500 blue-glow">
            Contact
          </h2>
          <p className="text-gray-300 text-md sm:text-lg max-w-xl gray-glow leading-relaxed">
            Want to chat, collaborate, or just say hi? I’m always open to new
            opportunities and creative projects.
            <br />
            <br />
            You can reach me directly at{" "}
            <a
              href="mailto:schultecarson@gmail.com"
              className="text-blue-400 underline hover:text-blue-300 transition-colors"
            >
              schultecarson@gmail.com
            </a>{" "}
            or connect below.
          </p>

          <div className="flex gap-8 mt-4 text-blue-500 text-xl sm:text-2xl">
            <motion.a
              href="https://github.com/carsonschul"
              target="_blank"
              whileHover={{ scale: 1.15, textShadow: "0 0 20px #3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-300"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/carson-schulte-0473b6366/"
              target="_blank"
              whileHover={{ scale: 1.15, textShadow: "0 0 20px #3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-300"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:schultecarson@gmail.com"
              whileHover={{ scale: 1.15, textShadow: "0 0 20px #3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-300"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </section>
      <footer className="bg-blue-950/30 border-t border-blue-900 py-6 text-center text-gray-400 mt-16 blue-glow-border px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <p className="text-blue-400 tracking-wide blue-glow text-md sm:text-lg">
            Thanks for stopping by
          </p>
          <p className="text-gray-400 text-sm sm:text-md">
            © {new Date().getFullYear()} Carson Schulte. Built with React & Framer Motion.
          </p>
          <div className="flex gap-6 mt-2 text-blue-400 text-lg sm:text-xl">
            <motion.a
              href="https://github.com/carsonschul"
              target="_blank"
              whileHover={{ scale: 1.1, textShadow: "0 0 15px #3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-300"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/carson-schulte-0473b6366/"
              target="_blank"
              whileHover={{ scale: 1.1, textShadow: "0 0 15px #3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-300"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:schultecarson@gmail.com"
              whileHover={{ scale: 1.1, textShadow: "0 0 15px #3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-blue-300"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </footer>
    </div >
  )

}
export default App
