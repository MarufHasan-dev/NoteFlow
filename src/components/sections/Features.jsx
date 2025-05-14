import smartOrganization from "../../assets/graphics/SmartOrganization.webp";
import contextualRemainder from "../../assets/graphics/ContextualReminders.webp";

export default function Features() {
  return (
    <section className="bg-primary-1500 overflow-hidden bg-[url(../src/assets/Noise.webp)] bg-repeat">
      <div className="relative text-primary-50 mx-auto max-w-[90rem] px-25 py-32">
        <div className="bg-primary-1200/50 absolute top-[50%] left-full h-[50rem] w-[50rem] -translate-[50%] rounded-full opacity-100 blur-[20rem]" />
        <h2 className="relative text-6xl/tight font-semibold tracking-tighter text-center mb-28">
          All The Tools You Need to{" "}
          <span className="text-primary-500 primary-glow">Supercharge</span>{" "}
          Your Note Taking
        </h2>

        <div className="relative grid grid-cols-2 items-center mb-20 gap-x-16">
          <figure>
            <img
              className="max-h-[45rem]"
              src={smartOrganization}
              alt="Smart Organization Iphone Graphic"
            />
          </figure>
          <div className="max-w-lg justify-self-end">
            <h3 className="text-5xl/14 tracking-tighter font-semibold mb-8">
              Smart Organization
            </h3>
            <p className="text-xl/loose font-light text-primary-100">
              Automatically categorize and tag your notes using AI-driven
              analysis. NoteFlow intelligently identifies key topics and
              organizes your content, making it easy to find and retrieve your
              notes when you need them most.
            </p>
          </div>
        </div>
        <div className="relative grid grid-cols-2 items-center gap-x-16">
          <div className="max-w-lg justify-self-start">
            <h3 className="text-5xl/14 tracking-tighter font-semibold mb-8">
              Contextual Reminders
            </h3>
            <p className="text-xl/loose font-light text-primary-100">
              Stay on top of important tasks with AI-powered reminders that
              adapt to the context of your notes. NoteFlow recognizes deadlines,
              follow-ups, and key actions from your notes and sends timely
              alerts to ensure nothing slips through the cracks.
            </p>
          </div>
          <figure>
            <img
              className="max-h-[45rem]"
              src={contextualRemainder}
              alt="Contextual Reminders Iphone Graphic"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
