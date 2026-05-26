import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link } from "@inertiajs/react";

export default function Show({ client, relatedClients = [] }) {
    return (
        <AdminLayout>
            <Head title={client.name} />

            <PageHeader
                title={client.name}
                subtitle="Detail klien untuk meninjau profil yang tampil ke publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Klien", url: route("admin.clients.index") },
                    { label: "Detail" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr]">
                    <Card className="overflow-hidden border-stone-200 bg-white shadow-sm">
                        {client.logo_path && (
                            <div className="h-96 w-full bg-white p-10">
                                <img
                                    src={client.logo_path}
                                    alt={client.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        )}

                        <div className="p-6 lg:p-8">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="accent">
                                    Order {client.order ?? 0}
                                </Badge>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 [overflow-wrap:anywhere]">
                                {client.name}
                            </h2>

                            {client.website && (
                                <a
                                    href={client.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-block text-sm text-cyan-700 hover:text-cyan-600 [overflow-wrap:anywhere]"
                                >
                                    {client.website}
                                </a>
                            )}

                            <div className="mt-8 whitespace-pre-wrap rounded-3xl border border-stone-200 bg-stone-50 p-5 text-sm leading-8 text-stone-700 [overflow-wrap:anywhere]">
                                {client.description ||
                                    "Deskripsi belum tersedia."}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={route(
                                        "admin.clients.edit",
                                        client.id,
                                    )}
                                    className="rounded-2xl bg-stone-900 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                                >
                                    Edit Klien
                                </Link>
                                <Link
                                    href={route("admin.clients.index")}
                                    className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900"
                                >
                                    Kembali
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <aside className="space-y-4">
                        <Card className="border-stone-200 bg-white p-6 shadow-sm">
                            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                                Klien Lainnya
                            </p>
                            <div className="mt-4 space-y-4">
                                {relatedClients.length ? (
                                    relatedClients.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "admin.clients.show",
                                                item.id,
                                            )}
                                            className="block rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:border-stone-400 hover:bg-white"
                                        >
                                            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                                                Order {item.order ?? 0}
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-stone-900 [overflow-wrap:anywhere]">
                                                {item.name}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-stone-500">
                                        Belum ada klien lainnya.
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
