async function postData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        body: data
    });
    return await res.text();
}

export default postData;