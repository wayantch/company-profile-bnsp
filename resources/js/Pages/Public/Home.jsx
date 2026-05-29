import { Head, Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

const statLabels = {
    projects: "Proyek Selesai",
    clients: "Klien Aktif",
    years: "Tahun Berdiri",
    team: "Anggota Tim",
};

const statIcons = {
    projects: (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
        >
            <path
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    clients: (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
        >
            <path
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    years: (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
        >
            <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    team: (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
        >
            <path
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
};

/* Decorative grid pattern SVG as bg */
const GridPattern = ({ className = "" }) => (
    <svg
        className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
            >
                <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
);

/* Circuit-like decorative lines */
const CircuitDecor = ({ className = "" }) => (
    <svg
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none ${className}`}
    >
        <circle
            cx="20"
            cy="100"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <line
            x1="24"
            y1="100"
            x2="80"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
        />
        <line
            x1="80"
            y1="100"
            x2="80"
            y2="40"
            stroke="currentColor"
            strokeWidth="1"
        />
        <line
            x1="80"
            y1="40"
            x2="160"
            y2="40"
            stroke="currentColor"
            strokeWidth="1"
        />
        <circle
            cx="160"
            cy="40"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.3"
        />
        <line
            x1="164"
            y1="40"
            x2="220"
            y2="40"
            stroke="currentColor"
            strokeWidth="1"
        />
        <line
            x1="220"
            y1="40"
            x2="220"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
        />
        <line
            x1="220"
            y1="100"
            x2="300"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
        />
        <circle
            cx="300"
            cy="100"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <line
            x1="300"
            y1="106"
            x2="300"
            y2="160"
            stroke="currentColor"
            strokeWidth="1"
        />
        <line
            x1="300"
            y1="160"
            x2="380"
            y2="160"
            stroke="currentColor"
            strokeWidth="1"
        />
        <circle
            cx="380"
            cy="160"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.3"
        />
        <line
            x1="80"
            y1="100"
            x2="80"
            y2="160"
            stroke="currentColor"
            strokeWidth="1"
        />
        <line
            x1="80"
            y1="160"
            x2="160"
            y2="160"
            stroke="currentColor"
            strokeWidth="1"
        />
        <rect
            x="155"
            y="155"
            width="10"
            height="10"
            stroke="currentColor"
            strokeWidth="1.5"
        />
    </svg>
);

/* Hexagon grid decoration */
const HexDecor = ({ className = "" }) => (
    <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none ${className}`}
    >
        {[
            [50, 43],
            [100, 43],
            [150, 43],
            [75, 87],
            [125, 87],
            [50, 131],
            [100, 131],
            [150, 131],
        ].map(([cx, cy], i) => (
            <polygon
                key={i}
                points={`${cx},${cy - 22} ${cx + 19},${cy - 11} ${cx + 19},${cy + 11} ${cx},${cy + 22} ${cx - 19},${cy + 11} ${cx - 19},${cy - 11}`}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
            />
        ))}
    </svg>
);

const formatLongDate = (value) => {
    if (!value) {
        return "-";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(date);
};

export default function Home({
    hero,
    about,
    visiMisi,
    featuredProducts,
    latestArticles,
    latestEvents,
    featuredGalleries,
    clients,
    contact,
    stats,
}) {
    const heroTitle = hero?.title || "Mewujudkan Ide Menjadi Realitas Digital";
    const heroSubtitle =
        hero?.subtitle ||
        "Solusi digital yang dirancang untuk tumbuh, cepat, dan tepercaya.";
    const heroDescription =
        hero?.description ||
        "Kami membantu perusahaan membangun kehadiran digital yang rapi, modern, dan siap berkembang bersama kebutuhan bisnis.";

    const missionItems = String(visiMisi?.misi || "")
        .split("\n")
        .map((item) => item.replace(/^\d+\.\s*/, "").trim())
        .filter(Boolean);

    const defaultMissions = [
        "Memberikan solusi berkualitas tinggi yang terukur.",
        "Menyediakan konsultasi strategis berbasis data.",
        "Membangun infrastruktur digital yang modern dan aman.",
        "Menjaga integritas dan profesionalisme dalam setiap proyek.",
    ];

    // Hardcoded layanan (services) — purposely static per user request
    const services = [
        {
            name: "Pengembangan Web",
            category: "Web Development",
            short_description:
                "Pembuatan aplikasi dan website responsif, CMS, dan portal e-commerce menggunakan teknologi modern.",
        },
        {
            name: "Aplikasi Mobile",
            category: "Mobile Apps",
            short_description:
                "Aplikasi mobile native dan cross-platform yang terintegrasi dengan backend yang handal.",
        },
        {
            name: "Konsultasi IT",
            category: "Consulting",
            short_description:
                "Audit teknologi, arsitektur solusi, dan roadmap produk untuk mempercepat keputusan bisnis.",
        },
    ];

    return (
        <PublicLayout title="Beranda">
            <Head title="Beranda | Wynnsea" />

            {/* ── HERO ── */}
            <section className="relative overflow-hidden border-b border-border bg-base ">
                {/* Grid overlay */}
                <GridPattern className="text-primary/[0.04]" />

                {/* Glow blobs */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
                    <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/[0.06] blur-3xl" />
                    <div className="absolute left-1/2 top-12 hidden -translate-x-1/2 opacity-10 lg:block">
                        <svg
                            viewBox="0 0 120 120"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-28 w-28 text-primary"
                        >
                            <circle cx="60" cy="60" r="42" />
                            <path
                                d="M60 28v64M28 60h64"
                                strokeLinecap="round"
                            />
                            <path
                                d="M39 39l42 42M81 39L39 81"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Top shimmer line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                {/* Circuit decoration — right side */}
                <CircuitDecor className="absolute right-8 top-12 w-72 text-primary/[0.12] opacity-70 lg:w-96" />

                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-3xl space-y-8 text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-primary">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/15 bg-surface/70 text-primary/80">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="h-4 w-4"
                                >
                                    <path
                                        d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 7v10M7 10l5 3 5-3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            IT Solutions & Digital Innovation
                        </div>

                        <h1 className="mx-auto text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                            {heroTitle}
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-muted">
                            {heroSubtitle}
                        </p>
                        <p className="mx-auto max-w-xl text-sm leading-7 text-muted/70">
                            {heroDescription}
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href={route("kontak")}
                                className="group relative overflow-hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:shadow-primary/40"
                            >
                                <span className="relative z-10">
                                    Hubungi Kami
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition group-hover:opacity-100" />
                            </Link>
                            <Link
                                href={route("about")}
                                className="rounded-xl border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-text backdrop-blur-sm transition hover:border-primary/40 hover:text-primary"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {Object.entries(stats || {}).map(([key, value]) => (
                            <div
                                key={key}
                                className="group rounded-2xl border border-border bg-surface/60 p-5 text-center backdrop-blur-sm transition hover:border-primary/30"
                            >
                                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                                    {statIcons[key]}
                                </div>
                                <div className="text-2xl font-bold text-text">
                                    {value}+
                                </div>
                                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted">
                                    {statLabels[key] || key}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT + VISI MISI ── */}
            <section className="relative overflow-hidden border-b border-border bg-surface/40">
                {/* Hex decor */}
                <HexDecor className="absolute right-0 top-0 w-64 text-primary/[0.055] lg:w-80" />
                <HexDecor className="absolute -left-10 bottom-0 w-52 text-accent/[0.04]" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                                Tentang & Visi Misi
                            </p>
                            <h2 className="text-2xl font-bold text-text sm:text-3xl">
                                Siapa kami dan ke mana kami menuju
                            </h2>
                        </div>
                        <Link
                            href={route("about")}
                            className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-muted transition hover:border-primary/30 hover:text-primary"
                        >
                            Profil lengkap →
                        </Link>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        {/* About card */}
                        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm">
                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[4rem] bg-primary/[0.05]" />
                            <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-primary/30" />

                            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
                                Tentang Wynnsea
                            </p>
                            <h3 className="mt-3 text-xl font-bold text-text">
                                {about?.title || "Tentang Wynnsea"}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-muted">
                                {about?.description ||
                                    "Wynnsea adalah mitra transformasi digital yang fokus pada produk, pengalaman, dan hasil yang terukur. Kami percaya bahwa teknologi yang baik dimulai dari pemahaman bisnis yang mendalam."}
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-border bg-base/80 p-4">
                                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                                        Berdiri Sejak
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-text">
                                        {about?.founded || "2017"}
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-border bg-base/80 p-4">
                                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                                        Fokus Layanan
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-text">
                                        Web, Mobile & IT Consulting
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visi Misi card */}
                        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm">
                            <div className="absolute left-0 bottom-0 h-28 w-28 rounded-tr-[4rem] bg-accent/[0.05]" />

                            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
                                Visi & Misi
                            </p>

                            {/* Visi */}
                            <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/[0.06] p-4">
                                <p className="text-[10px] uppercase tracking-[0.22em] text-primary/70">
                                    Visi
                                </p>
                                <p className="mt-2 text-sm font-medium leading-6 text-text">
                                    {visiMisi?.visi ||
                                        "Menjadi pemimpin solusi teknologi yang inovatif, tepercaya, dan berdampak nyata di era digital."}
                                </p>
                            </div>

                            {/* Misi */}
                            <div className="mt-3 rounded-2xl border border-border bg-base/80 p-4">
                                <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                                    Misi
                                </p>
                                <ul className="mt-3 space-y-2">
                                    {(missionItems.length
                                        ? missionItems
                                        : defaultMissions
                                    ).map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-sm leading-6 text-muted"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRODUCTS — Primary BG ── */}
            <section className="relative overflow-hidden border-b border-primary/20 bg-primary">
                {/* Grid overlay on primary */}
                <GridPattern className="text-white/[0.06]" />
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
                    <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/60">
                                Layanan
                            </p>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Solusi yang siap mendukung bisnis Anda
                            </h2>
                            <p className="text-sm text-white/60">
                                Dari pengembangan produk digital hingga
                                konsultasi infrastruktur.
                            </p>
                        </div>
                        <Link
                            href={route("produk")}
                            className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                            Semua layanan →
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {services.map((product, i) => (
                            <article
                                key={i}
                                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/15"
                            >
                                {/* Product number watermark */}
                                <div className="pointer-events-none absolute right-4 top-3 font-mono text-6xl font-bold text-white/[0.06] select-none">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                                    {product.category || "Layanan"}
                                </p>
                                <h3 className="mt-2 text-lg font-bold text-white">
                                    {product.name}
                                </h3>
                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/60">
                                    {product.short_description ||
                                        product.description ||
                                        "Layanan yang dirancang untuk mendukung pertumbuhan digital bisnis Anda."}
                                </p>
                                <Link
                                    href={route("produk")}
                                    className="mt-5 inline-flex items-center text-sm font-medium text-white/80 transition group-hover:text-white"
                                >
                                    Selengkapnya
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="ml-1.5 h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </article>
                        ))}
                        {!services?.length && (
                            <div className="col-span-full rounded-3xl border border-dashed border-white/20 p-8 text-center text-sm text-white/40">
                                Layanan unggulan belum tersedia.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── CLIENTS ── */}
            <section className="relative overflow-hidden border-b border-border bg-base">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                                Klien
                            </p>
                            <h2 className="text-2xl font-bold text-text">
                                Dipercaya oleh berbagai perusahaan
                            </h2>
                        </div>
                        <Link
                            href={route("clients.index")}
                            className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-muted transition hover:border-primary/30 hover:text-primary"
                        >
                            Semua klien →
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
                        {(clients || []).slice(0, 6).map((client) => (
                            <div
                                key={client.id}
                                className="group flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface/60 px-4 py-5 text-center transition hover:border-primary/25 hover:bg-surface"
                            >
                                {/* Placeholder logo circle */}
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.08] text-sm font-bold text-primary">
                                    {client.name?.[0]?.toUpperCase()}
                                </div>
                                <span className="text-xs font-medium text-muted group-hover:text-text">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                        {!clients?.length && (
                            <div className="col-span-full rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted">
                                Belum ada data klien.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── GALLERY ── */}
            <section className="border-b border-border bg-surface/30">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                                Galeri
                            </p>
                            <h2 className="text-2xl font-bold text-text">
                                Dokumentasi pekerjaan dan kegiatan
                            </h2>
                        </div>
                        <Link
                            href={route("gallery.index")}
                            className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-muted transition hover:border-primary/30 hover:text-primary"
                        >
                            Lihat galeri →
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {(featuredGalleries || []).map((gallery) => (
                            <article
                                key={gallery.id}
                                className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:border-primary/25"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-base">
                                    {gallery.image_path ? (
                                        <img
                                            src={gallery.image_path}
                                            alt={gallery.title}
                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center">
                                            {/* Placeholder with icon */}
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                className="h-12 w-12 text-primary/20"
                                            >
                                                <rect
                                                    x="3"
                                                    y="3"
                                                    width="18"
                                                    height="18"
                                                    rx="2"
                                                    ry="2"
                                                />
                                                <circle
                                                    cx="8.5"
                                                    cy="8.5"
                                                    r="1.5"
                                                />
                                                <polyline points="21 15 16 10 5 21" />
                                            </svg>
                                        </div>
                                    )}
                                    {/* Category overlay */}
                                    <div className="absolute left-4 top-4">
                                        <span className="rounded-full border border-primary/20 bg-base/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                                            {gallery.category || "Umum"}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-semibold text-text">
                                        {gallery.title}
                                    </h3>
                                    <Link
                                        href={route("gallery.index")}
                                        className="mt-3 inline-flex items-center text-sm text-muted transition hover:text-primary"
                                    >
                                        Lihat galeri →
                                    </Link>
                                </div>
                            </article>
                        ))}
                        {!featuredGalleries?.length && (
                            <div className="col-span-full rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted">
                                Belum ada data galeri.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── EVENTS ── */}
            <section className="relative overflow-hidden border-b border-border bg-base">
                {/* Decorative circuit lines */}
                <CircuitDecor className="absolute left-0 bottom-0 w-56 text-primary/[0.08] opacity-60" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                                Acara
                            </p>
                            <h2 className="text-2xl font-bold text-text">
                                Agenda dan kegiatan terbaru
                            </h2>
                        </div>
                        <Link
                            href={route("events.index")}
                            className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-muted transition hover:border-primary/30 hover:text-primary"
                        >
                            Semua acara →
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {(latestEvents || []).map((event, i) => (
                            <article
                                key={event.id}
                                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 transition hover:border-primary/30"
                            >
                                {/* Number watermark */}
                                <div className="pointer-events-none absolute right-4 top-2 font-mono text-7xl font-bold text-primary/[0.05] select-none">
                                    {String(i + 1).padStart(2, "0")}
                                </div>

                                {/* Date badge */}
                                <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/[0.07] px-3 py-1.5">
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-3.5 w-3.5 text-primary"
                                    >
                                        <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z" />
                                    </svg>
                                    <span className="text-[11px] font-mono text-primary">
                                        {formatLongDate(event.event_date)}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-text">
                                    {event.title}
                                </h3>
                                {event.location && (
                                    <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                                        <svg
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-3 w-3 text-primary/60"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {event.location}
                                    </p>
                                )}
                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                                    {event.description}
                                </p>
                                <Link
                                    href={route("events.index")}
                                    className="mt-4 inline-flex items-center text-sm font-medium text-primary/70 transition hover:text-primary"
                                >
                                    Detail acara →
                                </Link>
                            </article>
                        ))}
                        {!latestEvents?.length && (
                            <div className="col-span-full rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted">
                                Belum ada acara yang dipublikasikan.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── ARTICLES ── */}
            <section className="border-b border-border bg-surface/30">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                                Artikel
                            </p>
                            <h2 className="text-2xl font-bold text-text">
                                Wawasan dan tips dari tim kami
                            </h2>
                        </div>
                        <Link
                            href={route("articles.index")}
                            className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-muted transition hover:border-primary/30 hover:text-primary"
                        >
                            Semua artikel →
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {(latestArticles || []).map((article) => (
                            <article
                                key={article.id}
                                className="group flex flex-col rounded-3xl border border-border bg-surface p-6 transition hover:border-primary/25"
                            >
                                {/* Category + date row */}
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                                        {article.category || "Artikel"}
                                    </span>
                                    <span className="text-[11px] text-muted">
                                        {article.published_at ||
                                            article.created_at}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold leading-snug text-text">
                                    {article.title}
                                </h3>
                                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">
                                    {article.excerpt || article.content}
                                </p>

                                {/* Author row */}
                                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                            {article.author?.[0]?.toUpperCase() ||
                                                "A"}
                                        </div>
                                        <span className="text-xs text-muted">
                                            {article.author || "Admin"}
                                        </span>
                                    </div>
                                    <Link
                                        href={route(
                                            "articles.show",
                                            article.slug,
                                        )}
                                        className="text-sm font-medium text-primary/70 transition group-hover:text-primary"
                                    >
                                        Baca →
                                    </Link>
                                </div>
                            </article>
                        ))}
                        {!latestArticles?.length && (
                            <div className="col-span-full rounded-3xl border border-dashed border-border p-10 text-center text-sm text-muted">
                                Belum ada artikel terbaru.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── CONTACT CTA — Accent BG ── */}
            <section className="relative overflow-hidden bg-[#0c1629]">
                {/* Grid */}
                <GridPattern className="text-primary/[0.06]" />

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
                </div>

                {/* Top shimmer */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                        <div className="space-y-5">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                                Kontak
                            </p>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                                Siap memulai proyek bersama Wynnsea?
                            </h2>
                            <p className="max-w-xl text-sm leading-7 text-white/60">
                                Hubungi tim kami untuk diskusi kebutuhan
                                digital, konsultasi teknis, atau sekedar
                                berkenalan. Kami siap membantu.
                            </p>

                            {/* Contact info pills */}
                            <div className="flex flex-wrap gap-3 pt-1">
                                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70">
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-3.5 w-3.5 text-primary"
                                    >
                                        <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                    </svg>
                                    {contact?.email || "hello@wynnsea.com"}
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70">
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-3.5 w-3.5 text-primary"
                                    >
                                        <path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" />
                                        <path d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
                                    </svg>
                                    {contact?.phone || "+62 812-3456-7890"}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 lg:items-end">
                            <Link
                                href={route("kontak")}
                                className="group relative overflow-hidden rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/30 transition hover:shadow-primary/50"
                            >
                                <span className="relative z-10">
                                    Hubungi Sekarang
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition group-hover:opacity-100" />
                            </Link>
                            <Link
                                href={route("about")}
                                className="rounded-2xl border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-medium text-white/70 transition hover:border-white/25 hover:text-white"
                            >
                                Pelajari lebih lanjut
                            </Link>
                        </div>
                    </div>

                    {/* Contact detail cards */}
                    <div className="mt-10 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                                Alamat
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/70">
                                {contact?.address ||
                                    "Jl. Teknologi Digital No. 42, Jakarta Selatan, DKI Jakarta 12345"}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                                Jam Operasional
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/70">
                                Senin – Jumat{" "}
                                <span className="text-white">
                                    08.00 – 17.00 WIB
                                </span>
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                                Respons Rata-rata
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/70">
                                Tim kami merespons dalam{" "}
                                <span className="text-white">1 × 24 jam</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
