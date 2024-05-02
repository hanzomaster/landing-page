import { ToastProvider } from "@/components/Toast";
import HeadingText from "@/components/heading-text";
import OnboardingForm from "@/components/pages/onboarding-form";

export const metadata = {
  title: "Onboarding",
};

function Contact() {
  return (
   
    <main className="container flex h-[70vh] flex-col items-center justify-center gap-4 my-32">
      <HeadingText>Xác minh thông tin</HeadingText>
      <div>
        <OnboardingForm />
      </div>
    </main>
  );
}

export default Contact;
