import React from 'react';

const HeroSection = () => {
    const eventDate = new Date('2025-06-30');
    const today = new Date();
    const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

    return (
        <section
            className="relative h-screen w-full text-white"
            style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
                backgroundImage: 'url(/programming.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-[#000000A1] bg-blend-overlay">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Improve Conference 2023
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join us on December 30 at Chisinau Arena to discover your path in programming
                    </p>

                    <div className="mb-8">
                        <div className="text-3xl font-bold mb-2">{daysLeft} days left</div>
                        <div className="text-lg">Until the conference starts</div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button
                            className="px-8 py-3 rounded-md font-bold text-lg bg-[#DF5950]"
                        >
                            Get Your Free Ticket
                        </button>
                        <div className="text-sm">
                            <span className="font-bold">120</span> spots available out of <span className="font-bold">500</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;