import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <section id="contact" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Contact <span className="text-[#FF3D00]">Me</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                        
                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Phone</h4>
                                    <p className="text-gray-300">+880 1956-475904</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Email</h4>
                                    <p className="text-gray-300">piyalsha007@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#FF3D00] rounded-lg">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">WhatsApp</h4>
                                    <p className="text-gray-300">+880 1956-475904</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800/50 p-8 rounded-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3D00] resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;