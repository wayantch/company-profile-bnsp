import { useForm, usePage } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Kontak({ contact }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('kontak.send'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout title="Kontak">
            <section className="bg-[#0A0F1E]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Kontak</p>
                            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{contact?.title || 'Hubungi Kami'}</h1>
                            <p className="text-base leading-8 text-slate-300">
                                Kirim pesan untuk kebutuhan proyek, konsultasi, atau pertanyaan umum. Tim kami akan membalas secepatnya.
                            </p>

                            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Alamat</p>
                                    <p className="mt-2 leading-7">{contact?.address || 'Alamat perusahaan belum tersedia.'}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Telepon</p>
                                    <p className="mt-2">{contact?.phone || '-'}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Email</p>
                                    <p className="mt-2">{contact?.email || '-'}</p>
                                </div>
                            </div>

                            {flash?.success && (
                                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                                    {flash.success}
                                </div>
                            )}
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <form onSubmit={submit} className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="space-y-2 text-sm text-slate-300">
                                        <span>Nama</span>
                                        <input
                                            value={data.name}
                                            onChange={(event) => setData('name', event.target.value)}
                                            className="w-full rounded-xl border border-white/10 bg-[#0A0F1E] px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40"
                                            placeholder="Nama Anda"
                                        />
                                        {errors.name && <p className="text-xs text-red-300">{errors.name}</p>}
                                    </label>
                                    <label className="space-y-2 text-sm text-slate-300">
                                        <span>Email</span>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(event) => setData('email', event.target.value)}
                                            className="w-full rounded-xl border border-white/10 bg-[#0A0F1E] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                                            placeholder="email@domain.com"
                                        />
                                        {errors.email && <p className="text-xs text-red-300">{errors.email}</p>}
                                    </label>
                                </div>

                                <label className="block space-y-2 text-sm text-slate-300">
                                    <span>Telepon</span>
                                    <input
                                        value={data.phone}
                                        onChange={(event) => setData('phone', event.target.value)}
                                        className="w-full rounded-xl border border-white/10 bg-[#0A0F1E] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                                        placeholder="08xxxxxxxxxx"
                                    />
                                    {errors.phone && <p className="text-xs text-red-300">{errors.phone}</p>}
                                </label>

                                <label className="block space-y-2 text-sm text-slate-300">
                                    <span>Subjek</span>
                                    <input
                                        value={data.subject}
                                        onChange={(event) => setData('subject', event.target.value)}
                                        className="w-full rounded-xl border border-white/10 bg-[#0A0F1E] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                                        placeholder="Pertanyaan layanan"
                                    />
                                    {errors.subject && <p className="text-xs text-red-300">{errors.subject}</p>}
                                </label>

                                <label className="block space-y-2 text-sm text-slate-300">
                                    <span>Pesan</span>
                                    <textarea
                                        rows="5"
                                        value={data.message}
                                        onChange={(event) => setData('message', event.target.value)}
                                        className="w-full rounded-xl border border-white/10 bg-[#0A0F1E] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                                        placeholder="Ceritakan kebutuhan Anda"
                                    />
                                    {errors.message && <p className="text-xs text-red-300">{errors.message}</p>}
                                </label>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#0A0F1E] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {processing ? 'Mengirim...' : 'Kirim Pesan'}
                                </button>
                            </form>

                            {contact?.map_embed && (
                                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                                    <iframe
                                        src={contact.map_embed}
                                        title="Map"
                                        className="h-72 w-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}