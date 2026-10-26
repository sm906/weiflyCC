import MainLayout from "@shared/layouts/MainLayout";
import Hero from "@shared/components/Hero";
import CCNavigator from "@shared/components/CCNavigator";

export default function App() {
  return (
    <MainLayout>

      <Hero
        badge="CC Navigator"
        title="WeiflyCC Core"
        subtitle="One Core • Four Realms"
      />

      <CCNavigator />

    </MainLayout>
  );
}
