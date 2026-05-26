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
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Detail Produk
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    Informasi lengkap produk.
                                </p>
                            </div>
                            <Badge variant="muted">Show</Badge>
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
                                <h4 className="text-lg font-semibold text-stone-900">
                                    Deskripsi
                                </h4>
                                <p className="mt-2 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-7 text-stone-700">
                                    {product.full_description ||
                                        "Tidak ada deskripsi."}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <Link
                                href={route("admin.products.edit", product.id)}
                                className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                            >
                                Edit
                            </Link>
                            <Link
                                href={route("admin.products.index")}
                                className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                            >
                                Kembali
                            </Link>
                        </div>
                    </Card>

                    <Card className="overflow-hidden border-stone-200 bg-[#0F172A] p-6 text-stone-100 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                            Meta
                        </p>
                        <div className="mt-3 text-sm text-stone-300">
                            <div>Icon: {product.icon || "-"}</div>
                            <div className="mt-2">
                                Order: {product.order ?? 0}
                            </div>
                            <div className="mt-2">
                                Featured: {product.is_featured ? "Yes" : "No"}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
