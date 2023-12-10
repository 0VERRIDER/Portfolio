"use client";

import { useEffect, useState, useContext } from "react";
import { BottomMessageBarContext } from "../../context/bottomMessageBar/BottomMessageBarContext";
import Link from 'next/link';
import * as strings from '../../resources/strings';
import * as configs from '../../resources/configs';

export default function ResumeDownloader() {
    const {showBottomMessageBar} = useContext(BottomMessageBarContext);

    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);
    const [currentStep, setCurrentStep] = useState("Populating Data");
    const [resumeUrl, setResumeUrl] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        for (let key of formData.keys()) {
            data[key] = formData.get(key);
        }
        const url = `${configs.links.RESUME_PROTOCOL}://${configs.links.RESUME_HOST}/api/v1/resume/create?${new URLSearchParams(data).toString()}`;
        setLoading(true);
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            setLoading(false);
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Failed to create resume");
            }
        }).then((data) => {
            setSucess(true);
            let downloadUrl = `${configs.links.RESUME_PROTOCOL}://${configs.links.RESUME_HOST}/api/v1/resume/${data.data.uuid}/get?dl=1`;
            setResumeUrl(downloadUrl);
            showBottomMessageBar("Resume is downloading in the background.", "bg-green-700");
            window.open(downloadUrl, "_self");
        }).catch((error) => {
            setError(true);
            showBottomMessageBar("Something went wrong. Please try again later.", "bg-red-700");
            console.log(error);
        });
    }

    useEffect(() => {
        if (loading) {
            const steps = [
                "Making a Figma Design",
                "Selecting a template",
                "Putting my logo",
                "Adding my details",
                "Adding few of my recent projects",
                "Adding final touches",
                "Downloading the Resume",
            ];

            let step = 0;
            const interval = setInterval(() => {
                setCurrentStep(steps[step]);
                step++;
                if (step === steps.length) {
                    clearInterval(interval);
                }
            }, 3000);

            return () => {
                clearInterval(interval);
            }
        }
    }, [loading]);


    if (loading) {
        return (
            <div className="flex flex-col h-screen items-center">
                <div className="absolute h-1/2 step-loader text-white flex flex-col gap-3 items-center justify-end">
                <span className="step text-xl">{currentStep}</span>
                {/* <span>Resume</span> */}
                </div>
        </div>
        );
    } else if (sucess) {
        return (
            <div className={`absolute h-3/4 flex flex-col justify-center items-center max-w-md`}>
            {/* A success mark with in a green filled white border circle */}
            <div className="flex justify-center items-center bg-green-500 rounded-full border-4 border-white h-32 w-32">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="text-white text-2xl font-bold pt-10 pb-4  text-center">Thanks You.</div>
            <div className="text-white font-normal text-sm text-center pb-10 w-[75%] md:w-[65%]">I hope we meet again with a great news to shape a new future.</div>
            <div className="flex flex-col gap-4">
                {/* A button to download resume again*/}
                <a href={resumeUrl}>
                    <button className="btn border-2 border-white text-md font-bold w-60 p-3 rounded-lg bg-primary select-none">Download Again</button>
                </a>
                <a href="/">
                    <button className="btn border-2 border-white text-md font-bold w-60 p-3 rounded-lg bg-black select-none">Go Back Home</button>
                </a>
            </div>
        </div>
        );
    } else if (error) {
        return (
            <div className={`absolute h-3/4 w-full flex flex-col justify-center items-center max-w-md`}>
            {/* A x mark with in a red filled white border circle */}
            <div className="flex justify-center items-center bg-red-500 rounded-full border-4 border-white h-32 w-32">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="text-white text-2xl font-bold pt-10 pb-4  text-center">Something went wrong.</div>
            <div className="text-white font-normal text-sm text-center pb-10 w-[50%] md:w-[65%]">Please contactme@anshil.me or try again later.</div>
            <a href="/">
                <button className="btn border-2 border-white text-xl w-60 p-3 rounded-lg bg-black select-none">Go Back Home</button>
            </a>
        </div>
        );
    } else {
        return (
            <div className="px-5 md">
                <div className="bg-black pt-20 pb-7">
                    <h1 className="text-white text-4xl font-bold text-center">Resume</h1>
                    <h3 className="text-white text-sm font-light text-center pt-2">Let me get to know you a bit.</h3>
                </div>
                <form className="px-5 flex flex-col gap-2 md:w-2/3 md:grid md:grid-cols-2 md:gap-4 pb-20 m-auto" onSubmit={onSubmit}>
                    {/* input for JOBID JOB TITLE EMPLOYER NAME AND APPLICATION LINK */}
                    <div className="flex flex-col">
                        <label className="text-white text-sm font-light py-2">Job ID</label>
                        <input
                            type="text"
                            name="job_number"
                            className="border bg-black border-white rounded-sm p-4"
                            required={true}
                            placeholder="Enter any id (its for your reference)"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white text-sm font-light py-2">Job Title</label>
                        <select
                            className="border bg-black border-white rounded-sm p-4"
                            required={true}
                            name="job_role"
                        >
                            {
                                strings.en.JOB_TITLES.map((title, index) => {
                                    return (
                                        <option key={index} value={title[1]}>{title[0]}</option>
                                    );
                                })
                            }
                            <option value="Fullstack Developer">Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white text-sm font-light py-2">Company Name / Your Name</label>
                        <input
                            type="text"
                            className="border bg-black border-white rounded-sm p-4"
                            required={true}
                            placeholder="Enter your company name or name"
                            name="employer_name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-white text-sm font-light py-2">Application Link (Optional)</label>
                        <input
                            type="text"
                            className="border bg-black border-white rounded-sm p-4"
                            placeholder="Link to the job posting or company website"
                            name="application_link"
                        />
                    </div>
                    {/* Drop down for Resume version */}
                    <div className="flex flex-col">
                        <label className="text-white text-sm font-light py-2 hidden">Resume Version</label>
                        <select
                            className="border bg-black border-white rounded-sm p-4"
                            defaultValue={"v3"}
                            required={true}
                            hidden={true}
                            name="resume_version" >
                            {
                                strings.en.RESUME_VERSIONS.map((version, index) => {
                                    return (
                                        <option key={index} value={version[1]}>{version[0]}</option>
                                    );
                                })
                            }
                            {/* Add more resume versions here */}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:col-span-2">
                        {/* Submission Button */}
                        <button type="submit" className="btn border border-white w-full text-sm p-6 mt-3 font-bold rounded-lg bg-primary">
                            Download
                        </button>
                        {/* Go back button */}
                        <Link href="/" className="btn border border-white text-sm p-6 mt-3 font-bold rounded-lg bg-black w-full text-center">
                                Go Back
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}