chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    async function getStatus(url) {
        const response = await fetch("https://surfguardsays.onrender.com/getStatus?url="+url).then((res) => res.json());
        const output = JSON.parse(response);
        if (output == '-1') {
            document.getElementById("status").innerHTML = "This link is safe to surf ✔️";
            document.getElementById("status_image").src="/safe.jpg";
        } else {
            document.getElementById("status").innerHTML = "This link may not be safe to surf ❌";
            document.getElementById("status_image").src="/unsafe.jpg";
        }
        // document.getElementById("url").innerHTML = output;
    }
    getStatus(url);
    console.log(response.body)
    // document.getElementById('url').innerHTML = url;
    
});