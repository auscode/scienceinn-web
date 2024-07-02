import { useState } from 'react';

export default function Contact() {
    const [buttonState, setButtonState] = useState('default');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setButtonState('loading');

        setTimeout(() => {
            setButtonState('success');
            setTimeout(() => {
                setButtonState('default');
            }, 2000);
        }, 2000);
    };

    return (
        <div className="contact flex flex-row justify-between items-center justify-center bg-black p-6 bg-contact contact-class" id="contact">
            <h1 className="text-8xl font-bold ml-10 mb-0 text-white">Contact us</h1>
            <div className="bg-black border-2 p-8 rounded shadow-lg w-full max-w-lg">
                <form className="flex flex-col text-white space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 border border-gray-300 rounded bg-black focus:outline-none focus:border-white-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 border border-gray-300 rounded bg-black focus:outline-none focus:border-white-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-3 border border-gray-300 rounded bg-black focus:outline-none focus:border-white-500 h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className={`p-3 rounded hover:bg-white transition duration-300 flex justify-center items-center ${
                            buttonState === 'loading' ? 'bg-gray-500 text-black' : 
                            buttonState === 'success' ? 'bg-green-500 text-white' : 'bg-gray-500 text-black'
                        }`}
                    >
                        {buttonState === 'loading' && (
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.243 2.719 7.848 6.5 9.291l-2.5-4z"
                                ></path>
                            </svg>
                        )}
                        {buttonState === 'default' && 'Send Message'}
                        {buttonState === 'success' && 'Sent Successfully'}
                    </button>
                </form>
            </div>
        </div>
    );
}
