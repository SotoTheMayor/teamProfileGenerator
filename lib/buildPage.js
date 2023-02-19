const buildPage = data => {
    const staff = data;
    class Build {
        constructor(employee) {
        this.name = employee.name,
        this.role = employee.role,
        this.id = employee.id,
        this.email = employee.email,
        this.addInfo = employee.addInfo
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

            const x = new Build(employee);
            html += `<div class='card col-2 m-4 border-0'>
            <div class='card-top bg-primary text-white'>
                <p class='text-center pl-1'>${x.name}</p>
                <p class='text-center pl-1'>Role: ${x.role}</p>
            </div>
            <div class='card-body bg-dark-subtle'>
                <div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Employee ID#: ${x.id}</div>
                <div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Email Address: ${x.email}</div>`;
                if (x.role == `Manager`) {
                    html += `<div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Office Number: ${x.addInfo}</div>`
                } else if (x.role == `Engineer`) {
                    html += `<div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Github: ${x.addInfo}</div>`
                } else {
                    html += `<div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Attending: ${x.addInfo}</div>`
                };
            html +=
            `</div>
        </div>`
        }

    html += `</main>
    </body>
    </html>
        `
        return html;
}

module.exports = buildPage;