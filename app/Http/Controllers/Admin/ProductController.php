<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('order', 'asc')->get();
        return Inertia::render('Admin/Products/Index', [
            'products' => $products
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Products/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'full_description' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'is_featured' => 'required|boolean',
            'order' => 'nullable|integer',
            'thumbnail' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('public/products');
            $validated['thumbnail'] = Storage::url(str_replace('public/', '', $path));
        }

        $validated['order'] = $request->input('order') ?? 0;

        Product::create($validated);

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Admin/Products/Edit', [
            'product' => $product
        ]);
    }

    public function show(Product $product)
    {
        return Inertia::render('Admin/Products/Show', [
            'product' => $product,
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'full_description' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'is_featured' => 'required|boolean',
            'order' => 'nullable|integer',
            'thumbnail' => 'nullable',
        ]);

        if ($request->hasFile('thumbnail')) {
            if ($product->thumbnail) {
                $oldPath = 'public/' . str_replace('/storage/', '', $product->thumbnail);
                if (Storage::exists($oldPath)) {
                    Storage::delete($oldPath);
                }
            }
            $path = $request->file('thumbnail')->store('public/products');
            $validated['thumbnail'] = Storage::url(str_replace('public/', '', $path));
        } elseif (is_string($request->input('thumbnail'))) {
            $validated['thumbnail'] = $request->input('thumbnail');
        } else {
            $validated['thumbnail'] = null;
        }

        $validated['order'] = $request->input('order') ?? 0;

        $product->update($validated);

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil diperbarui.');
    }

    public function destroy(Product $product)
    {
        if ($product->thumbnail) {
            $path = 'public/' . str_replace('/storage/', '', $product->thumbnail);
            if (Storage::exists($path)) {
                Storage::delete($path);
            }
        }

        $product->delete();

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil dihapus.');
    }
}
