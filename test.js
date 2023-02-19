const test = () => {
    const staff = {
        dad: {name: `dad`, role: `parent`, id: `1`, email: `dad@gmail.com`, addInfo: `cool`},
        caden: {name: `caden`, role: `child`, id: `3`, email: `caden@gmail.com`, addInfo: `awesome`}
    };


// for (const employee of Object.values(staff)) {
//     console.log(employee)
// }

    class Build {
        constructor(data) {
        this.name = data.name,
        this.role = data.role,
        this.id = data.id,
        this.email = data.email,
        this.addInfo = data.addInfo
        }
    }

    let html = `<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>My Team Profile</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' 
            rel='stylesheet' 
            integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' 
            crossorigin='anonymous'>
    </head>
    <body>
        <header><p class='display-6 text-center bg-danger text-white pt-4 pb-4'><strong>My Team</strong></p></header>
        <main class="container row justify-content-md-center">`

        for (const employee of Object.values(staff)) {
            // console.log(`========================  ` + employee)
            const x = new Build(employee)
            // console.log(x)
            html += `<div class='card col-2 m-4 border-0'>
            <div class='card-top bg-primary text-white'>
                <p>${x.name}</p>
                <p>${x.role}</p>
            </div>
            <div class='card-body bg-dark-subtle'>
                <div class='bg-white ml-3 mr-3 mt-1 mb-1'>${x.id}</div>
                <div class='bg-white ml-3 mr-3 mt-1 mb-1'>${x.email}</div>
                <div class='bg-white ml-3 mr-3 mt-1 mb-1'>${x.addInfo}</div>
            </div>
        </div>`

        }

    html += `
    </main>
    </body>
    </html>
        `

console.log(html)

        return html;
}

module.exports = test;