"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Tops",
        href: "/tops",
        description:
            "A Collection of beautiful tops for your wardrobe to sleek your look.",
    },
    {
        title: "Pants",
        href: "pants",
        description:
            "A Collection of beautiful Pants for your wardrobe to sleek your look.",
    },
    {
        title: "Shoes",
        href: "/shoes",
        description:
            "A Collection of beautiful Shoes for your wardrobe to sleek your look.",
    },
    {
        title: "Acessories",
        href: "/acessories",
        description:
            "A Collection of beautiful Acessories for your wardrobe to sleek your look.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] bg-OffWhite gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] hover:bg-none">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
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
                        "block  select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground  focus:text-accent-foreground group ",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none group-hover:text-Coffee3 duration-200">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug duration-200 text-muted-foreground group-hover:text-myBlackPara">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"