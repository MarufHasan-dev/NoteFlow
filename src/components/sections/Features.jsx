import smartOrganization from "../../assets/graphics/SmartOrganization.webp";
import contextualRemainder from "../../assets/graphics/ContextualReminders.webp";

export default function Features() {
  return (
    <section className="bg-primary-1500 overflow-hidden bg-[url(../src/assets/Noise.webp)] bg-repeat">
      <div className="relative text-primary-50 mx-auto max-w-[90rem] px-25 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <div className="bg-primary-1200/50 absolute top-[50%] left-full h-[50rem] w-[50rem] max-lg:h-[30rem] max-lg:bg-primary-1200 max-lg:w-[30rem] -translate-[50%] rounded-full opacity-100 blur-[20rem]" />
        <h2 className="relative text-6xl/tight font-semibold  tracking-tighter text-center mb-28 max-xl:text-5xl/tight max-xl:mb-18 max-lg:text-4xl/10 max-lg:tracking-tight">
          All The Tools You Need to{" "}
          <span className="text-primary-500 primary-glow">Supercharge</span>{" "}
          Your Note Taking
        </h2>

        <div className="relative grid grid-cols-2 items-center mb-20 gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10">
          <figure>
            <img
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              src={smartOrganization}
              alt="Smart Organization Iphone Graphic"
            />
          </figure>
          <div className="max-w-lg justify-self-end max-md:row-start-1 max-md:max-w-max">
            <h3 className="text-5xl/14 tracking-tighter font-semibold mb-8 max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12">
              Smart Organization
            </h3>
            <p className="text-xl/loose font-light text-primary-100 max-xl:text-lg/8 max-lg:text-base/loose">
              Automatically categorize and tag your notes using AI-driven
              analysis. NoteFlow intelligently identifies key topics and
              organizes your content, making it easy to find and retrieve your
              notes when you need them most.
            </p>
          </div>
        </div>
        <div className="relative grid grid-cols-2 items-center gap-x-16 max-md:grid-cols-1 max-md:gap-y-10">
          <div className="max-w-lg justify-self-start max-md:max-w-max">
            <h3 className="text-5xl/14 tracking-tighter font-semibold mb-8 max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12">
              Contextual Reminders
            </h3>
            <p className="text-xl/loose font-light text-primary-100 max-xl:text-lg/8 max-lg:text-base/loose">
              Stay on top of important tasks with AI-powered reminders that
              adapt to the context of your notes. NoteFlow recognizes deadlines,
              follow-ups, and key actions from your notes and sends timely
              alerts to ensure nothing slips through the cracks.
            </p>
          </div>
          <figure>
            <img
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              src={contextualRemainder}
              alt="Contextual Reminders Iphone Graphic"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
