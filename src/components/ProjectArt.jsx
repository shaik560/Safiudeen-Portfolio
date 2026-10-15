/**
 * Illustrative SVG mockups shown on the project cards.
 * Each artwork is drawn on a 360×200 canvas.
 */

const FONT = "DM Sans, Inter, system-ui, sans-serif";

/** Phone body with a notch; children are drawn inside the screen. */
function Phone({ x, y, width = 96, height = 196, children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height={height} rx={16} fill="#0b1220" />
      <rect x={3} y={3} width={width - 6} height={height - 6} rx={13} fill="#fff" />
      <rect x={width / 2 - 14} y={7} width={28} height={6} rx={3} fill="#0b1220" />
      <g transform="translate(8 20)">{children}</g>
    </g>
  );
}

function Label({ x, y, size = 8, weight = 600, fill = "#0b1220", children }) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} fontFamily={FONT}>
      {children}
    </text>
  );
}

/** Scales a phone composition down so it fits the card thumbnail. */
function PhoneScene({ children }) {
  return <g transform="translate(180 8) scale(0.82) translate(-180 0)">{children}</g>;
}

function StudyCoachArt() {
  return (
    <PhoneScene>
      <Phone x={132} y={22}>
        <Label x={0} y={8} size={9} weight={700}>Today's plan</Label>
        <circle cx={40} cy={50} r={22} fill="none" stroke="#ece6fd" strokeWidth={7} />
        <circle
          cx={40} cy={50} r={22} fill="none" stroke="#8c4cf9" strokeWidth={7}
          strokeLinecap="round" strokeDasharray="86 138" transform="rotate(-90 40 50)"
        />
        <Label x={31} y={53} size={9} weight={700}>62%</Label>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${86 + i * 26})`}>
            <rect width={80} height={20} rx={7} fill="#f3effe" />
            <circle cx={9} cy={10} r={4} fill={i === 0 ? "#8c4cf9" : "#cbb8fb"} />
            <rect x={18} y={7} width={42 - i * 6} height={4} rx={2} fill="#8c4cf9" opacity={0.55} />
            <rect x={18} y={13} width={28} height={3} rx={1.5} fill="#b9a5f3" />
          </g>
        ))}
      </Phone>

      <g transform="translate(244 54)">
        <rect width={84} height={50} rx={12} fill="#fff" opacity={0.95} />
        <Label x={10} y={16} size={7} weight={500} fill="#6b5b9a">Energy today</Label>
        <rect x={10} y={24} width={64} height={6} rx={3} fill="#ece6fd" />
        <rect x={10} y={24} width={38} height={6} rx={3} fill="#8c4cf9" />
        <Label x={10} y={44} size={8} weight={700}>Take it lighter</Label>
      </g>

      <g transform="translate(34 92)">
        <rect width={82} height={46} rx={12} fill="#fff" opacity={0.95} />
        <Label x={10} y={16} size={7} weight={500} fill="#6b5b9a">Skill gap</Label>
        {[0, 1, 2].map((i) => (
          <rect key={i} x={10} y={22 + i * 7} width={62 - i * 14} height={4} rx={2} fill="#8c4cf9" opacity={1 - i * 0.25} />
        ))}
      </g>
    </PhoneScene>
  );
}

function BuildQuickArt() {
  return (
    <PhoneScene>
      <Phone x={70} y={26}>
        <Label x={0} y={8} size={9} weight={700}>Order materials</Label>
        {["Cement", "Steel", "Bricks", "Sand"].map((name, i) => (
          <g key={name} transform={`translate(${(i % 2) * 42} ${22 + Math.floor(i / 2) * 50})`}>
            <rect width={38} height={44} rx={9} fill="#e8f8f1" />
            <rect x={9} y={7} width={20} height={16} rx={5} fill="#11c47e" opacity={0.85} />
            <Label x={5} y={36} size={7}>{name}</Label>
          </g>
        ))}
        <rect y={126} width={80} height={20} rx={10} fill="#091631" />
        <Label x={16} y={139} size={8} weight={700} fill="#fff">Bulk order</Label>
      </Phone>

      <Phone x={194} y={14}>
        <Label x={0} y={8} size={9} weight={700}>Track delivery</Label>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(4 ${24 + i * 26})`}>
            {i < 3 && <rect x={4} y={10} width={2} height={20} fill={i < 2 ? "#11c47e" : "#d4dcd8"} />}
            <circle cx={5} cy={5} r={5} fill={i < 3 ? "#11c47e" : "#d4dcd8"} />
            <rect x={18} y={1} width={44 - i * 5} height={4} rx={2} fill="#0b1220" opacity={0.75} />
            <rect x={18} y={9} width={30} height={3} rx={1.5} fill="#b5c2bc" />
          </g>
        ))}
        <g transform="translate(0 132)">
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={i * 20} width={17} height={20} rx={5} fill="#e8f8f1" stroke="#11c47e" strokeWidth={1} />
          ))}
        </g>
      </Phone>
    </PhoneScene>
  );
}

const MENU_COLORS = ["#f59e0b", "#ef4444", "#84cc16", "#f97316", "#eab308", "#fb7185"];
const MENU_TABS = ["Burgers", "Rolls", "Drinks", "Desserts"];

function TheSpotArt() {
  return (
    <>
      <rect x={40} y={20} width={280} height={150} rx={14} fill="#0b1220" />
      <rect x={46} y={26} width={268} height={138} rx={10} fill="#fffaf0" />
      <Label x={58} y={46} size={12} weight={800}>The Spot</Label>

      {MENU_TABS.map((tab, i) => (
        <g key={tab} transform={`translate(${126 + i * 46} 34)`}>
          <rect width={42} height={16} rx={8} fill={i === 0 ? "#f59e0b" : "#fde7bd"} />
          <Label x={i === 3 ? 4 : 7} y={11} size={7} weight={700} fill={i === 0 ? "#fff" : "#7a5410"}>
            {tab}
          </Label>
        </g>
      ))}

      {MENU_COLORS.map((color, i) => (
        <g key={color} transform={`translate(${58 + (i % 3) * 86} ${64 + Math.floor(i / 3) * 48})`}>
          <rect width={78} height={42} rx={10} fill="#fff" stroke="#f3dfb5" />
          <circle cx={21} cy={21} r={14} fill={color} />
          <circle cx={21} cy={21} r={8} fill="#fff" opacity={0.35} />
          <rect x={41} y={12} width={28} height={4} rx={2} fill="#0b1220" opacity={0.75} />
          <rect x={41} y={21} width={20} height={3} rx={1.5} fill="#c9b88f" />
          <Label x={41} y={36} size={7} weight={800} fill="#b45309">₹149</Label>
        </g>
      ))}
    </>
  );
}

function MarketingBoutiqueArt() {
  return (
    <>
      <rect x={34} y={18} width={292} height={152} rx={12} fill="#fff" />
      <path d="M34 30a12 12 0 0 1 12-12h268a12 12 0 0 1 12 12v6H34z" fill="#e5ecfb" />
      {["#f87171", "#fbbf24", "#34d399"].map((color, i) => (
        <circle key={color} cx={48 + i * 11} cy={27} r={3} fill={color} />
      ))}
      <rect x={52} y={46} width={50} height={6} rx={3} fill="#0b1220" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={210 + i * 32} y={47} width={24} height={4} rx={2} fill="#94a3b8" />
      ))}

      <Label x={52} y={82} size={15} weight={800}>Build revenue</Label>
      <Label x={52} y={100} size={15} weight={800} fill="#3b82f6">architecture.</Label>
      <rect x={52} y={110} width={120} height={4} rx={2} fill="#cbd5e1" />
      <rect x={52} y={118} width={92} height={4} rx={2} fill="#cbd5e1" />
      <rect x={52} y={132} width={118} height={20} rx={10} fill="#3b82f6" />
      <Label x={62} y={145} size={7.5} weight={700} fill="#fff">Get Your Growth Audit</Label>

      <g transform="translate(206 72)">
        <rect width={96} height={84} rx={10} fill="#eff4ff" />
        <path
          d="M10 66 L30 48 L48 56 L68 30 L86 20"
          fill="none" stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
        />
        <Label x={10} y={16} size={7} weight={600} fill="#64748b">Pipeline growth</Label>
      </g>
    </>
  );
}

function DeenConnectArt() {
  return (
    <PhoneScene>
      <Phone x={132} y={14}>
        <Label x={0} y={8} size={8} weight={700}>Stay Connected</Label>
        <Label x={0} y={18} size={8} weight={700} fill="#0f766e">to Your Deen</Label>
        <path d="M10 70 V52 a30 30 0 0 1 60 0 V70 Z" fill="#0f766e" />
        <path d="M40 14 a3 3 0 1 1 0 6" fill="none" stroke="#d4a017" strokeWidth={2} />
        <circle cx={40} cy={34} r={4} fill="#d4a017" />
        <rect x={34} y={52} width={12} height={18} rx={6} fill="#d4a017" />
        <rect x={0} y={70} width={80} height={4} rx={2} fill="#d4a017" />

        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${i * 21} 84)`}>
            <circle cx={9} cy={9} r={9} fill={i % 2 ? "#fdf3d2" : "#d9f2ee"} />
            <circle cx={9} cy={9} r={3.5} fill={i % 2 ? "#d4a017" : "#0f766e"} />
          </g>
        ))}

        {["Fajr", "Dhuhr", "Asr"].map((prayer, i) => (
          <g key={prayer} transform={`translate(0 ${112 + i * 16})`}>
            <rect width={80} height={13} rx={6} fill="#f1f7f6" />
            <Label x={6} y={9.5} size={6.5}>{prayer}</Label>
            <rect x={52} y={5} width={20} height={3} rx={1.5} fill="#7fb7b0" />
          </g>
        ))}
      </Phone>

      <g transform="translate(246 60)">
        <rect width={80} height={44} rx={12} fill="#fff" opacity={0.95} />
        <Label x={10} y={16} size={7} weight={500} fill="#4b7f79">Next prayer</Label>
        <Label x={10} y={34} size={13} weight={800} fill="#0f766e">Asr 4:32</Label>
      </g>

      <g transform="translate(34 96)">
        <rect width={80} height={44} rx={12} fill="#fff" opacity={0.95} />
        <Label x={10} y={16} size={7} weight={500} fill="#4b7f79">Quran tracker</Label>
        <rect x={10} y={26} width={60} height={6} rx={3} fill="#d9f2ee" />
        <rect x={10} y={26} width={36} height={6} rx={3} fill="#d4a017" />
      </g>
    </PhoneScene>
  );
}

const ARTWORK = {
  studycoach: StudyCoachArt,
  buildquick: BuildQuickArt,
  thespot: TheSpotArt,
  "marketing-boutique": MarketingBoutiqueArt,
  deenconnect: DeenConnectArt,
};

export default function ProjectArt({ id, title }) {
  const Artwork = ARTWORK[id];

  return (
    <svg
      className="project-art"
      viewBox="0 0 360 200"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${title} illustrative mockup`}
    >
      {Artwork && <Artwork />}
    </svg>
  );
}
