import { getMotoDataByKey, type MotoKey } from './motoData'

export type MotoLineupModel = {
  label: string
  to: string
}

export type MotoLineupData = {
  title: string
  subtitle?: string
  videoSrc: string
  models: MotoLineupModel[]
}

const buildMotoFullName = (key: MotoKey) => {
  const data = getMotoDataByKey(key)
  return [data.brand, data.model, data.version].filter(Boolean).join(' ')
}

export const dominarLineup: MotoLineupData = {
  title: 'Dominar',
  subtitle: 'Elegí tu modelo',
  videoSrc: '/videos/dominar_video.webm',
  models: [
    { label: buildMotoFullName('dominar-d250'), to: '/dominar/d250' },
    { label: buildMotoFullName('dominar-d400-ug'), to: '/dominar/400' },
  ],
}

export const pulsarNsLineup: MotoLineupData = {
  title: 'Pulsar NS',
  subtitle: 'Elegí tu modelo',
  videoSrc: '/videos/pulsar_video.webm',
  models: [
    { label: buildMotoFullName('rouser-ns-125'), to: '/pulsar-ns/ns-125' },
    { label: buildMotoFullName('rouser-ns-160'), to: '/pulsar-ns/ns-160' },
    { label: buildMotoFullName('rouser-ns-200'), to: '/pulsar-ns/ns-200' },
    { label: buildMotoFullName('rouser-n250'), to: '/pulsar-ns/n-250' },
    { label: buildMotoFullName('rouser-ns-400'), to: '/pulsar-ns/ns-400' },
  ],
}

export const streetLineup: MotoLineupData = {
  title: 'Street',
  subtitle: 'Elegí tu modelo',
  videoSrc: '/videos/street_video.webm',
  models: [
    { label: buildMotoFullName('rouser-p150'), to: '/street/p150' },
    { label: buildMotoFullName('boxer-150-at'), to: '/street/boxer-150' },
    { label: buildMotoFullName('boxer-ct-100'), to: '/street/boxer-ct-100' },
  ],
}
