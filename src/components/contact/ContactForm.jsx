import { useState } from 'react'
import profile from '../../data/profile.js'

export default function ContactForm() {
  const [errors, setErrors] = useState({})
  const [draftUrl, setDraftUrl] = useState('')
  const hasErrors = Object.values(errors).some(Boolean)

  function handleChange(event) {
    const { name } = event.target
    if (errors[name]) setErrors(previous => ({ ...previous, [name]: undefined }))
    if (draftUrl) setDraftUrl('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = data.get('name').trim()
    const email = data.get('email').trim()
    const message = data.get('message').trim()
    const formErrors = {}

    if (!name) formErrors.name = 'Enter your name.'
    if (!email) {
      formErrors.email = 'Enter your email address.'
    } else if (form.elements.namedItem('email').validity.typeMismatch) {
      formErrors.email = 'Enter a valid email address.'
    }
    if (!message) formErrors.message = 'Write a message.'

    setErrors(formErrors)
    setDraftUrl('')
    const firstError = Object.keys(formErrors)[0]
    if (firstError) {
      // Focus after the error descriptions have been rendered.
      requestAnimationFrame(() => form.elements.namedItem(firstError).focus())
      return
    }

    const subject = `Portfolio enquiry from ${name}`
    const body = `Name: ${name}\r\nEmail: ${email}\r\n\r\n${message.replace(/\r?\n/g, '\r\n')}`
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setDraftUrl(url)
    requestAnimationFrame(() => form.querySelector('a[href^="mailto:"]').focus())
  }

  return (
    <form noValidate onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="message-heading" aria-describedby="contact-method">
      <p className="mb-6 text-sm text-muted">All fields are required.</p>
      {hasErrors && <p role="alert" className="mb-4 text-sm text-error">Please check the highlighted fields.</p>}

      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="form-control"
          />
          {errors.name && <p id="name-error" className="mt-2 text-sm text-error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="form-control"
          />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={2000}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-help message-error' : 'message-help'}
            className="form-control resize-y"
          />
          <p id="message-help" className="mt-2 text-sm text-muted">Up to 2,000 characters.</p>
          {errors.message && <p id="message-error" className="mt-2 text-sm text-error">{errors.message}</p>}
        </div>
      </div>

      {draftUrl ? (
        <a href={draftUrl} className="button-primary mt-6">Open email draft</a>
      ) : (
        <button type="submit" className="button-primary mt-6 cursor-pointer">Prepare email draft</button>
      )}
      <p id="contact-method" className="mt-3 text-sm text-muted">
        Prepare a draft, then open it in your email app to review and send.
        You can also copy the email address into your webmail.
      </p>
      {draftUrl && (
        <p role="status" className="mt-4 text-sm text-muted">Draft prepared. Open it in your email app to review and send.</p>
      )}
    </form>
  )
}
