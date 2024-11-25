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
			
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline">MENY</Button>
				</SheetTrigger>
				<SheetContent  className="px-0 flex flex-col gap-0 items-stretch">
					<SheetHeader  className="px-8 py-4 place-self-center">
						<SheetTitle><h4>Meny</h4></SheetTitle>
						{/* <SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription> */}
					</SheetHeader>
					<NavLink to="/" className="hover:text-muted-foreground ">
					<div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">START</div>
					</NavLink>

					<Separator className="auto " />

					<NavLink to="/fiske" className="hover:text-muted-foreground ">
					<div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">FISKE</div>
					</NavLink>

					<Separator className="w-auto" />

					<NavLink to="/statistik" className="hover:text-muted-foreground ">
						<div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">STATISTIK</div>
					</NavLink>

					<Separator className="w-auto" />

					<NavLink to="/boende" className="hover:text-muted-foreground ">
					<div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">BOENDE</div>
					</NavLink>

					<Separator className="w-auto" />

					<NavLink to="/bilder" className="hover:text-muted-foreground ">
					<div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">BILDER</div>
					</NavLink>
					
					<SheetFooter className="place-self-center w-[50%] my-4">
						<SheetClose asChild>
							<Button className="w-full bg-secondary">Stäng</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
			<nav>
				<div className="flex space-x-4 text-background text-xl">
					<NavLink to="/" className="hover:text-muted-foreground ">
						START
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center bg-muted-foreground" />
					<NavLink to="/fiske" className="hover:text-muted-foreground ">
						FISKE
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center bg-muted-foreground" />
					<NavLink to="/statistik" className="hover:text-muted-foreground ">
						STATISTIK
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center bg-muted-foreground" />
					<NavLink to="/boende" className="hover:text-muted-foreground ">
						BOENDE
					</NavLink>
					<Separator orientation="vertical" className="h-6 self-center bg-muted-foreground" />
					<NavLink to="/bilder" className="hover:text-muted-foreground ">
						BILDER
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
