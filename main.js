function rojo(){
    Swal.fire({
        title: '<h1 id="titleSweet">SKILLS</h1>',
        html: '<p id="pSweet">Java, Python, Js, HTML5, CSS, SQL, Git, Golang, C...</p>',
        imageUrl: './img/skills.jpg',
        imageHeight: 200
    });
}
function amarillo(){
    Swal.fire({
        title: '<h1 id="titleSweet">EDUCATION</h1>',
        html: `
        <h2 id="titleSweet">Higher Technical Certificate in Web Development</h2>
        <p id="pSweet">Web Development in IES La Ferreria, College ubicated in Barcelona</p>
        <h2 id="titleSweet">Computer engineering</h2>
        <p id="pSweet">I'm currently studuing Engineering in UOC (Online university)</p>
        <h2 id="titleSweet">Java BootCamp</h2>
        ....
        `,
        imageUrl: './img/educacion.png',
        imageHeight: 150
    });
}
function verde(){
    Swal.fire({
        title: '<h1 id="titleSweet">LENGUAJES</h1>',
        html: `<p id="pSweet">
        Catalan: Native <br>
        Spanish: Native <br>
        English: C1 Certificated
        </p>`,
        imageUrl: './img/lengiajes.png',
        imageHeight: 150,
        showConfirmButton: true,
        confirmButtonText: 'Download Certificate',
        confirmButtonColor: '#45c7b6'
    });
}





