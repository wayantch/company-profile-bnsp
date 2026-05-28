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

export default function Show({ event, relatedEvents = [] }) {
    return (
        <PublicLayout title={event.title}>
            <section className="bg-base">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <Link
                        href={route("events.index")}
                        className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-text transition hover:border-primary/30 hover:text-primary"
                    >
                        Kembali ke daftar acara
                    </Link>

                    <article className="mt-8 overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-sm shadow-ink/5 backdrop-blur-sm">
                        {event.thumbnail && (
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="h-72 w-full object-cover sm:h-96"
                            />
                        )}

                        <div className="p-6 sm:p-8">
                            <p className="text-xs uppercase tracking-[0.25em] text-primary">
                                {formatDate(event.event_date)}
                            </p>
                            <h1 className="mt-4 text-3xl font-semibold text-text sm:text-5xl">
                                {event.title}
                            </h1>
                            <p className="mt-4 text-sm text-primary [overflow-wrap:anywhere]">
                                {event.location || "Lokasi akan diumumkan"}
                            </p>

                            <div className="mt-8 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-muted">
                                {event.description}
                            </div>
                        </div>
                    </article>

                    <div className="mt-10">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary">
                            Acara Lainnya
                        </p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            {relatedEvents.length ? (
                                relatedEvents.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={route("events.show", item.id)}
                                        className="rounded-3xl border border-border bg-surface/80 p-5 transition hover:border-primary/30 hover:bg-secondary/70"
                                    >
                                        <p className="text-xs uppercase tracking-[0.22em] text-muted">
                                            {formatDate(item.event_date)}
                                        </p>
                                        <p className="mt-3 text-lg font-semibold text-text line-clamp-2">
                                            {item.title}
                                        </p>
                                        <p className="mt-3 text-sm text-muted line-clamp-3 [overflow-wrap:anywhere]">
                                            {item.description}
                                        </p>
                                    </Link>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-border bg-surface/80 p-6 text-sm text-muted md:col-span-3">
                                    Belum ada acara terkait.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
