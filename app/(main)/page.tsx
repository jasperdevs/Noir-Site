import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";

export default function Page() {
  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title="Find your next favorite movie."
          subtitle="Noir learns your taste through quick comparisons and recommends exactly what to watch tonight."
          media={
            <Hero.Image
              src="/app_view/screenshot_placeholder.png"
              bezel="iPhone 17 Black"
              alt="Noir app screenshot"
            />
          }
          action={<DownloadActionButton size="medium" />}
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={280}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="sparkles"
            title="AI-Powered Picks"
            description="Get personalized recommendations that get smarter the more you use them."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="movie"
            title="Real Data"
            description="IMDb, Rotten Tomatoes, Metascore, streaming availability — all in one place."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="shield"
            title="Focus Mode"
            description="Block distracting apps while you watch. No interruptions, just cinema."
          />
        </CardGrid>
      </Section>

      <Section paddingTop={60} paddingBottom={160}>
        <DownloadActionButton size="medium" />
      </Section>
    </>
  );
}
