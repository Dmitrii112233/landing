import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PartnersSection = () => {
    const partners = [
        {
            id: 1,
            name: "TechCorp",
            logo: "partners/techcorp.png",
            url: ""
        },
        {
            id: 2,
            name: "DataSystems",
            logo: "partners/datasystems.png",
            url: ""
        },
        {
            id: 3,
            name: "CloudNine",
            logo: "partners/cloudnine.webp",
            url: ""
        },
        {
            id: 4,
            name: "WebSolutions",
            logo: "partners/wsa.png",
            url: ""
        },
        {
            id: 5,
            name: "AppWorks",
            logo: "partners/AppWorks.png",
            url: ""
        },
        {
            id: 6,
            name: "FutureTech",
            logo: "partners/ft.png",
            url: ""
        }
    ];

    return (
        <section className="py-16 bg-gray-50" id="partners">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#DF5950]">
                    Our Partners
                </h2>

                <div className="relative">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 relative z-10">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="group flex flex-col items-center justify-center p-6 transition-all
                                duration-300 hover:scale-105 shadow-[0_4px_6px_rgba(200,154,252,0.2)] rounded-lg
                                hover:shadow-[0_4px_6px_rgba(200,154,252,0.6)]"
                            >
                                <div className="relative">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-70 h-60 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <a
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex text-xl items-center text-[#C89AFC] group-hover:text-[#DF5950] transition-colors duration-300"
                                >
                                    {partner.name}
                                    <FaExternalLinkAlt className="ml-2 text-xl" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                        Want to become a partner?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join us in supporting the next generation of developers. Contact us for partnership opportunities.
                    </p>
                    <button
                        className="px-8 py-3 rounded-md font-bold text-white transition-all duration-300 hover:shadow-lg bg-[#DF5950] cursor-pointer"
                    >
                        Contact for Partnership
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;