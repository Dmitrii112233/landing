"use client"
import React, { useState } from 'react'

const Footer: React.FC = () => {
    const [formEmail, setFormEmail] = useState<string>('')

    const handleSubscribe = async (): Promise<void> => {
        try {
            const resp = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formEmail }),
            })
            const result: {
                success: boolean
                message: string
                email?: string
            } = await resp.json()

            if (result.success) {
                alert(`${result.message}\nEmail: ${result.email}`)
                setFormEmail('')
            } else {
                alert(`Error: ${result.message}`)
            }
        } catch (err) {
            console.error(err)
            alert('Something went wrong, please try again.')
        }
    }

    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#C89AFC' }}>
                            Improve Conference
                        </h3>
                        <p className="text-gray-400">
                            A conference for aspiring programmers to discover their path in the tech industry.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#speakers" className="text-gray-400 hover:text-white">
                                    Speakers
                                </a>
                            </li>
                            <li>
                                <a href="#schedule" className="text-gray-400 hover:text-white">
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a href="#tickets" className="text-gray-400 hover:text-white">
                                    Get Tickets
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <address className="text-gray-400 not-italic">
                            <p>Chişinău Arena</p>
                            <p>Chişinău, Moldova</p>
                            <p>Email: info@improveconf.md</p>
                            <p>Phone: +373 123 456 789</p>
                        </address>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
                        <p className="text-gray-400 mb-4">Stay updated with our latest news</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                                required={true}
                                className="px-4 py-2 w-full border rounded-l-md focus:outline-none text-gray-400"
                            />
                            <button
                                onClick={handleSubscribe}
                                disabled={!formEmail.trim()}
                                className="px-4 py-2 rounded-r-md bg-[#DF5950] hover:bg-[#C89AFC] transition-colors disabled:opacity-90"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Improve Conference. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
