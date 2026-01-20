import Head from 'next/head'
import { Inter } from 'next/font/google'
import { MonitorTarget } from '@/types/config'
import { maintenances, pageConfig, workerConfig } from '@/uptime.config'
import OverallStatus from '@/components/OverallStatus'
import Header from '@/components/Header'
import MonitorList from '@/components/MonitorList'
import { Center, Text } from '@mantine/core'
import MonitorDetail from '@/components/MonitorDetail'
import Footer from '@/components/Footer'
import { useTranslation } from 'react-i18next'
import { CompactedMonitorStateWrapper, getFromStore } from '@/worker/src/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

if (typeof Uint8Array !== 'undefined' && !Uint8Array.fromHex) {
  Uint8Array.fromHex = function (string: string) {
    if (string.length % 2 !== 0) {
      throw new SyntaxError('Hex string must have an even length');
    }
    const bytes = new Uint8Array(string.length / 2);
    for (let i = 0; i < string.length; i += 2) {
      bytes[i / 2] = parseInt(string.substring(i, i + 2), 16);
    }
    return bytes;
  };
}

export default function Header({ style }: { style?: React.CSSProperties }) {
  const { t } = useTranslation('common')
  const linkToElement = (link: PageConfigLink, i: number) => {
    return (
      <a
        key={i}
        href={link.link}
        target={link.link.startsWith('/') ? undefined : '_blank'}
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    )
  }

  const links = [{ label: t('Incidents'), link: '/incidents' }, ...(pageConfig.links || [])]

  return (
    <header className={classes.header} style={style}>
      <Container size="md" className={classes.inner}>
        <div>
          <a
            href={location.pathname == '/' ? 'https://github.com/lyc8503/UptimeFlare' : '/'}
            target={location.pathname == '/' ? '_blank' : undefined}
            style={{ display: 'flex' }}
          >
            <Image
              src={pageConfig.logo ?? '/logo.svg'}
              h={56}
              w="auto"
              fit="contain"
              alt="logo"
            />
          </a>
        </div>

        <Group gap={5} visibleFrom="sm">
          {links?.map(linkToElement)}
        </Group>

        <Group gap={5} hiddenFrom="sm">
          {links?.filter((link) => link.highlight || link.link.startsWith('/')).map(linkToElement)}
        </Group>
      </Container>
    </header>
  )
}
