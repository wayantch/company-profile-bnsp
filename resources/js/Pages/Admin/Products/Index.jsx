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
                <Card className="border-stone-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-stone-900">
                                Semua Produk
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                Total produk: {products.length}
                            </p>
                        </div>
                        <Badge variant="muted">Index Page</Badge>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
                        <table className="min-w-full divide-y divide-stone-200 text-sm">
                            <thead className="bg-stone-50 text-stone-500">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Nama
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Ringkasan
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Featured
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 bg-white">
                                {products.length ? (
                                    products.map((product) => (
                                        <tr
                                            key={product.id}
                                            className="hover:bg-stone-50/80"
                                        >
                                            <td className="px-4 py-3 font-medium text-stone-900">
                                                {product.name}
                                            </td>
                                            <td className="px-4 py-3 text-stone-600">
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
                                                        ? "Yes"
                                                        : "No"}
                                                </Badge>
                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "admin.products.show",
                                                            product.id,
                                                        )}
                                                        className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                                    >
                                                        Lihat
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "admin.products.edit",
                                                            product.id,
                                                        )}
                                                        className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
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
                                                        className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-medium text-rose-600 transition hover:border-rose-300 hover:bg-rose-50"
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
                                            className="px-4 py-10 text-center text-stone-500"
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
