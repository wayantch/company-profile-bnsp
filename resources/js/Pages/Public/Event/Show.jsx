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
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <Link
                        href={route("events.index")}
                        className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                        Kembali ke daftar event
                    </Link>

                    <article className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                        {event.thumbnail && (
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="h-72 w-full object-cover sm:h-96"
                            />
                        )}

                        <div className="p-6 sm:p-8">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                {formatDate(event.event_date)}
                            </p>
                            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
                                {event.title}
                            </h1>
                            <p className="mt-4 text-sm text-cyan-300 [overflow-wrap:anywhere]">
                                {event.location || "Lokasi akan diumumkan"}
                            </p>

                            <div className="mt-8 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-slate-300">
                                {event.description}
                            </div>
                        </div>
                    </article>

                    <div className="mt-10">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Event Lainnya
                        </p>
                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            {relatedEvents.length ? (
                                relatedEvents.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={route("events.show", item.id)}
                                        className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/50"
                                    >
                                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                                            {formatDate(item.event_date)}
                                        </p>
                                        <p className="mt-3 text-lg font-semibold text-white line-clamp-2">
                                            {item.title}
                                        </p>
                                        <p className="mt-3 text-sm text-slate-300 line-clamp-3 [overflow-wrap:anywhere]">
                                            {item.description}
                                        </p>
                                    </Link>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-sm text-slate-400 md:col-span-3">
                                    Belum ada event terkait.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
