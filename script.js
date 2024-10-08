function changeFlavor(flavor) {
    let description = "";
    let backgroundColor = "";

    switch (flavor) {
        case 'lime':
            description = "Sabor refrescante e energizante de limão.";
            backgroundColor = "green";
            break;
        case 'orange':
            description = "Sabor vibrante de laranja, perfeito para o dia a dia.";
            backgroundColor = "orange";
            break;
        case 'red':
            description = "Sabor intenso de frutas vermelhas.";
            backgroundColor = "red";
            break;
    }

    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('flavorDescription').innerText = description;
}
