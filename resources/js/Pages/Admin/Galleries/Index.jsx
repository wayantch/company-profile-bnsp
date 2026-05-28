import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ galleries = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus foto galeri ini?")) {
            router.delete(route("admin.galleries.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Kelola Gallery" />

            <PageHeader
                title="Kelola Gallery"
                subtitle="Koleksi foto dokumentasi perusahaan."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Gallery" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Galeri
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Semua Foto
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Total item: {galleries.length}
                                </p>
                            </div>

                            <Link
                                href={route("admin.galleries.create")}
                                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Tambah Foto
                            </Link>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {galleries.length ? (
                                galleries.map((gallery) => (
                                    <article
                                        key={gallery.id}
                                        className="overflow-hidden rounded-3xl border border-border bg-base/80 transition hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white"
                                    >
                                        <div className="aspect-[4/3] bg-secondary/60">
                                            {gallery.image_path ? (
                                                <img
                                                    src={gallery.image_path}
                                                    alt={gallery.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary/80 to-base text-xs uppercase tracking-[0.24em] text-muted">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-center justify-between gap-3">
                                                <Badge variant="accent">
                                                    {gallery.category || "Umum"}
                                                </Badge>
                                                <Badge variant="muted">
                                                    Order {gallery.order ?? 0}
                                                </Badge>
                                            </div>

                                            <h4 className="mt-4 line-clamp-2 text-xl font-semibold tracking-tight text-text [overflow-wrap:anywhere]">
                                                {gallery.title}
                                            </h4>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                <Link
                                                    href={route(
                                                        "admin.galleries.show",
                                                        gallery.id,
                                                    )}
                                                    className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                >
                                                    Lihat
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.galleries.edit",
                                                        gallery.id,
                                                    )}
                                                    className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(gallery.id)
                                                    }
                                                    className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-300 hover:bg-rose-100"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-border bg-base/80 p-6 text-sm text-muted md:col-span-2 xl:col-span-3">
                                    Belum ada foto gallery.
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
