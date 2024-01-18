import React from 'react'
import { useRouter } from 'next/router'

import {
} from '@elastic/eui'

import RootLayout from '@/components/layout'
import { DATA } from './data';
import { StatPanels } from '@/components';

export default function Overview() {
  const router = useRouter()

  return (
    <RootLayout
      pageData={DATA}
    >
      <StatPanels pageData={DATA} />
      Crawler overview
    </RootLayout>
  )
}

