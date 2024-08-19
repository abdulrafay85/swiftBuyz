import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { Twitter, Facebook, Instagram, Linkedin, Github, LinkedinIcon } from 'lucide-react';



const Footer = () => {
    return (
        <footer className="">
            <div className="max-w-[90%] mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <Image src={'/logo12.svg'} alt={'svg'} width={100} height={100} />
                </div>

                <p className="mx-auto mt-6 max-w-md text-center scroll-m-20 text-md font-semibold tracking-tight text-myBlackPara">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                    itaque neque.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <Link className="text-myBlackPara transition hover:text-Coffee3 scroll-m-20 text-base font-semibold tracking-tight duration-200" href="#"> Home </Link>
                    </li>

                    <li>
                        <Link className="text-myBlackPara transition hover:text-Coffee3 scroll-m-20 text-base font-semibold tracking-tight duration-200" href="#"> About Us </Link>
                    </li>

                    <li>
                        <Link className="text-myBlackPara transition hover:text-Coffee3 scroll-m-20 text-base font-semibold tracking-tight duration-200" href="#"> Contact Us </Link>
                    </li>

                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <Link
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-myBlackPara transition hover:text-Coffee3"
                        >
                            <Facebook />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-myBlackPara transition hover:text-Coffee3"
                        >
                            <Instagram />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-myBlackPara transition hover:text-Coffee3"
                        >
                            <Twitter />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-myBlackPara transition hover:text-Coffee3"
                        >
                            <Github />
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="text-myBlackPara transition hover:text-Coffee3"
                        >
                            <Linkedin />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer