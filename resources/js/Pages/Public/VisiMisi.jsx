import PublicLayout from "@/Layouts/PublicLayout";

export default function VisiMisi({ visiMisi }) {
    const missionItems = String(visiMisi?.misi || "")
        .split("\n")
        .map((item) => item.replace(/^\d+\.\s*/, "").trim())
        .filter(Boolean);

    return (
        <PublicLayout title="Visi & Misi">
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        Visi & Misi
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold text-text sm:text-5xl">
                        {visiMisi?.title || "Visi & Misi Kami"}
                    </h1>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <article className="rounded-3xl border border-border bg-surface/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Visi
                            </p>
                            <p className="mt-4 text-lg leading-8 text-text">
                                {visiMisi?.visi ||
                                    "Menjadi pemimpin solusi teknologi yang inovatif dan tepercaya."}
                            </p>
                        </article>

                        <article className="rounded-3xl border border-border bg-surface/80 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Misi
                            </p>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                                {(missionItems.length
                                    ? missionItems
                                    : [
                                          "Memberikan solusi berkualitas tinggi.",
                                          "Menyediakan konsultasi strategis.",
                                          "Membangun infrastruktur modern.",
                                          "Menjaga integritas dan profesionalisme.",
                                      ]
                                ).map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
