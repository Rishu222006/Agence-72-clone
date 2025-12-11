# Description:
    - This project is a direct clone of the Canadian website Agence-72 which is a digital marketing agency.

    - I do not the claim the ownership of content, concept or design of this website and full credit for it goes to the original website. I will provide URL of the original website for reference.

    - I have only created this project for the purpose of learning, education and showcasing my frontend web development skills. I hope you will like this project. 

    *** This project is not a complete clone. Not all of the content and/or pages have been copied as this project is just to showcase my skills. Only important pages with good UI and animation aaspects have been copied by me. ***

# Original Website's URL: 
    https://k72.ca/en

# Demo/Screenshots:
    Live URL: https://agence-72-clone.vercel.app/

    ![Project ScreenShot](public/image.png)

# Active Pages:
    Following pages have been created with integrated nav bar, clock component and footer as required(refer official website):
        - Home Page
        - About Page
        - Projects page
        - Blogs Page
    *** Navigation menu(full screen) ***

# Tech Stack Used:
    - HTML
    - CSS
    - JavaScript
    - React.js
    - Tailwind CSS
    - GSAP Animation library.

# Future Scope:
    - Create contact page and integrate it.
    - Make the animations smoother.
    - Fix other layout and CSS changes.

# File Structure:
```
.
├── README.md
├── package.json
├── index.html
├── vite.config.js
├── public/
│   ├── image.png
│   ├── favicon.svg
│   └── vid_intro.mp4
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/
│   │   └── (fonts, svgs)
│   ├── components/
│   │   ├── Blog/
│   │   │   └── BlogCard.jsx
│   │   ├── common/
│   │   │   ├── Clock.jsx
│   │   │   ├── com_link.jsx
│   │   │   ├── footer.jsx
│   │   │   ├── Navcontext.jsx
│   │   │   └── stairs.jsx
│   │   ├── home/
│   │   │   ├── HomeBody.jsx
│   │   │   ├── HomeBottom.jsx
│   │   │   ├── HomeTop.jsx
│   │   │   └── Video.jsx
│   │   ├── navigation/
│   │   │   ├── Nvbar.jsx
│   │   │   └── FullNav.jsx
│   │   └── project/
│   │       └── ProjectCard.jsx
│   └── pages/
│       ├── home.jsx
│       ├── project.jsx
│       ├── About.jsx
│       └── Blog.jsx
└── ```

# Instructions to contribute/experiment:
If you wish to contribute to this project or experiment, do not affect the main branch.
Either create an issue or clone the repo.
Before making changes follow the given steps:
    - Clone repo/branch.
    - In terminal run `npm install` command to install required modules.
    - Then run `npm run dev` to view the project.
    