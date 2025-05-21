
import Accordion from '../components/Accordion'
export default function Terms() {
  const items = [
  {
    "title": "Purpose of the Service",
    "content": "Connection Lines offers an AI companion for emotional support only; it is not therapy."
  },
  {
    "title": "User Responsibilities",
    "content": "Do not rely on the AI for medical, legal, or financial decisions. In emergencies, contact professionals."
  },
  {
    "title": "License & Refunds",
    "content": "Purchasing grants a personal non\u2011transferable license. Resale is forbidden. Refund within 7 days if unsatisfied."
  },
  {
    "title": "Limitation of Liability",
    "content": "We are not liable for actions taken based on AI conversations."
  }
];
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading mb-8">Terms of Use</h1>
      <Accordion items={items} />
    </main>
  )
}
