import { TwitterCard } from "./components/twitterCard";
import { content } from "./content/content.js";

function App() {
  return (
    <>
      <section className="w-full max-w-md bg-matisse-200 px-4 py-6 md:py-8 rounded-lg m-auto flex flex-col justify-center gap-4">
        {content.map((profile) => (
          <TwitterCard key={profile.id} profile={profile} />
        ))}
      </section>
    </>
  );
}

export default App;
