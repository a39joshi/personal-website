export const siteConfig = {
  name: "Anjali Joshi",
  title: "Software Engineer at Apple",
  description: "Portfolio website of Anjali Joshi",
  accentColor: "#1d4ed8",
  social: {
    email: "anjali.joshi2412@example.com",
    linkedin: "https://www.linkedin.com/in/anjali-j-7881a0127/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/a39joshi",
  },
  aboutMe:
    "Hi, I’m Anjali. I love solving problems 🧩, learning new things, and meeting people who challenge me to think differently. Traveling ✈️, cooking, and discovering new foods are some of my favorite ways to spend time. I’m always up for a new challenge 💪, it’s the best way to grow and keep life interesting!!",
  skills: ["Python", "React", "Swift", "Robotics", "Computer Vision"],
  // projects: [
  //   {
  //     name: "AI Dev Roundup Newsletter",
  //     description:
  //       "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
  //     link: "https://aidevroundup.com/?ref=devportfolio",
  //     skills: ["React", "Node.js", "AWS"],
  //   },
  //   {
  //     name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
  //     description:
  //       "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
  //     link: "https://fullstackextensions.com/?ref=devportfolio",
  //     skills: ["React", "Node.js", "AWS"],
  //   },
  //   {
  //     name: "ExtensionKit",
  //     description:
  //       "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
  //     link: "https://extensionkit.io/?ref=devportfolio",
  //     skills: ["React", "Node.js", "AWS"],
  //   },
  // ],
  experience: [
    //   {
    //   company: "Meta",
    //   title: "Software Engineer",
    //   dateRange: "Jan 2026 - Present",
    //   bullets: [
    //     "Led development of microservices architecture serving 1M+ users",
    //     "Reduced API response times by 40% through optimization",
    //     "Mentored team of 5 junior developers",
    //   ],
    // },
    {
      company: "Apple",
      title: "Software Engineer",
      dateRange: "June 2021 - Present",
      bullets: [
        "Led end-to-end performance improvements for Apple Watch features (Dictation, Translation).",
        "Developed an asynchronous robot control service in Python (asyncio, aiohttp), enabling concurrent RESTful communication and real-time I/O efficiency.",
        "Designed and implemented an MQTT-based asynchronous pub-sub architecture in Python."
      ],
    },
    {
      company: "Tesla",
      title: "Software Engineer Intern",
      dateRange: "May 2020 - April 2021",
      bullets: [
        "Maintained an automation testing framework using Pytest for system validation.",
        "Developed and deployed a real-time dashboard to monitor system performance metrics."
      ],
    },
    {
      company: "Uber ATG",
      title: "Software Engineer Intern",
      dateRange: "Sept 2019 - Dec 2019",
      bullets: [
        "Contributed to next-generation autonomous vehicle module verification and validation.",
        "Developed software test systems for ethernet & power tests."
      ],
    },
  ],
  education: [
    {
      school: "University of Waterloo",
      degree: "Bachelor of Applied Science in Mechatronics Engineering",
      dateRange: "2016 - 2021",
      achievements: [
        "Specialized in AI",
        "GPA 3.9/4.0"
        // "President of Computer Science Club",
      ],
    }
  ],
};
