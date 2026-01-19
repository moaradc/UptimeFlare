import { MonitorState, MonitorTarget } from '@/types/config'
import { Accordion, Card, Center, Text, Grid } from '@mantine/core' // 引入 Grid 用于布局优化
import MonitorDetail from './MonitorDetail'
import { pageConfig } from '@/uptime.config'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function countDownCount(state: MonitorState, ids: string[]) {
  let downCount = 0
  for (let id of ids) {
    if (state.incident[id] === undefined || state.incident[id].length === 0) {
      continue
    }
    if (state.incident[id].slice(-1)[0].end === undefined) {
      downCount++
    }
  }
  return downCount
}

function getStatusTextColor(state: MonitorState, ids: string[]) {
  let downCount = countDownCount(state, ids)
  if (downCount === 0) {
    return '#059669'
  } else if (downCount === ids.length) {
    return '#df484a'
  } else {
    return '#f29030'
  }
}

export default function MonitorList({
  monitors,
  state,
}: {
  monitors: MonitorTarget[]
  state: MonitorState
}) {
  const { t } = useTranslation('common')
  const group = pageConfig.group
  const groupedMonitor = group && Object.keys(group).length > 0
  let content

  const savedExpandedGroups = localStorage.getItem('expandedGroups')
  const expandedInitial = savedExpandedGroups
    ? JSON.parse(savedExpandedGroups)
    : Object.keys(group || {})
  const [expandedGroups, setExpandedGroups] = useState<string[]>(expandedInitial)
  useEffect(() => {
    localStorage.setItem('expandedGroups', JSON.stringify(expandedGroups))
  }, [expandedGroups])

  if (groupedMonitor) {
    // 分组模式保持 Accordion，但可以优化内部样式
    content = (
      <Accordion
        multiple
        defaultValue={Object.keys(group)}
        variant="contained"
        value={expandedGroups}
        onChange={(values) => setExpandedGroups(values)}
        styles={{ item: { marginBottom: '1rem', border: '1px solid #eee' } }} // 增加间距
      >
        {Object.keys(group).map((groupName) => (
          <Accordion.Item key={groupName} value={groupName}>
            <Accordion.Control>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Text fw={700}>{groupName}</Text>
                <Text
                  fw={500}
                  style={{
                    display: 'inline',
                    paddingRight: '5px',
                    color: getStatusTextColor(state, group[groupName]),
                  }}
                >
                  {group[groupName].length - countDownCount(state, group[groupName])}/
                  {group[groupName].length} {t('Operational')}
                </Text>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              {monitors
                .filter((monitor) => group[groupName].includes(monitor.id))
                .sort((a, b) => group[groupName].indexOf(a.id) - group[groupName].indexOf(b.id))
                .map((monitor) => (
                  <Card key={monitor.id} shadow="sm" padding="lg" radius="md" withBorder mb="sm">
                     <MonitorDetail monitor={monitor} state={state} />
                  </Card>
                ))}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    )
  } else {
    // 未分组模式：每个监控一个独立卡片
    content = monitors.map((monitor) => (
      <Card 
        key={monitor.id} 
        shadow="sm" 
        padding="lg" 
        radius="md" 
        withBorder 
        mb="md" // 卡片之间的下边距
        style={{ transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-2px)' } }} // 可选：添加悬停浮动效果
      >
        <MonitorDetail monitor={monitor} state={state} />
      </Card>
    ))
  }

  return (
    <Center>
      <div style={{ width: '100%', maxWidth: '900px', padding: '0 16px' }}>
        {content}
      </div>
    </Center>
  )
}
