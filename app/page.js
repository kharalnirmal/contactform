import ContactForm from "@/components/ContactForm";

export default async function Home() {
  return (
    <main className="px-4 py-12 min-h-screen">
      <div className="mx-auto container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl">Server actions Demo</h1>
          <p className="mx-auto text-gray-600 text-xl max-2xl">
            Contact form with MongoDb and revalidation
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
