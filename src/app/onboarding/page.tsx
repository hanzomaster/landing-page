import HeadingText from "@/components/heading-text";
import OnboardingForm from "@/components/pages/onboarding-form";

export const metadata = {
  title: "Onboarding",
};

function Contact() {
  return (
    <main className="container flex h-[70vh] flex-col items-center justify-center gap-4">
      <HeadingText>Onboarding</HeadingText>
      <div>
        <OnboardingForm />
      </div>
    </main>
  );
}

export default Contact;
