"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
    const nowMs: number = Date.now();
    const targetMs: number = new Date("2025-07-30T09:00:00Z").getTime();
    const diff: number = targetMs - nowMs;

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const totalSeconds: number = Math.floor(diff / 1000);
    const days: number    = Math.floor(totalSeconds / 86400);
    const hours: number   = Math.floor((totalSeconds % 86400) / 3600);
    const minutes: number = Math.floor((totalSeconds % 3600) / 60);
    const seconds: number = totalSeconds % 60;

    return { days, hours, minutes, seconds };
};

const HeroSection: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timerId: number = window.setInterval(() => {
            const updated = calculateTimeLeft();
            setTimeLeft(updated);

            if (
                updated.days === 0 &&
                updated.hours === 0 &&
                updated.minutes === 0 &&
                updated.seconds === 0
            ) {
                window.clearInterval(timerId);
            }
        }, 1000);

        return () => {
            window.clearInterval(timerId);
        };
    }, []);

    return (
        <section
            className="relative h-screen w-full text-white"
            style={{
                background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
                backgroundImage: "url(/conference_about.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center bg-[#000000A1]">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Improve Conference 2025
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join us on June 30, 2025 at Chisinau Arena to discover your path in programming
                    </p>

                    <div className="mb-8">
                        <div className="text-6xl font-bold mb-2">
                            <span className="text-[#C89AFC]">{timeLeft.days}d</span>{" "}
                            <span className="text-white">{timeLeft.hours}h</span>{" "}
                            <span className="text-white">{timeLeft.minutes}m</span>{" "}
                            <span className="text-white">{timeLeft.seconds}s</span>
                        </div>
                        <div className="text-lg">Until the conference starts</div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <button className="px-8 py-3 rounded-md font-bold text-lg bg-[#DF5950]">
                            Get Your Free Ticket
                        </button>
                        <div className="text-sm">
                            <span className="font-bold">120</span> spots available out of{" "}
                            <span className="font-bold">500</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
