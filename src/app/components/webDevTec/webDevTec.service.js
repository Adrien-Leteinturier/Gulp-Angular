(function() {
  'use strict';

  angular
      .module('app')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Création de sites responsive design et mobiles',
        'colorTitle':'white',
        'colorParaph': 'white',
        'backGroundColor': '#E15855',
        'description': 'Votre site s’adapte automatiquement au différents supports sur lequel il s’affiche pour offrir une expérience de lecture optimisée. ' + 
          'Un seul site à maintenir, lorsqu’une modification est effectuée, elle est appliquée automatiquement sur tous les supports. ' +
          'Une meilleure visibilité sur le web d’une part puisque Google privilégie les sites responsives et d’autre part car vous vous débarrassez de la gestion des url multiples et des contenus dupliqués.',
        'logo': 'img-responsive.png'
      },
      {
        'title':'Création d’une identité visuelle',
        'colorTitle':'white',
        'colorParaph': 'white',
        'backGroundColor': '#1073BB',
        'description': 'L\'identité visuelle est au cœur des stratégies de communication. Cette "carte d\'identité graphique" véhiculera l\'image de votre l\'entreprise grâce à la création de différents supports visibles (ex : cartes de visites, enveloppes, flyers).'+ 
          ' C\'est un moyen d\'attirer l\'attention de vos futurs clients, mais aussi d\'asseoir votre notoriété et votre crédibilité auprès de vos partenaires commerciaux ou institutionnels. ',
        'logo': 'img-identite.png'
      },
      {
        'title':'Votre site internet visible par tous',
        'colorTitle':'white',
        'colorParaph': 'white',
        'backGroundColor': '#8FC84E',
        'description': 'La structure de votre site sera optimisé pour favoriser son référencement sur les différents moteurs de recherche. ' + 
          'Pour une meilleure optimisation, tous les éléments techniques seront intégrés au code source de votre site internet (éditions de vos métas, description, respects des conventions W3C).' +
          'Ajoutez à cela du contenu unique et votre nom de domaine (.com, .fr,..), votre site internet sera alors visible par tous !',
        'logo': 'img-search.png'
      },
      {
        'title':'Votre stratégie sur les réseaux sociaux',
        'colorTitle':'white',
        'colorParaph': 'white',
        'backGroundColor': '#8997b8',
        'description': 'Grâce à la création de vos comptes sur les différents réseaux sociaux je vous permets d’augmenter votre notoriété et d’améliorer votre image de marque auprès de vos cibles.' +
          ' Je prends en charge la diffusion de contenus auprès de vos cibles. Je rentre en contact avec celles-ci via les réseaux sociaux, Facebook, Twitter, LinkedIn, Instragram.' + 
          ' J’établirai avec vous un plan d’action a moyen ou long terme afin d’atteindre vos objectifs : augmentation du trafic sur votre site Internet, augmentation des ventes, croissance de votre liste de diffusion.',
        'logo': 'img-reseaux.png'
      }               
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
