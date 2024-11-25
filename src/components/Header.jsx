import React from "react";
import { NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Header = () => {
	return (
		<header className="bg-secondary p-10 flex justify-between items-center">
			<span className="bg-background w-16 h-16 p-1.5 rounded-full">
				<img
					src="src/assets/images/dammans-logo-480x510.png"
					alt="Flowbite Logo"
					className="w-auto"
				/>
			</span>
			
			{/* <Sheet>
				<SheetTrigger asChild>
					<Button variant="outline">Open</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<Input id="name" value="Pedro Duarte" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">
								Username
							</Label>
							<Input id="username" value="@peduarte" className="col-span-3" />
						</div>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button type="submit">Save changes</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet> */}
			<nav>
				<div className="flex space-x-4 text-background text-xl">
					<NavLink to="/" className="hover:text-muted-foreground ">
						START
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center" />
					<NavLink to="/fiske" className="hover:text-muted-foreground ">
						FISKE
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center" />
					<NavLink to="/statistik" className="hover:text-muted-foreground ">
						STATISTIK
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center" />
					<NavLink to="/boende" className="hover:text-muted-foreground ">
						BOENDE
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center" />
					<NavLink to="/bilder" className="hover:text-muted-foreground ">
						BILDER
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
