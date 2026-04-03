import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// Panel data
interface PanelData {
  id: number;
  navLabel: string;
  title: string;
  subtitle: string;
  bgImage: string;
  info: string[];
  quote: string;
  attribution: string;
}

const PANELS: PanelData[] = [
  {
    id: 1,
    navLabel: "Home",
    title: "The Maratha Empire",
    subtitle: "Swaraj — Self-Rule of the Deccan",
    bgImage: "/assets/generated/maratha-hero.dim_1600x900.jpg",
    info: [
      "Founded in 1674 by Chhatrapati Shivaji Maharaj in the Deccan Plateau of India, the Maratha Empire emerged as a beacon of Hindu self-determination against Mughal supremacy. From its origins in the rugged Sahyadri mountain ranges, this remarkable empire would reshape the destiny of an entire subcontinent.",
      "At its zenith under the brilliant Peshwa administrations, the empire stretched from the Indus River in the northwest to Odisha in the east and Tamil Nadu in the south, covering nearly 2.8 million km\u00b2. This made it the dominant power in the Indian subcontinent throughout the 18th century.",
      "The empire\u2019s administrative genius lay in its decentralized structure \u2014 a confederation of powerful chieftains united under the Maratha banner. The Bhonsle, Holkar, Scindia, and Gaekwad dynasties each governed vast territories while acknowledging the central authority of the Peshwa in Pune.",
      "The empire\u2019s extraordinary rise and eventual fall \u2014 following the devastating Third Battle of Panipat in 1761 \u2014 remains one of the most dramatic chapters in Indian history. Yet even in defeat, the Maratha spirit endured, and the confederation continued to challenge British colonial power well into the 19th century.",
    ],
    quote:
      "The Marathas are a people born and bred in the saddle, whose very spirit breathes freedom and the love of the motherland.",
    attribution: "Sir Jadunath Sarkar, Historian",
  },
  {
    id: 2,
    navLabel: "History",
    title: "Chhatrapati Shivaji Maharaj",
    subtitle: "Founder of the Sovereign Maratha Kingdom",
    bgImage: "/assets/generated/shivaji-maharaj.dim_800x600.jpg",
    info: [
      "Born on February 19, 1630, at Shivneri Fort to Jijabai and Shahaji Bhonsle, Shivaji Bhonsle would grow to become one of history\u2019s most extraordinary leaders. From childhood, inspired by tales of valor from the Ramayana and Mahabharata, and guided by the fierce love of his mother, young Shivaji nurtured an unwavering dream of Swaraj \u2014 self-rule.",
      "A visionary administrator and brilliant military tactician, Shivaji pioneered guerrilla warfare in the Sahyadri mountains, capturing his first fort Torna at the age of just sixteen. He built a formidable navy \u2014 the first of its kind in Indian history \u2014 reformed land revenue systems, and promoted Marathi and Sanskrit in state affairs, elevating the common people.",
      "He defied the Mughal Empire at every turn, sacking the wealthy port of Surat not once but twice, and escaped the clutches of the great Mughal emperor Aurangzeb himself in a legendary daring escape from Agra in 1666. He defeated Adil Shah\u2019s most feared general Afzal Khan in a fateful meeting at Pratapgad.",
      "On June 6, 1674, Shivaji was crowned Chhatrapati \u2014 Emperor \u2014 at Raigad Fort, in a ceremony of magnificent splendor. As a secular ruler who protected the rights of all faiths, built magnificent temples and mosques alike, and earned the devotion of his people, Shivaji Maharaj remains the eternal hero of Maharashtra.",
    ],
    quote:
      "Do not think of the enemy as powerful. Have faith in your ability, in your army, and in God. Then victory is certain.",
    attribution: "Chhatrapati Shivaji Maharaj",
  },
  {
    id: 3,
    navLabel: "Warriors",
    title: "Warriors & Battles",
    subtitle: "The Sword Arm of Swaraj",
    bgImage: "/assets/generated/maratha-warriors.dim_800x600.jpg",
    info: [
      "The Maratha military machine was an extraordinary combination of swift cavalry, disciplined infantry, and a formidable naval fleet. Built around two types of cavalry \u2014 the Bargirs (state-provided horses) and Silahedars (who owned their own horses) \u2014 the Maratha horse could cover enormous distances at breathtaking speed, striking and vanishing before the enemy could respond.",
      "Key battles that shaped the empire include the legendary Battle of Pratapgad (1659) where Shivaji slew the fearsome Afzal Khan, the Sack of Surat (1664 and 1670), the daring Agra Escape (1666), and the Battle of Salher (1672) \u2014 considered the largest cavalry engagement of the entire era, where the Marathas decisively defeated the mighty Mughal army.",
      "The era of the Peshwas produced some of India\u2019s greatest military commanders. Peshwa Bajirao I (1720\u20131740) remains undefeated in every single battle he ever fought \u2014 an astonishing record of 41 victories in 41 engagements. His lightning raids deep into Mughal territory demonstrated the Maratha cavalry\u2019s devastating effectiveness.",
      "Later generals like Mahadji Shinde and Yashwantrao Holkar shaped the very fate of India in its conflict with the British East India Company. The three Anglo-Maratha Wars (1775\u20131818) tested the empire to its limits, with Holkar\u2019s campaign of 1804 reducing the British General Lake to desperate straits across northern India.",
    ],
    quote: "If there were no Marathas, India would have been entirely Mughal.",
    attribution: "Grant Duff, British Historian",
  },
  {
    id: 4,
    navLabel: "Forts",
    title: "Forts & Legacy",
    subtitle: "The Bones of Swaraj",
    bgImage: "/assets/generated/maratha-forts.dim_800x600.jpg",
    info: [
      "The Marathas built, captured, and maintained over 350 forts across the dramatic Sahyadri mountain ranges, the Deccan plateau, and along the Konkan coastline. These were not merely military installations \u2014 they were the beating heart of the empire, serving as administrative centers, treasure houses, intelligence networks, and powerful symbols of Swaraj.",
      "Raigad Fort served as the glorious capital where Shivaji was crowned Chhatrapati in 1674. Perched at 2,700 feet above sea level, its sheer cliffs made it virtually impregnable. Sinhagad (\u2018Lion\u2019s Fort\u2019), originally known as Kondana, witnessed the heroic sacrifice of Tanaji Malusare who died capturing it \u2014 prompting Shivaji\u2019s immortal lament: \u2018Gad aala, pan Sinha gela\u2019 \u2014 The fort is won, but the lion is gone.",
      "Torna was the first fort captured by young Shivaji at sixteen, symbolizing the birth of Swaraj. Pratapgad witnessed the decisive defeat of Afzal Khan. Rajgad served for 26 years as the administrative capital. Purandar was the site of the humiliating Treaty of 1665, later reversed. Each fort carries stories of extraordinary valor and sacrifice.",
      "Today, these magnificent fortresses stand as UNESCO-nominated heritage monuments, drawing pilgrims, historians, and trekkers from across the world. Every stone of Raigad, every rampart of Sinhagad, every tower of Pratapgad whispers of a civilization that chose freedom over submission, and built its dreams in stone upon the peaks of the Sahyadris.",
    ],
    quote:
      "These forts are not just stone and mortar \u2014 they are the bones of Swaraj, the skeleton of freedom.",
    attribution: "Babasaheb Purandare, Historian & Shiv-Shahir",
  },
  {
    id: 5,
    navLabel: "Legacy",
    title: "Culture & Heritage",
    subtitle: "The Living Flame of Maharashtra",
    bgImage: "/assets/generated/maratha-culture.dim_800x600.jpg",
    info: [
      "The Maratha era witnessed a magnificent renaissance of Marathi language, literature, and performing arts. Far from being merely a military empire, the Maratha state was a profound cultural force that revitalized the entire Deccan. Shivaji himself was a poet and composed verses in Marathi, Sanskrit, and Persian.",
      "The Warkari devotional movement, centered on the pilgrimage to Pandharpur, flourished under Maratha patronage. Kirtan \u2014 devotional singing \u2014 became a powerful medium of social and spiritual communication. Powada, the thrilling ballad tradition celebrating warrior heroes, became the oral history of the empire. Tamasha theatrical performances blended humor, social commentary, and musical storytelling.",
      "Peshwa Pune transformed into one of India\u2019s greatest cultural and intellectual hubs. Scholars, musicians, poets, and philosophers gathered at the Peshwa court. The magnificent Parvati Temple overlooking the city, the Chatushringi shrine, and dozens of temples throughout the Deccan stand as testament to the Peshwas\u2019 deep cultural patronage.",
      "Perhaps most remarkably for their era, the Maratha rulers maintained a genuinely secular administration that protected all faiths equally. Shivaji\u2019s constitution prohibited harm to mosques, churches, or the Quran. Muslim soldiers, commanders, and administrators served with distinction at every level. This enlightened governance, centuries before modern concepts of secularism, remains one of the empire\u2019s most enduring legacies.",
    ],
    quote:
      "The Maratha spirit is not a relic of history \u2014 it is a living flame in the heart of Maharashtra.",
    attribution: "Dr. B.R. Ambedkar",
  },
];

// Ornate corner flourishes component
function OrnateCorners() {
  return (
    <>
      {/* Top-left corner */}
      <div
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>Corner decoration</title>
          <path
            d="M4 32 Q4 4 32 4"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M4 20 Q4 4 20 4"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
          <circle cx="4" cy="4" r="2" fill="oklch(0.74 0.12 75)" />
          <circle
            cx="4"
            cy="32"
            r="1"
            fill="oklch(0.74 0.12 75)"
            opacity="0.5"
          />
          <circle
            cx="32"
            cy="4"
            r="1"
            fill="oklch(0.74 0.12 75)"
            opacity="0.5"
          />
        </svg>
      </div>
      {/* Top-right corner */}
      <div
        className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>Corner decoration</title>
          <path
            d="M60 32 Q60 4 32 4"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M60 20 Q60 4 44 4"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
          <circle cx="60" cy="4" r="2" fill="oklch(0.74 0.12 75)" />
          <circle
            cx="60"
            cy="32"
            r="1"
            fill="oklch(0.74 0.12 75)"
            opacity="0.5"
          />
          <circle
            cx="32"
            cy="4"
            r="1"
            fill="oklch(0.74 0.12 75)"
            opacity="0.5"
          />
        </svg>
      </div>
      {/* Bottom-left corner */}
      <div
        className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>Corner decoration</title>
          <path
            d="M4 32 Q4 60 32 60"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M4 44 Q4 60 20 60"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
          <circle cx="4" cy="60" r="2" fill="oklch(0.74 0.12 75)" />
        </svg>
      </div>
      {/* Bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full"
          fill="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>Corner decoration</title>
          <path
            d="M60 32 Q60 60 32 60"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M60 44 Q60 60 44 60"
            stroke="oklch(0.74 0.12 75)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
          <circle cx="60" cy="60" r="2" fill="oklch(0.74 0.12 75)" />
        </svg>
      </div>
    </>
  );
}

// Floating Window Modal
function FloatingWindow({
  panel,
  onClose,
}: {
  panel: PanelData;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Focus trap
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        data-ocid="panel.modal"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClose();
          }}
          role="button"
          tabIndex={0}
          aria-label="Close modal"
        />

        {/* Modal dialog */}
        <motion.dialog
          ref={modalRef}
          open
          aria-label={panel.title}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-sm overflow-hidden focus:outline-none m-0 p-0"
          style={{
            background: "oklch(0.09 0.005 15)",
            boxShadow:
              "0 25px 80px oklch(0 0 0 / 0.8), 0 0 0 1px oklch(0.74 0.12 75 / 0.5), 0 0 0 3px oklch(0.09 0.005 15), 0 0 0 4px oklch(0.74 0.12 75 / 0.2)",
            border: "none",
          }}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ornate corners */}
          <OrnateCorners />

          {/* Header image with overlay */}
          <div className="relative h-56 md:h-72 flex-shrink-0 overflow-hidden">
            <img
              src={panel.bgImage}
              alt={panel.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0 0 0 / 0.3) 0%, oklch(0 0 0 / 0.2) 40%, oklch(0.09 0.005 15 / 0.95) 100%)",
              }}
            />
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="ornament-line text-xs font-cinzel tracking-[0.3em] text-gold-muted mb-2 uppercase">
                \u2726 {panel.subtitle} \u2726
              </div>
              <h2
                className="font-cinzel text-2xl md:text-4xl font-bold text-gold-bright cinematic-text"
                style={{ letterSpacing: "0.05em" }}
              >
                {panel.title}
              </h2>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              data-ocid="panel.close_button"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-sm font-cinzel text-gold/70 hover:text-gold transition-colors"
              style={{
                background: "oklch(0.09 0.005 15 / 0.8)",
                border: "1px solid oklch(0.74 0.12 75 / 0.4)",
              }}
              aria-label="Close window"
            >
              \u2715
            </button>
          </div>

          {/* Gold divider */}
          <div className="gold-divider mx-8" />

          {/* Scrollable content */}
          <div className="overflow-y-auto scrollbar-thin flex-1 p-6 md:p-8">
            {/* Info paragraphs */}
            <div className="space-y-4 mb-8">
              {panel.info.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 30)}
                  className="font-garamond text-base md:text-lg leading-relaxed"
                  style={{
                    color: "oklch(0.87 0.01 80)",
                    lineHeight: "1.8",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote block */}
            <div className="historical-quote mb-6">
              <p
                className="font-garamond text-base md:text-lg"
                style={{ color: "oklch(0.76 0.13 75)", fontStyle: "italic" }}
              >
                &ldquo;{panel.quote}&rdquo;
              </p>
              <p
                className="font-cinzel text-xs mt-3 text-right"
                style={{
                  color: "oklch(0.62 0.08 75)",
                  letterSpacing: "0.15em",
                }}
              >
                \u2014 {panel.attribution}
              </p>
            </div>

            {/* Bottom ornament */}
            <div className="ornament-line text-gold-muted text-xs mt-6 mb-2">
              \u2726 \u2726 \u2726
            </div>
          </div>
        </motion.dialog>
      </motion.div>
    </AnimatePresence>
  );
}

// Card thumbnail component
function PanelCard({
  panel,
  index,
  onClick,
}: {
  panel: PanelData;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      data-ocid={`panel.item.${index + 1}`}
      className="relative group w-full text-left overflow-hidden rounded-sm"
      style={{
        border: "1px solid oklch(0.74 0.12 75 / 0.4)",
        boxShadow: "0 4px 20px oklch(0 0 0 / 0.4)",
        aspectRatio: "4/3",
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background image */}
      <img
        src={panel.bgImage}
        alt={panel.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0 0 0 / 0.3) 0%, oklch(0 0 0 / 0.75) 100%)",
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "oklch(0.74 0.12 75 / 0.08)",
          border: "1px solid oklch(0.74 0.12 75 / 0.6)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div
          className="font-cinzel text-[0.6rem] mb-1 tracking-[0.25em] uppercase"
          style={{ color: "oklch(0.62 0.08 75)" }}
        >
          Chapter {index + 1}
        </div>
        <h3
          className="font-cinzel text-sm md:text-base font-semibold leading-tight mb-2"
          style={{ color: "oklch(0.91 0.01 80)" }}
        >
          {panel.title}
        </h3>
        <div
          className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase group-hover:text-gold-bright transition-colors duration-300"
          style={{ color: "oklch(0.74 0.12 75)" }}
        >
          \u2726 EXPLORE \u2726
        </div>
      </div>

      {/* Corner gems */}
      <div
        className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full"
        style={{ background: "oklch(0.74 0.12 75 / 0.6)" }}
      />
      <div
        className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
        style={{ background: "oklch(0.74 0.12 75 / 0.6)" }}
      />
    </motion.button>
  );
}

// Header component
function Header({ onNavClick }: { onNavClick: (id: number) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? "linear-gradient(to right, oklch(0.12 0.05 15), oklch(0.08 0.003 15), oklch(0.12 0.05 15))"
          : "linear-gradient(to right, oklch(0.14 0.06 15 / 0.95), oklch(0.09 0.005 15 / 0.95), oklch(0.14 0.06 15 / 0.95))",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.74 0.12 75 / 0.3)",
        boxShadow: scrolled ? "0 4px 30px oklch(0 0 0 / 0.5)" : "none",
      }}
    >
      {/* Thin gold top line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.74 0.12 75 / 0.5), oklch(0.76 0.13 75), oklch(0.74 0.12 75 / 0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Primary navigation"
          >
            {PANELS.slice(0, 3).map((panel, i) => (
              <button
                type="button"
                key={panel.id}
                onClick={() => onNavClick(panel.id)}
                data-ocid={`nav.link.${i + 1}`}
                className="font-cinzel text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-gold-bright"
                style={{ color: "oklch(0.87 0.01 80)" }}
              >
                {panel.navLabel}
              </button>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex flex-col items-center">
            <div
              className="font-cinzel-decorative text-base md:text-xl font-bold text-center tracking-widest"
              style={{
                color: "oklch(0.76 0.13 75)",
                textShadow:
                  "0 0 20px oklch(0.74 0.12 75 / 0.5), 0 2px 4px oklch(0 0 0 / 0.8)",
              }}
            >
              \u2726
            </div>
            <div
              className="font-cinzel text-[0.65rem] md:text-xs tracking-[0.35em] uppercase text-center"
              style={{ color: "oklch(0.62 0.08 75)" }}
            >
              Maratha Empire
            </div>
          </div>

          {/* Right Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Secondary navigation"
          >
            {PANELS.slice(3, 5).map((panel, i) => (
              <button
                type="button"
                key={panel.id}
                onClick={() => onNavClick(panel.id)}
                data-ocid={`nav.link.${i + 4}`}
                className="font-cinzel text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-gold-bright"
                style={{ color: "oklch(0.87 0.01 80)" }}
              >
                {panel.navLabel}
              </button>
            ))}
          </nav>

          {/* Mobile menu */}
          <button
            type="button"
            className="md:hidden font-cinzel text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.74 0.12 75)" }}
            aria-label="Menu"
            data-ocid="nav.toggle"
          >
            \u2726 MENU
          </button>
        </div>
      </div>

      {/* Gold bottom divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.74 0.12 75 / 0.4), oklch(0.74 0.12 75 / 0.4), transparent)",
        }}
      />
    </header>
  );
}

// Hero section
function HeroSection({ onExplore }: { onExplore: () => void }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/maratha-hero.dim_1600x900.jpg"
          alt="Maratha Empire - Ancient forts at dusk"
          className="w-full h-full object-cover"
        />
        {/* Cinematic vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0 0 0 / 0.1) 0%, oklch(0 0 0 / 0.5) 50%, oklch(0 0 0 / 0.85) 100%), linear-gradient(to bottom, oklch(0 0 0 / 0.6) 0%, oklch(0 0 0 / 0.15) 30%, oklch(0 0 0 / 0.3) 60%, oklch(0.07 0 0 / 0.95) 100%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel text-xs md:text-sm tracking-[0.5em] uppercase mb-6"
          style={{ color: "oklch(0.62 0.08 75)" }}
        >
          \u2726 &nbsp; 1674 \u2014 1818 &nbsp; \u2726
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-cinzel text-4xl md:text-6xl lg:text-8xl font-bold uppercase leading-tight cinematic-text mb-4"
          style={{
            color: "oklch(0.91 0.01 80)",
            letterSpacing: "0.06em",
          }}
        >
          THE MARATHA
          <br />
          <span style={{ color: "oklch(0.76 0.13 75)" }}>EMPIRE</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="gold-divider max-w-lg mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-cinzel text-sm md:text-base tracking-[0.2em] uppercase mb-10"
          style={{ color: "oklch(0.74 0.12 75)" }}
        >
          Swaraj \u00b7 Glory \u00b7 Courage \u00b7 Valor
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-garamond text-base md:text-xl mb-10 max-w-2xl mx-auto italic"
          style={{ color: "oklch(0.82 0.01 80)", lineHeight: "1.8" }}
        >
          The empire that stretched from the Indus to the seas \u2014 the last
          great Hindu empire that held India in its magnificent embrace.
        </motion.p>

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={onExplore}
          data-ocid="hero.primary_button"
          className="font-cinzel text-sm tracking-[0.3em] uppercase px-10 py-4 transition-all duration-300 hover:scale-105"
          style={{
            background: "oklch(0.74 0.12 75)",
            color: "oklch(0.09 0.005 15)",
            border: "1px solid oklch(0.76 0.13 75)",
            boxShadow:
              "0 0 30px oklch(0.74 0.12 75 / 0.3), 0 4px 20px oklch(0 0 0 / 0.4)",
          }}
          whileHover={{
            boxShadow:
              "0 0 40px oklch(0.74 0.12 75 / 0.5), 0 4px 20px oklch(0 0 0 / 0.4)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          \u2726 &nbsp; EXPLORE THE EMPIRE &nbsp; \u2726
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="font-cinzel text-xs tracking-[0.4em] uppercase mt-6"
          style={{ color: "oklch(0.50 0.07 75)" }}
        >
          EST. 1674
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        aria-hidden="true"
      >
        <div
          className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ color: "oklch(0.50 0.07 75)" }}
        >
          Scroll
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.74 0.12 75), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

// Panels grid section
function PanelsSection({ onOpen }: { onOpen: (id: number) => void }) {
  return (
    <section
      className="py-20 md:py-32 px-4 max-w-7xl mx-auto"
      aria-label="Empire chapters"
    >
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="font-cinzel text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "oklch(0.62 0.08 75)" }}
        >
          \u2726 Five Chronicles \u2726
        </div>
        <h2
          className="font-cinzel text-3xl md:text-5xl font-bold uppercase"
          style={{
            color: "oklch(0.76 0.13 75)",
            letterSpacing: "0.06em",
            textShadow: "0 2px 20px oklch(0.74 0.12 75 / 0.2)",
          }}
        >
          Chapters of Glory
        </h2>
        <div className="gold-divider max-w-xs mx-auto mt-6" />
        <p
          className="font-garamond text-base md:text-lg mt-6 max-w-2xl mx-auto italic"
          style={{ color: "oklch(0.72 0.01 80)" }}
        >
          Explore the five great chronicles of the Maratha legacy \u2014 from
          its founding to its enduring cultural flame.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        data-ocid="panel.list"
      >
        {PANELS.map((panel, index) => (
          <PanelCard
            key={panel.id}
            panel={panel}
            index={index}
            onClick={() => onOpen(panel.id)}
          />
        ))}
      </div>
    </section>
  );
}

// Featured quote section
function QuoteSection() {
  return (
    <section
      className="py-16 px-4"
      style={{
        background:
          "linear-gradient(to right, oklch(0.12 0.05 15), oklch(0.09 0.003 15), oklch(0.12 0.05 15))",
        borderTop: "1px solid oklch(0.74 0.12 75 / 0.2)",
        borderBottom: "1px solid oklch(0.74 0.12 75 / 0.2)",
      }}
      aria-label="Featured quote"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="font-cinzel text-5xl md:text-8xl leading-none mb-4 opacity-20"
          style={{ color: "oklch(0.74 0.12 75)" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>
        <blockquote
          className="font-garamond text-xl md:text-3xl italic leading-relaxed mb-6"
          style={{ color: "oklch(0.76 0.13 75)", lineHeight: "1.7" }}
        >
          To serve the people faithfully and justly, without discrimination
          \u2014 this was the law of Swaraj.
        </blockquote>
        <div
          className="font-cinzel text-xs tracking-[0.25em] uppercase"
          style={{ color: "oklch(0.62 0.08 75)" }}
        >
          \u2014 The Maratha Ideal
        </div>
        <div className="gold-divider max-w-xs mx-auto mt-8" />
      </motion.div>
    </section>
  );
}

// Timeline section
function TimelineSection() {
  const milestones = [
    { year: "1630", event: "Birth of Shivaji Maharaj at Shivneri Fort" },
    {
      year: "1646",
      event: "Capture of Torna Fort \u2014 the first act of Swaraj",
    },
    { year: "1659", event: "Battle of Pratapgad \u2014 Afzal Khan defeated" },
    {
      year: "1674",
      event: "Coronation of Chhatrapati Shivaji Maharaj at Raigad",
    },
    {
      year: "1720",
      event: "Peshwa Bajirao I begins era of greatest expansion",
    },
    {
      year: "1760",
      event: "Empire reaches its peak \u2014 2.8 million km\u00b2",
    },
    { year: "1761", event: "Third Battle of Panipat \u2014 a turning point" },
    { year: "1818", event: "Third Anglo-Maratha War ends the formal empire" },
  ];

  return (
    <section
      className="py-20 md:py-28 px-4 max-w-5xl mx-auto"
      aria-label="Historical timeline"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="font-cinzel text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "oklch(0.62 0.08 75)" }}
        >
          \u2726 Chronology \u2726
        </div>
        <h2
          className="font-cinzel text-3xl md:text-4xl font-bold uppercase"
          style={{ color: "oklch(0.76 0.13 75)", letterSpacing: "0.06em" }}
        >
          Timeline of History
        </h2>
        <div className="gold-divider max-w-xs mx-auto mt-6" />
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.74 0.12 75 / 0.4), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              className={`flex items-center gap-6 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div
                className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <div
                  className="font-cinzel text-lg md:text-2xl font-bold"
                  style={{ color: "oklch(0.74 0.12 75)" }}
                >
                  {m.year}
                </div>
              </div>

              {/* Center dot */}
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 relative z-10"
                style={{
                  background: "oklch(0.74 0.12 75)",
                  boxShadow: "0 0 12px oklch(0.74 0.12 75 / 0.6)",
                }}
                aria-hidden="true"
              />

              <div
                className={`flex-1 ${i % 2 === 0 ? "text-left" : "text-right"}`}
              >
                <p
                  className="font-garamond text-sm md:text-base"
                  style={{ color: "oklch(0.82 0.01 80)" }}
                >
                  {m.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Creator section
function FeaturedCreatorSection() {
  return (
    <section
      className="py-20 md:py-28 px-4 relative overflow-hidden"
      aria-label="Featured creator"
      data-ocid="creator.section"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.11 0.03 30) 0%, oklch(0.09 0.005 15) 40%, oklch(0.11 0.03 20) 100%)",
        borderTop: "1px solid oklch(0.74 0.12 75 / 0.35)",
        borderBottom: "1px solid oklch(0.74 0.12 75 / 0.35)",
      }}
    >
      {/* Ambient glow behind name */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.74 0.12 75 / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top decorative flourish */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-10"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-hidden="true"
      >
        <div
          className="h-px flex-1 max-w-xs"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.74 0.12 75 / 0.6))",
          }}
        />
        <span
          className="font-cinzel text-sm"
          style={{ color: "oklch(0.74 0.12 75)" }}
        >
          \u2726 \u2726 \u2726
        </span>
        <div
          className="h-px flex-1 max-w-xs"
          style={{
            background:
              "linear-gradient(to left, transparent, oklch(0.74 0.12 75 / 0.6))",
          }}
        />
      </motion.div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cinzel text-xs tracking-[0.55em] uppercase mb-6"
          style={{ color: "oklch(0.62 0.08 75)" }}
        >
          \u2726 &nbsp; Featured &nbsp; \u2726
        </motion.div>

        {/* Decorative emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-7 w-20 h-20 flex items-center justify-center relative"
        >
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "1px solid oklch(0.74 0.12 75 / 0.4)",
              boxShadow:
                "0 0 24px oklch(0.74 0.12 75 / 0.2), inset 0 0 16px oklch(0.74 0.12 75 / 0.05)",
            }}
          />
          {/* Inner ring */}
          <div
            className="absolute inset-3 rounded-full"
            style={{ border: "1px solid oklch(0.74 0.12 75 / 0.25)" }}
          />
          {/* Central star */}
          <span
            className="font-cinzel text-2xl relative z-10"
            style={{
              color: "oklch(0.76 0.13 75)",
              textShadow: "0 0 18px oklch(0.74 0.12 75 / 0.7)",
            }}
          >
            \u2605
          </span>
        </motion.div>

        {/* Name — the feature */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel font-bold uppercase mb-4"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            letterSpacing: "0.08em",
            color: "oklch(0.76 0.13 75)",
            textShadow:
              "0 0 40px oklch(0.74 0.12 75 / 0.45), 0 0 80px oklch(0.74 0.12 75 / 0.2), 0 4px 12px oklch(0 0 0 / 0.6)",
            lineHeight: 1.1,
          }}
        >
          Aaryan Shirsath
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="gold-divider max-w-sm mx-auto my-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="font-cinzel text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "oklch(0.74 0.12 75)" }}
        >
          Architect of this Digital Chronicle
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="font-garamond text-base md:text-lg italic max-w-xl mx-auto"
          style={{ color: "oklch(0.72 0.01 80)", lineHeight: "1.8" }}
        >
          With devotion to Maratha history and a passion for bringing the
          glorious legacy of Swaraj to life, this chronicle was crafted as a
          tribute to the warriors and visionaries of a great civilization.
        </motion.p>

        {/* Bottom ornament dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex items-center justify-center gap-3 mt-8"
          aria-hidden="true"
        >
          {[0.6, 1, 0.6].map((op, idx) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static decorative items
              key={idx}
              className="rounded-full"
              style={{
                width: idx === 1 ? "8px" : "5px",
                height: idx === 1 ? "8px" : "5px",
                background: `oklch(0.74 0.12 75 / ${op})`,
                boxShadow:
                  idx === 1 ? "0 0 10px oklch(0.74 0.12 75 / 0.5)" : undefined,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom decorative flourish */}
      <motion.div
        className="flex items-center justify-center gap-4 mt-10"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        aria-hidden="true"
      >
        <div
          className="h-px flex-1 max-w-xs"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.74 0.12 75 / 0.6))",
          }}
        />
        <span
          className="font-cinzel text-sm"
          style={{ color: "oklch(0.74 0.12 75)" }}
        >
          \u2726 \u2726 \u2726
        </span>
        <div
          className="h-px flex-1 max-w-xs"
          style={{
            background:
              "linear-gradient(to left, transparent, oklch(0.74 0.12 75 / 0.6))",
          }}
        />
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      className="relative py-12 px-4"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.09 0.005 15), oklch(0.07 0 0))",
        borderTop: "1px solid oklch(0.74 0.12 75 / 0.3)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="gold-divider max-w-xl mx-auto mb-10" />

        <div className="text-center mb-8">
          <div
            className="font-cinzel-decorative text-2xl md:text-3xl mb-2"
            style={{
              color: "oklch(0.74 0.12 75)",
              textShadow: "0 0 20px oklch(0.74 0.12 75 / 0.3)",
            }}
          >
            \u2726 Maratha Empire \u2726
          </div>
          <p
            className="font-cinzel text-xs tracking-[0.3em] uppercase"
            style={{ color: "oklch(0.50 0.07 75)" }}
          >
            Swaraj \u00b7 1674 \u2014 1818
          </p>
        </div>

        <nav
          className="flex flex-wrap justify-center gap-6 mb-10"
          aria-label="Footer navigation"
        >
          {PANELS.map((panel, i) => (
            <a
              key={panel.id}
              href={`#chapter-${panel.id}`}
              data-ocid={`footer.link.${i + 1}`}
              className="font-cinzel text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-gold-bright"
              style={{ color: "oklch(0.62 0.08 75)" }}
            >
              {panel.navLabel}
            </a>
          ))}
        </nav>

        <blockquote
          className="text-center font-garamond text-base italic mb-8 max-w-2xl mx-auto"
          style={{ color: "oklch(0.60 0.01 80)" }}
        >
          &ldquo;Mountains and rivers are our forts, the Marathas \u2014 our
          army, and the power of righteousness \u2014 our cannon.&rdquo;
        </blockquote>

        <div className="gold-divider max-w-xl mx-auto mb-6" />

        {/* Creator credit */}
        <p
          className="text-center font-cinzel text-xs tracking-[0.2em] uppercase mb-6"
          style={{ color: "oklch(0.50 0.07 75)" }}
        >
          Created by{" "}
          <span style={{ color: "oklch(0.74 0.12 75)" }}>Aaryan Shirsath</span>
        </p>

        <p
          className="text-center font-garamond text-sm"
          style={{ color: "oklch(0.45 0.005 80)" }}
        >
          \u00a9 {year}. Built with \u2665 using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gold-bright"
            style={{ color: "oklch(0.62 0.08 75)" }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const panelsSectionRef = useRef<HTMLDivElement>(null);

  const openPanel = useCallback((id: number) => {
    setActivePanel(id);
  }, []);

  const closePanel = useCallback(() => {
    setActivePanel(null);
  }, []);

  const scrollToPanels = useCallback(() => {
    panelsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const activeData = PANELS.find((p) => p.id === activePanel) ?? null;

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.09 0.005 15)" }}
    >
      <title>The Maratha Empire \u2014 Swaraj, Glory & Heritage</title>

      {/* Sticky Header */}
      <Header onNavClick={openPanel} />

      {/* Main content */}
      <main>
        <HeroSection onExplore={scrollToPanels} />

        <div ref={panelsSectionRef}>
          <PanelsSection onOpen={openPanel} />
        </div>

        <QuoteSection />

        <TimelineSection />

        <FeaturedCreatorSection />
      </main>

      <Footer />

      {/* Floating window modal */}
      <AnimatePresence mode="wait">
        {activeData && (
          <FloatingWindow
            key={activeData.id}
            panel={activeData}
            onClose={closePanel}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
