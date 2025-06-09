"use client"

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Nama Wajib diisi"
    }).max(50, {
        message: "Maksimal 50 huruf"
    }),
    phoneNumber: z.string().min(10, {
        message: "Nomor HP wajib diisi dan minimal 10 digit"
    }).max(13, {
        message: "Nomor HP maksimal 13 digit"
    }),
    region: z.string().min(1, {
        message: "Domisili Wajib diisi"
    }).max(40, {
        message: "Maksimal 40 huruf"
    })
});

async function insertUserData(url: string, data: object): Promise<any> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

type Props = {
    submitButton: ReactNode;
    onSubmitForm?: () => void;
}

export default function UserDataForm({
    submitButton,
    onSubmitForm
}: Props) {
    const [isLoading, setIsLoading] = useState(false)

    const pathname = usePathname();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            region: "",
            phoneNumber: "",
        },
    })

    console.log({
        pathname
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            await insertUserData('/api/sheet/users', values);
            setIsLoading(false)

            onSubmitForm?.();

            const solution = pathname === '/' ? 'solusi dana BPKB' : 'kredit mobil bekas';

            const waMessage = `Halo Agen Dana BPKB FAAAuto, Saya ${values.name} dari ${values.region}. Saya tertarik dengan ${solution} dan mohon informasi/konsultasi lebih lanjut. Terima kasih.`

            const encodedMessage = encodeURIComponent(waMessage)
            const url = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER_WA}?text=${encodedMessage}`;

            window.open(url, '_blank')

        } catch (error) {
            setIsLoading(false)
            console.error('Error:', error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama<strong className="text-red-600">*</strong></FormLabel>
                            <FormControl>
                                <Input placeholder="Joe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nomor Hp<strong className="text-red-600">*</strong></FormLabel>
                            <FormControl>
                                <Input placeholder="08XXXXXXX" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Domisili<strong className="text-red-600">*</strong></FormLabel>
                            <FormControl>
                                <Input placeholder="Jakarta" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <Button type="submit">Submit</Button> */}
                {
                    isLoading ? (
                        <div className="text-center">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : submitButton
                }
            </form>
        </Form>
    )
}