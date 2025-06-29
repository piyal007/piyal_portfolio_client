import React, { useState, useRef } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // EmailJS configuration
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_m65xbk5',
        TEMPLATE_ID: 'template_osfzbru',
        PUBLIC_KEY: 'Nhje0qqWxUt8A7zJn'
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error('Please fill in all fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const result = await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                formRef.current,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            if (result.status === 200) {
                toast.success('Message sent successfully! I\'ll get back to you soon.');
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                
                // Reset submitted state after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send message. Please try again or contact me directly.');
        } finally {
            setIsLoading(false);
        }
    };

    // Reset form
    const handleReset = () => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
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
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                                <p className="text-gray-300 mb-6">
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                {/* Hidden inputs for EmailJS template variables */}
                                <input type="hidden" name="user_name" value={formData.name} />
                                <input type="hidden" name="user_email" value={formData.email} />
                                
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-medium">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
                                        placeholder="Your name"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3D00]"
                                        placeholder="your.email@example.com"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2 font-medium">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3D00] resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                        required
                                        disabled={isLoading}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;