import ContactForm from '../components/contact/ContactForm.jsx'
import ArrowUpRight from '../components/ui/ArrowUpRight.jsx'
import profile from '../data/profile.js'

export default function Contact() {
  return (
    <div className="py-12 md:py-14">
      <h1 className="hero-title">Contact</h1>
      <p className="mt-4 max-w-xl text-muted">
        For projects, opportunities or questions about my work, get in touch by email.
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
        <section aria-labelledby="contact-details-heading" className="md:col-span-5">
          <h2 id="contact-details-heading" className="text-2xl font-semibold tracking-tight">Contact details</h2>
          <p className="mt-5 text-sm text-muted">Email</p>
          <a href={`mailto:${profile.email}`} className="text-link break-all">{profile.email}</a>
          <p className="mt-5 text-sm text-muted">Code & projects</p>
          <a
            className="text-link"
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            GitHub <ArrowUpRight />
          </a>
          <p className="mt-6 text-sm text-muted">{profile.location}</p>
        </section>
        <section aria-labelledby="message-heading" className="border-t border-border pt-8 md:col-span-7 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <h2 id="message-heading" className="mb-3 text-2xl font-semibold tracking-tight">Write a message</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}
