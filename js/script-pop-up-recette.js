document.addEventListener('DOMContentLoaded', function () {
    const recettesList = document.getElementById('recettes-list');
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');
    const popupNom = document.getElementById('popup-nom');
    const popupTemps = document.getElementById('popup-temps');
    const popupImage = document.getElementById('popup-image');
    const popupIngredients = document.getElementById('popup-ingredients');
    const popupEtapes = document.getElementById('popup-etapes');
    const generateShoppingList = document.getElementById('generateShoppingList');

    const recettes = [
        {
            "nom": "Poulet rôti aux herbes",
            "categorie": "Plat principal",
            "temps_preparation": "1 heure",
            "image": "../assets/poulet-roti-aux-herbes.jpg",
            "ingredients": [
                { "nom": "Poulet", "quantite": "1" },
                { "nom": "Herbes fraîches", "quantite": "1" },
                { "nom": "Sel et poivre", "quantite": "10g" },
                { "nom": "Huile d'olive", "quantite": "10g" }
            ],
            "etapes": [
                "Préchauffez le four à 200°C.",
                "Nettoyez le poulet et assaisonnez-le généreusement avec du sel, du poivre et les herbes.",
                "Badigeonnez le poulet d'huile d'olive.",
                "Placez le poulet dans un plat allant au four et enfournez-le pendant environ 1 heure ou jusqu'à ce qu'il soit bien doré et cuit à cœur.",
                "Laissez reposer quelques minutes avant de découper et de servir."
            ]
        },
        {
            "nom": "Pâtes Carbonara",
            "categorie": "Plat principal",
            "temps_preparation": "20 minutes",
            "image": "../assets/pate-carbonara.jpg",
            "ingredients": [
                { "nom": "Pâtes", "quantite": "500g" },
                { "nom": "Lardon", "quantite": "300g" },
                { "nom": "Œuf", "quantite": "3" },
                { "nom": "Parmesan", "quantite": "50g" },
                { "nom": "Beurre", "quantite": "10g" }
            ],
            "etapes": [
                "Faites cuire les pâtes dans une grande casserole d'eau bouillante salée selon les instructions sur l'emballage jusqu'à ce qu'elles soient al dente.",
                "Pendant ce temps, faites chauffer un peu d'huile d'olive dans une poêle et faites revenir la pancetta ou les lardons jusqu'à ce qu'ils soient croustillants.",
                "Dans un bol, fouettez les jaunes d'œufs avec le Parmesan râpé et du poivre noir moulu.",
                "Égouttez les pâtes, en réservant une petite quantité d'eau de cuisson.",
                "Mélangez rapidement les pâtes égouttées avec les lardons dans la poêle chaude.",
                "Retirez la poêle du feu, puis ajoutez le mélange d'œufs et de fromage aux pâtes, en remuant rapidement pour éviter que les œufs ne cuisent trop et ne deviennent des morceaux.",
                "Si la sauce est trop épaisse, ajoutez un peu d'eau de cuisson réservée pour la diluer.",
                "Servez immédiatement, garni de plus de Parmesan râpé et de poivre noir moulu, si désiré."
            ]
        },
        {
            "nom": "Risotto aux champignons",
            "categorie": "Plat principal",
            "temps_preparation": "40 minutes",
            "image": "../assets/risotto-aux-champignon.jpg",
            "ingredients": [
                { "nom": "Riz", "quantite": "300g" },
                { "nom": "Oignons", "quantite": "3" },
                { "nom": "Vin blanc", "quantite": "50g" },
                { "nom": "Parmesan", "quantite": "50g" },
                { "nom": "Beurre", "quantite": "10g" }
            ],
            "etapes": [
                "Dans une grande poêle, faites chauffer l'huile d'olive à feu moyen.",
                "Ajoutez l'oignon et faites-le revenir jusqu'à ce qu'il soit translucide.",
                "Ajoutez les champignons et l'ail, puis faites-les cuire jusqu'à ce qu'ils soient tendres et dorés.",
                "Ajoutez le riz dans la poêle et mélangez-le bien avec les champignons et l'oignon.",
                "Versez le vin blanc dans la poêle et remuez jusqu'à ce qu'il soit absorbé par le riz.",
                "Ajoutez une louche de bouillon chaud dans la poêle et remuez le riz jusqu'à ce que le liquide soit absorbé.",
                "Répétez cette étape en ajoutant une louche de bouillon à la fois et en remuant constamment jusqu'à ce que le riz soit cuit al dente et crémeux.",
                "Retirez la poêle du feu et incorporez le parmesan râpé.",
                "Assaisonnez avec du sel et du poivre selon votre goût.",
                "Servez le risotto chaud, garni de persil frais haché."
            ]
        },
        {
            "nom": "Lasagnes végétariennes",
            "categorie": "Plat principal",
            "temps_preparation": "1 heure 30 minutes",
            "image": "../assets/lasagne-vegetarienne.jpg",
            "ingredients": [
                { "nom": "Pâte", "quantite": "150g" },
                { "nom": "Aubergine", "quantite": "3" },
                { "nom": "Courgette", "quantite": "5" },
                { "nom": "Poivron", "quantite": "3" },
                { "nom": "Beurre", "quantite": "10g" }
            ],
            "etapes": [
                "Préchauffez votre four à 180°C.",
                "Coupez les légumes en tranches fines, hachez l'ail et ciselez le basilic.",
                "Dans une poêle, faites chauffer un peu d'huile d'olive et faites revenir les légumes avec l'ail jusqu'à ce qu'ils soient tendres.",
                "Dans un plat à gratin, étalez une fine couche de sauce tomate, puis disposez une couche de feuilles de lasagnes.",
                "Ajoutez une couche de légumes cuits, une couche de ricotta, et saupoudrez de mozzarella râpée et de parmesan.",
                "Répétez les couches jusqu'à ce que tous les ingrédients soient utilisés, en terminant par une couche de sauce tomate et de fromage.",
                "Couvrez le plat de papier aluminium et faites cuire au four pendant environ 45 minutes.",
                "Retirez le papier aluminium et poursuivez la cuisson pendant encore 15 minutes, jusqu'à ce que le dessus soit doré et croustillant.",
                "Laissez reposer quelques minutes avant de servir."
            ]
        },
        {
            "nom": "Ratatouille provençale",
            "categorie": "Plat principal",
            "temps_preparation": "1 heure",
            "image": "../assets/ratatouille-provençale.jpg",
            "ingredients": [
                { "nom": "Aubergine", "quantite": "1" },
                { "nom": "Courgette", "quantite": "3" },
                { "nom": "Poivron", "quantite": "2" },
                { "nom": "Tomate", "quantite": "4" },
                { "nom": "Oignon", "quantite": "2" },
                { "nom": "Huile d'olive", "quantite": "10g" }
            ],
            "etapes": [
                "Coupez tous les légumes en dés de taille moyenne.",
                "Dans une grande poêle, faites chauffer l'huile d'olive à feu moyen.",
                "Ajoutez les oignons et l'ail hachés, puis faites-les revenir jusqu'à ce qu'ils soient translucides.",
                "Ajoutez les poivrons et faites-les revenir pendant quelques minutes.",
                "Incorporez l'aubergine et la courgette, puis faites-les cuire jusqu'à ce qu'ils soient tendres.",
                "Ajoutez les tomates et les herbes de Provence, puis laissez mijoter la ratatouille pendant environ 20 à 30 minutes, en remuant de temps en temps.",
                "Assaisonnez avec du sel et du poivre selon votre goût.",
                "Servez la ratatouille chaude ou à température ambiante, accompagnée de pain frais ou de riz."
            ]
        },
        {
            "nom": "Salade César",
            "categorie": "Entrée",
            "temps_preparation": "20 minutes",
            "image": "../assets/salade-cesar.jpg",
            "ingredients": [
                { "nom": "Laitue", "quantite": "1" },
                { "nom": "Poulet", "quantite": "1" },
                { "nom": "Croûtons", "quantite": "50g" },
                { "nom": "Parmesan", "quantite": "50g" },
                { "nom": "Beurre", "quantite": "10g" }
            ],
            "etapes": [
                "Lavez et séchez la laitue romaine, puis déchirez-la en morceaux dans un grand bol.",
                "Ajoutez le poulet grillé coupé en morceaux, les croûtons et le parmesan râpé.",
                "Arrosez la salade de sauce César selon votre goût.",
                "Saupoudrez de poivre noir moulu.",
                "Mélangez délicatement pour enrober tous les ingrédients de sauce.",
                "Servez immédiatement et dégustez."
            ]
        },
        {
            "nom": "Soupe de lentilles",
            "categorie": "Entrée",
            "temps_preparation": "1 heure",
            "image": "../assets/soupe-de-lentilles.jpg",
            "ingredients": [
                { "nom": "Lentille", "quantite": "250g" },
                { "nom": "Oignon", "quantite": "3" },
                { "nom": "Carottes", "quantite": "50g" },
                { "nom": "Céleri", "quantite": "10g" },
                { "nom": "Beurre", "quantite": "10g" }
            ],
            "etapes": [
                "Dans une casserole, faites chauffer un peu d'huile d'olive.",
                "Faites revenir l'oignon haché, l'ail émincé, les carottes et le céleri coupés en dés pendant quelques minutes.",
                "Ajoutez les lentilles et mélangez bien.",
                "Versez le bouillon de légumes dans la casserole et portez à ébullition.",
                "Réduisez le feu et laissez mijoter pendant environ 40 minutes, jusqu'à ce que les lentilles soient tendres.",
                "Assaisonnez avec du sel et du poivre selon votre goût.",
                "Servez chaud, garni de feuilles de coriandre fraîche."
            ]
        },
        {
            "nom": "Salade de quinoa aux légumes grillés",
            "categorie": "Entrée",
            "temps_preparation": "30 minutes",
            "image": "../assets/salade-quinoa.jpg",
            "ingredients": [
                { "nom": "Quinoa", "quantite": "200g" },
                { "nom": "Poivron", "quantite": "3" },
                { "nom": "Sel et poivre", "quantite": "10g" },
                { "nom": "Huile d'olive", "quantite": "10g" },
                { "nom": "Jus de citron", "quantite": "10g" }
            ],
            "etapes": [
                "Cuire le quinoa selon les instructions sur l'emballage.",
                "Coupez les légumes en morceaux et faites-les griller avec un filet d'huile d'olive jusqu'à ce qu'ils soient tendres et légèrement dorés.",
                "Dans un grand bol, mélangez le quinoa cuit avec les légumes grillés.",
                "Assaisonnez avec du jus de citron, du sel, du poivre et des feuilles de basilic frais.",
                "Servez la salade de quinoa aux légumes grillés, chaude ou froide."
            ]
        },
        {
            "nom": "Tarte aux pommes",
            "categorie": "Dessert",
            "temps_preparation": "1 heure",
            "image": "../assets/tarte-aux-pommes.jpg",
            "ingredients": [
                { "nom": "Pâte brisée", "quantite": "1" },
                { "nom": "Pomme", "quantite": "3" },
                { "nom": "Sucre", "quantite": "50g" },
                { "nom": "Cannelle", "quantite": "10g" },
                { "nom": "Beurre", "quantite": "10g" }
            ],
            "etapes": [
                "Préchauffez le four à 180°C.",
                "Étalez la pâte brisée dans un moule à tarte.",
                "Pelez, épépinez et coupez les pommes en tranches.",
                "Disposez les tranches de pommes sur la pâte en les faisant légèrement chevaucher.",
                "Saupoudrez de sucre et de cannelle selon votre goût, puis parsemez de petits morceaux de beurre.",
                "Enfournez la tarte pendant environ 40 à 45 minutes, jusqu'à ce qu'elle soit dorée.",
                "Laissez refroidir avant de déguster."
            ]
        },
        {
            "nom": "Muffins aux myrtilles",
            "categorie": "Dessert",
            "temps_preparation": "30 minutes",
            "image": "../assets/muffin-myrtille.jpg",
            "ingredients": [
                { "nom": "Farine", "quantite": "200g" },
                { "nom": "Sucre", "quantite": "100g" },
                { "nom": "Levure", "quantite": "1" },
                { "nom": "Lait", "quantite": "100g" },
                { "nom": "Œuf", "quantite": "1" },
                { "nom": "Myrtilles", "quantite": "150g" }
            ],
            "etapes": [
                "Préchauffez votre four à 200°C et graissez légèrement un moule à muffins.",
                "Dans un grand bol, mélangez la farine, le sucre, la levure chimique, le bicarbonate de soude et le sel.",
                "Dans un autre bol, battez ensemble le lait, l'huile, l'œuf et l'extrait de vanille.",
                "Incorporez les ingrédients liquides aux ingrédients secs et mélangez jusqu'à ce que la pâte soit homogène.",
                "Délicatement, incorporez les myrtilles à la pâte.",
                "Répartissez la pâte dans les moules à muffins, en les remplissant aux trois quarts.",
                "Enfournez les muffins pendant environ 20 minutes ou jusqu'à ce qu'ils soient dorés et qu'un cure-dent inséré au centre en ressorte propre.",
                "Laissez refroidir les muffins dans le moule pendant quelques minutes, puis transférez-les sur une grille pour les laisser refroidir complètement avant de déguster."
            ]
        },
        {
            "nom": "Salade niçoise",
            "categorie": "Entrée",
            "temps_preparation": "20 minutes",
            "image": "../assets/salade-niçoise.jpg",
            "ingredients": [
                { "nom": "Laitue", "quantite": "1" },
                { "nom": "Thon", "quantite": "3" },
                { "nom": "Œuf", "quantite": "3" },
                { "nom": "Tomates", "quantite": "4" },
                { "nom": "Poivron", "quantite": "4" },
                { "nom": "Haricots verts", "quantite": "400g" },
                { "nom": "Huile d'olive", "quantite": "10g" }
            ],
            "etapes": [
                "Lavez et essorez la laitue, puis disposez-la dans un grand saladier.",
                "Disposez les ingrédients suivants sur la laitue, en les disposant de manière décorative : les tomates coupées en quartiers, les œufs durs coupés en deux, les olives noires, les poivrons rouges en lamelles, les oignons rouges émincés, les haricots verts cuits et les filets d'anchois.",
                "Émiettez le thon en boîte et répartissez-le sur la salade.",
                "Dans un petit bol, préparez la vinaigrette en mélangeant de l'huile d'olive, du vinaigre de vin rouge, du sel et du poivre.",
                "Versez la vinaigrette sur la salade juste avant de servir et mélangez légèrement pour enrober tous les ingrédients.",
                "Servez immédiatement."
            ]
        },
        {
            "nom": "Salade de fruits frais",
            "categorie": "Dessert",
            "temps_preparation": "20 minutes",
            "image": "../assets/salade-de-fruits.jpg",
            "ingredients": [
                { "nom": "Fruits variés (fraises, kiwis, oranges, raisins, etc.)", "quantite": "1" },
                { "nom": "Jus d'orange ou de citron", "quantite": "10g" },
                { "nom": "Miel ou sirop d'érable (facultatif)", "quantite": "10g" },
                { "nom": "Feuilles de menthe fraîche pour garnir", "quantite": "1" }
            ],
            "etapes": [
                "Coupez tous les fruits en morceaux de taille similaire et placez-les dans un grand bol.",
                "Arrosez les fruits avec un peu de jus d'orange ou de citron pour les empêcher de brunir et pour ajouter de la fraîcheur.",
                "Si désiré, ajoutez un peu de miel ou de sirop d'érable pour sucrer légèrement les fruits.",
                "Mélangez délicatement les fruits pour bien les enrober de jus.",
                "Réfrigérez la salade de fruits pendant au moins 30 minutes avant de servir pour permettre aux saveurs de se mélanger.",
                "Au moment de servir, garnissez la salade de fruits frais de feuilles de menthe fraîche."
            ]
        },
        {
            "nom": "Tiramisu",
            "categorie": "Dessert",
            "temps_preparation": "30 minutes (+ temps de repos)",
            "image": "../assets/tiramisu.png",
            "ingredients": [
                { "nom": "Mascarpone", "quantite": "250g" },
                { "nom": "Œuf", "quantite": "3" },
                { "nom": "Sucre", "quantite": "80g" },
                { "nom": "Vanille", "quantite": "1" },
                { "nom": "Café", "quantite": "10g" },
                { "nom": "Cacao", "quantite": "10g" }
            ],
            "etapes": [
                "Séparez les blancs des jaunes d'œufs.",
                "Dans un grand bol, fouettez les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
                "Ajoutez le mascarpone et l'extrait de vanille, puis mélangez jusqu'à obtenir une crème lisse et homogène.",
                "Dans un autre bol, montez les blancs d'œufs en neige ferme.",
                "Incorporez délicatement les blancs montés en neige à la préparation au mascarpone.",
                "Trempez rapidement les biscuits à la cuillère dans le café fort et disposez-les au fond d'un plat.",
                "Recouvrez les biscuits d'une couche de crème au mascarpone.",
                "Répétez les couches de biscuits trempés dans le café et de crème au mascarpone jusqu'à épuisement des ingrédients, en terminant par une couche de crème.",
                "Saupoudrez généreusement de cacao en poudre sur le dessus du tiramisu.",
                "Couvrez le plat et laissez reposer au réfrigérateur pendant au moins 4 heures, idéalement toute une nuit, avant de servir."
            ]
        }
    ];

    console.log('Popup initial state:', popup.style.display);
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';

   
    recettes.forEach((recette, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = recette.nom;
        listItem.addEventListener('click', () => {
            console.log('Recette cliquée:', recette.nom);
            showPopup(recette);
        });
        recettesList.appendChild(listItem);
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';

        console.log('Popup initial state:', popup.style.display);
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
    });

    generateShoppingList.addEventListener('click', () => {
        const selectedIngredients = Array.from(popupIngredients.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.nextSibling.textContent.trim());

        console.log("Liste de courses :", selectedIngredients);
    });

    function showPopup(recette) {
        popupNom.textContent = recette.nom;
        popupTemps.textContent = `Temps de préparation: ${recette.temps_preparation}`;
        popupImage.src = recette.image;
        popupIngredients.innerHTML = '';
        recette.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `ingredient-${ingredient.nom}`;
            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.appendChild(document.createTextNode(`${ingredient.nom} - ${ingredient.quantite}`));
            li.appendChild(checkbox);
            li.appendChild(label);
            popupIngredients.appendChild(li);
        });
        popupEtapes.innerHTML = '';
        recette.etapes.forEach(etape => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = etape;
            popupEtapes.appendChild(li);
        });
        popup.style.display = 'block';
        popupOverlay.style.display = 'block';
    }
});











       