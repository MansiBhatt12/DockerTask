export default function formatDateUtc() {
    let date = new Date();

    let utcDate = date.toUTCString();
    let utcString = new Date(utcDate).toISOString();

    return utcString;
}

// formatting the local date-time to UTC standard
