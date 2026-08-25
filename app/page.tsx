import { Closing } from '@/components/closing'
import { Countdown } from '@/components/countdown'
import { Details } from '@/components/details'
import { Hero } from '@/components/hero'
import { Location } from '@/components/location'

export default function Page() {
  return (
    <main>
      <Hero />
      <Details />
      <Countdown />
      <Location />
      <Closing />
    </main>
  )
}
