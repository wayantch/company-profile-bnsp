<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::orderBy('event_date', 'desc')->get();
        return Inertia::render('Admin/Events/Index', [
            'events' => $events
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Events/Create');
    }

    public function show(Event $event)
    {
        $relatedEvents = Event::where('id', '!=', $event->id)
            ->orderBy('event_date', 'desc')
            ->take(3)
            ->get();

        return Inertia::render('Admin/Events/Show', [
            'event' => $event,
            'relatedEvents' => $relatedEvents,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
            'location' => 'nullable|string|max:255',
            'is_published' => 'required|boolean',
            'thumbnail' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('events', 'public');
            $validated['thumbnail'] = '/storage/' . ltrim($path, '/');
        }

        Event::create($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil ditambahkan.');
    }

    public function edit(Event $event)
    {
        return Inertia::render('Admin/Events/Edit', [
            'event' => $event
        ]);
    }

    public function update(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'event_date' => 'required|date',
            'location' => 'nullable|string|max:255',
            'is_published' => 'required|boolean',
            'thumbnail' => 'nullable',
        ]);

        if ($request->hasFile('thumbnail')) {
            if ($event->thumbnail) {
                $oldPath = ltrim(str_replace('/storage/', '', parse_url($event->thumbnail, PHP_URL_PATH) ?? $event->thumbnail), '/');
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            $path = $request->file('thumbnail')->store('events', 'public');
            $validated['thumbnail'] = '/storage/' . ltrim($path, '/');
        } elseif (is_string($request->input('thumbnail'))) {
            $validated['thumbnail'] = $request->input('thumbnail');
        } else {
            $validated['thumbnail'] = $event->thumbnail;
        }

        $event->update($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil diperbarui.');
    }

    public function destroy(Event $event)
    {
        if ($event->thumbnail) {
            $path = ltrim(str_replace('/storage/', '', parse_url($event->thumbnail, PHP_URL_PATH) ?? $event->thumbnail), '/');
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        $event->delete();

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil dihapus.');
    }
}
