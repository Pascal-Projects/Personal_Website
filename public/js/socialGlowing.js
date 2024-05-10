function changeGlow(app) {
    if (app == 1) {
        document.getElementById("socials").style.boxShadow = "4px 4px 100px 2px var(--github)"
    } else if (app == 2) {
        document.getElementById("socials").style.boxShadow = "4px 4px 100px 2px var(--discord)"
    } else if (app == 3) {
        document.getElementById("socials").style.boxShadow = "4px 4px 100px 2px var(--twitter)"
    } else if (app == 4) {
        document.getElementById("socials").style.boxShadow = "4px 4px 100px 2px var(--spotify)"
    } else if (app == 5) {
        document.getElementById("socials").style.boxShadow = "4px 4px 100px 2px var(--steam)"
    }
}

function resetGlow(container) {
        document.getElementById("socials").style.boxShadow = "4px 4px 10px 2px var(--pink)"
} 