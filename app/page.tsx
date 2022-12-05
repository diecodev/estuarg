import { ReactNode } from 'react'
import { Header } from '@components/header'
import Hero from '@components/hero'
import { Universities } from '@components/universities'
import { Story } from '@components/story'
import { Motivate } from '@components/motivate'

export default function HomePage (): ReactNode {
  return (
    <div style={{ padding: '0 var(--global-padding)' }}>
      <Header />
      <Hero />
      <Universities />
      <Story />
      <Motivate />
    </div>
  )
}