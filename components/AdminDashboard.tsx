'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { SponsorLead, LeadStatus } from '@/lib/types'

const statusLabels: Record<LeadStatus, string> = {
  new: 'Ny',
  contacted: 'Kontaktad',
  meeting: 'Möte bokat',
  interested: 'Intresserad',
  won: 'Vunnen',
  lost: 'Förlorad',
}

const pipelineStatuses: LeadStatus[] = [
  'new',
  'contacted',
  'meeting',
  'interested',
  'won',
]

export default function AdminDashboard({
  leads,
}: {
  leads: SponsorLead[]
}) {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [partnership, setPartnership] = useState('')

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const search = `${lead.company_name} ${lead.contact_name} ${lead.email}`
        .toLowerCase()

      return (
        (!query || search.includes(query.toLowerCase())) &&
        (!status || lead.status === status) &&
        (!partnership || lead.sponsorship_type === partnership)
      )
    })
  }, [leads, query, status, partnership])

  const count = (status: LeadStatus) =>
    leads.filter((lead) => lead.status === status).length

  const statCards = [
    { label: 'Totalt', value: leads.length, description: 'Alla leads' },
    { label: 'Nya', value: count('new'), description: 'Ej kontaktade' },
    {
      label: 'Kontaktade',
      value: count('contacted'),
      description: 'Kontakt etablerad',
    },
    {
      label: 'Möten',
      value: count('meeting'),
      description: 'Möte bokat',
    },
    {
      label: 'Vunna',
      value: count('won'),
      description: 'Nya partners',
    },
  ]

  return (
    <main className="crm-page">
      <div className="crm-shell">

        <header className="crm-header">
          <div>
            <div className="crm-eyebrow">
              HITTARPS RIDKLUBB · ADMIN
            </div>

            <h1>Sponsor CRM</h1>

            <p>
              Hantera intresseanmälningar, kontakter och pågående
              sponsorsamarbeten.
            </p>
          </div>

          <Link href="/" className="crm-site-button">
            Visa webbplats
            <span>↗</span>
          </Link>
        </header>

        <section className="crm-stats">
          {statCards.map((item) => (
            <div className="crm-stat-card" key={item.label}>
              <span>{item.label}</span>

              <strong>{item.value}</strong>

              <small>{item.description}</small>
            </div>
          ))}
        </section>

        <section className="crm-leads-section">
          <div className="crm-section-heading">
            <div>
              <h2>Företag</h2>

              <p>
                {filteredLeads.length} av {leads.length} företag
              </p>
            </div>
          </div>

          <div className="crm-filters">
            <div className="crm-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Sök företag, kontaktperson eller e-post..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>

            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="">Alla statusar</option>

              {Object.entries(statusLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>

            <select
              value={partnership}
              onChange={(event) => setPartnership(event.target.value)}
            >
              <option value="">Alla partnerskap</option>
              <option value="1975-klubben">1975-klubben</option>
              <option value="Brons">Brons</option>
              <option value="Silver">Silver</option>
              <option value="Guld">Guld</option>
              <option value="Platina">Platina</option>
              <option value="Vet inte ännu / vill veta mer">
                Vill veta mer
              </option>
            </select>
          </div>

          <div className="crm-table-wrap">
            <table className="crm-table">
              <thead>
                <tr>
                  <th>Företag</th>
                  <th>Kontakt</th>
                  <th>Partnerskap</th>
                  <th>Kontaktuppgifter</th>
                  <th>Status</th>
                  <th>Datum</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <div className="crm-empty">
                        <div className="crm-empty-icon">+</div>

                        <strong>Inga företag här ännu</strong>

                        <span>
                          Nya intresseanmälningar kommer automatiskt att
                          visas här.
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td>
                        <div className="crm-company">
                          <div className="crm-company-avatar">
                            {lead.company_name
                              .substring(0, 1)
                              .toUpperCase()}
                          </div>

                          <div>
                            <strong>{lead.company_name}</strong>
                            <span>{lead.organization_number}</span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="crm-contact-name">
                          {lead.contact_name}
                        </div>
                      </td>

                      <td>{lead.sponsorship_type}</td>

                      <td>
                        <div className="crm-contact-details">
                          <span>{lead.email}</span>
                          <small>{lead.phone}</small>
                        </div>
                      </td>

                      <td>
                        <span
                          className={`crm-status crm-status-${lead.status}`}
                        >
                          <i />
                          {statusLabels[lead.status]}
                        </span>
                      </td>

                      <td>
                        {new Date(lead.created_at).toLocaleDateString(
                          'sv-SE'
                        )}
                      </td>

                      <td className="crm-action-cell">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="crm-open-button"
                        >
                          Öppna
                          <span>→</span>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="crm-pipeline-section">
          <div className="crm-section-heading">
            <div>
              <h2>Pipeline</h2>
              <p>Följ företagen genom sponsorprocessen.</p>
            </div>
          </div>

          <div className="crm-pipeline">
            {pipelineStatuses.map((pipelineStatus) => {
              const pipelineLeads = leads.filter(
                (lead) => lead.status === pipelineStatus
              )

              return (
                <div
                  className="crm-pipeline-column"
                  key={pipelineStatus}
                >
                  <div className="crm-pipeline-header">
                    <div>
                      <i
                        className={`crm-dot crm-dot-${pipelineStatus}`}
                      />
                      <strong>
                        {statusLabels[pipelineStatus]}
                      </strong>
                    </div>

                    <span>{pipelineLeads.length}</span>
                  </div>

                  <div className="crm-pipeline-content">
                    {pipelineLeads.length === 0 ? (
                      <div className="crm-pipeline-empty">
                        Inga företag
                      </div>
                    ) : (
                      pipelineLeads.slice(0, 8).map((lead) => (
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          key={lead.id}
                          className="crm-pipeline-card"
                        >
                          <strong>{lead.company_name}</strong>

                          <span>{lead.sponsorship_type}</span>

                          <small>
                            {new Date(
                              lead.created_at
                            ).toLocaleDateString('sv-SE')}
                          </small>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}