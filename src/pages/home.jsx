'use client'

import React, { useState } from 'react'
import './clinicPesa.css'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('account')
  const [balanceVisible, setBalanceVisible] = useState(true)

  const accountOptions = [
    { id: 1, title: 'Pay Medical Bill', icon: 'bill' },
    { id: 2, title: 'Get Loan', icon: 'loan' },
    { id: 3, title: 'Join MaMas', icon: 'mamas' },
    { id: 4, title: 'My Approvals', icon: 'approvals' }
  ]

  const IconRenderer = ({ type, size = 32 }) => {
    const iconProps = {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5'
    }

    switch (type) {
      case 'bill':
        return (
          <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <circle cx="12" cy="13" r="2" />
            <path d="M12 17v2" />
          </svg>
        )

      case 'loan':
        return (
          <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 7c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2" />
            <rect x="4" y="7" width="16" height="10" rx="2" ry="2" />
            <path d="M8 11h8" />
            <path d="M8 15h8" />
          </svg>
        )

      case 'mamas':
        return (
          <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )

      case 'approvals':
        return (
          <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" />
          </svg>
        )

      case 'eye-slash':
        return (
          <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
            <circle cx="12" cy="12" r="3" />
            <path d="M2 2l20 20" />
          </svg>
        )

      case 'deposit':
        return (
          <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z" />
            <path d="M6 8V6a2 2 0 0 1 2-2h8" />
            <circle cx="15" cy="16" r="1" />
          </svg>
        )

      case 'share':
        return (
          <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
          </svg>
        )

      default:
        return null
    }
  }

  return (
    <div className="home-container">
      {/* ==================== HEADER SECTION ==================== */}
      <header className="header">
        <button className="header-btn back-btn" aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="header-content">
          <h1 className="logo">clinicPesa</h1>
          <h2 className="greeting-header">Good Morning, Robert</h2>
        </div>

        <button className="header-btn close-btn" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6l-12 12M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* ==================== MAIN CONTENT SECTION ==================== */}
      <main className="content">
        {/* ==================== SAVINGS CARD CAROUSEL ==================== */}
        <div className="carousel-container">
          <div className="savings-card">
            {/* Card type label - "Savings" */}
            <div className="card-label">Savings</div>

            {/* Balance section with label above amount */}
            <div className="balance-section">
              <p className="balance-label">Balance</p>
              
              <div className="balance-display">
                {/* Large balance amount in teal */}
                <h3 className="balance-amount">
                  {balanceVisible ? 'UGX 50,000' : '••••••'}
                </h3>

                {/* Eye icon on right */}
                <button
                  className="eye-icon"
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  aria-label={balanceVisible ? 'Hide balance' : 'Show balance'}
                >
                  <IconRenderer type="eye-slash" size={28} />
                </button>
              </div>
            </div>

            <div className="card-details">
              <div className="detail-row">
                <p className="detail-item">
                  <span className="label">Frequency:</span>
                  <span className="value">Monthly</span>
                </p>
                <p className="detail-item">
                  <span className="label">AutoSave amount:</span>
                  <span className="value">UGX 1,000</span>
                </p>
              </div>
            </div>

            {/* Action buttons - Deposit and Share Medical on same row */}
            <div className="card-actions">
              <button className="action-btn deposit-btn" aria-label="Deposit money">
                <IconRenderer type="deposit" size={24} />
                <span className="btn-text">Deposit</span>
              </button>
              <div className="divider"></div>
              <button className="action-btn share-btn" aria-label="Share medical information">
                <IconRenderer type="share" size={24} />
                <span className="btn-text">Share Medical</span>
              </button>
            </div>
          </div>

          {/* Carousel navigation dots */}
          <div className="carousel-dots">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                className={`dot ${activeSlide === dot ? 'active' : ''}`}
                onClick={() => setActiveSlide(dot)}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ==================== TABS NAVIGATION SECTION ==================== */}
        <div className="tabs">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              ACCOUNT OPTIONS
            </button>

            <button
              className={`tab-btn ${activeTab === 'invest' ? 'active' : ''}`}
              onClick={() => setActiveTab('invest')}
            >
              INVEST
            </button>

            <button
              className={`tab-btn ${activeTab === 'transactions' ? 'active' : ''}`}
              onClick={() => setActiveTab('transactions')}
            >
              TRANSACTIONS
            </button>
          </div>

          <div className="tab-underline"></div>
        </div>

        {/* ==================== ACCOUNT OPTIONS GRID ==================== */}
        <div className="options-grid">
          {accountOptions.map((option) => (
            <button
              key={option.id}
              className="option-card"
              aria-label={option.title}
            >
              <div className="card-icon">
                <IconRenderer type={option.icon} size={32} />
              </div>
              <p className="card-title">{option.title}</p>
            </button>
          ))}
        </div>
      </main>

      {/* ==================== FOOTER SECTION ==================== */}
      <footer className="footer">
        <p>
          clinicPesa <strong>T&Cs</strong> apply.
        </p>
      </footer>
    </div>
  )
}
