"use client"

import React, { Component, ReactNode } from 'react'
import { SmoothLoader } from './SmoothLoader'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('WebGL component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SmoothLoader size="lg" />
              <p className="text-muted-foreground text-sm mt-4">
                WebGL not supported on this device
              </p>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
