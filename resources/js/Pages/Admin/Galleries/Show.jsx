import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

export default function Show({ gallery, relatedGalleries = [] }) {
    return (
        <AdminLayout>
            <Head title={gallery.title} />

            <PageHeader
                title={gallery.title}
                subtitle="Detail foto gallery untuk memastikan kualitas publikasi."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Gallery", url: route("admin.galleries.index") },
                    { label: "Detail" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr]">
                    <Card className="overflow-hidden border-border/80 bg-surface/90 shadow-sm shadow-ink/5">
                        {gallery.image_path && (
                            <img
                                src={gallery.image_path}
                                alt={gallery.title}
                                className="h-96 w-full object-cover"
                            />
                        )}

                        <div className="p-6 lg:p-8">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="accent">
                                    {gallery.category || "Umum"}
                                </Badge>
                                <Badge variant="muted">
                                    Order {gallery.order ?? 0}
                                </Badge>
                            </div>

                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text [overflow-wrap:anywhere]">
                                {gallery.title}
                            </h2>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={route(
                                        "admin.galleries.edit",
                                        gallery.id,
                                    )}
                                    className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    Edit Foto
                                </Link>
                                <Link
                                    href={route("admin.galleries.index")}
                                    className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <aside className="space-y-4">
                        <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                                Foto Lainnya
                            </p>
                            <div className="mt-4 space-y-4">
                                {relatedGalleries.length ? (
                                    relatedGalleries.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "admin.galleries.show",
                                                item.id,
                                            )}
                                            className="block rounded-2xl border border-border bg-base/80 p-4 transition hover:border-primary/25 hover:bg-white"
                                        >
                                            <p className="text-xs uppercase tracking-[0.22em] text-muted">
                                                {item.category || "Umum"}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-text [overflow-wrap:anywhere]">
                                                {item.title}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted">
                                        Belum ada foto lainnya.
                                    </p>
                                )}
                            </div>
                        </Card>
                    </aside>
                </div>
            </div>
        </AdminLayout>
    );
}
