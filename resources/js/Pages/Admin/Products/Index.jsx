import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ products = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus produk ini?")) {
            router.delete(route("admin.products.destroy", id), {
                preserveScroll: true,
            });
        }
    };
    return (
        <AdminLayout>
            <Head title="Kelola Produk" />

            <PageHeader
                title="Kelola Produk"
                subtitle="Daftar produk dan layanan utama perusahaan."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Produk" },
                ]}
            />

            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                Produk & Layanan
                            </p>
                            <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                Semua Produk
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-muted">
                                Total produk: {products.length}
                            </p>
                        </div>
                        <Badge variant="muted">Daftar</Badge>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-base/80">
                        <table className="min-w-full divide-y divide-border text-sm">
                            <thead className="bg-secondary/50 text-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Nama
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Ringkasan
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Featured
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border bg-base/80">
                                {products.length ? (
                                    products.map((product) => (
                                        <tr
                                            key={product.id}
                                            className="hover:bg-secondary/40"
                                        >
                                            <td className="px-4 py-3 font-medium text-text">
                                                {product.name}
                                            </td>
                                            <td className="px-4 py-3 text-muted">
                                                {product.short_description}
                                            </td>
                                            <td className="px-4 py-3">
                                                <Badge
                                                    variant={
                                                        product.is_featured
                                                            ? "primary"
                                                            : "muted"
                                                    }
                                                >
                                                    {product.is_featured
                                                        ? "Ya"
                                                        : "Tidak"}
                                                </Badge>
                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "admin.products.show",
                                                            product.id,
                                                        )}
                                                        className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                    >
                                                        Lihat
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "admin.products.edit",
                                                            product.id,
                                                        )}
                                                        className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDelete(
                                                                product.id,
                                                            )
                                                        }
                                                        className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-300 hover:bg-rose-100"
                                                    >
                                                        Hapus
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            className="px-4 py-10 text-center text-muted"
                                            colSpan={3}
                                        >
                                            Belum ada produk.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
}
