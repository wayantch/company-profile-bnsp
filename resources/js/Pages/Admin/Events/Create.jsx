import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        event_date: "",
        location: "",
        is_published: false,
        thumbnail: null,
    });

    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        return () => {
            if (previewUrl && typeof previewUrl !== "string") {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("admin.events.store"), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Tambah Event" />

            <PageHeader
                title="Tambah Event"
                subtitle="Buat agenda event baru untuk ditampilkan ke publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Event", url: route("admin.events.index") },
                    { label: "Tambah" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Agenda Baru
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Form Event Baru
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Lengkapi informasi event agar siap
                                    dipublikasikan.
                                </p>
                            </div>
                            <Badge variant="muted">Draft</Badge>
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
                                    onChange={(event) =>
                                        setData("title", event.target.value)
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-primary/30 focus:bg-white"
                                    placeholder="Workshop Keamanan API"
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
                                        onChange={(event) =>
                                            setData(
                                                "event_date",
                                                event.target.value,
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
                                        onChange={(event) =>
                                            setData(
                                                "location",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/70 focus:border-primary/30 focus:bg-white"
                                        placeholder="Bandung / Online"
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
                                    onChange={(event) =>
                                        setData(
                                            "description",
                                            event.target.value,
                                        )
                                    }
                                    rows={10}
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm leading-7 text-text outline-none transition placeholder:text-muted/70 focus:border-primary/30 focus:bg-white"
                                    placeholder="Tulis deskripsi agenda event"
                                />
                                {errors.description && (
                                    <p className="text-xs text-rose-600">
                                        {errors.description}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Thumbnail
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                        const file =
                                            event.target.files?.[0] ?? null;
                                        setData("thumbnail", file);
                                        if (file) {
                                            setPreviewUrl(
                                                URL.createObjectURL(file),
                                            );
                                        } else {
                                            setPreviewUrl(null);
                                        }
                                    }}
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-muted file:mr-4 file:rounded-xl file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                                />
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
                                    onChange={(event) =>
                                        setData(
                                            "is_published",
                                            event.target.checked,
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
                                    Simpan Event
                                </button>
                                <Link
                                    href={route("admin.events.index")}
                                    className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    Batal
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
                                    alt={data.title || "preview"}
                                    className="h-44 w-full object-cover"
                                />
                            </div>
                        ) : null}

                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-text">
                            {data.title || "Judul event akan tampil di sini"}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-muted">
                            <span>{data.event_date || "Tanggal event"}</span>
                            <span>{data.location || "Lokasi event"}</span>
                        </div>

                        <div className="mt-6 rounded-3xl border border-border bg-base/80 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Deskripsi
                            </p>
                            <p className="mt-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-text/80">
                                {data.description ||
                                    "Deskripsi event akan muncul di sini."}
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
