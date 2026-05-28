import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

export default function Show({ product }) {
    return (
        <AdminLayout>
            <Head title={product.name} />

            <PageHeader
                title={product.name}
                subtitle={product.short_description}
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Produk", url: route("admin.products.index") },
                    { label: product.name },
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
                                    Detail Produk
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Informasi lengkap produk.
                                </p>
                            </div>
                            <Badge variant="muted">Detail</Badge>
                        </div>

                        <div className="mt-6 space-y-4">
                            {product.thumbnail && (
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.name}
                                        className="w-full object-cover"
                                    />
                                </div>
                            )}

                            <div>
                                <h4 className="text-lg font-semibold tracking-tight text-text">
                                    Deskripsi
                                </h4>
                                <p className="mt-2 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-7 text-text/80">
                                    {product.full_description ||
                                        "Tidak ada deskripsi."}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <Link
                                href={route("admin.products.edit", product.id)}
                                className="rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Edit
                            </Link>
                            <Link
                                href={route("admin.products.index")}
                                className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                            >
                                Kembali
                            </Link>
                        </div>
                    </Card>

                    <Card className="overflow-hidden border-border/80 bg-surface/90 p-6 text-text shadow-sm shadow-ink/5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                            Meta
                        </p>
                        <div className="mt-3 text-sm text-text/80">
                            <div>Icon: {product.icon || "-"}</div>
                            <div className="mt-2">
                                Order: {product.order ?? 0}
                            </div>
                            <div className="mt-2">
                                Featured: {product.is_featured ? "Ya" : "Tidak"}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
