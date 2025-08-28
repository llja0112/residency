import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <h1 className={clsx(className)} style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/PrevMedLogo.png"
        alt="National Preventive Medicine Residency"
        loading={loading}
        style={{ height: 40, marginRight: 8 }}
        fetchPriority={priority}
      />
    </h1>
  )
}
