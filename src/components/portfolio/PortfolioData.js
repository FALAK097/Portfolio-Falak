import IMG1 from '../../assets/foodrecipe.png';
import IMG2 from '../../assets/edu1.png';
import IMG3 from '../../assets/spotify.PNG';
import IMG5 from '../../assets/wildheart.png';
import IMG6 from '../../assets/Nike.PNG';
import IMG7 from '../../assets/airbnb.png';
import IMG8 from '../../assets/blog.png';
import IMG9 from '../../assets/codetoimage.PNG';
import IMG10 from '../../assets/github.png';
import IMG11 from '../../assets/devfinder.PNG';
import IMG12 from '../../assets/Fithub.PNG';
import IMG13 from '../../assets/BeautyStore.PNG';

const data = [
  {
    id: 11,
    image: IMG11,
    title: 'Dev Finder',
    category: 'Web App',
    content:
      'Dev Finder is an application built using Next.js, Drizzle, PostgreSQL, Docker, GetStream, Tailwind, Shadcn UI which allows developers from anywhere around the world to connect in an online room with other programmers and code together through screen sharing and solve problems together. It provides language specific room tags, so developers can join in their preferred language rooms and help other developers around the world.',
    github: 'https://github.com/FALAK097/devfinder',
    demo: 'https://drive.google.com/file/d/1LHWTFmuTLURbjVj3vrDF-UbVRaq-PxO8/view',
  },
  {
    id: 1,
    image: IMG3,
    title: 'Spotify Clone',
    category: 'Web App',
    content:
      'Developed a Spotify Clone, a full-stack music streaming application, using Next.js, React, Tailwind CSS, Supabase, PostgreSQL, and Stripe. The project includes features such as user authentication, song playback, favorites, playlists, and integration with Stripe for premium subscriptions, providing users with a Spotify-like experience.',
    github: 'https://github.com/FALAK097/spotify_clone',
    demo: 'https://spotify-clone-falak097.vercel.app/',
  },
  {
    id: 9,
    image: IMG12,
    title: 'FitHub',
    category: 'Mobile App',
    content:
      'FitHub is a fitness application built using React Native, Expo, Firebase, and NativeWind(Tailwind CSS). The app provides users with a platform to learn and practice various exercises, get personalzied diet plans, and track their daily steps. Users can also detect different gym machines using the camera and get information about the machine and how to use it. The app also provides a feature to chat with an AI Chatbot that can provide information regarding diet and exercises.',
    github: 'https://github.com/FALAK097/FitnessApp',
    demo: 'https://fithub-showcase.vercel.app/',
  },
  {
    id: 12,
    image: IMG13,
    title: 'Beauty Store App',
    category: 'Mobile App',
    content:
      'Beauty Store App is a mobile application built using React Native, Expo, Firebase, Firestore Database, Firebase Auth, Firestore Storage. This app is an inventory management app for a beauty store where new category and products could be added, edited, deleted and viewed. The app also provides features like user authentication, dashboard to see number of users, categories, products, and products low in inventory and is displayed using Victory Native Charts.',
    github: 'https://github.com/FALAK097/beautyStore',
    demo: 'https://drive.google.com/file/d/1yoT9vZts26OJTCSCH6mbd0KNIpYlkxP5/view',
    height: '500px',
  },
  {
    id: 10,
    image: IMG10,
    title: 'GitHub Clone',
    category: 'Web App',
    content:
      'Introducing a GitHub-inspired platform, employing the MERN stack, Tailwind CSS, and Passport.js. Features include GitHub authentication via Passport.js, user profile and repository fetching, user search, and profile liking. Additionally, explore trending repositories by language. Experience seamless collaboration and exploration with robust error handling and intuitive design.',
    github: 'https://github.com/FALAK097/mern-github',
    demo: 'https://mern-github.onrender.com/',
  },
  {
    id: 2,
    image: IMG7,
    title: 'Airbnb Clone',
    category: 'Web App',
    content:
      "Welcome to my Airbnb Clone project, a showcase of my MERN stack expertise. This full-stack application mirrors Airbnb's core functionalities, offering users seamless registration, accommodation exploration, and booking confirmations. Leveraging React.js, Node.js, MongoDB, and a suite of tools, this project highlights my proficiency in developing immersive and functional web applications.",
    github: 'https://github.com/FALAK097/Airbnb-clone',
  },
  {
    id: 3,
    image: IMG8,
    title: 'Blog Nest',
    category: 'Web App',
    content:
      'Blog Nest is a robust MERN stack web application designed for content creators. This full-stack platform facilitates article creation, editing, and publishing. With secure JWT-based authentication, Quill.js for rich text editing, and PWA capabilities, Blog Nest provides a seamless user experience. The tech stack includes React, Express.js, MongoDB, and more, demonstrating proficiency in modern web development.',
    github: 'https://github.com/FALAK097/Blog-Nest',
  },
  {
    id: 4,
    image: IMG1,
    title: 'Luscious - Food Recipe PWA',
    category: 'Web App',
    content:
      'Created a Food Recipe Progressive Web App (PWA) using Spoonacular API, React, React Router, and Framer Motion. Implemented features for recipe search, browsing, and detailed information, providing users with a seamless and interactive experience.',
    github: 'https://github.com/FALAK097/Luscious',
    demo: 'https://luscious-falak097.vercel.app/',
  },
  {
    id: 5,
    image: IMG9,
    title: 'Code To Image',
    category: 'Web App',
    content:
      'This project is a code to image converter built using Next.js and various dependencies to provide features such as changing language color of code, theme selector, padding adjustment, and exporting PNG images.',
    github: 'https://github.com/FALAK097/codetoimg',
    demo: 'https://codetoimg-seven.vercel.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Nike Landing Page',
    category: 'Web Design',
    content:
      'Designed and developed a responsive Nike landing page using React, Vite, and Tailwind CSS, showcasing products, services, special offers, and a subscription section. Built with a focus on seamless user interaction and visual appeal.',
    github: 'https://github.com/FALAK097/Nike',
    demo: 'https://nike-falak097.vercel.app/',
  },
  {
    id: 7,
    image: IMG5,
    title: 'Wild Heart',
    category: 'Web Design',
    content:
      'WildHeart - A Website for Animal Charity built using HTML, CSS is a website dedicated to promoting animal welfare and conservation efforts. The website provides information about various animal species, their habitats, and the importance of preserving biodiversity.',
    github: 'https://github.com/FALAK097/WildHeart',
    demo: 'https://falak097.github.io/WildHeart/',
  },
  {
    id: 8,
    image: IMG2,
    title: 'Education Website',
    category: 'Web Design',
    content:
      'Presenting a responsive multipage website for an educational institute, showcasing courses and built using HTML, SCSS, and JavaScript. Experience seamless navigation and explore the diverse educational opportunities with ease.',
    github: 'https://github.com/FALAK097/Educationwebsite',
    demo: 'https://falak097.github.io/Educationwebsite/',
  },
];

export default data;
