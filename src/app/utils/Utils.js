export function redirectTo(url, wait=2000) {

    let timeout = setTimeout(() => {
        window.open(url, '_blank');
        clearTimeout(timeout);
    }, wait);
}
