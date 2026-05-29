import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

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

    const [previewUrl, setPreviewUrl] = useState(event.thumbnail || null);

    useEffect(() => {
        return () => {
            if (previewUrl && typeof previewUrl !== "string") {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

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
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Agenda
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Form Edit Event
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
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
                                <span className="block text-sm font-medium text-text">
                                    Judul Event
                                </span>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(formEvent) =>
                                        setData("title", formEvent.target.value)
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-primary/30 focus:bg-white"
                                />
                                {errors.title && (
                                    <p className="text-xs text-rose-600">
                                        {errors.title}
                                    </p>
                                )}
                            </label>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-text">
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
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition focus:border-primary/30 focus:bg-white"
                                    />
                                    {errors.event_date && (
                                        <p className="text-xs text-rose-600">
                                            {errors.event_date}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-text">
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
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-primary/30 focus:bg-white"
                                    />
                                    {errors.location && (
                                        <p className="text-xs text-rose-600">
                                            {errors.location}
                                        </p>
                                    )}
                                </label>
                            </div>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
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
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm leading-7 text-text outline-none transition placeholder:text-muted/70 focus:border-primary/30 focus:bg-white"
                                />
                                {errors.description && (
                                    <p className="text-xs text-rose-600">
                                        {errors.description}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Thumbnail baru
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(formEvent) => {
                                        const file =
                                            formEvent.target.files?.[0] ?? null;
                                        setData("thumbnail", file);
                                        if (file) {
                                            setPreviewUrl(
                                                URL.createObjectURL(file),
                                            );
                                        } else {
                                            setPreviewUrl(
                                                event.thumbnail || null,
                                            );
                                        }
                                    }}
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-muted file:mr-4 file:rounded-xl file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                                />
                                {event.thumbnail && (
                                    <a
                                        href={event.thumbnail}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block text-xs font-semibold text-primary underline decoration-primary/30 underline-offset-4"
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

                            <label className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-4 py-3">
                                <input
                                    type="checkbox"
                                    checked={data.is_published}
                                    onChange={(formEvent) =>
                                        setData(
                                            "is_published",
                                            formEvent.target.checked,
                                        )
                                    }
                                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
                                />
                                <span className="text-sm text-text">
                                    Publikasikan event ini
                                </span>
                            </label>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    Simpan Perubahan
                                </button>
                                <Link
                                    href={route("admin.events.index")}
                                    className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </form>
                    </Card>

                    <Card className="overflow-hidden border-border/80 bg-surface/90 p-6 text-text shadow-sm shadow-ink/5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                            Preview
                        </p>
                        {previewUrl ? (
                            <div className="mt-3 overflow-hidden rounded-3xl">
                                <img
                                    src={previewUrl}
                                    alt={data.title || event.title}
                                    className="h-44 w-full object-cover"
                                />
                            </div>
                        ) : null}

                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-text">
                            {data.title || event.title}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-muted">
                            <span>{data.event_date || event.event_date}</span>
                            <span>
                                {data.location || event.location || "TBD"}
                            </span>
                        </div>

                        <div className="mt-6 rounded-3xl border border-border bg-base/80 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Deskripsi
                            </p>
                            <p className="mt-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-text/80">
                                {data.description || event.description}
                            </p>
                        </div>

                        {event.thumbnail &&
                            (!previewUrl ? (
                                <img
                                    src={event.thumbnail}
                                    alt={event.title}
                                    className="mt-6 h-56 w-full rounded-3xl object-cover"
                                />
                            ) : null)}
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
