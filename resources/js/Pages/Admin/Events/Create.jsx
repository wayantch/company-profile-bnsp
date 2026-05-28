import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        event_date: "",
        location: "",
        is_published: false,
        thumbnail: null,
    });

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
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Form Event Baru
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    Lengkapi informasi event agar siap
                                    dipublikasikan.
                                </p>
                            </div>
                            <Badge variant="muted">Create</Badge>
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
                                    onChange={(event) =>
                                        setData("title", event.target.value)
                                    }
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
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
                                    <span className="block text-sm font-medium text-stone-700">
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
                                        onChange={(event) =>
                                            setData(
                                                "location",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400"
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
                                <span className="block text-sm font-medium text-stone-700">
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
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm leading-7 text-stone-900 outline-none transition focus:border-stone-400"
                                    placeholder="Tulis deskripsi agenda event"
                                />
                                {errors.description && (
                                    <p className="text-xs text-rose-600">
                                        {errors.description}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-stone-700">
                                    Thumbnail
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) =>
                                        setData(
                                            "thumbnail",
                                            event.target.files?.[0] ?? null,
                                        )
                                    }
                                    className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 file:mr-4 file:rounded-xl file:border-0 file:bg-stone-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-stone-50"
                                />
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
                                    onChange={(event) =>
                                        setData(
                                            "is_published",
                                            event.target.checked,
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
                                    Simpan Event
                                </button>
                                <Link
                                    href={route("admin.events.index")}
                                    className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                >
                                    Batal
                                </Link>
                            </div>
                        </form>
                    </Card>

                    <Card className="overflow-hidden border-border bg-surface p-6 text-text shadow-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Preview
                        </p>
                        <h4 className="mt-3 text-3xl font-semibold text-white">
                            {data.title || "Judul event akan tampil di sini"}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-stone-300">
                            <span>{data.event_date || "Tanggal event"}</span>
                            <span>{data.location || "Lokasi event"}</span>
                        </div>

                        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                                Deskripsi
                            </p>
                            <p className="mt-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-stone-300">
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
