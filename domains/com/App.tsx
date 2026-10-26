import MainLayout from "@shared/layouts/MainLayout";
import Hero from "@shared/components/Hero";
import CCNavigator from "@shared/components/CCNavigator";

export default function App() {
  return (
    <MainLayout>

      <Hero
        badge="Weifly Studio"
        title="威飛工作室"
        subtitle="Cloud • AI • Identity • Web"
      />

      <CCNavigator />

    </MainLayout>
  );
}
