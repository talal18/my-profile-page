import { contact } from "../../strings";

function ContactSection() {
  return (
    <div className="mb-6">
      <p className="text-lg font-semibold text-gray-700">{contact.cell}</p>
      <p className="text-lg font-semibold text-gray-700">{contact.email}</p>
      <p className="text-lg font-semibold text-gray-700">{contact.linkedIn}</p>
    </div>
  );
}

export default ContactSection;
