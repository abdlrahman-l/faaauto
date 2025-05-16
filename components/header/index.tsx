/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tOnF6UPDszh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Image from "next/image"
import { UserConnectFormDialog } from "../form/UserConnectFormDialog"
import { SVGProps } from "react"

const menuList = [
    {
        title: 'Tentang Kami',
        href: '#hero-banner'
    },
    {
        title: 'Keunggulan',
        href: '#why-choose-us'
    },
    {
        title: 'Cara Kerja / Proses',
        href: '#process-banner'
    },
    // {
    //     title: 'Tentang Kami',
    //     href: '#hero-banner'
    // },
]

export default function Component() {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-4">
                        <Link href="#" prefetch={false}>
                            <Image
                                src="/image/logo.webp"
                                alt="Logo"
                                width={80}
                                height={80}
                            />
                            {/* <span className="sr-only">ShadCN</span> */}
                        </Link>
                        <div className="grid gap-2 py-6">
                            {
                                menuList.map(m => (
                                    <Link key={m.title} href={m.href} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                        {m.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                    <Image
                        src="/image/logo.webp"
                        alt="Logo"
                        width={120}
                        height={120}
                    />
                    {/* <span className="sr-only">ShadCN</span> */}
                </Link>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {
                            menuList.map(m => (
                                <NavigationMenuLink asChild key={m.title}>
                                    <Link
                                        href={m.href}
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:underline"
                                        prefetch={false}
                                    >
                                        {m.title}
                                    </Link>
                                </NavigationMenuLink>
                            ))
                        }
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="ml-auto flex gap-2">
                    {/* <Button variant="outline">Sign in</Button> */}
                    <UserConnectFormDialog button={
                        <Button>Konsultasi</Button>
                    } />
                </div>
            </header>
        </div>
    )
}

function MenuIcon(props: SVGProps<any>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}