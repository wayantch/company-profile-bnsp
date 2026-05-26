<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::published()
            ->orderBy('event_date', 'desc')
            ->paginate(6);

        return Inertia::render('Public/Event/Index', [
            'events' => $events,
        ]);
    }

    public function show(Event $event)
    {
        if (!$event->is_published) {
            abort(404);
        }

        $relatedEvents = Event::published()
            ->where('id', '!=', $event->id)
            ->orderBy('event_date', 'desc')
            ->take(3)
            ->get();

        return Inertia::render('Public/Event/Show', [
            'event' => $event,
            'relatedEvents' => $relatedEvents,
        ]);
    }
}
