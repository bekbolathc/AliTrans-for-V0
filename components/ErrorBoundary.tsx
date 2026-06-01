"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service
    console.error("[ATG Error Boundary]", {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <h2 className="error-boundary__title">Что-то пошло не так</h2>
            <p className="error-boundary__text">
              Попробуйте обновить страницу или свяжитесь с нами в WhatsApp.
            </p>
            <div className="error-boundary__actions">
              <button
                className="btn btn--gold"
                onClick={() => window.location.reload()}
              >
                Обновить страницу
              </button>
              <a
                href="https://wa.me/77718000209"
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
