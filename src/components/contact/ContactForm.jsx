import { useState } from 'react'
import profile from '../../data/profile.js'

export default function ContactForm() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const hasErrors = Object.values(errors).some(Boolean)
  const isSending = status === 'sending'

  function handleChange(event) {
    const { name } = event.target
    if (errors[name]) setErrors(previous => ({ ...previous, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSending) return
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
    setStatus('idle')
    const firstError = Object.keys(formErrors)[0]
    if (firstError) {
      // Focus after the error descriptions have been rendered.
      requestAnimationFrame(() => form.elements.namedItem(firstError).focus())
      return
    }

    data.set('name', name)
    data.set('email', email)
    data.set('message', message)
    setStatus('sending')

    try {
      const response = await fetch(profile.contactEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
        signal: AbortSignal.timeout(15000),
      })
      const result = await response.json()
      if (!response.ok || (result.ok !== true && typeof result.next !== 'string')) {
        setStatus('error')
        return
      }
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      action={profile.contactEndpoint}
      method="POST"
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
      aria-labelledby="message-heading"
      aria-describedby="contact-method"
    >
      <p className="mb-6 text-sm text-muted">All fields are required.</p>
      {hasErrors && <p role="alert" className="mb-4 text-sm text-error">Please check the highlighted fields.</p>}

      <input type="hidden" name="_subject" value="Portfolio contact" />
      <input type="text" name="_gotcha" autoComplete="off" tabIndex={-1} aria-hidden="true" className="hidden" />
      <fieldset disabled={isSending} className="space-y-5 disabled:opacity-70">
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
      </fieldset>

      <button type="submit" disabled={isSending} className="button-primary mt-6 cursor-pointer disabled:cursor-wait disabled:opacity-70">
        {isSending ? 'Sending…' : 'Send message'}
      </button>
      <p id="contact-method" className="mt-3 text-sm text-muted">
        I’ll reply to the email address you provide.
      </p>
      <p role="status" aria-atomic="true" className="mt-4 text-sm text-muted">
        {isSending && 'Sending your message…'}
        {status === 'success' && 'Thanks, your message has been sent.'}
      </p>
      {status === 'error' && (
        <p role="alert" className="mt-4 text-sm text-error">
          We couldn’t confirm your message was sent. Your text is still here; try again or{' '}
          <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>email me directly</a>.
        </p>
      )}
    </form>
  )
}
