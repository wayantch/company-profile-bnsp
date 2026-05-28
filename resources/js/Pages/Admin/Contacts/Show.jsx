import AdminLayout from "@/Layouts/AdminLayout";
import PageHeader from "@/Components/Layout/PageHeader";
import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Show({ contact }) {
    const { data, setData, patch, processing } = useForm({
        is_read: !!contact.is_read,
    });

    const toggleRead = (e) => {
        e.preventDefault();
        patch(route("admin.contacts.update", contact.id));
    };

    return (
        <AdminLayout>
            <Head title={`Pesan dari ${contact.name}`} />

            <PageHeader
                title={`Pesan dari ${contact.name}`}
                subtitle={contact.subject}
                breadcrumbs={[
                    { label: "Dashboard", url: route("dashboard") },
                    { label: "Kontak", url: route("admin.contacts.index") },
                    { label: "Detail" },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <Card className="border-border/80 bg-surface/90 p-6 shadow-sm shadow-ink/5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                                    Pesan Kontak
                                </p>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight text-text">
                                    Detail Pesan
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    Melihat dan kelola pesan kontak.
                                </p>
                            </div>
                            <Badge variant="muted">Detail</Badge>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold text-text">
                                    Nama
                                </h4>
                                <div className="mt-1 text-text/80">
                                    {contact.name}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text">
                                    Email
                                </h4>
                                <div className="mt-1 text-text/80">
                                    {contact.email}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text">
                                    Subjek
                                </h4>
                                <div className="mt-1 text-text/80">
                                    {contact.subject}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text">
                                    Pesan
                                </h4>
                                <div className="mt-2 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-7 text-text/80">
                                    {contact.message}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <form onSubmit={toggleRead}>
                                <input
                                    type="hidden"
                                    name="is_read"
                                    value={!data.is_read}
                                />
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary/25 hover:bg-secondary/70"
                                >
                                    {contact.is_read
                                        ? "Tandai Belum Dibaca"
                                        : "Tandai Dibaca"}
                                </button>
                            </form>

                            <Link
                                href={route("admin.contacts.index")}
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
                            <div>
                                Diterima:{" "}
                                {new Date(contact.created_at).toLocaleString(
                                    "id-ID",
                                )}
                            </div>
                            <div className="mt-2">
                                Status: {contact.is_read ? "Dibaca" : "Baru"}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
