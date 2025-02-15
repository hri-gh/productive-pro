"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Youtube, Instagram, Facebook, Twitter, Menu } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from 'next/link'

// Placeholder organizer components
const YouTubeOrganizer = () => <div className="p-4">YouTube Organizer Content</div>
const InstagramOrganizer = () => <div className="p-4">Instagram Organizer Content</div>
const FacebookOrganizer = () => <div className="p-4">Facebook Organizer Content</div>
const TwitterOrganizer = () => <div className="p-4">Twitter Organizer Content</div>

type Platform = 'youtube' | 'instagram' | 'facebook' | 'twitter'

interface NavItem {
    id: Platform
    name: string
    icon: React.ReactNode
    component: React.ComponentType
    description: string
}

const navItems: NavItem[] = [
    {
        id: 'youtube',
        name: 'YouTube',
        icon: <Youtube className="h-5 w-5 mr-2" />,
        component: YouTubeOrganizer,
        description: 'Organize and manage your YouTube channels'
    },
    {
        id: 'instagram',
        name: 'Instagram',
        icon: <Instagram className="h-5 w-5 mr-2" />,
        component: InstagramOrganizer,
        description: 'Keep track of your favorite Instagram accounts'
    },
    {
        id: 'facebook',
        name: 'Facebook',
        icon: <Facebook className="h-5 w-5 mr-2" />,
        component: FacebookOrganizer,
        description: 'Manage your Facebook pages and groups'
    },
    {
        id: 'twitter',
        name: 'Twitter',
        icon: <Twitter className="h-5 w-5 mr-2" />,
        component: TwitterOrganizer,
        description: 'Organize your Twitter lists and follows'
    },
]

export default function NavigationMenuBar() {
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>('youtube')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // const renderOrganizer = () => {
    //     const selectedItem = navItems.find(item => item.id === selectedPlatform)
    //     return selectedItem ? <selectedItem.component /> : null
    // }

    return (
        <div className=" flex flex-col bg-background text-foreground dark">
            {/* Global Navigation */}
            <nav className="bg-card shadow-md bg-slate-400">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            {/* <span className="text-2xl font-semibold text-primary">Multi-Platform Organizer</span> */}
                        </div>
                        <div className="">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Platforms</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    {/* <NavigationMenuLink asChild className='bg-red-500'>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                Multi-Platform Organizer
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Manage and organize your social media presence across multiple platforms.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink> */}
                                                </li>
                                                {navItems.map((item) => (
                                                    <ListItem
                                                        key={item.id}
                                                        title={item.name}
                                                        href="#"
                                                        onClick={() => setSelectedPlatform(item.id)}
                                                    >
                                                        {/* {item.description} */}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    {/* {navItems.map((item) => (
                                        <NavigationMenuItem key={item.id}>
                                            <Link href="#" legacyBehavior passHref>
                                                <NavigationMenuLink
                                                    className={navigationMenuTriggerStyle()}
                                                    onClick={() => setSelectedPlatform(item.id)}
                                                >
                                                    <span className="flex items-center">
                                                        {item.icon}
                                                        {item.name}
                                                    </span>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    ))} */}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        <div className="md:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn("md:hidden", isMobileMenuOpen ? "block" : "hidden")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card">
                    {navItems.map((item) => (
                        <Button
                            key={item.id}
                            variant={selectedPlatform === item.id ? 'default' : 'ghost'}
                            className="w-full justify-start"
                            onClick={() => {
                                setSelectedPlatform(item.id)
                                setIsMobileMenuOpen(false)
                            }}
                        >
                            {item.icon}
                            {item.name}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Main content area */}
            {/* <div className="flex-grow flex overflow-hidden"> */}
                {/* Platform-specific sidebar */}
                {/* <div className={cn("w-64 bg-card border-r border-border", isMobileMenuOpen ? "hidden" : "hidden md:block")}>
                    <ScrollArea className="h-full bg-blue-500">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">Categories</h2>
                            // Category list would go here

                        </div>
                    </ScrollArea>
                </div> */}

                {/* Main content */}
                {/* <div className="flex-grow overflow-auto bg-slate-600">
                    <ScrollArea className="h-full">
                        {renderOrganizer()}
                    </ScrollArea>
                </div> */}
            {/* </div> */}
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
