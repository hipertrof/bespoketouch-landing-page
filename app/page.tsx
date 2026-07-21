import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { GuestMoment } from '@/components/guest-moment'
import { TherapistProcedure } from '@/components/therapist-procedure'
import { PrivacySection } from '@/components/privacy-section'
import { Multilingual } from '@/components/multilingual'
import { ManagerSection } from '@/components/manager-section'
import { ClosingCta } from '@/components/closing-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <GuestMoment />
        <TherapistProcedure />
        <PrivacySection />
        <Multilingual />
        <ManagerSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  )
}
