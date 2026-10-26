import MainLayout from "@shared/layouts/MainLayout";
import Hero from "@shared/components/Hero";

export default function App() {
  return (
    <MainLayout>

      <Hero
        badge="Identity Realm"
        title="Weifly Identity"
        subtitle="One Login For All Realms"
      />

    </MainLayout>
  );
}
