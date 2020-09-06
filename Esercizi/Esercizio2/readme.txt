L'L'esercizio presenta 3 pagine più 1 foglio di stile.
Nel foglio di stile dovrai innanzitutto inserire i colori dello sfondo, del testo, il font-family per i vari testi etc.
Nella cartella stile trovi i colori che dovrai utilizzare.
I font che dovrai utilizzare sono un Anton per gli headings e un Fire sans per i testi.
Bisogna creare una homepage con titolo e immagine centrati, testo a seguire
Creare anche una lista tra titolo e immagine inserendo tra le voci: Home, gallery, profilo, Unsplash
Home si dovrà collegare a index.html.
gallery a gallery.html
profilo a profile.html
unsplash ad http://www.unsplash.com
La lista non deve avere le voci a scorrere ma l'una accanto all'altra, per farlo, creare un id di nome menu e inserire questo:

    #menu {   
        list-style-type:none;  
        margin:0;  
        padding:0;  
        height:30px;
        font-size:0.9em; 
        inserire un background color 
    }  
    #menu li {  
        float:left;  
        height:30px;  
        line-height:30px;  
    }  
    #menu li a {  
        display:block;  
        padding:0 20px;  
        color:#FFF;  <!-- voci menu bianche -->
        text-decoration:none;  
    }  
    #menu li a:hover {    
        text-decoration:none;
        inserire un background color  
    }  

    Non ti preoccupare se ci sono cose che non ti sono chiare, queste sono un'introduzione alla prossima lezione.
    Per quanto riguarda la gallery utilizzeremo un flexbox per mettere le immagini in ordine. Crea una classe per il div che conterrà le immagini, chiamala riquadro.
    Inserisci questo css:
    
    .riquadro {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
.riquadro img {
  margin-right: 10px;
  margin-bottom: 10px;
  width: 20%;

}

Questa è pure una intro alla lezione 7, ti accennerò il flexbox e come funziona.
Creato il div nell'html, metti dentro le immagini presenti nella cartella img.

Nella pagina profilo dovrai inserire la foto profilo presente in img ed una tabella centrata con 4 righe e 6 colonne
Intestazioni di riga: Novice, Intermediate, Skilled, Expert
Intestazioni di colonna: Html5, Css3, Javascript, Python, PhP.
Ricordati l'intestazione vuota nel primo rigo che serve ad ordinare la tabella.

Tra l'immagine profilo e la tabella dovrai inserire un adress con i contatti.