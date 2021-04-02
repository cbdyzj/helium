function handleRequest(request) {
    const { pathname } = new URL(request.url)

    if (pathname.startsWith("/html")) {
        const html = `
            <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>helium</title>
            </head>
            <body>
            <main>
                <p><b>Message:</b> Hello from Deno Deploy.</p>
            </main>
            </body>
            </html>`

        return new Response(html, {
            headers: {
                "content-type": "text/html; charset=UTF-8",
            },
        })
    }

    if (pathname.startsWith("/json")) {
        // Use stringify function to convert javascript object to JSON string.
        const json = JSON.stringify({
            message: "Hello from Deno Deploy",
        })

        return new Response(json, {
            headers: {
                "content-type": "application/json; charset=UTF-8",
            },
        })
    }

    return new Response(`
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>helium</title>
        </head>
        <body>
        <main>
            <h1>Return JSON and/or HTML Example</h1>
            <p>
                <a href="/html">/html</a> - responds with HTML to the request.
            </p>
            <p>
                <a href="/json">/json</a> - responds with JSON to the request.
            </p>
        </main>
        
        </body>
        </html>`,
        {
            headers: {
                'content-type': 'text/html; charset=UTF-8',
            },
        },
    )
}

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request))
})
