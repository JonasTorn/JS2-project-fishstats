import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const HamburgerMenu = () => {
	return (		
			<Sheet>
				<SheetTrigger asChild >
					<Button variant="outline" className="bg-secondary text-background hover:bg-primary-foreground">MENY <ChevronDown /></Button>
				</SheetTrigger>
				<SheetContent className="px-1 flex flex-col gap-0.5 items-stretch place-self-center min-w-fit max-w-[60vw]">
					<SheetHeader className="px-8 py-4 place-self-center">
						<SheetTitle>
							<h4>Meny</h4>
						</SheetTitle>
					</SheetHeader>

                    <Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
						<NavLink to="/">
							<div className="w-full h-fit px-8 py-4 hover:bg-secondary hover:text-background aria-[current=page]:bg-blue-100">
								START
							</div>
						</NavLink>
					</SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/fiske">
                            <div className="w-full h-fit px-8 py-4 hover:bg-secondary hover:text-background">
                                FISKE
                            </div>
                        </NavLink>  
                    </SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/fisktrappa">
                            <div className="w-full h-fit px-8 py-4 hover:bg-secondary hover:text-background">
                                FISKTRAPPA
                            </div>
                        </NavLink>
                    </SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/boende">
                            <div className="w-full h-fit px-8 py-4 hover:bg-secondary hover:text-background">
                                BOENDE
                            </div>
                        </NavLink>
                    </SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/bilder">
                            <div className="w-full h-fit px-8 py-4 hover:bg-secondary hover:text-background">
                                BILDER
                            </div>
                        </NavLink>
                    </SheetClose>

                    <Separator className="h-[1px] bg-muted" />

					<SheetFooter className="place-self-center w-[50%] my-4">
						<SheetClose asChild>
							<Button className="w-full bg-secondary">Stäng</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
	);
};

export default HamburgerMenu;
