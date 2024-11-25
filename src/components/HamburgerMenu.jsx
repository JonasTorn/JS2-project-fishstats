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

const HamburgerMenu = () => {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline">MENY</Button>
				</SheetTrigger>
				<SheetContent className="px-1 flex flex-col gap-0.5 items-stretch place-self-center ">
					<SheetHeader className="px-8 py-4 place-self-center">
						<SheetTitle>
							<h4>Meny</h4>
						</SheetTitle>
					</SheetHeader>

                    <Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
						<NavLink to="/" className="hover:text-muted-foreground">
							<div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">
								START
							</div>
						</NavLink>
					</SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/fiske" className="hover:text-muted-foreground ">
                            <div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">
                                FISKE
                            </div>
                        </NavLink>
                    </SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/statistik" className="hover:text-muted-foreground ">
                            <div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">
                                STATISTIK
                            </div>
                        </NavLink>
                    </SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/boende" className="hover:text-muted-foreground ">
                            <div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">
                                BOENDE
                            </div>
                        </NavLink>
                    </SheetClose>

					<Separator className="h-[1px] bg-muted" />

					<SheetClose asChild>
                        <NavLink to="/bilder" className="hover:text-muted-foreground ">
                            <div className="size-full px-8 py-4 hover:bg-secondary hover:text-background">
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
		</>
	);
};

export default HamburgerMenu;
