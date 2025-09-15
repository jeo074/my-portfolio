'use client';
import Image from "next/image";
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '../../components/ui/morphing-dialog'
import { Spotlight } from '../../components/ui/spotlight'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export type ProjectVideoProp = {
    src: {
      preview: string;
      video: string;
    };
};

export type TestimonialsProp = {
    src: {
      summary: string;
      testimonial: string;
      author: string;
      position: string;
      company: string;
    };
};

export type WorkBackgroundProp = {
    src: {
        title: string;
        company: string;
        start: string;
        end: string;
        positions: WorkPositionsProp[];
    };
};

export type WorkPositionsProp = {
    title: string;
    duration: string;
    description: string[];
};

export type SkillsProp = {
    src: {
        logo: string;
        skill: string;
    };
};

export type GalleryProp = {
    src: { image: string; caption: string }[];
};

export function Skills({ src }: SkillsProp) {
    return (
        <div className="tooltip mx-auto">
            <Image className="skill-logo mx-auto" width={120} height={80} src={src.logo} alt={src.skill}/>
            <span className="tooltiptext flex-shrink text-sm mx-auto">{src.skill}</span>
        </div>
    )
}
  
export function ProjectVideo({ src }: ProjectVideoProp) {
    return (
        <MorphingDialog
        transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }}
        >
        <MorphingDialogTrigger>
            <video
                src={src.preview}
                autoPlay
                loop
                muted
                className="aspect-video w-full cursor-zoom-in rounded-xl"
            />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
            <MorphingDialogContent  className="video aspect-video rounded-2xl bg-zinc-50 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                <iframe className="rounded-2xl" width="100%" height="100%" src={src.video} title="YouTube video player" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            </MorphingDialogContent>
            <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
                initial: { opacity: 0 },
                animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
            }}
            >
            <XIcon className="h-5 w-5 text-zinc-500" />
            </MorphingDialogClose>
        </MorphingDialogContainer>
        </MorphingDialog>
    )
}

export function WorkBackground({ src }: WorkBackgroundProp) {
    return (
        <MorphingDialog
        transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }}
        >
        <MorphingDialogTrigger>
        <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl"
                size={64}
              />
        <div className="relative h-full w-full rounded-[15px] text-zinc-500  dark:text-zinc-300/80 bg-white p-4 cursor-zoom-in dark:bg-zinc-700">
            <div className="relative flex w-full flex-row justify-between">
            <div>
                <h4 className="p-1 font-semibold">
                {src.title}
                </h4>
                <p className="dark:text-zinc-300/60 text-sm p-1">
                {src.company}
                </p>
            </div>
                <p className="text-zinc-400 dark:text-zinc-300/60 text-sm p-1">
                {src.start} - {src.end}
                </p>
            </div>
        </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
            <MorphingDialogContent className="overflow-auto relative rounded-2xl max-w-220 max-h-180 bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset  md:p-6 sm:p-4 xs:p-2 dark:bg-zinc-700 dark:ring-zinc-800/50 dark:text-zinc-300/80">
            <div className="grid relative flex w-full flex-row justify-between p-10 text-zinc-500 dark:text-zinc-300/80">
            {src.positions.map((pos: { title: string; duration: string; description: string[] }, index: number) => ( 
                <WorkPositions 
                    key={index}
                    title={pos.title} 
                    duration={pos.duration} 
                    description={pos.description}  
                />
            ))}
            </div>
            </MorphingDialogContent>
            <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
                initial: { opacity: 0 },
                animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
            }}
            >
            <XIcon className="h-5 w-5 text-zinc-500" />
            </MorphingDialogClose>
        </MorphingDialogContainer>
        </MorphingDialog>
    )
}

const  WorkPositions: React.FC<WorkPositionsProp> = ({ title, duration, description }) => {
    return (
        <div className="grid p-3 overflow-auto xs:p-1">
                <p><b>{title}</b></p>
                <p>{duration}</p>
                <span className="pl-6">
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </span>
        </div>
    )
}

export function Testimonials({ src }: TestimonialsProp) {
    return (
        <MorphingDialog
        transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }}
        >
        <MorphingDialogTrigger>
        <div className="relative h-full w-full rounded-[15px] text-zinc-500 text-center bg-white p-6 cursor-zoom-in dark:bg-zinc-700 dark:text-zinc-300/80">
            <div className="relative flex w-full flex-row justify-between">
                <div>
                    <p className="font-normal p-1">
                    &quot;{src.summary}&quot;
                    </p>
                    <div className="p-1">
                        <p className="text-sm font-semibold">
                        {src.author}
                        </p>
                        <p className="text-xs">
                        {src.position}
                        </p>
                        <p className="text-xs">
                        {src.company}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
            <MorphingDialogContent className="text-zinc-500 rounded-2xl max-w-md bg-zinc-50 ring-1 ring-zinc-200/50 ring-inset p-12 dark:bg-zinc-700 dark:ring-zinc-800/50 dark:text-zinc-300/80">
                <div>
                    <h3 className="font-normal">
                    &quot;{src.testimonial}&quot;
                    </h3>
                    <div className="pt-7">
                        <p className="text-md font-semibold pb-1">
                        {src.author}
                        </p>
                        <p className="text-sm">
                        {src.position}
                        </p>
                        <p className="text-sm">
                        {src.company}
                        </p>
                    </div>
                </div>
            </MorphingDialogContent>
            <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
                initial: { opacity: 0 },
                animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
            }}
            >
            <XIcon className="h-5 w-5 text-zinc-600" />
            </MorphingDialogClose>
        </MorphingDialogContainer>
        </MorphingDialog>
    )
}

export function Contacts() {
    return (
        <MorphingDialog
        transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.3,
        }}>
        <MorphingDialogTrigger>
            <p className="justify-center font-base group relative inline-block px-6 py-2 tracking-wide">Contact
              <span className="absolute bottom-0.5 left-0 block h-[2px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-400">
              </span>
            </p>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
            <MorphingDialogContent className="text-center text-lg text-zinc-500 rounded-2xl max-w-md m-5 bg-zinc-50 ring-1 ring-zinc-200/50 ring-inset p-10 dark:bg-zinc-700 dark:ring-zinc-800/50 dark:text-zinc-300/80">
                <div className="p-6 pl-10 pr-10">
                    <h3 className="font-normal pb-5 font-semibold">
                    Contact me:
                    </h3>
                    <div className="grid grid-cols-2 grid-cols-[40px_1fr] gap-y-1 gap-x-3 items-center">
                        <Image src="/mail.png" alt='email'  width='40' height='40'/>
                        <a href="mailto:jeodino@gmail.com" target='blank' className='text-left'> jeodino@gmail.com</a>
                        <Image src="/phone.png" alt='phone' width='40' height='40'/><a href="tel:+639954188950" target='blank' className='text-left'>+63 995-418-8950</a>
                        <Image src="/msgr.png" alt='messenger'  width='40' height='40'/><a href="https://m.me/jeo074" target='blank' className='text-left'>m.me/jeo074</a>
                    </div>
                </div>
            </MorphingDialogContent>
            <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
                initial: { opacity: 0 },
                animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
            }}
            >
            <XIcon className="h-5 w-5 text-zinc-600" />
            </MorphingDialogClose>
        </MorphingDialogContainer>
        </MorphingDialog>
    )
}

export function Gallery({ src }: GalleryProp) {
    return (
        <MorphingDialog
        transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.6,
        }}> 
        <div className='grid grid-cols-3 mx-auto'>
            <MorphingDialogTrigger className='fanout col-start-2 mx-auto pt-3 pb-4'>
            {src?.[4] && <Image src={src[4].image} width='75' height='100' alt='about_jeo' className='card lrcard mx-auto' />}
            {src?.[3] && <Image src={src[3].image} width='75' height='100' alt='about_jeo' className='card llcard mx-auto' />}
            <Image src={src[2].image} width='75' height='100' alt='about_jeo' className='card urcard mx-auto' />
            <Image src={src[1].image} width='75' height='100' alt='about_jeo' className='card ulcard mx-auto' />
            <Image src={src[0].image} width='75' height='100' alt='about_jeo' className='card mx-auto'/>
            <Image src={src[0].image} alt='about_jeo' width='75' height='100' className='opacity-0 mx-auto'/>
            </MorphingDialogTrigger>
        </div>

        <MorphingDialogContainer>
            <MorphingDialogContent className="max-w-380">
                <div className="max-h-sm">
                    <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container">
                        {src.map((pic, index) => 
                            pic ? (
                                <SwiperSlide key={index}>
                                <p className='caption font-sans relative top-10 text-white bg-zinc-500/50 rounded-tl-[12px] rounded-r-[15px] '>{pic.caption}</p>
                                <Image src={pic.image} alt={pic.caption} width={800} height={800} className="slider-image"/>
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                    <div className="slider-controler">
                        <div className="swiper-pagination rounded-[15px] dark:bg-zinc-100/60"></div>
                    </div>
                </div>
                
            </MorphingDialogContent>
            <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
                initial: { opacity: 0 },
                animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
            }}
            >
            <XIcon className="h-5 w-5 text-zinc-600" />
            </MorphingDialogClose>
        </MorphingDialogContainer>
        </MorphingDialog>
    )
}

export function Profile() {
    return (
        <MorphingDialog
        transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.6,
        }}> 
        
        <MorphingDialogTrigger>
            <Image src="/jeo_profile.jpg" alt="Profile" width={250} height={250} className="id-pic" priority/>
        </MorphingDialogTrigger>

        <MorphingDialogContainer>
            <MorphingDialogContent className="max-w-380">
            <Image src="/jeo_profile.jpg" alt="Profile" width={500} height={700} className="rounded-4xl" priority/>
                
            </MorphingDialogContent>
            <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
                initial: { opacity: 0 },
                animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
            }}
            >
            <XIcon className="h-5 w-5 text-zinc-600" />
            </MorphingDialogClose>
        </MorphingDialogContainer>
        </MorphingDialog>
    )
}