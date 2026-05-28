import PublicLayout from "@/Layouts/PublicLayout";

export default function Klien({ clients }) {
    return (
        <PublicLayout title="Klien Kami">
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        Klien Kami
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold text-text sm:text-5xl">
                        Mereka yang mempercayakan proyeknya pada kami
                    </h1>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {(clients || []).map((client) => (
                            <article
                                key={client.id}
                                className="overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-sm shadow-ink/5 backdrop-blur-sm"
                            >
                                <div className="aspect-[16/10] bg-base p-6">
                                    {client.logo_path ? (
                                        <img
                                            src={client.logo_path}
                                            alt={client.name}
                                            className="h-full w-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.24em] text-muted">
                                            No Logo
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                        Partner
                                    </p>
                                    <h2 className="mt-4 text-2xl font-semibold text-text [overflow-wrap:anywhere]">
                                        {client.name}
                                    </h2>
                                    <p className="mt-4 line-clamp-4 [overflow-wrap:anywhere] text-sm leading-7 text-muted">
                                        {client.description ||
                                            "Deskripsi klien belum tersedia."}
                                    </p>
                                    {client.website && (
                                        <a
                                            href={client.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-5 inline-block text-sm text-primary hover:text-primary-700 [overflow-wrap:anywhere]"
                                        >
                                            Kunjungi website
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                        {!clients?.length && (
                            <div className="rounded-3xl border border-dashed border-border bg-surface/80 p-6 text-sm text-muted md:col-span-2 xl:col-span-3">
                                Belum ada data klien.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
