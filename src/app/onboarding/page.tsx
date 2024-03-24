import ContactForm from "@/components/pages/contact-form";
import HeadingText from "@/components/heading-text";

export const metadata = {
  title: "Onboarding",
};

function Contact() {
  return (
    <main className="container flex flex-col items-center py-8">
      <div className="flex flex-col items-center space-y-2 text-center">
        <HeadingText subtext="This is subtext">Onboarding</HeadingText>
      </div>
      <ContactForm />
    </main>
  );
}

export default Contact;
