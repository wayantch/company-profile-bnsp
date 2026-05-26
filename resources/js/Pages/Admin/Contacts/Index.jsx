import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, router } from "@inertiajs/react";

const formatDate = (value) => {
    if (!value) {
        return "-";
    }

    return new Date(value).toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

export default function Index({ contacts = [] }) {
    const handleDelete = (id) => {
        if (window.confirm("Hapus pesan ini?")) {
            router.delete(route("admin.contacts.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Pesan Kontak" />

            <PageHeader
                title="Pesan Kontak"
                subtitle="Daftar pesan yang masuk dari halaman kontak publik."
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Kontak" },
                ]}
            />

            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <Card className="border-stone-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-stone-900">
                                Semua Pesan
                            </h3>
                            <p className="mt-1 text-sm text-stone-500">
                                Total pesan: {contacts.length}
                            </p>
                        </div>
                        <Badge variant="muted">Index Page</Badge>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
                        <table className="min-w-full divide-y divide-stone-200 text-sm">
                            <thead className="bg-stone-50 text-stone-500">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium">Nama</th>
                                    <th className="px-4 py-3 text-left font-medium">Email</th>
                                    <th className="px-4 py-3 text-left font-medium">Subjek</th>
                                    <th className="px-4 py-3 text-left font-medium">Status</th>
                                    <th className="px-4 py-3 text-left font-medium">Diterima</th>
                                    <th className="px-4 py-3 text-left font-medium">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 bg-white">
                                {contacts.length ? (
                                    contacts.map((contact) => (
                                        <tr
                                            key={contact.id}
                                            className="hover:bg-stone-50/80"
                                        >
                                            <td className="px-4 py-3 font-medium text-stone-900">
                                                {contact.name}
                                            </td>
                                            <td className="px-4 py-3 text-stone-600">
                                                {contact.email}
                                            </td>
                                            <td className="px-4 py-3 text-stone-600">
                                                {contact.subject}
                                            </td>
                                            <td className="px-4 py-3">
                                                <Badge
                                                    variant={
                                                        contact.is_read
                                                            ? "muted"
                                                            : "danger"
                                                    }
                                                >
                                                    {contact.is_read
                                                        ? "Dibaca"
                                                        : "Baru"}
                                                </Badge>
                                            </td>
                                            <td className="px-4 py-3 text-stone-500">{formatDate(contact.created_at)}</td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <Link href={route('admin.contacts.show', contact.id)} className="rounded-xl border border-stone-200 px-3 py-2 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Lihat</Link>
                                                    <button type="button" onClick={() => handleDelete(contact.id)} className="rounded-xl border border-rose-200 px-3 py-2 text-xs font-medium text-rose-600 transition hover:border-rose-300 hover:bg-rose-50">Hapus</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            className="px-4 py-10 text-center text-stone-500"
                                            colSpan={5}
                                        >
                                            Belum ada pesan masuk.
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
