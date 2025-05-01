// components/SpeakersSection.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export interface Speaker {
    id: number;
    name: string;
    position: string;
    image: string;
    quote: string;
    github: string;
    linkedin: string;
    instagram: string;
}

interface SpeakerCardProps {
    speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => (
    <div className="rounded-lg mt-10 overflow-hidden shadow-[0_4px_6px_rgba(200,154,252,0.2)] transition-transform hover:scale-105 hover:shadow-[0_4px_6px_rgba(200,154,252,0.6)]">
        <div className="flex flex-col items-center justify-center">
            <img
                src={speaker.image}
                alt={speaker.name}
                className="h-70 w-70 object-cover rounded-full"
            />
            <div className="flex items-center justify-center mt-4">
                <h3 className="text-2xl font-bold text-[#DF5950]">{speaker.name}</h3>
            </div>
        </div>
        <div className="p-6 text-center">
            <p className="text-[#C89AFC] mb-4">{speaker.position}</p>
            <p className="text-gray-300 mb-4 italic">"{speaker.quote}"</p>
            <div className="flex items-center justify-center space-x-4 text-2xl">
                <a
                    href={speaker.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black"
                >
                    <FaGithub aria-label="GitHub" />
                </a>
                <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700"
                >
                    <FaLinkedin aria-label="LinkedIn" />
                </a>
                <a
                    href={speaker.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-600"
                >
                    <FaInstagram aria-label="Instagram" />
                </a>
            </div>
        </div>
    </div>
);

export const speakersData: Speaker[] = [
    {
        id: 1,
        name: "Alex Johnson",
        position: "Senior Frontend Developer at TechCorp",
        image: "https://i.pravatar.cc/720?img=8",
        quote: "React changed how I think about UI development",
        github: "https://github.com/alexjohnson",
        linkedin: "https://linkedin.com/in/alexjohnson",
        instagram: "https://instagram.com/alexjohnson",
    },
    {
        id: 2,
        name: "Maria Garcia",
        position: "Backend Engineer at DataSystems",
        image: "https://i.pravatar.cc/720?img=32",
        quote: "Clean architecture is the key to maintainable systems",
        github: "https://github.com/mariagarcia",
        linkedin: "https://linkedin.com/in/mariagarcia",
        instagram: "https://instagram.com/mariagarcia",
    },
    {
        id: 3,
        name: "James Wilson",
        position: "DevOps Specialist at CloudNine",
        image: "https://i.pravatar.cc/720?img=11",
        quote: "Automation is not a luxury, it's a necessity",
        github: "https://github.com/jameswilson",
        linkedin: "https://linkedin.com/in/jameswilson",
        instagram: "https://instagram.com/jameswilson",
    },
    {
        id: 4,
        name: "Sarah Lee",
        position: "UX/UI Designer at CreativeMinds",
        image: "https://i.pravatar.cc/720?img=5",
        quote: "Design is not just what it looks like, but how it works",
        github: "https://github.com/sarahlee",
        linkedin: "https://linkedin.com/in/sarahlee",
        instagram: "https://instagram.com/sarahlee",
    },
    {
        id: 5,
        name: "David Kim",
        position: "Full Stack Developer at WebSolutions",
        image: "https://i.pravatar.cc/720?img=12",
        quote: "The best code is no code at all",
        github: "https://github.com/davidkim",
        linkedin: "https://linkedin.com/in/davidkim",
        instagram: "https://instagram.com/davidkim",
    },
    {
        id: 6,
        name: "Emma Chen",
        position: "QA Automation Engineer at TestAll",
        image: "https://i.pravatar.cc/720?img=9",
        quote: "Quality is never an accident, it's always the result of intelligent effort",
        github: "https://github.com/emmachen",
        linkedin: "https://linkedin.com/in/emmachen",
        instagram: "https://instagram.com/emmachen",
    },
    {
        id: 7,
        name: "Michael Brown",
        position: "Mobile Developer at AppWorks",
        image: "https://i.pravatar.cc/720?img=13",
        quote: "The future is mobile-first",
        github: "https://github.com/michaelbrown",
        linkedin: "https://linkedin.com/in/michaelbrown",
        instagram: "https://instagram.com/michaelbrown",
    },
    {
        id: 8,
        name: "Olivia Martinez",
        position: "Data Scientist at AnalyticsPro",
        image: "https://i.pravatar.cc/720?img=38",
        quote: "Data is the new oil, but only if refined",
        github: "https://github.com/oliviamartinez",
        linkedin: "https://linkedin.com/in/oliviamartinez",
        instagram: "https://instagram.com/oliviamartinez",
    },
    {
        id: 9,
        name: "Daniel Taylor",
        position: "Blockchain Developer at ChainTech",
        image: "https://i.pravatar.cc/720?img=52",
        quote: "Blockchain is more than just cryptocurrency",
        github: "https://github.com/danieltaylor",
        linkedin: "https://linkedin.com/in/danieltaylor",
        instagram: "https://instagram.com/danieltaylor",
    },
    {
        id: 10,
        name: "Sophia Anderson",
        position: "Technical Lead at DevTeam",
        image: "https://i.pravatar.cc/720?img=41",
        quote: "Leadership is about enabling others to achieve more",
        github: "https://github.com/sophiaanderson",
        linkedin: "https://linkedin.com/in/sophiaanderson",
        instagram: "https://instagram.com/sophiaanderson",
    },
    {
        id: 11,
        name: "Robert Wilson",
        position: "Security Engineer at SafeNet",
        image: "https://i.pravatar.cc/720?img=53",
        quote: "Security is a process, not a product",
        github: "https://github.com/robertwilson",
        linkedin: "https://linkedin.com/in/robertwilson",
        instagram: "https://instagram.com/robertwilson",
    },
    {
        id: 12,
        name: "Ava Thomas",
        position: "AI/ML Engineer at FutureTech",
        image: "https://i.pravatar.cc/720?img=48",
        quote: "Artificial intelligence is the future of technology",
        github: "https://github.com/avathomas",
        linkedin: "https://linkedin.com/in/avathomas",
        instagram: "https://instagram.com/avathomas",
    },
];

const SpeakersSection: React.FC = () => (
    <section className="py-12 bg-gray-100" id="speakers">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {speakersData.map((speaker) => (
                    <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}
            </div>
        </div>
    </section>
);

export default SpeakersSection;
