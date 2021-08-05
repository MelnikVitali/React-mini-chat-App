export const generateTime = (timestamp = Date.now()) => {
    const time = new Date(timestamp);
    return `${time.getHours() || '00'}:${time.getMinutes() || '00'}`;
};