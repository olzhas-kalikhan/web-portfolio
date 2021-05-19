const importAll = (r) => {
    return r.keys().map(r);
}
const openLinkInNewTab = (link) => {
    window.open(link, '_blank')
}
export { openLinkInNewTab, importAll }