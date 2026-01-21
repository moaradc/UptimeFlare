import { Text, Tooltip, Badge, Group, ActionIcon, Collapse, Box } from '@mantine/core'
import { MonitorState, MonitorTarget } from '@/types/config'
import {
  IconAlertCircle, 
  IconAlertTriangle, 
  IconCircleCheck, 
  IconChevronDown, 
  IconChevronUp, 
  IconActivity,
  IconInfoCircle,
  IconExternalLink
} from '@tabler/icons-react'
import DetailChart from './DetailChart'
import DetailBar from './DetailBar'
import { getColor } from '@/util/color'
import { maintenances } from '@/uptime.config'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function MonitorDetail({
  monitor,
  state,
}: {
  monitor: MonitorTarget
  state: MonitorState
}) {
  const { t } = useTranslation('common')
  // 控制详情展开的状态，默认折叠 (false)
  const [opened, setOpened] = useState(false)

  if (!state.latency[monitor.id])
    return (
      <>
        <Text mt="sm" fw={700}>
          {monitor.name}
        </Text>
        <Text mt="sm" fw={700}>
          {t('No data available')}
        </Text>
      </>
    )

  let statusIcon =
    state.incident[monitor.id].slice(-1)[0].end === undefined ? (
      <IconAlertCircle
        style={{ width: '1.25em', height: '1.25em', color: '#b91c1c', marginRight: '3px' }}
      />
    ) : (
      <IconCircleCheck
        style={{ width: '1.25em', height: '1.25em', color: '#059669', marginRight: '3px' }}
      />
    )

  const now = new Date()
  const hasMaintenance = maintenances
    .filter((m) => now >= new Date(m.start) && (!m.end || now <= new Date(m.end)))
    .find((maintenance) => maintenance.monitors?.includes(monitor.id))
  if (hasMaintenance)
    statusIcon = (
      <IconAlertTriangle
        style={{ width: '1.25em', height: '1.25em', color: '#fab005', marginRight: '3px' }}
      />
    )

  // 正常运行时间计算
  let totalTime = Date.now() / 1000 - state.incident[monitor.id][0].start[0]
  let downTime = 0
  for (let incident of state.incident[monitor.id]) {
    downTime += (incident.end ?? Date.now() / 1000) - incident.start[0]
  }
  const uptimePercent = (((totalTime - downTime) / totalTime) * 100).toPrecision(4)

  // 延迟数据计算 (Max / Avg)
  const latencyPoints = state.latency[monitor.id].map(p => p.ping)
  let maxLatency = 0
  let avgLatency = 0
  if (latencyPoints.length > 0) {
    maxLatency = Math.max(...latencyPoints)
    avgLatency = Math.round(latencyPoints.reduce((a, b) => a + b, 0) / latencyPoints.length)
  }

  // 监控名称及图标区域渲染
  const monitorNameElement = (
    <Group gap={6} align="center" wrap="nowrap">
      {/* 状态图标 + 名称 */}
      <Text fw={700} size="lg" style={{ display: 'inline-flex', alignItems: 'center' }}>
        {statusIcon} {monitor.name}
      </Text>

      {/* Tooltip 图标 */}
      {monitor.tooltip && (
        <Tooltip label={monitor.tooltip} withArrow>
          <ActionIcon 
            variant="subtle" 
            color="gray" 
            size="sm" 
            aria-label="Info"
            style={{ cursor: 'pointer' }}
          >
            <IconInfoCircle size={18} />
          </ActionIcon>
        </Tooltip>
      )}

      {/* 链接图标 */}
      {monitor.statusPageLink && (
        <ActionIcon
          component="a"
          href={monitor.statusPageLink}
          target="_blank"
          variant="subtle"
          color="gray"
          size="sm"
          aria-label="Open Link"
        >
          <IconExternalLink size={18} />
        </ActionIcon>
      )}
    </Group>
  )

  // 可用率文本组件
  const uptimeTextElement = (
    <Text fw={700} style={{ color: getColor(uptimePercent, true) }} size="sm">
      {t('Overall', { percent: uptimePercent })}
    </Text>
  )

  // 延迟胶囊组件
  const badgesElement = (
    <>
      <Badge variant="light" color="gray" size="sm" radius="sm" leftSection={<IconActivity size={10}/>}>
        Avg: {avgLatency}ms
      </Badge>
      <Badge variant="light" color={maxLatency > 500 ? 'red' : 'gray'} size="sm" radius="sm">
        Max: {maxLatency}ms
      </Badge>
    </>
  )

  return (
    <>
      {/* 头部区域 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        
        {/* 左侧区域 */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* 直接渲染 monitorNameElement，不再需要外层 Tooltip 包裹 */}
          <Group gap="xs">
            {monitorNameElement}
          </Group>

          {/* 移动端显示的可用率 */}
          <Box hiddenFrom="xs" mt={2}>
            {uptimeTextElement}
          </Box>
        </div>

        {/* 右侧区域 */}
        <Group gap="xs">
          {/* PC端显示的延迟胶囊 */}
          <Group gap={5} visibleFrom="xs">
            {badgesElement}
          </Group>

          {/* PC端显示的可用率 */}
          <Box visibleFrom="xs">
            {uptimeTextElement}
          </Box>
          
          {/* 展开/折叠按钮 */}
          {!monitor.hideLatencyChart && (
            <ActionIcon 
              variant="subtle" 
              color="gray" 
              onClick={() => setOpened((o) => !o)}
              aria-label="Toggle details"
            >
              {opened ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
            </ActionIcon>
          )}
        </Group>
      </div>

      {/* 移动端显示的延迟胶囊 */}
      <Group gap={5} hiddenFrom="xs" mb="xs">
        {badgesElement}
      </Group>

      {/* 状态条 */}
      <DetailBar monitor={monitor} state={state} />

      {/* 折叠区域 */}
      {!monitor.hideLatencyChart && (
        <Collapse in={opened}>
          <Box mt="md">
            <DetailChart monitor={monitor} state={state} />
          </Box>
        </Collapse>
      )}
    </>
  )
}
