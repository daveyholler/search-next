import React from 'react';
import { useRouter } from 'next/router';

import {
  EuiButton,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiStat,
} from "@elastic/eui";

import { RootLayout, StatPanel, StatPanels, TableIndices } from '@/components';

export default function Home() {
  const router = useRouter()

  const HOME_DATA = {
    pageTitle: "Elasticsearch indices",
    rightSideItems: [
      <EuiButton fill iconType="plusInCircle" onClick={() => router.push('./api-index/ingest')}>Create a new index</EuiButton>,
    ]
  }
  return (
    <RootLayout pageData={HOME_DATA}>
      <EuiFlexGroup gutterSize="m">
        <EuiFlexItem>
          <StatPanel title="8" description="Connected ingest methods" />
        </EuiFlexItem>
        <EuiFlexItem>
          <StatPanel title="8" description="Incomplete ingest methods" />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="m" />
      <EuiFlexGroup gutterSize="m">
        <EuiFlexItem>
          <StatPanel title="8" description="Running syncs" />
        </EuiFlexItem>
        <EuiFlexItem>
          <StatPanel title="8" description="Idle syncs" />
        </EuiFlexItem>
        <EuiFlexItem>
          <StatPanel title="8" description="Orpahned syncs" />
        </EuiFlexItem>
        <EuiFlexItem>
          <StatPanel title="8" description="Sync errors" />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="l" />
      <EuiTitle size="m"><h1>Available indices</h1></EuiTitle>
      <TableIndices />
    </RootLayout>
  )
}
