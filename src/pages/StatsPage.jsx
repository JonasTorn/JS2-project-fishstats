import FishStatsTable from "@/components/FishStatsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FishStatsChart from "@/components/FishStatsChart";
import config from "../../notification-config.json";

const StatsPage = () => {
	return (
		<div className="min-h-screen">
			<div className="max-w-5xl mx-auto px-6 py-10">
				<div className="mb-8 pb-6 border-b">
					<h1 className="text-2xl font-semibold tracking-tight">Fisktrappan</h1>
					<p className="text-sm text-muted-foreground mt-1">Dammåns fiskräkning sedan 2002</p>
				</div>

				<Tabs defaultValue="list" className="flex flex-col">
					<TabsList className="h-9 rounded-none border-b border-border bg-transparent p-0 w-full justify-start mb-6">
						<TabsTrigger
							value="list"
							className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-3 pt-2 font-medium text-muted-foreground data-[state=active]:text-foreground"
						>
							Lista
						</TabsTrigger>
						<TabsTrigger
							value="statistics"
							className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 pb-3 pt-2 font-medium text-muted-foreground data-[state=active]:text-foreground"
						>
							Statistik
						</TabsTrigger>
					</TabsList>
					<TabsContent value="list">
						<FishStatsTable />
					</TabsContent>
					<TabsContent value="statistics">
						<FishStatsChart />
					</TabsContent>
				</Tabs>

				<div className="mt-10 pt-6 border-t">
					<h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
						Telegram-notifieringar
					</h2>
					<div className="rounded-lg border bg-card p-4 text-sm space-y-1 max-w-xs">
						<p>
							<span className="text-muted-foreground">Första fisken i år:</span>{" "}
							{config.notifyFirstFish ? "Ja" : "Nej"}
						</p>
						<p>
							<span className="text-muted-foreground">Minimilängd:</span>{" "}
							{config.minLength != null ? `${config.minLength} cm` : "–"}
						</p>
						<p>
							<span className="text-muted-foreground">Minimivikt:</span>{" "}
							{config.minWeight != null ? `${config.minWeight} g` : "–"}
						</p>
						<p className="text-xs text-muted-foreground pt-2">
							Ändra tröskelvärden i <code>notification-config.json</code>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatsPage;
