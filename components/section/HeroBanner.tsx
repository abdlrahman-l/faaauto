import Image from 'next/image'
import React, { ReactNode } from 'react'
import { UserConnectFormDialog } from '../form/UserConnectFormDialog'

type HeroBannerProps = {
    title: ReactNode;
    subTitle: ReactNode;
    description: ReactNode;
    imageSrc: string;
}

const HeroBanner = ({ title, subTitle, description, imageSrc }: HeroBannerProps) => {
    return (
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center px-2 lg:px-10" id="hero-banner">
            <div
                className="mx-auto md:grid md:grid-cols-2 md:items-center md:gap-5 p-3.5 lg:px-8 lg:py-2"
            >
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {title}
                    </h1>
                    <br />
                    <h2 className="text-xl font-medium text-gray-700 sm:text-2xl">
                        {subTitle}
                    </h2>
                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        {description}
                    </p>
                    <br />
                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <UserConnectFormDialog button={
                            <a
                                className="inline-block rounded-md bg-blue-900 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-600"
                                href="#"
                            >
                                Konsultasi Gratis & Ajukan
                            </a>
                        } />

                        {/* <a
                            className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                            href="#"
                        >
                            Learn More
                        </a> */}
                    </div>
                </div>

                <Image
                    src={imageSrc}
                    alt='Kendaraan'
                    width={1200}
                    height={1200}
                    priority
                />

            </div>
        </section>
    )
}

export default HeroBanner