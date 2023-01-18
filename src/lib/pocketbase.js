import PocketBase from 'pocketbase';
// import fetch from 'cross-fetch';
import 'cross-fetch/polyfill';

const pb = new PocketBase('http://127.0.0.1:8090/')
export default pb


export const getUsers = async () => {
    const records = await pb.collection('events').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return records
}
// groups
export const getGroups = async () => {
    const events = await pb.collection('events').getList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

export const getGroupsForUser = async () => {
    const events = await pb.collection('events').getList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

// messages
export const getMessagesForEvent = async () => {
    // realtime
    const events = await pb.collection('events').getList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

export const getMessagesForGroup = async () => {
    // realtime
    const events = await pb.collection('events').getList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

// events
export const getEvents = async () => {
    const events = await pb.collection('events').getList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

export const getEventsForGroup = async () => {
    const events = await pb.collection('events').getList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

export const getEventsForUser = async () => {
    const events = await pb.collection('events').getList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

