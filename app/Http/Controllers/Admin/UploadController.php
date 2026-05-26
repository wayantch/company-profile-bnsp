<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PageContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'section' => 'required|string',
            'key' => 'required|string',
            'file' => 'required|file|mimes:jpg,jpeg,png,gif,webp,pdf,doc,docx|max:5120',
        ]);

        $section = $request->input('section');
        $key = $request->input('key');
        $file = $request->file('file');

        // Clean filename and store
        $filename = time() . '_' . preg_replace('/[^a-zA-Z0-9._-]/', '_', $file->getClientOriginalName());
        $path = $file->storeAs('public/' . $section, $filename);

        // Public URL
        $publicUrl = Storage::url(str_replace('public/', '', $path));

        // Update or create page content record
        PageContent::updateOrCreate(
            ['section' => $section, 'key' => $key],
            [
                'file_path' => $publicUrl,
                'value' => $publicUrl // update value as well in case they use value directly
            ]
        );

        return back()->with('success', 'File berhasil diunggah dan disimpan!');
    }
}
