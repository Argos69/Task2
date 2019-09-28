dna = prompt('Введите цепочку ДНК', ); 
 DNAtoRNA = (str) => {
    rna = ''; 
    for(let i=0; i < str.length; i++){ 
        switch(dna[i]){ 
            case 'A': 
                rna+= 'U'; 
                break; 
            case 'T': 
                rna+= 'A'; 
                break; 
            case 'G': 
                rna+= 'C'; 
                break;
            case 'C': 
                rna+= 'G'; 
                break;
            default: 
                rna+= "0";
                break; 
        } 
    }
    return rna;
}; 
console.log(DNAtoRNA(dna));