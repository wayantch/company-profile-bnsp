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

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                Pesan Masuk
                            </p>
                            <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                Semua Pesan
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-muted">
                                Total pesan: {contacts.length}
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
                                        Email
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Subjek
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Diterima
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.2em]">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border bg-base/80">
                                {contacts.length ? (
                                    contacts.map((contact) => (
                                        <tr
                                            key={contact.id}
                                            className="hover:bg-secondary/40"
                                        >
                                            <td className="px-4 py-3 font-medium text-text">
                                                {contact.name}
                                            </td>
                                            <td className="px-4 py-3 text-muted">
                                                {contact.email}
                                            </td>
                                            <td className="px-4 py-3 text-muted">
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
                                            <td className="px-4 py-3 text-muted">
                                                {formatDate(contact.created_at)}
                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "admin.contacts.show",
                                                            contact.id,
                                                        )}
                                                        className="rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                                    >
                                                        Lihat
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDelete(
                                                                contact.id,
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
