import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

export default function Show({ category }) {
    return (
        <AdminLayout>
            <Head title={`Detail Kategori - ${category.name}`} />

            <PageHeader
                title={`Detail Kategori: ${category.name}`}
                subtitle="Ringkasan master kategori yang dipakai artikel."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Kategori", url: route("admin.categories.index") },
                    { label: category.name },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                            Kategori
                        </p>
                        <h3 className="mt-2 text-3xl font-bold tracking-tight text-text">
                            {category.name}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <Badge variant="accent">
                                {category.articles_count ?? 0} Artikel
                            </Badge>
                            <Badge variant="muted">
                                Urutan {category.order ?? 0}
                            </Badge>
                        </div>

                        <div className="mt-6 rounded-3xl border border-border bg-base/80 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted">
                                Slug
                            </p>
                            <p className="mt-3 text-sm font-medium text-text">
                                {category.slug}
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href={route(
                                    "admin.categories.edit",
                                    category.id,
                                )}
                                className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Edit Kategori
                            </Link>
                            <Link
                                href={route("admin.categories.index")}
                                className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                            >
                                Kembali
                            </Link>
                        </div>
                    </Card>

                    <Card className="overflow-hidden border-border/80 bg-surface/90 p-6 text-text shadow-sm shadow-ink/5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                            Informasi
                        </p>
                        <div className="mt-4 space-y-3 rounded-3xl border border-border bg-base/80 p-5 text-sm leading-7 text-muted">
                            <p>
                                Kategori ini digunakan untuk mengelompokkan
                                artikel publik.
                            </p>
                            <p>
                                Slug dipakai pada URL/filter kategori pada
                                halaman artikel.
                            </p>
                            <p>
                                Urutan menentukan posisi tampil di dropdown
                                artikel.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
