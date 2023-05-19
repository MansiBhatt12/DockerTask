export default function subtractDate() {
    const utcTime = new Date();

    const oneHourInMillis = 60 * 60 * 1000;
    const newUtcTime = new Date(utcTime.getTime() - oneHourInMillis);

    return newUtcTime.toISOString();
}

// from here we are getting the 1 hour less UTC time
