import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Edit({ product }) {
    const { data, setData, post, processing, errors } = useForm({
        name: product.name || "",
        short_description: product.short_description || "",
        full_description: product.full_description || "",
        icon: product.icon || "",
        is_featured: product.is_featured || false,
        order: product.order ?? 0,
        thumbnail: product.thumbnail || null,
    });

    const [previewUrl, setPreviewUrl] = useState(product.thumbnail || null);

    useEffect(() => {
        return () => {
            if (previewUrl && typeof previewUrl !== "string") {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("admin.products.update", product.id), {
            _method: "put",
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit - ${product.name}`} />

            <PageHeader
                title={`Edit Produk`}
                subtitle={`Mengubah data produk ${product.name}`}
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Produk", url: route("admin.products.index") },
                    { label: "Edit" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Produk
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Edit Produk
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Perbarui informasi produk.
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
                                    Nama Produk
                                </span>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                />
                                {errors.name && (
                                    <p className="text-xs text-rose-600">
                                        {errors.name}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Ringkasan
                                </span>
                                <input
                                    type="text"
                                    value={data.short_description}
                                    onChange={(e) =>
                                        setData(
                                            "short_description",
                                            e.target.value,
                                        )
                                    }
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                />
                                {errors.short_description && (
                                    <p className="text-xs text-rose-600">
                                        {errors.short_description}
                                    </p>
                                )}
                            </label>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Deskripsi Lengkap
                                </span>
                                <textarea
                                    value={data.full_description}
                                    onChange={(e) =>
                                        setData(
                                            "full_description",
                                            e.target.value,
                                        )
                                    }
                                    rows={6}
                                    className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm leading-7 text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                />
                                {errors.full_description && (
                                    <p className="text-xs text-rose-600">
                                        {errors.full_description}
                                    </p>
                                )}
                            </label>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-text">
                                        Ikon / Kategori
                                    </span>
                                    <input
                                        type="text"
                                        value={data.icon}
                                        onChange={(e) =>
                                            setData("icon", e.target.value)
                                        }
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                    />
                                </label>

                                <label className="space-y-2 block">
                                    <span className="block text-sm font-medium text-text">
                                        Urutan
                                    </span>
                                    <input
                                        type="number"
                                        min={0}
                                        value={data.order}
                                        onChange={(e) =>
                                            setData("order", e.target.value)
                                        }
                                        className="w-full rounded-2xl border border-border bg-base px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary/30 focus:bg-white"
                                    />
                                </label>
                            </div>

                            <div className="flex items-center gap-4">
                                <label className="inline-flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={data.is_featured}
                                        onChange={(e) =>
                                            setData(
                                                "is_featured",
                                                e.target.checked,
                                            )
                                        }
                                        className="h-4 w-4 rounded border-border text-primary"
                                    />
                                    <span className="text-sm text-text">
                                        Featured
                                    </span>
                                </label>
                            </div>

                            <label className="space-y-2 block">
                                <span className="block text-sm font-medium text-text">
                                    Thumbnail
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file =
                                            e.target.files?.[0] ?? null;
                                        setData("thumbnail", file);
                                        if (file) {
                                            const url =
                                                URL.createObjectURL(file);
                                            setPreviewUrl(url);
                                        } else {
                                            setPreviewUrl(
                                                product.thumbnail || null,
                                            );
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

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    Simpan Perubahan
                                </button>
                                <Link
                                    href={route("admin.products.index")}
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
                            <div className="rounded-xl overflow-hidden mt-3">
                                <img
                                    src={previewUrl}
                                    alt={data.name || product.name}
                                    className="w-full h-40 object-cover rounded-xl"
                                />
                            </div>
                        ) : null}
                        <h4 className="mt-3 text-3xl font-bold tracking-tight text-text [overflow-wrap:anywhere]">
                            {data.name || "Nama produk akan tampil di sini"}
                        </h4>
                        <p className="mt-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-8 text-muted">
                            {data.short_description ||
                                "Ringkasan produk akan muncul di sini."}
                        </p>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
