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
        <main class="container row justify-content-evenly m-5">`

        for (const employee of Object.values(staff)) {

            const x = new Build(employee);
            html += `<div class='card shadow col-3 m-4 p-0'>
            <div class='card-header bg-primary text-white'>
                <p class='text-center fs-4 pl-1'>${x.name}</p>`;
                if (x.role == `Manager`) {
                    html += `<p class='text-center fs-4 pl-1'>&#127861; ${x.role}</p>`
                } else if (x.role == `Engineer`) {
                    html += `<p class='text-center fs-4 pl-1'>&#128190; ${x.role}</p>`
                } else {
                    html += `<p class='text-center fs-4 pl-1'>&#127891; ${x.role}</p>`
                };    
                html +=`
            </div>
            <div class='card-body bg-dark-subtle'>
                <div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Employee ID#: ${x.id}</div>
                <div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Email Address: <a href='mailto:${x.email}'>${x.email}</a></div>`;
                if (x.role == `Manager`) {
                    html += `<div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Office Number: ${x.addInfo}</div>`
                } else if (x.role == `Engineer`) {
                    html += `<div class='bg-white ml-3 mr-3 mt-1 mb-1 pl-1'>Github: <a href='https://github.com/${x.addInfo}' target='_blank'>${x.addInfo}</a></div>`
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