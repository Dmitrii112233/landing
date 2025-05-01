import React from 'react';
import {FaClock, FaUser, FaCode} from 'react-icons/fa';

const ScheduleSection = () => {
    const scheduleData = [
        {
            id: 1,
            time: "09:00 - 09:30",
            title: "Registration & Welcome Coffee",
            speaker: "Conference Partners",
            type: "registration",
        },
        {
            id: 2,
            time: "09:30 - 10:15",
            title: "Frontend Development: Modern Approaches",
            speaker: "Alex Johnson",
            position: "Senior Frontend Developer at TechCorp",
            type: "frontend",
        },
        {
            id: 3,
            time: "10:30 - 11:15",
            title: "Backend Architecture Fundamentals",
            speaker: "Maria Garcia",
            position: "Backend Engineer at DataSystems",
            type: "backend",
        },
        {
            id: 4,
            time: "11:30 - 12:15",
            title: "QA Testing Strategies",
            speaker: "Emma Chen",
            position: "QA Automation Engineer at TestAll",
            type: "qa",
        },
        {
            id: 5,
            time: "12:15 - 13:30",
            title: "Lunch Break",
            speaker: "",
            type: "break",
        },
        {
            id: 6,
            time: "13:30 - 14:15",
            title: "Mobile Development Trends",
            speaker: "Michael Brown",
            position: "Mobile Developer at AppWorks",
            type: "mobile",
        },
        {
            id: 7,
            time: "14:30 - 15:15",
            title: "Career Path Panel Discussion",
            speaker: "All Speakers",
            type: "panel",
        },
    ];

    const getTypeColor = (type: any) => {
        switch (type) {
            case 'frontend':
                return 'bg-[#C89AFC]';
            case 'backend':
                return 'bg-[#DF5950]';
            case 'qa':
                return 'bg-purple-500';
            case 'mobile':
                return 'bg-blue-500';
            case 'panel':
                return 'bg-gradient-to-r from-[#C89AFC] to-[#DF5950]';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <section className="py-16 bg-gray-50" id="schedule">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#DF5950]">
                    Conference Schedule
                </h2>

                <div className="max-w-4xl mx-auto">
                    {scheduleData.map((item) => (
                        <div
                            key={item.id}
                            className={`mb-6 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg ${item.type === 'break' || item.type === 'registration' ? 'bg-white' : 'bg-white border-l-4 ' + getTypeColor(item.type)}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <FaClock className="text-[#C89AFC]"/>
                                    <span className="font-medium">{item.time}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                    {item.speaker && item.position && (
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <FaUser className="text-[#DF5950]"/>
                                            <span>{item.speaker} -
                                                <span className="text-gray-500">{item.position}</span>
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {item.type !== 'break' && item.type !== 'registration' && (
                                    <div
                                        className={`px-4 py-2 rounded-full text-white text-sm font-medium ${getTypeColor(item.type)}`}>
                                        {item.type.toUpperCase()}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#C89AFC] mr-2"></div>
                        <span>Frontend</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#DF5950] mr-2"></div>
                        <span>Backend</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                        <span>QA</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                        <span>Mobile</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#C89AFC] to-[#DF5950] mr-2"></div>
                        <span>Panel</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;