
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-24 w-full animate-[fadeIn_0.5s_ease-out]">

      {/* Intro Section */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-start relative mb-32">
        {/* Text Content (Wider) - 2nd on mobile, 1st on desktop */}
        <div className="md:col-span-2 relative pt-4 order-2 md:order-1">
          <div className="relative mb-8">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <h1 className="relative font-heading text-5xl md:text-6xl font-extrabold text-ink mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Tran Le</span>!
            </h1>
            <p className="text-xl md:text-2xl text-ink-light font-bold leading-relaxed max-w-lg">
              I’m from Saigon, Vietnam. I’m a junior double-majoring in Information Science and Psychology, with interests in HCI, cognitive science, and human-centered design.            </p>
          </div>

          <div className="space-y-6 text-lg text-ink-light leading-relaxed">
            <p>
              My work focuses on how technology can augment human experience, especially around accessibility, inclusivity, social interaction, and social computing. I care deeply about the human side of systems: how people think, communicate, and engage with technology in realistic contexts, and how design can better support diverse users. This interdisciplinary perspective now guides how I approach my work, balancing technical feasibility with cognitive, social, and ethical considerations.
            </p>
            <p>
              A fun fact about me is that my name, Tran, partly comes from the Vietnamese word for “value,” a principle my parents emphasized and one I’ve grown up living by. With limited exposure to computing and psychology in my early education, I learned to value both my constraints and the opportunities I can find, motivating me to proactively seek experiences and fully invest in my interests and growth. I also deeply value the relationships and interactions that have shaped my path, from my parents and teachers to mentors, labmates, and the communities I’ve worked with, all of whom have strengthened my sense of empathy, responsibility, and care in the work I do.
            </p>
          </div>
        </div>

        {/* Image (Narrower) - 1st on mobile, 2nd on desktop */}
        <div className="md:col-span-1 relative md:mt-2 md:sticky md:top-32 order-1 md:order-2 mb-8 md:mb-0">
          <div className="absolute inset-0 bg-ink rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
          <div className="relative bg-primary-light rounded-[2.5rem] overflow-hidden border-2 border-slate-100 aspect-square md:aspect-[3/4]">
            <picture>
              <source media="(min-width: 768px)" srcSet={`${import.meta.env.BASE_URL}images/portrait.JPG`} />
              <img
                src={`${import.meta.env.BASE_URL}images/portrait-square.jpg`}
                alt="Tran Le"
                className="w-full h-full object-cover opacity-90"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Currently on Campus Section */}
      <div className="space-y-24">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary/90 italic">
          Currently on Campus:
        </h2>

        {/* Activity 1: WICC */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl text-ink font-heading font-bold leading-tight">
              Women in Computing at Cornell <span className="font-sans font-normal text-ink-light text-xl block sm:inline sm:ml-2"> - Faculty Relations Director</span>
            </h3>
            <p className="text-lg text-ink-light font-medium leading-relaxed max-w-4xl">
              Fostering an inclusive community for women and gender minorities in tech. I organize the Lunch Bunch program, facilitating weekly roundtable discussions that connect underclassmen with faculty and encourage early research engagement. I engage with many accomplished HCI researchers and learn about their work through this initiative! I also represent WICC and the student body in faculty board meetings to discuss coursework, advising, workload, and departmental improvements.            
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {/* Row 1: 2 Photos */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-64 md:h-80">
              {[`${import.meta.env.BASE_URL}images/wicc-prof-abe-davis.JPG`, `${import.meta.env.BASE_URL}images/wicc-prof-andrea-won.JPG`].map((src, i) => (
                <div key={i} className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-sm">
                  <img
                    src={src}
                    alt={`WICC Activity ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x600/e2e8f0/475569?text=WICC+${i + 1}`;
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Row 1: 2 Photos */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-64 md:h-80">
              {[`${import.meta.env.BASE_URL}images/wicc-org.JPEG`, `${import.meta.env.BASE_URL}images/wicc-clubfest.jpg`].map((src, i) => (
                <div key={i} className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-sm">
                  <img
                    src={src}
                    alt={`WICC Activity ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x600/e2e8f0/475569?text=WICC+${i + 1}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity 2: CCT Lab */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl text-ink font-heading font-bold leading-tight">
              Communication and Collaborative Technologies Lab <span className="font-sans font-normal text-ink-light text-xl block sm:inline sm:ml-2"> - Research Assistant</span>
            </h3>
            <p className="text-lg text-ink-light font-medium leading-relaxed max-w-4xl">
              Working on the XPLAIN project. Here's a pic of our lab outing!
            </p>
          </div>

          <div className="w-full aspect-video bg-slate-100 rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}images/cct-lab-outing.jpg`}
              alt="CCT Lab Outing"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/1200x600/e2e8f0/475569?text=CCT+Lab+Outing`;
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
