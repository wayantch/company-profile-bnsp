<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::orderBy('order', 'asc')->get();
        return Inertia::render('Admin/Clients/Index', [
            'clients' => $clients
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Clients/Create');
    }

    public function show(Client $client)
    {
        $relatedClients = Client::where('id', '!=', $client->id)
            ->orderBy('order', 'asc')
            ->take(6)
            ->get();

        return Inertia::render('Admin/Clients/Show', [
            'client' => $client,
            'relatedClients' => $relatedClients,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'website' => 'nullable|url|max:255',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
            'logo' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            $path = $request->file('logo')->store('clients', 'public');
            $validated['logo_path'] = '/storage/' . ltrim($path, '/');
        }

        $validated['order'] = $request->input('order') ?? 0;

        Client::create($validated);

        return redirect()->route('admin.clients.index')->with('success', 'Klien berhasil ditambahkan.');
    }

    public function edit(Client $client)
    {
        return Inertia::render('Admin/Clients/Edit', [
            'client' => $client
        ]);
    }

    public function update(Request $request, Client $client)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'website' => 'nullable|url|max:255',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
            'logo' => 'nullable',
        ]);

        if ($request->hasFile('logo')) {
            if ($client->logo_path) {
                $oldPath = ltrim(str_replace('/storage/', '', parse_url($client->logo_path, PHP_URL_PATH) ?? $client->logo_path), '/');
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            $path = $request->file('logo')->store('clients', 'public');
            $validated['logo_path'] = '/storage/' . ltrim($path, '/');
        } elseif (is_string($request->input('logo'))) {
            $validated['logo_path'] = $request->input('logo');
        } else {
            $validated['logo_path'] = $client->logo_path;
        }

        $validated['order'] = $request->input('order') ?? 0;

        $client->update($validated);

        return redirect()->route('admin.clients.index')->with('success', 'Klien berhasil diperbarui.');
    }

    public function destroy(Client $client)
    {
        if ($client->logo_path) {
            $path = ltrim(str_replace('/storage/', '', parse_url($client->logo_path, PHP_URL_PATH) ?? $client->logo_path), '/');
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        $client->delete();

        return redirect()->route('admin.clients.index')->with('success', 'Klien berhasil dihapus.');
    }
}
