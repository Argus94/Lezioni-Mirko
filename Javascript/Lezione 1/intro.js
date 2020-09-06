// Per iniziare a studiare javascript innanzitutto bisogna fare una breve introduzione sui concetti di oggetto, proprietà, eventi e metodi.
// In programmazione ogni elemento fisico può essere rappresentato con un oggetto. I programmatori direbbero istanza dell'oggetto.
// Ogni oggetto può essere dotato di: proprietà, eventi, metodi. Queste tre parti, insieme formano un modello funzionante di oggetto.

// Proprietà di un oggetto: La proprietà indica le caratteristiche dell'oggetto. Ogni proprietà possiede un nome ed un valore.
// Un esempio è possibile farlo prendendo due auto, una grigia ed una blu. Le due istanze dell'oggetto auto che andremo a creare condividono la stessa proprietà (ad esempio color), ma hanno due valori differenti (grigio, blu)

//Evento di un oggetto: Quando esso si verifica cambia il valore delle proprietà di un oggetto. Ad esempio, prendendo sempre in considerazione un auto
//nel momento in cui andremo a premere l'acceleratore o il freno si verificherà un evento che altererà il valore della proprietà currentspeed, questi due eventi vengono chiamati accellerate (se l'auto accelera) e brake (se l'auto frena).
//Quindi, quando si verifica un determinato evento, questo può essere utilizzato per attivare una determinata sezione del codice, da qui l'utilità del diagramma di flusso.

//Metodo di un oggetto: I metodi rappresentano le attività che le persone devono svolgere utilizzando un oggetto. I metodi possono leggere o modificare i valori delle proprietà di un oggetto.
//I metodi quindi rappresentano il modo in cui le persone interagiscono con un oggetto. Sono un pò come domande e istruzioni:
// Dicono qualcosa sull'oggetto (leggendo le info nelle sue proprietà) e modificano il valore di una o più proprietà dell'oggetto.
//Quindi il metodo può contenere molte istruzioni, che insieme, descrivono il compito da svolgere.
//Quando si utilizza un metodo infatti, basta imparare a porre la domanda corretta e interpretare le risposte fornire dal metodo.

//Quindi, riassumendo:
//Proprietà = Caratteristiche di un oggetto (La velocità di una macchina da ferma)
//Evento = Quando si verifica, al verificarsi di una certa azione. (Quando il conducente preme l'accelleratore, avviene l'evento accelerate)
//Metodo = Istruzione da eseguire (che richiama il metodo changeSpeed(), che a sua volta incrementa il valore della proprietà currentspeed)

function cambio() {
    document.getElementById("titolo").innerHTML = "Maledetto! L'hai fatto!";
}

//Javascript può mostrare a display i dati in diversi modi:
//Scrivendo dentro un elemento HTML, usando innerHTML.
//Scrivendo dentro un alter box, usando window.alert()
//Scrivendo nella console del browser, usando console.log()
//Scrivendo un risultato di output in HTML, usando document.write()
//PS: Usare document.write() dopo che un documento HTML è stato caricato, cancellerà tutto l'HTML esistente.
//Di seguito alcuni esempi:
function calcolo() {
document.getElementById("risultato").innerHTML = 6 + 6;
}
//Importante! Quando usi le virgolette, come nel primo esempio di javascript, si parla di testo. Quando non usi le virgolette, si parla di confronto fra valori o variabili.