import React from 'react';
import { FaBolt, FaUsers, FaChartLine, FaLaptopCode, FaUserFriends, FaGraduationCap } from 'react-icons/fa';

const aboutData = {
    mainContent: {
        title: "About Improve Conference",
        description: [
            "Improve Conference is designed for aspiring developers who have recently started their journey after graduation.",
            "This event is perfect for young tech enthusiasts eager to become programmers but unsure which path to choose.",
            "Our conference brings together professionals from various IT fields - frontend, backend, QA, and more - giving attendees valuable insights into different career paths in programming."
        ],
        highlight: {
            value: "100%",
            text: "Free participation with no hidden costs"
        },
        image: {
            src: "/conference.webp",
            alt: "Programming conference"
        }
    },
    stats: {
        title: "Programming Career Paths",
        items: [
            { value: "87%", label: "of attendees discover their preferred programming specialization", icon: <FaLaptopCode /> },
            { value: "92%", label: "of graduates who attend land tech jobs within 6 months", icon: <FaGraduationCap /> },
            { value: "76%", label: "increase in confidence about career direction after attending", icon: <FaChartLine /> }
        ]
    },
    features: [
        {
            icon: <FaBolt />,
            title: "Hands-on Learning",
            description: "Interactive sessions where you'll write real code and see immediate results. Perfect for visual learners who need to see concepts in action.",
            color: "bg-[#C89AFC]"
        },
        {
            icon: <FaUserFriends />,
            title: "Peer Networking",
            description: "Connect with like-minded beginners and build your professional network. Many attendees form study groups that last beyond the conference.",
            color: "bg-[#DF5950]"
        },
        {
            icon: <FaUsers />,
            title: "Career Guidance",
            description: "Get honest advice about different programming careers from those who've recently walked the path. Learn what each specialty really entails day-to-day.",
            color: "bg-[#C89AFC]"
        }
    ]
};

const AboutSection = () => {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold mb-6 text-[#DF5950]">
                            {aboutData.mainContent.title}
                        </h2>
                        {aboutData.mainContent.description.map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-700 mb-6">
                                {paragraph}
                            </p>
                        ))}
                        <div className="flex items-center space-x-4">
                            <div className="text-5xl font-bold text-[#C89AFC]">
                                {aboutData.mainContent.highlight.value}
                            </div>
                            <div className="text-gray-600">
                                {aboutData.mainContent.highlight.text}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src={aboutData.mainContent.image.src}
                            alt={aboutData.mainContent.image.alt}
                            className="rounded-xl shadow-[0_4px_6px_rgba(200,154,252,0.2)] w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#C89AFC] to-[#DF5950] rounded-2xl p-8 mb-20 text-white">
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        {aboutData.stats.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aboutData.stats.items.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold mb-4 flex justify-center items-center">
                                    {stat.icon}
                                    <span className="ml-2">{stat.value}</span>
                                </div>
                                <p className="text-xl">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutData.features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-xl shadow-[0_4px_6px_rgba(200,154,252,0.2)] hover:shadow-[0_4px_6px_rgba(200,154,252,0.5)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${feature.color} text-white`}>
                                <div className="text-2xl">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;