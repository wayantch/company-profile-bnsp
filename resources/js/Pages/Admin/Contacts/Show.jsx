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
        patch(route('admin.contacts.update', contact.id));
    };

    return (
        <AdminLayout>
            <Head title={`Pesan dari ${contact.name}`} />

            <PageHeader
                title={`Pesan dari ${contact.name}`}
                subtitle={contact.subject}
                breadcrumbs={[
                    { label: 'Dashboard', url: route('dashboard') },
                    { label: 'Kontak', url: route('admin.contacts.index') },
                    { label: 'Detail' },
                ]}
            />

            <div className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <Card className="border-stone-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900">Detail Pesan</h3>
                                <p className="mt-1 text-sm text-stone-500">Melihat dan kelola pesan kontak.</p>
                            </div>
                            <Badge variant="muted">Show</Badge>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div>
                                <h4 className="text-sm font-semibold text-stone-700">Nama</h4>
                                <div className="mt-1 text-stone-900">{contact.name}</div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-stone-700">Email</h4>
                                <div className="mt-1 text-stone-900">{contact.email}</div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-stone-700">Subjek</h4>
                                <div className="mt-1 text-stone-900">{contact.subject}</div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-stone-700">Pesan</h4>
                                <div className="mt-2 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm leading-7 text-stone-700">{contact.message}</div>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <form onSubmit={toggleRead}>
                                <input type="hidden" name="is_read" value={!data.is_read} />
                                <button type="submit" disabled={processing} className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">{contact.is_read ? 'Tandai Belum Dibaca' : 'Tandai Dibaca'}</button>
                            </form>

                            <Link href={route('admin.contacts.index')} className="rounded-2xl border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-900">Kembali</Link>
                        </div>
                    </Card>

                    <Card className="overflow-hidden border-stone-200 bg-[#0F172A] p-6 text-stone-100 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Meta</p>
                        <div className="mt-3 text-sm text-stone-300">
                            <div>Diterima: {new Date(contact.created_at).toLocaleString('id-ID')}</div>
                            <div className="mt-2">Status: {contact.is_read ? 'Dibaca' : 'Baru'}</div>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
