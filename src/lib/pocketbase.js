import PocketBase from 'pocketbase';
// import fetch from 'cross-fetch';
import 'cross-fetch/polyfill';

const pb = new PocketBase('http://127.0.0.1:8090/')
export default pb

// users
export const getUsers = async () => {
    const records = await pb.collection('users').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return records
}

// groups
export const getGroupWithUsers = async () => {
    const group = await pb.collection('groups').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return group
}
export const getGroups = async () => {
    const groups = await pb.collection('groups').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return groups
}

export const getGroupsForUser = async (user) => {
    const groups = await pb.collection('groups').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return groups
}

// messages
export const getMessagesForEvent = async (event) => {
    // realtime
    const messages = await pb.collection('messages').getList(200 /* batch size */, {
        sort: '-created',
    });

    return messages
}

export const getMessagesForGroup = async (group) => {
    // realtime
    const messages = await pb.collection('messages').getList(200 /* batch size */, {
        sort: '-created',
    });

    return messages
}

// events
export const getEvents = async () => {
    const events = await pb.collection('events').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

export const getEventsForGroup = async (group) => {
    const events = await pb.collection('events').getFullList(200 /* batch size */, {
        sort: '-created',
    });

    return events
}

export const getEventsForUser = async (user) => {
    const events = await pb.collection('events').getFullList(200 /* batch size */, {
        sort: '-created',
        expand: 'attendees',
    });

    return events
}

