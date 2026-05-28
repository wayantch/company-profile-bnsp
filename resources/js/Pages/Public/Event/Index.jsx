import { Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

const formatDate = (value) => {
    if (!value) {
        return "-";
    }

    return new Date(value).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};

export default function Index({ events }) {
    return (
        <PublicLayout title="Acara">
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        Acara
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold text-text sm:text-5xl">
                        Agenda kegiatan dan lokakarya
                    </h1>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {(events?.data || []).map((event) => (
                            <article
                                key={event.id}
                                className="overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-sm shadow-ink/5 backdrop-blur-sm"
                            >
                                <div className="aspect-[16/10] bg-secondary/60">
                                    {event.thumbnail ? (
                                        <img
                                            src={event.thumbnail}
                                            alt={event.title}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary/70 to-surface text-xs uppercase tracking-[0.24em] text-muted">
                                            Acara
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                                {formatDate(event.event_date)}
                                            </p>
                                            <h2 className="mt-3 text-2xl font-semibold text-text">
                                                {event.title}
                                            </h2>
                                        </div>
                                        <p className="text-sm text-primary [overflow-wrap:anywhere]">
                                            {event.location || "Akan diumumkan"}
                                        </p>
                                    </div>

                                    <p className="mt-4 line-clamp-5 [overflow-wrap:anywhere] text-sm leading-7 text-muted">
                                        {event.description}
                                    </p>
                                    <Link
                                        href={route("events.show", event.id)}
                                        className="mt-5 inline-block text-sm text-primary hover:text-primary-700"
                                    >
                                        Lihat detail acara
                                    </Link>
                                </div>
                            </article>
                        ))}
                        {!events?.data?.length && (
                            <div className="rounded-3xl border border-dashed border-border bg-surface/80 p-6 text-sm text-muted md:col-span-2 xl:col-span-3">
                                Belum ada acara yang dipublikasikan.
                            </div>
                        )}
                    </div>

                    {events?.links?.length > 3 && (
                        <div className="mt-10 flex flex-wrap gap-2">
                            {events.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || ""}
                                    preserveScroll
                                    className={`rounded-lg border px-4 py-2 text-sm transition ${link.active ? "border-primary bg-primary text-white" : "border-border bg-surface text-text"}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
