"use client";
import { UserIcon, EnvelopeIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
    // form handler function using netlify forms
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch("/", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/x-www-form-urlencoded'
            }
        }).then(() => {
            alert('Thank you for your message!');
            form.reset();
        }).catch((error) => {
            alert(error);
        });
    }
    return (
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit} netlify="true">
            <label className="relative flex items-center">
                <UserIcon className="absolute left-6 h-5 w-5 text-white mr-2" />
                <input className="border border-white bg-transparent text-white rounded-md pl-12 h-15 p-4 m-2 w-80" type="text" name='name' placeholder="Name" />
            </label>
            <label className="relative flex items-center">
                <EnvelopeIcon className="absolute left-6 h-5 w-5 text-white mr-2" />
                <input className="border border-white bg-transparent text-white rounded-md pl-12 h-15 p-4 m-2 w-80" type="text" name='email' placeholder="Email" />
            </label>
            <label className="relative flex items-center">
                <Bars3BottomLeftIcon className="absolute top-[26%] left-6 w-5 text-white mr-2" />
                <textarea className="border border-white bg-transparent text-white rounded-md pl-12 h-30 p-4 m-2 w-80" type="text" name='message' placeholder="Subject" />
            </label>
            <button className="border border-white rounded-md p-2 m-2 w-80 bg-white text-dark-purple font-bold uppercase">Send</button>
        </form>
    )
}