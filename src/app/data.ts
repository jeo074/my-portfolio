type Project = {
    name: string
    description: string
    link: string
    preview: string
    video: string
    gallery: Gallery[]
    id: string
  }

  type Positions = {
    title: string
    duration: string
    description: string[]
  }
  
  type WorkExperience = {
    company: string
    title: string
    start: string
    end: string
    link: string
    id: string
    positions: Positions[]
  }
  
  type Testimonials = {
    summary: string
    testimonial: string
    author: string
    position: string
    company: string
  }

  type Skills = {
    skill: string
    logo: string
  }

  type Gallery = {
    image: string
    caption: string
  }

  export const SKILLS: Skills[] = [
    {
        skill: 'Python',
        logo: '/py.png'
    },{
        skill: 'MySQL',
        logo: '/MySQL.png'
    },{
        skill: 'JavaScript',
        logo: '/JS.png'
    },{
        skill: 'CSS',
        logo: '/css.png'
    },{
        skill: 'PostgreSQL',
        logo: '/PostgreSQL.png'
    },{
        skill: 'PHP',
        logo: '/PHP.png'
    },{
        skill: 'React',
        logo: '/React.png'
    },{
        skill: 'Next.js',
        logo: '/nextjs.png'
    },{
        skill: 'Django',
        logo: '/django.png'
    },{
        skill: 'Flask',
        logo: '/Flask.png'
    },{
        skill: 'Tailwind CSS',
        logo: '/Tailwind.png'
    },{
        skill: 'Pandas',
        logo: '/pandas.png'
    },{
        skill: 'NumPy',
        logo: '/NumPy.png'
    },{
        skill: 'Selenium',
        logo: '/Selenium.png'
    },{
        skill: 'VBA',
        logo: '/VBA.png'
    },{
        skill: 'Microsoft Suite',
        logo: '/Office.png'
    },{
        skill: 'Adobe Photoshop',
        logo: '/Photoshop.png'
    },{
        skill: 'Adobe Illustrator',
        logo: '/Illustrator.png'
    },{
        skill: 'Accoustica Mixcraft',
        logo: '/mixcraft.png'
    }
  ]

  export const GALLERY: Gallery[] = [
    {
        image: '/wife.jpg',
        caption: 'Exploring the world with my favorite travel buddy'
    },{
        image: '/music.jpg',
        caption: 'Creating music whenever inspiration strikes 🎵'
    },{
        image: '/drawing.jpg',
        caption: "I enjoy drawing! Here’s a caricature I did of my brother"
    },{
        image: '/logos.png',
        caption: 'Dabbling in graphic design for fun'
    },{
        image: '/moonayo.jpg',
        caption: 'My doggos: Orion & Moon'
    }
  ]
  
  export const PROJECTS: Project[] = [
    {
        name: 'Akalako88 Website',
        description:
            'A social betting platform where users can place predictions. Stack: Python Django, Django Rest Framework, PostgreSQL, Javascript React.',
        link: 'https://user.akalako88.com',
        preview: '/AK88_desktop.png',
        video: '',
        gallery: [{
            image: '/AK88_mobile_UI.png',
            caption: 'UI Overhaul',
        },{
            image: '/AK88_leaderboard.png',
            caption: '',
        },{
            image: '/AK88_accomplishments.png',
            caption: '',
        }
        ],
        id: 'project3',
    },
    {
        name: 'Government ID Verification',
        description:
            'A web-based tool designed to validate uploaded ID images. Built with Python, JavaScript, and PostgreSQL, it leverages OpenCV, AWS Rekognition, and the Google Vision API for image verification.',
        link: 'https://youtu.be/uCc0cYo2qmU',
        preview: '/id_verif_preview.mp4',
        video:
            'https://www.youtube-nocookie.com/embed/uCc0cYo2qmU?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1&cc_load_policy=1&cc_lang_pref=en',
        id: 'project1',
        gallery: [],
    },
    {
        name: 'Payslip Distributor',
        description: 
            'A Python program that sends PDF payslips via email and Facebook Messenger. It utilizes Google Cloud Platform APIs and the Messenger API for seamless integration.',
        link: 'https://youtu.be/CEs7lPwAbfI',
        preview: '/payslip_distributor_preview.mp4',
        video:
            'https://www.youtube-nocookie.com/embed/CEs7lPwAbfI?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1&cc_load_policy=1&cc_lang_pref=en',
        id: 'project2',
        gallery: [],
    },
  ]

  export const TESTIMONIALS: Testimonials[] = [
    {
        summary: "Jeo is truly an asset to our team, and I highly recommend him for any high-impact development role.",
        testimonial: "I cannot express enough gratitude for the incredible contributions of Jarwin Jeo Diño to our Fraud Department. His innovation and expertise have completely transformed the way we operate, developing tools that not only simplify our tasks but also significantly reduce the manpower required. \n From basic solutions to high-level tools seamlessly integrating all our internal systems, his work has been nothing short of exceptional. His ability to understand complex challenges and deliver intuitive, efficient, and scalable solutions has made a profound impact on our operations. \n Jeo is truly an asset to our team, and I highly recommend him for any high-impact development role. His dedication, problem-solving skills, and visionary approach set a new standard for excellence. We are incredibly fortunate to have him leading the way in innovation!",
        author: "Keir Gordoncillo",
        position: "Configuration Team Supervisor",
        company: "Bayview Technologies Inc."
    },
    {
        summary: "Throughout his tenure, Jeo consistently demonstrated professionalism, technical expertise, and a strong commitment to excellence.",
        testimonial: "Jeo consistently demonstrated professionalism, technical expertise, and a strong commitment to excellence. \n Jeo played a crucial role in creating, monitoring, and maintaining automation tools that significantly improved operational efficiency and output. His ability to develop innovative solutions streamlined processes, reduced manual workload, and enhanced overall system performance. His keen attention to detail and problem-solving skills made him a valuable asset to our team, ensuring that operations ran smoothly and efficiently. \n Beyond his technical abilities, Jeo is a dedicated team player who fosters collaboration and maintains a positive attitude, even in high-pressure situations. His reliability, work ethic, and ability to adapt to challenges make him an excellent candidate for any organization looking for a skilled and dependable professional. \n I highly recommend Jarwin Jeo Diño for any opportunity he pursues.",
        author: "Manuelo Dela Pena",
        position: "Configuration Team Manager",
        company: "Bayview Technologies Inc."
    },
  ]
  
  export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        company: 'New Way To Play Inc. (Independent Contract)',
        title: 'Full Stack Developer',
        start: '2025',
        end: '2025',
        link: 'https://www.linkedin.com/in/jeodino',
        id: 'work2',
        positions: [{
            title: "Full Stack Developer",
            duration: "June 2025 – September 2025",
            description: [
                "Designed, developed, and maintained full-stack features using Django, Django REST Framework, React, HTML, CSS, and JavaScript.",
                "Managed PostgreSQL databases, including schema design, migrations, and data handling.",
                "Built and integrated RESTful APIs with frontend components to ensure seamless data flow.",
                "Diagnosed and resolved frontend and backend bugs, improving application stability and performance.",
                "Utilized Git for version control and adhered to collaborative development workflows.",
                "Deployed and maintained front-end and back-end features across development and production environments on AWS EC2, leveraging Docker for containerized deployments."
        ]}]
    },
    {
        company: 'Bayview Technologies Incorporated',
        title: 'Senior Configuration QA & Programming',
        start: '2014',
        end: '2025',
        link: 'https://www.linkedin.com/in/jeodino',
        id: 'work1',
        positions: [{
            title: "Senior Configuration QA & Programming",
            duration: "July 2018 – January 2025",
            description: [
                "Spearheaded the automation of key processes, leveraging Python, JavaScript, SQL, and VBA to streamline workflows, reduce process time, and boost team productivity.",
                "Conducted comprehensive reviews of team members’ task outputs, providing actionable feedback and fostering a culture of continuous professional development.",
                "Collaborated cross-functionally with different departments to identify process bottlenecks and propose effective technological solutions."
            ]},{
            title: "Senior Configuration Specialist",
            duration: "July 2016 – June 2018",
            description: [
                "Led training programs for newly hired associates, ensuring smooth onboarding and efficient understanding of Configuration Associate processes and responsibilities.",
                "Mentored junior team members, offering guidance on best practices and supporting their career growth.",
                "Coordinated with various teams to ensure seamless execution of tasks and timely completion of projects."
            ]},{
            title: "Configuration Specialist",
            duration: "April 2014 – June 2016",
            description: [
                "Configured game settings, including player bonuses, game promotion multipliers, and cashier page UI, using both in-house and third-party back office systems.",
                "Delivered timely and efficient support to internal teams and across departments, ensuring smooth operations and prompt issue resolution.",
                "Provided support to senior team members and other teams by assisting with ad hoc tasks."
        ]}
        ]
    },
    {
        company: 'Maersk Global Service Centres Philippines',
        title: 'Associate Liner-Operations',
        start: '2012',
        end: '2013',
        link: 'https://www.linkedin.com/in/jeodino',
        id: 'work2',
        positions: [{
            title: "Associate Liner-Operations",
            duration: "August 2012 – November 2013",
            description: [
                "Utilized various system applications to efficiently plan and allocate booked cargo containers to vessels, voyages, and destination ports.",
                "Generated and provided comprehensive load and discharge lists, including detailed specifications, to vessel terminals and operators, ensuring smooth operations.",
                "Proactively identified and resolved discrepancies by updating container data, ensuring consistency across multiple systems."
        ]}]
    },
    {
        company: 'Sangguniang Panlungsod Baguio City Hall',
        title: 'On-the-Job Training',
        start: '2011',
        end: '2011',
        link: 'https://www.linkedin.com/in/jeodino',
        id: 'work3',
        positions: [{
            title: "On-the-Job Training",
            duration: "July 2011 – September 2011",
            description: [
                "Developed a Computerized Inventory System of the Baguio City Council using PHP, SQL, and JavaScript.",
                "Effectively improved functionality and accessibility of company database.",
                "Streamlined data entry processes, significantly reducing manual efforts and saving personnel hours."
        ]}]
    },
  ]
