import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { UserConnectFormDialog } from '../form/UserConnectFormDialog'

const AdditionalBanner = () => {
    return (
        <div className='bg-blue-900 my-8 md:my-13 rounded-2xl shadow-2xl mx-auto max-w-10/12 lg:max-w-8/12 flex flex-col items-center justify-between md:items-start md:flex-row overflow-hidden px-5 md:px-10 space-x-32 md:max-h-[200px]'>
            <div className='py-10 self-center flex items-center md:items-start flex-col text-center md:text-left m-0 space-y-2'>
                <h3 className='text-gray-100 font-bold text-lg lg:text-2xl'>
                    Ajukan Pinjaman BPKB Mudah Via Agen Terpercaya
                </h3>
                <p className='text-gray-100 font-semibold text-sm lg:text-base max-w-[500px]'>
                    Bermitra dengan puluhan leasing & multifinance OJK ternama. Pengalaman lebih dari 20 tahun. Layanan Seluruh Indonesia.
                </p>
                <UserConnectFormDialog button={
                    <Button variant="outline" className='w-full max-w-60 h-12 text-lg font-semibold rounded-sm mt-4 text-blue-900'>
                        Ajukan
                    </Button>
                } />
            </div>
            <Image
                alt='Banner'
                src="/image/faauto-banner-1.webp"
                height="200"
                width="200"
                objectFit="contain"
                className='md:self-end'
            />
        </div>
    )
}

export default AdditionalBanner