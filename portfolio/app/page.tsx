// ./app/page.tsx

import Hero from "./components/Hero";

export default function HomePage() {
  // Return only the page-specific content, wrapped in a Fragment if needed
  return (
    <>
      <Hero />
      {/* Add other sections/components here later */}
      <section className="container mx-auto px-4 py-16 text-center bg-base-100">
        <h2 className="text-3xl font-bold mb-8">Projects Coming Soon!</h2>
        {/* You'll replace this with your actual ProjectList component */}
      </section>
      {/* Add more page-specific sections here */}
    </>
  );
}
