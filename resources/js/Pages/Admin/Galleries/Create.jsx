import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        category: "",
        order: 0,
        image: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("admin.galleries.store"), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Tambah Foto Gallery" />

            <PageHeader
                title="Tambah Foto Gallery"
                subtitle="Unggah dokumentasi visual untuk ditampilkan pada halaman publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Gallery", url: route("admin.galleries.index") },
                    { label: "Tambah" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Galeri
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Form Foto Gallery
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Lengkapi metadata agar urutan foto rapi.
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
                                    Judul
                                </span>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(event) =>
                                        setData("title", event.target.value)
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                    placeholder="Kegiatan Workshop Internal"
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
                                        Kategori
                                    </span>
                                    <input
                                        type="text"
                                        value={data.category}
                                        onChange={(event) =>
                                            setData(
                                                "category",
                                                event.target.value,
                                            )
                                        }
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                        placeholder="Kegiatan"
                                    />
                                    {errors.category && (
                                        <p className="text-xs text-rose-600">
                                            {errors.category}
                                        </p>
                                    )}
                                </label>

                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-text">
                                        Urutan
                                    </span>
                                    <input
                                        type="number"
                                        min={0}
                                        value={data.order}
                                        onChange={(event) =>
                                            setData("order", event.target.value)
                                        }
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                    />
                                    {errors.order && (
                                        <p className="text-xs text-rose-600">
                                            {errors.order}
                                        </p>
                                    )}
                                </label>
                            </div>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Gambar
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) =>
                                        setData(
                                            "image",
                                            event.target.files?.[0] ?? null,
                                        )
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-muted file:mr-4 file:rounded-xl file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                                />
                                {errors.image && (
                                    <p className="text-xs text-rose-600">
                                        {errors.image}
                                    </p>
                                )}
                            </label>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    Simpan Foto
                                </button>
                                <Link
                                    href={route("admin.galleries.index")}
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
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-text [overflow-wrap:anywhere]">
                            {data.title || "Judul foto akan tampil di sini"}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-muted">
                            <span>{data.category || "Kategori"}</span>
                            <span>Order {data.order || 0}</span>
                        </div>

                        <div className="mt-6 rounded-3xl border border-border bg-base/80 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Catatan
                            </p>
                            <p className="mt-4 text-sm leading-8 text-text/80">
                                Gunakan rasio gambar konsisten agar susunan grid
                                gallery publik terlihat rapi dan profesional.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
