import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ clients = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus klien ini?")) {
            router.delete(route("admin.clients.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Kelola Klien" />

            <PageHeader
                title="Kelola Klien"
                subtitle="Daftar mitra dan klien yang tampil di website."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Klien" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8">
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">
                                    Semua Klien
                                </h3>
                                <p className="mt-1 text-sm text-stone-500">
                                    Total klien: {clients.length}
                                </p>
                            </div>

                            <Link
                                href={route("admin.clients.create")}
                                className="inline-flex items-center justify-center rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                            >
                                Tambah Klien
                            </Link>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {clients.length ? (
                                clients.map((client) => (
                                    <article
                                        key={client.id}
                                        className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white"
                                    >
                                        <div className="aspect-[16/10] bg-stone-200">
                                            {client.logo_path ? (
                                                <img
                                                    src={client.logo_path}
                                                    alt={client.name}
                                                    className="h-full w-full object-contain bg-white p-6"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center bg-gradient-to-br from-stone-200 to-stone-100 text-xs uppercase tracking-[0.24em] text-stone-500">
                                                    No Logo
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <div className="flex items-center justify-between gap-3">
                                                <Badge variant="accent">
                                                    Order {client.order ?? 0}
                                                </Badge>
                                            </div>

                                            <h4 className="mt-4 line-clamp-2 text-xl font-semibold tracking-tight text-stone-900 [overflow-wrap:anywhere]">
                                                {client.name}
                                            </h4>

                                            <p className="mt-3 line-clamp-3 [overflow-wrap:anywhere] text-sm leading-7 text-stone-600">
                                                {client.description ||
                                                    "Deskripsi belum tersedia"}
                                            </p>

                                            <div className="mt-4 text-xs text-stone-400 [overflow-wrap:anywhere]">
                                                {client.website ||
                                                    "Website belum diisi"}
                                            </div>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                <Link
                                                    href={route(
                                                        "admin.clients.show",
                                                        client.id,
                                                    )}
                                                    className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                                >
                                                    Lihat
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.clients.edit",
                                                        client.id,
                                                    )}
                                                    className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(client.id)
                                                    }
                                                    className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-medium text-rose-600 transition hover:border-rose-300 hover:bg-rose-50"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="rounded-3xl border border-dashed border-stone-200 bg-stone-50 p-6 text-sm text-stone-500 md:col-span-2 xl:col-span-3">
                                    Belum ada klien.
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
