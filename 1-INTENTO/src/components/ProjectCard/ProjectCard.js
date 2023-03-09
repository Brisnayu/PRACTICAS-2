import "./ProjectCard.css";

const adoptionBoardList = document.querySelector('#board-main');

const getAdoptionBoard = (photo, name, year, desc) => {
    return `<div class="adoption-block">
        <img src=${photo} alt=${name} />
        <h3>${name}</h3>
        <p>${year}</p>
        <p>${desc}</p>
        </div>`;
};

const setupAdoptionBoardList = () => {
    
    for (let i = 0; i < adoptionBoard.length; i++) {
        const adoptionBoardElement = adoptionBoard[i];

            adoptionBoardList.innerHTML += getAdoptionBoard (
            adoptionBoardElement.photo,
            adoptionBoardElement.name,
            adoptionBoardElement.year,
            adoptionBoardElement.desc,
        );
    };

};

setupAdoptionBoardList();