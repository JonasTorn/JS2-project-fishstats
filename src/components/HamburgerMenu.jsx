import React from "react";

const HamburgerMenu = () => {
	return (
		<>
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
		</>
	);
};

export default HamburgerMenu;
