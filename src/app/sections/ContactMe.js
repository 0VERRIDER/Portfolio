
import Image from 'next/image';
import Container from "../components/Container";
import ContactForm from '../components/ContactForm';

const socials = [
    {
        name: 'Github',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        href: ''
    },
    {
        name: 'Linkedin',
        icon: 'https://www.svgrepo.com/show/922/linkedin.svg',
        href: ''
    },
    {
        name: 'Instagram',
        icon: 'https://www.svgrepo.com/show/83715/instagram-logo.svg',
        href: ''
    }
]


export default function ContactMe() {
    return (
        <Container id="contact-me" className="flex-col md:flex-row bg-gradient-to-b from-dark-purple from-30% to-black">
            <div className="flex flex-col items-center p-10 md:w-1/2 m-auto">
                <ContactForm />
                <div className="flex flex-row justify-center items-center gap-6 md:py-10 py-36">
                    {socials.map((social, index) => {
                        return (
                            <div key={index} className=" p-2 invert">
                                <a href={social.href}>
                                    <Image src={social.icon} alt={social.name} width={30} height={30} className='rounded-sm w-7 h-7 hover:opacity-80' />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col md:w-2/3 p-5 m-auto justify-center items-center hidden md:block'>
                {/* Quotation */}
                <div className="flex flex-col items-center justify-center p-10">
                    <div className="text-white text-2xl font-normal italic pb-5 uppercase text-center">"I am a great believer in luck, and I find the harder I work, the more I have of it."</div>
                    <div className="text-white text-xl font-bold  uppercase text-center">Thomas Jefferson</div>
                </div>
            </div>
        </Container>
    )
}