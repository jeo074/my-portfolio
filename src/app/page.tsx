"use client";

import Image from "next/image";
import {
  WorkBackground,
  ProjectVideo,
  Testimonials,
  Skills,
  Contacts,
  Gallery,
  Profile
} from './view'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  TESTIMONIALS,
  SKILLS,
  GALLERY
} from './data'

import "./polygons.css";
import "./swiper.css";

import React from 'react';
import '@fontsource/raleway';



export default function Home() {
  return (
    <div className="min-h-[calc(100vh-135px)] flex flex-col items-center justify-center font-sans">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl flex flex-col md:flex-row items-center gap-20">
        <div className="relative" >
          <div className="shape mx-auto"></div>
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className="shape3"></div>
          <Image src="/profile.png" alt="Profile" width={500} height={900} className="profile absolute" priority/>
        </div>
        <div className="text-center md:text-left md:right-20 top-1/4 max-w-md">
          
          <div className="option">
            <p className="p-2 text-center tracking-wide header-name">ABOUT ME</p>
            <div className="categories relative text-zinc-500 rounded-[15px] bg-white dark:bg-zinc-700 dark:text-zinc-300/80">
              <div>
                <div className="grid grid-cols-2 grid-cols-[150px_1fr] gap-4 items-center pt-5 pl-7 ">
                  <Profile/>
                  <span>
                    <p className="mt-8 font-semibold text-lg tracking-wide">
                      Jarwin Jeo Diño
                    </p>
                    <p>
                      Python Developer
                    </p>
                  </span>
                </div>
                <p className="m-7">
                  A goal-oriented and results-driven Bachelor of Computer Science graduate who exerts
                  optimal effort in providing the highest standard of service at all times.
                </p>
                <p className="m-7">
                  Quick to learn and equipped with strong analytical, problem-solving, and programming skills. Highly proficient in software applications, database management, and utilizing programming languages to improve operations. Dedicated to fostering strong collaborative relationships with team members and colleagues across departments, both in individual and group settings.
                </p>
                <p className="m-7">
                  Currently seeking a dynamic role to apply and expand my analytical, technical, and problem-solving skills. Driven to achieve career growth and eager to contribute to the continued success of your organization.
                </p>
                <p className="more-about mx-auto w-50 text-center text-sm p-3">Oh, you mean me personally?</p>
                <div className="personal relative rounded-[15px] bg-white p-3 text-sm dark:bg-zinc-700">
                  <p className="m-4 font-semibold text-center text-md tracking-wide">Who&apos;s Jeo?</p>
                  <Gallery src={GALLERY} />
                  <p className="mx-4 my-3">Hey there! Outside of work I&apos;m just a laid-back guy who&apos;s all about enjoying life with my amazing wife and our two goofy doggos. They keep me entertained, and honestly, I wouldn&apos;t have it any other way.</p>
                  <p className="mx-4 my-3">I&apos;m a huge gaming nerd, whether it&apos;s diving into a deep single-player story, grinding in action RPGs, or teaming up in multiplayer chaos, I&apos;m all in. When I&apos;m not gaming, you might find me in my little garden, growing leafy greens like spinach, Chinese cabbages, and moringa—because, hey, home-cooked meals taste better when you grow the ingredients yourself!</p>
                  <p className="mx-4 mt-3">Creativity is my jam. I love sketching, whipping up cool digital designs, and even making some Hip-Hop music when inspiration strikes. Oh, speaking of which, here&apos;s a track I made. Give it a listen! 🎵🎵</p>
                  <iframe src="https://open.spotify.com/embed/track/6yCUgeg1n8cye4vqHbAqBe?utm_source=generator" width="70%" height="80"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="mx-auto rounded-[15px]"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="option">
            <p className="p-2 text-center tracking-wide header-name">TECHNICAL SKILLS</p>
            <div className="categories dark:bg-zinc-700 rounded-[15px]">
              <div className="skill-div">
                {SKILLS.map((skills, i) => (  
                  <Skills key={i}  src={skills} />
                ))}
              </div>
            </div>
          </div>
          <div className="option">
            <p className="p-2 text-center tracking-wide header-name">WORK EXPERIENCE</p>
            <div className="categories">
              <div className="grid grid-cols-1 gap-6">
                {WORK_EXPERIENCE.map((job, i) => ( 
                  <WorkBackground key={i}  src={job} />
                ))}
              </div>
            </div>
          </div>
          <div className="option">
            <p className="p-2 text-center tracking-wide header-name"> SAMPLE PROJECTS</p>
            <div className="categories">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                  <div key={project.name} className="space-y-2">
                    <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                      {project.video ?
                        <ProjectVideo src={project} />
                      :
                        <Gallery src={project.gallery} />
                      }
                    </div>
                    <div className="px-1">
                      <a
                        className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                        href={project.link}
                        target="_blank"
                      >
                        {project.name}
                        <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
                      </a>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="option">
            <p className="p-2 text-center tracking-wide header-name">TESTIMONIALS</p>
            <div className="categories">
              <div className="grid grid-cols-1 gap-6">
                {TESTIMONIALS.map((testi, i) => ( 
                  <Testimonials key={i} src={testi} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mx-auto mt-9 flex justify-center md:justify-start gap-4">
            <a href="/Jarwin Jeo Dino Resume.pdf" target="_blank" className="justify-center px-6 py-2 bg-zinc-700 text-white rounded-lg shadow-md hover:bg-zinc-500 tracking-wide">Resume</a>
            <Contacts/>
          </div>
          <div className="mx-auto mt-6 flex justify-center md:justify-start gap-9 text-gray-600">

            <div className="icon">
              <a href="https://linkedin.com/in/jeodino" target="_blank"><Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} className=""/></a>
              <span className="tooltiptext flex-shrink text-xs mx-auto">LinkedIn</span>
            </div>
            <div className="icon">
              <a href="https://www.youtube.com/channel/UCB0r8Tl1y5IvuVrGFftIApQ" target="_blank"><Image src="/youtube.png" alt="YouTube" width={28} height={28} className=""/></a>
              <span className="tooltiptext flex-shrink text-xs mx-auto">YouTube</span>
            </div>
            <div className="icon">
              <a href="https://github.com/jeo074" target="_blank"><Image src="/github.png" alt="GitHub" width={28} height={28} className=""/></a>
              <span className="tooltiptext flex-shrink text-xs mx-auto">GitHub</span>
            </div>
          </div>
        </div>  
      </div>
      
    </div>
  );
}