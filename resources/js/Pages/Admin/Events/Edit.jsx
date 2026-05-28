import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ event }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "put",
        title: event.title || "",
        description: event.description || "",
        event_date: event.event_date || "",
        location: event.location || "",
        is_published: Boolean(event.is_published),
        thumbnail: null,
    });

    const handleSubmit = (formEvent) => {
        formEvent.preventDefault();

        post(route("admin.events.update", event.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit Event - ${event.title}`} />

            <PageHeader
                title={`Edit Event: ${event.title}`}
                subtitle="Perbarui detail event dan sesuaikan tampilannya di publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Event", url: route("admin.events.index") },
                    { label: "Edit" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Form Edit Event
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    ID {event.id}
                                </p>
                            </div>
                            <Badge
                                variant={
                                    event.is_published ? "primary" : "muted"
                                }
                            >
                                {event.is_published ? "Published" : "Draft"}
                            </Badge>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >
                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Judul Event
                                </span>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(formEvent) =>
                                        setData("title", formEvent.target.value)
                                    }
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
                                />
                                {errors.title && (
                                    <p className="text-xs text-rose-600">
                                        {errors.title}
                                    </p>
                                )}
                            </label>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-stone-700">
                                        Tanggal Event
                                    </span>
                                    <input
                                        type="date"
                                        value={data.event_date}
                                        onChange={(formEvent) =>
                                            setData(
                                                "event_date",
                                                formEvent.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
                                    />
                                    {errors.event_date && (
                                        <p className="text-xs text-rose-600">
                                            {errors.event_date}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-stone-700">
                                        Lokasi
                                    </span>
                                    <input
                                        type="text"
                                        value={data.location}
                                        onChange={(formEvent) =>
                                            setData(
                                                "location",
                                                formEvent.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
                                    />
                                    {errors.location && (
                                        <p className="text-xs text-rose-600">
                                            {errors.location}
                                        </p>
                                    )}
                                </label>
                            </div>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Deskripsi
                                </span>
                                <textarea
                                    value={data.description}
                                    onChange={(formEvent) =>
                                        setData(
                                            "description",
                                            formEvent.target.value,
                                        )
                                    }
                                    rows={10}
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm leading-7 text-stone-900 outline-none transition focus:border-stone-400"
                                />
                                {errors.description && (
                                    <p className="text-xs text-rose-600">
                                        {errors.description}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Thumbnail baru
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(formEvent) =>
                                        setData(
                                            "thumbnail",
                                            formEvent.target.files?.[0] ?? null,
                                        )
                                    }
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 file:mr-4 file:rounded-xl file:border-0 file:bg-stone-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-stone-50"
                                />
                                {event.thumbnail && (
                                    <a
                                        href={event.thumbnail}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block text-xs font-medium text-stone-900 underline decoration-stone-300 underline-offset-4"
                                    >
                                        Thumbnail saat ini
                                    </a>
                                )}
                                {errors.thumbnail && (
                                    <p className="text-xs text-rose-600">
                                        {errors.thumbnail}
                                    </p>
                                )}
                            </label>

                            <label className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={data.is_published}
                                    onChange={(formEvent) =>
                                        setData(
                                            "is_published",
                                            formEvent.target.checked,
                                        )
                                    }
                                    className="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-400"
                                />
                                <span className="text-sm text-stone-700">
                                    Publikasikan event ini
                                </span>
                            </label>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    Simpan Perubahan
                                </button>
                                <Link
                                    href={route("admin.events.index")}
                                    className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </form>
                    </Card>

                    <Card className="overflow-hidden border-border bg-surface p-6 text-text shadow-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Preview
                        </p>
                        <h4 className="mt-3 text-3xl font-semibold text-white">
                            {data.title || event.title}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-stone-300">
                            <span>{data.event_date || event.event_date}</span>
                            <span>
                                {data.location || event.location || "TBD"}
                            </span>
                        </div>

                        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                Deskripsi
                            </p>
                            <p className="mt-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-stone-300">
                                {data.description || event.description}
                            </p>
                        </div>

                        {event.thumbnail && (
                            <img
                                src={event.thumbnail}
                                alt={event.title}
                                className="mt-6 h-56 w-full rounded-3xl object-cover"
                            />
                        )}
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
