"use client";
import { useState } from 'react';
import { UserIcon, EnvelopeIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
    const [isSubmited, setIsSubmited] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // form handler function using netlify forms
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                setIsSubmited(true);
                setIsLoading(false);
            })
            .catch((error) => {
                alert(error);
                setIsLoading(false);
            });
    };
    return (
        <>
            <div className={`text-white text-2xl font-bold p-10 uppercase text-center hidden ${isSubmited && "hidden"}`}>Contact Me</div>
            <form className={`flex flex-col justify-center items-center hidden ${isSubmited && "hidden"}`} onSubmit={handleSubmit} data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <label className="relative flex items-center">
                    <UserIcon className="absolute left-6 h-5 w-5 text-white mr-2" />
                    <input className="border border-white bg-transparent text-white rounded-md pl-12 h-15 p-4 m-2 w-80" type="text" name='name' placeholder="Name" required={true}/>
                </label>
                <label className="relative flex items-center">
                    <EnvelopeIcon className="absolute left-6 h-5 w-5 text-white mr-2" />
                    <input className="border border-white bg-transparent text-white rounded-md pl-12 h-15 p-4 m-2 w-80" type="text" name='email' placeholder="Email" required={true}/>
                </label>
                <label className="relative flex items-center">
                    <Bars3BottomLeftIcon className="absolute top-[26%] left-6 w-5 text-white mr-2" />
                    <textarea className="border border-white bg-transparent text-white rounded-md pl-12 h-30 p-4 m-2 w-80" type="text" name='message' placeholder="Subject" required={true}/>
                </label>
                <button className="border border-white rounded-md p-4 m-2 w-80 bg-white text-dark-purple font-bold uppercase" type="submit">
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                    ) : "Send"}
                </button>
            </form>
            <div className={`flex flex-col justify-center items-center ${!isSubmited && ""}`}>
                {/* A success mark with in a green filled white border circle */}
                <div className="flex justify-center items-center bg-green-500 rounded-full border-4 border-white h-32 w-32">
                    <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="text-white text-2xl font-bold pt-10 pb-4  text-center">Message Sent</div>
                <div className="text-white font-normal text-sm text-center pb-10 w-[85%] md:w-[65%]">I will get back to you as soon as possible. Mean While, Learn about me.</div>
                {/* A button to download resume */}
                <a href="https://resume.anshil.me">
                    <button className="btn border-2 border-white text-xl w-60 p-3 rounded-lg bg-black">Download Resume</button>
                </a>
            </div>
        </>
    )
}