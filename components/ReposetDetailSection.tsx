
import React, { useState, useRef } from 'react';
import {
  Calendar,
  Search,
  PenTool,
  MessageSquare,
  Camera,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Eye,
  Shirt,
  Sparkles,
  Play
} from 'lucide-react';

// --- Components ---

// Container for Mobile-Sized Video (No Frame, click to play)
interface MobileVideoContainerProps {
  src?: string;
  label?: string;
}

const MobileVideoContainer: React.FC<MobileVideoContainerProps> = ({ src, label }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="w-[280px] md:w-[300px] aspect-[9/16] bg-stone-100 rounded-3xl overflow-hidden relative shrink-0 mx-auto shadow-xl cursor-pointer group"
      onClick={togglePlay}
    >
      {src ? (
        <>
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-stone-800 ml-1 fill-stone-800" />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-200">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Play className="w-6 h-6 text-stone-500" />
            </div>
            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">{label || "Video Demo"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Feature Row Component (Side-by-Side)
interface FeatureRowProps {
  number: string;
  icon?: React.ElementType;
  title: string;
  why?: React.ReactNode;
  how?: React.ReactNode;
  videoSrc?: string;
  videoLabel?: string;
  // For comparison features
  hasComparison?: boolean;
  beforeText?: string;
  afterText?: string;
  beforeVideoSrc?: string;
  afterVideoSrc?: string;
  iterationTitle?: string;
  iterationNote?: string;
  hideWhyHow?: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
  number,
  icon: Icon,
  title,
  why,
  how,
  videoSrc,
  videoLabel,
  hasComparison = false,
  beforeText,
  afterText,
  beforeVideoSrc,
  afterVideoSrc,
  iterationTitle,
  iterationNote,
  hideWhyHow = false
}) => {
  // State for comparison toggle
  const [view, setView] = useState<'before' | 'after'>('before');

  return (
    <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 lg:gap-24">

      {/* Content Side (Left) */}
      <div className="flex-1 space-y-8 pt-4 min-w-0">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center shrink-0 border-[4px] border-white shadow-lg text-white font-black text-xl">
            {number}
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-black text-amber-900 leading-tight">
            {title}
          </h3>
        </div>

        {/* Independent Iteration Note (for features without comparison) - MOVED ABOVE WHY/HOW */}
        {!hasComparison && iterationNote && (
          <div className="space-y-4 animate-[fadeIn_0.3s_ease-out]">
            <div className="p-3 border-l-4 border-orange-400 bg-orange-50 rounded-r-xl inline-block">
              <p className="font-bold text-orange-900 text-sm">{iterationNote}</p>
            </div>
          </div>
        )}

        {/* Why & How Box */}
        {!hideWhyHow && why && how && (
          <div className="bg-yellow-50 p-8 rounded-[2rem] border-4 border-yellow-100">
            <div className="space-y-6 text-base text-stone-600 leading-relaxed">
              <div>
                <span className="font-heading font-black text-amber-900 text-xl block mb-2 uppercase tracking-wide">Why</span>
                {typeof why === 'string' ? <p>{why}</p> : why}
              </div>
              <div>
                <span className="font-heading font-black text-amber-900 text-xl block mb-2 uppercase tracking-wide">How</span>
                {typeof how === 'string' ? <p>{how}</p> : how}
              </div>
            </div>
          </div>
        )}

        {/* Comparison Text (If applicable) */}
        {hasComparison && (
          <div className="space-y-4 animate-[fadeIn_0.3s_ease-out]">
            {iterationNote && (
              <div className="p-3 border-l-4 border-orange-400 bg-orange-50 rounded-r-xl inline-block">
                <p className="font-bold text-orange-900 text-sm">{iterationNote}</p>
              </div>
            )}
            {iterationTitle && <h4 className="font-heading font-black text-xl text-stone-800">{iterationTitle}</h4>}
            <div className="text-stone-600 text-base font-medium leading-relaxed bg-white p-8 rounded-[2rem] border-4 border-stone-100 shadow-sm relative overflow-hidden transition-all duration-300">
              <div className={`absolute top-0 left-0 px-4 py-2 rounded-br-2xl text-xs font-black uppercase tracking-widest ${view === 'before' ? 'bg-stone-200 text-stone-600' : 'bg-green-100 text-green-700'}`}>
                {view === 'before' ? 'Previous Design' : 'Iterated Design'}
              </div>
              <div className="mt-6">
                {view === 'before' ? beforeText : afterText}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Visual Side (Right) - Sticky on Desktop */}
      <div className="w-full md:w-auto flex flex-col items-center md:sticky md:top-32 self-start">
        {!hasComparison ? (
          <MobileVideoContainer src={videoSrc} label={videoLabel} />
        ) : (
          <div className="relative group flex flex-col items-center gap-6">
            {/* Badge Outside Video */}
            <div className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm transition-colors ${view === 'before' ? 'bg-stone-200 text-stone-600' : 'bg-green-100 text-green-700'}`}>
              {view === 'before' ? 'Before' : 'After'}
            </div>

            <div className="relative">
              {/* Video Container changes based on view */}
              {/* We key the component to force reset of video state on view change */}
              <MobileVideoContainer
                key={view}
                src={view === 'before' ? beforeVideoSrc : afterVideoSrc}
                label={view === 'before' ? 'Before' : 'After'}
              />

              {/* Toggle Arrows Floating on Sides */}
              {view === 'before' && (
                <button
                  onClick={() => setView('after')}
                  className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-500 hover:scale-110 transition-transform z-20 border-2 border-amber-100"
                  aria-label="View After"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              )}
              {view === 'after' && (
                <button
                  onClick={() => setView('before')}
                  className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-500 hover:scale-110 transition-transform z-20 border-2 border-amber-100"
                  aria-label="View Before"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};


const ReposetDetailSection: React.FC = () => {
  return (
    <div className="space-y-28 animate-[fadeIn_0.5s_ease-out] font-sans">

      {/* --- USER RESEARCH & INSIGHTS --- */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-orange-400" />
          <h2 className="text-3xl font-heading font-black text-amber-900">User Research</h2>
        </div>

        <p className="text-xl text-stone-600 font-medium max-w-4xl">
          I conducted <span className="text-ink font-bold">contextual interviews</span> with Cornell students in dorm rooms and apartments, combining semi-structured interviews, closet tours, and “show & tell” of tools they currently use for outfit planning and wardrobe management.
        </p>

        {/* Key Insights Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Calendar,
              title: "Context-Driven",
              desc: "Students use Google Calendar, Scheduler, and the Weather app to plan outfits around their schedules and Cornell’s unpredictable weather and indoor temps."
            },
            {
              icon: Sparkles,
              title: "Creativity",
              desc: "Students express creativity through their wardrobe through small styling choices rather than large changes."
            },
            {
              icon: Shirt,
              title: "Motivation",
              desc: "Students want to rewear more of their wardrobe but lack the motivation to move beyond convenient, familiar pieces."
            },
            {
              icon: Eye,
              title: "Visibility",
              desc: "Students overlook clothes hidden in piles, corners, and drawers, and searching them in a cluttered closet takes too much time."
            }
          ].map((insight, i) => (
            <div key={i} className="bg-orange-400 text-white p-6 md:p-8 rounded-[2rem] shadow-md hover:-translate-y-1 transition-transform relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 bg-white/10 w-24 h-24 rounded-full group-hover:scale-110 transition-transform"></div>
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="bg-white/20 p-2 rounded-xl">
                  <insight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-xl">{insight.title}</h4>
              </div>
              <p className="text-base font-bold opacity-90 leading-relaxed relative z-10">{insight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROBLEM STATEMENT (With Bear) --- */}
      <section className="max-w-5xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:items-end gap-6 relative">

        {/* Bear Image Placeholder */}
        <div className="w-48 shrink-0 relative z-10">
          <img src={`${import.meta.env.BASE_URL}images/bear-mascot.png`} alt="Bear Mascot" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Speech Bubble */}
        <div className="bg-white border-4 border-yellow-100 p-8 md:p-10 rounded-[3rem] rounded-bl-none shadow-xl relative flex-1 mb-0 md:mb-8 w-full md:w-auto">
          <div className="absolute top-0 left-0 bg-orange-400 text-white text-xs font-black px-4 py-1.5 rounded-br-2xl rounded-tl-[2.5rem] uppercase tracking-widest">
            Problem Statement
          </div>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed mt-4">
            Cornell students who care about reusability & personal style <span className="text-ink font-bold">need to</span> express individuality through subtle, low-effort restyling of what they already own for different events & contexts <span className="text-ink font-bold">because</span> limited time, space, & closet visibility make it hard to dress intentionally & creatively without overconsuming.
          </p>
        </div>
      </section>

      {/* --- SOLUTION SPACE --- */}
      <section className="max-w-6xl mx-auto px-4">
        <h3 className="font-heading font-black text-3xl text-amber-900 mb-8 flex items-center gap-3">
          <Search className="w-8 h-8 text-orange-400" />
          Solution Space Exploration
        </h3>

        {/* Rounded Table-like Structure */}
        <div className="bg-white border-4 border-yellow-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Headers - Hidden on mobile */}
            <div className="hidden md:block bg-yellow-50 p-6 font-black text-amber-900/50 uppercase text-xs tracking-wider border-r border-yellow-100">
              Where existing systems fall short
            </div>
            <div className="hidden md:block bg-orange-100 p-6 font-black text-orange-600 uppercase text-xs tracking-wider border-yellow-100">
              Design Opportunity
            </div>

            {/* Rows */}
            {[
              {
                problem: "Heavy upfront manual setup",
                detail: "Items that are not photographed and cataloged never appear in recommendations.",
                opp: "Explore lightweight, flexible update flows that reduce the burden of initial setup and allow wardrobes to be built up gradually over time."
              },
              {
                problem: "Little support for wardrobe change over time",
                detail: "Current apps don't occasionally prompt updates.",
                opp: "Support lightweight, context-aware wardrobe updates that lower the barrier to upkeep by prompting users only when it makes sense and allowing flexibility in how updates happen over time."
              },
              {
                problem: "Weak connection between digital suggestions and physical closets",
                detail: "Users still waste time searching through cluttered drawers or racks to act on recommendations.",
                opp: "Bridge digital planning and physical action by helping users locate and act on suggested items more efficiently."
              },
              {
                problem: "Poor adaptation to local micro-contexts",
                detail: "Generic weather checks ignore weather fluctuations, building temperature differences, and schedule transitions common at Cornell.",
                opp: "Design for fine-grained, place-specific context so outfit guidance reflects real daily conditions, not just general forecasts."
              },
              {
                problem: "Little ongoing motivation to reuse clothing",
                detail: "While apps may surface rarely worn pieces, they don’t necessarily encourage users to actually choose them over familiar, convenient, or favorite options.",
                opp: "Reinforce reuse through gentle feedback and rewards that make rotation feel motivating rather than effortful."
              }
            ].map((row, i, arr) => (
              <React.Fragment key={i}>
                <div className={`p-8 bg-white md:border-r border-yellow-100 text-stone-600 border-b border-yellow-100`}>
                  {/* Mobile Header 1 */}
                  <div className="md:hidden font-black text-amber-900/50 uppercase text-xs tracking-wider mb-2">
                    Where existing systems fall short
                  </div>
                  <span className="font-black text-amber-900 block mb-2 text-lg">{row.problem}</span>
                  {row.detail}
                </div>
                <div className={`p-8 bg-white text-stone-600 ${i !== arr.length - 1 ? 'border-b border-yellow-100' : ''}`}>
                   {/* Mobile Header 2 */}
                   <div className="md:hidden font-black text-orange-600 uppercase text-xs tracking-wider mb-2">
                    Design Opportunity
                  </div>
                  {row.opp}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* --- IDEATION --- */}
      <section className="max-w-6xl mx-auto px-4">
        <h3 className="font-heading font-black text-3xl text-amber-900 mb-6 flex items-center gap-3">
          <PenTool className="w-8 h-8 text-orange-400" />
          Ideation & Concept Development
        </h3>
        <p className="text-stone-600 text-lg mb-8">I explored multiple directions through sketching and collaborative ideation.</p>

        {/* Brainstorming Grid */}
        <div className="mb-12">
          <h4 className="font-bold text-stone-500 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Camera className="w-4 h-4" /> Design Brainstorming Grid
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-rectangle bg-stone-100 rounded-2xl border-2 border-stone-200 overflow-hidden group">
                <img
                  src={`${import.meta.env.BASE_URL}images/sketch${i}.png`}
                  alt={`Sketch ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ideation Session Stack */}
        <div>
          <h4 className="font-bold text-stone-500 uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Camera className="w-4 h-4" /> Ideation Session Grid
          </h4>
          <div className="flex flex-col gap-6">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-full h-full bg-stone-100 rounded-2xl border-2 border-stone-200 overflow-hidden group">
                <img
                  src={`${import.meta.env.BASE_URL}images/ideation${i}.png`}
                  alt={`Ideation Session ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOLUTION & FEATURES --- */}
      <section className="max-w-6xl mx-auto px-4 space-y-24">

        <div className="text-center">
          <div className="inline-block bg-green-100 text-green-700 font-black px-4 py-1 rounded-full mb-4">Final Solution</div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-amber-900 mb-6">Reposet</h2>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Reposet combines context-aware outfit planning, physical–digital closet visibility, and a lightweight reward system to support intentional dressing.
          </p>
        </div>

        {/* Feature 1: Context-Aware */}
        <FeatureRow
          number="1"
          title="Context-Aware Outfit Planning"
          why="Students are often short on time and default to familiar outfits. Also, at places like Cornell, where weather, building temperatures, and schedules can shift dramatically within a single day, usual quick choices can leave students unprepared for later contexts."
          how={
            <ul className="list-disc pl-5 space-y-2">
              <li>Each morning, Reposet generates three outfit options using schedule, location, and day-long weather changes (assumingly integrating Google Calendar, university schedules, and weather data).</li>
              <li>Two options prioritize underused pieces, while another includes a recently worn item to preserve user autonomy for personal, emotional, or comfort-based choices.</li>
            </ul>
          }
          videoSrc={`${import.meta.env.BASE_URL}/videos/context-aware-outfit-planning.mp4`}
          videoLabel="Outfit Planning"
        />

        {/* Feature 2: Digital Closet Map */}
        <FeatureRow
          number="2"
          title="Real-Time Digital Closet Map"
          why="Existing apps can suggest outfits, but users still waste time hunting through cluttered drawers or racks, especially when items tend to be underused as they are out of sight."
          how={
            <ul className="list-disc pl-5 space-y-2">
              <li>Once an outfit is finalized, the app activates cameras embedded along different sides of the closet to update a real-time digital map.</li>
              <li>On the phone, each chosen item glows or pulses to help users locate it quickly.</li>
              <li>For pieces hidden in piles that can’t be shown directly on a 2D map, small arrows & annotations point them out.</li>
            </ul>
          }
          videoSrc={`${import.meta.env.BASE_URL}/videos/digital-map.mp4`}
          videoLabel="Map Localization"
        />

        {/* Feature 3: Packing List (Comparison) */}
        <FeatureRow
          number="3"
          title="Packing List & Adaptive Reminders"
          why="Students already check their calendar and the weather, but it’s hard to account for everything a full day brings. Our users said an outfit that works in the morning still often leaves them wishing they’d packed an extra layer or a different item later."
          how={
            <ul className="list-disc pl-5 space-y-2">
              <li>After choosing an outfit, users see a packing list, each with a brief reason.</li>
              <li>Reposet sends adaptive reminders before key transitions.</li>
              <li>As packing extras can add weight, bulk, or affect how an outfit looks, a quick feedback form captures these trade-offs. This helps the system learn what actually felt worth bringing and refine future packing lists and reminders.</li>
            </ul>
          }
          hasComparison={true}
          iterationNote="Iteration from heuristic evaluation & usability testing"
          iterationTitle="Packing Checklist & Feedback Flow Redesign"
          beforeText="The packing checklist removed items immediately when tapped, making slips easy to miss and hard to correct. The feedback form then presented many detailed text options at once, forcing users to read extensively, map issues to specific items, and sometimes type custom responses."
          afterText="In the checklist, items can be checked and unchecked and are only confirmed with a clear “Finish packing” action. For feedback, users tap the specific packed item visually, then choose from a short, item-specific issue list, reducing reading and decision load."
          beforeVideoSrc={`${import.meta.env.BASE_URL}/videos/packing1.mp4`}
          afterVideoSrc={`${import.meta.env.BASE_URL}/videos/packing2.mp4`}
        />

        {/* Feature 4: Outfit Photo Check-In, Bear Companion & Rotation Tracking */}
        <FeatureRow
          number="4"
          title="Outfit Photo Check-In, Bear Companion & Rotation Tracking"
          why="Suggestions alone don’t change habits. Without confirming what’s actually worn, students can still default to favorites/conveniences and rotation tracking can become inaccurate and unmotivating."
          how={
            <ul className="list-disc pl-5 space-y-2">
              <li>While it adds a small step, this check-in helps determine which item is already worn today and enables behavioral reinforcement for outfit rotation. </li>
              <li>After getting dressed, users take a quick mirror photo to log what they wore.</li>
              <li>The bear responds immediately: using not recently worn items raises the battery and earns rotation points, while repeats or skipping check-in lower them. If the battery drops too low, personalized suggestions pause until an underused item is restyled.</li>
            </ul>
          }
          videoSrc={`${import.meta.env.BASE_URL}/videos/checkin-with-bear.mp4`}
          videoLabel="Check-In Flow"
        />

        {/* Feature 5: Wardrobe Updates (Comparison) */}
        <FeatureRow
          number="5"
          title="Quick Wardrobe Updates"
          why="Wardrobes change, and unseen items (new purchases or buried pieces) can never be suggested if the system doesn’t learn them."
          how={
            <ul className="list-disc pl-5 space-y-2">
              <li>Reposet prompts wardrobe updates only when needed (e.g., most known items are on repeat, the wardrobe passes a size threshold, or during a monthly check-in).</li>
              <li>Users can quickly photograph additional items laid flat, guided by upcoming seasons and schedules, or skip if nothing new needs adding.</li>
              <li>Photos are used as closet cameras can’t reliably capture details like silhouette, texture, and length needed for outfit pairing.</li>
            </ul>
          }
          hasComparison={true}
          iterationNote="Iteration from heuristic evaluation & usability testing"
          iterationTitle="Bulk vs. Single Upload"
          beforeText="Update prompts forced users into updating without a clear way to postpone. Wardrobe updates relied on a rigid, bulk upload flow. While some users appreciated the efficiency of capturing many items together, others found it quite effortful as it requires space, time, and taking out a portion of their closet. Instructional screens repeated every time, not suitable for advanced users. Example category cards looked clickable but weren’t."
          afterText="Update prompts allow postponement. Supports both single-item quick adds and bulk uploads, with multiple photos in either path. Instructions can be skipped by returning users. Example categories no longer appear clickable."
          beforeVideoSrc={`${import.meta.env.BASE_URL}/videos/update1.mp4`}
          afterVideoSrc={`${import.meta.env.BASE_URL}/videos/update2.mp4`}
        />

        {/* Feature 6: Rotation Points & Reward System */}
        <FeatureRow
          number="6"
          title="Rotation Points & Reward System"
          why="Usability testing revealed that users didn’t clearly understand what rotation points meant, why they mattered, or what accumulating them led to, although it’s a core concept of the app for motivation. Several assumed points should be redeemable as familiar apps with points do that, so users suggested the redemption system could be developed."
          how={
            <ul className="list-disc pl-5 space-y-2">
              <li>Reframed rotation points as a behavioral progress signal rather than an abstract score.</li>
              <li>Added a help & documentation page explaining that points reward rotating items and linking them to real-world impact (e.g., money saved through reduced purchasing).</li>
              <li>Introduced a “Recently Rotated Items” page to make progress more tangible by showing which clothes have been mixed and matched again.</li>
              <li>Added a clear redemption feature where points can be spent on bear customization (e.g., accessories), leveraging users’ emotional attachment to the mascot for motivation.</li>

            </ul>
          }
          iterationNote="New feature from usability testing"
          videoSrc={`${import.meta.env.BASE_URL}/videos/rotation-reward.mp4`}
          videoLabel="Rotation Points & Reward System"
        />
      </section>

      {/* --- SHOWCASE VIDEO (Not Auto-play, Upright) --- */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h3 className="font-heading font-black text-4xl md:text-5xl text-amber-900 mb-6 text-center">Project Showcase</h3>
        <div className="bg-amber-900 rounded-[3rem] p-4 md:p-6 shadow-2xl">
          <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-video relative group">
            {/* Actual Video */}
            <video
              src={`${import.meta.env.BASE_URL}/videos/reposet-showcase.mp4`}
              className="w-full h-full object-cover"
              controls
            />
          </div>
        </div>
      </section>

      {/* --- OUTCOMES --- */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-green-50 border-4 border-green-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
          <h4 className="text-2xl font-heading font-black text-green-900 mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-600" /> Key Outcomes & User Feedback
          </h4>

          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Morning outfit decisions felt faster and clearer", text: "Participants described the home screen with the schedule as 'very explicit' and found it easier to choose an outfit when schedule, weather, and suggestions were unified." },
              { title: "Explanations increased confidence", text: "Seeing why an outfit was suggested—based on calendar events, weather shifts, and rotation—helped participants feel confident in their choice." },
              { title: "Packing list reduced last-minute stress", text: "The visual packing list helped the participant anticipate later needs they usually overlook, such as extra layers." },
              { title: "Digital closet map surfaced hidden items", text: "Participants linked clothing underuse directly to visibility. Location cues given by the digital closet map made finding items faster." },
              { title: "Rotation framing aligned with values", text: "Being reminded of items already owned helped prevent unnecessary purchases, supporting participants’ desire to rotate clothes." },
              { title: "Outfit photo check-in felt intuitive", text: "Logging an outfit via photo was compared to familiar verification flows. Participants said the steps felt 'very straightforward'." },
              { title: "Rewards and mascot increased motivation", text: "Earning rotation points and seeing the bear’s reactions made progress feel meaningful and encouraging." },
              { title: "Overall experience felt realistic", text: "Participants described the app as 'easy, straightforward,' and something they would realistically use." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-4 text-green-900 text-lg leading-relaxed">
                <span className="font-black text-green-700 shrink-0 md:w-1/3">{item.title}</span>
                <span className="opacity-80 md:w-2/3">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ReposetDetailSection;
