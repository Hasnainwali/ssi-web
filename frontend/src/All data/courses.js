import {
  Code, Monitor, PenTool, Box, Terminal,
} from 'lucide-react';


export const Courses = [
  {
    id: "cit",
    title: "CIT",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613264%2FIMG-20250704-WA0030_j4tsiz.jpg&w=256&q=75",
    desc: "An ideal course for beginners to build a strong foundation in computer usage and essential applications.",
    price: "6000 ruppees",
    duration: "2 months",
    category: "Desktop",
  },
  {
    id: "cpp-language",
    title: "C++ Language",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751616547%2F1920x1080-thumbnail-clean-modern-soft-ui_8GI4U2vcQXO1YkeawKkYBw_wT8QZhpsS4GT0nMqJVM2Eg_nedww8.jpg&w=256&q=75",
    desc: "A complete guide to learning programming fundamentals using C++.",
    price: "6000 ruppees",
    duration: "3 months",
    category: "Web",
  },
  {
    id: "game-development",
    title: "Game Development",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613264%2FIMG-20250704-WA0028_cwlbj2.jpg&w=256&q=75",
    desc: "Learn to create 2D and 3D games from scratch using industry-standard game engines.",
    price: "15000 ruppees",
    duration: "3 months",
    category: "3D",
  },
  {
    id: "3d-modeling",
    title: "3D Modeling",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751617092%2Ffreepik__the-style-is-candid-image-photography-with-natural__40442_kmn2kf.jpg&w=256&q=75",
    desc: "Master 3D modeling, rendering, and animation for games, videos, and more.",
    price: "15000 ruppees",
    duration: "3 months",
    category: "3D",
  },
  {
    id: "autocad",
    title: "AutoCAD",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613264%2FIMG-20250704-WA0033_l1kmsf.jpg&w=256&q=75",
    desc: "Professional design and drafting course for engineers, architects, and designers.",
    price: "15000 ruppees",
    duration: "3 months",
    category: "Desktop",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613264%2FIMG-20250704-WA0027_uwcihy.jpg&w=256&q=75",
    desc: "Learn Photoshop, Illustrator to design logos, posters, and social media content.",
    price: "9000 ruppees",
    duration: "3 months",
    category: "Graphic",
  },
  {
    id: "web-development",
    title: "Web Development",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751617833%2F1500x800-thumbnail-flat-2d-soft-ui-style_cN7-VzoRQIOMzes4EIPifw_K_Al7-owSF-2PI46B482_Q_iuvpru.jpg&w=256&q=75",
    desc: "Build professional and responsive websites using modern front-end and back-end technologies.",
    price: "15000 ruppees",
    duration: "3 months",
    category: "Web",
  },
  {
    id: "ms-office",
    title: "MS Office",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751617248%2FMicrosoft365_n7auzb.png&w=256&q=75",
    desc: "Advanced Microsoft Word, Excel, and PowerPoint for office and business use.",
    price: "6000 ruppees",
    duration: "2 months",
    category: "MS Office",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613266%2FIMG-20250704-WA0014_hjlkyh.jpg&w=256&q=75",
    desc: "Professional video editing to create content for YouTube and social media.",
    price: "5000 ruppees",
    duration: "2 months",
    category: "Graphic",
  },
  {
    id: "typing-master",
    title: "Typing Master",
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613265%2FIMG-20250704-WA0018_p5wke8.jpg&w=256&q=75",
    desc: "Improve typing speed and accuracy with structured practice sessions.",
    price: "5000 ruppees",
    duration: "2 months",
    category: "Desktop",
  },
];

export const referredByOptions = [
  "Friend",
  "SSI Student",
  "College",
  "Seminar",
];


export const frontCourses = [
  {
    id: 1,
    courseImg: './images/web-img.webp',
    courseName: 'Web development',
    duration: '06 Months',
    level: 'Basic to Advance',
    Fees: '15000',
  },
  {
    id: 2,
    courseImg: './images/3dMod-img.webp',
    courseName: '3D Modeling',
    duration: '05 Months',
    level: 'Basic to Advance',
    Fees: '20000',
  },
  {
    id: 3,
    courseImg: './images/CIT.webp',
    courseName: 'CIT',
    duration: '3 Months',
    level: 'Basic to Advance',
    Fees: '10000',
  }
]


export const coursesData = [
  {
    id: 'web-dev',
    title: 'Full Stack Web Development',
    category: 'Web Dev',
    level: 'Advanced',
    duration: '6 Months',
    students: 120,
    rating: 4.8,
    price: 'PKR 25,000',
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751617833%2F1500x800-thumbnail-flat-2d-soft-ui-style_cN7-VzoRQIOMzes4EIPifw_K_Al7-owSF-2PI46B482_Q_iuvpru.jpg&w=256&q=75",
    desc: "Build professional and responsive websites using modern front-end and back-end technologies.",
    // Icon: <Code className="w-10 h-10 text-blue-400" />,
    tags: ['MERN', 'React', 'Node']
  },
  {
    id: '3d-modeling',
    title: '3D Modeling with Blender',
    category: '3D Modeling',
    level: 'Intermediate',
    duration: '4 Months',
    students: 85,
    rating: 4.9,
    price: 'PKR 20,000',
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751617092%2Ffreepik__the-style-is-candid-image-photography-with-natural__40442_kmn2kf.jpg&w=256&q=75",
    desc: "Master 3D modeling, rendering, and animation for games, videos, and more.",
    // Icon: <Box className="w-10 h-10 text-amber-400" />,
    tags: ['Blender', 'Animation', 'Rendering']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design Mastery',
    category: 'Graphics',
    level: 'Beginner',
    duration: '3 Months',
    students: 200,
    rating: 4.7,
    price: 'PKR 15,000',
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613264%2FIMG-20250704-WA0027_uwcihy.jpg&w=256&q=75",
    desc: "Learn Photoshop, Illustrator to design logos, posters, and social media content.",
    // Icon: <PenTool className="w-10 h-10 text-purple-400" />,
    tags: ['Photoshop', 'Illustrator', 'Branding']
  },
  {
    id: 'ms-office',
    title: 'Office Automation & CIT',
    category: 'Office',
    level: 'Beginner',
    duration: '3 Months',
    students: 350,
    rating: 4.6,
    price: 'PKR 10,000',
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751617248%2FMicrosoft365_n7auzb.png&w=256&q=75",
    desc: "Advanced Microsoft Word, Excel, and PowerPoint for office and business use.",
    // Icon: <Monitor className="w-10 h-10 text-emerald-400" />,
    tags: ['Word', 'Excel', 'Typing']
  },
  {
    id: 'python-program',
    title: 'Python Programming',
    category: 'Web Dev',
    level: 'Intermediate',
    duration: '4 Months',
    students: 90,
    rating: 4.9,
    price: 'PKR 22,000',
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613264%2FIMG-20250704-WA0028_cwlbj2.jpg&w=256&q=75",
    desc: 'Learn create and deploy advanced python apps and tools in AI field',
    // Icon: <Terminal className="w-10 h-10 text-yellow-400" />,
    tags: ['Python', 'Django', 'Data']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Graphics',
    level: 'Intermediate',
    duration: '3 Months',
    students: 60,
    rating: 4.8,
    price: 'PKR 18,000',
    image:
      "https://ssiofficial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdzo12ba3f%2Fimage%2Fupload%2Fv1751613264%2FIMG-20250704-WA0030_j4tsiz.jpg&w=256&q=75",
    desc: "An ideal course for beginners to build a strong foundation in UI & UX and essential applications.",
    price: "6000 ruppees",
    // Icon: <PenTool className="w-10 h-10 text-pink-400" />,
    tags: ['Figma', 'Prototyping', 'Research']
  }
];


