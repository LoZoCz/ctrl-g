import HeroSection from '@/components/homePage/HeroSection'
import RecoSection from '@/components/homePage/RecoSection'
import CateSection from '@/components/homePage/CateSection'

export default function Home() {
    return (
        <main className="grid gap-8">
            <HeroSection />
            <RecoSection />
            <CateSection />
            {/* zrob jeszcze jakas sekcje dodatkowa */}
            {/* i zrob footer jakis z fajnymi linkami i czyms dodatkowym */}
        </main>
    )
}
