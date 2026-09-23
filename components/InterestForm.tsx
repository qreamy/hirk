'use client'

import { FormEvent, useState } from 'react'

export default function InterestForm({ defaultType='1975-klubben' }: { defaultType?: string }){
  const [loading,setLoading]=useState(false)
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState('')

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    setLoading(true)
    setError('')

    const form=new FormData(e.currentTarget)
    const payload=Object.fromEntries(form.entries())
    const res=await fetch('/api/leads',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    })

    setLoading(false)
    if(res.ok) setSuccess(true)
    else setError((await res.json()).error || 'Något gick fel. Försök igen.')
  }

  if(success){
    return (
      <div className="success-state">
        <span className="success-mark" aria-hidden="true">✓</span>
        <h3>Tack för ert intresse.</h3>
        <p>Vi har tagit emot era uppgifter och återkommer så snart vi kan.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="interest-form">
      <div className="field">
        <label>Företagsnamn *</label>
        <input name="company_name" required autoComplete="organization" placeholder="Företag AB" />
      </div>

      <div className="field">
        <label>Organisationsnummer *</label>
        <input name="organization_number" required inputMode="numeric" placeholder="556000-0000" />
      </div>

      <div className="field">
        <label>Kontaktperson *</label>
        <input name="contact_name" required autoComplete="name" placeholder="För- och efternamn" />
      </div>

      <div className="field">
        <label>E-post *</label>
        <input name="email" type="email" required autoComplete="email" placeholder="namn@foretag.se" />
      </div>

      <div className="field">
        <label>Telefon *</label>
        <input name="phone" required autoComplete="tel" placeholder="070-000 00 00" />
      </div>

      <div className="field">
        <label>Partnerskap *</label>
        <select name="sponsorship_type" defaultValue={defaultType} required>
          {['1975-klubben','Brons','Silver','Guld','Platina','Vet inte ännu / vill veta mer'].map(x=><option key={x}>{x}</option>)}
        </select>
      </div>

      <input name="website_confirm" tabIndex={-1} autoComplete="off" className="hidden" />

      <label className="consent-row">
        <input type="checkbox" name="consent" required/>
        <span>Jag godkänner att Hittarps Ridklubb kontaktar mig angående partnerskap.</span>
      </label>

      {error && <p className="form-error">{error}</p>}

      <button className="submit-button" disabled={loading}>
        <span>{loading ? 'Skickar…' : 'Skicka intresseanmälan'}</span>
        {!loading && <span aria-hidden="true">→</span>}
      </button>
    </form>
  )
}
