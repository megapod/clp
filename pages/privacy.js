
import Accordion from '../components/Accordion'
export default function Privacy() {
  const items = [
  {
    "title": "What data we collect",
    "content": "We store only anonymous usage metrics, purchase data handled by Payhip, and cookie-based analytics."
  },
  {
    "title": "How conversations are handled",
    "content": "Chats are processed via OpenAI API and are not stored on our servers; OpenAI may retain transient logs per its policy."
  },
  {
    "title": "Cookies",
    "content": "Essential cookies keep checkout secure; analytics cookies help us improve the product. You can disable non\u2011essential cookies via the banner."
  },
  {
    "title": "Your rights",
    "content": "Contact us to access or delete any personal data we may hold about you."
  }
];
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading mb-8">Privacy Policy</h1>
      <Accordion items={items} />
    </main>
  )
}
