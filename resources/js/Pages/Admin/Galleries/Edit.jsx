import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ gallery }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "put",
        title: gallery.title || "",
        category: gallery.category || "",
        order: gallery.order ?? 0,
        image: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        post(route("admin.galleries.update", gallery.id), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit Gallery - ${gallery.title}`} />

            <PageHeader
                title={`Edit Gallery: ${gallery.title}`}
                subtitle="Perbarui metadata dan gambar gallery sesuai kebutuhan publikasi."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Gallery", url: route("admin.galleries.index") },
                    { label: "Edit" },
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
                                    Form Edit Gallery
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    ID {gallery.id}
                                </p>
                            </div>
                            <Badge variant="muted">Ubah</Badge>
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
                                    Ganti Gambar
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
                                {gallery.image_path && (
                                    <a
                                        href={gallery.image_path}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block text-xs font-semibold text-text underline decoration-border underline-offset-4"
                                    >
                                        Gambar saat ini
                                    </a>
                                )}
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
                                    Simpan Perubahan
                                </button>
                                <Link
                                    href={route("admin.galleries.index")}
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
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-text [overflow-wrap:anywhere]">
                            {data.title || gallery.title}
                        </h4>
                        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-muted">
                            <span>
                                {data.category || gallery.category || "Umum"}
                            </span>
                            <span>Order {data.order || 0}</span>
                        </div>

                        {gallery.image_path && (
                            <img
                                src={gallery.image_path}
                                alt={gallery.title}
                                className="mt-6 h-64 w-full rounded-3xl object-cover"
                            />
                        )}
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
