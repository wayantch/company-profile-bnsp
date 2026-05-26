<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PageContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PageContentController extends Controller
{
    public function index()
    {
        $contents = PageContent::orderBy('section')->orderBy('key')->get();

        return Inertia::render('Admin/PageContents/Index', [
            'pageContents' => $contents
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PageContents/Create');
    }

    public function show(PageContent $pageContent)
    {
        return Inertia::render('Admin/PageContents/Show', [
            'pageContent' => $pageContent,
        ]);
    }

    public function edit(PageContent $pageContent)
    {
        return Inertia::render('Admin/PageContents/Edit', [
            'pageContent' => $pageContent,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'section' => ['required', 'string', 'max:255'],
            'key' => ['required', 'string', 'max:255', Rule::unique('page_contents')->where(fn($query) => $query->where('section', $request->input('section')))],
            'value' => ['nullable', 'string'],
            'file_path' => ['nullable', 'file', 'max:5120'],
        ]);

        if (!filled($validated['value'] ?? null) && !$request->hasFile('file_path')) {
            return back()
                ->withErrors(['value' => 'Value atau file pendukung wajib diisi.'])
                ->withInput();
        }

        $data = [
            'section' => $validated['section'],
            'key' => $validated['key'],
            'value' => $validated['value'] ?? null,
        ];

        if ($request->hasFile('file_path')) {
            $path = $request->file('file_path')->store('public/page-contents');
            $data['file_path'] = Storage::url(str_replace('public/', '', $path));
        }

        PageContent::create($data);

        return redirect()->route('admin.page-contents.index')->with('success', 'Konten halaman berhasil ditambahkan.');
    }

    public function update(Request $request, PageContent $pageContent)
    {
        $validated = $request->validate([
            'section' => ['required', 'string', 'max:255'],
            'key' => [
                'required',
                'string',
                'max:255',
                Rule::unique('page_contents')
                    ->where(fn($query) => $query->where('section', $request->input('section')))
                    ->ignore($pageContent->id),
            ],
            'value' => ['nullable', 'string'],
            'file_path' => ['nullable', 'file', 'max:5120'],
        ]);

        $data = [
            'section' => $validated['section'],
            'key' => $validated['key'],
            'value' => $validated['value'] ?? null,
        ];

        if ($request->hasFile('file_path')) {
            if ($pageContent->file_path) {
                $oldPath = 'public/' . str_replace('/storage/', '', $pageContent->file_path);
                if (Storage::exists($oldPath)) {
                    Storage::delete($oldPath);
                }
            }

            $path = $request->file('file_path')->store('public/page-contents');
            $data['file_path'] = Storage::url(str_replace('public/', '', $path));
        } else {
            $data['file_path'] = $pageContent->file_path;
        }

        $pageContent->update($data);

        return redirect()->route('admin.page-contents.index')->with('success', 'Konten halaman berhasil diperbarui.');
    }

    public function destroy(PageContent $pageContent)
    {
        if ($pageContent->file_path) {
            $path = 'public/' . str_replace('/storage/', '', $pageContent->file_path);
            if (Storage::exists($path)) {
                Storage::delete($path);
            }
        }

        $pageContent->delete();

        return redirect()->route('admin.page-contents.index')->with('success', 'Konten halaman berhasil dihapus.');
    }
}
