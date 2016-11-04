

/*   x Titre du produit (uniquement caractères alpha avec tiret minimum 5 caractères)
   x Code Barre: 11 caractères numérque au format XXXXX XXXXX X
   + Description: 10 mots avec des caractres alpha numérique avec espace et baslises HTML <b>
   x Prix: AU format: XX.XX€ avec X un nombre
   x Disponibilité: date au format dd/mm/YYYY . Verifier que cette date est dans le future avec la fonction Date()
   + Image: image que de type jpg ou jpeg provenant de Amazon S3. L'image apparait en miniature juste en dessous quand je quitte mon champs
   x Quantité minimum: nombre < 10000
   x Quantité maximum: nombre < 10000 et inférieur au maximum
   x Mot clefs: textarea avec la saisie de mot séparé par des virgule (on mettre un petit compteur de mot a coté)
   x Couleur: forma text au format hexadecimal #FFEE88 ou rgba(255,255,255,0.8)
   + Type de vente: liste déroulante avec pour items "Neuf" , "Occasion", "Dematerielisé", "Autre". Quand je selection Autre (change())
   cela me fait apparaitre un champs en dessous
   x Boutons "Créer cette fiche produit"


   Bonus: Utiliser le plugin Summernote en Jquery pour la description du Produit*/
  /* Bonus 2: Ajouter le champs "Heure de disponibilité" et verifier que le format soit XX:XX et que ce soit une heure valide (comprise entre 00 et 23 pour les heures et 00 à 60 minutes)


 *** Les plugins Jquery ***

 Bonus: Utiliser le plugin Summernote en Jquery pour la description du Produit
 Bonus 2: Intégrer le plugin Bootstrap Slider pour le prix https://github.com/seiyria/bootstrap-slider
 Bonus 3: Intégrer le plugin Jquery Mask piur le codebarre https://igorescobar.github.io/jQuery-Mask-Plugin/
 Bonus 3 : Intégrer le plugin Jquery Datepicker https://eonasdan.github.io/bootstrap-datetimepicker/
 Bonus 4: Intégrer le COlor picker http://www.eyecon.ro/colorpicker/


 Bonus Ultime: Quand je soumet l formulaire et si la description est valide,
                J'affiche la description en dessous en entourant les texte @Compte Twitter par un lien <a> sur Twiter
                et les #hashtag par des liens sur le hashtag de twitter
                Les liens vers des images seront également remplacer par des images responsive
 */

   $(document).ready(function(){


      $('.summernote').summernote();
      // With JQuery
      $("#ex2").slider({});
       $('input').ColorPicker(options);





    $('form button.btn').click(function(){
   // Formulaire Produit
         var produitInput = $('input#produit').val()
         var regexProduit = /^[a-z\-]{5,}$/i

         console.log(produitInput);

         if(regexProduit.test(produitInput)){

           $('input#produit').css('border','1px solid green');
         }
         else{
           $('input#produit').css('border','1px solid red');
         }


   //Formulaire Code Barre
         var codebarreInput = $('input#codebarre').val()
         var regexCodeBarre = /(( *[0-9]{5}){2})( [0-9]{1})/g

         console.log(codebarreInput);

         if(regexCodeBarre.test(codebarreInput)){

           $('input#codebarre').css('border','1px solid green');
         }

         else{
           $('input#codebarre').css('border','1px solid red');
         }
   //Formulaire Qtité min
         var quantiteminInput = $('input#quantitemin').val()
         var regexQuantiteMin = /^[0-9]{1,5}$/

         console.log(quantiteminInput);

         if(parseInt(quantiteminInput)<=10000 && regexQuantiteMin.test(quantiteminInput)){

         $('input#quantitemin').css('border','1px solid green');
         }

         else{
         $('input#quantitemin').css('border','1px solid red');
         }
         //Formulaire Qtité min
               var quantiteminInput = $('input#quantitemin').val()
               var regexQuantiteMin = /^[0-9]{1,5}$/

               console.log(quantiteminInput);

               if(parseInt(quantiteminInput)<=10000 && regexQuantiteMin.test(quantiteminInput)){

               $('input#quantitemin').css('border','1px solid green');
               }

               else{
               $('input#quantitemin').css('border','1px solid red');
               }
 //Formulaire Qtité max
              var quantitemaxInput = $('input#quantitemax').val()
              var regexQuantiteMax = /^[0-9]{1,5}$/

              console.log(quantitemaxInput);

              if(parseInt(quantitemaxInput)<=10000 && regexQuantiteMax.test(quantitemaxInput)){

              $('input#quantitemax').css('border','1px solid green');
              }

              else{
              $('input#quantitemax').css('border','1px solid red');
              }
   //Formulaire Prix
         var prixInput = $('input#prix').val()
         var regexPrix = /([0-9]{1,2}[\,])([0-9]{1,2}[\€])/i

         console.log(prixInput);

         if(regexPrix.test(prixInput)){

         $('input#prix').css('border','1px solid green');
         }
         else{
         $('input#prix').css('border','1px solid red');
         }
   //Formulaire Disponibilité
         var disponibiliteInput = $('input#disponibilite').val()
         var regexDisponibilite = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i

         console.log(disponibiliteInput);

         if(regexDisponibilite.test(disponibiliteInput)){

         $('input#disponibilite').css('border','1px solid green');
         }

         else{
         $('input#disponibilite').css('border','1px solid red');
         }
//Formulaire Mot clef
        var motClefInput = $('textarea#motclef').val()
        var regexMotClef = /[a-z\,]+/igm

               console.log(motClefInput);

               if(regexMotClef.test(motClefInput)){

               $('textarea#motclef').css('border','1px solid green');
               }

               else{
               $('textarea#motclef').css('border','1px solid red');
               }
//Formulaire Couleur
              var couleurInput = $('input#couleur').val()
              var regexCouleur = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g

              console.log(couleurInput);

              if(regexCouleur.test(couleurInput)){

              $('input#couleur').css('border','1px solid green');
              }
              else{
              $('input#couleur').css('border','1px solid red');
              }

       });

       $('textarea#motclef').keyup(function() {

          var nombreCaractere = $(this).val().length;

          // On soustrait le nombre limite au nombre de caractère existant
          var nombreCaractere = 200 - nombreCaractere;

          var nombreMots = jQuery.trim($(this).val()).split(' ').length;
          if($(this).val() === '') {
     	      nombreMots = 0;
          }

          var msg = ' ' + nombreMots + ' mot(s) | ';
          $('#compteur').text(msg);



  });
            $( "select" ).change(function() {

                  console.log('ok');
                  console.log(($(this).val()));
                  if ((($(this).val())) == 'Autre')
                      {

                      $('div#other').show();

                      }
                  else
                      {
                      $('div#other').hide();
                      }

              });//fin de la fonction change
              // With JQuery












});//fermeture de Jquery
