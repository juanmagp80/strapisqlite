try {
    require('better-sqlite3');
} catch (err) {
    console.log('Could not load better-sqlite3, falling back to sqlite3');
}